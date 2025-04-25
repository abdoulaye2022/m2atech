<?php
namespace App\Services;

use Brevo\Client\Configuration;
use Brevo\Client\Api\TransactionalEmailsApi;
use Brevo\Client\Model\SendSmtpEmail;
use Brevo\Client\Model\SendSmtpEmailAttachment;
use Exception;
use App\Config\Config;

class MailSender
{
    private const SENDER_NAME = 'M2atech Solutions Inc';
    private const SENDER_EMAIL = 'no-reply@m2atech.com';

    public static function send_mail(string $subject, array $to, string $body, array $attachments = []): bool
    {
        // Configuration de l'API Brevo
        $config = Configuration::getDefaultConfiguration()->setApiKey('api-key', Config::get('BREVO_API_KEY'));

        $apiInstance = new TransactionalEmailsApi(null, $config);

        // Validation des destinataires
        if (empty($to) || !is_array($to)) {
            error_log('Erreur : Destinataires invalides.');
            return false;
        }

        if(count($attachments)) {
            // Préparation des pièces jointes
            $attachmentObjects = [];
            foreach ($attachments as $attachment) {
                if (isset($attachment['content'], $attachment['name'])) {
                    $attachmentObjects[] = new SendSmtpEmailAttachment([
                        'content' => base64_encode($attachment['content']), // Encoder le contenu en base64
                        'name' => $attachment['name'], // Nom de la pièce jointe
                    ]);
                }
            }

            // Création du modèle d'email
            $sendSmtpEmail = new SendSmtpEmail([
                'subject' => $subject,
                'sender' => [
                    'name' => self::SENDER_NAME,
                    'email' => self::SENDER_EMAIL,
                ],
                'to' => $to,
                'htmlContent' => $body,
                'textContent' => strip_tags($body), // Version texte brut du contenu HTML
                'params' => ['bodyMessage' => 'made just for you!'],
                'tracking' => [
                    'opens' => false,
                    'clicks' => false,
                    'unsubscribe' => false,
                ],
                'attachment' => $attachmentObjects, // Ajout des pièces jointes
            ]);
        } else {
            $sendSmtpEmail = new SendSmtpEmail([
                'subject' => $subject,
                'sender' => [
                    'name' => self::SENDER_NAME,
                    'email' => self::SENDER_EMAIL,
                ],
                'to' => $to,
                'htmlContent' => $body,
                'textContent' => strip_tags($body), // Version texte brut du contenu HTML
                'params' => ['bodyMessage' => 'made just for you!'],
                'tracking' => [
                    'opens' => false,
                    'clicks' => false,
                    'unsubscribe' => false,
                ]
            ]);
        }

        try {
            // Envoi de l'email
            $result_mail = $apiInstance->sendTransacEmail($sendSmtpEmail);

            // Vous pouvez déboguer le résultat si nécessaire
            // error_log(print_r($result_mail, true));

            return true;
        } catch (Exception $e) {
            // Log de l'erreur pour débogage
            error_log('Erreur lors de l\'envoi de l\'email : ' . $e->getMessage());
            return false;
        }
    }
}