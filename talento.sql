-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-12-2024 a las 21:12:34
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `talento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(300) CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  `description` longtext CHARACTER SET utf16 COLLATE utf16_spanish_ci,
  `price` int NOT NULL,
  `image` longtext CHARACTER SET utf16 COLLATE utf16_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `price`, `image`) VALUES
(19, 'Nike Air F', 'Super Comodas', 200000, 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png'),
(20, 'Nike Dunk low Retro', 'Super comodas', 350000, 'https://nikeco.vtexassets.com/arquivos/ids/617185-800-auto?v=638549415366500000&width=800&height=auto&aspect=true'),
(21, 'Nike Air Max 95', 'Super comodas', 350000, 'https://nikeco.vtexassets.com/arquivos/ids/533213-800-auto?v=638463876157870000&width=800&height=auto&aspect=true'),
(22, 'Nike Air Max 1', 'Super comodas', 350000, 'https://nikeco.vtexassets.com/arquivos/ids/530740/FD9082_106_A.jpg?v=638442174685770000'),
(23, 'Nike Air dunk low jumbo', 'Super comodas', 350000, 'https://nikeco.vtexassets.com/arquivos/ids/531515/FJ4192_001_A.jpg?v=638442177258830000'),
(24, 'Nike Air Max Plus', 'Super comodas', 350000, 'https://nikeco.vtexassets.com/arquivos/ids/615956/604133_050_A_PREM.jpg?v=638549412241800000');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
