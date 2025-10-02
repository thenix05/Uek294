CREATE DATABASE  IF NOT EXISTS `chronicles-db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chronicles-db`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: chronicles-db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chronicle`
--

DROP TABLE IF EXISTS `chronicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chronicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `text` varchar(1000) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm41ah1oxjxhp8vaorxi51kfry` (`user_id`),
  CONSTRAINT `FKm41ah1oxjxhp8vaorxi51kfry` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chronicle`
--

LOCK TABLES `chronicle` WRITE;
/*!40000 ALTER TABLE `chronicle` DISABLE KEYS */;
INSERT INTO `chronicle` VALUES
                       (1,1,'2025-02-13 09:43:20.717196','2025-02-13 09:43:20.717196','In den unerforschten Nebeln von Zeta Orionis haben wir ein spektakuläres Phänomen entdeckt: eine Ansammlung aus glühenden Gasen, die einen neuen Stern gebären könnten. Die Vielfalt der Farben ist ein Beweis für die unendliche Schönheit des Kosmos. Wir haben Proben gesammelt, um sie an unsere Wissenschaftseinheiten zurückzusenden. Die Entdeckung ist eine Erinnerung daran, wie viel wir noch zu lernen haben.','Geheimnisvolle Nebel von Zeta Orionis'),
                       (2,2,'2025-02-13 09:43:20.720951','2025-02-13 09:43:20.720951','Galaxia Prime beeindruckt nicht nur mit ihrer fortschrittlichen Zivilisation, sondern auch mit ihrer umweltfreundlichen Technologie. Ihre Städte schweben über der Planetenoberfläche und nutzen die Energie von Sternwinden. Diese bahnbrechenden Innovationen haben das Potenzial, unsere eigenen technologischen Entwicklungen zu inspirieren. Die Galaxianer haben uns herzlich empfangen und einen Technologietransfer angeboten.','Fortschrittliches Leben auf Galaxia Prime'),
                       (3,1,'2025-02-13 09:43:20.722955','2025-02-13 09:43:20.722955','Quasar 9 strahlt intensives Licht aus, das den Weltraum in ein schillerndes Kaleidoskop verwandelt. Hier haben wir Spuren einer alten, längst verlorenen Zivilisation entdeckt. Ihre Gravuren und Artefakte sind voll von kryptischen Symbolen, die noch entschlüsselt werden müssen. Wir vermuten, dass sie ein Verständnis für die kosmischen Geheimnisse besassen, das über unseres hinausgeht.','Entdeckungen rund um Quasar 9'),
                       (4,2,'2025-02-13 09:43:20.723952','2025-02-13 09:43:20.723952','Die Ringe des Saturn bergen das Rätsel um eine verlorene menschliche Kolonie, die einst hier siedelte. Unsere Sensoren haben Lebenszeichen tief in den Eiskristallen erkannt. Die Kolonisten stehen im unaufhörlichen Konflikt mit den harschen Bedingungen des Ringanbaus. Eine diplomatische Mission könnte zukünftige Zusammenarbeit ermöglichen und helfen, ihre Ressourcen zu bewahren.','Die verlorene Kolonie der Saturnringe'),
                       (5,1,'2025-02-13 09:43:20.725783','2025-02-13 09:43:20.725783','Nebula 7 ist bekannt für seine rätselhaften Raum-Zeit-Anomalien. Während unseres Aufenthalts hier haben wir Zeitverzerrungen erlebt, die unsere Systeme herausgefordert haben. Wissenschaftler an Bord sind dabei, die Anomalien zu kartieren, um die Geheimnisse der Zeitmanipulation zu entschlüsseln. Diese region ist ein Puzzle, das nur die kühnsten Entdecker lösen können.','Die seltsamen Schwingungen in Nebula 7'),
                       (6,1,'2025-02-13 09:43:20.726791','2025-02-13 09:43:20.726791','Eine Expedition zu Draconis Delta ergab angeblich einen Planeten mit Ozeanen voller lebendiger Kristalle. Diese Entdeckung führte zu weitreichenden Spekulationen über neue Energiequellen. Jedoch wurden bei einer späteren Überprüfung keine Anzeichen solcher Ozeane gefunden, und es wurde festgestellt, dass die ursprüngliche Sensorabweichungen und Fehlinterpretationen der Daten vorlagen.','Die dunklen Wasser von Draconis Delta');
/*!40000 ALTER TABLE `chronicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_8sewwnpamngi6b1dwaa88askk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (2,'ADMIN'),(1,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user@bbcag.ch','$2a$10$MSnGZ/dB.c3pgJo9PJl4qOXu7h9SHdkMaQT40WTkP93USuz0P7qWW','user'),(2,'admin@bbcag.ch','$2a$10$c3w5SVipLZLES15TMBqnw.wmKjgGTqYwT31hPhm9VefDKKAI1BKRa','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `role_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `FKhjx9nk20h4mo745tdqj8t8n9d` (`user_id`),
  CONSTRAINT `FKhjx9nk20h4mo745tdqj8t8n9d` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKka3w3atry4amefp94rblb52n7` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1),(1,2),(2,2);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-13 10:07:54
