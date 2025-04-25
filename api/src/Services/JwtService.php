<?php
// src/Services/JwtService.php

namespace App\Services;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Config\Config;

class JwtService
{
    private $secretKey;
    private $algorithm;
    private $expiration;
    private $refreshsecretKey;
    private $refreshalgorithm;
    private $refreshexpiration;

    public function __construct()
    {
        $this->secretKey = Config::get('JWT_SECRET');
        $this->algorithm = Config::get('JWT_ALGORITHM');
        $this->expiration = (int) Config::get('JWT_EXPIRATION');
        $this->refreshsecretKey = Config::get('JWT_REFRESH_SECRET');
        $this->refreshalgorithm = Config::get('JWT_REFRESH_ALGORITHM');
        $this->refreshexpiration = (int) Config::get('JWT_REFRESH_EXPIRATION');
    }

    public function generateToken($employeeId)
    {
        $payload = [
            'iss' => 'votre_application', // Émetteur du token
            'sub' => $employeeId, // ID de l'employé
            'iat' => time(), // Date de création
            'exp' => time() + $this->expiration, // Expiration basée sur la durée configurée
        ];

        return JWT::encode($payload, $this->secretKey, $this->algorithm);
    }

    public function generateRefreshToken($employeeId)
    {
        $payload = [
            'iss' => 'votre_application', // Émetteur du token
            'sub' => $employeeId, // ID de l'employé
            'iat' => time(), // Date de création
            'exp' => time() + $this->refreshexpiration, // Expiration basée sur la durée configurée
        ];

        return JWT::encode($payload, $this->refreshsecretKey, $this->refreshalgorithm);
    }

    public function validateToken($token)
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, $this->algorithm));
            return (array) $decoded;
        } catch (\Exception $e) {
            return null; // Token invalide ou expiré
        }
    }

    public function validateRefreshToken($token)
    {
        try {
            $decoded = JWT::decode($token, new Key($this->refreshsecretKey, $this->refreshalgorithm));
            return (array) $decoded;
        } catch (\Exception $e) {
            return null; // Token invalide ou expiré
        }
    }
}