<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SignupSuccessNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public $accountData=[
        'user_id' => 1,
        'account_type' => 'courant',
        'pack' => 'gold',
        'plafond' => 100000,
        'montant' => 50000,
        'max_withdrawal' => 10000,
    ];
    public $user_name;
    public $user_rib;
    public $user_CreditCard_Number;
public function __construct($accountData, $user_name,$user_rib,$user_CreditCard_Number)
    {
        $this->accountData = $accountData;
        $this->user_name = $user_name;
        $this->user_rib = $user_rib;
        $this->user_CreditCard_Number = $user_CreditCard_Number;
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
        ->subject('🌟 Bienvenue chez CashLink')
        ->greeting('Bonjour, ' . $this->user_name . ' 👋')
        ->line('Merci de vous être inscrit à notre application. Voici les détails de votre compte :')
        ->line('ID utilisateur : ' . $this->accountData['user_id'])
        ->line('Type de compte : ' . $this->accountData['account_type'])
        ->line('Pack : ' . $this->accountData['pack'])
        ->line('Plafond : ' . ($this->accountData['plafond'] == 0 ? 'illimité' : $this->accountData['plafond'] . ' FCFA') )
        ->line('Montant : ' . $this->accountData['montant'] . ' FCFA')
        ->line('Votre RIB : ' . $this->user_rib)
        ->line('Numéro de carte Casslink : ' . $this->user_CreditCard_Number)
        ->line('Tarif mensuel : ' . $this->accountData['max_withdrawal'] . ' FCFA')
        ->line('Veuillez garder ces détails en sécurité. 🔐')
        ->action('🌐 Visitez notre site web', url('http://localhost:3000'))
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
