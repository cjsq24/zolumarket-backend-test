-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.13-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para zolumarket
CREATE DATABASE IF NOT EXISTS `zolumarket` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `zolumarket`;

-- Volcando estructura para tabla zolumarket.banks
CREATE TABLE IF NOT EXISTS `banks` (
  `id_bank` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_bank`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.banks: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `banks` DISABLE KEYS */;
INSERT INTO `banks` (`id_bank`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'Banco Prueba', 1, '2020-12-02 12:13:56', '2020-12-02 12:13:57');
/*!40000 ALTER TABLE `banks` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.categories: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id_category`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(2, 'Frutas y Verduras', 1, '2020-12-03 19:16:17', '2020-12-03 19:16:17'),
	(3, 'Empaquetados', 1, '2020-12-03 19:16:30', '2020-12-03 19:16:30'),
	(4, 'Carnes', 1, '2020-12-03 19:16:40', '2020-12-03 19:16:40');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.countries
CREATE TABLE IF NOT EXISTS `countries` (
  `id_country` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_country`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.countries: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.deliveries
CREATE TABLE IF NOT EXISTS `deliveries` (
  `id_delivery` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(40) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `courier_address` varchar(255) DEFAULT NULL,
  `delivery_status` tinyint(1) DEFAULT 1,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_delivery`),
  UNIQUE KEY `reference` (`reference`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `deliveries_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.deliveries: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `deliveries` DISABLE KEYS */;
/*!40000 ALTER TABLE `deliveries` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.invoices
CREATE TABLE IF NOT EXISTS `invoices` (
  `id_invoice` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(40) DEFAULT NULL,
  `tax` double DEFAULT NULL,
  `total_price` double DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `transaction_status` tinyint(1) DEFAULT 1,
  `data_user` varchar(255) DEFAULT NULL,
  `products` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_invoice`),
  UNIQUE KEY `reference` (`reference`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.invoices: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.invoice_products
CREATE TABLE IF NOT EXISTS `invoice_products` (
  `id_invoice_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_invoice` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_invoice_product`),
  KEY `id_invoice` (`id_invoice`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `invoice_products_ibfk_1` FOREIGN KEY (`id_invoice`) REFERENCES `invoices` (`id_invoice`),
  CONSTRAINT `invoice_products_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.invoice_products: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `invoice_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_products` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.payments
CREATE TABLE IF NOT EXISTS `payments` (
  `id_payment` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(40) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `id_invoice` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_payment_type` int(11) DEFAULT NULL,
  `id_bank` int(11) DEFAULT NULL,
  `reference_payment` varchar(40) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_payment`),
  UNIQUE KEY `reference` (`reference`),
  UNIQUE KEY `reference_payment` (`reference_payment`),
  KEY `id_invoice` (`id_invoice`),
  KEY `id_user` (`id_user`),
  KEY `id_payment_type` (`id_payment_type`),
  KEY `id_bank` (`id_bank`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`id_invoice`) REFERENCES `invoices` (`id_invoice`),
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `payments_ibfk_3` FOREIGN KEY (`id_payment_type`) REFERENCES `payment_types` (`id_payment_type`),
  CONSTRAINT `payments_ibfk_4` FOREIGN KEY (`id_bank`) REFERENCES `banks` (`id_bank`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.payments: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.payment_types
CREATE TABLE IF NOT EXISTS `payment_types` (
  `id_payment_type` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_payment_type`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.payment_types: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `payment_types` DISABLE KEYS */;
INSERT INTO `payment_types` (`id_payment_type`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'efectivo', 1, '2020-12-02 12:17:43', '2020-12-02 12:17:44');
/*!40000 ALTER TABLE `payment_types` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.products
CREATE TABLE IF NOT EXISTS `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `reference` varchar(40) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_unit` int(11) DEFAULT NULL,
  `id_provider` int(11) DEFAULT NULL,
  `id_shop` int(11) DEFAULT NULL,
  `picture` varchar(200) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE KEY `reference` (`reference`),
  KEY `id_category` (`id_category`),
  KEY `id_unit` (`id_unit`),
  KEY `id_provider` (`id_provider`),
  KEY `id_shop` (`id_shop`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_unit`) REFERENCES `units` (`id_unit`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`id_provider`) REFERENCES `providers` (`id_provider`),
  CONSTRAINT `products_ibfk_4` FOREIGN KEY (`id_shop`) REFERENCES `shops` (`id_shop`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.products: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id_product`, `reference`, `name`, `price`, `id_category`, `id_unit`, `id_provider`, `id_shop`, `picture`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
	(10, NULL, 'Vegetales 1', 2, 2, 2, 1, NULL, 'https://cdn.potatopro.com/sites/default/files/styles/1200_wide/public/field/image/argenpapa1.jpg?itok=NWWFFJ65', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:22:32', '2020-12-03 19:22:32'),
	(12, NULL, 'Vegetales 2', 5, 2, 2, 1, NULL, 'https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:24:14', '2020-12-03 19:24:14'),
	(13, NULL, 'Vegetales 3', 5, 2, 2, 1, NULL, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-2000w/public/aguacate-partido_0.jpg?ramen_itok=iqwQftIcTf', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:24:40', '2020-12-03 19:24:40'),
	(14, NULL, 'Aceituna Entera', 124, 3, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Aceituna%20Entera%20Gordal%20Goya%206.5%20Oz.%20RD$%20124.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:26:22', '2020-12-03 19:26:22'),
	(15, NULL, 'Ajíes Morrón 1 lb.', 64, 3, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Aj%c3%ades%20Morr%c3%b3n%201%20lb.%20RD$%2064.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:26:50', '2020-12-03 19:26:50'),
	(16, NULL, 'Apio Entero', 35, 3, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/frutas%20y%20verduras/Apio%20Entero%201%20Libra.%20RD$%2035.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:27:23', '2020-12-03 19:27:23'),
	(17, NULL, 'Bistec Boliche', 154, 4, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/carnes/Bistec%20Boliche%20de%20Res%20por%20Libras.%20RD$%20154.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:28:03', '2020-12-03 19:28:03'),
	(18, NULL, 'Churrasco de Res', 479, 4, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/carnes/Churrasco%20de%20Res%20Angus%20Choice%20por%20Libras.%20RD$%20479.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:28:45', '2020-12-03 19:28:45'),
	(19, NULL, 'Pecho de Res', 83, 4, 1, 1, NULL, 'http://zolumarket.com/pruebas/productos/carnes/Pecho%20de%20Res%20Corriente%20por%20Libras.%20RD$%2083.jpg', 'Esta es la la descripcion del producto lorem ipsum text...', 1, '2020-12-03 19:29:16', '2020-12-03 19:29:16');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.providers
CREATE TABLE IF NOT EXISTS `providers` (
  `id_provider` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_provider`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.providers: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
INSERT INTO `providers` (`id_provider`, `name`, `email`, `phone_number`, `address`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'ZoluMarket', 'email@test.test', NULL, NULL, 1, '2020-12-02 15:24:20', '2020-12-02 15:24:20');
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.roles: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.shops
CREATE TABLE IF NOT EXISTS `shops` (
  `id_shop` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_shop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.shops: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.trademarks
CREATE TABLE IF NOT EXISTS `trademarks` (
  `id_trademark` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_trademark`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.trademarks: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `trademarks` DISABLE KEYS */;
/*!40000 ALTER TABLE `trademarks` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.units
CREATE TABLE IF NOT EXISTS `units` (
  `id_unit` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `abbreviation` varchar(5) DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_unit`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.units: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `units` DISABLE KEYS */;
INSERT INTO `units` (`id_unit`, `name`, `abbreviation`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'Gramos', 'gr', 1, '2020-12-02 15:22:28', '2020-12-02 15:22:28'),
	(2, 'Libras', 'lb', 1, '2020-12-03 19:01:14', '2020-12-03 19:01:14');
/*!40000 ALTER TABLE `units` ENABLE KEYS */;

-- Volcando estructura para tabla zolumarket.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id_country` int(11) DEFAULT NULL,
  `phone_number` varchar(40) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT 1,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`),
  KEY `id_country` (`id_country`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id_country`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Volcando datos para la tabla zolumarket.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id_user`, `name`, `last_name`, `username`, `email`, `password`, `id_country`, `phone_number`, `address`, `date`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'carlos', 'sosa', NULL, 'carlos', '$2a$10$ByGLWCjd.99uN1YQuMpwGeZ/S/ewgGRcfjBssqKzeKJXFI2pmeGtW', NULL, NULL, NULL, NULL, 1, '2020-12-02 16:37:19', '2020-12-02 16:37:20');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
