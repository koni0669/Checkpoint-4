CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `pokemon` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `slug` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
);

CREATE TABLE `stats` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `hp` int NOT NULL,
  `attack` int NOT NULL,
  `defense` int NOT NULL,
  `special_attack` int NOT NULL,
  `special_defense` int NOT NULL,
  `speed` int NOT NULL,
  `pokemon_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`pokemon_id`) REFERENCES `pokemon`(`id`)
);

CREATE TABLE `type` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
