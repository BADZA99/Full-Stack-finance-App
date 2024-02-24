-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 23 fév. 2024 à 04:02
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `financeapp`
--

-- --------------------------------------------------------

--
-- Structure de la table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `account_type` enum('epargne','courant') NOT NULL,
  `pack` varchar(20) NOT NULL,
  `plafond` enum('1000000','5000000','10000000') NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `max_withdrawal` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `accounts`
--

INSERT INTO `accounts` (`id`, `user_id`, `account_type`, `pack`, `plafond`, `montant`, `max_withdrawal`, `created_at`, `updated_at`) VALUES
(1, 2, 'epargne', 'gold', '10000000', 30000.00, 12000.00, '2024-02-23 01:57:11', '2024-02-23 01:57:11'),
(2, 3, 'courant', 'premuim', '5000000', 20000.00, 5000.00, '2024-02-23 02:02:10', '2024-02-23 02:02:10');

-- --------------------------------------------------------

--
-- Structure de la table `credit_cards`
--

CREATE TABLE `credit_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `account_id` bigint(20) UNSIGNED NOT NULL,
  `numero_carte` varchar(16) NOT NULL,
  `date_expiration` date NOT NULL,
  `type_carte` varchar(20) NOT NULL,
  `cvv` varchar(3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `credit_cards`
--

INSERT INTO `credit_cards` (`id`, `account_id`, `numero_carte`, `date_expiration`, `type_carte`, `cvv`, `created_at`, `updated_at`) VALUES
(1, 1, '35FC267158EE7411', '2029-02-23', 'gold', '729', '2024-02-23 02:09:33', '2024-02-23 02:09:33'),
(2, 2, '00E26B73D2C475F0', '2029-02-23', 'Silver', '355', '2024-02-23 02:14:53', '2024-02-23 02:14:53');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2024_02_22_200851_create_accounts_table', 1),
(5, '2024_02_22_202911_create_credit_cards_table', 1),
(6, '2024_02_22_204045_create_transactions_table', 1),
(7, '2024_02_22_213432_update_accounts_table', 2),
(8, '2024_02_22_213534_update_users_table', 2),
(9, '2024_02_23_002051_update_users_table', 3),
(10, '2024_02_23_002542_add_roles_table', 3),
(11, '2024_02_23_003308_update_users_table', 4),
(12, '2024_02_23_003321_update_accounts_table', 4),
(13, '2024_02_23_004155_add_role_id_column_to_users_table', 5),
(14, '2024_02_23_020104_update_accounts_table', 6),
(15, '2024_02_23_021406_update_credit_cards_table', 7);

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'token', 'e998b0b2c5e13386ef5b673a1002c64a395a78369bd5310745feeec2e73fc02b', '[\"*\"]', NULL, NULL, '2024-02-22 23:19:47', '2024-02-22 23:19:47'),
(2, 'App\\Models\\User', 2, 'token', '079dc05218242768254d7d4bf2680097f4dc330de5b4d0a98b9429d5ce00c4b8', '[\"*\"]', '2024-02-22 23:35:59', NULL, '2024-02-22 23:33:52', '2024-02-22 23:35:59'),
(3, 'App\\Models\\User', 2, 'token', '387f1f20a34a18c94cd31d43534381b2419c6d4179fd138dd8e9cac6f6275285', '[\"*\"]', NULL, NULL, '2024-02-22 23:35:28', '2024-02-22 23:35:28'),
(4, 'App\\Models\\User', 2, 'token', '5dbdc243c2e28459d446c122383aacefb50a50d1ba9c21b760ccaece1c059b50', '[\"*\"]', '2024-02-22 23:52:48', NULL, '2024-02-22 23:39:00', '2024-02-22 23:52:48'),
(5, 'App\\Models\\User', 3, 'token', 'f08818e99ea22e1f544a0ebb0d213107f0ab311b1630743a8ba981bfe471f286', '[\"*\"]', '2024-02-22 23:57:23', NULL, '2024-02-22 23:53:19', '2024-02-22 23:57:23'),
(6, 'App\\Models\\User', 3, 'token', 'b3919a9d946b666c1c31936099ac0592d1e6144a4442775cf36d5b500993b203', '[\"*\"]', '2024-02-22 23:57:42', NULL, '2024-02-22 23:57:34', '2024-02-22 23:57:42');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2024-02-23 00:36:39', '2024-02-23 00:36:39'),
(2, 'client', '2024-02-23 00:36:39', '2024-02-23 00:36:39');

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_account_id` bigint(20) UNSIGNED NOT NULL,
  `receiver_account_id` bigint(20) UNSIGNED NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `type_transaction` enum('depot','retrait') NOT NULL,
  `date_transaction` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `transactions`
