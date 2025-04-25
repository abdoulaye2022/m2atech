<?php
// src/Middleware/JwtMiddleware.php

namespace App\Middleware;

use App\Services\JwtService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use Psr\Http\Message\ResponseFactoryInterface;

class JwtMiddleware
{
    private JwtService $jwtService;
    private ResponseFactoryInterface $responseFactory;

    public function __construct(ResponseFactoryInterface $responseFactory)
    {
        // Instancier JwtService manuellement
        $this->jwtService = new JwtService();
        $this->responseFactory = $responseFactory;
    }

    public function __invoke(Request $request, RequestHandler $handler): Response
    {
        // Récupérer le token depuis l'en-tête Authorization
        $authHeader = $request->getHeaderLine('Authorization');

        // Vérifier si le token est présent et au bon format
        if (empty($authHeader) || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return $this->createErrorResponse('Token manquant ou invalide', 401);
        }

        $token = $matches[1];

        // Valider le token
        $payload = $this->jwtService->validateToken($token);
        if (!$payload) {
            return $this->createErrorResponse('Token invalide ou expiré', 401);
        }

        $request = $request->withAttribute('id', $payload['sub']->id);

        // Passer la requête au gestionnaire suivant
        return $handler->handle($request);
    }

    private function createErrorResponse(string $message, int $statusCode): Response
    {
        $response = $this->responseFactory->createResponse($statusCode);
        $response->getBody()->write(json_encode(['error' => $message]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}