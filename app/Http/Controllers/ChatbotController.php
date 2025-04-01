<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Inertia\Inertia;

class ChatbotController extends Controller
{
    public function ViewChatbot()
    {
        return inertia('Frontend/Chatbot');
    }

    public function AskChatbot(Request $request)
    {
        $client = new Client();

        try {
            $response = $client->post(env('DEEPSEEK_API_URL'), [
                'headers' => [
                    'Authorization' => 'Bearer ' . env('DEEPSEEK_API_KEY'),
                    'Content-Type'  => 'application/json',
                ],
                'json' => [
                    'model' => 'deepseek/deepseek-chat-v3-0324:free',
                    'messages' => [
                        ['role' => 'system', 'content' => 'You are a helpful assistant.'],
                        ['role' => 'user', 'content' => $request->input('message')],
                    ],
                    'temperature' => 0.7,
                ],
            ]);

            // Decode response
            $responseData = json_decode($response->getBody(), true);
            $aiResponse = $responseData['choices'][0]['message']['content'] ?? 'No response received.';

        } catch (\Exception $e) {
            // Handle API errors
            $aiResponse = "Sorry, I couldn't process your request.";
        }

        return Inertia::render('Frontend/Chatbot', [
            'aiResponse' => $aiResponse,
        ]);
    }
}