--

INSERT INTO `transactions` (`id`, `sender_account_id`, `receiver_account_id`, `montant`, `type_transaction`, `date_transaction`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 7000.00, 'depot', '2024-02-23 00:00:00', '2024-02-23 02:21:52', '2024-02-23 02:21:52');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rib` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `etat` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `rib`, `nom`, `prenom`, `cin`, `telephone`, `email`, `etat`, `password`, `remember_token`, `created_at`, `updated_at`, `role_id`) VALUES
(1, 'esMNh9ZR12', 'Doe', 'John', '123456789', '775432067', 'john@doe.com', 1, 'passer', NULL, NULL, NULL, 1),
(2, '8545320437', 'ndiaye', 'papa', '5080569330', '774327640', 'pndiaye999@gmail.com', 1, '$2y$12$Gkzw6KwYPFAVunNQDmI0G.z9KmBkL2icGMsn6MUz4HmC/asdotQb6', NULL, '2024-02-22 22:35:53', '2024-02-22 22:35:53', 2),
(3, '8324809325', 'ndiaye', 'penda', '4706243331', '774367644', 'penda2002@gmail.com', 1, '$2y$12$mQBBYaolXoWzg3w7iDiPKefDMTY8rEt7iP.47pKSwwlkEwtMSMKdu', NULL, '2024-02-22 22:41:02', '2024-02-22 22:41:02', 2),
(4, '7607637425', 'faye', 'sofie', '8828928615', '775667644', 'sofie333@gmail.com', 1, '$2y$12$qcmVyZpYv.YJiiP7i.GvXerWjEPRq7t6nLLwC4fksBI2AyCQJ7.ta', NULL, '2024-02-22 22:51:21', '2024-02-22 22:51:21', 2),
(6, '8821275088', 'ronaldo', 'cristiano', '7773857080', '772667444', 'cr7@gmail.com', 1, '$2y$12$4eP4DRMSKYz4cogzobmNsuGsnjStExO/xVosgWnHz52lt.mtegG.O', NULL, '2024-02-23 00:40:39', '2024-02-23 00:40:39', 2),
(7, '9938725775', 'kane', 'harry', '1814568876', '771456444', 'hKane@gmail.com', 1, '$2y$12$h1njqVtIX3RJIPILKD7wBOPyDYN1u2qd.FMqnvnVfoiv2uqhEOt1S', NULL, '2024-02-23 01:10:10', '2024-02-23 01:10:10', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts_user_id_foreign` (`user_id`);

--
-- Index pour la table `credit_cards`
--
ALTER TABLE `credit_cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `credit_cards_account_id_foreign` (`account_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_sender_account_id_foreign` (`sender_account_id`),
  ADD KEY `transactions_receiver_account_id_foreign` (`receiver_account_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_rib_unique` (`rib`),
  ADD UNIQUE KEY `users_cin_unique` (`cin`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `credit_cards`
--
ALTER TABLE `credit_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `credit_cards`
--
ALTER TABLE `credit_cards`
  ADD CONSTRAINT `credit_cards_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_receiver_account_id_foreign` FOREIGN KEY (`receiver_account_id`) REFERENCES `accounts` (`id`),
  ADD CONSTRAINT `transactions_sender_account_id_foreign` FOREIGN KEY (`sender_account_id`) REFERENCES `accounts` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
