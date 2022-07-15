-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-07-14 16:25:42
-- 伺服器版本： 10.4.24-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- 資料表結構 `accounting_record`
--

CREATE TABLE `accounting_record` (
  `Id` int(255) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `Month_rep` longtext NOT NULL,
  `Season_rep` longtext NOT NULL,
  `Fir_half_rep` longtext NOT NULL,
  `Sec_half_rep` longtext NOT NULL,
  `Year_rep` longtext NOT NULL,
  `Cash_rep` longtext NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `accounting_record`
--

INSERT INTO `accounting_record` (`Id`, `Year`, `Month_rep`, `Season_rep`, `Fir_half_rep`, `Sec_half_rep`, `Year_rep`, `Cash_rep`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '109', '\"[{\"name\":\"upload_mon_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_mon_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_mon\",\"value\":\"abc123.PNG\"},{\"name\":\"property_mon\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_mon\",\"value\":\"abc123.PNG\"}]\"', '\"[{\"name\":\"upload_sea_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_sea_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_sea\",\"value\":\"abc123.PNG\"},{\"name\":\"property_sea\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_sea\",\"value\":\"abc123.PNG\"}]\"', '\"[{\"name\":\"upload_fir_half_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_fir_half_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_fir_half\",\"value\":\"abc123.PNG\"},{\"name\":\"property_fir_half\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_fir_half\",\"value\":\"abc123.PNG\"}]\"', '\"[{\"name\":\"upload_sec_half_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_sec_half_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_sec_half\",\"value\":\"abc123.PNG\"},{\"name\":\"property_sec_half\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_sec_half\",\"value\":\"abc123.PNG\"}]\"', '\"[{\"name\":\"upload_year_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_year_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_year\",\"value\":\"abc123.PNG\"},{\"name\":\"property_year\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_year\",\"value\":\"abc123.PNG\"}]\"', '\"[{\"name\":\"upload_cash_date\",\"value\":\"111年07月23日\"},{\"name\":\"upload_cash_remark\",\"value\":\"test備註ssa\"},{\"name\":\"income_cash\",\"value\":\"abc123.PNG\"},{\"name\":\"property_cash\",\"value\":\"abc123.PNG\"}, {\"name\":\"cash_cash\",\"value\":\"abc123.PNG\"}]\"', '2022-05-03 08:27:21', 'Timo', '2022-05-03 08:27:21', 'Timo');

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
-- 資料表結構 `board_supervisor`
--

CREATE TABLE `board_supervisor` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `file_path` varchar(2000) NOT NULL,
  `Supervise` varchar(100) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `board_supervisor`
--

INSERT INTO `board_supervisor` (`Id`, `Year`, `record_content`, `upload_content`, `file_path`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(27, '111', '[{\"name\":\"title_name\",\"value\":\"gdgd\"},{\"name\":\"ceo_name\",\"value\":\"gdgddg\"},{\"name\":\"attendees\",\"value\":\"dfgdgffdg\"},{\"name\":\"record\",\"value\":\"dfgfdgdfg\"},{\"name\":\"meeting_date\",\"value\":\"111年05月10日\"},{\"name\":\"meeting_time\",\"value\":\"22:10\"},{\"name\":\"place\",\"value\":\"dfgdgd\"},{\"name\":\"suggest\",\"value\":\"gdgdgfgdgs\"},{\"name\":\"next_focus\",\"value\":\"dfgdfgfdg\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:09:38', '社工員1', '2022-07-11 18:20:18', '園主任'),
(28, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"fgdgdgdfgd\"},{\"name\":\"upload_rec_date\",\"value\":\"111年05月10日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"螢幕擷取畫面 2022-04-26 133143.png\"}]\"', '../board_supervisor/upload/螢幕擷取畫面 2022-04-26 133143.png', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:09:52', '社工員1', '0000-00-00 00:00:00', ''),
(29, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload理監事會議記錄標題\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月10日\"},{\"name\":\"upload_rec_remark\",\"value\":\"testupload\"},{\"name\":\"customFile1\",\"value\":\"test1.docx\"}]\"', '../board_supervisor/upload/test1.docx', '園主任', '../board_supervisor/signature/1657546999.png', 'test理監事紀錄督導留言', '2022-07-11 21:43:19', '2022-07-11 18:14:16', '園主任', '2022-07-11 18:19:05', '園主任'),
(30, '111', '[{\"name\":\"title_name\",\"value\":\"第3次理監事會議紀錄\"},{\"name\":\"ceo_name\",\"value\":\"t\"},{\"name\":\"attendees\",\"value\":\"a\"},{\"name\":\"record\",\"value\":\"bv\"},{\"name\":\"meeting_date\",\"value\":\"111年07月11日\"},{\"name\":\"meeting_time\",\"value\":\"10:35\"},{\"name\":\"place\",\"value\":\"ax\"},{\"name\":\"suggest\",\"value\":\"x\"},{\"name\":\"next_focus\",\"value\":\"c\"}]', '', '', '園主任', '../board_supervisor/signature/1657546854.png', '理監事會議記錄\ntest督導留言', '2022-07-11 21:40:54', '2022-07-11 21:33:28', '園主任', '0000-00-00 00:00:00', ''),
(31, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第15次理監事會議紀錄\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"tesbs5.docx\"},{\"name\":\"customFile1\",\"value\":\"tesbs5.docx\"}]\"', '../board_supervisor/upload/tesbs5.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:34:58', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `calendar`
--

CREATE TABLE `calendar` (
  `id` int(240) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` varchar(2000) NOT NULL,
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
(32, 'test(2021-11-11)監所輔導-訪談', 'http://localhost:7330/HappyAlliance/HA/counsel_detail.php?id=2&counsel_id=622', '2021-11-11 12:00', '2021-11-11 13:00', '園主任', '', '2022-03-09 19:36:12'),
(33, 'Timmy(酒精)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=4', '2021-11-07 12:00', '2021-11-07 13:00', '園主任', '', '2022-04-15 19:18:08'),
(34, 'Deny(大麻)面訪', 'http://localhost:7330/HappyAlliance/HA/phone_detail_v2.php?phone_id=3', '2021-11-25 10:00', '2021-11-25 11:00', '園主任', '', '2022-04-15 19:28:08'),
(35, 'test(古柯鹼,搖頭丸,K他命,FM2藥丸,酒精,強力膠,檳榔,其他藥物)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=6', '2022-06-09 12:00', '2022-06-09 13:00', '社工員1', '', '2022-06-27 10:27:10'),
(36, 'Allen(2022-06-29)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-06-29 12:00', '2022-06-29 13:00', '社工員1', '', '2022-07-05 10:05:53'),
(37, 'Allen(2022-07-14)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-14 12:00', '2022-07-14 13:00', '社工員1', '', '2022-07-05 10:14:26'),
(38, 'Allen(2022-07-06)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-06 12:00', '2022-07-06 13:00', '社工員1', '', '2022-07-05 10:54:51'),
(39, 'Allen()在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', ' 12:00', ' 13:00', '社工員1', '', '2022-07-05 16:18:44'),
(40, 'Allen(2022-07-08)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-08 12:00', '2022-07-08 13:00', '社工員1', '', '2022-07-07 20:24:38'),
(60, '團督記錄簽核：第12次團督紀錄', 'http://localhost/HappyAlliance/HA/supervisor_record_detail.php?year=111&id=13&sr_id=13&rec_type=fillin', '2022-07-11 14:46', '2022-07-12 09:30', '園主任', '', '2022-07-11 20:57:46'),
(61, '團督記錄簽核：upload第3次團督會議記錄', 'http://localhost/HappyAlliance/HA/supervisor_record_detail.php?year=111&id=14&sr_id=14&rec_type=upload', '2022-07-11 15:09', '2022-07-13 15:09', '園主任', '', '2022-07-11 21:05:09'),
(64, '團督記錄簽核：第5次團督會議紀錄upload', 'http://localhost/HappyAlliance/HA/supervisor_record_detail.php?year=111&id=16&sr_id=16&rec_type=upload', '2022-07-11 15:12', '2022-07-13 15:12', '園主任', '', '2022-07-11 21:09:12'),
(67, '理監事會議記錄簽核：第3次理監事會議紀錄', 'http://localhost/HappyAlliance/HA/board_supervisor_detail.php?year=111&id=30&bs_id=30&rec_type=fillin', '2022-07-11 15:28', '2022-07-13 15:28', '園主任', '', '2022-07-11 21:33:28'),
(68, '理監事會議記錄簽核：第15次理監事會議紀錄', 'http://localhost/HappyAlliance/HA/board_supervisor_detail.php?year=111&id=31&bs_id=31&rec_type=upload', '2022-07-11 15:58', '2022-07-13 15:58', '園主任', '', '2022-07-11 21:34:58'),
(70, '會員大會記錄簽核：第33次會員大會記錄upload', 'http://localhost/HappyAlliance/HA/members_assemble_detail.php?year=111&id=12&ma_id=12&rec_type=upload', '2022-07-11 16:45', '2022-07-13 16:45', '園主任', '', '2022-07-11 22:02:45'),
(71, '會員大會記錄簽核：test會員大會記錄標題3', 'http://localhost/HappyAlliance/HA/members_assemble_detail.php?year=111&id=13&ma_id=13&rec_type=fillin', '2022-07-11 16:39', '2022-07-13 16:39', '園主任', '', '2022-07-11 22:03:39');

-- --------------------------------------------------------

--
-- 資料表結構 `closed`
--

CREATE TABLE `closed` (
  `Id` int(30) NOT NULL,
  `Open_case_id` text NOT NULL,
  `Closed_id` text NOT NULL,
  `Open_date` date NOT NULL,
  `Closed_date` date NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Main_issue` varchar(3000) NOT NULL,
  `Intervention` varchar(3000) NOT NULL,
  `Closed_reason` varchar(2000) NOT NULL,
  `Remark` varchar(3000) NOT NULL,
  `Assign` varchar(30) NOT NULL,
  `Supervise` varchar(30) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `closed`
--

INSERT INTO `closed` (`Id`, `Open_case_id`, `Closed_id`, `Open_date`, `Closed_date`, `Name`, `Gender`, `Main_issue`, `Intervention`, `Closed_reason`, `Remark`, `Assign`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 're211', '671', '2021-01-20', '2021-12-25', 'Allen', '男', '主要問題test2', '問題處遇test1', 'othertest結案原因123', '備註test461', '社工員1', '', '', '', '0000-00-00 00:00:00', '2022-04-06 18:01:44', '社工員1', '2022-04-06 19:50:28', '園主任'),
(2, 're161', '658', '2021-12-01', '2022-09-13', 'Amy', '女', '主要問題test111', '問題處遇test121', '失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）', '備註test46123', '社工員2', '園主任', '../signature/1651745907.png', 'TEST王小七', '2022-05-05 18:18:27', '2022-04-06 18:01:44', '社工員2', '0000-00-00 00:00:00', ''),
(9, '6', '672', '2021-10-11', '2021-12-16', '黃QQ', '男', '診斷問題主要問題test', 'TEST問題處遇QQ1', '達到目標，已無需要在服務', 'test結案原因/備註QQ', '社工員1', '園主任', '../signature/1657023532.png', 'test主任', '2022-07-05 20:18:52', '2022-07-05 19:14:38', '園主任', '2022-07-05 19:16:10', '園主任'),
(11, '', '699', '2022-07-02', '2022-07-01', 'testaaa', '女', 'test主要問題', '問題處遇test', 'othertest其他結案原因', '備註test', '社工員2', '', '', '', '0000-00-00 00:00:00', '2022-07-05 20:43:40', '園主任', '2022-07-05 20:43:40', '');

-- --------------------------------------------------------

--
-- 資料表結構 `consult`
--

CREATE TABLE `consult` (
  `Id` int(30) NOT NULL,
  `Phone_id` varchar(2000) NOT NULL,
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
(5, '1', '2021-09-16 09:00:00', '面訪', '社區', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'test0125', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 17:57:53', '園主任', '2022-01-25 17:57:53', ''),
(6, '2', '2021-09-25 14:30:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'yukia男友fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2021-10-08 00:00:00', '園主任', '2022-01-25 19:03:30', '園主任'),
(7, '2', '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukiad家', '家訪', '2021-09-26', '2021-09-26', '14:00:00', '15:00:00', '社工員1', '社工組長', 'test', 0, '2021-10-08 00:00:00', '園主任', '2022-01-25 18:45:34', '園主任'),
(8, '2', '2021-10-08 00:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2021-10-08 00:00:00', '園主任', '2022-01-25 18:45:34', '園主任'),
(9, '2', '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukia家裡', '家訪', '2021-10-15', '2021-10-15', '14:00:00', '15:00:00', '社工員2', '社工組長', 'TEST', 0, '2022-01-25 18:34:36', '園主任', '2022-01-25 18:45:34', '園主任'),
(10, '2', '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '', 'yukia男友家', '家訪', '2021-10-11', '2021-10-11', '12:00:00', '13:00:00', '社工員1', '社工員2', 'TEST', 0, '2022-01-25 18:35:40', '園主任', '2022-01-25 18:45:34', '園主任'),
(11, '2', '2021-09-29 00:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '是', '社工組長', 'testtest1', '6', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 18:36:37', '園主任', '2022-01-25 18:45:34', '園主任'),
(12, '1', '0000-00-00 00:00:00', '面訪', '家訪', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '', '', '屏安醫院', '醫院', '不明', '社工員2', '', '', 'Allen家裡', '家訪', '2021-09-17', '2021-09-17', '08:00:00', '09:00:00', '社工員2', '社工組長', 'TEST123', 0, '2022-01-25 19:16:02', '園主任', '2022-01-25 19:16:25', '園主任'),
(13, '1', '2021-10-05 00:00:00', '電訪', '', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen', '本人', '', '09853357', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'TEST', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 19:17:14', '園主任', '2022-01-25 19:17:14', ''),
(14, '3', '2021-12-16 10:00:00', '面訪', '社區', 'Deny', '不明', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:02:17', '園主任', '2022-04-15 19:26:41', '園主任'),
(15, '3', '2021-12-17 00:00:00', '電訪', '', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Denyfa', 'deny父親', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員2', 'TEST', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 20:06:35', '園主任', '2022-01-25 20:06:35', ''),
(16, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '不明', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '', '社區', '社區', '2021-12-18', '2021-12-18', '15:00:00', '16:00:00', '社工員2', '社工員1', 'TEST', 0, '2022-01-25 20:07:36', '園主任', '2022-01-25 20:07:36', ''),
(17, '4', '2021-12-29 16:10:00', '電訪', '', 'Timmy', '男', '家庭', '酒精', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Ameria', 'Timmy wife', '配偶', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:12:19', '園主任', '2022-04-15 19:16:21', '園主任'),
(18, '4', '2021-09-22 00:00:00', '電訪', '', 'Timmy', '男', '家庭', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', 'test', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:17:02', '園主任', '2022-04-15 19:17:02', ''),
(19, '4', '0000-00-00 00:00:00', '面訪', '家訪', 'Timmy', '男', '家庭', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', '', '', 'test家訪', '家訪', '2021-11-07', '2021-11-07', '12:00:00', '13:00:00', '社工員1', '', 'test備註	備註', 0, '2022-04-15 19:18:08', '園主任', '2022-04-15 19:18:08', ''),
(20, '3', '2021-11-21 00:00:00', '電訪', '', 'Deny', '不明', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '', '', '不明', '社工員1', 'test通話內容	', '4', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:27:30', '園主任', '2022-04-15 19:27:30', ''),
(21, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '不明', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '', '', '', '', '不明', '社工員1', '', '', 'test社區', '社區', '2021-11-25', '2021-11-25', '10:00:00', '11:00:00', '社工員2', '', 'test備註	', 0, '2022-04-15 19:28:08', '園主任', '2022-04-15 19:28:08', ''),
(22, '5', '2021-10-13 10:10:00', '面訪', '社區', '黃QQ', '男', '愛滋感染者', '', '海洛因、搖頭丸、K他命、精神藥物', '47', '40-49歲', '屏東縣屏東市自由路67666號', '南部', '黃QQ的阿姨', '阿姨', '親戚', '0358542', '屏東某鄉鎮市社區', '社區', '', '', '', '', '不明', '社工員2', 'test諮詢內容	諮詢內容', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:44:17', '園主任', '2022-04-15 19:44:17', ''),
(23, '6', '2021-09-05 10:00:00', '電訪', '', 'test', '不明', '一般藥癮者', '', '古柯鹼、搖頭丸、K他命、FM2藥丸、酒精、強力膠、檳榔、其他藥物', '18', '10-19歲', '屏東縣內埔鄉東寧村勝利路12666號', '南部', 'test', 'test', '本人', '011111111', '', '', '', '', '', '', '不明', '社工組長', 'test諮詢內容	諮詢內容	諮詢內容	諮詢內容1111', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:56:23', '園主任', '2022-04-15 19:56:23', '');

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
(1, '高雄監獄', 766, '黃QQ', '男生', '同性', '1969-08-11', 'T121956775', '劉大福', '988517485', '屏東縣內埔鄉東寧村勝利路5557-2號', '2016-09-30', '2022-05-06', '2022-05-18', '0000-00-00', '0000-00-00', '0000-00-00', '是', '2022-06-25', '否', '否', '2022-02-11', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-03-05 00:00:00', '', '2022-04-13 22:05:27', '園主任'),
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
  `Id` int(254) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Phone_id` varchar(2000) NOT NULL,
  `Unopen_type` varchar(30) NOT NULL,
  `Case_Create_date` date NOT NULL,
  `Object_type` varchar(50) NOT NULL,
  `Case_grade` varchar(30) NOT NULL,
  `Case_property` varchar(50) NOT NULL,
  `Open_case_date` date NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `Birth` date NOT NULL,
  `Case_pid` varchar(2000) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Case_state` varchar(200) NOT NULL,
  `Close_case_date` date NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `current_case`
--

INSERT INTO `current_case` (`Id`, `Case_id`, `Phone_id`, `Unopen_type`, `Case_Create_date`, `Object_type`, `Case_grade`, `Case_property`, `Open_case_date`, `Name`, `Gender`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Close_case_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(3, 'RE111', '2', 'screening', '2021-07-23', '藥癮家庭', 'B', '自立宿舍', '2021-06-03', 'Kiealy', '男', '023458942', '1912-04-09', 's61233141', '矯正機關', '未結案', '0000-00-00', '2022-04-11 17:31:21', '園主任', '0000-00-00 00:00:00', ''),
(4, '6', '766', 'counsel', '2021-10-11', '親職兒少', 'C', '安置家園', '2021-10-11', '黃QQ', '男', '988517485', '1993-02-02', 'd1234455186', '矯正機關', '已結案', '2021-12-16', '2022-04-11 17:44:57', '園主任', '2022-07-05 19:14:38', '園主任'),
(6, 'RE161', '3', 'phone', '2022-04-11', '藥癮家庭', 'B', '自立宿舍', '2022-04-08', 'Deny', '男', '父母', '1798-06-07', 'q131214241', '醫院', '未結案', '0000-00-00', '2022-04-11 18:17:48', '園主任', '2022-07-01 19:47:59', '園主任'),
(8, 'RE16231', '', 'case', '2021-04-06', '藥癮家庭', 'C', '安置家園', '2021-04-05', '張啟生', '男', '06223341', '1862-07-07', 'h12364423', '民間社福機構', '未結案', '0000-00-00', '2022-04-13 13:24:57', '園主任', '0000-00-00 00:00:00', ''),
(9, 'RE1114', '766', 'counsel', '2022-04-15', '一般藥癮者', 'A', '安置家園', '2021-04-07', '黃QQ', '男', '988517485', '1969-08-11', 'T121956775', '醫院', '未結案', '0000-00-00', '2022-04-15 20:35:47', '園主任', '0000-00-00 00:00:00', ''),
(10, '12', '', 'case', '2021-04-07', '愛滋感染者', 'C', '安置家園', '2021-04-01', 'testc1231561w', '女', '0211111111', '1934-02-13', 'c12315611111', '社區', '未結案', '0000-00-00', '2022-04-15 20:43:29', '園主任', '0000-00-00 00:00:00', ''),
(13, '7', '4', 'phone', '2022-06-23', '親職兒少', 'B', '安置家園', '2022-06-23', 'Timmy', '男', '051232123', '1961-06-01', 'WS11112134', '醫院', '未結案', '0000-00-00', '2022-06-23 16:07:52', '園主任', '0000-00-00 00:00:00', ''),
(15, '8', '', 'case', '2022-06-21', '愛滋感染者', 'C', '安置家園', '2022-06-20', '張廷生', '男', '0612341124', '1952-06-14', 'A1221452', '醫院', '未結案', '0000-00-00', '2022-06-23 16:12:32', '園主任', '0000-00-00 00:00:00', ''),
(17, '9', '', 'case', '2022-06-09', '愛滋感染者', 'C', '自立宿舍', '2022-06-11', 'user221', '跨性別', '063141411', '1877-07-04', 's1235556677', '衛政', '未結案', '0000-00-00', '2022-07-01 20:48:11', '園主任', '0000-00-00 00:00:00', ''),
(18, '10', '', 'reopencase', '2022-07-05', '愛滋感染者', 'B', '自立宿舍', '2022-07-04', '黃QQ', '男', '988517485', '1993-02-02', 'd1234455186', '其他', '未結案', '0000-00-00', '2022-07-05 20:08:17', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `day_off`
--

CREATE TABLE `day_off` (
  `Id` int(255) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Reason` varchar(300) NOT NULL,
  `Overtime_date` date NOT NULL,
  `Hours` int(255) NOT NULL,
  `Makeup_date` date NOT NULL,
  `Makeup_hours` int(255) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL,
  `Supervise` varchar(30) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` varchar(54) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `day_off`
--

INSERT INTO `day_off` (`Id`, `Name`, `Reason`, `Overtime_date`, `Hours`, `Makeup_date`, `Makeup_hours`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`) VALUES
(6, 'qqq', 'qqq', '2022-07-14', 1, '2022-07-03', 13, '2022-07-06', '', '2022-07-06', '', '社工員1', '../signature/1657196603.png', '', '2022-07-07 20:23:23'),
(7, 'aaaa', 'aaa', '2022-07-08', 12, '2022-07-04', 3, '2022-07-06', 'ddd', '2022-07-06', 'ddd', '社工員1', '../signature/1657196442.png', '', '2022-07-07 20:20:42'),
(8, 'kkk', 'kkk', '2022-07-05', 6, '2022-07-05', 0, '2022-07-06', '社工員1', '0000-00-00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `dlgrec`
--

CREATE TABLE `dlgrec` (
  `Id` int(100) NOT NULL,
  `bf_num` int(100) NOT NULL,
  `al_num` int(100) NOT NULL,
  `em_num` int(100) NOT NULL,
  `lp_num` int(100) NOT NULL,
  `leave_num` int(100) NOT NULL,
  `dlgrec_date` date NOT NULL,
  `dlgrec_0` varchar(500) NOT NULL,
  `dlgrec_1` varchar(500) NOT NULL,
  `dlgrec_2` varchar(500) NOT NULL,
  `dlgrec_3` varchar(500) NOT NULL,
  `dlgrec_4` varchar(500) NOT NULL,
  `dlgrec_5` varchar(500) NOT NULL,
  `dlgrec_6` varchar(500) NOT NULL,
  `dlgrec_7` varchar(500) NOT NULL,
  `dlgrec_8` varchar(500) NOT NULL,
  `dlgrec_9` varchar(500) NOT NULL,
  `dlgrec_10` varchar(500) NOT NULL,
  `dlgrec_11` varchar(500) NOT NULL,
  `dlg_manager` varchar(30) NOT NULL,
  `social_worker` varchar(30) NOT NULL,
  `social_worker_sign` varchar(1000) NOT NULL,
  `social_worker_sign_msg` varchar(2000) NOT NULL,
  `social_worker_sign_time` datetime NOT NULL,
  `supervise` varchar(30) NOT NULL,
  `supervise_sign` varchar(1000) NOT NULL,
  `supervise_sign_msg` varchar(2000) NOT NULL,
  `supervise_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `dlgrec`
--

INSERT INTO `dlgrec` (`Id`, `bf_num`, `al_num`, `em_num`, `lp_num`, `leave_num`, `dlgrec_date`, `dlgrec_0`, `dlgrec_1`, `dlgrec_2`, `dlgrec_3`, `dlgrec_4`, `dlgrec_5`, `dlgrec_6`, `dlgrec_7`, `dlgrec_8`, `dlgrec_9`, `dlgrec_10`, `dlgrec_11`, `dlg_manager`, `social_worker`, `social_worker_sign`, `social_worker_sign_msg`, `social_worker_sign_time`, `supervise`, `supervise_sign`, `supervise_sign_msg`, `supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 20, 30, 29, 33, 3, '2021-12-22', 'test1', '', '', '', '', 'test2', 't', '', '', '', 'test5', 'test6\n', 'testw', '社工員1', '../signature/1651571061.png', 'test社工員留言45', '2022-05-03 17:44:21', '園主任', '../signature/1651571093.png', 'test督導留言', '2022-05-03 17:44:53', '2022-04-07 20:46:39', '社工員1', '2022-05-03 17:49:41', '園主任'),
(2, 17, 28, 28, 30, 2, '2021-11-10', 'test1', '', 'test2', '', '', '', 'test3', 'test4', 'test特殊個案反應情形輔導處理', 'test輔導諮詢執行實況	', 'test問題處遇概況	', 'test備註	', 'test管理員/生活輔導員', 'test社工員', '', '', '0000-00-00 00:00:00', 'test督導', '', '', '0000-00-00 00:00:00', '2022-04-07 20:47:56', '園主任', '2022-04-07 20:47:56', '');

-- --------------------------------------------------------

--
-- 資料表結構 `forms`
--

CREATE TABLE `forms` (
  `Id` int(100) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Form_id` int(100) NOT NULL,
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
(1, 'RE161', 1, 'settlement', 'Deny', 'q131214241', '2022-04-13 12:59:10', '園主任', '2022-04-27 18:49:02', '園主任', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-04-13\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"name\",\"value\":\"Deny\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"q131214241\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"basic_indicator\",\"value\":\"藥癮者居無定所\"},{\"name\":\"basic_indicator\",\"value\":\"本身同意於安置中心入住並有意願重新開始者\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合入住時藥癮檢測與每周、不定時藥癮檢測\"},{\"name\":\"end_indicator\",\"value\":\"入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)\"},{\"name\":\"end_indicator\",\"value\":\"個案須接種過疫苗才能入住機構\"},{\"name\":\"end_indicator\",\"value\":\"生活可自理者且行動能力正常\"},{\"name\":\"end_indicator\",\"value\":\"因應COVID-19疫情個案都必須做過快篩機制結果為陰性者才能入住\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"新文字文件.txt\"}]\"', '../upload/新文字文件.txt', ''),
(2, 'RE16231', 2, 'health', '張啟生', 'h12364423', '2022-04-13 13:28:56', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-04-13\"},{\"name\":\"name\",\"value\":\"張啟生\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"h12364423\"},{\"name\":\"medical_card\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"health_clinic_unit\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_manager\",\"value\":\"\"},{\"name\":\"medicine\",\"value\":\"Atripla亞翠佩\"},{\"name\":\"medicine\",\"value\":\"安以斯Ocmplera\"},{\"name\":\"medicine\",\"value\":\"滋若愷Juluca\"},{\"name\":\"medicine\",\"value\":\"Duovir倍歐減\"},{\"name\":\"medicine\",\"value\":\"Zovilam諾穩錠\"},{\"name\":\"medicine\",\"value\":\"衛滋\"},{\"name\":\"medicine\",\"value\":\"寧衛邁\"},{\"name\":\"symptoms\",\"value\":\"腹瀉\"},{\"name\":\"symptoms\",\"value\":\"夜間出汗\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"methadone\",\"value\":\"否\"},{\"name\":\"methadone_time\",\"value\":\"\"},{\"name\":\"methadone_dosage\",\"value\":\"\"},{\"name\":\"methadone_hospital\",\"value\":\"\"},{\"name\":\"methadone_hospital_phone\",\"value\":\"\"},{\"name\":\"diagnosis\",\"value\":\"\"},{\"name\":\"visiting_hospital\",\"value\":\"\"},{\"name\":\"visiting_hospital_phone\",\"value\":\"\"},{\"name\":\"medical_history\",\"value\":\"\"},{\"name\":\"STD\",\"value\":\"2.沒有\"},{\"name\":\"STD_type_other\",\"value\":\"\"},{\"name\":\"STD_treatment_other\",\"value\":\"\"},{\"name\":\"smoke_age\",\"value\":\"\"},{\"name\":\"smoke_frequency\",\"value\":\"\"},{\"name\":\"smoke_resons\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_2\",\"value\":\"test\"},{\"name\":\"smoke_rec_1&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_2\",\"value\":\"\"}]\"', '', '\"[{\"name\":\"mtable1&medical_rec_1[]\",\"value\":[\"\",\"test\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"name\":\"mtable1&medical_rec_2[]\",\"value\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]\"'),
(3, 'RE161', 4, 'resource', 'Deny', 'q131214241', '2022-04-27 18:46:40', '園主任', '2022-06-23 19:24:17', '園主任', '\"[{\"name\":\"rtable1&resource_rec_1[]\",\"value\":[\"test捐贈人1\",\"承辦人1 0612314451\",\"編號21\",\"資源6661233\",\"2021-11-01\",\"社工員2\",\"test捐贈人2\",\"1\",\"編號23\",\"資源asadas\",\"2021-12-09\",\"社工員1\",\"test捐贈人3\",\"承辦人2 0612314451\",\"編號21\",\"資源6661233a\",\"2022-01-26\",\"社工員1\",\"test捐贈人4\",\"承辦人3 0248127121\",\"編號33\",\"資源612341\",\"2022-06-16\",\"園主任\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]\"', '', ''),
(4, 'RE161', 5, 'health', 'Deny', 'q131214241', '2022-04-27 18:50:28', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-04-27\"},{\"name\":\"name\",\"value\":\"Deny\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"q131214241\"},{\"name\":\"medical_card\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"health_clinic_unit\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_manager\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"methadone_time\",\"value\":\"\"},{\"name\":\"methadone_dosage\",\"value\":\"\"},{\"name\":\"methadone_hospital\",\"value\":\"\"},{\"name\":\"methadone_hospital_phone\",\"value\":\"\"},{\"name\":\"diagnosis\",\"value\":\"\"},{\"name\":\"visiting_hospital\",\"value\":\"\"},{\"name\":\"visiting_hospital_phone\",\"value\":\"\"},{\"name\":\"medical_history\",\"value\":\"\"},{\"name\":\"STD_type_other\",\"value\":\"\"},{\"name\":\"STD_treatment_other\",\"value\":\"\"},{\"name\":\"smoke_age\",\"value\":\"\"},{\"name\":\"smoke_frequency\",\"value\":\"\"},{\"name\":\"smoke_resons\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&0_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_1&8_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&0_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&1_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&2_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&3_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&4_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&5_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&6_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&7_2\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_0\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_1\",\"value\":\"\"},{\"name\":\"smoke_rec_2&8_2\",\"value\":\"\"}]\"', '', '\"[{\"name\":\"mtable1&medical_rec_1[]\",\"value\":[\"\",\"1\",\"23\",\"34\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]},{\"name\":\"mtable1&medical_rec_2[]\",\"value\":[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]\"'),
(5, 'RE161', 7, 'interlocution', 'Deny', 'q131214241', '2022-04-27 19:52:46', '園主任', '2022-06-23 19:56:57', '園主任', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-04-20\"},{\"name\":\"interlocution_place\",\"value\":\"家訪\"},{\"name\":\"interlocution_ques\",\"value\":\"test個案問題...........\"},{\"name\":\"interlocution_time\",\"value\":\"09:15\"},{\"name\":\"interlocution_content\",\"value\":\"test處遇\"},{\"name\":\"interlocution_next_target\",\"value\":\"test下次目標\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"supervise_name\",\"value\":\"\"}]\"', '', ''),
(6, 'RE161', 3, 'case', 'Deny', 'q131214241', '2022-04-27 20:01:38', '園主任', '2022-07-01 21:34:43', '園主任', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-04-27\"},{\"name\":\"name\",\"value\":\"Deny\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"q131214241\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_home\",\"value\":\"\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medical_other\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"test診斷問題主要問題\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"other_assessments\",\"value\":\"\"},{\"name\":\"end_indicator\",\"value\":\"穩定就業三個月，以達到目標\"},{\"name\":\"case_closed_radio\",\"value\":\"結案\"},{\"name\":\"case_closed_yes\",\"value\":\"test結案原因/備註\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"undefined\"}]\"', '../upload/undefined', ''),
(7, 'RE161', 8, 'life', 'Deny', 'q131214241', '2022-04-27 20:02:16', '園主任', '2022-07-01 18:50:57', '園主任', '\"[{\"name\":\"w_test\",\"value\":\"後測\"},{\"name\":\"fillin_date\",\"value\":\"2022-07-01\"},{\"name\":\"life_answer1\",\"value\":\"4\"},{\"name\":\"life_answer2\",\"value\":\"4\"},{\"name\":\"life_answer3\",\"value\":\"3\"},{\"name\":\"life_answer4\",\"value\":\"2\"},{\"name\":\"life_answer5\",\"value\":\"2\"},{\"name\":\"life_answer6\",\"value\":\"5\"},{\"name\":\"life_answer7\",\"value\":\"5\"},{\"name\":\"life_answer8\",\"value\":\"5\"},{\"name\":\"life_answer9\",\"value\":\"1\"},{\"name\":\"life_answer10\",\"value\":\"3\"},{\"name\":\"life_answer11\",\"value\":\"5\"},{\"name\":\"life_answer12\",\"value\":\"3\"},{\"name\":\"life_answer13\",\"value\":\"5\"},{\"name\":\"life_answer14\",\"value\":\"4\"},{\"name\":\"life_answer15\",\"value\":\"2\"},{\"name\":\"life_answer16\",\"value\":\"4\"},{\"name\":\"life_answer17\",\"value\":\"5\"},{\"name\":\"life_answer18\",\"value\":\"3\"},{\"name\":\"life_answer19\",\"value\":\"4\"},{\"name\":\"life_answer20\",\"value\":\"4\"},{\"name\":\"life_answer21\",\"value\":\"4\"},{\"name\":\"life_answer22\",\"value\":\"5\"},{\"name\":\"life_answer23\",\"value\":\"4\"},{\"name\":\"life_answer24\",\"value\":\"4\"},{\"name\":\"life_answer25\",\"value\":\"4\"},{\"name\":\"life_answer26\",\"value\":\"1\"},{\"name\":\"life_answer27\",\"value\":\"4\"},{\"name\":\"life_answer28\",\"value\":\"5\"},{\"name\":\"life_answer_score1\",\"value\":\"104\"},{\"name\":\"customRange1\",\"value\":\"80\"},{\"name\":\"customRange2\",\"value\":\"70\"},{\"name\":\"customRange3\",\"value\":\"100\"},{\"name\":\"customRange4\",\"value\":\"65\"},{\"name\":\"customRange5\",\"value\":\"100\"},{\"name\":\"customRange6\",\"value\":\"95\"},{\"name\":\"customRange7\",\"value\":\"80\"},{\"name\":\"n0\",\"value\":\"\"},{\"name\":\"n1\",\"value\":\"\"},{\"name\":\"n2\",\"value\":\"\"},{\"name\":\"n3\",\"value\":\"\"},{\"name\":\"n4\",\"value\":\"\"},{\"name\":\"n5\",\"value\":\"\"},{\"name\":\"life_answer_score2\",\"value\":\"590\"}]\"', '', ''),
(8, 'RE161', 10, 'employment_satif', 'Deny', 'q131214241', '2022-04-27 20:04:11', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2022-04-27\"},{\"name\":\"name\",\"value\":\"Deny\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"ER161\"},{\"name\":\"fillin_date_1\",\"value\":\"2022-04-27\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"4\"},{\"name\":\"answer3\",\"value\":\"4\"},{\"name\":\"answer4\",\"value\":\"4\"},{\"name\":\"answer5\",\"value\":\"4\"},{\"name\":\"answer6\",\"value\":\"4\"},{\"name\":\"answer7\",\"value\":\"4\"},{\"name\":\"answer8\",\"value\":\"3\"},{\"name\":\"answer9\",\"value\":\"2\"},{\"name\":\"answer10\",\"value\":\"1\"},{\"name\":\"answer_score\",\"value\":\"34\"}]\"', '', ''),
(9, 'RE161', 11, 'satif', 'Deny', 'q131214241', '2022-04-27 20:05:00', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-04-27\"},{\"name\":\"case_name\",\"value\":\"Deny\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"tsn_case_id\",\"value\":\"ER161\"},{\"name\":\"agency\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"4\"},{\"name\":\"answer3\",\"value\":\"4\"},{\"name\":\"answer4\",\"value\":\"4\"},{\"name\":\"answer5\",\"value\":\"4\"},{\"name\":\"answer6\",\"value\":\"4\"},{\"name\":\"answer7\",\"value\":\"4\"},{\"name\":\"answer8\",\"value\":\"4\"},{\"name\":\"answer9\",\"value\":\"4\"},{\"name\":\"answer10\",\"value\":\"4\"},{\"name\":\"answer11\",\"value\":\"2\"},{\"name\":\"answer12\",\"value\":\"1\"},{\"name\":\"answer13\",\"value\":\"1\"},{\"name\":\"answer14\",\"value\":\"1\"},{\"name\":\"answer15\",\"value\":\"2\"},{\"name\":\"answer16\",\"value\":\"test與回饋\"},{\"name\":\"answer_score\",\"value\":\"47\"}]\"', '', ''),
(10, '6', 13, 'case', '黃QQ', 'd1234455186', '2022-07-05 18:58:36', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-07-05\"},{\"name\":\"name\",\"value\":\"黃QQ\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"d1234455186\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_home\",\"value\":\"\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medical_other\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"診斷問題主要問題test\"},{\"name\":\"diagnose_minor\",\"value\":\"診斷問題次要問題test\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"other_assessments\",\"value\":\"\"},{\"name\":\"end_indicator\",\"value\":\"達到目標，已無需要在服務\"},{\"name\":\"case_closed_radio\",\"value\":\"結案\"},{\"name\":\"case_closed_yes\",\"value\":\"test結案原因/備註QQ\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"}]\"', '../upload/undefined', '');

-- --------------------------------------------------------

--
-- 資料表結構 `form_all_info`
--

CREATE TABLE `form_all_info` (
  `Id` int(200) NOT NULL,
  `Phone_id` varchar(2000) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Case_name` varchar(20) NOT NULL,
  `Case_pid` varchar(50) NOT NULL,
  `Is_upload` tinyint(1) NOT NULL,
  `Url` varchar(2000) NOT NULL,
  `Upload_path` varchar(1000) NOT NULL,
  `Number` int(10) NOT NULL,
  `Form_name` varchar(30) NOT NULL,
  `Fillin_date` date NOT NULL,
  `Remark` varchar(200) NOT NULL,
  `Other_info` longtext NOT NULL,
  `Upload_info` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `form_all_info`
--

INSERT INTO `form_all_info` (`Id`, `Phone_id`, `Case_id`, `Case_name`, `Case_pid`, `Is_upload`, `Url`, `Upload_path`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Upload_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'settlement', '2022-04-13', 'test46', '\"[{\"name\":\"settlement\",\"value\":\"符合基本條件指標條件共4項，符合收案指標條件共4項。\"}]\"', '', '2022-04-13 00:00:00', '園主任', '2022-04-27 18:49:02', '園主任'),
(2, '', 'RE16231', '張啟生', 'h12364423', 0, 'case_detail.php?name=張啟生&pid=h12364423&date=2021-04-05&property=安置家園&type=藥癮家庭&id=&open_id=RE16231&referral=民間社福機構&case_Create_date=2021-04-06&birth=1862-07-07&unopen_type=case', '', 0, 'health', '2021-06-22', 'test張', '', '', '2022-04-13 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(3, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'case', '2022-04-27', '46', '\"[{\"name\":\"case\",\"value\":\"結案\"}]\"', '', '2022-04-13 00:00:00', '園主任', '2022-07-01 21:34:43', '園主任'),
(4, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'resource', '0000-00-00', 'test社會資源應用表格', '', '', '2022-04-27 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(5, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'health', '2022-04-07', '', '', '', '2022-04-27 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(7, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'interlocution', '0000-00-00', 'testinter427', '\"[{\"name\":\"interlocution\",\"value\":\"2022-04-20\"},{\"name\":\"interlocution\",\"value\":\"test個案問題...........\"},{\"name\":\"interlocution\",\"value\":\"園主任\"}]\"', '', '2022-04-27 00:00:00', '園主任', '2022-06-23 19:56:57', '園主任'),
(8, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'life', '2022-07-01', 'ttt生活品質問卷', '\"[{\"name\":\"life\",\"value\":694},{\"name\":\"life\",\"value\":\"後測\"}]\"', '', '2022-04-27 00:00:00', '園主任', '2022-07-01 18:50:57', '園主任'),
(9, '3', 'RE161', 'Deny', 'q131214241', 1, '', '../upload/case_all/test憂鬱量表.txt', 0, 'sullen', '0000-00-00', '', '', '\"[{\"name\":\"upload_date_sullen0\",\"value\":\"2022-04-27\"},{\"name\":\"scoresullen0\",\"value\":\"76\"},{\"name\":\"filesullen0\",\"value\":\"test憂鬱量表.txt\"},{\"name\":\"test_typesullen0\",\"value\":\"中測\"},{\"name\":\"remarksullen0\",\"value\":\"test憂鬱量表\"}]\"', '2022-04-27 20:03:36', '園主任', '0000-00-00 00:00:00', ''),
(10, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'employment_satif', '2022-04-27', 'test就業需求評估表', '\"[{\"name\":\"employment_satif\",\"value\":\"34\"}]\"', '', '2022-04-27 00:00:00', '園主任', '2022-04-27 20:04:11', '園主任'),
(11, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 0, 'satif', '2022-04-27', 'test服務滿意度量表', '\"[{\"name\":\"satif\",\"value\":\"47\"}]\"', '', '2022-04-27 00:00:00', '園主任', '2022-04-27 20:05:00', '園主任'),
(12, '3', 'RE161', 'Deny', 'q131214241', 0, 'case_detail.php?name=Deny&pid=q131214241&date=2022-04-08&property=自立宿舍&type=藥癮家庭&grade=B&id=3&open_id=RE161&referral=醫院&case_Create_date=2022-04-11&birth=1798-06-07&unopen_type=phone', '', 1, 'case', '2022-04-29', '', '', '', '2022-07-01 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(13, '766', '6', '黃QQ', 'd1234455186', 0, 'case_detail.php?name=黃QQ&gender= 男&pid=d1234455186&date=2021-10-11&property=安置家園&type=親職兒少&grade=B&id=766&open_id=6&referral=矯正機關&case_Create_date=2021-10-11&unopen_type=counsel&birth=1993-02-02', '', 0, 'case', '2022-07-05', 'testclosed', '\"[{\"name\":\"case\",\"value\":\"結案\"}]\"', '', '2022-07-05 00:00:00', '園主任', '2022-07-05 18:58:36', '園主任');

-- --------------------------------------------------------

--
-- 資料表結構 `members_assemble`
--

CREATE TABLE `members_assemble` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `file_path` varchar(2000) NOT NULL,
  `Supervise` varchar(100) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `members_assemble`
--

INSERT INTO `members_assemble` (`Id`, `Year`, `record_content`, `upload_content`, `file_path`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(9, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"fdsfsfs\"},{\"name\":\"upload_rec_date\",\"value\":\"111年05月10日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"9kv3539.jpg\"}]\"', '../members_assemble/upload/9kv3539.jpg', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:26:27', '社工員1', '2022-07-08 19:19:06', '園主任'),
(10, '109', '[{\"name\":\"title_name\",\"value\":\"test會員大會記錄標題\"},{\"name\":\"ceo_name\",\"value\":\"test主持人\"},{\"name\":\"attendees\",\"value\":\"test出席人員\"},{\"name\":\"record\",\"value\":\"test會員大會記錄nn\"},{\"name\":\"meeting_date\",\"value\":\"109年08月05日\"},{\"name\":\"meeting_time\",\"value\":\"07:20\"},{\"name\":\"place\",\"value\":\"test會員大會地點a\"},{\"name\":\"suggest\",\"value\":\"test會員大會建議s\"},{\"name\":\"next_focus\",\"value\":\"test下次會員大會重點s\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-07-11 18:21:46', '園主任', '2022-07-11 18:21:55', '園主任'),
(11, '110', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"uploadtt會員大會記錄標題aa\"},{\"name\":\"upload_rec_date\",\"value\":\"110年10月19日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test16.docx\"},{\"name\":\"customFile1\",\"value\":\"tes26.docx\"}]\"', '../members_assemble/upload/tes26.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 18:23:14', '園主任', '2022-07-11 18:23:40', '園主任'),
(12, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第33次會員大會記錄upload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"tesmma33.docx\"},{\"name\":\"customFile1\",\"value\":\"tesmma33.docx\"}]\"', '../members_assemble/upload/tesmma33.docx', '園主任', '../members_assemble/signature/1657548304.png', '會員大會詳細資料test督導留言', '2022-07-11 22:05:04', '2022-07-11 22:02:45', '園主任', '0000-00-00 00:00:00', ''),
(13, '111', '[{\"name\":\"title_name\",\"value\":\"test會員大會記錄標題3\"},{\"name\":\"ceo_name\",\"value\":\"a\"},{\"name\":\"attendees\",\"value\":\"b\"},{\"name\":\"record\",\"value\":\"c\"},{\"name\":\"meeting_date\",\"value\":\"111年07月11日\"},{\"name\":\"meeting_time\",\"value\":\"11:10\"},{\"name\":\"place\",\"value\":\"ddd\"},{\"name\":\"suggest\",\"value\":\"aasca\"},{\"name\":\"next_focus\",\"value\":\"ccccccc\"}]', '', '', '園主任', '../members_assemble/signature/1657548271.png', '會員大會紀錄\ntest督導\n留言', '2022-07-11 22:04:31', '2022-07-11 22:03:39', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `placement_case`
--

CREATE TABLE `placement_case` (
  `Id` int(240) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Unopen_type` varchar(30) NOT NULL,
  `Case_Create_date` date NOT NULL,
  `Object_type` varchar(50) NOT NULL,
  `Case_grade` varchar(30) NOT NULL,
  `Case_property` varchar(50) NOT NULL,
  `Open_case_date` date NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `Birth` date NOT NULL,
  `Case_pid` varchar(30) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Case_state` varchar(200) NOT NULL,
  `Close_case_date` date NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `placement_case`
--

INSERT INTO `placement_case` (`Id`, `Case_id`, `Unopen_type`, `Case_Create_date`, `Object_type`, `Case_grade`, `Case_property`, `Open_case_date`, `Name`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Close_case_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 'RE1612', 'placement_case', '2022-04-26', '一般藥癮者', 'B', '安置家園', '2022-04-25', '陳昭宏', '0123413435', '1962-06-06', 'n11244556', '自行求助', '未結案', '0000-00-00', '2022-04-26 19:52:03', '園主任', '0000-00-00 00:00:00', ''),
(2, 'RE1613', 'placement_case', '2022-06-15', '一般藥癮者', 'C', '社區', '2022-06-14', 'test2', '0912341455', '1961-06-08', 's112355566', '社區', '未結案', '0000-00-00', '2022-06-23 16:29:37', '園主任', '0000-00-00 00:00:00', ''),
(3, '16', 'placement_case', '2022-06-08', '愛滋感染者', 'A', '自立宿舍', '2022-06-10', 'twss', '0214314454', '1812-12-16', 'b125335121', '藥癮家庭', '未結案', '0000-00-00', '2022-06-23 17:02:05', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `placement_forms`
--

CREATE TABLE `placement_forms` (
  `Id` int(100) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Form_id` int(100) NOT NULL,
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
-- 傾印資料表的資料 `placement_forms`
--

INSERT INTO `placement_forms` (`Id`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `answer`, `file_path`, `Health_rec`) VALUES
(1, 'RE1612', 1, 'settlement', '陳昭宏', 'n11244556', '2022-04-26 20:32:06', '園主任', '2022-06-23 17:16:33', '園主任', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-04-26\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"name\",\"value\":\"陳昭宏\"},{\"name\":\"birth\",\"value\":\"\"},{\"name\":\"pid\",\"value\":\"n11244556\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"YR\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"basic_indicator\",\"value\":\"本身同意於安置中心入住並有意願重新開始者\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定\"},{\"name\":\"end_indicator\",\"value\":\"入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)\"},{\"name\":\"end_indicator\",\"value\":\"個案須接種過疫苗才能入住機構\"},{\"name\":\"end_indicator\",\"value\":\"因應COVID-19疫情個案都必須做過快篩機制結果為陰性者才能入住\"},{\"name\":\"end_indicator\",\"value\":\"個案家屬需負擔個案就醫、生活用品等費用\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"sss041526.txt\"}]\"', '../upload/sss041526.txt', '');

-- --------------------------------------------------------

--
-- 資料表結構 `placement_form_all_info`
--

CREATE TABLE `placement_form_all_info` (
  `Id` int(100) NOT NULL,
  `Pcase_id` varchar(2000) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Case_name` varchar(20) NOT NULL,
  `Case_pid` varchar(50) NOT NULL,
  `Is_upload` tinyint(1) NOT NULL,
  `Url` varchar(2000) NOT NULL,
  `Upload_path` varchar(1000) NOT NULL,
  `Number` int(10) NOT NULL,
  `Form_name` varchar(30) NOT NULL,
  `Fillin_date` date NOT NULL,
  `Remark` varchar(200) NOT NULL,
  `Other_info` longtext NOT NULL,
  `Upload_info` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `placement_form_all_info`
--

INSERT INTO `placement_form_all_info` (`Id`, `Pcase_id`, `Case_id`, `Case_name`, `Case_pid`, `Is_upload`, `Url`, `Upload_path`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Upload_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '1', 'RE1612', '陳昭宏', 'n11244556', 0, 'placement_case_detail.php?name=陳昭宏&pid=n11244556&date=2022-04-25&property=安置家園&type=一般藥癮者&id=1&open_id=RE1612&referral=自行求助&case_Create_date=2022-04-26&birth=1962-06-06&unopen_type=placement_case', '', 0, 'settlement', '2022-04-26', 'test415', '\"[{\"name\":\"settlement\",\"value\":\"符合基本條件指標條件共2項，符合收案指標條件共4項。\"}]\"', '', '2022-04-26 00:00:00', '園主任', '2022-06-23 17:16:33', '園主任'),
(2, '1', 'RE1612', '陳昭宏', 'n11244556', 0, 'placement_case_detail.php?name=陳昭宏&pid=n11244556&date=2022-04-25&property=安置家園&type=一般藥癮者&id=1&open_id=RE1612&referral=自行求助&case_Create_date=2022-04-26&birth=1962-06-06&unopen_type=placement_case', '', 1, 'settlement', '2022-04-25', 'tt425', '', '', '2022-04-26 00:00:00', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `published`
--

CREATE TABLE `published` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `Title_name` varchar(300) NOT NULL,
  `Published_date` varchar(30) NOT NULL,
  `Num_publish` varchar(1000) NOT NULL,
  `Unit` varchar(300) NOT NULL,
  `Subject` varchar(300) NOT NULL,
  `Supervise` varchar(30) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` datetime NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `published`
--

INSERT INTO `published` (`Id`, `Year`, `Title_name`, `Published_date`, `Num_publish`, `Unit`, `Subject`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(21, '111', 'dddd', '2022-07-17', 'ddd', 'ddd', 'dddd', '', '', '', '0000-00-00 00:00:00', '2022-07-05', '社工員1', '0000-00-00', ''),
(22, '111', 'qqqqq', '2022-07-19', 'qqqqq', 'qqqqfffffddddd', 'qqqqq', '社工員1', '../signature/1657090805.png', '', '2022-07-06 15:00:05', '2022-07-05', '社工員1', '2022-07-05', '');

-- --------------------------------------------------------

--
-- 資料表結構 `received`
--

CREATE TABLE `received` (
  `Id` int(255) NOT NULL,
  `Year` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `Title_name` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `Received_date` varchar(30) NOT NULL,
  `Subject` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `Unit` varchar(300) CHARACTER SET utf8mb4 NOT NULL,
  `Num_receive` varchar(1000) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_sign_msg` varchar(2000) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `received`
--

INSERT INTO `received` (`Id`, `Year`, `Title_name`, `Received_date`, `Subject`, `Unit`, `Num_receive`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`) VALUES
(33, '111', 'fffffff', '2022-07-19', 'ggggggggg', 'ggggggggggg', 'ggggggggeeee', '2022-07-05', '社工員1', '2022-07-05', '', '社工員1', '../signature/1657196042.png', '', '2022-07-07 20:14:02');

-- --------------------------------------------------------

--
-- 資料表結構 `resume`
--

CREATE TABLE `resume` (
  `Id` int(255) NOT NULL,
  `Name` varchar(300) NOT NULL,
  `Upload_date` varchar(1000) NOT NULL,
  `Entry_date` varchar(1000) NOT NULL,
  `CustomFile1` varchar(1000) NOT NULL,
  `CustomFile2` varchar(1000) NOT NULL,
  `CustomFile3` varchar(1000) NOT NULL,
  `CustomFile4` varchar(1000) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `resume`
--

INSERT INTO `resume` (`Id`, `Name`, `Upload_date`, `Entry_date`, `CustomFile1`, `CustomFile2`, `CustomFile3`, `CustomFile4`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(14, 'qqqq', '111年07月08日', '111年07月07日', '../resume/9kv3539.jpg', '../resume/', '../resume/', '../resume/', '2022-07-06', '社工員1', '0000-00-00', '');

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
(7, 5, '2022-01-06', '07:10:00', 'test', '', '30-39歲', '052234423', '跨性別', '異性', 'HIV', 'H negative', '', '', '', '', '2022-03-07 18:10:11', '園主任', '0000-00-00 00:00:00', ''),
(8, 6, '2022-06-01', '10:10:00', 'test221', '34', '30-39歲', '051123214', '男', '異性', 'test taas', 'test ppp', 'test', 'teesa', 'B1212124', '123', '2022-06-23 21:07:17', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `screening_result_keywords`
--

CREATE TABLE `screening_result_keywords` (
  `Id` int(100) NOT NULL,
  `screening_result` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `screening_result_keywords`
--

INSERT INTO `screening_result_keywords` (`Id`, `screening_result`) VALUES
(1, 'H positive'),
(3, 'H negative'),
(4, '梅 positive'),
(5, '梅 negative'),
(6, 'H+梅 positive'),
(7, 'H+梅 negative'),
(9, 'test ppp');

-- --------------------------------------------------------

--
-- 資料表結構 `screening_type_keywords`
--

CREATE TABLE `screening_type_keywords` (
  `Id` int(100) NOT NULL,
  `screening_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `screening_type_keywords`
--

INSERT INTO `screening_type_keywords` (`Id`, `screening_type`) VALUES
(1, 'HIV'),
(2, '梅毒'),
(3, 'HIV+梅毒'),
(9, 'test taas');

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
(32, 'test(2021-11-11)監所輔導-訪談', 1, '0000-00-00', '園主任', '2021-11-11 12:00', '社工員2、、'),
(33, 'Timmy(酒精)面訪', 1, '0000-00-00', '園主任', '2021-11-07 12:00', '社工員1、、'),
(34, 'Deny(大麻)面訪', 1, '0000-00-00', '園主任', '2021-11-25 10:00', '社工員2、、');

-- --------------------------------------------------------

--
-- 資料表結構 `sign_off`
--

CREATE TABLE `sign_off` (
  `id` int(100) NOT NULL,
  `info_name` varchar(100) NOT NULL,
  `submitter` varchar(100) NOT NULL,
  `submit_date` datetime NOT NULL,
  `read_date` datetime NOT NULL,
  `audit_date` datetime NOT NULL,
  `state` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `sign_off`
--

INSERT INTO `sign_off` (`id`, `info_name`, `submitter`, `submit_date`, `read_date`, `audit_date`, `state`) VALUES
(1, '123', 'test', '2022-03-18 04:54:13', '2022-03-18 04:54:13', '2022-03-18 04:54:13', 'test'),
(2, '123', 'test', '2022-03-18 04:54:13', '2022-03-18 04:54:13', '2022-03-18 04:54:13', 'test');

-- --------------------------------------------------------

--
-- 資料表結構 `supervisor_record`
--

CREATE TABLE `supervisor_record` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `file_path` varchar(2000) NOT NULL,
  `Supervise` varchar(100) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `supervisor_record`
--

INSERT INTO `supervisor_record` (`Id`, `Year`, `record_content`, `upload_content`, `file_path`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '109', '[{\"name\":\"title_name\",\"value\":\"第1次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"tt執行長\"},{\"name\":\"attendees\",\"value\":\"ttt出席人員\"},{\"name\":\"record\",\"value\":\"ttt團督記錄f\"},{\"name\":\"meeting_date\",\"value\":\"109年09月09日\"},{\"name\":\"meeting_time\",\"value\":\"14:30\"},{\"name\":\"place\",\"value\":\"tr地點\"},{\"name\":\"suggest\",\"value\":\"ttt督導建議\"},{\"name\":\"next_focus\",\"value\":\"ttt下次團督重點ss\"}]', '', '', '園主任', '../supervisor_record/signature/1657547034.png', 'test督導\n留言', '2022-07-11 21:43:54', '2022-04-13 20:31:29', '園主任', '2022-07-06 10:20:30', '社工員1'),
(2, '109', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"uploadtt會議記錄標題11\"},{\"name\":\"upload_rec_date\",\"value\":\"109年07月23日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test備註ssa\"},{\"name\":\"customFile1\",\"value\":\"abc123.PNG\"}]\"', '../supervisor_record/upload/abc123.PNG', '', '', '', '0000-00-00 00:00:00', '2022-04-13 20:32:06', '園主任', '2022-04-18 10:09:39', '園主任'),
(3, '110', '[{\"name\":\"title_name\",\"value\":\"第11次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"執行長415\"},{\"name\":\"attendees\",\"value\":\"出席人員a、出席人員b\"},{\"name\":\"record\",\"value\":\"出席人員c\"},{\"name\":\"meeting_date\",\"value\":\"110年12月09日\"},{\"name\":\"meeting_time\",\"value\":\"09:40\"},{\"name\":\"place\",\"value\":\"辦公室\"},{\"name\":\"suggest\",\"value\":\"無\"},{\"name\":\"next_focus\",\"value\":\"無\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 22:45:12', '園主任', '2022-07-07 20:28:54', '社工員1'),
(4, '110', '[{\"name\":\"title_name\",\"value\":\"第5次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"執行長415\"},{\"name\":\"attendees\",\"value\":\"tttt\"},{\"name\":\"record\",\"value\":\"tttt1\"},{\"name\":\"meeting_date\",\"value\":\"110年02月11日\"},{\"name\":\"meeting_time\",\"value\":\"00:20\"},{\"name\":\"place\",\"value\":\"tttp\"},{\"name\":\"suggest\",\"value\":\"n\"},{\"name\":\"next_focus\",\"value\":\"n\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:18:30', '園主任', '2022-04-15 23:23:05', '園主任'),
(5, '109', '[{\"name\":\"title_name\",\"value\":\"test會議記錄標題1\"},{\"name\":\"ceo_name\",\"value\":\"sss\"},{\"name\":\"attendees\",\"value\":\"sss1\"},{\"name\":\"record\",\"value\":\"ss1\"},{\"name\":\"meeting_date\",\"value\":\"109年01月15日\"},{\"name\":\"meeting_time\",\"value\":\"13:20\"},{\"name\":\"place\",\"value\":\"ssssplace\"},{\"name\":\"suggest\",\"value\":\"ssssn\"},{\"name\":\"next_focus\",\"value\":\"sssn\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:20:20', '園主任', '0000-00-00 00:00:00', ''),
(6, '111', '[{\"name\":\"title_name\",\"value\":\"第6次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"tt執行長6\"},{\"name\":\"attendees\",\"value\":\"ttt6\"},{\"name\":\"record\",\"value\":\"tt61\"},{\"name\":\"meeting_date\",\"value\":\"111年09月08日\"},{\"name\":\"meeting_time\",\"value\":\"13:30\"},{\"name\":\"place\",\"value\":\"ttplace1\"},{\"name\":\"suggest\",\"value\":\"ttt6\"},{\"name\":\"next_focus\",\"value\":\"tttt6s\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:22:29', '園主任', '2022-04-15 23:23:59', '園主任'),
(7, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload第3次團督會議記錄\"},{\"name\":\"upload_rec_date\",\"value\":\"111年04月18日\"},{\"name\":\"upload_rec_remark\",\"value\":\"upload第3次團督會議記錄\"},{\"name\":\"customFile1\",\"value\":\"test215_1.pdf\"}]\"', '../supervisor_record/upload/test215_1.pdf', '', '', '', '0000-00-00 00:00:00', '2022-04-18 10:05:05', '園主任', '0000-00-00 00:00:00', ''),
(8, '110', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload第5次團督會議記錄\"},{\"name\":\"upload_rec_date\",\"value\":\"110年06月16日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test\"},{\"name\":\"customFile1\",\"value\":\"sss.txt\"}]\"', '../supervisor_record/upload/sss.txt', '園主任', '../supervisor_record/signature/1657537797.png', 'TEST\n團督記錄\n會議記錄督導留言', '2022-07-11 19:09:57', '2022-04-18 10:11:31', '園主任', '2022-07-11 18:15:21', '園主任'),
(9, '110', '[{\"name\":\"title_name\",\"value\":\"第9次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"as\"},{\"name\":\"attendees\",\"value\":\"aaas\"},{\"name\":\"record\",\"value\":\"as\"},{\"name\":\"meeting_date\",\"value\":\"110年10月20日\"},{\"name\":\"meeting_time\",\"value\":\"09:10\"},{\"name\":\"place\",\"value\":\"ttts\"},{\"name\":\"suggest\",\"value\":\"ttts\"},{\"name\":\"next_focus\",\"value\":\"ttts\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-18 10:12:40', '園主任', '0000-00-00 00:00:00', ''),
(10, '111', '[{\"name\":\"title_name\",\"value\":\"vvv\"},{\"name\":\"ceo_name\",\"value\":\"vvv\"},{\"name\":\"attendees\",\"value\":\"vvv\"},{\"name\":\"record\",\"value\":\"vvv\"},{\"name\":\"meeting_date\",\"value\":\"111年04月26日\"},{\"name\":\"meeting_time\",\"value\":\"20:05\"},{\"name\":\"place\",\"value\":\"vvv\"},{\"name\":\"suggest\",\"value\":\"vvv\"},{\"name\":\"next_focus\",\"value\":\"vvv\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-26 20:02:26', '社工員1', '0000-00-00 00:00:00', ''),
(11, '111', '[{\"name\":\"title_name\",\"value\":\"hgg\"},{\"name\":\"ceo_name\",\"value\":\"ggg\"},{\"name\":\"attendees\",\"value\":\"ggg\"},{\"name\":\"record\",\"value\":\"ggg\"},{\"name\":\"meeting_date\",\"value\":\"111年04月27日\"},{\"name\":\"meeting_time\",\"value\":\"05:55\"},{\"name\":\"place\",\"value\":\"ggg\"},{\"name\":\"suggest\",\"value\":\"ggg\"},{\"name\":\"next_focus\",\"value\":\"ggg\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-27 17:52:37', '社工員1', '0000-00-00 00:00:00', ''),
(12, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"sdasda\"},{\"name\":\"upload_rec_date\",\"value\":\"111年05月12日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"螢幕擷取畫面 2022-04-26 133143.png\"}]\"', '../supervisor_record/upload/螢幕擷取畫面 2022-04-26 133143.png', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:08:51', '社工員1', '0000-00-00 00:00:00', ''),
(13, '111', '[{\"name\":\"title_name\",\"value\":\"第12次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"a\"},{\"name\":\"attendees\",\"value\":\"b\"},{\"name\":\"record\",\"value\":\"c\"},{\"name\":\"meeting_date\",\"value\":\"111年07月11日\"},{\"name\":\"meeting_time\",\"value\":\"09:00\"},{\"name\":\"place\",\"value\":\"de\"},{\"name\":\"suggest\",\"value\":\"e\"},{\"name\":\"next_focus\",\"value\":\"f\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-07-11 20:57:46', '園主任', '0000-00-00 00:00:00', ''),
(14, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第3次團督會議紀錄upload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test26\"},{\"name\":\"customFile1\",\"value\":\"tes26.docx\"}]\"', '../supervisor_record/upload/tes26.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:05:09', '園主任', '0000-00-00 00:00:00', ''),
(16, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第5次團督會議紀錄upload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test5\"},{\"name\":\"customFile1\",\"value\":\"tes5.docx\"}]\"', '../supervisor_record/upload/tes5.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:09:12', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `training`
--

CREATE TABLE `training` (
  `Id` int(255) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Training_date` varchar(1000) NOT NULL,
  `Training_name` varchar(300) NOT NULL,
  `Place` varchar(300) NOT NULL,
  `Remark` varchar(300) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `training`
--

INSERT INTO `training` (`Id`, `Name`, `Training_date`, `Training_name`, `Place`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(10, 'Allen', '111年05月13日', 'dsafs', 'sfssd', '', '2022-05-13', '社工員1', '0000-00-00', ''),
(15, 'Timo', '111年07月06日', 'qqqq', 'qqqq', '', '2022-07-05', '社工員1', '0000-00-00', ''),
(16, '', '111年05月13日', 'dsafs', 'sfssd', '', '0000-00-00', '', '0000-00-00', ''),
(17, '', '111年05月13日', 'dsafs', 'sfssd', '', '0000-00-00', '', '0000-00-00', ''),
(18, '', '', '', '', '', '0000-00-00', '', '0000-00-00', '');

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

-- --------------------------------------------------------

--
-- 資料表結構 `volunteer`
--

CREATE TABLE `volunteer` (
  `Id` int(240) NOT NULL,
  `Year` int(10) NOT NULL,
  `Name` varchar(10) NOT NULL,
  `Serv_type` varchar(10) NOT NULL,
  `Serv_time` text NOT NULL,
  `Time_all` int(240) NOT NULL,
  `Rece_hours` varchar(10) NOT NULL,
  `Serv_award` varchar(10) NOT NULL,
  `Honor_card` varchar(10) NOT NULL,
  `Sign_date` varchar(50) NOT NULL,
  `Create_date` datetime NOT NULL DEFAULT current_timestamp(),
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `volunteer`
--

INSERT INTO `volunteer` (`Id`, `Year`, `Name`, `Serv_type`, `Serv_time`, `Time_all`, `Rece_hours`, `Serv_award`, `Honor_card`, `Sign_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 111, 'test712', '活動', '周一早上9:00-12:00', 16, '是', '否', '否', '111年07月12日', '2022-07-12 22:34:31', '園主任', '2022-07-14 22:03:22', '園主任'),
(2, 111, 'test713', '美工', '周二下午13:00-12:00', 6, '是', '否', '是', '111年07月12日', '2022-07-12 22:35:07', '園主任', '2022-07-14 21:40:25', '園主任');

-- --------------------------------------------------------

--
-- 資料表結構 `volunteer_hours_record`
--

CREATE TABLE `volunteer_hours_record` (
  `Id` int(240) NOT NULL,
  `Volunteer_id` int(240) NOT NULL,
  `Year` int(10) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Add_hours` int(20) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Sign_date` varchar(100) NOT NULL,
  `Is_firstadd` tinyint(1) NOT NULL,
  `Create_date` datetime DEFAULT current_timestamp(),
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `volunteer_hours_record`
--

INSERT INTO `volunteer_hours_record` (`Id`, `Volunteer_id`, `Year`, `Name`, `Add_hours`, `Remark`, `Sign_date`, `Is_firstadd`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 1, 111, 'test712', 16, '', '111年07月12日', 1, '2022-07-12 22:34:31', '園主任', '0000-00-00 00:00:00', ''),
(2, 2, 111, 'test713', 6, '', '111年07月12日', 1, '2022-07-12 22:35:07', '園主任', '0000-00-00 00:00:00', ''),
(12, 1, 111, 'test712', -1, '目前服務時數由16更改為15(-1)。資料異動者：園主任，異動時間：2022-07-14 15:43:51。', '', 0, '2022-07-14 21:43:51', '園主任', '0000-00-00 00:00:00', ''),
(16, 1, 111, 'test712', 4, '新增至19小時', '', 0, '2022-07-14 22:02:58', '園主任', '0000-00-00 00:00:00', ''),
(17, 1, 111, 'test712', -3, '減至16', '', 0, '2022-07-14 22:03:22', '園主任', '0000-00-00 00:00:00', '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `accounting_record`
--
ALTER TABLE `accounting_record`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `board_supervisor`
--
ALTER TABLE `board_supervisor`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `closed`
--
ALTER TABLE `closed`
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
-- 資料表索引 `day_off`
--
ALTER TABLE `day_off`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `dlgrec`
--
ALTER TABLE `dlgrec`
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
-- 資料表索引 `members_assemble`
--
ALTER TABLE `members_assemble`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `placement_case`
--
ALTER TABLE `placement_case`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `placement_forms`
--
ALTER TABLE `placement_forms`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `placement_form_all_info`
--
ALTER TABLE `placement_form_all_info`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `published`
--
ALTER TABLE `published`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `received`
--
ALTER TABLE `received`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `resume`
--
ALTER TABLE `resume`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `screening`
--
ALTER TABLE `screening`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `screening_result_keywords`
--
ALTER TABLE `screening_result_keywords`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `screening_type_keywords`
--
ALTER TABLE `screening_type_keywords`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `sign_notice`
--
ALTER TABLE `sign_notice`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `sign_off`
--
ALTER TABLE `sign_off`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `supervisor_record`
--
ALTER TABLE `supervisor_record`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `training`
--
ALTER TABLE `training`
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
-- 資料表索引 `volunteer`
--
ALTER TABLE `volunteer`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `volunteer_hours_record`
--
ALTER TABLE `volunteer_hours_record`
  ADD PRIMARY KEY (`Id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record`
--
ALTER TABLE `accounting_record`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `announcement`
--
ALTER TABLE `announcement`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `board_supervisor`
--
ALTER TABLE `board_supervisor`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `closed`
--
ALTER TABLE `closed`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `consult`
--
ALTER TABLE `consult`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
  MODIFY `Id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `day_off`
--
ALTER TABLE `day_off`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dlgrec`
--
ALTER TABLE `dlgrec`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forms`
--
ALTER TABLE `forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_all_info`
--
ALTER TABLE `form_all_info`
  MODIFY `Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members_assemble`
--
ALTER TABLE `members_assemble`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_case`
--
ALTER TABLE `placement_case`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_forms`
--
ALTER TABLE `placement_forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_form_all_info`
--
ALTER TABLE `placement_form_all_info`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `published`
--
ALTER TABLE `published`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `received`
--
ALTER TABLE `received`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume`
--
ALTER TABLE `resume`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening`
--
ALTER TABLE `screening`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening_result_keywords`
--
ALTER TABLE `screening_result_keywords`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening_type_keywords`
--
ALTER TABLE `screening_type_keywords`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sign_notice`
--
ALTER TABLE `sign_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sign_off`
--
ALTER TABLE `sign_off`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supervisor_record`
--
ALTER TABLE `supervisor_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `training`
--
ALTER TABLE `training`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer`
--
ALTER TABLE `volunteer`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_hours_record`
--
ALTER TABLE `volunteer_hours_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
