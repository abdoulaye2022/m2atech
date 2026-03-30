const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

let scriptLoaded = false;
let scriptLoading = null;

function loadScript() {
  if (scriptLoaded) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      resolve();
    };
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });

  return scriptLoading;
}

export function useRecaptcha() {
  const executeRecaptcha = async (action) => {
    if (!SITE_KEY) return '';

    await loadScript();
    return new Promise((resolve, reject) => {
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise
          .execute(SITE_KEY, { action })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  return { executeRecaptcha };
}
