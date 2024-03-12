<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class TransactionSuccessReceiverNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $TranstionData = [
        'type' => 'courant',
        'montant' => 50000,
        'date' => "2021-10-10",
        'sender_Name'=>'tests',
        'receiver_Name'=>'testr',

    ];

    public function __construct($TranstionData)
    {
        $this->TranstionData = $TranstionData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('🌟 Transaction Effectuee')
            ->greeting('Bonjour,' . $this-> TranstionData['receiver_Name'] . '👋')
            ->line(' Voici les détails de votre compte :')
            ->line('Type de transaction : ' . $this->TranstionData['type'])
            ->line('Montant : ' . $this->TranstionData['montant'] . ' FCFA')
            ->line('Date : ' . $this->TranstionData['date'])
            ->line('Nom de l\'expéditeur : ' . $this->TranstionData['sender_Name'])
            ->line('Nom du destinataire : ' . $this->TranstionData['receiver_Name'])
            ->line('Veuillez garder ces détails en sécurité. 🔐')
            ->action('🌐 Visitez notre site web', url('/'))
            ->line('Si vous avez des questions, n\'hésitez pas à répondre à cet email. Nous sommes là pour vous aider ! 🤝')
            ->salutation('Meilleures salutations, 👋 Équipe CashLink');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
