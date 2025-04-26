<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use App\Services\MailSender;
use App\Config\Config;

class ContactController
{
    // Méthode pour envoyer un message de contact
    public function send_contact(Request $request, Response $response): Response
    {
        // Récupérer les données du formulaire
        $data = $request->getParsedBody();
    
        // Valider les champs
        $errors = [];
        if (empty($data['name'])) {
            $errors['name'] = 'Le nom est requis.';
        }
        if (empty($data['email'])) {
            $errors['email'] = 'L\'adresse e-mail est requise.';
        } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'L\'adresse e-mail est invalide.';
        }
        if (empty($data['subject'])) {
            $errors['subject'] = 'Le sujet est requis.';
        }
        if (empty($data['message'])) {
            $errors['message'] = 'Le message est requis.';
        }
    
        // Si des erreurs sont détectées, retourner une réponse d'erreur
        if (!empty($errors)) {
            $response->getBody()->write(json_encode([
                'status' => 'error',
                'errors' => $errors,
            ]));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400); // Code HTTP 400 pour une mauvaise requête
        }
    
        // Préparer le contenu de l'e-mail
        $emailSubject = "New Contact Form Submission: " . $data['subject'];
        $emailBody = "
        <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>New Contact Message - M2ATech Solutions</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
            </style>
        </head>
        <body style='margin: 0; padding: 0; font-family: 'Poppins', Arial, sans-serif; background-color: #f8f9fa; color: #2A2A2A;'>
            <table role='presentation' width='100%' cellspacing='0' cellpadding='0' border='0' bgcolor='#f8f9fa'>
                <tr>
                    <td align='center' style='padding: 40px 20px;'>
                        <table width='600' cellspacing='0' cellpadding='0' border='0' style='max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);'>
                            <!-- Header with Logo -->
                            <tr>
                                <td style='background-color: #FFFFFF; padding: 30px 20px; text-align: center; border-bottom: 1px solid #f1f1f1;'>
                                    <img src='http://m2acode.com/api.m2atech/logo.png' alt='M2ATech Solutions' style='max-width: 180px; height: auto;'>
                                </td>
                            </tr>
            
                            <!-- Content Header -->
                            <tr>
                                <td style='background-color: #DD6B20; color: #FFFFFF; padding: 20px; text-align: center;'>
                                    <h1 style='font-size: 22px; margin: 0; font-weight: 600;'>New Contact Form Submission</h1>
                                    <p style='margin: 8px 0 0; font-size: 14px; opacity: 0.9;'>You've received a new message from your website</p>
                                </td>
                            </tr>
            
                            <!-- Message Content -->
                            <tr>
                                <td style='padding: 30px; line-height: 1.6;'>
                                    <div style='background-color: #FFF9F5; border-left: 4px solid #DD6B20; padding: 20px; margin-bottom: 25px; border-radius: 0 4px 4px 0;'>
                                        <h2 style='color: #DD6B20; font-size: 18px; margin-top: 0; margin-bottom: 15px;'>Message Details</h2>
                                        
                                        <table cellspacing='0' cellpadding='0' width='100%'>
                                            <tr>
                                                <td width='25%' style='padding: 8px 0; color: #6c757d; font-weight: 500;'>Name:</td>
                                                <td style='padding: 8px 0;'>" . htmlspecialchars($data['name']) . "</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 8px 0; color: #6c757d; font-weight: 500;'>Email:</td>
                                                <td style='padding: 8px 0;'><a href='mailto:" . htmlspecialchars($data['email']) . "' style='color: #DD6B20; text-decoration: none;'>" . htmlspecialchars($data['email']) . "</a></td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 8px 0; color: #6c757d; font-weight: 500;'>Subject:</td>
                                                <td style='padding: 8px 0;'>" . htmlspecialchars($data['subject']) . "</td>
                                            </tr>
                                            <tr>
                                                <td style='padding: 8px 0; color: #6c757d; font-weight: 500; vertical-align: top;'>Message:</td>
                                                <td style='padding: 8px 0;'>" . nl2br(htmlspecialchars($data['message'])) . "</td>
                                            </tr>
                                        </table>
                                    </div>
                                    
                                    <p style='margin: 0; font-size: 14px; color: #6c757d;'>Please respond to this inquiry within 24 hours for best customer service.</p>
                                </td>
                            </tr>
            
                            <!-- Footer -->
                            <tr>
                                <td style='background-color: #2A2A2A; color: #FFFFFF; text-align: center; padding: 20px; font-size: 12px;'>
                                    <p style='margin: 0 0 10px;'>
                                        <a href='https://m2atech.com' style='color: #DD6B20; text-decoration: none; margin: 0 10px;'>Website</a> | 
                                        <a href='tel:+15068506548' style='color: #DD6B20; text-decoration: none; margin: 0 10px;'>Call Us</a> | 
                                        <a href='mailto:contact@m2atech.com' style='color: #DD6B20; text-decoration: none; margin: 0 10px;'>Email</a>
                                    </p>
                                    <p style='margin: 0; opacity: 0.7;'>
                                        © " . date('Y') . " M2ATech Solutions Inc. All rights reserved.<br>
                                        74 Belmont St, Moncton, NB E1C 8W4, Canada
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ";
    
        // Envoyer l'e-mail
        $mailSent = MailSender::send_mail(
            $emailSubject,
            [
                ['name' => 'M2atech Solutions Inc', 'email' => 'contact@m2atech.com']
            ],
            $emailBody
        );
    
        // Vérifier si l'e-mail a été envoyé avec succès
        if (!$mailSent) {
            $response->getBody()->write(json_encode([
                'status' => 'error',
                'message' => 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail.',
            ]));
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500); // Code HTTP 500 pour une erreur serveur
        }
    
        // Retourner une réponse JSON de succès
        $response->getBody()->write(json_encode([
            'status' => true,
            'message' => 'Votre message a été envoyé avec succès.',
        ]));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200); // Code HTTP 200 pour une requête réussie
    }
}