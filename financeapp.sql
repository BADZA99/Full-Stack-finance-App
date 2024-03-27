-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 27 mars 2024 à 16:31
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
  `pack` enum('gold','premium','standard','Nopack') NOT NULL,
  `plafond` bigint(20) NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `max_withdrawal` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `accounts`
--

INSERT INTO `accounts` (`id`, `user_id`, `account_type`, `pack`, `plafond`, `montant`, `max_withdrawal`, `created_at`, `updated_at`) VALUES
(2, 3, 'courant', 'Nopack', 0, 20000.00, 5000.00, '2024-02-23 02:02:10', '2024-02-23 02:02:10'),
(40, 92, 'courant', 'gold', 10000000, 7430.00, 12000.00, '2024-03-05 21:43:32', '2024-03-12 16:06:53'),
(41, 93, 'courant', 'gold', 10000000, 24119.00, 12000.00, '2024-03-05 22:47:35', '2024-03-27 14:11:32'),
(42, 94, 'courant', 'standard', 1000000, 132600.00, 3000.00, '2024-03-06 01:01:35', '2024-03-27 14:11:33'),
(43, 96, 'courant', 'premium', 5000000, 5000.00, 5000.00, '2024-03-12 00:16:10', '2024-03-12 00:16:10'),
(44, 97, 'courant', 'premium', 5000000, 254170.00, 5000.00, '2024-03-12 00:22:51', '2024-03-12 17:57:03'),
(45, 98, 'courant', 'premium', 5000000, 4488400.00, 5000.00, '2024-03-12 00:27:49', '2024-03-12 18:39:47'),
(46, 99, 'epargne', 'Nopack', 100000000, 0.00, 0.00, '2024-03-12 15:16:32', '2024-03-12 15:16:32'),
(47, 100, 'courant', 'premium', 5000000, 130481.00, 5000.00, '2024-03-12 18:06:53', '2024-03-12 19:19:26'),
(66, 122, 'epargne', 'Nopack', 100000000, 1430000.00, 0.00, '2024-03-27 15:07:35', '2024-03-27 15:27:41'),
(67, 123, 'epargne', 'Nopack', 100000000, 30000.00, 0.00, '2024-03-27 15:09:16', '2024-03-27 15:27:41');

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
(2, 2, '00E26B73D2C475F0', '2029-02-23', 'Silver', '355', '2024-02-23 02:14:53', '2024-02-23 02:14:53'),
(3, 40, '50FBF1A67221743C', '2029-03-05', 'gold', '485', '2024-03-05 21:43:35', '2024-03-05 21:43:35'),
(4, 41, '3E5FC4175B92CC33', '2029-03-05', 'gold', '187', '2024-03-05 22:47:39', '2024-03-05 22:47:39'),
(5, 42, 'FA16158A374E7D71', '2029-03-06', 'standard', '298', '2024-03-06 01:01:39', '2024-03-06 01:01:39'),
(6, 43, '6504248002399468', '2029-03-12', 'premium', '131', '2024-03-12 00:16:13', '2024-03-12 00:16:13'),
(7, 44, '9233722100596479', '2029-03-12', 'premium', '145', '2024-03-12 00:22:54', '2024-03-12 00:22:54'),
(8, 45, '3575553809840531', '2029-03-12', 'premium', '181', '2024-03-12 00:27:52', '2024-03-12 00:27:52'),
(9, 46, '1850963153152086', '2029-03-12', 'Nopack', '519', '2024-03-12 15:16:37', '2024-03-12 15:16:37'),
(10, 47, '4274787563491419', '2029-03-12', 'premium', '153', '2024-03-12 18:06:57', '2024-03-12 18:06:57'),
(34, 66, '1438737468614799', '2029-03-27', 'Nopack', '915', '2024-03-27 15:07:36', '2024-03-27 15:07:36'),
(35, 67, '9354365772866832', '2029-03-27', 'Nopack', '146', '2024-03-27 15:09:17', '2024-03-27 15:09:17');

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
(15, '2024_02_23_021406_update_credit_cards_table', 7),
(16, '2024_02_27_235852_update_accounts_table', 8),
(17, '2024_02_28_005252_update_account_table', 9);

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
(6, 'App\\Models\\User', 3, 'token', 'b3919a9d946b666c1c31936099ac0592d1e6144a4442775cf36d5b500993b203', '[\"*\"]', '2024-02-22 23:57:42', NULL, '2024-02-22 23:57:34', '2024-02-22 23:57:42'),
(7, 'App\\Models\\User', 3, 'token', 'f116eed5af32d8e142e1f1dd9a3599f48a097e20f9e356ff78f640ef35f0d68a', '[\"*\"]', NULL, NULL, '2024-02-28 01:44:42', '2024-02-28 01:44:42'),
(8, 'App\\Models\\User', 3, 'token', '8fae9663693597c007960d155bc9d7bc2b56acd0b269f34b2a5bf60cd4bc61e4', '[\"*\"]', '2024-02-28 01:45:06', NULL, '2024-02-28 01:44:51', '2024-02-28 01:45:06'),
(9, 'App\\Models\\User', 3, 'token', 'f5822bb8871ee3ba069da7ae0dce6017816c7d92acc6f1bec6bb240302b439d3', '[\"*\"]', NULL, NULL, '2024-02-28 01:54:44', '2024-02-28 01:54:44'),
(10, 'App\\Models\\User', 3, 'token', '54a9c04af97802db84e8cbd1af2f496247d1b0833cb8e93d59bb73d4392b2ec1', '[\"*\"]', NULL, NULL, '2024-02-28 01:58:22', '2024-02-28 01:58:22'),
(11, 'App\\Models\\User', 3, 'token', 'df420ff8f75bcf3307d8f2068fe313188519c79a4c0a71f61f744a38eb2fd045', '[\"*\"]', NULL, NULL, '2024-02-28 01:59:03', '2024-02-28 01:59:03'),
(12, 'App\\Models\\User', 3, 'token', '7646881ba52d40aa95e2041c3b2fdd829038b7b7144f912340aa5f331dac3213', '[\"*\"]', '2024-02-28 02:18:52', NULL, '2024-02-28 01:59:19', '2024-02-28 02:18:52'),
(13, 'App\\Models\\User', 3, 'token', 'c1d5c601aab2950b29d867c6dd321ec7fb9dcaac8fd25c5e58106b091bf045b5', '[\"*\"]', '2024-02-28 02:19:05', NULL, '2024-02-28 02:19:03', '2024-02-28 02:19:05'),
(14, 'App\\Models\\User', 3, 'token', 'f0514fac5ee7c2a485f8198ecb436480e2662f0d319c2fb6e135fb092dd390bc', '[\"*\"]', '2024-02-28 02:24:01', NULL, '2024-02-28 02:21:08', '2024-02-28 02:24:01'),
(15, 'App\\Models\\User', 3, 'token', '5db9b7c5e581155e8fa3112014bf54d85d4e3b98e96a6d6832cd1dac20b431fe', '[\"*\"]', '2024-02-28 02:32:11', NULL, '2024-02-28 02:24:25', '2024-02-28 02:32:11'),
(16, 'App\\Models\\User', 3, 'token', 'f708f763f1379243938c60a0e20bf73f071454d8d9d67d3c222a80278b01cb79', '[\"*\"]', '2024-02-28 02:32:24', NULL, '2024-02-28 02:32:19', '2024-02-28 02:32:24'),
(17, 'App\\Models\\User', 3, 'token', '511ba4d9035f3e5b6989705a99182e04498fe2a546f3039a89fbfaa6a1c159eb', '[\"*\"]', '2024-02-28 02:37:30', NULL, '2024-02-28 02:36:04', '2024-02-28 02:37:30'),
(18, 'App\\Models\\User', 3, 'token', '67754e1f943274cd938f72cc1040a784a65a60b436229c0a576e29ed517ee97b', '[\"*\"]', '2024-02-28 02:38:19', NULL, '2024-02-28 02:37:48', '2024-02-28 02:38:19'),
(19, 'App\\Models\\User', 3, 'token', '4aadea1db39b377bf224f19b7329aed88e20d67f10800e0bf1cec65d69828436', '[\"*\"]', '2024-02-28 02:40:23', NULL, '2024-02-28 02:38:26', '2024-02-28 02:40:23'),
(20, 'App\\Models\\User', 3, 'token', '98884571cd100f7d6dba19f100b1ea05979f80491a05b8f294e6736018e99ef3', '[\"*\"]', '2024-02-28 02:41:02', NULL, '2024-02-28 02:40:32', '2024-02-28 02:41:02'),
(21, 'App\\Models\\User', 3, 'token', 'ad0e8be7cefee7bae5682088bbdf9ae773e2d1af8d74ef88a57515165d30d6a1', '[\"*\"]', '2024-02-28 02:44:26', NULL, '2024-02-28 02:41:46', '2024-02-28 02:44:26'),
(22, 'App\\Models\\User', 3, 'token', '511aa109344a7f52cfda6ef7937fee93e98c62e5dbd6129d69f0bdfeaf1a3583', '[\"*\"]', '2024-02-28 02:44:39', NULL, '2024-02-28 02:44:32', '2024-02-28 02:44:39'),
(23, 'App\\Models\\User', 3, 'token', '282229d2385f60855ff8612a96bf9a989709946be3a7c6ed89e2c7decb6a9ea1', '[\"*\"]', '2024-02-28 02:51:17', NULL, '2024-02-28 02:48:34', '2024-02-28 02:51:17'),
(24, 'App\\Models\\User', 3, 'token', '87533cb0b51f432959053d14bb918778313c75452256c4681f27e9080886958e', '[\"*\"]', '2024-02-28 02:52:29', NULL, '2024-02-28 02:51:23', '2024-02-28 02:52:29'),
(25, 'App\\Models\\User', 3, 'token', '8c6a2d9b82e392b25b9bd87b23bc335e85ae7a8e5dd9eb76773d6263f0aba79e', '[\"*\"]', '2024-02-28 02:53:31', NULL, '2024-02-28 02:52:37', '2024-02-28 02:53:31'),
(26, 'App\\Models\\User', 3, 'token', '6476841beda444caff72892751d0ad25996bab345facc186b78ec4d88644d72f', '[\"*\"]', '2024-02-28 02:57:12', NULL, '2024-02-28 02:56:39', '2024-02-28 02:57:12'),
(27, 'App\\Models\\User', 3, 'token', '598852916bfb58fbdbe9ee5491242e259891a71985ac3d7595f3b57bff3acba5', '[\"*\"]', '2024-02-28 02:59:11', NULL, '2024-02-28 02:59:03', '2024-02-28 02:59:11'),
(28, 'App\\Models\\User', 78, 'token', 'f5df074f985452130b42abd159d7b33c8994482458aaf8d2717e9c6297afdce0', '[\"*\"]', '2024-03-02 03:29:51', NULL, '2024-03-02 03:28:34', '2024-03-02 03:29:51'),
(29, 'App\\Models\\User', 3, 'token', 'fce672580bec26c42b396586f1aac528e04fb91586efdc147b2673394d813e4d', '[\"*\"]', '2024-03-02 03:32:31', NULL, '2024-03-02 03:30:38', '2024-03-02 03:32:31'),
(30, 'App\\Models\\User', 78, 'token', '73c0edbd4e97ab99adb700caddd868edb9cbca38b49d9441173ffbbb2a4c8627', '[\"*\"]', '2024-03-02 03:34:15', NULL, '2024-03-02 03:33:39', '2024-03-02 03:34:15'),
(31, 'App\\Models\\User', 78, 'token', '1b3e5ad7c053f9183ae366f291142fda699b27c0e18b2aa5c7b056609bbbc728', '[\"*\"]', '2024-03-02 03:34:34', NULL, '2024-03-02 03:34:29', '2024-03-02 03:34:34'),
(32, 'App\\Models\\User', 78, 'token', '369fc2e73e974aef8afcf026cc30b466859b447206b73f0755bd221e92a4545d', '[\"*\"]', '2024-03-03 20:49:08', NULL, '2024-03-03 20:48:37', '2024-03-03 20:49:08'),
(33, 'App\\Models\\User', 78, 'token', '748d6e3bb55b516c6f8feec597964deb9bd3a1a105bb34046ef2169cd55d0944', '[\"*\"]', '2024-03-03 20:51:02', NULL, '2024-03-03 20:50:46', '2024-03-03 20:51:02'),
(34, 'App\\Models\\User', 78, 'token', 'bd92d9260eb3b5008c352246d0f56a606adc1324e8edcffad11f8b4b6b9d74d8', '[\"*\"]', '2024-03-03 20:51:50', NULL, '2024-03-03 20:51:11', '2024-03-03 20:51:50'),
(35, 'App\\Models\\User', 3, 'token', '4306c562fbd217bb7eee00f6d7ac1bfa298831913f9542c26770b08e4afdb89e', '[\"*\"]', '2024-03-03 21:07:32', NULL, '2024-03-03 20:52:17', '2024-03-03 21:07:32'),
(36, 'App\\Models\\User', 3, 'token', 'e43d8f766f96c64b3a9019d57986611fed1205b61b032613ac396a136c1e71a4', '[\"*\"]', '2024-03-03 22:29:11', NULL, '2024-03-03 21:11:29', '2024-03-03 22:29:11'),
(37, 'App\\Models\\User', 3, 'token', '01f3e9812ddcba2a74f298deb73239877d0aa649c15905385143098058169ee6', '[\"*\"]', '2024-03-05 20:26:01', NULL, '2024-03-05 20:21:03', '2024-03-05 20:26:01'),
(38, 'App\\Models\\User', 3, 'token', 'e1e58141a81a1d785909b7585ccae0e5a210ae5555b3476162b6097658691893', '[\"*\"]', '2024-03-05 20:35:21', NULL, '2024-03-05 20:26:09', '2024-03-05 20:35:21'),
(39, 'App\\Models\\User', 3, 'token', '0286fd267526e2298ae6ba0e76b523d341fb482e463ecf5e04c8dab07f2bed2a', '[\"*\"]', '2024-03-05 20:52:39', NULL, '2024-03-05 20:35:31', '2024-03-05 20:52:39'),
(40, 'App\\Models\\User', 3, 'token', 'd3c80c6df9d073ec0643e7426fc89abcf1db346038693f396ecbac08e7994ec3', '[\"*\"]', '2024-03-05 21:08:44', NULL, '2024-03-05 20:53:31', '2024-03-05 21:08:44'),
(41, 'App\\Models\\User', 3, 'token', 'cc6cf4548e4fb15f737a01173277f26af21eeb70cbbbb8123266e50cddeb4577', '[\"*\"]', '2024-03-05 21:25:56', NULL, '2024-03-05 21:08:57', '2024-03-05 21:25:56'),
(42, 'App\\Models\\User', 2, 'token', 'ceb84aa2bd6e9be5d9cbc46163ee722a436ea954aa3589e2b9b0f2b516e41abd', '[\"*\"]', '2024-03-05 21:37:06', NULL, '2024-03-05 21:26:20', '2024-03-05 21:37:06'),
(43, 'App\\Models\\User', 92, 'token', '1877f5d898c2a3e22d7945a0e4dbc3f0e69195449cf956558101326284b6a90d', '[\"*\"]', '2024-03-05 21:45:04', NULL, '2024-03-05 21:44:33', '2024-03-05 21:45:04'),
(44, 'App\\Models\\User', 92, 'token', 'c8189a047122deed321e53da9dbdb607ce6c2f43630a6a501248b56de67b5d14', '[\"*\"]', '2024-03-05 22:09:00', NULL, '2024-03-05 21:45:08', '2024-03-05 22:09:00'),
(45, 'App\\Models\\User', 92, 'token', '2901ffc3cbd39781110cd2e29919c0af43ed196554f0984bcffe3b0131405d59', '[\"*\"]', '2024-03-05 22:18:36', NULL, '2024-03-05 22:09:24', '2024-03-05 22:18:36'),
(46, 'App\\Models\\User', 92, 'token', '4b50360e19108031eb724c6ffb9777cf3eb9ee51b1a8801afbc4826cdf9e58a2', '[\"*\"]', '2024-03-05 22:45:03', NULL, '2024-03-05 22:20:21', '2024-03-05 22:45:03'),
(47, 'App\\Models\\User', 93, 'token', '50377eae86b398904a83ce6bbd0da0aa1da2b3c998139396ba1a9d3d1bb45fb4', '[\"*\"]', '2024-03-06 00:48:52', NULL, '2024-03-05 22:48:42', '2024-03-06 00:48:52'),
(48, 'App\\Models\\User', 93, 'token', '14b355971927b432c8a6251c681bd23bc013cab528865eaed75a0f8d6de9d124', '[\"*\"]', '2024-03-06 00:59:43', NULL, '2024-03-06 00:49:01', '2024-03-06 00:59:43'),
(49, 'App\\Models\\User', 94, 'token', 'eb194bb75f8fb26effb966dbe795c6443bef5c47240df6bab380762b787a6b8d', '[\"*\"]', '2024-03-06 01:46:00', NULL, '2024-03-06 01:03:47', '2024-03-06 01:46:00'),
(50, 'App\\Models\\User', 3, 'token', '9f9afe7b858d2681410b717f53f792863795e568671b4bbfec8c12f0fc4e8446', '[\"*\"]', '2024-03-12 00:15:21', NULL, '2024-03-12 00:14:01', '2024-03-12 00:15:21'),
(51, 'App\\Models\\User', 98, 'token', '9a33495bf2f891faeaec6b44c72bb26df4dcbed758b42783e80c64cbfe34e1ad', '[\"*\"]', '2024-03-12 01:33:49', NULL, '2024-03-12 00:30:00', '2024-03-12 01:33:49'),
(52, 'App\\Models\\User', 97, 'token', '67446a054b816fb2b076a5847954d0386358d8c59b90c347ba3ce124be497dd6', '[\"*\"]', '2024-03-12 02:06:04', NULL, '2024-03-12 01:34:03', '2024-03-12 02:06:04'),
(53, 'App\\Models\\User', 1, 'token', '643a2f319fead22ac41f2823535ae9c304467271250f675b99200c2b34988d0c', '[\"*\"]', '2024-03-12 02:17:47', NULL, '2024-03-12 02:07:09', '2024-03-12 02:17:47'),
(54, 'App\\Models\\User', 3, 'token', '23092f7198ff2a6cada5f08d0b82780e84cf45f05de0ffb9239664f2820443c7', '[\"*\"]', '2024-03-12 02:25:41', NULL, '2024-03-12 02:18:35', '2024-03-12 02:25:41'),
(55, 'App\\Models\\User', 1, 'token', '263f313228b67d5e1a8a6b167820ea25762114d6b214eefa6ab8c3bb142b0312', '[\"*\"]', '2024-03-12 02:28:28', NULL, '2024-03-12 02:26:01', '2024-03-12 02:28:28'),
(56, 'App\\Models\\User', 3, 'token', 'f2520bb76e6185ee16c2f987524290b7ab0d5f4c23becaba0dad88d4ab816f5f', '[\"*\"]', '2024-03-12 02:40:54', NULL, '2024-03-12 02:28:44', '2024-03-12 02:40:54'),
(57, 'App\\Models\\User', 3, 'token', 'df601edc1076ae599b66404c0942c951b36846a148f03f496a2b57f01c18b835', '[\"*\"]', '2024-03-12 15:12:12', NULL, '2024-03-12 15:02:49', '2024-03-12 15:12:12'),
(58, 'App\\Models\\User', 99, 'token', '4cfbe26734327f90b3bc57d1131afce1fa83394fc6f16b387f6780ad9c1b1283', '[\"*\"]', '2024-03-12 15:52:40', NULL, '2024-03-12 15:17:18', '2024-03-12 15:52:40'),
(59, 'App\\Models\\User', 3, 'token', 'a08fc10c353aea9ad2370a438e512f78d308a0007ee06c2b111fb7d58456c68b', '[\"*\"]', '2024-03-12 15:53:21', NULL, '2024-03-12 15:52:53', '2024-03-12 15:53:21'),
(60, 'App\\Models\\User', 2, 'token', 'd71fb6b67dab2932e7ed005e92455e7278d9cd42faf6fce645989d0e2e4e341c', '[\"*\"]', '2024-03-12 15:55:17', NULL, '2024-03-12 15:54:13', '2024-03-12 15:55:17'),
(61, 'App\\Models\\User', 92, 'token', '04ffca33a9d6c9969975cebfeddff644469b17956b0cd6ce18ea63125ef68cfe', '[\"*\"]', '2024-03-12 16:09:19', NULL, '2024-03-12 15:55:25', '2024-03-12 16:09:19'),
(62, 'App\\Models\\User', 97, 'token', '211712d9b77a43f0e960d6d62a85b22b955de1662549ddbda502545f8cc666cb', '[\"*\"]', '2024-03-12 16:24:35', NULL, '2024-03-12 16:10:26', '2024-03-12 16:24:35'),
(63, 'App\\Models\\User', 1, 'token', 'a5d5a8c74f0621189653a5f9f7aabf5bd5dd69070cd98bbcc93a53c605930616', '[\"*\"]', '2024-03-12 17:27:46', NULL, '2024-03-12 16:24:46', '2024-03-12 17:27:46'),
(64, 'App\\Models\\User', 92, 'token', '048000b7fb504c18e10074bbc5e874fa3d4636b5cd8208135298fcb3add5b3d8', '[\"*\"]', '2024-03-12 17:32:29', NULL, '2024-03-12 17:28:18', '2024-03-12 17:32:29'),
(65, 'App\\Models\\User', 1, 'token', '98eae22e3767b058ef418052c27804f6525bdfddb75d0acce0dd058a70130b42', '[\"*\"]', '2024-03-12 17:33:11', NULL, '2024-03-12 17:32:43', '2024-03-12 17:33:11'),
(66, 'App\\Models\\User', 92, 'token', 'e7da51cf195d40ad02b6cc4f4a86b8c315efa36676c0dde45be5a13592bfaf77', '[\"*\"]', '2024-03-12 17:37:45', NULL, '2024-03-12 17:33:35', '2024-03-12 17:37:45'),
(67, 'App\\Models\\User', 1, 'token', 'd858729c8a7ac2585199c7f8a8eadc731615a2ed1e531d366057f91cf41683f1', '[\"*\"]', '2024-03-12 17:38:24', NULL, '2024-03-12 17:37:58', '2024-03-12 17:38:24'),
(68, 'App\\Models\\User', 92, 'token', '162a3ec22797b528eaf77f2e0b708291fa915e5df41ebc5394fc1588a4f4cf3a', '[\"*\"]', '2024-03-12 17:40:34', NULL, '2024-03-12 17:38:29', '2024-03-12 17:40:34'),
(69, 'App\\Models\\User', 98, 'token', 'de9ad0c981116df5350131c72dd3e968b0082d08d915a16c7ba0b68c3014d16e', '[\"*\"]', '2024-03-12 17:46:31', NULL, '2024-03-12 17:42:05', '2024-03-12 17:46:31'),
(70, 'App\\Models\\User', 97, 'token', '308c94c6e44213be16243256114cca6dd657a8eabf4d5a4718bb4a271cde11c5', '[\"*\"]', '2024-03-12 17:51:10', NULL, '2024-03-12 17:47:32', '2024-03-12 17:51:10'),
(71, 'App\\Models\\User', 98, 'token', '7fc9cb58b00cf9a8a45660480702326125d3c7dbdcf89f43fdb3daa1d7e5c641', '[\"*\"]', '2024-03-12 17:52:27', NULL, '2024-03-12 17:51:43', '2024-03-12 17:52:27'),
(72, 'App\\Models\\User', 94, 'token', 'cbb54e0e482eb9a11b032955389660ee1fa81e213d14f92aca82bfac78eab2b6', '[\"*\"]', '2024-03-12 18:00:22', NULL, '2024-03-12 17:52:34', '2024-03-12 18:00:22'),
(73, 'App\\Models\\User', 100, 'token', 'a2760c4d6e0712cc88ba28531ebac6ada195c3cb30cab3aec4cb236ce41ebfb7', '[\"*\"]', '2024-03-12 18:08:25', NULL, '2024-03-12 18:08:24', '2024-03-12 18:08:25'),
(74, 'App\\Models\\User', 100, 'token', 'd2728cedde44d2eb66cdee487735b02e7576d2f276798d0cd41631a5306ecc73', '[\"*\"]', '2024-03-12 18:52:32', NULL, '2024-03-12 18:08:25', '2024-03-12 18:52:32'),
(75, 'App\\Models\\User', 93, 'token', '1465e1c3036ea503775abff04b6cf3f839222ee34f7d9a8f18d3f5f2a3e1f2d1', '[\"*\"]', '2024-03-12 19:23:19', NULL, '2024-03-12 18:54:41', '2024-03-12 19:23:19'),
(76, 'App\\Models\\User', 100, 'token', '70d461acea7f0bd1aaa7682e5d89ada75fc57b9221755f37473f0c0fb2cb7ffe', '[\"*\"]', '2024-03-12 19:23:58', NULL, '2024-03-12 19:23:32', '2024-03-12 19:23:58'),
(77, 'App\\Models\\User', 1, 'token', '2df6a2a1e1969f97eb68af162f879380c1e56d61c07beabe07f579b7c7f5306e', '[\"*\"]', '2024-03-12 19:48:41', NULL, '2024-03-12 19:24:09', '2024-03-12 19:48:41'),
(78, 'App\\Models\\User', 100, 'token', '10bf1347e28066a5bd50a48b7960ca31c649a1e33b1a9e342db4a468bfb6e204', '[\"*\"]', '2024-03-12 19:49:13', NULL, '2024-03-12 19:48:52', '2024-03-12 19:49:13'),
(79, 'App\\Models\\User', 1, 'token', '6db9ceb5cf86eca5ad674002fc59a7fece384dccfa45c4ddb97ce5becfc28d88', '[\"*\"]', '2024-03-12 19:49:39', NULL, '2024-03-12 19:49:23', '2024-03-12 19:49:39'),
(80, 'App\\Models\\User', 100, 'token', 'dc12afaf183a541f6f77f0f8e11d5c9a759b384e2ff9122c2db0fccffd2b4119', '[\"*\"]', '2024-03-12 19:50:10', NULL, '2024-03-12 19:49:47', '2024-03-12 19:50:10'),
(81, 'App\\Models\\User', 1, 'token', '3b52de5f97a6bc63e237479c76a0866ca89eac42e7f20be2f63f9486a111423c', '[\"*\"]', '2024-03-12 19:50:18', NULL, '2024-03-12 19:50:18', '2024-03-12 19:50:18'),
(82, 'App\\Models\\User', 117, 'token', 'f0e7fba7f9e038f9a4103507a926887a6de0529360d83ec378b25a801dc67776', '[\"*\"]', '2024-03-18 02:10:59', NULL, '2024-03-18 02:05:21', '2024-03-18 02:10:59'),
(83, 'App\\Models\\User', 116, 'token', 'fa6d8200847860f6f63c5193a7b6a351e09ef54a308939ef4a8fde0d6068e25e', '[\"*\"]', '2024-03-18 02:11:53', NULL, '2024-03-18 02:11:13', '2024-03-18 02:11:53'),
(84, 'App\\Models\\User', 1, 'token', '524eeb2f152719a7cda01f7c6a52018fd39150337775d59af44ec669b45da069', '[\"*\"]', '2024-03-18 02:13:50', NULL, '2024-03-18 02:12:14', '2024-03-18 02:13:50'),
(85, 'App\\Models\\User', 1, 'token', '50600138e4296e6b344da298d5f06e5d4da3ca52d632c46bd5c762b7fefd4591', '[\"*\"]', '2024-03-18 03:06:56', NULL, '2024-03-18 03:04:36', '2024-03-18 03:06:56'),
(86, 'App\\Models\\User', 118, 'token', '5945e34f8a90b3f5596d3db2aa12530d2198354e04e219cc9f1f45f1964d25a0', '[\"*\"]', '2024-03-18 03:15:26', NULL, '2024-03-18 03:10:28', '2024-03-18 03:15:26'),
(87, 'App\\Models\\User', 119, 'token', '53a5a4408a459c30da0d1aef731e47e12280dedd3e9c959e3765f4afa9bcd4f9', '[\"*\"]', '2024-03-18 03:17:59', NULL, '2024-03-18 03:15:42', '2024-03-18 03:17:59'),
(88, 'App\\Models\\User', 118, 'token', '4ef8517d578a031800b538ff1c8f3b02ba4de52c1afb8a26453eb60a07f78b62', '[\"*\"]', '2024-03-18 03:18:36', NULL, '2024-03-18 03:18:13', '2024-03-18 03:18:36'),
(89, 'App\\Models\\User', 1, 'token', '0fde8df2ba75fb0a94f1b1db7531d704d3aedbdcc757191150dd4e7199931889', '[\"*\"]', '2024-03-18 03:20:30', NULL, '2024-03-18 03:18:44', '2024-03-18 03:20:30'),
(90, 'App\\Models\\User', 93, 'token', 'bc823c055b510601eeed9788da574ced0cb93983c54a19dc616e308e8e0753a0', '[\"*\"]', '2024-03-18 03:20:50', NULL, '2024-03-18 03:20:38', '2024-03-18 03:20:50'),
(91, 'App\\Models\\User', 1, 'token', '9d9606aee3b68aa2f24ac89ee44f3c38d9e74f88f2d3ded2c7905818fbb8eadc', '[\"*\"]', '2024-03-18 03:21:12', NULL, '2024-03-18 03:20:57', '2024-03-18 03:21:12'),
(92, 'App\\Models\\User', 93, 'token', 'e56c81517b085ea8ced1bbf60096cb7497aa167402a05dde2442eed59412e469', '[\"*\"]', '2024-03-18 03:21:42', NULL, '2024-03-18 03:21:19', '2024-03-18 03:21:42'),
(93, 'App\\Models\\User', 1, 'token', 'ad3716e63c888db0d2fe83bf8546b3eaaebaca8021daa57c264a1516f0d9ba5e', '[\"*\"]', '2024-03-18 03:22:02', NULL, '2024-03-18 03:21:49', '2024-03-18 03:22:02'),
(94, 'App\\Models\\User', 93, 'token', '362fb4edfbb550c00ffd0f5e28da19e07dc44b58cb6c714cb0e60ba9ed23d412', '[\"*\"]', '2024-03-18 03:22:13', NULL, '2024-03-18 03:22:12', '2024-03-18 03:22:13'),
(95, 'App\\Models\\User', 93, 'token', '79c1d7c4e78de42f5219c44cede8d86d53395dde25c1fbd9d7bd4fe103d20417', '[\"*\"]', '2024-03-27 12:57:40', NULL, '2024-03-27 12:57:01', '2024-03-27 12:57:40'),
(96, 'App\\Models\\User', 1, 'token', '73dd39f6ebef30f6c7a6d24b78dd4b80eb1b5631a2005e0282c6aec1c655df2d', '[\"*\"]', '2024-03-27 13:06:53', NULL, '2024-03-27 12:57:52', '2024-03-27 13:06:53'),
(97, 'App\\Models\\User', 93, 'token', '8b9fbe333efdc1ff5843d255e9851883030a3d555b47811a1980115af6e5dd5f', '[\"*\"]', '2024-03-27 13:57:09', NULL, '2024-03-27 13:07:06', '2024-03-27 13:57:09'),
(98, 'App\\Models\\User', 94, 'token', '8356ce492746ad7a12a2bc7520f9717e9a87a321b97cc481b94cbc94ce936316', '[\"*\"]', '2024-03-27 15:00:53', NULL, '2024-03-27 13:57:42', '2024-03-27 15:00:53'),
(99, 'App\\Models\\User', 1, 'token', 'fe2b53f537c91742e35cf8cf18d739b1400e3df10948e442902b639e355f9d50', '[\"*\"]', '2024-03-27 15:18:54', NULL, '2024-03-27 15:09:52', '2024-03-27 15:18:54'),
(100, 'App\\Models\\User', 123, 'token', 'fec7f14195efd2eaa0593b19af3fc05a5eb4c0cabfa1b12538f5f7f7c766abc1', '[\"*\"]', '2024-03-27 15:28:14', NULL, '2024-03-27 15:19:09', '2024-03-27 15:28:14'),
(101, 'App\\Models\\User', 122, 'token', '39296fad423907b4f2c3b3ebc393ad1e8ef0bfefaabb0e7dd62e574d96fab13b', '[\"*\"]', '2024-03-27 15:29:40', NULL, '2024-03-27 15:28:21', '2024-03-27 15:29:40'),
(102, 'App\\Models\\User', 1, 'token', 'cc66600773fb2d675dca271cfad7054eb1dc12a1ddf1403ea2b82464846443d3', '[\"*\"]', '2024-03-27 15:31:02', NULL, '2024-03-27 15:29:48', '2024-03-27 15:31:02'),
(103, 'App\\Models\\User', 122, 'token', '20473f1df0db1a8340220c9fb1b1c21ae9fa1938b11f5fe3a924444ef34ff0af', '[\"*\"]', '2024-03-27 15:31:22', NULL, '2024-03-27 15:31:09', '2024-03-27 15:31:22'),
(104, 'App\\Models\\User', 123, 'token', 'db1788793f94f463336a77e3c572c46af8c420d41aa8f5121d5e7376e208e8c7', '[\"*\"]', '2024-03-27 15:31:40', NULL, '2024-03-27 15:31:29', '2024-03-27 15:31:40');

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
(2, 44, 45, 5000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 00:50:20', '2024-03-12 00:50:20'),
(3, 44, 45, 5000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 00:55:05', '2024-03-12 00:55:05'),
(4, 44, 45, 5000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 01:19:02', '2024-03-12 01:19:02'),
(5, 44, 45, 3400.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 01:22:27', '2024-03-12 01:22:27'),
(6, 45, 40, 3000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 15:57:57', '2024-03-12 15:57:57'),
(7, 40, 45, 2000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 16:01:16', '2024-03-12 16:01:16'),
(8, 40, 44, 3000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 16:03:52', '2024-03-12 16:03:52'),
(9, 40, 44, 500.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 16:04:35', '2024-03-12 16:04:35'),
(10, 40, 44, 700.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 16:04:59', '2024-03-12 16:04:59'),
(11, 44, 40, 6630.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 16:06:53', '2024-03-12 16:06:53'),
(12, 45, 42, 400000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 17:45:45', '2024-03-12 17:45:45'),
(13, 42, 44, 250000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 17:57:03', '2024-03-12 17:57:03'),
(14, 45, 47, 120000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 18:39:47', '2024-03-12 18:39:47'),
(15, 41, 47, 2340.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 19:13:27', '2024-03-12 19:13:27'),
(16, 44, 45, 7000.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 19:14:25', '2024-03-12 19:14:25'),
(17, 41, 47, 1876.00, 'depot', '2024-03-12 00:00:00', '2024-03-12 19:15:24', '2024-03-12 19:15:24'),
(26, 41, 42, 100.00, 'depot', '2024-03-27 00:00:00', '2024-03-27 13:53:34', '2024-03-27 13:53:34'),
(30, 42, 41, 10000.00, 'depot', '2024-03-27 00:00:00', '2024-03-27 14:09:56', '2024-03-27 14:09:56'),
(31, 41, 42, 10000.00, 'depot', '2024-03-27 00:00:00', '2024-03-27 14:11:32', '2024-03-27 14:11:32'),
(32, 66, 67, 100000.00, 'depot', '2024-03-27 00:00:00', '2024-03-27 15:27:31', '2024-03-27 15:27:31'),
(33, 66, 67, 100000.00, 'depot', '2024-03-27 00:00:00', '2024-03-27 15:27:41', '2024-03-27 15:27:41');

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
(1, 'esMNh9ZR12', 'Doe', 'John', '123456789', '775432067', 'john@doe.com', 1, '$2y$12$Gkzw6KwYPFAVunNQDmI0G.z9KmBkL2icGMsn6MUz4HmC/asdotQb6', NULL, NULL, NULL, 1),
(3, '8324809325', 'ndiaye', 'penda', '4706243331', '774367644', 'penda2002@gmail.com', 1, '$2y$12$mQBBYaolXoWzg3w7iDiPKefDMTY8rEt7iP.47pKSwwlkEwtMSMKdu', NULL, '2024-02-22 22:41:02', '2024-03-12 02:26:37', 2),
(92, '1135929159', 'roronoa', 'zorrrrooo', '1138871583', '3246128766', 'fibix20637@fashlend.com', 1, '$2y$12$kw2YR5yp2wj3Ob3z2lefdOhZL8K4bo6wXcI5KsFXmvI9NL4l5zGUS', NULL, '2024-03-05 21:43:32', '2024-03-18 03:19:22', 2),
(93, '8470364495', 'ndiaye', 'badara', '3225546188', '774327640', 'mapaye999@gmail.com', 1, '$2y$12$UOWrM5rcVx.pObuMOHhTBeElXQ5IHAFTiRc9FqjJrI99IVKohSUHe', NULL, '2024-03-05 22:47:34', '2024-03-27 13:06:39', 2),
(94, '7913702545', 'kurumada', 'kenshi', '2207890689', '21212121333333333333', 'xolele8888@fashlend.com', 1, '$2y$12$CGUnvsDWNmGprp.4Z5yMVe8J6tVN8q0eAcMUS7K5KMwYEEqUh1wIO', NULL, '2024-03-06 01:01:35', '2024-03-06 01:01:35', 2),
(96, '8630301223', 'the goat', 'madara', '3168220001', '22222', 'pepasam150@fryshare.com', 1, '$2y$12$hXfmoB1s47AI1EZg6hnxzuIwLUWz0f8FZI/LlOTQwS0JqeQ1nI/By', NULL, '2024-03-12 00:16:10', '2024-03-12 00:16:10', 2),
(97, '9618327982', 'laravel', 'mbaye', '9633612038', '775432109', 'geloko1405@irnini.com', 1, '$2y$12$IU5oUhNJ4godg9bKcVtIherq.9KAKxrOU7TBiZXJdkVWHFhPIjNk.', NULL, '2024-03-12 00:22:50', '2024-03-12 00:22:50', 2),
(98, '4003987933', 'akashi', 'seijuro', '3336197914', '775432109', 'noginay455@hdrlog.com', 1, '$2y$12$Inm6btdLdqShpmzcy1O9Be8m9478MBtuSAFxDocBOq8qb.snBnOre', NULL, '2024-03-12 00:27:49', '2024-03-12 00:27:49', 2),
(99, '2028822723', 'cisse', 'sokhna', '7861536211', '21212121333333333333', 'todan63452@hdrlog.com', 1, '$2y$12$h2H1m5UydsvRGK7fNDaMzevIlHjFOtvpNQsNgSZsGfiLYX1gqv7tC', NULL, '2024-03-12 15:16:31', '2024-03-12 15:16:31', 2),
(100, '5376503710', 'ndiaye', 'mami penda', '1860712722', '765432190', 'penda777.pn@gmail.com', 1, '$2y$12$R1XCKMEygq0.upVTsJ.gTu.MhFCoYdxDen5QIMzfIJBKjFL/OpcfG', NULL, '2024-03-12 18:06:52', '2024-03-12 19:49:34', 2),
(122, '5204415556', 'thiago', 'messi', '6500402622', '3246128766', 'soliho4560@storesr.com', 1, '$2y$12$fBFl1einvxJFQtZFAAt6e.hSI3nGZQtYK.PvM.NWESwwEFXbellfm', NULL, '2024-03-27 15:07:34', '2024-03-27 15:07:34', 2),
(123, '6759132708', 'thiam', 'tapha', '5764308292', '3246128766', 'nibij79478@storesr.com', 0, '$2y$12$MtmPNKSrONdGCIYydO6Ox.PaW0Jl1riycHcLRbLpUsd2CBqBGTO4e', NULL, '2024-03-27 15:09:16', '2024-03-27 15:31:00', 2);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT pour la table `credit_cards`
--
ALTER TABLE `credit_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

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
