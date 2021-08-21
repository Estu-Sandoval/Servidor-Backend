-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-08-2021 a las 00:48:52
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

CREATE database clinica;

USE clinica;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atiende`
--

CREATE TABLE `atiende` (
  `idPaciente` int(11) NOT NULL,
  `idParamedico` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `causa` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `atiende`
--

INSERT INTO `atiende` (`idPaciente`, `idParamedico`, `fecha`, `causa`) VALUES
(1, 1, '2021-07-13', 'contusiones multiples'),
(2, 2, '2021-07-11', 'covid19'),
(1, 2, '2021-07-29', 'Envenamiento crónico'),
(1, 1, '2021-07-01', 'Embarazo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `idParamedico` int(11) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(20) NOT NULL,
  `permisos` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`idParamedico`, `usuario`, `contrasena`, `permisos`) VALUES
(1, 'madelba2015', 'pulgoso', 1),
(2, 'paesco2014', 'colombia', 1),
(3, 'juot2016', 'nomelacontes', 1),
(5, 'mipa2017', 'radio', 0),
(6, 'pear2018', 'desa', 0),
(7, 'judear', 'troyano', 0),
(8, 'miya2018', 'Miya?201', 0),
(9, 'juco2020', 'Juco$2021', 0),
(10, 'milanesa', 'Holasoyelboton1$', 0),
(11, 'holanda', 'Xforc3.x', 0),
(12, 'carami2025', 'Nomelase$0', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historialclinico`
--

CREATE TABLE `historialclinico` (
  `idPaciente` int(11) NOT NULL,
  `enfCronica1` varchar(50) DEFAULT NULL,
  `enfCronica2` varchar(50) DEFAULT NULL,
  `alergias` varchar(100) DEFAULT NULL,
  `operaciones` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historialclinico`
--

INSERT INTO `historialclinico` (`idPaciente`, `enfCronica1`, `enfCronica2`, `alergias`, `operaciones`) VALUES
(1, 'diabetes', NULL, 'mani, penicilina', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `idPaciente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `DNI` varchar(15) NOT NULL,
  `direccion` varchar(30) DEFAULT NULL,
  `obraSocial` varchar(30) DEFAULT NULL,
  `grupoSanguineo` varchar(10) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `urlImagen` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`idPaciente`, `nombre`, `apellido`, `DNI`, `direccion`, `obraSocial`, `grupoSanguineo`, `fechaNac`, `urlImagen`) VALUES
(1, 'Paquita', 'La del Barrio', '10789567', 'Av. Siempre Viva 123', 'pami', 'A+', '1968-07-23', 'http://clinicaapi.duckdns.org/imagenes/paquita.png'),
(2, 'Enzo', 'Gonzales', '25356721', 'Resistencia y nueva guinea de', 'ipross', 'B+', '1980-03-23', 'http://clinicaapi.duckdns.org/imagenes/enzo.png'),
(3, 'Nicolas', 'Echeverria', '24784367', 'Primeros Pobladores 456', 'osde', '0-', '1979-04-12', 'http://clinicaapi.duckdns.org/imagenes/nicolas.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paramedico`
--

CREATE TABLE `paramedico` (
  `idParamedico` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `legajo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `paramedico`
--

INSERT INTO `paramedico` (`idParamedico`, `nombre`, `apellido`, `legajo`) VALUES
(1, 'Maria', 'La del Barrio', 'PM-0001'),
(2, 'Pablo', 'Escobar', 'PM-0002'),
(3, 'Juan', 'Otan', 'PM-0003'),
(5, 'Miguel', 'Parra', 'PM-0004'),
(6, 'Pedro', 'Arias', 'PM-0005'),
(7, 'Juana', 'de Arco', 'PM-0006'),
(8, 'Miguel', 'Yañez', 'PM-0007'),
(9, 'Julio', 'Cortazar', 'PM-0008'),
(10, 'Nico', 'Acosta', 'PM-0009'),
(11, 'Matias', 'Apablaza', 'PM-0010'),
(12, 'Carlos', 'Ramirez', 'PM-0011');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `atiende`
--
ALTER TABLE `atiende`
  ADD KEY `idPaciente` (`idPaciente`),
  ADD KEY `idParamedico` (`idParamedico`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD UNIQUE KEY `idParamedico` (`idParamedico`) USING BTREE,
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `historialclinico`
--
ALTER TABLE `historialclinico`
  ADD KEY `idPaciente` (`idPaciente`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`idPaciente`);

--
-- Indices de la tabla `paramedico`
--
ALTER TABLE `paramedico`
  ADD PRIMARY KEY (`idParamedico`),
  ADD UNIQUE KEY `legajo` (`legajo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `idPaciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `paramedico`
--
ALTER TABLE `paramedico`
  MODIFY `idParamedico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `atiende`
--
ALTER TABLE `atiende`
  ADD CONSTRAINT `atiende_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`),
  ADD CONSTRAINT `atiende_ibfk_2` FOREIGN KEY (`idParamedico`) REFERENCES `paramedico` (`idParamedico`);

--
-- Filtros para la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `cuenta_ibfk_1` FOREIGN KEY (`idParamedico`) REFERENCES `paramedico` (`idParamedico`);

--
-- Filtros para la tabla `historialclinico`
--
ALTER TABLE `historialclinico`
  ADD CONSTRAINT `HistorialClinico_ibfk_1` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
