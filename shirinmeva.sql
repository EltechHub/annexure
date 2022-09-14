-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Сен 14 2022 г., 13:18
-- Версия сервера: 10.4.14-MariaDB
-- Версия PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shirinmeva`
--

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `text` varchar(2048) NOT NULL,
  `date` varchar(64) NOT NULL,
  `status` varchar(64) NOT NULL,
  `author` varchar(64) NOT NULL,
  `img` varchar(2048) NOT NULL,
  `order_number` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `text`, `date`, `status`, `author`, `img`, `order_number`) VALUES
(1, 'Jurnal #1', 'Meva-sabzavotchilik', '09-09-2022', 'active', 'Elyor Mirsaidov', 'https://neuschwansteincastletickets.tours/wp-content/uploads/2022/07/neuschwanstein-castle-germany-1.jpg', '1'),
(2, 'Jurnal #2', 'Anor festival', '05-10-2022', 'inactive', 'Kamilov', 'https://www.worldtravelguide.net/wp-content/uploads/2017/04/Think-Germany-Frankfurt-186367581-SeanPavonePhoto-copy.jpg', '2'),
(3, 'Jurnal #3', 'Meva-sabzavotchilik', '07-09-2022', 'active', 'Mirsaidov', 'https://i.natgeofe.com/n/9e138c12-712d-41d4-9be9-5822a3251b5a/brandenburggate-berlin-germany.jpg', '3');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
