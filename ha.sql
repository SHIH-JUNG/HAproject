-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.6-MariaDB
-- PHP 版本： 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `ha`
--

-- --------------------------------------------------------

--
-- 資料表結構 `announcement`
--

CREATE TABLE `announcement` (
  `Id` int(11) NOT NULL,
  `title` varchar(10) NOT NULL,
  `authority` int(11) NOT NULL,
  `publisher` varchar(10) NOT NULL,
  `datetime` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `announcement`
--

INSERT INTO `announcement` (`Id`, `title`, `authority`, `publisher`, `datetime`) VALUES
(1, '會議記錄整理', 3, '園主任', '2021-12-11'),
(2, '電訪', 3, '園主任', '2021-12-11'),
(3, '開會', 3, '園主任', '2021-12-13');

-- --------------------------------------------------------

--
-- 資料表結構 `calendar`
--

CREATE TABLE `calendar` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `start` varchar(16) NOT NULL,
  `end` varchar(16) NOT NULL,
  `publisher` varchar(10) NOT NULL,
  `url` varchar(100) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `calendar`
--

INSERT INTO `calendar` (`id`, `title`, `description`, `start`, `end`, `publisher`, `url`, `date`) VALUES
(20, 'yukia(海洛因,安非他命)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=2', '2021-09-26 14:00', '2021-09-26 15:00', '園主任', '', '2022-01-25 18:24:48'),
(21, 'yukia(海洛因,安非他命)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=2', '2021-10-15 14:00', '2021-10-15 15:00', '園主任', '', '2022-01-25 18:34:36'),
(22, 'yukia(海洛因,安非他命)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=2', '2021-10-11 12:00', '2021-10-11 13:00', '園主任', '', '2022-01-25 18:35:40'),
(23, 'Allen(K他命)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=1', '2021-09-17 08:00', '2021-09-17 09:00', '園主任', '', '2022-01-25 19:16:02'),
(24, 'Deny(大麻)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=3', '2021-12-18 15:00', '2021-12-18 16:00', '園主任', '', '2022-01-25 20:07:36'),
(25, '黃QQ(2021-12-09)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2021-12-09 15:00', '2021-12-09 18:30', '園主任', '', '2022-03-09 17:51:49'),
(26, '黃QQ(2021-12-09)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2021-12-09 09:30', '2021-12-09 11:00', '園主任', '', '2022-03-09 17:53:20'),
(27, '黃QQ(2021-12-16)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2021-12-16 08:30', '2021-12-16 11:00', '園主任', '', '2022-03-09 17:57:47'),
(28, '黃QQ(2021-12-10)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2021-12-10 12:00', '2021-12-10 13:00', '園主任', '', '2022-03-09 17:58:37'),
(29, '黃QQ(2022-01-21)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2022-01-21 07:00', '2022-01-21 08:30', '園主任', '', '2022-03-09 17:59:13'),
(30, '黃QQ(2022-01-28)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2022-01-28 12:00', '2022-01-28 13:00', '園主任', '', '2022-03-09 18:21:39'),
(31, '黃QQ(2022-02-04)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=1&counsel_id=766', '2022-02-04 06:30', '2022-02-04 09:00', '園主任', '', '2022-03-09 19:32:25'),
(32, 'test(2021-11-11)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=2&counsel_id=622', '2021-11-11 12:00', '2021-11-11 13:00', '園主任', '', '2022-03-09 19:36:12');

-- --------------------------------------------------------

--
-- 資料表結構 `case_all`
--

CREATE TABLE `case_all` (
  `Id` int(30) NOT NULL,
  `Open_case_id` int(30) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Open_case_date` datetime NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Url` varchar(150) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `consult`
--

CREATE TABLE `consult` (
  `Id` int(30) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Call_datetime` datetime NOT NULL,
  `Way` varchar(20) NOT NULL,
  `Way_detail` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Object_type` varchar(10) NOT NULL,
  `Addiction` varchar(200) NOT NULL,
  `M_addiction` varchar(200) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `A_detail` varchar(20) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `L_detail` varchar(30) NOT NULL,
  `Info_Name` varchar(30) NOT NULL,
  `Relationship_detail` varchar(20) NOT NULL,
  `R_detail` varchar(20) NOT NULL,
  `R_phone` varchar(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Referral_detail` varchar(20) NOT NULL,
  `Referral_phone` varchar(20) NOT NULL,
  `Referral_name` varchar(20) NOT NULL,
  `Know_from` varchar(50) NOT NULL,
  `Know_from_detail` varchar(20) NOT NULL,
  `Eligible` varchar(10) NOT NULL,
  `Assign` varchar(10) NOT NULL,
  `Phone_note` varchar(2000) NOT NULL,
  `Count` varchar(1000) NOT NULL,
  `Location` varchar(20) NOT NULL,
  `Location_detail` varchar(20) NOT NULL,
  `Start_date` date NOT NULL,
  `End_date` date NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  `One_user_name` varchar(10) NOT NULL,
  `Two_user_name` varchar(10) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Is_firstadd` tinyint(1) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `consult`
--

INSERT INTO `consult` (`Id`, `Phone_id`, `Call_datetime`, `Way`, `Way_detail`, `Name`, `Gender`, `Object_type`, `Addiction`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, `Info_Name`, `Relationship_detail`, `R_detail`, `R_phone`, `Referral`, `Referral_detail`, `Referral_phone`, `Referral_name`, `Know_from`, `Know_from_detail`, `Eligible`, `Assign`, `Phone_note`, `Count`, `Location`, `Location_detail`, `Start_date`, `End_date`, `Start_time`, `End_time`, `One_user_name`, `Two_user_name`, `Remark`, `Is_firstadd`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(5, 1, '2021-09-16 09:00:00', '面訪', '社區', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'test0125', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 17:57:53', '園主任', '2022-01-25 17:57:53', ''),
(6, 2, '2021-09-25 14:30:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'yukia男友fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2021-10-08 00:00:00', '園主任', '2022-01-25 19:03:30', '園主任'),
(7, 2, '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukiad家', '家訪', '2021-09-26', '2021-09-26', '14:00:00', '15:00:00', '社工員1', '社工組長', 'test', 0, '2021-10-08 00:00:00', '園主任', '2022-01-25 18:45:34', '園主任'),
(8, 2, '2021-10-08 00:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2021-10-08 00:00:00', '園主任', '2022-01-25 18:45:34', '園主任'),
(9, 2, '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukia家裡', '家訪', '2021-10-15', '2021-10-15', '14:00:00', '15:00:00', '社工員2', '社工組長', 'TEST', 0, '2022-01-25 18:34:36', '園主任', '2022-01-25 18:45:34', '園主任'),
(10, 2, '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukia男友家', '家訪', '2021-10-11', '2021-10-11', '12:00:00', '13:00:00', '社工員1', '社工員2', 'TEST', 0, '2022-01-25 18:35:40', '園主任', '2022-01-25 18:45:34', '園主任'),
(11, 2, '2021-09-29 00:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '6', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 18:36:37', '園主任', '2022-01-25 18:45:34', '園主任'),
(12, 1, '0000-00-00 00:00:00', '面訪', '家訪', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '', '', '屏安醫院', '醫院', '不明', '社工員2', '', '', 'Allen家裡', '家訪', '2021-09-17', '2021-09-17', '08:00:00', '09:00:00', '社工員2', '社工組長', 'TEST123', 0, '2022-01-25 19:16:02', '園主任', '2022-01-25 19:16:25', '園主任'),
(13, 1, '2021-10-05 00:00:00', '電訪', '', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen', '本人', '', '09853357', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'TEST', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 19:17:14', '園主任', '2022-01-25 19:17:14', ''),
(14, 3, '2021-12-16 10:00:00', '面訪', '社區', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:02:17', '園主任', '2022-01-25 20:05:54', '園主任'),
(15, 3, '2021-12-17 00:00:00', '電訪', '', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Denyfa', 'deny父親', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員2', 'TEST', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 20:06:35', '園主任', '2022-01-25 20:06:35', ''),
(16, 3, '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '', '', '八德醫院', '醫院', '不明', '社工員1', '', '', '社區', '社區', '2021-12-18', '2021-12-18', '15:00:00', '16:00:00', '社工員2', '社工員1', 'TEST', 0, '2022-01-25 20:07:36', '園主任', '2022-01-25 20:07:36', ''),
(17, 4, '2021-12-29 16:10:00', '電訪', '', 'Timmy', '男', '家庭', '酒精', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Ameria', 'Timmy wife', '配偶', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:12:19', '園主任', '2022-01-25 20:12:19', '');

-- --------------------------------------------------------

--
-- 資料表結構 `counsel`
--

CREATE TABLE `counsel` (
  `Id` int(30) NOT NULL,
  `Refferal` varchar(50) NOT NULL,
  `Counsel_id` int(30) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Sexual_orientation` varchar(10) NOT NULL,
  `Birth` date NOT NULL,
  `Pid` varchar(50) NOT NULL,
  `Info_name` varchar(30) NOT NULL,
  `Info_phone` varchar(30) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `In_prison_date` date NOT NULL,
  `Out_prison_date` date NOT NULL,
  `In_prison_date_2nd` date NOT NULL,
  `Out_prison_date_2nd` date NOT NULL,
  `In_prison_date_3rd` date NOT NULL,
  `Out_prison_date_3rd` date NOT NULL,
  `Is_parole` varchar(10) NOT NULL,
  `HIV_diagnosis_date` date NOT NULL,
  `Family_know` varchar(10) NOT NULL,
  `Cocktail_therapy_status` varchar(10) NOT NULL,
  `Interview_date_1st` date NOT NULL,
  `Interview_date_2nd` date NOT NULL,
  `Interview_date_3rd` date NOT NULL,
  `Interview_date_4th` date NOT NULL,
  `Interview_date_5th` date NOT NULL,
  `Interview_date_6th` date NOT NULL,
  `Interview_date_7th` date NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) DEFAULT current_timestamp(),
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `counsel`
--

INSERT INTO `counsel` (`Id`, `Refferal`, `Counsel_id`, `Name`, `Gender`, `Sexual_orientation`, `Birth`, `Pid`, `Info_name`, `Info_phone`, `Address`, `In_prison_date`, `Out_prison_date`, `In_prison_date_2nd`, `Out_prison_date_2nd`, `In_prison_date_3rd`, `Out_prison_date_3rd`, `Is_parole`, `HIV_diagnosis_date`, `Family_know`, `Cocktail_therapy_status`, `Interview_date_1st`, `Interview_date_2nd`, `Interview_date_3rd`, `Interview_date_4th`, `Interview_date_5th`, `Interview_date_6th`, `Interview_date_7th`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '高雄監獄', 766, '黃QQ', '男生', '同性', '1969-08-11', 'T121956775', '劉大福', '988517485', '屏東縣內埔鄉東寧村勝利路5557-2號', '2016-09-30', '2022-05-06', '2022-05-18', '0000-00-00', '0000-00-00', '0000-00-00', '是', '2022-06-25', '否', '否', '2022-02-11', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-03-05 00:00:00', '', '2022-03-09 15:47:05', '園主任'),
(2, '台南監獄', 622, 'test', '男生', '異性', '1952-09-17', 'd1234455186', 'test緊急聯絡人', '05121312', '屏東縣屏東市自由路63312號', '2021-12-01', '2023-03-02', '2021-12-02', '2022-05-26', '0000-00-00', '0000-00-00', '否', '2021-12-29', '是', '否', '2022-02-02', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-03-07 16:55:01', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `counsel_visit`
--

CREATE TABLE `counsel_visit` (
  `Id` int(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Counsel_id` int(30) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Pid` varchar(50) NOT NULL,
  `Location` varchar(30) NOT NULL,
  `Location_detail` varchar(30) NOT NULL,
  `Start_date` date NOT NULL,
  `End_date` date NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  `One_user_name` varchar(20) NOT NULL,
  `Two_user_name` varchar(20) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `counsel_visit`
--

INSERT INTO `counsel_visit` (`Id`, `Referral`, `Counsel_id`, `Name`, `Pid`, `Location`, `Location_detail`, `Start_date`, `End_date`, `Start_time`, `End_time`, `One_user_name`, `Two_user_name`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(4, '高雄監獄', 766, '黃QQ', 'T121956775', '高雄監所1', '監所', '2021-12-09', '2021-12-09', '13:30:00', '17:30:00', '社工員1', '社工員2', '高雄監所1備註test', '2022-03-09 17:58:37', '園主任', '2022-03-09 19:28:14', '園主任'),
(5, '高雄監獄', 766, '黃QQ', 'T121956775', '', '高雄監所1', '2022-01-21', '2022-01-21', '07:00:00', '08:30:00', '社工員1', '社工員2', '高雄監獄2備註', '2022-03-09 17:59:13', '園主任', '2022-03-09 19:28:24', '園主任'),
(6, '高雄監獄', 766, '黃QQ', 'T121956775', '家訪1', '家訪', '2022-01-28', '2022-01-28', '12:00:00', '13:00:00', '社工員1', '執行長', 'test', '2022-03-09 18:21:39', '園主任', '0000-00-00 00:00:00', ''),
(7, '高雄監獄', 766, '黃QQ', 'T121956775', '', 'test', '2022-02-04', '2022-02-04', '06:30:00', '09:00:00', '社工組長', '社工員2', 'test', '2022-03-09 19:32:25', '園主任', '0000-00-00 00:00:00', ''),
(8, '台南監獄', 622, 'test', 'd1234455186', '監所test', '監所', '2021-11-11', '2021-11-11', '12:00:00', '13:00:00', '社工員2', '', 'test', '2022-03-09 19:36:12', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `current_case`
--

CREATE TABLE `current_case` (
  `Id` int(30) NOT NULL,
  `Case_id` varchar(100) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Scale_id` int(30) NOT NULL,
  `Open_case_date` datetime NOT NULL,
  `Close_case_date` datetime NOT NULL,
  `Case_grade` varchar(20) NOT NULL,
  `Case_state` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Case_pid` varchar(50) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Case_property` varchar(10) NOT NULL,
  `Object_type` varchar(10) NOT NULL,
  `M_addiction` varchar(200) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `Info_Name` varchar(30) NOT NULL,
  `R_phone` varchar(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Referral_phone` varchar(20) NOT NULL,
  `Remark` varchar(30) NOT NULL,
  `Assign` varchar(10) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `current_case`
--

INSERT INTO `current_case` (`Id`, `Case_id`, `Phone_id`, `Scale_id`, `Open_case_date`, `Close_case_date`, `Case_grade`, `Case_state`, `Name`, `Case_pid`, `Gender`, `Case_property`, `Object_type`, `M_addiction`, `Age`, `Info_Name`, `R_phone`, `Referral`, `Referral_phone`, `Remark`, `Assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '1', 2, 20, '2021-11-25 00:00:00', '0000-00-00 00:00:00', 'A', '未結案', 'Allen', 'B1238475', '男', '社區', '愛滋感染者', 'K他命', '36', 'Allen本人', '09852154', '矯正機關', '123', '123456', '社工員1', '2021-11-25 00:00:00', '社工員1', '2021-12-02 15:38:25', ''),
(2, '2', 4, 21, '2021-11-10 00:00:00', '0000-00-00 00:00:00', 'B', '未結案', '匿名A', 'A1123421', '不明', '親子教育', '家庭', '菸、精神藥物', '51', '匿名A本人', '0254433126', '社區', '012317461745', '012317461745', '社工員2', '2021-11-11 00:00:00', '社工員2', '2021-12-02 15:43:15', ''),
(3, '2', 4, 15, '2020-05-05 00:00:00', '0000-00-00 00:00:00', 'C', '已結案', '匿名A', 'A1123421', '不明', '親子教育', '家庭', '精神藥物', '50', '匿名A朋友', '0612314152', '醫院', '0252134235', '', '社工員2', '2020-05-05 00:00:00', '社工員2', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `face`
--

CREATE TABLE `face` (
  `Id` int(30) NOT NULL,
  `Face_id` int(30) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Object_type` varchar(10) NOT NULL,
  `Use_addition_ago` varchar(200) NOT NULL,
  `M_addiction` varchar(200) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Info_Name` varchar(30) NOT NULL,
  `Relationship` varchar(20) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Referral_detail` varchar(20) NOT NULL,
  `Location` varchar(20) NOT NULL,
  `Location_detail` varchar(20) NOT NULL,
  `Start_date` date NOT NULL,
  `End_date` date NOT NULL,
  `Start_time` time NOT NULL,
  `End_time` time NOT NULL,
  `One_user_name` varchar(10) NOT NULL,
  `Two_user_name` varchar(10) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Counter` int(11) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `face`
--

INSERT INTO `face` (`Id`, `Face_id`, `Phone_id`, `Name`, `Gender`, `Object_type`, `Use_addition_ago`, `M_addiction`, `Age`, `Address`, `Info_Name`, `Relationship`, `Phone`, `Referral`, `Referral_detail`, `Location`, `Location_detail`, `Start_date`, `End_date`, `Start_time`, `End_time`, `One_user_name`, `Two_user_name`, `Remark`, `Counter`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(5, 1, 5, 'deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '31', '高雄縣', 'deny', '本人', '09852233', '自行求助', '自行求助', 'denyhome', '家訪', '2021-12-31', '2021-12-31', '12:00:00', '13:00:00', '社工員2', '社工員1', 'test', 1, '2022-01-08 18:46:04', '園主任', '2022-01-18 18:23:40', '園主任'),
(6, 2, 2, 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '新北市', 'Allen', '本人', '09852154', '矯正署', '矯正機關', '屏東監所', '監所', '2021-11-09', '2021-11-09', '12:00:00', '13:00:00', '社工員2', '社工組長', 'tttt', 1, '2022-01-08 19:28:42', '園主任', '2022-01-08 19:28:42', ''),
(7, 2, 2, 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '新北市', 'Allen', '本人', '09852154', '矯正署', '矯正機關', 'Allen家裡', '家訪', '2021-11-06', '2021-11-06', '10:00:00', '11:00:00', '社工員1', '社工員2', 'test1112', 2, '2022-01-08 19:29:15', '園主任', '2022-01-08 19:29:15', ''),
(8, 2, 2, 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '新北市', 'Allen', '本人', '09852154', '矯正署', '矯正機關', ' 平安社區', '社區', '2021-11-10', '2021-11-10', '12:00:00', '13:00:00', '社工員1', '社工員2', '', 3, '2022-01-08 20:25:49', '園主任', '2022-01-08 20:25:49', '');

-- --------------------------------------------------------

--
-- 資料表結構 `forms`
--

CREATE TABLE `forms` (
  `Id` int(30) NOT NULL,
  `Case_id` int(30) NOT NULL,
  `Form_id` int(30) NOT NULL,
  `Form_type` varchar(30) NOT NULL,
  `Case_name` varchar(20) NOT NULL,
  `Case_pid` varchar(50) NOT NULL,
  `Create_date` datetime DEFAULT current_timestamp(),
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL,
  `answer` longtext NOT NULL,
  `file_path` varchar(1000) NOT NULL,
  `Health_rec` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `forms`
--

INSERT INTO `forms` (`Id`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `answer`, `file_path`, `Health_rec`) VALUES
(1, 1, 1, 'case', 'Allen', 'B1238475', '2022-02-23 17:22:54', '園主任', '2022-02-23 17:37:38', '園主任', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-02-23\"},{\"name\":\"name\",\"value\":\"Allen\"},{\"name\":\"birth\",\"value\":\"1991-07-13\"},{\"name\":\"pid\",\"value\":\"B1238475\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_home\",\"value\":\"03113212\"},{\"name\":\"phone_mobile\",\"value\":\"06123128\"},{\"name\":\"address\",\"value\":\"屏東縣屏東市自由路15531號\"},{\"name\":\"residence\",\"value\":\"屏東縣屏東市自由路15531號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"小學以下\"},{\"name\":\"marital\",\"value\":\"未婚\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"漁\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"0\"},{\"name\":\"economic_status_0\",\"value\":\"123334\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"2\"},{\"name\":\"drug_record_2\",\"value\":\"6\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"3\"},{\"name\":\"correctional_question_start\",\"value\":\"2019-04\"},{\"name\":\"correctional_question_end\",\"value\":\"2020-10\"},{\"name\":\"correctional_year\",\"value\":\"1\"},{\"name\":\"correctional_month\",\"value\":\"6\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time\",\"value\":\"0\"},{\"name\":\"treatment_time_year\",\"value\":\"109\"},{\"name\":\"treatment_time_month\",\"value\":\"1\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"已接受治療\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"test醫院個管\"},{\"name\":\"medical_phone\",\"value\":\"0511453126\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"0312134513\"},{\"name\":\"CD4_index_0\",\"value\":\"1231\"},{\"name\":\"CD4_index_1\",\"value\":\"110\"},{\"name\":\"CD4_index_2\",\"value\":\"11\"},{\"name\":\"viral_0\",\"value\":\"2341\"},{\"name\":\"viral_1\",\"value\":\"100\"},{\"name\":\"viral_2\",\"value\":\"1\"},{\"name\":\"medical_other\",\"value\":\"test其他\"},{\"name\":\"medicine\",\"value\":\"Triumeq三恩美\"},{\"name\":\"medicine\",\"value\":\"Atripla亞翠佩\"},{\"name\":\"medicine\",\"value\":\"Complera康普萊\"},{\"name\":\"medicine\",\"value\":\"Bikyavy吉他韋\"},{\"name\":\"medicine\",\"value\":\"Symtuza信擇立\"},{\"name\":\"medicine\",\"value\":\"抑滋靈\"},{\"name\":\"medicine\",\"value\":\"伊芳滋\"},{\"name\":\"medicine\",\"value\":\"艾立莎\"},{\"name\":\"medicine\",\"value\":\"英特萊\"},{\"name\":\"medicine\",\"value\":\"諾億亞\"},{\"name\":\"medicine\",\"value\":\"瑞塔滋\"},{\"name\":\"symptoms\",\"value\":\"持續疲倦\"},{\"name\":\"symptoms\",\"value\":\"發燒\"},{\"name\":\"symptoms\",\"value\":\"其他\"},{\"name\":\"symptoms_other\",\"value\":\"合併症狀test\"},{\"name\":\"statement\",\"value\":\"個案問題陳述test\"},{\"name\":\"personal_system\",\"value\":\"個人系統test\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"診斷問題test主要\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"test處遇目標\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"資源與轉介test\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"90\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"employment_radio\",\"value\":\"就業輔導中\"},{\"name\":\"social_adaptation_radio\",\"value\":\"尚可\"},{\"name\":\"other_assessments\",\"value\":\"test其他評量\"},{\"name\":\"case_closed_yes\",\"value\":\"\"},{\"name\":\"case_closed_radio\",\"value\":\"暫不結案\"},{\"name\":\"case_closed_year\",\"value\":\"110\"},{\"name\":\"case_closed_month\",\"value\":\"3\"},{\"name\":\"case_closed_day\",\"value\":\"1\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"5\"},{\"name\":\"customFile1\",\"value\":\"123abc.PNG\"}]\"', '../upload/123abc.PNG', ''),
(2, 1, 2, 'case', 'Allen', 'B1238475', '2022-02-23 17:35:59', '園主任', '2022-02-23 17:36:34', '園主任', '\"[{\"name\":\"assign_name\",\"value\":\"園主任v2\"},{\"name\":\"fillin_date\",\"value\":\"2022-02-25\"},{\"name\":\"name\",\"value\":\"Allen\"},{\"name\":\"birth\",\"value\":\"1991-07-13\"},{\"name\":\"pid\",\"value\":\"B1238475\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_home\",\"value\":\"03113212\"},{\"name\":\"phone_mobile\",\"value\":\"06123128\"},{\"name\":\"address\",\"value\":\"屏東縣屏東市自由路15531號\"},{\"name\":\"residence\",\"value\":\"屏東縣屏東市自由路15531號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"小學以下\"},{\"name\":\"marital\",\"value\":\"未婚\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"漁\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"0\"},{\"name\":\"economic_status_0\",\"value\":\"123334\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"2\"},{\"name\":\"drug_record_2\",\"value\":\"6\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"3\"},{\"name\":\"correctional_question_start\",\"value\":\"2019-04\"},{\"name\":\"correctional_question_end\",\"value\":\"2020-10\"},{\"name\":\"correctional_year\",\"value\":\"1\"},{\"name\":\"correctional_month\",\"value\":\"6\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time\",\"value\":\"0\"},{\"name\":\"treatment_time_year\",\"value\":\"109\"},{\"name\":\"treatment_time_month\",\"value\":\"1\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"已接受治療\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"test醫院個管\"},{\"name\":\"medical_phone\",\"value\":\"0511453126\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"0312134513\"},{\"name\":\"CD4_index_0\",\"value\":\"1231\"},{\"name\":\"CD4_index_1\",\"value\":\"110\"},{\"name\":\"CD4_index_2\",\"value\":\"11\"},{\"name\":\"viral_0\",\"value\":\"2341\"},{\"name\":\"viral_1\",\"value\":\"100\"},{\"name\":\"viral_2\",\"value\":\"1\"},{\"name\":\"medical_other\",\"value\":\"test其他\"},{\"name\":\"medicine\",\"value\":\"Triumeq三恩美\"},{\"name\":\"medicine\",\"value\":\"Atripla亞翠佩\"},{\"name\":\"medicine\",\"value\":\"Complera康普萊\"},{\"name\":\"medicine\",\"value\":\"Bikyavy吉他韋\"},{\"name\":\"medicine\",\"value\":\"Symtuza信擇立\"},{\"name\":\"medicine\",\"value\":\"抑滋靈\"},{\"name\":\"medicine\",\"value\":\"伊芳滋\"},{\"name\":\"medicine\",\"value\":\"艾立莎\"},{\"name\":\"medicine\",\"value\":\"英特萊\"},{\"name\":\"medicine\",\"value\":\"諾億亞\"},{\"name\":\"medicine\",\"value\":\"瑞塔滋\"},{\"name\":\"symptoms\",\"value\":\"持續疲倦\"},{\"name\":\"symptoms\",\"value\":\"發燒\"},{\"name\":\"symptoms\",\"value\":\"其他\"},{\"name\":\"symptoms_other\",\"value\":\"合併症狀test\"},{\"name\":\"statement\",\"value\":\"個案問題陳述test\"},{\"name\":\"personal_system\",\"value\":\"個人系統test\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"診斷問題test主要\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"test處遇目標\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"資源與轉介test\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"90\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"employment_radio\",\"value\":\"就業輔導中\"},{\"name\":\"social_adaptation_radio\",\"value\":\"尚可\"},{\"name\":\"other_assessments\",\"value\":\"test其他評量\"},{\"name\":\"case_closed_yes\",\"value\":\"\"},{\"name\":\"case_closed_radio\",\"value\":\"暫不結案\"},{\"name\":\"case_closed_year\",\"value\":\"109\"},{\"name\":\"case_closed_month\",\"value\":\"12\"},{\"name\":\"case_closed_day\",\"value\":\"1\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"1\"},{\"name\":\"customFile1\",\"value\":\"123abc.PNG\"}]\"', '../upload/123abc.PNG', ''),
(3, 1, 4, 'life', 'Allen', 'B1238475', '2022-02-23 18:02:52', '園主任', '2022-02-23 18:03:44', '園主任', '\"[{\"name\":\"life_answer1\",\"value\":\"極不好\"},{\"name\":\"life_answer2\",\"value\":\"極滿意\"},{\"name\":\"life_answer3\",\"value\":\"有一點妨礙\"},{\"name\":\"life_answer4\",\"value\":\"極需要\"},{\"name\":\"life_answer5\",\"value\":\"中等程度享受\"},{\"name\":\"life_answer6\",\"value\":\"極有\"},{\"name\":\"life_answer7\",\"value\":\"很好\"},{\"name\":\"life_answer8\",\"value\":\"中等程度安全\"},{\"name\":\"life_answer9\",\"value\":\"中等程度健康\"},{\"name\":\"life_answer10\",\"value\":\"完全足夠\"},{\"name\":\"life_answer11\",\"value\":\"少許能夠\"},{\"name\":\"life_answer12\",\"value\":\"很足夠\"},{\"name\":\"life_answer13\",\"value\":\"完全不方便\"},{\"name\":\"life_answer14\",\"value\":\"中等程度機會\"},{\"name\":\"life_answer15\",\"value\":\"有一點好\"},{\"name\":\"life_answer16\",\"value\":\"不滿意\"},{\"name\":\"life_answer17\",\"value\":\"滿意\"},{\"name\":\"life_answer18\",\"value\":\"滿意\"},{\"name\":\"life_answer19\",\"value\":\"滿意\"},{\"name\":\"life_answer20\",\"value\":\"中等程度滿意\"},{\"name\":\"life_answer21\",\"value\":\"滿意\"},{\"name\":\"life_answer22\",\"value\":\"中等程度滿意\"},{\"name\":\"life_answer23\",\"value\":\"中等程度滿意\"},{\"name\":\"life_answer24\",\"value\":\"極滿意\"},{\"name\":\"life_answer25\",\"value\":\"中等程度滿意\"},{\"name\":\"life_answer26\",\"value\":\"一半有一半沒有\"},{\"name\":\"life_answer27\",\"value\":\"中等程度有\"},{\"name\":\"life_answer28\",\"value\":\"一直都有\"},{\"name\":\"customRange1\",\"value\":\"70\"},{\"name\":\"customRange2\",\"value\":\"90\"},{\"name\":\"customRange3\",\"value\":\"0\"},{\"name\":\"customRange4\",\"value\":\"95\"},{\"name\":\"customRange5\",\"value\":\"100\"},{\"name\":\"customRange6\",\"value\":\"80\"},{\"name\":\"customRange7\",\"value\":\"50\"},{\"name\":\"n0\",\"value\":\"3\"},{\"name\":\"n1\",\"value\":\"4\"},{\"name\":\"n2\",\"value\":\"6\"},{\"name\":\"n3\",\"value\":\"2\"},{\"name\":\"n4\",\"value\":\"1\"},{\"name\":\"n5\",\"value\":\"5\"},{\"name\":\"w_test\",\"value\":\"前測\"},{\"name\":\"fillin_date\",\"value\":\"2022-02-23\"},{\"name\":\"case_name\",\"value\":\"Allen\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"birth\",\"value\":\"1990-07-07\"},{\"name\":\"education\",\"value\":\"國小/小學\"},{\"name\":\"education_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"自由業\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"無神論\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"marital\",\"value\":\"未婚/單身\"},{\"name\":\"marital_other\",\"value\":\"\"},{\"name\":\"disease_type1\",\"value\":\"高血壓\"},{\"name\":\"disease_type2\",\"value\":\"高血糖\"},{\"name\":\"disease_type3\",\"value\":\"高血脂\"},{\"name\":\"health\",\"value\":\"很差\"},{\"name\":\"fillin_persion\",\"value\":\"別人填寫\"},{\"name\":\"fillin_endtime\",\"value\":\"66\"}]\"', '', ''),
(4, 1, 5, 'employment_satif', 'Allen', 'B1238475', '2022-02-23 18:04:22', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2022-02-23\"},{\"name\":\"name\",\"value\":\"Allen\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"1\"},{\"name\":\"fillin_date_1\",\"value\":\"2022-02-23\"},{\"name\":\"answer_score\",\"value\":\"0\"}]\"', '', ''),
(5, 1, 6, 'satif', 'Allen', 'B1238475', '2022-02-23 18:05:05', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-02-23\"},{\"name\":\"case_name\",\"value\":\"Allen\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"tsn_case_id\",\"value\":\"1\"},{\"name\":\"agency\",\"value\":\"test123\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"3\"},{\"name\":\"answer4\",\"value\":\"2\"},{\"name\":\"answer6\",\"value\":\"1\"},{\"name\":\"answer7\",\"value\":\"1\"},{\"name\":\"answer8\",\"value\":\"1\"},{\"name\":\"answer9\",\"value\":\"1\"},{\"name\":\"answer10\",\"value\":\"2\"},{\"name\":\"answer11\",\"value\":\"4\"},{\"name\":\"answer12\",\"value\":\"4\"},{\"name\":\"answer13\",\"value\":\"4\"},{\"name\":\"answer14\",\"value\":\"4\"},{\"name\":\"answer15\",\"value\":\"4\"},{\"name\":\"answer16\",\"value\":\"\"},{\"name\":\"answer_score\",\"value\":\"35\"}]\"', '', ''),
(6, 1, 7, 'familyship', 'Allen', 'B1238475', '2022-02-23 18:05:43', '園主任', '2022-02-23 18:08:05', '園主任', '\"[{\"name\":\"w_test\",\"value\":\"前測\"},{\"name\":\"fillin_date\",\"value\":\"2022-02-23\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"education\",\"value\":\"國小/小學\"},{\"name\":\"education_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"服務業\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"marital\",\"value\":\"未婚/單身\"},{\"name\":\"marital_other\",\"value\":\"\"},{\"name\":\"cohabitant\",\"value\":\"其他\"},{\"name\":\"cohabitant_other\",\"value\":\"哥哥\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"3\"},{\"name\":\"answer3\",\"value\":\"3\"},{\"name\":\"answer4\",\"value\":\"3\"},{\"name\":\"answer5\",\"value\":\"3\"},{\"name\":\"answer6\",\"value\":\"4\"},{\"name\":\"answer7\",\"value\":\"4\"},{\"name\":\"answer8\",\"value\":\"4\"},{\"name\":\"answer9\",\"value\":\"4\"},{\"name\":\"answer10\",\"value\":\"4\"},{\"name\":\"answer_score\",\"value\":\"36\"}]\"', '', ''),
(7, 1, 8, 'settlement', 'Allen', 'B1238475', '2022-02-23 18:10:08', '園主任', '2022-02-23 18:11:23', '園主任', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-02-23\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"name\",\"value\":\"Allen\"},{\"name\":\"birth\",\"value\":\"1994-07-07\"},{\"name\":\"pid\",\"value\":\"B1238475\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_mobile\",\"value\":\"3431413515\"},{\"name\":\"address\",\"value\":\"屏東縣屏東市自由路26313號\"},{\"name\":\"residence\",\"value\":\"屏東縣屏東市自由路26313號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"小學以下\"},{\"name\":\"marital\",\"value\":\"未婚\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"無\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"1\"},{\"name\":\"economic_status_1\",\"value\":\"31231\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"1\"},{\"name\":\"drug_record_1\",\"value\":\"5\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"2\"},{\"name\":\"correctional_question_start\",\"value\":\"2019-03\"},{\"name\":\"correctional_question_end\",\"value\":\"2019-08\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"5\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"108\"},{\"name\":\"treatment_time_month\",\"value\":\"3\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medicine\",\"value\":\"安以斯Ocmplera\"},{\"name\":\"symptoms\",\"value\":\"頭痛\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"test個人系統\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"basic_indicator\",\"value\":\"藥癮者居無定所\"},{\"name\":\"basic_indicator\",\"value\":\"本身同意於安置中心入住並有意願重新開始者\"},{\"name\":\"end_indicator\",\"value\":\"入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)\"},{\"name\":\"end_indicator\",\"value\":\"生活可自理者且行動能力正常\"},{\"name\":\"end_indicator\",\"value\":\"個案需要至感染科就診，並附上病歷摘要表，以利審核\"},{\"name\":\"end_indicator\",\"value\":\"個案家屬需負擔個案就醫、生活用品等費用\"},{\"name\":\"resource_w_referrals\",\"value\":\"資源與轉介test\"},{\"name\":\"customFile1\",\"value\":\"abc123.PNG\"}]\"', '../upload/abc123.PNG', ''),
(13, 1, 9, 'health', 'Allen', 'B1238475', '2022-03-14 19:36:25', '園主任', '2022-03-14 19:40:49', '園主任', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-03-14\"},{\"name\":\"name\",\"value\":\"Allen\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"B1238475\"},{\"name\":\"medical_card\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"health_clinic_unit\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_manager\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"methadone_time\",\"value\":\"\"},{\"name\":\"methadone_dosage\",\"value\":\"\"},{\"name\":\"methadone_hospital\",\"value\":\"\"},{\"name\":\"methadone_hospital_phone\",\"value\":\"\"},{\"name\":\"diagnosis\",\"value\":\"\"},{\"name\":\"visiting_hospital\",\"value\":\"\"},{\"name\":\"visiting_hospital_phone\",\"value\":\"\"},{\"name\":\"medical_history\",\"value\":\"\"},{\"name\":\"STD_type_other\",\"value\":\"\"},{\"name\":\"STD_treatment_other\",\"value\":\"\"},{\"name\":\"smoke_age\",\"value\":\"\"},{\"name\":\"smoke_frequency\",\"value\":\"\"},{\"name\":\"smoke_resons\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_2\",\"value\":\"\"}]\"', '', '\"[{\"name\":\"mtable1&medical_rec_1[]\",\"value\":[\"1\",\"\",\"\",\"\",\"\",\"\",\"\",\"1\",\"1\",\"\",\"\",\"1\",\"1\",\"1\",\"\",\"1\",\"1\",\"\",\"\",\"\",\"1\",\"1\",\"\",\"1\",\"1\",\"\",\"\",\"\",\"\",\"\",\"\",\"1\"]},{\"name\":\"mtable1&medical_rec_2[]\",\"value\":[\"1\",\"1\",\"1\",\"1\",\"1\",\"\",\"1\",\"\",\"\",\"1\",\"1\",\"\",\"1\",\"\",\"1\",\"\",\"1\",\"\",\"1\",\"\",\"1\",\"\",\"5\",\"\",\"\",\"1\",\"1\",\"1\",\"1\",\"1\",\"\",\"\",\"\",\"\",\"1\",\"1\",\"\",\"\",\"\",\"1\"]},{\"name\":\"mtable2&medical_rec_1[]\",\"value\":[\"2\",\"2\",\"2\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"2\",\"2\",\"2\",\"\",\"2\",\"\",\"2\",\"\",\"\",\"2\",\"2\",\"2\",\"2\",\"2\",\"\",\"2\",\"\",\"\",\"\",\"2\",\"\",\"2\"]},{\"name\":\"mtable2&medical_rec_2[]\",\"value\":[\"2\",\"\",\"\",\"\",\"2\",\"2\",\"\",\"2\",\"\",\"2\",\"2\",\"\",\"2\",\"2\",\"2\",\"\",\"2\",\"\",\"\",\"2\",\"\",\"2\",\"\",\"\",\"2\",\"2\",\"\",\"2\",\"\",\"2\",\"2\",\"2\",\"\",\"\",\"2\",\"2\",\"2\",\"\",\"\",\"2\"]},{\"name\":\"mtable3&medical_rec_1[]\",\"value\":[\"3\",\"\",\"3\",\"\",\"3\",\"\",\"3\",\"3\",\"\",\"\",\"3\",\"\",\"3\",\"\",\"3\",\"\",\"\",\"\",\"3\",\"\",\"3\",\"\",\"3\",\"\",\"3\",\"\",\"3\",\"\",\"\",\"\",\"3\",\"3\"]},{\"name\":\"mtable3&medical_rec_2[]\",\"value\":[\"5\",\"5\",\"6\",\"6\",\"6\",\"\",\"5\",\"6\",\"\",\"\",\"\",\"5\",\"6\",\"6\",\"6\",\"5\",\"5\",\"\",\"\",\"\",\"5\",\"5\",\"6\",\"6\",\"6\",\"\",\"5\",\"as\",\"a\",\"a\",\"\",\"5\",\"6\",\"a\",\"a\",\"5\",\"5\",\"6\",\"6\",\"6\"]}]\"');

-- --------------------------------------------------------

--
-- 資料表結構 `form_all_info`
--

CREATE TABLE `form_all_info` (
  `Id` int(30) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Case_id` int(30) NOT NULL,
  `Case_name` varchar(20) NOT NULL,
  `Case_pid` varchar(50) NOT NULL,
  `Url` varchar(2000) NOT NULL,
  `Number` int(10) NOT NULL,
  `Form_name` varchar(30) NOT NULL,
  `Fillin_date` date NOT NULL,
  `Remark` varchar(200) NOT NULL,
  `Other_info` varchar(1000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `form_all_info`
--

INSERT INTO `form_all_info` (`Id`, `Phone_id`, `Case_id`, `Case_name`, `Case_pid`, `Url`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'case', '2022-02-23', 'test12313', '\"[{\"name\":\"case\",\"value\":\"暫不結案，持續服務至民國110年3月1日\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 17:37:38', '園主任'),
(2, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 1, 'case', '2022-02-25', '', '\"[{\"name\":\"case\",\"value\":\"暫不結案，持續服務至民國109年12月1日\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 17:36:34', '園主任'),
(3, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 2, 'case', '2022-02-04', 'test121', '', '2022-02-23 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(4, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'life', '2022-02-23', 'test122', '\"[{\"name\":\"life\",\"value\":\"前測\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 18:03:44', '園主任'),
(5, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'employment_satif', '2022-02-23', '123', '\"[{\"name\":\"employment_satif\",\"value\":\"0\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 18:04:22', '園主任'),
(6, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'satif', '2022-02-23', '', '\"[{\"name\":\"satif\",\"value\":\"35\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 18:05:05', '園主任'),
(7, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'familyship', '2022-02-23', '', '\"[{\"name\":\"familyship\",\"value\":\"36\"},{\"name\":\"familyship\",\"value\":\"前測\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 18:08:05', '園主任'),
(8, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'settlement', '2022-02-23', '', '\"[{\"name\":\"settlement\",\"value\":\"符合基本條件指標條件共2項，符合收案指標條件共4項。\"}]\"', '2022-02-23 00:00:00', '園主任', '2022-02-23 18:11:23', '園主任'),
(9, 2, 1, 'Allen', 'B1238475', 'case_detail.php?name=Allen&pid=B1238475&date=2021-11-25&grade=A&property=%E7%A4%BE%E5%8D%80&type=%E6%84%9B%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85&id=2&open_id=1&addition=K%E4%BB%96%E5%91%BD&age=36&gender=%E7%94%B7', 0, 'health', '2022-02-11', '2022/03/01', '', '2022-03-01 00:00:00', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `ha_phone`
--

CREATE TABLE `ha_phone` (
  `Id` int(30) NOT NULL,
  `Phone_id` int(30) NOT NULL,
  `Call_datetime` datetime NOT NULL,
  `Way` varchar(20) NOT NULL,
  `Way_detail` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Object_type` varchar(10) NOT NULL,
  `Addiction` varchar(200) NOT NULL,
  `M_addiction` varchar(200) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `A_detail` varchar(20) NOT NULL,
  `Address` varchar(30) NOT NULL,
  `L_detail` varchar(30) NOT NULL,
  `Info_Name` varchar(30) NOT NULL,
  `Relationship_detail` varchar(20) NOT NULL,
  `R_detail` varchar(20) NOT NULL,
  `R_phone` varchar(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Referral_detail` varchar(20) NOT NULL,
  `Referral_phone` varchar(20) NOT NULL,
  `Referral_name` varchar(20) NOT NULL,
  `Know_from` varchar(50) NOT NULL,
  `Know_from_detail` varchar(20) NOT NULL,
  `Eligible` varchar(10) NOT NULL,
  `Assign` varchar(10) NOT NULL,
  `Phone_note` varchar(2000) NOT NULL,
  `Count` varchar(1000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `ha_phone`
--

INSERT INTO `ha_phone` (`Id`, `Phone_id`, `Call_datetime`, `Way`, `Way_detail`, `Name`, `Gender`, `Object_type`, `Addiction`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, `Info_Name`, `Relationship_detail`, `R_detail`, `R_phone`, `Referral`, `Referral_detail`, `Referral_phone`, `Referral_name`, `Know_from`, `Know_from_detail`, `Eligible`, `Assign`, `Phone_note`, `Count`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 1, '2021-10-19 00:00:00', '電訪', '', 'Tim', '女', '一般藥癮者', '安非他命、K他命', '安非他命', '25', '20-29歲', '臺北市松山區八德路', '北部', 'TimMom', '母親', '父母', '0933186600', '屏安醫院', '醫院', '087622670', '病房佐理員', '屏安醫院', '醫院', '是', '社工員2', '  ', '2', '2021-11-17 00:00:00', '社工員2', '2022-01-18 18:19:22', '園主任'),
(2, 2, '2021-10-20 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市', '北部', 'Allen', 'Allen自己', '本人', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '是', '社工員1', 'no', '3', '2021-11-10 00:00:00', '社工員1', '2021-10-20 12:11:00', '園主任'),
(3, 3, '2021-10-30 00:00:00', '面訪', '社區', 'Amy', '男', '一般藥癮者', '安非他命', '安非他命', '20', '20-29歲', '屏東縣', '南部', 'Amy', '本人', '本人', '', '自行求助', '自行求助', '', '', '屏東縣政府社會處', '社福機構', '是', '社工員1', '沒有', '5', '2021-10-30 07:00:00', '社工員1', '2021-10-30 00:00:00', '社工員1'),
(31, 2, '2021-11-05 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen本人', 'Allen本人', '本人', '0009231737185', '矯正署', '矯正機關', '087622670', '矯正署人員', '', '醫院', '是', '社工員2', '測試', '4', '2021-11-10 00:00:00', '社工員1', '2022-01-04 11:08:32', '園主任'),
(39, 2, '2021-11-04 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen', '本人', '', '09852154', '矯正署', '矯正機關', '', '矯正署人員', '', '醫院', '是', '社工員1', 'ddwdd', '3', '2021-11-10 00:00:00', '社工員1', '2022-01-04 11:08:56', '園主任'),
(40, 2, '2021-11-07 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen父親', 'Allen父親', '', '09852154', '矯正署', '矯正機關', '', '矯正署人員', '', '醫院', '是', '社工員2', 'test1', '4', '2021-11-10 00:00:00', '社工員1', '2021-11-22 18:40:28', ''),
(43, 2, '2021-11-08 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen', '本人', '', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '', '醫院', '是', '社工員2', 'test2', '5', '2021-11-10 00:00:00', '社工員1', '2021-11-22 18:43:18', ''),
(46, 4, '2021-10-10 22:20:00', '電訪', '', '匿名A', '不明', '家庭', '酒精、強力膠、菸、精神藥物', '菸、精神藥物', '51', '50-59歲', '臺東縣', '東部', '匿名A', '本人', '本人', '0254433126', '臺東某社區', '社區', '012317461745', '村長', '快樂社福機構', '社福機構', '不明', '社工員2', '測試', '1', '2021-11-22 01:20:49', '社工員1', '2021-11-22 20:20:49', ''),
(47, 4, '2021-10-11 11:11:00', '電訪', '', '匿名A', '不明', '家庭', '酒精、強力膠、菸、精神藥物', '菸、精神藥物', '51', '50-59歲', '臺東縣', '東部', '匿名A', '本人', '本人', '0254433126', '臺東某社區', '社區', '012317461745', '村長', '快樂社福機構', '社福機構', '不明', '社工員1', '測試2', '2', '2021-11-22 01:24:26', '社工員1', '2021-11-22 20:24:26', ''),
(49, 1, '2021-11-17 00:00:00', '電訪', '', 'Tim', '女', '一般藥癮者', '安非他命、K他命', '安非他命', '', '20-29歲', '臺北市松山區八德路', '北部', 'TimMom', 'Mom', '', '09367522', '屏安醫院', '醫院', '087622670', '病房佐理員', '', '醫院', '是', '社工員1', 'test1234', '2', '2021-11-17 00:00:00', '園主任', '2022-01-18 18:20:46', '園主任'),
(51, 2, '2021-11-10 00:00:00', '面訪', '監所', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen', '本人', '', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '', '醫院', '是', '社工員1', '14', '6', '2021-11-10 00:00:00', '園主任', '2022-01-04 11:11:46', '園主任'),
(52, 5, '2021-12-30 08:00:00', '電訪', '', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '31', '30-39歲', '高雄縣', '南部', 'deny', '本人', '本人', '09852233', '自行求助', '自行求助', '', '', '安平醫院', '醫院', '', '社工員2', 'test2324', '1', '2021-12-31 00:00:00', '園主任', '2022-01-04 18:59:33', '園主任'),
(55, 5, '2021-12-31 00:00:00', '電訪', '', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '', '30-39歲', '高雄縣', '南部', 'denyfa', '父母', '', '09852233', '自行求助', '自行求助', '', '', '', '醫院', '', '社工員2', 'te', '2', '2021-12-31 00:00:00', '園主任', '2022-01-08 11:53:58', '園主任'),
(57, 6, '2021-10-15 08:29:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、大麻', '36', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行求助', '自行求助', '', '', '', '教會', '', '社工員2', 'test', '1', '2022-01-21 19:41:49', '園主任', '2022-01-21 19:41:49', ''),
(58, 2, '2021-11-30 00:00:00', '', '', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '', '30-39歲', '新北市', '北部', 'Allen', '本人', '', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '', '醫院', '是', '社工組長', 'teqweqdw', '7', '2022-01-25 17:12:28', '園主任', '2022-01-25 17:12:28', '');

-- --------------------------------------------------------

--
-- 資料表結構 `scale`
--

CREATE TABLE `scale` (
  `Id` int(30) NOT NULL,
  `Scale_id` int(30) NOT NULL,
  `Open_case_id` int(30) NOT NULL,
  `Open_case_date` datetime NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `Scale_source` varchar(300) NOT NULL,
  `Scale_score` int(30) DEFAULT NULL,
  `Scale_type` varchar(100) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(330) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `screening`
--

CREATE TABLE `screening` (
  `Id` int(30) NOT NULL,
  `Screening_id` int(30) NOT NULL,
  `Reservation_date` date NOT NULL,
  `Reservation_time` time NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `A_detail` varchar(20) NOT NULL,
  `Phone` varchar(30) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Sexual_orientation` varchar(10) NOT NULL,
  `Screening_type` varchar(30) NOT NULL,
  `Screening_results` varchar(50) NOT NULL,
  `Interview_content` varchar(2000) NOT NULL,
  `Remark` varchar(1000) NOT NULL,
  `Reagent_seq` varchar(30) NOT NULL,
  `Amount` varchar(80) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `screening`
--

INSERT INTO `screening` (`Id`, `Screening_id`, `Reservation_date`, `Reservation_time`, `Name`, `Age`, `A_detail`, `Phone`, `Gender`, `Sexual_orientation`, `Screening_type`, `Screening_results`, `Interview_content`, `Remark`, `Reagent_seq`, `Amount`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(3, 1, '2021-10-07', '10:50:00', 'Cerytics', '22', '20-29歲', '0621312345', '跨性別', '同性', 'HIV', '', '', 'test37', '', '', '2022-01-15 19:44:44', '園主任', '2022-03-07 18:09:08', '園主任'),
(4, 2, '2021-11-04', '14:15:00', 'Kiealy', '36', '30-39歲', '023458942', '男', '異性', 'HIV+梅毒', '', 'TWEW', '', 'RC1019281', '125', '2022-01-15 19:46:52', '園主任', '2022-01-20 22:49:54', '園主任'),
(5, 3, '2021-09-10', '07:10:00', 'jien', '22', '20-29歲', '076524388', '女', '雙性', '梅毒', '梅 positive', 'test', ' tew t ', 'SW1353', '249', '2022-01-18 18:09:14', '園主任', '0000-00-00 00:00:00', ''),
(6, 4, '2021-12-08', '13:20:00', 'heriao', '41', '40-49歲', '038741812', '女', '異性', 'HIV+梅毒', 'H+梅 positive', 'test', '', '', '', '2022-01-20 22:48:50', '園主任', '0000-00-00 00:00:00', ''),
(7, 5, '2022-01-06', '07:10:00', 'test', '', '30-39歲', '052234423', '跨性別', '異性', 'HIV', 'H negative', '', '', '', '', '2022-03-07 18:10:11', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `sign_notice`
--

CREATE TABLE `sign_notice` (
  `Id` int(11) NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `authority` int(10) NOT NULL,
  `date` date NOT NULL,
  `person` varchar(10) NOT NULL,
  `datetime` varchar(16) NOT NULL,
  `authority_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `sign_notice`
--

INSERT INTO `sign_notice` (`Id`, `file_name`, `authority`, `date`, `person`, `datetime`, `authority_name`) VALUES
(2, '開會', 1, '0000-00-00', '園主任', '2021-12-16 12:00', '、、'),
(3, 'Allen家訪', 1, '0000-00-00', '園主任', '2021-12-21 12:00', '、、'),
(4, '1213測試', 1, '0000-00-00', '園主任', '2021-12-14 12:00', '、、'),
(5, 'Tim(安非他命)會談', 1, '0000-00-00', '園主任', '2021-11-19 09:00', '社工員1、社工員2、'),
(6, 'deny(大麻)會談', 1, '0000-00-00', '園主任', '2021-10-14 12:00', '社工員2、社工員1、'),
(7, 'deny(大麻)會談', 1, '0000-00-00', '園主任', '2021-12-31 12:00', '社工員2、社工員1、'),
(8, 'deny(大麻)會談', 1, '0000-00-00', '園主任', '2021-12-31 12:00', '社工員2、社工員1、'),
(9, 'Allen(K他命)會談', 1, '0000-00-00', '園主任', '2021-11-09 12:00', '社工員2、社工組長、'),
(10, 'Allen(K他命)會談', 1, '0000-00-00', '園主任', '2021-11-06 07:00', '社工員1、社工員2、'),
(11, 'Allen(K他命)會談', 1, '0000-00-00', '園主任', '2021-11-10 12:00', '社工員1、社工員2、'),
(12, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-27 12:00', '社工員1、執行長、'),
(13, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-27 09:00', '社工組長、社工員1、'),
(14, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-11-17 12:00', '社工組長、社工員2、'),
(15, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-27 12:00', '社工組長、執行長、'),
(16, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-28 12:00', '社工員2、社工員1、'),
(17, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-26 12:00', '社工員2、社工員1、'),
(18, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2022-01-04 12:00', '社工員1、社工組長、'),
(19, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-11-27 12:00', '社工員1、社工組長、'),
(20, 'yukia(海洛因,安非他命)面訪', 1, '0000-00-00', '園主任', '2021-09-26 14:00', '社工員1、社工組長、'),
(21, 'yukia(海洛因,安非他命)面訪', 1, '0000-00-00', '園主任', '2021-10-15 14:00', '社工員2、社工組長、'),
(22, 'yukia(海洛因,安非他命)面訪', 1, '0000-00-00', '園主任', '2021-10-11 12:00', '社工員1、社工員2、'),
(23, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-09-17 08:00', '社工員2、社工組長、'),
(24, 'Deny(大麻)面訪', 1, '0000-00-00', '園主任', '2021-12-18 15:00', '社工員2、社工員1、'),
(25, '黃QQ(2021-12-09)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-12-09 15:00', '社工員1、社工員2、'),
(26, '黃QQ(2021-12-09)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-12-09 09:30', '社工員2、社工員1、'),
(27, '黃QQ(2021-12-16)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-12-16 08:30', '社工員2、社工員1、'),
(28, '黃QQ(2021-12-10)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-12-10 12:00', '社工員2、社工員1、'),
(29, '黃QQ(2022-01-21)監所輔導-訪談', 1, '0000-00-00', '園主任', '2022-01-21 07:00', '社工員1、社工員2、'),
(30, '黃QQ(2022-01-28)監所輔導-訪談', 1, '0000-00-00', '園主任', '2022-01-28 12:00', '社工員1、執行長、'),
(31, '黃QQ(2022-02-04)監所輔導-訪談', 1, '0000-00-00', '園主任', '2022-02-04 06:30', '社工組長、社工員2、'),
(32, 'test(2021-11-11)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-11-11 12:00', '社工員2、、');

-- --------------------------------------------------------

--
-- 資料表結構 `tw_counties`
--

CREATE TABLE `tw_counties` (
  `Id` int(20) NOT NULL,
  `Area` varchar(30) NOT NULL,
  `Counties_Cities` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `tw_counties`
--

INSERT INTO `tw_counties` (`Id`, `Area`, `Counties_Cities`) VALUES
(1, '北部', '基隆市'),
(2, '北部', '臺北市'),
(3, '北部', '新北市'),
(4, '北部', '桃園市'),
(5, '北部', '新竹縣'),
(6, '北部', '新竹市'),
(7, '北部', '宜蘭縣'),
(8, '中部', '苗栗縣'),
(9, '中部', '臺中市'),
(10, '中部', '彰化縣'),
(11, '中部', '南投縣'),
(12, '中部', '雲林縣'),
(13, '南部', '嘉義縣'),
(14, '南部', '嘉義市'),
(15, '南部', '臺南市'),
(16, '南部', '高雄市'),
(17, '南部', '屏東縣'),
(18, '南部', '澎湖縣'),
(19, '東部', '花蓮縣'),
(20, '東部', '臺東縣'),
(21, '離島', '金門縣'),
(22, '離島', '連江縣');

-- --------------------------------------------------------

--
-- 資料表結構 `user_info`
--

CREATE TABLE `user_info` (
  `Id` int(11) NOT NULL,
  `Account` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Name` varchar(10) NOT NULL,
  `Authority` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT current_timestamp(),
  `Department` varchar(10) NOT NULL,
  `Job` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user_info`
--

INSERT INTO `user_info` (`Id`, `Account`, `Password`, `Name`, `Authority`, `Date`, `Department`, `Job`) VALUES
(1, 'text1', '123', '社工員1', 1, '2021-03-06 17:04:49', '行政中心', '社工'),
(2, 'text2', '456', '社工員2', 1, '2020-10-05 21:12:04', '行政中心', '社工'),
(3, 'test3', '789', '社工組長', 2, '2020-10-05 21:12:04', '行政中心', '組長'),
(5, 'test5', '258', '園主任', 3, '2020-10-05 21:12:04', '伯特利家園', '主任'),
(6, 'test6', '369', '執行長', 4, '2020-10-05 21:12:04', '行政中心', '執行長'),
(10, 'grace12', '0000', '歐陽美悌', 1, '2021-02-05 11:47:28', '行政中心', '行政人員'),
(11, 'grace75', '0000', '林鈺舒', 1, '2021-02-05 11:49:26', '行政中心', '社工助理'),
(12, 'grace66', '0000', '丘培民', 1, '2021-02-05 11:49:47', '行政中心', '社工'),
(13, 'grace69', '0000', '邱怡玲', 1, '2021-02-05 11:52:06', '行政中心', '社工'),
(14, 'grace78', '0000', '許文瀞', 1, '2021-02-05 11:52:49', '行政中心', '組長'),
(15, 'grace39', '0000', '張簡卉筑', 2, '2021-02-05 11:53:21', '行政中心', '社工組長'),
(16, 'grace01', '0000', '李國揚', 4, '2021-03-18 13:21:20', '行政中心', '執行長'),
(17, 'grace02', '0000', '苗長青', 4, '2021-03-18 13:23:31', '行政中心', '執行長秘書'),
(18, 'grace03', '0000', '吳智文', 3, '2021-03-18 13:24:33', '伯特利家園', '主任'),
(19, 'grace04', '0000', '李萬榮', 1, '2021-03-18 13:25:50', '伯特利家園', '生活輔導員'),
(20, 'grace05', '0000', '晏傳恕', 1, '2021-03-18 13:27:08', '伯特利家園', '生活輔導員'),
(21, 'grace06', '0000', '施朝根', 3, '2021-03-18 13:27:42', '毘努伊勒家園', '主任'),
(22, 'grace07', '0000', '洪勝霖', 1, '2021-03-18 13:28:18', '毘努伊勒家園', '生活輔導組長'),
(23, 'grace08', '0000', '力聖臨', 1, '2021-03-18 13:29:11', '毘努伊勒家園', '生活輔導員'),
(24, 'test', 'test', '花花', 1, '2021-03-06 17:04:49', '行政中心', '組長');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `case_all`
--
ALTER TABLE `case_all`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `consult`
--
ALTER TABLE `consult`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `counsel`
--
ALTER TABLE `counsel`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `counsel_visit`
--
ALTER TABLE `counsel_visit`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `current_case`
--
ALTER TABLE `current_case`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `face`
--
ALTER TABLE `face`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `form_all_info`
--
ALTER TABLE `form_all_info`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `ha_phone`
--
ALTER TABLE `ha_phone`
  ADD PRIMARY KEY (`Id`) USING BTREE;

--
-- 資料表索引 `scale`
--
ALTER TABLE `scale`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `screening`
--
ALTER TABLE `screening`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `sign_notice`
--
ALTER TABLE `sign_notice`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `tw_counties`
--
ALTER TABLE `tw_counties`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`Id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `announcement`
--
ALTER TABLE `announcement`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `case_all`
--
ALTER TABLE `case_all`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `consult`
--
ALTER TABLE `consult`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel`
--
ALTER TABLE `counsel`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel_visit`
--
ALTER TABLE `counsel_visit`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `current_case`
--
ALTER TABLE `current_case`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `face`
--
ALTER TABLE `face`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forms`
--
ALTER TABLE `forms`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_all_info`
--
ALTER TABLE `form_all_info`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ha_phone`
--
ALTER TABLE `ha_phone`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `scale`
--
ALTER TABLE `scale`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening`
--
ALTER TABLE `screening`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sign_notice`
--
ALTER TABLE `sign_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tw_counties`
--
ALTER TABLE `tw_counties`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_info`
--
ALTER TABLE `user_info`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
