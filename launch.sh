#!/usr/bin/env bash
#
# launch.sh — démarre le frontend (Next.js :3000) et le backend (API PHP/Slim :8000)
#
# Usage:
#   ./launch.sh            # installe les deps si besoin puis lance les 2 serveurs
#   ./launch.sh --logs     # idem, puis affiche les logs en direct (Ctrl+C arrête juste le tail)
#
# Les serveurs tournent en arrière-plan. Pour les arrêter : ./stop.sh

set -euo pipefail

# Racine du projet = dossier de ce script
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$ROOT/app"
API_DIR="$ROOT/api"
RUN_DIR="$ROOT/.run"

FRONT_PORT=3000
API_PORT=8000

mkdir -p "$RUN_DIR"

# --- petites fonctions utilitaires ---
info()  { printf "\033[0;36m›\033[0m %s\n" "$1"; }
ok()    { printf "\033[0;32m✓\033[0m %s\n" "$1"; }
warn()  { printf "\033[0;33m!\033[0m %s\n" "$1"; }
err()   { printf "\033[0;31m✗\033[0m %s\n" "$1" >&2; }

port_in_use() { lsof -ti tcp:"$1" >/dev/null 2>&1; }

# --- pré-vérifications ---
command -v php >/dev/null 2>&1 || { err "php introuvable dans le PATH"; exit 1; }
command -v npm >/dev/null 2>&1 || { err "npm introuvable dans le PATH"; exit 1; }

if port_in_use "$FRONT_PORT"; then
  err "Le port $FRONT_PORT est déjà utilisé. Lance ./stop.sh ou libère-le d'abord."
  exit 1
fi
if port_in_use "$API_PORT"; then
  err "Le port $API_PORT est déjà utilisé. Lance ./stop.sh ou libère-le d'abord."
  exit 1
fi

# --- dépendances frontend ---
if [ ! -d "$APP_DIR/node_modules" ]; then
  info "node_modules absent → npm install (app)…"
  ( cd "$APP_DIR" && npm install )
  ok "Dépendances frontend installées"
fi

# --- dépendances backend ---
if [ ! -d "$API_DIR/vendor" ]; then
  if command -v composer >/dev/null 2>&1; then
    info "vendor absent → composer install (api)…"
    ( cd "$API_DIR" && composer install )
    ok "Dépendances backend installées"
  else
    err "vendor/ absent et composer introuvable. Installe Composer puis relance, ou fais 'composer install' dans api/."
    exit 1
  fi
fi

# --- .env de l'API (sinon Dotenv->load() plante au boot) ---
if [ ! -f "$API_DIR/.env" ]; then
  warn "api/.env absent → création d'un fichier vide (remplis-le avec tes vars DB/Brevo/etc.)"
  printf "# Variables d'environnement de l'API M2aTech\n# Renseigne ici DB, Brevo, etc.\n" > "$API_DIR/.env"
fi

# --- démarrage backend (PHP built-in server avec index.php comme routeur Slim) ---
info "Démarrage de l'API sur http://localhost:$API_PORT …"
( cd "$ROOT" && php -S localhost:"$API_PORT" -t api/public api/public/index.php ) \
  > "$RUN_DIR/api.log" 2>&1 &
echo $! > "$RUN_DIR/api.pid"
ok "API lancée (PID $(cat "$RUN_DIR/api.pid")) — logs: .run/api.log"

# --- démarrage frontend ---
info "Démarrage du frontend sur http://localhost:$FRONT_PORT …"
( cd "$APP_DIR" && npm run dev -- -p "$FRONT_PORT" ) \
  > "$RUN_DIR/app.log" 2>&1 &
echo $! > "$RUN_DIR/app.pid"
ok "Frontend lancé (PID $(cat "$RUN_DIR/app.pid")) — logs: .run/app.log"

echo
ok "C'est parti !"
echo "  • Frontend : http://localhost:$FRONT_PORT"
echo "  • API      : http://localhost:$API_PORT"
echo "  • Logs     : tail -f .run/app.log   |   tail -f .run/api.log"
echo "  • Arrêter  : ./stop.sh"

if [ "${1:-}" = "--logs" ]; then
  echo
  info "Affichage des logs (Ctrl+C pour quitter le tail, les serveurs continuent)…"
  tail -f "$RUN_DIR/app.log" "$RUN_DIR/api.log"
fi
