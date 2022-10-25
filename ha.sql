-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2022-10-25 15:41:28
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
-- 資料表結構 `accounting_record_cash`
--

CREATE TABLE `accounting_record_cash` (
  `Id` int(244) NOT NULL,
  `Year` int(100) NOT NULL,
  `Month` int(10) NOT NULL,
  `Form_class` varchar(10) NOT NULL,
  `Invoice_date` varchar(20) NOT NULL,
  `Invoice_seq` varchar(2000) NOT NULL,
  `Invoice_class` varchar(200) NOT NULL,
  `Invoice_content` varchar(2000) NOT NULL,
  `Invoice_type` varchar(20) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `Withdrawal_date` varchar(20) NOT NULL,
  `Payee` varchar(30) NOT NULL,
  `Upload_date` varchar(20) NOT NULL,
  `Record_date` varchar(20) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `accounting_record_cash`
--

INSERT INTO `accounting_record_cash` (`Id`, `Year`, `Month`, `Form_class`, `Invoice_date`, `Invoice_seq`, `Invoice_class`, `Invoice_content`, `Invoice_type`, `Amount`, `Withdrawal_date`, `Payee`, `Upload_date`, `Record_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 111, 4, '日記帳', '111/04/06', '56', '', 'test04/06內容', '收入', '3200', '111/04/07', '社工員1', '', '111/04/08', 'test備註0407', '2022-08-18 18:49:19', '園主任', '2022-08-23 23:04:26', '園主任'),
(2, 111, 4, '日記帳', '111/04/08', '60', '', 'test04/08內容', '支出', '1512', '111/04/08', '社工員2', '', '111/04/09', 'test備註0409', '2022-08-18 19:23:26', '園主任', '2022-09-20 18:05:26', '園主任'),
(3, 111, 6, '日記帳', '111/06/16', '66', '', 'test06/16內容', '收入', '4879', '111/06/17', '社工組長', '', '111/06/18', '備註test0618', '2022-08-18 19:24:29', '園主任', '2022-08-18 19:24:29', ''),
(4, 111, 5, '轉帳', '111/05/11', '', '', 'test05/11內容', '支出', '550', '', '', '', 'test備註05/11', '', '2022-08-18 20:03:26', '園主任', '2022-08-23 20:56:41', '園主任'),
(5, 111, 4, '轉帳', '111/04/13', '', '', 'test04/13內容', '支出', '100', '', '', '', '111/04/13', '04/13', '2022-08-18 22:26:47', '園主任', '2022-08-18 22:34:45', '園主任'),
(6, 111, 7, '轉帳', '111/07/12', '', '', 'test07/12內容', '支出', '3000', '111/07/11', '社工組長', '', '111/07/12', 'test備註0711', '2022-08-23 19:42:21', '園主任', '2022-08-23 20:56:02', '園主任'),
(7, 111, 7, '日記帳', '111/07/11', '78', '', '內容07/11', '支出', '2567', '111/07/11', '社工員1', '', '111/07/11', 'test備註711', '2022-08-23 19:43:36', '園主任', '2022-08-23 20:25:45', '園主任'),
(8, 111, 7, '兒少單據', '111/07/12', '', '扣繳', 'test單據類別扣繳0711', '支出', '5505', '', '', '111/07/11', '111/07/11', 'test備註上傳日期0711', '2022-08-23 19:58:30', '園主任', '2022-10-13 18:56:44', '社工組長'),
(9, 111, 7, '日記帳', '111/07/13', '79', '', 'test0713內容', '收入', '3516', '111/07/10', '社工員2', '', '111/07/14', 'test備註領款人0710社工員2', '2022-08-23 20:58:14', '園主任', '2022-08-23 20:58:34', '園主任'),
(10, 111, 6, '日記帳', '111/06/11', '63', '', 'test06/11內容', '支出', '1512', '111/06/09', '社工員2', '', '111/06/12', 'TEST備註0611', '2022-08-23 22:00:24', '園主任', '2022-08-23 22:00:24', ''),
(11, 111, 7, '日記帳', '111/07/14', '82', '', 'test07/14內容', '收入', '3154', '111/07/11', '社工員1', '', '111/07/13', 'test0713備註', '2022-08-23 22:14:05', '園主任', '2022-08-23 22:14:05', ''),
(12, 111, 7, '日記帳', '111/07/23', '88', '', 'test07/23內容', '支出', '8765', '111/07/23', '社工員1', '', '111/07/24', 'TEST備註0724', '2022-08-23 22:20:06', '園主任', '2022-08-23 22:20:06', ''),
(13, 111, 7, '日記帳', '111/07/23', '89', '', 'test07/23內容2', '支出', '33', '111/07/23', '社工員2', '', '111/07/24', 'TEST33', '2022-08-23 22:22:49', '園主任', '2022-10-25 17:38:10', '園主任'),
(14, 111, 8, '日記帳', '111/08/01', '90', '', 'TEST0801內容', '支出', '112', '111/08/01', '社工員2', '', '111/08/01', 'TEST112', '2022-08-23 22:24:08', '園主任', '2022-08-23 22:24:08', ''),
(15, 111, 8, '日記帳', '111/08/05', '81', '', 'test0805內容', '收入', '2156', '111/08/04', '', '', '111/08/05', 'TEST08/05', '2022-08-23 22:25:59', '園主任', '2022-08-25 20:08:03', '園主任'),
(16, 111, 1, '日記帳', '111/01/01', '1', '', 'TEST1', '支出', '450', '111/01/01', '', '', '111/01/01', 'TEST0101', '2022-08-23 22:27:37', '園主任', '2022-08-23 22:59:48', '園主任'),
(17, 111, 4, '日記帳', '111/04/20', '63', '', 'TEST內容0420', '支出', '661', '111/04/20', '社工員2', '', '111/04/23', 'TEST420', '2022-08-23 23:05:45', '園主任', '2022-08-23 23:05:45', ''),
(18, 111, 6, '日記帳', '111/06/26', '67', '', 'TEST06/26內容', '支出', '55', '111/06/26', '社工員1', '', '111/06/28', 'TEST0628REMARK', '2022-08-23 23:07:02', '園主任', '2022-08-25 20:08:10', '園主任'),
(19, 111, 6, '日記帳', '111/06/06', '12334', '', 'tttt66', '收入', '123', '111/06/04', '', '', '111/06/08', 'tteee\n1.aaa', '2022-10-13 15:48:53', '社工組長', '2022-10-13 15:48:53', '');

-- --------------------------------------------------------

--
-- 資料表結構 `accounting_record_cash_balance`
--

CREATE TABLE `accounting_record_cash_balance` (
  `Id` int(244) NOT NULL,
  `Year` int(100) NOT NULL,
  `Month` int(10) NOT NULL,
  `Income_sum` decimal(10,0) NOT NULL,
  `Cost_sum` decimal(10,0) NOT NULL,
  `Last_pb` decimal(10,0) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `accounting_record_cash_balance`
--

INSERT INTO `accounting_record_cash_balance` (`Id`, `Year`, `Month`, `Income_sum`, `Cost_sum`, `Last_pb`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(2, 111, 7, '6670', '11365', '3435', '2022-08-23 22:20:06', '園主任', '2022-10-25 17:38:10', '園主任'),
(3, 111, 8, '2156', '112', '-4695', '2022-08-23 22:24:08', '園主任', '2022-10-25 17:38:10', '園主任'),
(4, 111, 1, '0', '450', '0', '2022-08-23 22:27:37', '園主任', '2022-08-23 22:59:48', '園主任'),
(5, 111, 4, '3200', '2173', '0', '2022-08-23 23:05:45', '園主任', '2022-09-20 18:05:26', '園主任'),
(6, 111, 6, '5002', '1567', '0', '2022-08-23 23:07:02', '園主任', '2022-10-13 15:48:53', '社工組長');

-- --------------------------------------------------------

--
-- 資料表結構 `accounting_record_report`
--

CREATE TABLE `accounting_record_report` (
  `Id` int(11) NOT NULL,
  `Report_year` varchar(300) NOT NULL,
  `Report_type` varchar(100) NOT NULL,
  `Report_path` varchar(2000) NOT NULL,
  `Report_name` varchar(200) NOT NULL,
  `Report_title` varchar(200) NOT NULL,
  `Report_date` varchar(50) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `accounting_record_report`
--

INSERT INTO `accounting_record_report` (`Id`, `Report_year`, `Report_type`, `Report_path`, `Report_name`, `Report_title`, `Report_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '110', '季報表', '../accounting_record_report/損益表_1100112.docx', '損益表_1100112.docx', '損益表', '110/01/12', 'TEST備註', '2022-10-05 17:50:45', '社工員1', '2022-10-05 17:50:45', ''),
(2, '111', '年報表', '../accounting_record_report/資產負債表_1110105.docx', '資產負債表_1110105.docx', '資產負債表', '111/01/05', 'test資產負債表', '2022-10-05 17:56:13', '社工員1', '2022-10-05 17:56:13', ''),
(3, '110', '月報表', '../accounting_record_report/text報表_1100102.docx', 'text報表_1100102.docx', 'text報表', '110/01/02', 'test', '2022-10-05 19:09:36', '社工員1', '2022-10-05 19:09:36', ''),
(4, '109', '月報表', '../accounting_record_report/test2報表_1090315.docx', 'test2報表_1090315.docx', 'test2報表', '109/03/15', 'test0314ssdsd', '2022-10-05 19:11:37', '社工員1', '2022-10-15 19:57:08', 'jia');

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
(3, '開會', 3, '園主任', '2021-12-13'),
(0, '', 1, '社工員1', '2022-09-11'),
(0, '123', 1, '社工員1', '2022-09-11'),
(1, '會議記錄整理', 3, '園主任', '2021-12-11'),
(2, '電訪', 3, '園主任', '2021-12-11'),
(3, '開會', 3, '園主任', '2021-12-13'),
(0, '', 1, '社工員1', '2022-09-11'),
(0, '123', 1, '社工員1', '2022-09-11');

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
(27, '111', '[{\"name\":\"title_name\",\"value\":\"gdgd\"},{\"name\":\"meeting_date\",\"value\":\"111年05月10日\"},{\"name\":\"meeting_time\",\"value\":\"22:10\"},{\"name\":\"place\",\"value\":\"dfgdgd\"},{\"name\":\"ceo_name\",\"value\":\"gdgddg\"},{\"name\":\"attendees\",\"value\":\"dfgdgffdg\"},{\"name\":\"absent\",\"value\":\"TEST請假人員\"},{\"name\":\"record\",\"value\":\"dfgfdgdfg\"},{\"name\":\"discuss\",\"value\":\"TEST提案討論\"},{\"name\":\"motion\",\"value\":\"TEST臨時動議\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:09:38', '社工員1', '2022-10-07 20:18:04', '社工員1'),
(28, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"fgdgdgdfgd\"},{\"name\":\"upload_rec_date\",\"value\":\"111年05月10日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"螢幕擷取畫面 2022-04-26 133143.png\"}]\"', '../board_supervisor/upload/螢幕擷取畫面 2022-04-26 133143.png', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:09:52', '社工員1', '0000-00-00 00:00:00', ''),
(29, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload理監事會議記錄標題\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月10日\"},{\"name\":\"upload_rec_remark\",\"value\":\"testupload\"},{\"name\":\"customFile1\",\"value\":\"test1.docx\"}]\"', '../board_supervisor/upload/test1.docx', '園主任', '../board_supervisor/signature/1657546999.png', 'test理監事紀錄督導留言', '2022-07-11 21:43:19', '2022-07-11 18:14:16', '園主任', '2022-07-11 18:19:05', '園主任'),
(30, '111', '[{\"name\":\"title_name\",\"value\":\"第3次理監事會議紀錄\"},{\"name\":\"meeting_date\",\"value\":\"111年07月11日\"},{\"name\":\"meeting_time\",\"value\":\"10:35\"},{\"name\":\"place\",\"value\":\"ax\"},{\"name\":\"ceo_name\",\"value\":\"t\"},{\"name\":\"attendees\",\"value\":\"a\"},{\"name\":\"absent\",\"value\":\"TEST請假人員\"},{\"name\":\"record\",\"value\":\"bv\"},{\"name\":\"discuss\",\"value\":\"TEST提案討論\"},{\"name\":\"motion\",\"value\":\"TEST臨時動議\"}]', '', '', '園主任', '../board_supervisor/signature/1657546854.png', '理監事會議記錄\ntest督導留言', '2022-07-11 21:40:54', '2022-07-11 21:33:28', '園主任', '2022-10-07 20:19:20', '社工員1'),
(31, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第15次理監事會議紀錄\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"tesbs5.docx\"},{\"name\":\"customFile1\",\"value\":\"tesbs5.docx\"}]\"', '../board_supervisor/upload/tesbs5.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:34:58', '園主任', '0000-00-00 00:00:00', ''),
(32, '111', '[{\"name\":\"title_name\",\"value\":\"test理監事會議會議記錄標題818\"},{\"name\":\"meeting_date\",\"value\":\"111年08月18日\"},{\"name\":\"meeting_time\",\"value\":\"17:20\"},{\"name\":\"place\",\"value\":\"tstr地點\"},{\"name\":\"ceo_name\",\"value\":\"test主持人主持人\"},{\"name\":\"attendees\",\"value\":\"test出席人員\"},{\"name\":\"absent\",\"value\":\"test請假人員\"},{\"name\":\"record\",\"value\":\"test理監事會議記錄\"},{\"name\":\"discuss\",\"value\":\"AASD提案討論\"},{\"name\":\"motion\",\"value\":\"TTTT\"}]', '', '', '園主任', '../board_supervisor/signature/1660812314.png', '園主任簽名', '2022-08-18 16:45:14', '2022-08-18 16:35:25', '園主任', '2022-10-07 20:19:46', '社工員1'),
(33, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"test上傳會議記錄理監事會議818\"},{\"name\":\"upload_rec_date\",\"value\":\"111年08月18日\"},{\"name\":\"upload_rec_remark\",\"value\":\"檔名：tesmma33.docx818\"},{\"name\":\"upload_rec_supervise\",\"value\":\"社工組長\"},{\"name\":\"customFile1\",\"value\":\"tesmma33.docx\"}]\"', '../board_supervisor/upload/tesmma33.docx', '社工組長', '../board_supervisor/signature/1660812408.png', '社工組長簽名', '2022-08-18 16:46:48', '2022-08-18 16:38:40', '社工員1', '0000-00-00 00:00:00', ''),
(34, '111', '[{\"name\":\"title_name\",\"value\":\"test理監事會記錄標題1007\"},{\"name\":\"meeting_date\",\"value\":\"111年10月07日\"},{\"name\":\"meeting_time\",\"value\":\"10:05\"},{\"name\":\"place\",\"value\":\"te會議地點\"},{\"name\":\"ceo_name\",\"value\":\"sss主席\"},{\"name\":\"attendees\",\"value\":\"出席人員ttt\"},{\"name\":\"absent\",\"value\":\"dad請假人員\"},{\"name\":\"record\",\"value\":\"dead紀錄者\"},{\"name\":\"discuss\",\"value\":\"aaa提案討論sdfsfs\"},{\"name\":\"motion\",\"value\":\"dd：;;  1.aadsadssa;;  2.aaaaaaaa;;3.aaassdada\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-07 21:03:01', '社工員1', '2022-10-13 15:22:24', '社工組長'),
(35, '109', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"uploadtt理監事會記錄標題1209\"},{\"name\":\"upload_rec_date\",\"value\":\"109年12月09日\"},{\"name\":\"upload_rec_remark\",\"value\":\"ttttt;;1.;;2.aaa\"},{\"name\":\"customFile1\",\"value\":\"test.bmp\"}]\"', '../board_supervisor/upload/test.bmp', '社工員2', '', '', '0000-00-00 00:00:00', '2022-10-13 16:26:15', '社工組長', '2022-10-15 22:55:43', 'jia'),
(36, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"ttttt理監事會記錄標題1015\"},{\"name\":\"upload_rec_date\",\"value\":\"111年10月15日\"},{\"name\":\"upload_rec_remark\",\"value\":\"adsada44444;;備註;;備註\"},{\"name\":\"upload_rec_supervise\",\"value\":\"園主任\"},{\"name\":\"customFile1\",\"value\":\"test.bmp\"}]\"', '../board_supervisor/upload/test.bmp', '園主任', '', '', '0000-00-00 00:00:00', '2022-10-15 23:17:58', 'jia', '0000-00-00 00:00:00', '');

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
(20, 'yukia(海洛因,安非他命)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=2', '2021-09-26 14:00', '2021-09-26 15:00', '園主任', '', '2022-01-25 18:24:48'),
(21, 'yukia(海洛因,安非他命)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=2', '2021-10-15 14:00', '2021-10-15 15:00', '園主任', '', '2022-01-25 18:34:36'),
(22, 'yukia(海洛因,安非他命)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=2', '2021-10-11 12:00', '2021-10-11 13:00', '園主任', '', '2022-01-25 18:35:40'),
(23, 'Allen(K他命)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=1', '2021-09-17 08:00', '2021-09-17 09:00', '園主任', '', '2022-01-25 19:16:02'),
(24, 'Deny(大麻)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=3', '2021-12-18 15:00', '2021-12-18 16:00', '園主任', '', '2022-01-25 20:07:36'),
(25, '黃QQ(2021-12-09)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2021-12-09 15:00', '2021-12-09 18:30', '園主任', '', '2022-03-09 17:51:49'),
(26, '黃QQ(2021-12-09)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2021-12-09 09:30', '2021-12-09 11:00', '園主任', '', '2022-03-09 17:53:20'),
(27, '黃QQ(2021-12-16)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2021-12-16 08:30', '2021-12-16 11:00', '園主任', '', '2022-03-09 17:57:47'),
(28, '黃QQ(2021-12-10)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2021-12-10 12:00', '2021-12-10 13:00', '園主任', '', '2022-03-09 17:58:37'),
(29, '黃QQ(2022-01-21)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2022-01-21 07:00', '2022-01-21 08:30', '園主任', '', '2022-03-09 17:59:13'),
(30, '黃QQ(2022-01-28)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2022-01-28 12:00', '2022-01-28 13:00', '園主任', '', '2022-03-09 18:21:39'),
(31, '黃QQ(2022-02-04)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=1&counsel_id=766', '2022-02-04 06:30', '2022-02-04 09:00', '園主任', '', '2022-03-09 19:32:25'),
(32, 'test(2021-11-11)監所輔導-訪談', 'http://140.127.22.3/HappyAlliance/HAproject/counsel_detail.php?id=2&counsel_id=622', '2021-11-11 12:00', '2021-11-11 13:00', '園主任', '', '2022-03-09 19:36:12'),
(33, 'Timmy(酒精)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=4', '2021-11-07 12:00', '2021-11-07 13:00', '園主任', '', '2022-04-15 19:18:08'),
(34, 'Deny(大麻)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=3', '2021-11-25 10:00', '2021-11-25 11:00', '園主任', '', '2022-04-15 19:28:08'),
(35, 'test(古柯鹼,搖頭丸,K他命,FM2藥丸,酒精,強力膠,檳榔,其他藥物)面訪', 'http://140.127.22.3/HappyAlliance/HAproject/phone_detail_v2.php?phone_id=6', '2022-06-09 12:00', '2022-06-09 13:00', '社工員1', '', '2022-06-27 10:27:10'),
(36, 'Allen(2022-06-29)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-06-29 12:00', '2022-06-29 13:00', '社工員1', '', '2022-07-05 10:05:53'),
(37, 'Allen(2022-07-14)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-14 12:00', '2022-07-14 13:00', '社工員1', '', '2022-07-05 10:14:26'),
(38, 'Allen(2022-07-06)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-06 12:00', '2022-07-06 13:00', '社工員1', '', '2022-07-05 10:54:51'),
(39, 'Allen()在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', ' 12:00', ' 13:00', '社工員1', '', '2022-07-05 16:18:44'),
(40, 'Allen(2022-07-08)在職訓練', 'http://140.127.22.3/HappyAlliance/HAproject/training_detail.php?name=Allen&tra_id=10', '2022-07-08 12:00', '2022-07-08 13:00', '社工員1', '', '2022-07-07 20:24:38'),
(60, '團督記錄簽核：第12次團督紀錄', 'http://140.127.22.3/HappyAlliance/HAproject/supervisor_record_detail.php?year=111&id=13&sr_id=13&rec_type=fillin', '2022-07-11 14:46', '2022-07-12 09:30', '園主任', '', '2022-07-11 20:57:46'),
(61, '團督記錄簽核：upload第3次團督會議記錄', 'http://140.127.22.3/HappyAlliance/HAproject/supervisor_record_detail.php?year=111&id=14&sr_id=14&rec_type=upload', '2022-07-11 15:09', '2022-07-13 15:09', '園主任', '', '2022-07-11 21:05:09'),
(64, '團督記錄簽核：第5次團督會議紀錄upload', 'http://140.127.22.3/HappyAlliance/HAproject/supervisor_record_detail.php?year=111&id=16&sr_id=16&rec_type=upload', '2022-07-11 15:12', '2022-07-13 15:12', '園主任', '', '2022-07-11 21:09:12'),
(67, '理監事會議記錄簽核：第3次理監事會議紀錄', 'http://140.127.22.3/HappyAlliance/HAproject/board_supervisor_detail.php?year=111&id=30&bs_id=30&rec_type=fillin', '2022-07-11 15:28', '2022-07-13 15:28', '園主任', '', '2022-07-11 21:33:28'),
(68, '理監事會議記錄簽核：第15次理監事會議紀錄', 'http://140.127.22.3/HappyAlliance/HAproject/board_supervisor_detail.php?year=111&id=31&bs_id=31&rec_type=upload', '2022-07-11 15:58', '2022-07-13 15:58', '園主任', '', '2022-07-11 21:34:58'),
(70, '會員大會記錄簽核：第33次會員大會記錄upload', 'http://140.127.22.3/HappyAlliance/HAproject/members_assemble_detail.php?year=111&id=12&ma_id=12&rec_type=upload', '2022-07-11 16:45', '2022-07-13 16:45', '園主任', '', '2022-07-11 22:02:45'),
(71, '會員大會記錄簽核：test會員大會記錄標題3', 'http://140.127.22.3/HappyAlliance/HAproject/members_assemble_detail.php?year=111&id=13&ma_id=13&rec_type=fillin', '2022-07-11 16:39', '2022-07-13 16:39', '園主任', '', '2022-07-11 22:03:39'),
(72, 'test001()在職訓練', 'http://localhost/HappyAlliance/HAproject/training_detail.php?id=27', ' 12:00', ' 13:00', '社工員1', '', '2022-10-18 13:10:05');

-- --------------------------------------------------------

--
-- 資料表結構 `case_report`
--

CREATE TABLE `case_report` (
  `Id` int(244) NOT NULL,
  `Case_seqid` varchar(2000) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Form_id` int(244) NOT NULL,
  `Open_case_date` date NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Case_grade` varchar(30) NOT NULL,
  `Case_state` varchar(200) NOT NULL,
  `Interlocution_home_count` tinyint(1) NOT NULL,
  `Interlocution_phone_count` tinyint(1) NOT NULL,
  `Interlocution_face_count` tinyint(1) NOT NULL,
  `Case_count` tinyint(1) NOT NULL,
  `Case_closed_count` tinyint(1) NOT NULL,
  `Employment_satif_count` tinyint(1) NOT NULL,
  `Case_assign` varchar(30) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `case_report`
--

INSERT INTO `case_report` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Open_case_date`, `Name`, `Case_grade`, `Case_state`, `Interlocution_home_count`, `Interlocution_phone_count`, `Interlocution_face_count`, `Case_count`, `Case_closed_count`, `Employment_satif_count`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '1', 'RE111', 1, '2021-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-03-06 19:04:30', '社工員1', '2022-09-06 19:04:30', ''),
(2, '1', 'RE111', 1, '2021-08-08', 'test', 'B', '已結案', 0, 0, 0, 0, 1, 0, '社工員1', '2022-03-12 19:04:47', '社工員1', '2022-09-06 19:04:47', ''),
(3, '1', 'RE111', 16, '2021-08-08', 'test', 'B', '已結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-03-12 19:06:02', '社工員1', '2022-09-06 19:06:02', ''),
(4, '1', 'RE111', 17, '2021-08-08', 'test', 'B', '已結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-04-06 19:06:27', '社工員1', '2022-09-06 19:06:27', ''),
(5, '1', 'RE111', 16, '2021-08-08', 'test', 'B', '已結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-04-10 19:06:39', '社工員1', '2022-09-06 19:06:39', ''),
(6, '1', 'RE111', 17, '2021-08-08', 'test', 'B', '已結案', 0, 0, 1, 0, 0, 0, '社工員1', '2022-04-11 19:07:10', '社工員1', '2022-09-06 19:07:10', ''),
(7, '6', 'RE111', 12, '2022-08-08', 'test', 'B', '未結案', 1, 0, 0, 0, 0, 0, '社工員1', '2022-04-12 19:07:49', '社工員1', '2022-09-06 19:07:49', ''),
(8, '6', 'RE111', 13, '2022-08-08', 'test', 'B', '未結案', 0, 0, 1, 0, 0, 0, '社工員1', '2022-04-17 19:07:57', '社工員1', '2022-09-06 19:07:57', ''),
(9, '6', 'RE111', 15, '2022-08-08', 'test', 'B', '未結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-04-19 19:08:10', '社工員1', '2022-09-06 19:08:10', ''),
(10, '6', 'RE111', 15, '2022-08-08', 'test', 'B', '未結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-05-12 19:08:32', '社工員1', '2022-09-06 19:08:32', ''),
(11, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-05-12 19:08:48', '社工員1', '2022-09-06 19:08:48', ''),
(12, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 1, 0, '社工員1', '2022-05-16 19:09:01', '社工員1', '2022-09-06 19:09:01', ''),
(13, '6', 'RE111', 7, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 0, 1, '社工員1', '2022-05-16 19:09:16', '社工員1', '2022-09-06 19:09:16', ''),
(14, '2', 'RE112', 4, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-06-06 19:10:05', '社工員1', '2022-09-06 19:10:05', ''),
(15, '2', 'RE112', 4, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-06-10 19:10:13', '社工員1', '2022-09-06 19:10:13', ''),
(16, '2', 'RE112', 9, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 1, 0, 0, 0, '社工員2', '2022-06-10 19:10:22', '社工員1', '2022-09-06 19:10:22', ''),
(17, '2', 'RE112', 9, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 1, 0, 0, 0, '社工員2', '2022-06-15 19:10:27', '社工員1', '2022-09-06 19:10:27', ''),
(18, '2', 'RE112', 5, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 0, 0, 1, '社工員2', '2022-06-27 19:10:47', '社工員1', '2022-09-06 19:10:47', ''),
(19, '4', 'RE113', 18, '2022-08-03', '黃QQ', 'A', '未結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-09-01 19:11:45', '社工員1', '2022-09-06 19:11:45', ''),
(20, '4', 'RE113', 18, '2022-08-03', '黃QQ', 'A', '未結案', 0, 1, 0, 0, 0, 0, '社工員1', '2022-09-02 19:11:58', '社工員1', '2022-09-06 19:11:58', ''),
(21, '4', 'RE113', 19, '2022-08-03', '黃QQ', 'A', '未結案', 0, 0, 1, 0, 0, 0, '社工員1', '2022-09-06 19:12:40', '社工員1', '2022-09-06 19:12:40', ''),
(22, '4', 'RE113', 20, '2022-08-03', '黃QQ', 'A', '未結案', 0, 0, 0, 0, 0, 1, '社工員1', '2022-09-06 19:13:06', '社工員1', '2022-09-06 19:13:06', ''),
(23, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-09-20 17:36:26', '社工員1', '2022-09-20 17:36:26', ''),
(24, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-10-05 19:46:29', '社工員1', '2022-10-05 19:46:29', ''),
(25, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 1, 0, '社工員1', '2022-10-05 19:47:10', '社工員1', '2022-10-05 19:47:10', ''),
(26, '6', 'RE111', 12, '2022-08-08', 'test', 'B', '未結案', 1, 0, 0, 0, 0, 0, '社工員1', '2022-10-06 14:50:46', '園主任', '2022-10-06 14:50:46', ''),
(27, '1', 'RE111', 17, '2021-08-08', 'test', 'B', '已結案', 0, 0, 1, 0, 0, 0, '社工員1', '2022-10-06 14:53:53', '園主任', '2022-10-06 14:53:53', ''),
(28, '5', 'RE114', 21, '2021-06-11', 'test611', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-10-06 17:49:24', '園主任', '2022-10-06 17:49:24', ''),
(29, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-10-13 15:55:06', '社工組長', '2022-10-13 15:55:06', ''),
(30, '2', 'RE112', 4, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-10-18 16:38:27', '社工員1', '2022-10-18 16:38:27', ''),
(31, '2', 'RE112', 4, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-10-24 20:09:57', '社工組長', '2022-10-24 20:09:57', ''),
(32, '6', 'RE111', 6, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2022-10-25 18:23:00', '園主任', '2022-10-25 18:23:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `closed`
--

CREATE TABLE `closed` (
  `Id` int(244) NOT NULL,
  `Open_case_seqid` int(244) DEFAULT NULL,
  `Open_case_id` text NOT NULL,
  `Closed_id` text NOT NULL,
  `Open_date` date NOT NULL,
  `Closed_date` date NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Gender` varchar(20) NOT NULL,
  `Birth` varchar(300) NOT NULL,
  `File_name` varchar(2000) NOT NULL,
  `Main_issue` text NOT NULL,
  `Minor_issue` text NOT NULL,
  `Intervention` text NOT NULL,
  `Evaluation` text NOT NULL,
  `Closed_reason` text NOT NULL,
  `Closed_result` varchar(2000) NOT NULL,
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

INSERT INTO `closed` (`Id`, `Open_case_seqid`, `Open_case_id`, `Closed_id`, `Open_date`, `Closed_date`, `Name`, `Gender`, `Birth`, `File_name`, `Main_issue`, `Minor_issue`, `Intervention`, `Evaluation`, `Closed_reason`, `Closed_result`, `Remark`, `Assign`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 0, 're211', '671', '2021-01-20', '2021-12-25', 'Allen', '男', '', '', '主要問題test2', '', '問題處遇test1', '', 'othertest結案原因123', '', '備註test461', '社工員1', '', '', '', '0000-00-00 00:00:00', '2022-04-06 18:01:44', '社工員1', '2022-04-06 19:50:28', '園主任'),
(2, 0, 're161', '658', '2021-12-01', '2022-09-13', 'Amy', '女', '', '', '主要問題test111', '', '問題處遇test121', '', '失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）', '', '備註test46123', '社工員2', '園主任', '../signature/1651745907.png', 'TEST王小七', '2022-05-05 18:18:27', '2022-04-06 18:01:44', '社工員2', '2022-10-13 19:00:11', '社工組長'),
(9, 0, '6', '672', '2021-10-11', '2021-12-16', '黃QQ', '男', '', '', '診斷問題主要問題test', '', 'TEST問題處遇QQ1', '', '達到目標，已無需要在服務', '', 'test結案原因/備註QQ', '社工員1', '園主任', '../signature/1657023532.png', 'test主任', '2022-07-05 20:18:52', '2022-07-05 19:14:38', '園主任', '2022-07-05 19:16:10', '園主任'),
(11, 0, '', '699', '2022-07-02', '2022-07-01', 'testaaa', '女', '', '', 'test主要問題', '', '問題處遇test', '', 'othertest其他結案原因', '', '備註test', '社工員2', '', '', '', '0000-00-00 00:00:00', '2022-07-05 20:43:40', '園主任', '2022-07-05 20:43:40', ''),
(12, 1, 'RE111', '700', '2022-08-08', '2022-08-08', 'test', '男', '', '', 'test診斷問題主要問題', '', '問題處遇TTT', '', '達到目標，已無需要在服務', '', 'test結案原因/備註test', '園主任', '', '', '', '0000-00-00 00:00:00', '2022-08-08 21:10:18', '園主任', '2022-08-08 21:10:18', ''),
(14, 0, 'dqdq111', '6588', '2020-02-15', '2020-10-14', 'testab', '其他/非二元性別', '', '', 'ttt主要問題\n主要問題', '', '問題處遇test\ntest', '', 'other結案原因test', '', 'tttt備註\ndasdad', '社工員2', '', '', '', '0000-00-00 00:00:00', '2022-10-15 21:17:31', 'jia', '2022-10-15 21:17:31', ''),
(15, 6, 'RE111', 'RE111', '2022-08-08', '2022-10-24', 'test', '男', '1991-02-03', '1.xls', 'test診斷問題主要問題', 'test診斷問題次要問題', '一、aaaa1\n二、aaaaaa\n三、aaaaaaaAA', '一、-(已緩解)\n\n二、-(已緩解)\n\n三、-(                    )\n四、量表評量成效\n1.	憂鬱程度:\n重點文字說明:\n2.	BSRS-5\n重點文字說明:\n3.	生活品質量表：\n重點文字說明:\n4.	家庭關係量表：\n重點文字說明:\n5.	就業輔導評估 □成功就業□失業■就業輔導中□其他說明\n6.	社會適應程度評估 □適應良好■佳□尚可□不佳\n7.	整體成效說明：ttttttttttt', '達到目標，已無需要在服務', '1111符合結案', 'test結案原因/備註test', '社工員1', '社工組長', '../signature/1666705015.png', 'test\n社工組長1025', '2022-10-25 21:36:55', '2022-10-25 20:02:03', '社工員1', '2022-10-25 21:40:23', '社工組長');

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
(14, '3', '2021-12-16 10:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:02:17', '園主任', '2022-04-15 19:26:41', '園主任'),
(15, '3', '2021-12-17 00:00:00', '電訪', '', 'Deny', '其他', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Denyfa', 'deny父親', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員2', 'TEST', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 20:06:35', '園主任', '2022-01-25 20:06:35', ''),
(16, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '大麻、FM2藥丸', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '', '社區', '社區', '2021-12-18', '2021-12-18', '15:00:00', '16:00:00', '社工員2', '社工員1', 'TEST', 0, '2022-01-25 20:07:36', '園主任', '2022-01-25 20:07:36', ''),
(17, '4', '2021-12-29 16:10:00', '電訪', '', 'Timmy', '男', '家庭', '酒精', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', 'test', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:12:19', '園主任', '2022-10-13 18:57:50', '社工組長'),
(18, '4', '2021-09-22 00:00:00', '電訪', '', 'Timmy', '男', '家庭', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', 'test', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:17:02', '園主任', '2022-04-15 19:17:02', ''),
(19, '4', '0000-00-00 00:00:00', '面訪', '家訪', 'Timmy', '男', '家庭', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', '', '', 'test家訪', '家訪', '2021-11-07', '2021-11-07', '12:00:00', '13:00:00', '社工員1', '', 'test備註	備註', 0, '2022-04-15 19:18:08', '園主任', '2022-04-15 19:18:08', ''),
(20, '3', '2021-11-21 00:00:00', '電訪', '', 'Deny', '其他', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '', '', '不明', '社工員1', 'test通話內容	', '4', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:27:30', '園主任', '2022-04-15 19:27:30', ''),
(21, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '', '', '', '', '不明', '社工員1', '', '', 'test社區', '社區', '2021-11-25', '2021-11-25', '10:00:00', '11:00:00', '社工員2', '', 'test備註	', 0, '2022-04-15 19:28:08', '園主任', '2022-04-15 19:28:08', ''),
(22, '5', '2021-10-13 10:10:00', '面訪', '社區', '黃QQ', '其他', '愛滋感染者', '', '海洛因、搖頭丸、K他命、精神藥物', '47', '40-49歲', '屏東縣屏東市自由路67666號', '南部', '黃QQ的阿姨', '阿姨', '親戚', '0358542', '屏東某鄉鎮市社區', '社區', '', '', '', '', '不明', '社工員2', 'test諮詢內容	諮詢內容', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:44:17', '園主任', '2022-04-15 19:44:17', ''),
(23, '6', '2021-09-05 10:00:00', '電訪', '', 'test', '其他', '一般藥癮者', '', '古柯鹼、搖頭丸、K他命、FM2藥丸、酒精、強力膠、檳榔、其他藥物', '18', '10-19歲', '屏東縣內埔鄉東寧村勝利路12666號', '南部', 'test', 'test', '本人', '011111111', '', '', '', '', '', '', '不明', '社工組長', 'test諮詢內容	諮詢內容	諮詢內容	諮詢內容1111', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:56:23', '園主任', '2022-04-15 19:56:23', '');

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
  `Cocktail_therapy_name` varchar(200) NOT NULL,
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

INSERT INTO `counsel` (`Id`, `Refferal`, `Counsel_id`, `Name`, `Gender`, `Sexual_orientation`, `Birth`, `Pid`, `Info_name`, `Info_phone`, `Address`, `In_prison_date`, `Out_prison_date`, `In_prison_date_2nd`, `Out_prison_date_2nd`, `In_prison_date_3rd`, `Out_prison_date_3rd`, `Is_parole`, `HIV_diagnosis_date`, `Family_know`, `Cocktail_therapy_status`, `Cocktail_therapy_name`, `Interview_date_1st`, `Interview_date_2nd`, `Interview_date_3rd`, `Interview_date_4th`, `Interview_date_5th`, `Interview_date_6th`, `Interview_date_7th`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '高雄監獄', 766, '黃QQ', '男', '同性', '1969-08-11', 'T121956775', '劉大福', '988517485', '屏東縣內埔鄉東寧村勝利路5557-2號', '2016-09-30', '2022-05-06', '2022-05-18', '0000-00-00', '0000-00-00', '0000-00-00', '是', '2022-06-25', '否', '否', '', '2022-02-11', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-03-05 00:00:00', '', '2022-10-13 18:58:30', '社工組長'),
(2, '台南監獄', 622, 'test', '其他', '異性', '1952-09-17', 'd1234455186', 'test緊急聯絡人', '05121312', '屏東縣屏東市自由路63312號', '2021-12-01', '2023-03-02', '2021-12-02', '2022-05-26', '0000-00-00', '0000-00-00', '否', '2021-12-29', '是', '否', '', '2022-02-02', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-03-07 16:55:01', '園主任', '0000-00-00 00:00:00', ''),
(3, '台南監獄', 14, 'test1024', '女', '異性', '1964-04-08', 'n263112314441', 'test1024aaa', '081231213314', '高雄市鳳山區光復路二段123412號', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '否', '2021-06-09', '是', '是', '雞尾酒藥物1S', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '2022-10-24 18:08:45', '社工組長', '2022-10-24 18:38:32', '社工組長');

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
  `Case_stage` varchar(20) NOT NULL,
  `Open_case_date` date NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Sexual_orientation` varchar(30) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `Birth` date NOT NULL,
  `Case_pid` varchar(2000) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Case_state` varchar(200) NOT NULL,
  `Close_case_date` date NOT NULL,
  `Case_assign` varchar(20) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `current_case`
--

INSERT INTO `current_case` (`Id`, `Case_id`, `Phone_id`, `Unopen_type`, `Case_Create_date`, `Object_type`, `Case_grade`, `Case_property`, `Case_stage`, `Open_case_date`, `Name`, `Gender`, `Sexual_orientation`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Close_case_date`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 'RE111', '6', 'phone', '2021-08-08', '藥癮家庭', 'B', '安置家園', '1', '2021-08-08', 'test', '男', '同性', '062223331', '1991-02-03', 'T1334356112', '其他', '已結案', '2021-12-12', '社工員1', '2021-08-08 19:11:33', '園主任', '2022-08-08 21:10:18', '園主任'),
(2, 'RE112', '', 'case', '2022-08-08', '一般藥癮者', 'B', '安置家園', '2', '2022-08-08', 'TEST0808', '女', '異性', '0972631122', '1993-06-22', 'S167123331', '醫院', '未結案', '0000-00-00', '社工員2', '2022-08-08 19:38:58', '園主任', '0000-00-00 00:00:00', ''),
(4, 'RE113', '', 'case', '2022-08-03', '一般藥癮者', 'A', '社區', '', '2022-08-03', '黃QQ', '男', '異性', '08123124444', '1993-10-15', 'B123555515', '社區', '未結案', '0000-00-00', '社工組長', '2022-08-08 19:42:41', '園主任', '0000-00-00 00:00:00', ''),
(5, 'RE114', '', 'case', '2021-06-11', '一般藥癮者', 'B', '安置家園', '1', '2021-06-11', 'test611', '其他', '雙性', '061234441', '1995-12-12', 'C248491122', '自行求助', '未結案', '0000-00-00', '社工員2', '2022-08-08 20:52:35', '園主任', '0000-00-00 00:00:00', ''),
(6, 'RE111', '', 'reopencase', '2022-08-08', '藥癮家庭', 'B', '安置家園', '1', '2022-08-08', 'test', '男', '同性', '062223331', '1991-02-03', 'T1334356112', '其他', '已結案', '2022-10-25', '社工員1', '2022-08-08 21:23:47', '園主任', '2022-10-25 20:02:03', '社工員1');

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
  `Job_agent` varchar(30) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL,
  `Supervise` varchar(30) NOT NULL,
  `Supervise_signature` varchar(500) NOT NULL,
  `Supervise_sign_msg` varchar(2000) NOT NULL,
  `Supervise_sign_time` varchar(54) NOT NULL,
  `Job_agent_signature` varchar(500) NOT NULL,
  `Job_agent_sign_msg` varchar(2000) NOT NULL,
  `Job_agent_sign_time` varchar(54) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `day_off`
--

INSERT INTO `day_off` (`Id`, `Name`, `Reason`, `Overtime_date`, `Hours`, `Makeup_date`, `Makeup_hours`, `Job_agent`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Job_agent_signature`, `Job_agent_sign_msg`, `Job_agent_sign_time`) VALUES
(6, 'qqq', 'qqq', '2022-07-14', 1, '2022-07-03', 13, '', '2022-07-06', '', '2022-07-06', '', '社工員1', '../signature/1663649890.png', '', '2022-09-20 12:58:10', '', '', ''),
(7, 'aaaa', 'aaa', '2022-07-08', 12, '2022-07-04', 3, '', '2022-07-06', 'ddd', '2022-07-06', 'ddd', '社工員1', '../signature/1663648439.png', '', '2022-09-20 12:33:59', '', '', ''),
(8, 'kkk', 'kkk', '2022-07-05', 6, '2022-07-05', 0, '', '2022-07-06', '社工員1', '0000-00-00', '', '', '', '', '', '', '', ''),
(9, 'sdsdf', 'fdfsd', '2022-07-13', 12, '2022-07-14', 5, '', '2022-07-28', '社工員1', '0000-00-00', '', '社工員1', '../signature/1658991438.png', '', '2022-07-28 14:57:18', '', '', ''),
(10, 'Timmm', 'rrr', '2022-08-02', 3, '2022-08-01', 33, '', '2022-08-09', '社工員1', '0000-00-00', '', '', '', '', '', '', '', ''),
(11, '測試', '測試所以請假', '2022-10-03', 1, '2022-10-13', 1, '', '2022-10-12', '測試測試', '2022-10-12', '測試測試', '花花', '../signature/1665556191.png', '', '2022-10-12 14:29:51', '', '', '');

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
(1, 20, 30, 29, 33, 3, '2021-12-22', 'test1', '', '', '', '', 'test2', 't', '', '', '', 'test5', 'test6\n', 'testw', '社工員1', '../signature/1651571061.png', 'test社工員留言45', '2022-05-03 17:44:21', '園主任', '../signature/1651571093.png', 'test督導留言', '2022-05-03 17:44:53', '2022-04-07 20:46:39', '社工員1', '2022-10-13 19:00:30', '社工組長'),
(2, 17, 28, 28, 30, 2, '2021-11-10', 'test1', '', 'test2', '', '', '', 'test3', 'test4', 'test特殊個案反應情形輔導處理', 'test輔導諮詢執行實況	', 'test問題處遇概況	', 'test備註	', 'test管理員/生活輔導員', 'test社工員', '', '', '0000-00-00 00:00:00', 'test督導', '', '', '0000-00-00 00:00:00', '2022-04-07 20:47:56', '園主任', '2022-04-07 20:47:56', '');

-- --------------------------------------------------------

--
-- 資料表結構 `forms`
--

CREATE TABLE `forms` (
  `Id` int(100) NOT NULL,
  `Case_seqid` varchar(2000) NOT NULL,
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

INSERT INTO `forms` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `answer`, `file_path`, `Health_rec`) VALUES
(1, '1', 'RE111', 2, 'BSRS5', 'test', 'T1334356112', '2022-08-08 19:21:51', '園主任', '2022-10-05 20:34:12', '社工員1', '\"[{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"age\",\"value\":\"31\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"2\"},{\"name\":\"answer2\",\"value\":\"2\"},{\"name\":\"answer3\",\"value\":\"2\"},{\"name\":\"answer4\",\"value\":\"1\"},{\"name\":\"answer5\",\"value\":\"1\"},{\"name\":\"answer6\",\"value\":\"1\"},{\"name\":\"answer_score\",\"value\":\"8\"},{\"name\":\"treatment_status\",\"value\":\"超過6分\"},{\"name\":\"treatment_status\",\"value\":\"第6題單獨得分\"},{\"name\":\"statement\",\"value\":\"test處置情形\"}]\"', '', ''),
(2, '1', 'RE111', 1, 'case', 'test', 'T1334356112', '2022-08-08 19:23:08', '園主任', '2022-10-15 21:41:33', 'jia', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-08-08\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"phone_home\",\"value\":\"0721633\"},{\"name\":\"phone_mobile\",\"value\":\"07216332\"},{\"name\":\"address\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"residence\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"高中職\"},{\"name\":\"marital\",\"value\":\"不詳\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"其他\"},{\"name\":\"current_job_other\",\"value\":\"待業\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"3\"},{\"name\":\"economic_status_3\",\"value\":\"社會救濟每個月8000元\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"3\"},{\"name\":\"drug_record_3\",\"value\":\"嗎啡3年\"},{\"name\":\"correctional_question_count\",\"value\":\"1\"},{\"name\":\"correctional_question_start\",\"value\":\"2021-02\"},{\"name\":\"correctional_question_end\",\"value\":\"2021-10\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"8\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"test需求評估a\"},{\"name\":\"treatment_time\",\"value\":\"0\"},{\"name\":\"treatment_time_year\",\"value\":\"109\"},{\"name\":\"treatment_time_month\",\"value\":\"12\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"已接受治療\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"test醫院個管\"},{\"name\":\"medical_phone\",\"value\":\"test231215\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"0312134513\"},{\"name\":\"CD4_index_0\",\"value\":\"1231\"},{\"name\":\"CD4_index_1\",\"value\":\"110\"},{\"name\":\"CD4_index_2\",\"value\":\"11\"},{\"name\":\"viral_0\",\"value\":\"2341\"},{\"name\":\"viral_1\",\"value\":\"100\"},{\"name\":\"viral_2\",\"value\":\"1\"},{\"name\":\"medical_other\",\"value\":\"test其他\"},{\"name\":\"medicine\",\"value\":\"3TC速汰滋\"},{\"name\":\"medicine\",\"value\":\"Duovir倍歐減\"},{\"name\":\"medicine\",\"value\":\"Truvada舒發泰\"},{\"name\":\"medicine\",\"value\":\"寧衛邁\"},{\"name\":\"medicine\",\"value\":\"抑滋靈\"},{\"name\":\"symptoms\",\"value\":\"持續疲倦\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"test個案問題陳述\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"test家庭系統\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"test診斷問題主要問題\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"employment_radio\",\"value\":\"就業輔導中\"},{\"name\":\"social_adaptation_radio\",\"value\":\"佳\"},{\"name\":\"other_assessments\",\"value\":\"test其他評量a\"},{\"name\":\"end_indicator\",\"value\":\"達到目標，已無需要在服務\"},{\"name\":\"case_closed_radio\",\"value\":\"結案\"},{\"name\":\"case_closed_yes\",\"value\":\"test結案原因/備註test\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"1.xls\"}]\"', '../upload/1.xls', ''),
(3, '1', 'RE111', 3, 'case', 'test', 'T1334356112', '2022-08-08 19:28:17', '園主任', '2022-10-15 21:41:40', 'jia', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-08-08\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"phone_home\",\"value\":\"0721633\"},{\"name\":\"phone_mobile\",\"value\":\"07216332\"},{\"name\":\"address\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"residence\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"高中職\"},{\"name\":\"marital\",\"value\":\"不詳\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"其他\"},{\"name\":\"current_job_other\",\"value\":\"待業\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"3\"},{\"name\":\"economic_status_3\",\"value\":\"社會救濟每個月8000元\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"3\"},{\"name\":\"drug_record_3\",\"value\":\"嗎啡3年\"},{\"name\":\"correctional_question_count\",\"value\":\"1\"},{\"name\":\"correctional_question_start\",\"value\":\"2021-02\"},{\"name\":\"correctional_question_end\",\"value\":\"2021-10\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"8\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"test需求評估11\"},{\"name\":\"treatment_time\",\"value\":\"0\"},{\"name\":\"treatment_time_year\",\"value\":\"109\"},{\"name\":\"treatment_time_month\",\"value\":\"12\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"已接受治療\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"test醫院個管\"},{\"name\":\"medical_phone\",\"value\":\"test231215\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"0312134513\"},{\"name\":\"CD4_index_0\",\"value\":\"1231\"},{\"name\":\"CD4_index_1\",\"value\":\"110\"},{\"name\":\"CD4_index_2\",\"value\":\"11\"},{\"name\":\"viral_0\",\"value\":\"2341\"},{\"name\":\"viral_1\",\"value\":\"100\"},{\"name\":\"viral_2\",\"value\":\"1\"},{\"name\":\"medical_other\",\"value\":\"test其他\"},{\"name\":\"medicine\",\"value\":\"3TC速汰滋\"},{\"name\":\"medicine\",\"value\":\"Duovir倍歐減\"},{\"name\":\"medicine\",\"value\":\"Truvada舒發泰\"},{\"name\":\"medicine\",\"value\":\"寧衛邁\"},{\"name\":\"medicine\",\"value\":\"抑滋靈\"},{\"name\":\"symptoms\",\"value\":\"持續疲倦\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"test個案問題陳述\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"test家庭系統\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"test診斷問題主要問題\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"employment_radio\",\"value\":\"就業輔導中\"},{\"name\":\"social_adaptation_radio\",\"value\":\"佳\"},{\"name\":\"other_assessments\",\"value\":\"test其他評量\"},{\"name\":\"end_indicator\",\"value\":\"達到目標，已無需要在服務\"},{\"name\":\"case_closed_radio\",\"value\":\"結案\"},{\"name\":\"case_closed_yes\",\"value\":\"test結案原因/備註test\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"1.xls\"}]\"', '../upload/1.xls', ''),
(4, '6', 'RE111', 7, 'employment_satif', 'test', 'T1334356112', '2022-08-08 21:26:36', '園主任', '2022-10-05 20:35:27', '社工員1', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2022-08-08\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"education_graduate\",\"value\":\"畢業\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"RE111\"},{\"name\":\"fillin_date_1\",\"value\":\"2022-08-08\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"4\"},{\"name\":\"answer3\",\"value\":\"4\"},{\"name\":\"answer4\",\"value\":\"4\"},{\"name\":\"answer5\",\"value\":\"2\"},{\"name\":\"answer6\",\"value\":\"3\"},{\"name\":\"answer7\",\"value\":\"4\"},{\"name\":\"answer8\",\"value\":\"4\"},{\"name\":\"answer9\",\"value\":\"3\"},{\"name\":\"answer10\",\"value\":\"3\"},{\"name\":\"answer_score\",\"value\":\"35\"}]\"', '', ''),
(5, '6', 'RE111', 8, 'life', 'test', 'T1334356112', '2022-08-08 21:40:43', '園主任', '2022-10-05 20:35:16', '社工員1', '\"[{\"name\":\"w_test\",\"value\":\"前測\"},{\"name\":\"fillin_date\",\"value\":\"2022-08-08\"},{\"name\":\"life_answer1\",\"value\":\"5\"},{\"name\":\"life_answer2\",\"value\":\"1\"},{\"name\":\"life_answer3\",\"value\":\"3\"},{\"name\":\"life_answer4\",\"value\":\"3\"},{\"name\":\"life_answer5\",\"value\":\"4\"},{\"name\":\"life_answer6\",\"value\":\"4\"},{\"name\":\"life_answer7\",\"value\":\"5\"},{\"name\":\"life_answer8\",\"value\":\"4\"},{\"name\":\"life_answer9\",\"value\":\"5\"},{\"name\":\"life_answer10\",\"value\":\"5\"},{\"name\":\"life_answer11\",\"value\":\"5\"},{\"name\":\"life_answer12\",\"value\":\"4\"},{\"name\":\"life_answer13\",\"value\":\"5\"},{\"name\":\"life_answer14\",\"value\":\"3\"},{\"name\":\"life_answer15\",\"value\":\"5\"},{\"name\":\"life_answer16\",\"value\":\"5\"},{\"name\":\"life_answer17\",\"value\":\"4\"},{\"name\":\"life_answer18\",\"value\":\"4\"},{\"name\":\"life_answer19\",\"value\":\"4\"},{\"name\":\"life_answer20\",\"value\":\"4\"},{\"name\":\"life_answer21\",\"value\":\"3\"},{\"name\":\"life_answer22\",\"value\":\"5\"},{\"name\":\"life_answer23\",\"value\":\"3\"},{\"name\":\"life_answer24\",\"value\":\"4\"},{\"name\":\"life_answer25\",\"value\":\"5\"},{\"name\":\"life_answer26\",\"value\":\"3\"},{\"name\":\"life_answer27\",\"value\":\"5\"},{\"name\":\"life_answer28\",\"value\":\"4\"},{\"name\":\"life_answer_score1\",\"value\":\"4.07\"},{\"name\":\"customRange1\",\"value\":\"65\"},{\"name\":\"customRange2\",\"value\":\"60\"},{\"name\":\"customRange3\",\"value\":\"35\"},{\"name\":\"customRange4\",\"value\":\"75\"},{\"name\":\"customRange5\",\"value\":\"90\"},{\"name\":\"customRange6\",\"value\":\"45\"},{\"name\":\"customRange7\",\"value\":\"85\"},{\"name\":\"n0\",\"value\":\"\"},{\"name\":\"n1\",\"value\":\"\"},{\"name\":\"n2\",\"value\":\"\"},{\"name\":\"n3\",\"value\":\"\"},{\"name\":\"n4\",\"value\":\"\"},{\"name\":\"n5\",\"value\":\"\"},{\"name\":\"life_answer_score2\",\"value\":\"455\"}]\"', '', ''),
(6, '6', 'RE111', 12, 'interlocution', 'test', 'T1334356112', '2022-08-31 20:04:38', '園主任', '2022-10-15 21:41:08', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-06-11\"},{\"name\":\"interlocution_place\",\"value\":\"家訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"心理情緒\"},{\"name\":\"interlocution_ques\",\"value\":\"test心理情緒a\"},{\"name\":\"interlocution_time\",\"value\":\"14:10\"},{\"name\":\"interlocution_content\",\"value\":\"test處遇\"},{\"name\":\"interlocution_next_target\",\"value\":\"test下次目標\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(7, '6', 'RE111', 13, 'interlocution', 'test', 'T1334356112', '2022-08-31 21:54:26', '園主任', '2022-10-15 21:41:16', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-08-31\"},{\"name\":\"interlocution_place\",\"value\":\"面訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"法律\"},{\"name\":\"interlocution_ques\",\"value\":\"vvaa\"},{\"name\":\"interlocution_time\",\"value\":\"00:00\"},{\"name\":\"interlocution_content\",\"value\":\"asasdasd\"},{\"name\":\"interlocution_next_target\",\"value\":\"dsaasdsad\"},{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '../upload/undefined', ''),
(8, '6', 'RE111', 6, 'case', 'test', 'T1334356112', '2022-09-01 21:40:09', '社工員1', '2022-10-25 18:23:00', '園主任', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-08-08\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"phone_home\",\"value\":\"0721633\"},{\"name\":\"phone_mobile\",\"value\":\"07216332\"},{\"name\":\"address\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"residence\",\"value\":\"屏東縣內埔鄉東寧村勝利路5557號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"高中職\"},{\"name\":\"marital\",\"value\":\"不詳\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"其他\"},{\"name\":\"current_job_other\",\"value\":\"待業\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status\",\"value\":\"3\"},{\"name\":\"economic_status_3\",\"value\":\"社會救濟每個月8000元\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"3\"},{\"name\":\"drug_record_3\",\"value\":\"嗎啡3年\"},{\"name\":\"correctional_question_count\",\"value\":\"1\"},{\"name\":\"correctional_question_start\",\"value\":\"2021-02\"},{\"name\":\"correctional_question_end\",\"value\":\"2021-10\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"8\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\\r\\n  aaa\"},{\"name\":\"assessment\",\"value\":\"test需求評估\"},{\"name\":\"treatment_time\",\"value\":\"0\"},{\"name\":\"treatment_time_year\",\"value\":\"109\"},{\"name\":\"treatment_time_month\",\"value\":\"12\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"已接受治療\"},{\"name\":\"medical_name\",\"value\":\"test就醫醫院/醫師\"},{\"name\":\"medical_info\",\"value\":\"test醫院個管\"},{\"name\":\"medical_phone\",\"value\":\"test231215\"},{\"name\":\"health_clinic_name\",\"value\":\"test衛生局所/承辦者\"},{\"name\":\"health_clinic_phone\",\"value\":\"0312134513\"},{\"name\":\"CD4_index_0\",\"value\":\"1231\"},{\"name\":\"CD4_index_1\",\"value\":\"110\"},{\"name\":\"CD4_index_2\",\"value\":\"11\"},{\"name\":\"viral_0\",\"value\":\"2341\"},{\"name\":\"viral_1\",\"value\":\"100\"},{\"name\":\"viral_2\",\"value\":\"1\"},{\"name\":\"medical_other\",\"value\":\"test其他\"},{\"name\":\"medicine\",\"value\":\"3TC速汰滋\"},{\"name\":\"medicine\",\"value\":\"Duovir倍歐減\"},{\"name\":\"medicine\",\"value\":\"Truvada舒發泰\"},{\"name\":\"medicine\",\"value\":\"寧衛邁\"},{\"name\":\"medicine\",\"value\":\"抑滋靈\"},{\"name\":\"symptoms\",\"value\":\"持續疲倦\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"test個案問題陳述\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"test家庭系統\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"test診斷問題主要問題\"},{\"name\":\"diagnose_minor\",\"value\":\"test診斷問題次要問題\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"employment_radio\",\"value\":\"就業輔導中\"},{\"name\":\"social_adaptation_radio\",\"value\":\"佳\"},{\"name\":\"other_assessments\",\"value\":\"test其他評量asds\"},{\"name\":\"end_indicator\",\"value\":\"達到目標，已無需要在服務\"},{\"name\":\"case_closed_radio\",\"value\":\"結案\"},{\"name\":\"case_closed_yes\",\"value\":\"test結案原因/備註test\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"1.xls\"},{\"name\":\"customFile1\",\"value\":\"1.xls\"}]\"', '../upload/1.xls', ''),
(9, '6', 'RE111', 15, 'interlocution', 'test', 'T1334356112', '2022-09-01 21:42:52', '社工員1', '2022-10-15 21:41:21', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-06-08\"},{\"name\":\"interlocution_place\",\"value\":\"電訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"就業輔導\"},{\"name\":\"interlocution_ques\",\"value\":\"test就業\"},{\"name\":\"interlocution_time\",\"value\":\"10:30\"},{\"name\":\"interlocution_content\",\"value\":\"test\"},{\"name\":\"interlocution_next_target\",\"value\":\"asdassA\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(10, '2', 'RE112', 4, 'case', 'TEST0808', 'S167123331', '2022-09-06 18:42:13', '社工員1', '2022-10-24 20:15:19', '社工組長', '\"[{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"fillin_date\",\"value\":\"2022-09-06\"},{\"name\":\"name\",\"value\":\"TEST0808\"},{\"name\":\"birth\",\"value\":\"1993-06-22\"},{\"name\":\"pid\",\"value\":\"S167123331\"},{\"name\":\"sex\",\"value\":\"女\"},{\"name\":\"phone_home\",\"value\":\"\"},{\"name\":\"phone_mobile\",\"value\":\"0972631122\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"SD\"},{\"name\":\"assessment\",\"value\":\"cacscasa\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medical_other\",\"value\":\"\"},{\"name\":\"medicine\",\"value\":\"Odefsey安以斯\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"other_assessments\",\"value\":\"d\"},{\"name\":\"case_closed_yes\",\"value\":\"\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"tesadasad.PNG\"}]\"', '../upload/tesadasad.PNG', ''),
(11, '2', 'RE112', 5, 'employment_satif', 'TEST0808', 'S167123331', '2022-09-06 18:42:46', '社工員1', '2022-10-05 20:36:19', '社工員1', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2022-09-06\"},{\"name\":\"name\",\"value\":\"TEST0808\"},{\"name\":\"sex\",\"value\":\"女生\"},{\"name\":\"birth\",\"value\":\"1993-06-22\"},{\"name\":\"phone\",\"value\":\"0972631122\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"RE112\"},{\"name\":\"fillin_date_1\",\"value\":\"2022-09-06\"},{\"name\":\"answer1\",\"value\":\"3\"},{\"name\":\"answer2\",\"value\":\"4\"},{\"name\":\"answer3\",\"value\":\"4\"},{\"name\":\"answer4\",\"value\":\"3\"},{\"name\":\"answer5\",\"value\":\"3\"},{\"name\":\"answer6\",\"value\":\"2\"},{\"name\":\"answer7\",\"value\":\"1\"},{\"name\":\"answer8\",\"value\":\"2\"},{\"name\":\"answer9\",\"value\":\"3\"},{\"name\":\"answer10\",\"value\":\"4\"},{\"name\":\"answer_score\",\"value\":\"29\"}]\"', '', ''),
(12, '2', 'RE112', 9, 'interlocution', 'TEST0808', 'S167123331', '2022-09-06 18:56:27', '社工員1', '2022-10-15 21:40:49', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-07-21\"},{\"name\":\"interlocution_place\",\"value\":\"面訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"就業輔導\"},{\"name\":\"interlocution_ques\",\"value\":\"dasdsa\"},{\"name\":\"interlocution_time\",\"value\":\"07:00\"},{\"name\":\"interlocution_content\",\"value\":\"teA\"},{\"name\":\"interlocution_next_target\",\"value\":\"asS\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(13, '1', 'RE111', 16, 'interlocution', 'test', 'T1334356112', '2022-09-06 19:06:02', '社工員1', '2022-10-15 21:41:46', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-08-18\"},{\"name\":\"interlocution_place\",\"value\":\"電訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"就醫\"},{\"name\":\"interlocution_ques\",\"value\":\"sad\"},{\"name\":\"interlocution_time\",\"value\":\"10:10\"},{\"name\":\"interlocution_content\",\"value\":\"tea\"},{\"name\":\"interlocution_next_target\",\"value\":\"asd\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(14, '1', 'RE111', 17, 'interlocution', 'test', 'T1334356112', '2022-09-06 19:06:27', '社工員1', '2022-10-15 21:41:50', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-03-17\"},{\"name\":\"interlocution_place\",\"value\":\"面訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"經濟\"},{\"name\":\"interlocution_ques\",\"value\":\"a\"},{\"name\":\"interlocution_time\",\"value\":\"10:10\"},{\"name\":\"interlocution_content\",\"value\":\"a\"},{\"name\":\"interlocution_next_target\",\"value\":\"a\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(15, '4', 'RE113', 18, 'interlocution', '黃QQ', 'B123555515', '2022-09-06 19:11:45', '社工員1', '2022-10-15 21:42:02', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"\"},{\"name\":\"interlocution_place\",\"value\":\"電訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"就業媒合\"},{\"name\":\"interlocution_ques\",\"value\":\"就業媒合\"},{\"name\":\"interlocution_time\",\"value\":\"10:15\"},{\"name\":\"interlocution_content\",\"value\":\"T\"},{\"name\":\"interlocution_next_target\",\"value\":\"SS\"},{\"name\":\"assign_name\",\"value\":\"社工組長\"},{\"name\":\"supervise_name\",\"value\":\"園主任\"}]\"', '', ''),
(16, '4', 'RE113', 19, 'interlocution', '黃QQ', 'B123555515', '2022-09-06 19:12:40', '社工員1', '2022-10-15 21:42:07', 'jia', '\"[{\"name\":\"interlocution_date\",\"value\":\"2022-06-06\"},{\"name\":\"interlocution_place\",\"value\":\"面訪\"},{\"name\":\"interlocution_ques_type\",\"value\":\"家庭關係\"},{\"name\":\"interlocution_ques\",\"value\":\"家庭關係\"},{\"name\":\"interlocution_time\",\"value\":\"08:15\"},{\"name\":\"interlocution_content\",\"value\":\"S\"},{\"name\":\"interlocution_next_target\",\"value\":\"A\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"supervise_name\",\"value\":\"社工組長\"}]\"', '../upload/undefined', ''),
(17, '4', 'RE113', 20, 'employment_satif', '黃QQ', 'B123555515', '2022-09-06 19:13:06', '社工員1', '2022-10-05 20:37:05', '社工員1', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2022-09-06\"},{\"name\":\"name\",\"value\":\"黃QQ\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"birth\",\"value\":\"1993-10-15\"},{\"name\":\"phone\",\"value\":\"08123124444\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_q\",\"value\":\"正常\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"RE113\"},{\"name\":\"fillin_date_1\",\"value\":\"2022-09-06\"},{\"name\":\"answer_score\",\"value\":\"0\"}]\"', '', ''),
(18, '6', 'RE111', 14, 'settlement', 'test', 'T1334356112', '2022-10-05 20:35:39', '社工員1', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-10-05\"},{\"name\":\"assign_name\",\"value\":\"社工員1\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"}]\"', '../upload/undefined', ''),
(19, '2', 'RE112', 10, 'life', 'TEST0808', 'S167123331', '2022-10-05 20:36:08', '社工員1', '2022-10-24 20:19:49', '社工組長', '\"[{\"name\":\"fillin_date\",\"value\":\"2022-10-05\"},{\"name\":\"life_answer_score1\",\"value\":\"\"},{\"name\":\"customRange1\",\"value\":\"50\"},{\"name\":\"customRange2\",\"value\":\"50\"},{\"name\":\"customRange3\",\"value\":\"50\"},{\"name\":\"customRange4\",\"value\":\"50\"},{\"name\":\"customRange5\",\"value\":\"50\"},{\"name\":\"customRange6\",\"value\":\"50\"},{\"name\":\"customRange7\",\"value\":\"50\"},{\"name\":\"n0\",\"value\":\"\"},{\"name\":\"n1\",\"value\":\"\"},{\"name\":\"n2\",\"value\":\"\"},{\"name\":\"n3\",\"value\":\"\"},{\"name\":\"n4\",\"value\":\"\"},{\"name\":\"n5\",\"value\":\"\"},{\"name\":\"life_answer_score2\",\"value\":\"\"}]\"', '', ''),
(20, '2', 'RE112', 11, 'BSRS5', 'TEST0808', 'S167123331', '2022-10-05 20:36:28', '社工員1', '0000-00-00 00:00:00', '', '\"[{\"name\":\"name\",\"value\":\"TEST0808\"},{\"name\":\"sex\",\"value\":\"女生\"},{\"name\":\"birth\",\"value\":\"1993-06-22\"},{\"name\":\"age\",\"value\":\"29\"},{\"name\":\"phone\",\"value\":\"0972631122\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"answer_score\",\"value\":\"0\"},{\"name\":\"statement\",\"value\":\"\"}]\"', '', ''),
(21, '5', 'RE114', 21, 'case', 'test611', 'C248491122', '2022-10-06 17:49:24', '園主任', '2022-10-15 21:42:18', 'jia', '\"[{\"name\":\"assign_name\",\"value\":\"園主任\"},{\"name\":\"fillin_date\",\"value\":\"2022-10-06\"},{\"name\":\"name\",\"value\":\"test611\"},{\"name\":\"birth\",\"value\":\"1995-12-12\"},{\"name\":\"pid\",\"value\":\"C248491122\"},{\"name\":\"phone_home\",\"value\":\"061234441\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"高雄市鳳山區光復路二段25123號\"},{\"name\":\"residence\",\"value\":\"高雄市鳳山區光復路二段25123號\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"初中\"},{\"name\":\"marital\",\"value\":\"未婚\"},{\"name\":\"cohabitant\",\"value\":\"獨居\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job\",\"value\":\"其他\"},{\"name\":\"current_job_other\",\"value\":\"其他行業\"},{\"name\":\"economic_status\",\"value\":\"0\"},{\"name\":\"economic_status_0\",\"value\":\"25000\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"無\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"testaaa需求評估\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medical_other\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_year\",\"value\":\"\"},{\"name\":\"pretest_depression_month\",\"value\":\"\"},{\"name\":\"pretest_depression_day\",\"value\":\"\"},{\"name\":\"pretest_depression_score\",\"value\":\"\"},{\"name\":\"midtest_depression_year\",\"value\":\"\"},{\"name\":\"midtest_depression_month\",\"value\":\"\"},{\"name\":\"midtest_depression_day\",\"value\":\"\"},{\"name\":\"midtest_depression_score\",\"value\":\"\"},{\"name\":\"posttest_depression_year\",\"value\":\"\"},{\"name\":\"posttest_depression_month\",\"value\":\"\"},{\"name\":\"posttest_depression_day\",\"value\":\"\"},{\"name\":\"posttest_depression_score\",\"value\":\"\"},{\"name\":\"BSRS5_score\",\"value\":\"\"},{\"name\":\"pretest_life_year\",\"value\":\"\"},{\"name\":\"pretest_life_month\",\"value\":\"\"},{\"name\":\"pretest_life_day\",\"value\":\"\"},{\"name\":\"pretest_life_score\",\"value\":\"\"},{\"name\":\"posttest_life_year\",\"value\":\"\"},{\"name\":\"posttest_life_month\",\"value\":\"\"},{\"name\":\"posttest_life_day\",\"value\":\"\"},{\"name\":\"posttest_life_score\",\"value\":\"\"},{\"name\":\"pretest_familyship_year\",\"value\":\"\"},{\"name\":\"pretest_familyship_month\",\"value\":\"\"},{\"name\":\"pretest_familyship_day\",\"value\":\"\"},{\"name\":\"pretest_familyship_score\",\"value\":\"\"},{\"name\":\"posttest_familyship_year\",\"value\":\"\"},{\"name\":\"posttest_familyship_month\",\"value\":\"\"},{\"name\":\"posttest_familyship_day\",\"value\":\"\"},{\"name\":\"posttest_familyship_score\",\"value\":\"\"},{\"name\":\"other_assessments\",\"value\":\"\"},{\"name\":\"case_closed_yes\",\"value\":\"\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"undefined\"}]\"', '../upload/undefined', ''),
(22, '6', 'RE111', 25, 'BSRS5', 'test', 'T1334356112', '2022-10-15 21:10:40', 'jia', '0000-00-00 00:00:00', '', '\"[{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"age\",\"value\":\"31\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"3\"},{\"name\":\"answer2\",\"value\":\"3\"},{\"name\":\"answer3\",\"value\":\"3\"},{\"name\":\"answer4\",\"value\":\"3\"},{\"name\":\"answer5\",\"value\":\"4\"},{\"name\":\"answer6\",\"value\":\"4\"},{\"name\":\"answer_score\",\"value\":\"16\"},{\"name\":\"treatment_status\",\"value\":\"超過6分\"},{\"name\":\"treatment_status\",\"value\":\"第6題單獨得分\"},{\"name\":\"statement\",\"value\":\"tttt處置情形第6題單獨得分\"}]\"', '', ''),
(23, '2', 'RE112', 28, 'resource', 'TEST0808', 'S167123331', '2022-10-25 15:49:11', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"rtable1&resource_rec_1[]\",\"value\":[\"ttt\",\"aaa\",\"d\",\"aasddd\",\"2022-10-05\",\"園主任\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]\"', '', ''),
(24, '2', 'RE112', 34, 'BSRS5', 'TEST0808', 'S167123331', '2022-10-25 16:23:34', '園主任', '0000-00-00 00:00:00', '', '\"[{\"name\":\"name\",\"value\":\"TEST0808\"},{\"name\":\"sex\",\"value\":\"女\"},{\"name\":\"birth\",\"value\":\"1993-06-22\"},{\"name\":\"age\",\"value\":\"29\"},{\"name\":\"phone\",\"value\":\"0972631122\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"0\"},{\"name\":\"answer2\",\"value\":\"1\"},{\"name\":\"answer3\",\"value\":\"1\"},{\"name\":\"answer4\",\"value\":\"1\"},{\"name\":\"answer5\",\"value\":\"1\"},{\"name\":\"answer6\",\"value\":\"2\"},{\"name\":\"answer_score\",\"value\":\"4\"},{\"name\":\"treatment_status\",\"value\":\"第6題單獨得分\"},{\"name\":\"statement\",\"value\":\"test處置情形如下\"}]\"', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `form_all_info`
--

CREATE TABLE `form_all_info` (
  `Id` int(200) NOT NULL,
  `Case_seqid` varchar(2000) NOT NULL,
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

INSERT INTO `form_all_info` (`Id`, `Case_seqid`, `Case_id`, `Case_name`, `Case_pid`, `Is_upload`, `Url`, `Upload_path`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Upload_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '1', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=A&id=1&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=phone&birth=1872-02-03', '', 0, 'case', '2022-08-08', 'TEST0808', '\"[{\"name\":\"case\",\"value\":\"結案\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-15 21:41:33', 'jia'),
(2, '1', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=A&id=1&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=phone&birth=1872-02-03', '', 0, 'BSRS5', '0000-00-00', '', '\"[{\"name\":\"BSRS5\",\"value\":\"8\"},{\"name\":\"BSRS5\",\"value\":\"test處置情形\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-05 20:34:12', '社工員1'),
(3, '1', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=1&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=phone&birth=1991-02-03', '', 1, 'case', '2022-08-08', 'test', '\"[{\"name\":\"case\",\"value\":\"結案\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-15 21:41:40', 'jia'),
(4, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'case', '2022-09-06', 'ttt', '\"[{\"name\":\"case\",\"value\":\"\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-24 20:15:19', '社工組長'),
(5, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'employment_satif', '2022-09-06', 'ttt', '\"[{\"name\":\"employment_satif\",\"value\":\"29\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-05 20:36:19', '社工員1'),
(6, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'case', '2022-08-08', 'ttt2', '\"[{\"name\":\"case\",\"value\":\"結案\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-25 18:23:00', '園主任'),
(7, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'employment_satif', '2022-08-08', 'tt', '\"[{\"name\":\"employment_satif\",\"value\":\"35\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-05 20:35:27', '社工員1'),
(8, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'life', '2022-08-08', 'ttt', '\"[{\"name\":\"life\",\"value\":\"<div>第一部分得分：4.07分，結果：滿意。<br/>第二部分得分：455分。</div>\"},{\"name\":\"life\",\"value\":\"前測\"}]\"', '', '2022-08-08 00:00:00', '園主任', '2022-10-05 20:35:16', '社工員1'),
(9, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'interlocution', '0000-00-00', '11', '\"[{\"name\":\"interlocution\",\"value\":\"2022-07-21\"},{\"name\":\"interlocution\",\"value\":\"dasdsa\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-08-13 00:00:00', '園主任', '2022-10-15 21:40:49', 'jia'),
(10, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'life', '2022-10-05', '777', '\"[{\"name\":\"life\",\"value\":\"<div>第一部分得分：-分，結果：。<br/>第二部分得分：-分。</div>\"},{\"name\":\"life\",\"value\":\"\"}]\"', '', '2022-08-13 00:00:00', '園主任', '2022-10-24 20:19:49', '社工組長'),
(12, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'interlocution', '0000-00-00', '111', '\"[{\"name\":\"interlocution\",\"value\":\"2022-06-11\"},{\"name\":\"interlocution\",\"value\":\"test心理情緒a\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-08-26 00:00:00', '園主任', '2022-10-15 21:41:08', 'jia'),
(13, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 1, 'interlocution', '0000-00-00', 'dsasd', '\"[{\"name\":\"interlocution\",\"value\":\"2022-08-31\"},{\"name\":\"interlocution\",\"value\":\"vvaa\"},{\"name\":\"interlocution\",\"value\":\"園主任\"}]\"', '', '2022-08-31 00:00:00', '園主任', '2022-10-15 21:41:16', 'jia'),
(14, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'settlement', '2022-10-05', 'TEST', '\"[{\"name\":\"settlement\",\"value\":\"\"}]\"', '', '2022-09-01 00:00:00', '社工員1', '2022-10-05 20:35:39', '社工員1'),
(15, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 2, 'interlocution', '0000-00-00', 'test', '\"[{\"name\":\"interlocution\",\"value\":\"2022-06-08\"},{\"name\":\"interlocution\",\"value\":\"test就業\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-09-01 00:00:00', '社工員1', '2022-10-15 21:41:21', 'jia'),
(16, '1', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2021-08-08&property=安置家園&type=藥癮家庭&grade=B&id=1&open_id=RE111&referral=其他&case_Create_date=2021-08-08&unopen_type=phone&birth=1991-02-03', '', 0, 'interlocution', '0000-00-00', 'd', '\"[{\"name\":\"interlocution\",\"value\":\"2022-08-18\"},{\"name\":\"interlocution\",\"value\":\"sad\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-09-06 00:00:00', '社工員1', '2022-10-15 21:41:46', 'jia'),
(17, '1', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2021-08-08&property=安置家園&type=藥癮家庭&grade=B&id=1&open_id=RE111&referral=其他&case_Create_date=2021-08-08&unopen_type=phone&birth=1991-02-03', '', 0, 'interlocution', '0000-00-00', 'd', '\"[{\"name\":\"interlocution\",\"value\":\"2022-03-17\"},{\"name\":\"interlocution\",\"value\":\"a\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-09-06 00:00:00', '社工員1', '2022-10-15 21:41:50', 'jia'),
(18, '4', 'RE113', '黃QQ', 'B123555515', 0, 'case_detail.php?name=黃QQ&gender=男&pid=B123555515&date=2022-08-03&property=社區&type=一般藥癮者&grade=A&id=4&open_id=RE113&referral=社區&case_Create_date=2022-08-03&unopen_type=case&birth=1993-10-15', '', 0, 'interlocution', '0000-00-00', 'A', '\"[{\"name\":\"interlocution\",\"value\":\"\"},{\"name\":\"interlocution\",\"value\":\"就業媒合\"},{\"name\":\"interlocution\",\"value\":\"社工組長\"}]\"', '', '2022-09-06 00:00:00', '社工員1', '2022-10-15 21:42:02', 'jia'),
(19, '4', 'RE113', '黃QQ', 'B123555515', 0, 'case_detail.php?name=黃QQ&gender=男&pid=B123555515&date=2022-08-03&property=社區&type=一般藥癮者&grade=A&id=4&open_id=RE113&referral=社區&case_Create_date=2022-08-03&unopen_type=case&birth=1993-10-15', '', 1, 'interlocution', '0000-00-00', 'B', '\"[{\"name\":\"interlocution\",\"value\":\"2022-06-06\"},{\"name\":\"interlocution\",\"value\":\"家庭關係\"},{\"name\":\"interlocution\",\"value\":\"社工員1\"}]\"', '', '2022-09-06 00:00:00', '社工員1', '2022-10-15 21:42:07', 'jia'),
(20, '4', 'RE113', '黃QQ', 'B123555515', 0, 'case_detail.php?name=黃QQ&gender=男&pid=B123555515&date=2022-08-03&property=社區&type=一般藥癮者&grade=A&id=4&open_id=RE113&referral=社區&case_Create_date=2022-08-03&unopen_type=case&birth=1993-10-15', '', 0, 'employment_satif', '2022-09-06', 'TT', '\"[{\"name\":\"employment_satif\",\"value\":\"0\"}]\"', '', '2022-09-06 00:00:00', '社工員1', '2022-10-05 20:37:05', '社工員1'),
(21, '5', 'RE114', 'test611', 'C248491122', 0, 'case_detail.php?name=test611&gender=跨性別&pid=C248491122&date=2021-06-11&property=安置家園&type=一般藥癮者&grade=B&id=5&open_id=RE114&referral=自行求助&case_Create_date=2021-06-11&unopen_type=case&birth=1995-12-12', '', 0, 'case', '2022-10-06', '720', '\"[{\"name\":\"case\",\"value\":\"\"}]\"', '', '2022-10-06 00:00:00', '園主任', '2022-10-15 21:42:18', 'jia'),
(22, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'health', '2021-11-18', 'aa', '', '', '2022-10-13 00:00:00', '社工組長', '0000-00-00 00:00:00', ''),
(23, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/憂鬱量表.docx', 0, 'sullen', '0000-00-00', '', '', '\"[{\"name\":\"upload_date_sullen0\",\"value\":\"2022-10-15\"},{\"name\":\"scoresullen0\",\"value\":\"89\"},{\"name\":\"filesullen0\",\"value\":\"憂鬱量表.docx\"},{\"name\":\"test_typesullen0\",\"value\":\"中測\"},{\"name\":\"remarksullen0\",\"value\":\"tttt憂鬱量表89\"}]\"', '2022-10-15 21:08:45', 'jia', '0000-00-00 00:00:00', ''),
(24, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/bsrs5.docx', 0, 'BSRS5', '0000-00-00', '', '', '\"[{\"name\":\"create_date_BSRS50\",\"value\":\"2022-10-15\"},{\"name\":\"add_new_typeBSRS50\",\"value\":\"上傳檔案\"},{\"name\":\"scoreBSRS50\",\"value\":\"12\"},{\"name\":\"disposeBSRS50\",\"value\":\"teee86處置情形\"},{\"name\":\"fileBSRS50\",\"value\":\"bsrs5.docx\"},{\"name\":\"remarkBSRS50\",\"value\":\"BSRS-5量表teee86\"}]\"', '2022-10-15 21:09:19', 'jia', '0000-00-00 00:00:00', ''),
(25, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 1, 'BSRS5', '0000-00-00', 'ttt1015', '\"[{\"name\":\"BSRS5\",\"value\":\"16\"},{\"name\":\"BSRS5\",\"value\":\"tttt處置情形第6題單獨得分\"}]\"', '', '2022-10-15 00:00:00', 'jia', '2022-10-15 21:10:40', 'jia'),
(26, '1', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/test18.txt', 0, 'sullen', '0000-00-00', '', '', '\"[{\"name\":\"upload_date_sullen0\",\"value\":\"2022-10-18\"},{\"name\":\"scoresullen0\",\"value\":\"88\"},{\"name\":\"filesullen0\",\"value\":\"test18.txt\"},{\"name\":\"test_typesullen0\",\"value\":\"中測\"},{\"name\":\"remarksullen0\",\"value\":\"test18\"}]\"', '2022-10-18 16:37:58', '社工員1', '0000-00-00 00:00:00', ''),
(28, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'resource', '0000-00-00', 'ttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(29, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'health', '2022-10-05', 'ttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(30, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'satif', '2022-10-05', 'ttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(31, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'familyship', '2022-10-13', 'tttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(32, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 0, 'settlement', '2022-10-03', 'asda', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(33, '2', 'RE112', 'TEST0808', 'S167123331', 1, '', '../upload/case_all/tttbsrs5.txt', 1, 'BSRS5', '0000-00-00', '', '', '\"[{\"name\":\"create_date_BSRS51\",\"value\":\"2022-10-25\"},{\"name\":\"add_new_typeBSRS51\",\"value\":\"上傳檔案\"},{\"name\":\"scoreBSRS51\",\"value\":\"89\"},{\"name\":\"disposeBSRS51\",\"value\":\"test處置情形\"},{\"name\":\"fileBSRS51\",\"value\":\"tttbsrs5.txt\"},{\"name\":\"remarkBSRS51\",\"value\":\"test89\"}]\"', '2022-10-25 16:22:21', '園主任', '0000-00-00 00:00:00', ''),
(34, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 2, 'BSRS5', '0000-00-00', 'ttta', '\"[{\"name\":\"BSRS5\",\"value\":\"4\"},{\"name\":\"BSRS5\",\"value\":\"test處置情形如下\"}]\"', '', '2022-10-25 00:00:00', '園主任', '2022-10-25 16:23:35', '園主任'),
(35, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 1, 'interlocution', '0000-00-00', 'ttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(36, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 2, 'interlocution', '0000-00-00', 'asd', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(37, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 1, 'employment_satif', '2022-09-29', 'aasd', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(38, '2', 'RE112', 'TEST0808', 'S167123331', 0, 'case_detail.php?name=TEST0808&gender=女&pid=S167123331&date=2022-08-08&property=安置家園&type=一般藥癮者&grade=B&id=2&open_id=RE112&referral=醫院&case_Create_date=2022-08-08&unopen_type=case&birth=1993-06-22', '', 1, 'health', '2022-10-13', 'ttt', '', '', '2022-10-25 00:00:00', '園主任', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `form_case_report`
--

CREATE TABLE `form_case_report` (
  `Id` int(244) NOT NULL,
  `Case_seqid` varchar(2000) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
  `Form_id` int(244) NOT NULL,
  `Form_type` varchar(30) NOT NULL,
  `Open_case_date` date NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Birth` date NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Address` varchar(1000) NOT NULL,
  `Education` varchar(100) NOT NULL,
  `Drug_record` varchar(2000) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Demand` varchar(2000) NOT NULL,
  `Case_assign` varchar(20) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `form_case_report`
--

INSERT INTO `form_case_report` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Open_case_date`, `Name`, `Birth`, `Gender`, `Address`, `Education`, `Drug_record`, `Referral`, `Demand`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '6', 'RE111', 6, 'case', '2022-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:50:22', '園主任', '2022-10-25 18:23:00', '園主任'),
(2, '6', 'RE111', 12, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '心理情緒', '社工員1', '2022-10-06 14:50:46', '園主任', '2022-10-15 21:41:08', 'jia'),
(3, '6', 'RE111', 13, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '法律', '社工員1', '2022-10-06 14:52:03', '園主任', '2022-10-15 21:41:16', 'jia'),
(4, '6', 'RE111', 15, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '就業輔導', '社工員1', '2022-10-06 14:52:35', '園主任', '2022-10-15 21:41:21', 'jia'),
(5, '1', 'RE111', 1, 'case', '2021-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:52:58', '園主任', '2022-10-15 21:41:33', 'jia'),
(6, '1', 'RE111', 3, 'case', '2021-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:53:07', '園主任', '2022-10-15 21:41:40', 'jia'),
(7, '1', 'RE111', 16, 'interlocution', '2021-08-08', 'test', '0000-00-00', '', '', '', '', '', '就醫', '社工員1', '2022-10-06 14:53:31', '園主任', '2022-10-15 21:41:46', 'jia'),
(8, '1', 'RE111', 17, 'interlocution', '2021-08-08', 'test', '0000-00-00', '', '', '', '', '', '經濟', '社工員1', '2022-10-06 14:53:44', '園主任', '2022-10-15 21:41:50', 'jia'),
(9, '2', 'RE112', 4, 'case', '2022-08-08', 'TEST0808', '1993-06-22', '女', '', '', '', '醫院', '', '社工員2', '2022-10-06 14:58:31', '園主任', '2022-10-24 20:15:19', '社工組長'),
(10, '2', 'RE112', 9, 'interlocution', '2022-08-08', 'TEST0808', '0000-00-00', '', '', '', '', '', '就業輔導', '社工員2', '2022-10-06 14:58:38', '園主任', '2022-10-15 21:40:49', 'jia'),
(11, '4', 'RE113', 18, 'interlocution', '2022-08-03', '黃QQ', '0000-00-00', '', '', '', '', '', '就業媒合', '社工組長', '2022-10-06 14:58:50', '園主任', '2022-10-15 21:42:02', 'jia'),
(12, '4', 'RE113', 19, 'interlocution', '2022-08-03', '黃QQ', '0000-00-00', '', '', '', '', '', '家庭關係', '社工組長', '2022-10-06 14:58:57', '園主任', '2022-10-15 21:42:07', 'jia'),
(13, '5', 'RE114', 21, 'case', '2021-06-11', 'test611', '1995-12-12', '', '高雄市', '初中', '', '自行求助', '', '社工員2', '2022-10-06 17:49:24', '園主任', '2022-10-15 21:42:18', 'jia'),
(14, '6', 'RE111', 25, 'BSRS5', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2022-10-15 21:10:40', 'jia', '2022-10-15 21:10:40', ''),
(15, '2', 'RE112', 10, 'life', '2022-08-08', 'TEST0808', '0000-00-00', '', '', '', '', '', '', '社工員2', '2022-10-24 20:16:46', '社工組長', '2022-10-24 20:19:49', '社工組長'),
(16, '2', 'RE112', 28, 'resource', '2022-08-08', 'TEST0808', '0000-00-00', '', '', '', '', '', '', '社工員2', '2022-10-25 15:49:11', '園主任', '2022-10-25 15:49:11', ''),
(17, '2', 'RE112', 34, 'BSRS5', '2022-08-08', 'TEST0808', '0000-00-00', '', '', '', '', '', '', '社工員2', '2022-10-25 16:23:35', '園主任', '2022-10-25 16:23:35', '');

-- --------------------------------------------------------

--
-- 資料表結構 `form_interlocution_queskeywords`
--

CREATE TABLE `form_interlocution_queskeywords` (
  `Id` int(244) NOT NULL,
  `Ques_type` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `form_interlocution_queskeywords`
--

INSERT INTO `form_interlocution_queskeywords` (`Id`, `Ques_type`) VALUES
(1, '就醫'),
(2, '就業輔導'),
(3, '就業媒合'),
(4, '就業職訓'),
(5, '經濟'),
(6, '法律'),
(7, '家庭關係'),
(8, '家庭培力'),
(9, '情感關心'),
(10, '心理情緒'),
(11, '家庭關係修復'),
(12, '藥癮知識不足'),
(13, '預防藥癮復發問題'),
(14, '藥癮問題'),
(15, '行為問題'),
(16, '入住規範入住規範');

-- --------------------------------------------------------

--
-- 資料表結構 `login_record`
--

CREATE TABLE `login_record` (
  `Id` int(240) NOT NULL,
  `Login_timestamp` datetime NOT NULL,
  `Login_account` varchar(30) NOT NULL,
  `Login_authority` varchar(30) NOT NULL,
  `Login_name` varchar(30) NOT NULL,
  `Login_coordinate` varchar(100) NOT NULL,
  `Is_day_first` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `login_record`
--

INSERT INTO `login_record` (`Id`, `Login_timestamp`, `Login_account`, `Login_authority`, `Login_name`, `Login_coordinate`, `Is_day_first`) VALUES
(1, '2022-08-11 21:15:44', 'test3', '2', '社工組長', '22.9917,120.2148', 1),
(2, '2022-08-11 21:15:55', 'test3', '2', '社工組長', '22.9917,120.2148', 0),
(9, '2022-08-11 21:20:10', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(10, '2022-08-11 21:20:17', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(11, '2022-08-11 21:20:35', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(12, '2022-08-11 21:20:47', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(13, '2022-08-11 21:20:56', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(14, '2022-08-11 21:22:33', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(15, '2022-08-11 21:24:41', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(24, '2022-08-11 21:30:45', 'text2', '1', '社工員2', '22.9917,120.2148', 1),
(25, '2022-08-11 21:30:53', 'text2', '1', '社工員2', '22.9917,120.2148', 0),
(26, '2022-08-11 21:31:11', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(27, '2022-08-13 11:50:24', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(28, '2022-08-13 12:15:09', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(29, '2022-08-18 11:05:13', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(30, '2022-08-18 11:14:30', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(31, '2022-08-18 11:25:20', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(32, '2022-08-18 11:36:11', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(33, '2022-08-18 11:38:47', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(34, '2022-08-18 11:42:08', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(35, '2022-08-18 11:54:50', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(36, '2022-08-18 12:03:07', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(37, '2022-08-18 12:45:39', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(38, '2022-08-18 13:09:40', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(39, '2022-08-18 13:28:23', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(40, '2022-08-18 13:58:28', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(41, '2022-08-18 14:06:22', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(42, '2022-08-18 14:40:46', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(43, '2022-08-18 16:00:49', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(44, '2022-08-18 16:00:49', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(45, '2022-08-18 16:20:34', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(46, '2022-08-18 16:36:02', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(47, '2022-08-18 16:39:29', 'test6', '4', '執行長', '22.9917,120.2148', 1),
(48, '2022-08-18 16:40:08', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(49, '2022-08-18 16:41:36', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(50, '2022-08-18 16:45:49', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(51, '2022-08-18 16:46:26', 'test3', '2', '社工組長', '22.9917,120.2148', 1),
(52, '2022-08-18 16:47:43', 'text2', '1', '社工員2', '22.9917,120.2148', 1),
(53, '2022-08-18 17:00:15', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(54, '2022-08-18 18:02:17', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(55, '2022-08-18 18:38:44', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(56, '2022-08-18 19:22:00', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(57, '2022-08-18 19:48:32', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(58, '2022-08-18 20:01:15', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(59, '2022-08-18 20:20:54', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(60, '2022-08-18 20:39:37', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(61, '2022-08-18 22:37:22', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(62, '2022-08-19 20:43:49', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(63, '2022-08-19 22:04:16', 'test5', '3', '園主任', '22.9917,120.2148', 0),
(64, '2022-08-23 18:33:48', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(65, '2022-08-25 18:39:19', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(66, '2022-08-27 10:36:23', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(67, '2022-08-31 17:54:17', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(68, '2022-09-01 19:26:23', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(69, '2022-09-01 19:26:36', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(70, '2022-09-06 17:56:02', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(71, '2022-09-06 20:30:16', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(72, '2022-09-12 15:05:31', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(73, '2022-09-13 11:51:05', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(74, '2022-09-19 18:48:30', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(75, '2022-09-20 14:15:48', 'text1', '1', '社工員1', '22.9917,120.2148', 1),
(76, '2022-09-20 17:46:24', 'text1', '1', '社工員1', '22.9917,120.2148', 0),
(77, '2022-09-20 17:46:37', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(78, '2022-09-22 15:32:17', 'test5', '3', '園主任', '22.9917,120.2148', 1),
(79, '2022-09-27 16:49:32', 'test5', '園主任', '258', '22.6483444,120.3262535', 1),
(80, '2022-09-27 21:49:08', 'text1', '1', '社工員1', '22.6483444,120.3262535', 1),
(81, '2022-09-27 22:33:32', 'text1', '1', '社工員1', '22.6483444,120.3262535', 0),
(82, '2022-09-28 20:57:57', 'text1', '1', '社工員1', '22.6483444,120.3262535', 1),
(83, '2022-09-29 14:36:24', 'test5', '3', '園主任', '22.7189,120.4412', 1),
(84, '2022-10-04 19:51:20', 'text1', '1', 'jia', '22.6483444,120.3262535', 1),
(85, '2022-10-05 16:20:23', 'text1', '1', 'jia', '22.6483444,120.3262535', 1),
(86, '2022-10-05 17:51:35', 'text1', '1', 'jia', '22.6483444,120.3262535', 0),
(87, '2022-10-05 17:52:02', 'text1', '1', '社工員1', '22.6483444,120.3262535', 0),
(88, '2022-10-06 14:28:15', 'test5', '3', '園主任', '22.7189,120.4412', 1),
(89, '2022-10-06 18:39:11', 'test5', '3', '園主任', '22.7189,120.4412', 0),
(90, '2022-10-07 14:07:24', 'test5', '3', '園主任', '22.7189,120.4412', 1),
(91, '2022-10-07 16:35:29', 'text1', '1', '社工員1', '22.6478715,120.6119512', 1),
(92, '2022-10-07 16:38:54', 'test5', '3', '園主任', '22.7189,120.4412', 0),
(93, '2022-10-07 16:52:45', 'text1', '1', '社工員1', '22.6820096,120.4944896', 0),
(94, '2022-10-11 10:05:12', 'test', '1', '花花', '22.599006561627586,120.55943234244137', 1),
(95, '2022-10-11 11:16:01', 'text1', '1', '社工員1', '22.6478871,120.6119462', 1),
(96, '2022-10-11 11:16:59', 'test', '1', '花花', '22.55138324575736,120.5383198243757', 0),
(97, '2022-10-11 15:12:39', 'text1', '1', '社工員1', '22.6622,120.4916', 0),
(98, '2022-10-11 15:21:07', 'test', '1', '花花', '22.599007,120.559433', 0),
(99, '2022-10-11 15:27:48', 'test5', '3', '園主任', '22.593716164870152,120.48852034830283', 1),
(100, '2022-10-11 17:52:32', 'test5', '3', '園主任', '23.4803991,120.4242406', 0),
(101, '2022-10-12 14:00:50', 'text1', '1', '社工員1', '22.6622,120.4916', 1),
(102, '2022-10-12 14:02:06', 'test', '1', '花花', '22.599006770764753,120.55943265614712', 1),
(103, '2022-10-12 17:33:56', 'text1', '1', '社工員1', '22.6622,120.4916', 0),
(104, '2022-10-13 14:30:24', 'test5', '3', '園主任', '22.7189,120.4412', 1),
(105, '2022-10-14 11:04:23', 'text1', '1', '社工員1', '22.6478719,120.6119634', 1),
(106, '2022-10-15 22:03:32', 'test5', '3', '園主任', '23.4803991,120.4242406', 1),
(107, '2022-10-18 10:52:09', 'text1', '1', '社工員1', '22.6478721,120.6119611', 1),
(108, '2022-10-24 10:02:05', 'test3', '2', '社工組長', '22.7189,120.4412', 1),
(109, '2022-10-24 17:52:16', 'test3', '2', '社工組長', '22.7189,120.4412', 0),
(110, '2022-10-24 21:31:20', 'text1', '1', 'jia', '22.6483444,120.3262535', 1),
(111, '2022-10-25 15:34:06', 'test5', '3', '園主任', '22.6483444,120.3262535', 1),
(112, '2022-10-25 19:36:33', 'text1', '1', 'jia', '22.6483444,120.3262535', 1),
(113, '2022-10-25 19:38:49', 'text1', '1', '社工員1', '22.6483444,120.3262535', 0),
(114, '2022-10-25 21:32:34', 'test3', '2', '社工組長', '22.6483444,120.3262535', 1);

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
(1, '109', '[{\"name\":\"title_name\",\"value\":\"test會員大會記錄標題123\"},{\"name\":\"meeting_date\",\"value\":\"109年08月13日\"},{\"name\":\"meeting_time\",\"value\":\"09:00\"},{\"name\":\"place\",\"value\":\"test會議地點\"},{\"name\":\"ceo_name\",\"value\":\"主席aaa\"},{\"name\":\"attendees\",\"value\":\"aa出席人員\"},{\"name\":\"absent\",\"value\":\"bb請假人員\"},{\"name\":\"record\",\"value\":\"dasda出\"},{\"name\":\"discuss\",\"value\":\"aaaaaa提案討論\"},{\"name\":\"motion\",\"value\":\"臨時動議bbbb：;;ddd\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-07 20:57:28', '社工員1', '2022-10-13 15:44:37', '社工組長'),
(2, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"test會員大會記錄標題\\tupload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年04月06日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test備註\"},{\"name\":\"upload_rec_supervise\",\"value\":\"園主任\"},{\"name\":\"customFile1\",\"value\":\"test2報表_1100314.docx\"}]\"', '../members_assemble/upload/test2報表_1100314.docx', '園主任', '', '', '0000-00-00 00:00:00', '2022-10-07 21:01:24', '社工員1', '0000-00-00 00:00:00', ''),
(3, '109', '[{\"name\":\"title_name\",\"value\":\"會員大會記錄標題2\"},{\"name\":\"meeting_date\",\"value\":\"109年11月11日\"},{\"name\":\"meeting_time\",\"value\":\"13:10\"},{\"name\":\"place\",\"value\":\"會議地點BBB\"},{\"name\":\"ceo_name\",\"value\":\"主席NN\"},{\"name\":\"attendees\",\"value\":\"AA出席人員\"},{\"name\":\"absent\",\"value\":\"請假人員V\"},{\"name\":\"record\",\"value\":\"紀錄者T\"},{\"name\":\"discuss\",\"value\":\"AA提案討論\"},{\"name\":\"motion\",\"value\":\"臨時動議BSSDD\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-07 21:05:07', '社工員1', '2022-10-13 18:56:36', '社工組長');

-- --------------------------------------------------------

--
-- 資料表結構 `overtime`
--

CREATE TABLE `overtime` (
  `Year` int(11) NOT NULL,
  `Name` varchar(300) NOT NULL,
  `Overtime_date` date NOT NULL,
  `Free_date` date NOT NULL,
  `Overtime_time` int(100) NOT NULL,
  `Free_time` int(100) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(100) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(100) NOT NULL,
  `Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `overtime`
--

INSERT INTO `overtime` (`Year`, `Name`, `Overtime_date`, `Free_date`, `Overtime_time`, `Free_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Id`) VALUES
(111, 'Timo', '2022-09-21', '2022-09-12', 22, 11, '2022-09-07', 'Timo', '2022-09-20', '社工員1', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `overtime_hours_record`
--

CREATE TABLE `overtime_hours_record` (
  `Id` int(240) NOT NULL,
  `Overtime_id` int(240) NOT NULL,
  `Year` int(10) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Add_hours` int(20) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Sign_date` varchar(100) NOT NULL,
  `Is_firstadd` int(11) NOT NULL,
  `Create_date` int(11) NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` int(11) NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(3, '16', 'placement_case', '2022-06-08', '愛滋感染者', 'A', '自立宿舍', '2022-06-10', 'twss', '0214314454', '1812-12-16', 'b125335121', '藥癮家庭', '未結案', '0000-00-00', '2022-06-23 17:02:05', '園主任', '0000-00-00 00:00:00', ''),
(4, '9999', 'placement_case', '2022-10-11', '一般藥癮者', 'A', '自立宿舍', '2022-10-11', '陳OO玲', '0900-741-852', '0000-00-00', 'ABC3456789', '矯正機關', '未結案', '0000-00-00', '2022-10-11 14:29:57', '花花', '0000-00-00 00:00:00', '');

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
(2, '1', 'RE1612', '陳昭宏', 'n11244556', 0, 'placement_case_detail.php?name=陳昭宏&pid=n11244556&date=2022-04-25&property=安置家園&type=一般藥癮者&id=1&open_id=RE1612&referral=自行求助&case_Create_date=2022-04-26&birth=1962-06-06&unopen_type=placement_case', '', 1, 'settlement', '2022-04-25', 'tt425', '', '', '2022-04-26 00:00:00', '園主任', '0000-00-00 00:00:00', ''),
(3, '4', '9999', '陳OO玲', 'ABC3456789', 0, 'placement_case_detail.php?name=陳OO玲&pid=ABC3456789&date=2022-10-11&property=自立宿舍&type=一般藥癮者&id=4&open_id=9999&referral=矯正機關&case_Create_date=2022-10-11&birth=0000-00-00&unopen_type=placement_case', '', 0, 'settlement', '2022-10-11', '測試', '', '', '2022-10-11 00:00:00', '花花', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `program_act`
--

CREATE TABLE `program_act` (
  `Id` int(100) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `Date` date NOT NULL,
  `Activity_name` varchar(300) NOT NULL,
  `Person` varchar(300) NOT NULL,
  `Loaction` varchar(300) NOT NULL,
  `Service` varchar(300) NOT NULL,
  `Cost` int(100) NOT NULL,
  `Number` int(100) NOT NULL,
  `Lecturer` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(300) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `program_act`
--

INSERT INTO `program_act` (`Id`, `Year`, `Date`, `Activity_name`, `Person`, `Loaction`, `Service`, `Cost`, `Number`, `Lecturer`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '2022', '2022-09-14', '777', '777', '777', '777', 777, 777, '777', '2022-09-08 04:37:58', '', '2022-09-08 04:37:58', '');

-- --------------------------------------------------------

--
-- 資料表結構 `program_plan`
--

CREATE TABLE `program_plan` (
  `Id` int(11) NOT NULL,
  `Year` int(100) NOT NULL,
  `Date` date NOT NULL,
  `Plan_name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `program_plan`
--

INSERT INTO `program_plan` (`Id`, `Year`, `Date`, `Plan_name`) VALUES
(1, 111, '2022-09-07', 'tigodek');

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
(21, '111', 'dddd', '2022-07-17', 'ddd', 'ddd', 'dddd', '社工員1', '../signature/1658733763.png', '', '2022-07-25 15:22:43', '2022-07-05', '社工員1', '0000-00-00', ''),
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
(33, '111', 'fffffff', '2022-07-19', 'ggggggggg', 'ggggggggggg', 'ggggggggeeee', '2022-07-05', '社工員1', '2022-07-05', '', '社工員1', '../signature/1657196042.png', '', '2022-07-07 20:14:02'),
(34, '111', 'fffffff', '2022-5-18', 'ggggggggg', 'ggggggggggg', 'ggggggggeeee', '2022-10-06', '社工員1', '0000-00-00', '', '', '', '', ''),
(35, '111', 'test', '2022-10-12', 'testtesttest', 'test測試', 'cde00112233', '2022-10-12', '花花', '0000-00-00', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `resume`
--

CREATE TABLE `resume` (
  `Id` int(244) NOT NULL,
  `Account_id` int(244) NOT NULL,
  `Account` varchar(100) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Entry_date` varchar(100) NOT NULL,
  `On_or_off` varchar(10) NOT NULL,
  `Resigned_date` varchar(100) DEFAULT NULL,
  `Resume_datas_date` date DEFAULT NULL,
  `Employment_contract_date` date DEFAULT NULL,
  `NDA_file_date` date DEFAULT NULL,
  `Diploma_date` date DEFAULT NULL,
  `PA_file_date` date DEFAULT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `resume`
--

INSERT INTO `resume` (`Id`, `Account_id`, `Account`, `Name`, `Entry_date`, `On_or_off`, `Resigned_date`, `Resume_datas_date`, `Employment_contract_date`, `NDA_file_date`, `Diploma_date`, `PA_file_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 25, 'testuser', 'jia', '111年09月08日', '是', '', '2022-09-29', '2022-10-02', '2022-09-29', '2022-09-29', '2022-10-02', 'test0908', '2022-09-29 17:47:27', '園主任', '2022-10-02 19:32:02', '社工員1'),
(2, 26, 'test01', 'test001', '111年10月12日', '是', NULL, '2022-10-12', '2022-10-12', '2022-10-12', '2022-10-12', '2022-10-12', '無，測試', '2022-10-12 14:17:44', '花花', '2022-10-12 14:18:16', '花花');

-- --------------------------------------------------------

--
-- 資料表結構 `resume_forms`
--

CREATE TABLE `resume_forms` (
  `Id` int(244) NOT NULL,
  `Resume_id` int(244) NOT NULL,
  `Resume_name` varchar(100) NOT NULL,
  `File_type` varchar(100) NOT NULL,
  `File_year` varchar(100) NOT NULL,
  `File_path` varchar(2000) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Upload_date` datetime NOT NULL,
  `Upload_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `resume_forms`
--

INSERT INTO `resume_forms` (`Id`, `Resume_id`, `Resume_name`, `File_type`, `File_year`, `File_path`, `Remark`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`) VALUES
(1, 1, 'jia', 'file_A', '111', '../resume/resume_user1_testuser/resume_datas/test履歷檔案.txt', 'test0908jiaa', '2022-09-29 00:00:00', '園主任', '2022-09-29 00:00:00', '園主任'),
(2, 1, 'jia', 'file_D', '111', '../resume/resume_user1_testuser/resume_datas/test畢業證書.xdp', 'test0908jiaa', '2022-09-29 00:00:00', '園主任', '2022-09-29 00:00:00', '園主任'),
(3, 1, 'jia', 'file_C', '111', '../resume/resume_user1_testuser/resume_datas/保密契約.xdp', 'test0908jiaa', '2022-09-29 00:00:00', '園主任', '2022-09-29 17:48:39', ''),
(4, 1, 'jia', 'file_E', '111', '../resume/resume_user1_testuser/resume_datas/考績111.pub', 'tespaA111', '2022-10-02 00:00:00', '社工員1', '2022-10-02 00:00:00', '社工員1'),
(5, 1, 'jia', 'file_B', '111', '../resume/resume_user1_testuser/resume_datas/雇傭契約111a.docx', 'tespaA111a', '2022-10-02 00:00:00', '社工員1', '2022-10-02 00:00:00', '社工員1'),
(6, 1, 'jia', 'file_B', '109', '../resume/resume_user1_testuser/resume_datas/雇傭契約109.docx', '', '2020-10-02 00:00:00', '社工員1', '2022-10-02 00:00:00', '社工員1'),
(7, 1, 'jia', 'file_E', '110', '../resume/resume_user1_testuser/resume_datas/考績110.pub', 'ttt110', '2022-10-02 00:00:00', '社工員1', '2022-10-02 19:31:25', ''),
(8, 1, 'jia', 'file_E', '109', '../resume/resume_user1_testuser/resume_datas/考績109.pub', '', '2022-10-02 00:00:00', '社工員1', '2022-10-02 19:32:02', ''),
(9, 2, 'test001', 'file_A', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:17:44', ''),
(10, 2, 'test001', 'file_C', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:17:44', ''),
(11, 2, 'test001', 'file_D', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:17:44', ''),
(12, 2, 'test001', 'file_B', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:18:16', ''),
(13, 2, 'test001', 'file_E', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:18:16', '');

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
(3, 1, '2021-10-07', '10:50:00', 'Cerytics', '22', '20-29歲', '0621312345', '其他', '同性', 'HIV', '', '', 'test37', '', '', '2022-01-15 19:44:44', '園主任', '2022-10-13 18:59:00', '社工組長'),
(4, 2, '2021-11-04', '14:15:00', 'Kiealy', '36', '30-39歲', '023458942', '男', '異性', 'HIV+梅毒', '', 'TWEW', '', 'RC1019281', '125', '2022-01-15 19:46:52', '園主任', '2022-01-20 22:49:54', '園主任'),
(5, 3, '2021-09-10', '07:10:00', 'jien', '22', '20-29歲', '076524388', '女', '雙性', '梅毒', '梅 positive', 'test', ' tew t ', 'SW1353', '249', '2022-01-18 18:09:14', '園主任', '0000-00-00 00:00:00', ''),
(6, 4, '2021-12-08', '13:20:00', 'heriao', '41', '40-49歲', '038741812', '女', '異性', 'HIV+梅毒', 'H+梅 positive', 'test', '', '', '', '2022-01-20 22:48:50', '園主任', '0000-00-00 00:00:00', ''),
(7, 5, '2022-01-06', '07:10:00', 'test', '', '30-39歲', '052234423', '其他', '異性', 'HIV', 'H negative', '', '', '', '', '2022-03-07 18:10:11', '園主任', '0000-00-00 00:00:00', ''),
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
-- 資料表結構 `signature_notice`
--

CREATE TABLE `signature_notice` (
  `Id` int(11) NOT NULL,
  `Sign_id` int(244) NOT NULL,
  `Title` varchar(1000) NOT NULL,
  `Url` text NOT NULL,
  `Timestamp` varchar(100) NOT NULL,
  `Assign` varchar(30) NOT NULL,
  `Signer` varchar(30) NOT NULL,
  `Sign_state` varchar(50) NOT NULL,
  `Type` varchar(100) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `signature_notice`
--

INSERT INTO `signature_notice` (`Id`, `Sign_id`, `Title`, `Url`, `Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(7, 0, '團督記錄簽核：test會議記錄標題818', 'supervisor_record_detail.php?year=111&id=17&sr_id=17&rec_type=fillin', '2022-08-18 16:05', '社工員1', '執行長', '未簽核', 'supervisor_record', '2022-08-18 16:10:58', '社工員1', '2022-08-18 16:10:58', ''),
(8, 0, '團督記錄簽核：uploadtt會議記錄標題818', 'supervisor_record_detail.php?year=111&id=18&sr_id=18&rec_type=upload', '2022-08-18 00:00', '社工員1', '園主任', '已簽核', 'supervisor_record', '2022-08-18 16:11:27', '社工員1', '2022-08-18 16:11:27', ''),
(9, 0, '理監事會議記錄簽核：test理監事會議會議記錄標題818', 'board_supervisor_detail.php?year=111&id=32&bs_id=32&rec_type=fillin', '2022-08-18 17:20', '園主任', '園主任', '已簽核', 'board_supervisor', '2022-08-18 16:35:25', '園主任', '2022-08-18 16:35:25', ''),
(11, 0, '理監事會議記錄簽核：test上傳會議記錄理監事會議818', 'board_supervisor_detail.php?year=111&id=33&bs_id=33&rec_type=upload', '2022-08-18 00:00', '社工員1', '社工組長', '已簽核', 'board_supervisor', '2022-08-18 16:38:40', '社工員1', '2022-08-18 16:38:40', ''),
(12, 0, '會員大會記錄簽核：test會員大會記錄標題818', 'members_assemble_detail.php?year=111&id=14&ma_id=14&rec_type=fillin', '2022-08-18 14:00', '社工員2', '社工組長', '未簽核', 'members_assemble', '2022-08-18 16:55:38', '社工員2', '2022-08-18 16:55:38', ''),
(13, 0, '會員大會記錄簽核：upload會員大會記錄標題818', 'members_assemble_detail.php?year=111&id=15&ma_id=15&rec_type=upload', '2022-08-18 00:00', '社工員2', '園主任', '已簽核', 'members_assemble', '2022-08-18 16:56:50', '社工員2', '2022-08-18 16:56:50', ''),
(14, 0, '團督記錄簽核：test會議記錄標題920', 'supervisor_record_detail.php?year=111&id=19&sr_id=19&rec_type=fillin', '2022-09-20 07:07', '園主任', '社工組長', '未簽核', 'supervisor_record', '2022-09-20 18:04:02', '園主任', '2022-09-20 18:04:02', ''),
(15, 0, '會員大會記錄簽核：test會員大會記錄標題	123', 'members_assemble_detail.php?year=109&id=0&ma_id=0&rec_type=fillin', '2020-08-13 09:00', '社工員1', '社工組長', '未簽核', 'members_assemble', '2022-10-07 20:57:28', '社工員1', '2022-10-07 20:57:28', ''),
(16, 0, '會員大會記錄簽核：test會員大會記錄標題	upload', 'members_assemble_detail.php?year=111&id=2&ma_id=2&rec_type=upload', '2022-10-07 00:00', '社工員1', '園主任', '未簽核', 'members_assemble', '2022-10-07 21:01:24', '社工員1', '2022-10-07 21:01:24', ''),
(17, 0, '理監事會記錄簽核：test理監事會記錄標題1007', 'board_supervisor_detail.php?year=111&id=34&bs_id=34&rec_type=fillin', '2022-10-07 10:05', '社工員1', '社工組長', '未簽核', 'board_supervisor', '2022-10-07 21:03:01', '社工員1', '2022-10-07 21:03:01', ''),
(18, 0, '會員大會記錄簽核：會員大會記錄標題2', 'members_assemble_detail.php?year=109&id=3&ma_id=3&rec_type=fillin', '2020-11-11 13:10', '社工員1', '社工組長', '未簽核', 'members_assemble', '2022-10-07 21:05:07', '社工員1', '2022-10-07 21:05:07', ''),
(19, 0, '團督記錄簽核：TEST團督記錄標題1231007', 'supervisor_record_detail.php?year=111&id=20&sr_id=20&rec_type=fillin', '2022-10-07 10:15', '社工員1', '園主任', '未簽核', 'supervisor_record', '2022-10-07 21:15:09', '社工員1', '2022-10-07 21:15:09', ''),
(20, 0, '理監事會議記錄簽核：uploadtt理監事會記錄標題1209', 'board_supervisor_detail.php?year=109&id=35&bs_id=35&rec_type=upload', '2022-10-13 00:00', '社工組長', '社工員2', '未簽核', 'board_supervisor', '2022-10-13 16:26:15', '社工組長', '2022-10-13 16:26:15', ''),
(21, 0, '理監事會記錄簽核：adasad', 'board_supervisor_detail.php?year=111&id=36&bs_id=36&rec_type=fillin', '2022-10-15 01:11', 'jia', '力聖臨', '未簽核', 'board_supervisor', '2022-10-15 23:08:50', 'jia', '2022-10-15 23:08:50', ''),
(22, 0, '團督記錄簽核：test團督記錄標題1015', 'supervisor_record_detail.php?year=111&id=21&sr_id=21&rec_type=fillin', '2022-10-15 00:20', 'jia', '社工組長', '未簽核', 'supervisor_record', '2022-10-15 23:16:59', 'jia', '2022-10-15 23:16:59', ''),
(23, 0, '理監事會議記錄簽核：ttttt理監事會記錄標題1015', 'board_supervisor_detail.php?year=111&id=36&bs_id=36&rec_type=upload', '2022-10-15 00:00', 'jia', '園主任', '未簽核', 'board_supervisor', '2022-10-15 23:17:58', 'jia', '2022-10-15 23:17:58', ''),
(24, 15, '結案簽核：案號RE111姓名test', 'closed_detail.php?closed_id=15', '2022-10-24 00:00', '社工員1', '社工組長', '已簽核', 'closed', '2022-10-25 20:02:03', '社工員1', '2022-10-25 21:40:23', '社工組長');

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
(34, 'Deny(大麻)面訪', 1, '0000-00-00', '園主任', '2021-11-25 10:00', '社工員2、、'),
(35, 'test001()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、');

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
(2, '109', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"uploadtt會議記錄標題11\"},{\"name\":\"upload_rec_date\",\"value\":\"109年07月23日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test備註ssa\"},{\"name\":\"customFile1\",\"value\":\"abc123.PNG\"}]\"', '../supervisor_record/upload/abc123.PNG', '', '', '', '0000-00-00 00:00:00', '2022-04-13 20:32:06', '園主任', '2022-09-22 18:20:17', '園主任'),
(3, '110', '[{\"name\":\"title_name\",\"value\":\"第11次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"執行長415\"},{\"name\":\"attendees\",\"value\":\"出席人員a、出席人員b\"},{\"name\":\"record\",\"value\":\"出席人員c\"},{\"name\":\"meeting_date\",\"value\":\"110年12月09日\"},{\"name\":\"meeting_time\",\"value\":\"09:40\"},{\"name\":\"place\",\"value\":\"辦公室\"},{\"name\":\"suggest\",\"value\":\"無\"},{\"name\":\"next_focus\",\"value\":\"無\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 22:45:12', '園主任', '2022-07-07 20:28:54', '社工員1'),
(4, '110', '[{\"name\":\"title_name\",\"value\":\"第5次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"執行長415\"},{\"name\":\"attendees\",\"value\":\"tttt\"},{\"name\":\"record\",\"value\":\"tttt1\"},{\"name\":\"meeting_date\",\"value\":\"110年02月11日\"},{\"name\":\"meeting_time\",\"value\":\"00:20\"},{\"name\":\"place\",\"value\":\"tttp\"},{\"name\":\"suggest\",\"value\":\"n\"},{\"name\":\"next_focus\",\"value\":\"n\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:18:30', '園主任', '2022-04-15 23:23:05', '園主任'),
(5, '109', '[{\"name\":\"title_name\",\"value\":\"test會議記錄標題1\"},{\"name\":\"meeting_date\",\"value\":\"109年01月15日\"},{\"name\":\"meeting_time\",\"value\":\"13:20\"},{\"name\":\"place\",\"value\":\"ssssplace\"},{\"name\":\"ceo_name\",\"value\":\"sss\"},{\"name\":\"attendees\",\"value\":\"sss1\"},{\"name\":\"absent\",\"value\":\"dddd\"},{\"name\":\"record\",\"value\":\"ss1\"},{\"name\":\"suggest\",\"value\":\"ssssn\"},{\"name\":\"next_focus\",\"value\":\"sssn：;;1,aaaa;;2.aaaa\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:20:20', '園主任', '2022-10-13 18:56:18', '社工組長'),
(6, '111', '[{\"name\":\"title_name\",\"value\":\"第6次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"tt執行長6\"},{\"name\":\"attendees\",\"value\":\"ttt6\"},{\"name\":\"record\",\"value\":\"tt61\"},{\"name\":\"meeting_date\",\"value\":\"111年09月08日\"},{\"name\":\"meeting_time\",\"value\":\"13:30\"},{\"name\":\"place\",\"value\":\"ttplace1\"},{\"name\":\"suggest\",\"value\":\"ttt6\"},{\"name\":\"next_focus\",\"value\":\"tttt6s\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-15 23:22:29', '園主任', '2022-04-15 23:23:59', '園主任'),
(7, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload第3次團督會議記錄\"},{\"name\":\"upload_rec_date\",\"value\":\"111年04月18日\"},{\"name\":\"upload_rec_remark\",\"value\":\"upload第3次團督會議記錄\"},{\"name\":\"customFile1\",\"value\":\"test215_1.pdf\"}]\"', '../supervisor_record/upload/test215_1.pdf', '', '', '', '0000-00-00 00:00:00', '2022-04-18 10:05:05', '園主任', '0000-00-00 00:00:00', ''),
(8, '110', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"upload第5次團督會議記錄\"},{\"name\":\"upload_rec_date\",\"value\":\"110年06月16日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test\"},{\"name\":\"customFile1\",\"value\":\"sss.txt\"}]\"', '../supervisor_record/upload/sss.txt', '園主任', '../supervisor_record/signature/1657537797.png', 'TEST\n團督記錄\n會議記錄督導留言', '2022-07-11 19:09:57', '2022-04-18 10:11:31', '園主任', '2022-07-11 18:15:21', '園主任'),
(9, '110', '[{\"name\":\"title_name\",\"value\":\"第9次團督紀錄\"},{\"name\":\"meeting_date\",\"value\":\"110年10月20日\"},{\"name\":\"meeting_time\",\"value\":\"15:15\"},{\"name\":\"place\",\"value\":\"ttts\"},{\"name\":\"ceo_name\",\"value\":\"as\"},{\"name\":\"attendees\",\"value\":\"aaas\"},{\"name\":\"absent\",\"value\":\"DAADS\"},{\"name\":\"record\",\"value\":\"as\"},{\"name\":\"suggest\",\"value\":\"ttts\"},{\"name\":\"next_focus\",\"value\":\"ttts\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-18 10:12:40', '園主任', '2022-10-15 23:13:48', 'jia'),
(10, '111', '[{\"name\":\"title_name\",\"value\":\"vvv\"},{\"name\":\"ceo_name\",\"value\":\"vvv\"},{\"name\":\"attendees\",\"value\":\"vvv\"},{\"name\":\"record\",\"value\":\"vvv\"},{\"name\":\"meeting_date\",\"value\":\"111年04月26日\"},{\"name\":\"meeting_time\",\"value\":\"20:05\"},{\"name\":\"place\",\"value\":\"vvv\"},{\"name\":\"suggest\",\"value\":\"vvv\"},{\"name\":\"next_focus\",\"value\":\"vvv\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-26 20:02:26', '社工員1', '0000-00-00 00:00:00', ''),
(11, '111', '[{\"name\":\"title_name\",\"value\":\"hgg\"},{\"name\":\"ceo_name\",\"value\":\"ggg\"},{\"name\":\"attendees\",\"value\":\"ggg\"},{\"name\":\"record\",\"value\":\"ggg\"},{\"name\":\"meeting_date\",\"value\":\"111年04月27日\"},{\"name\":\"meeting_time\",\"value\":\"05:55\"},{\"name\":\"place\",\"value\":\"ggg\"},{\"name\":\"suggest\",\"value\":\"ggg\"},{\"name\":\"next_focus\",\"value\":\"ggg\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-04-27 17:52:37', '社工員1', '0000-00-00 00:00:00', ''),
(12, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"sdasda\"},{\"name\":\"upload_rec_date\",\"value\":\"111年05月12日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"螢幕擷取畫面 2022-04-26 133143.png\"}]\"', '../supervisor_record/upload/螢幕擷取畫面 2022-04-26 133143.png', '', '', '', '0000-00-00 00:00:00', '2022-05-10 17:08:51', '社工員1', '0000-00-00 00:00:00', ''),
(13, '111', '[{\"name\":\"title_name\",\"value\":\"第12次團督紀錄\"},{\"name\":\"ceo_name\",\"value\":\"a\"},{\"name\":\"attendees\",\"value\":\"b\"},{\"name\":\"record\",\"value\":\"c\"},{\"name\":\"meeting_date\",\"value\":\"111年07月11日\"},{\"name\":\"meeting_time\",\"value\":\"09:00\"},{\"name\":\"place\",\"value\":\"de\"},{\"name\":\"suggest\",\"value\":\"e\"},{\"name\":\"next_focus\",\"value\":\"f\"}]', '', '', '', '', '', '0000-00-00 00:00:00', '2022-07-11 20:57:46', '園主任', '0000-00-00 00:00:00', ''),
(14, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第3次團督會議紀錄upload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test26\"},{\"name\":\"customFile1\",\"value\":\"tes26.docx\"}]\"', '../supervisor_record/upload/tes26.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:05:09', '園主任', '0000-00-00 00:00:00', ''),
(16, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第5次團督會議紀錄upload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年07月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test5\"},{\"name\":\"customFile1\",\"value\":\"tes5.docx\"}]\"', '../supervisor_record/upload/tes5.docx', '', '', '', '0000-00-00 00:00:00', '2022-07-11 21:09:12', '園主任', '0000-00-00 00:00:00', ''),
(17, '111', '[{\"name\":\"title_name\",\"value\":\"test會議記錄標題818\"},{\"name\":\"ceo_name\",\"value\":\"主持人818\"},{\"name\":\"attendees\",\"value\":\"TEST出席人員818\"},{\"name\":\"record\",\"value\":\"團督記錄818\"},{\"name\":\"meeting_date\",\"value\":\"111年08月18日\"},{\"name\":\"meeting_time\",\"value\":\"16:05\"},{\"name\":\"place\",\"value\":\"TEST地點818\"},{\"name\":\"suggest\",\"value\":\"督導建議818\"},{\"name\":\"next_focus\",\"value\":\"下次團督重點818\"},{\"name\":\"supervise\",\"value\":\"執行長\"}]', '', '', '執行長', '', '', '0000-00-00 00:00:00', '2022-08-18 16:10:58', '社工員1', '0000-00-00 00:00:00', ''),
(18, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"uploadtt會議記錄標題818\"},{\"name\":\"upload_rec_date\",\"value\":\"111年08月18日\"},{\"name\":\"upload_rec_remark\",\"value\":\"TEST檔名：1.xls818\"},{\"name\":\"upload_rec_supervise\",\"value\":\"園主任\"},{\"name\":\"customFile1\",\"value\":\"1.xls\"}]\"', '../supervisor_record/upload/1.xls', '園主任', '../supervisor_record/signature/1660810849.png', '園主任已簽名', '2022-08-18 16:20:49', '2022-08-18 16:11:27', '社工員1', '0000-00-00 00:00:00', ''),
(19, '111', '[{\"name\":\"title_name\",\"value\":\"test會議記錄標題920\"},{\"name\":\"ceo_name\",\"value\":\"tt執行長\"},{\"name\":\"attendees\",\"value\":\"ttt\"},{\"name\":\"record\",\"value\":\"aas團督記錄\"},{\"name\":\"meeting_date\",\"value\":\"111年09月20日\"},{\"name\":\"meeting_time\",\"value\":\"07:07\"},{\"name\":\"place\",\"value\":\"test09月20日\"},{\"name\":\"suggest\",\"value\":\"督導建議920\"},{\"name\":\"next_focus\",\"value\":\"下次團督重點920\"},{\"name\":\"supervise\",\"value\":\"社工組長\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-09-20 18:04:02', '社工員1', '0000-00-00 00:00:00', ''),
(20, '111', '[{\"name\":\"title_name\",\"value\":\"TEST團督記錄標題1231007\"},{\"name\":\"meeting_date\",\"value\":\"111年10月07日\"},{\"name\":\"meeting_time\",\"value\":\"10:15\"},{\"name\":\"place\",\"value\":\"test會議地點\"},{\"name\":\"ceo_name\",\"value\":\"sss主席\"},{\"name\":\"attendees\",\"value\":\"TT出席人員\"},{\"name\":\"absent\",\"value\":\"AA請假人員\"},{\"name\":\"record\",\"value\":\"SSS紀錄者\"},{\"name\":\"suggest\",\"value\":\"AAA督導建議\"},{\"name\":\"next_focus\",\"value\":\"下次團督重點AAAF\"}]', '', '', '園主任', '', '', '0000-00-00 00:00:00', '2022-10-07 21:15:09', '社工員1', '2022-10-07 21:15:19', '社工員1'),
(21, '111', '[{\"name\":\"title_name\",\"value\":\"test團督記錄標題1015\"},{\"name\":\"meeting_date\",\"value\":\"111年10月15日\"},{\"name\":\"meeting_time\",\"value\":\"12:20\"},{\"name\":\"place\",\"value\":\"test會議地點\"},{\"name\":\"ceo_name\",\"value\":\"test主席\"},{\"name\":\"attendees\",\"value\":\"asasd出席人員;;asdadsfff\"},{\"name\":\"absent\",\"value\":\"ttt;;請假人員\"},{\"name\":\"record\",\"value\":\"tttasdas;;紀錄者\"},{\"name\":\"suggest\",\"value\":\"yyyy;;督導建議\"},{\"name\":\"next_focus\",\"value\":\"下次團督重點]]];;ffdsfs\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-15 23:16:59', 'jia', '2022-10-15 23:19:10', 'jia');

-- --------------------------------------------------------

--
-- 資料表結構 `training`
--

CREATE TABLE `training` (
  `Id` int(255) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Training_date` varchar(1000) NOT NULL,
  `On_or_off` varchar(10) NOT NULL,
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

INSERT INTO `training` (`Id`, `Name`, `Training_date`, `On_or_off`, `Training_name`, `Place`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(27, 'Tim', '111年07月06日', '是', '野外求生', '屏東公園', '', '2022-07-28', '社工員1', '0000-00-00', ''),
(28, 'test001', '111年10月12日', '是', 'testtest', '快樂聯盟一樓', '無，測試', '2022-10-12', '花花', '0000-00-00', ''),
(29, '', '111年10月12日', '', 'testtest', '快樂聯盟一樓', '無，測試', '0000-00-00', '', '0000-00-00', '');

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
  `Id` int(244) NOT NULL,
  `Resume_id` int(244) NOT NULL,
  `Account` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Name` varchar(10) NOT NULL,
  `Authority` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT current_timestamp(),
  `Department` varchar(10) NOT NULL,
  `Job` varchar(10) NOT NULL,
  `Create_date` datetime DEFAULT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user_info`
--

INSERT INTO `user_info` (`Id`, `Resume_id`, `Account`, `Password`, `Name`, `Authority`, `Date`, `Department`, `Job`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 0, 'text1', '123', '社工員1', 1, '2021-03-06 17:04:49', '行政中心', '社工', NULL, '', '2022-10-13 18:55:32', '社工組長'),
(2, 0, 'text2', '456', '社工員2', 1, '2020-10-05 21:12:04', '行政中心', '社工', NULL, '', '2022-09-22 19:36:25', ''),
(3, 0, 'test3', '789', '社工組長', 2, '2020-10-05 21:12:04', '行政中心', '組長', NULL, '', '2022-09-22 19:36:25', ''),
(5, 0, 'test5', '258', '園主任', 3, '2020-10-05 21:12:04', '伯特利家園', '主任', NULL, '', '2022-09-22 19:36:25', ''),
(6, 0, 'test6', '369', '執行長', 4, '2020-10-05 21:12:04', '行政中心', '執行長', NULL, '', '2022-09-22 19:36:25', ''),
(10, 0, 'grace12', '0000', '歐陽美悌', 1, '2021-02-05 11:47:28', '行政中心', '行政人員', NULL, '', '2022-09-22 19:36:25', ''),
(11, 0, 'grace75', '0000', '林鈺舒', 1, '2021-02-05 11:49:26', '行政中心', '社工助理', NULL, '', '2022-09-22 19:36:25', ''),
(12, 0, 'grace66', '0000', '丘培民', 1, '2021-02-05 11:49:47', '行政中心', '社工', NULL, '', '2022-09-22 19:36:25', ''),
(13, 0, 'grace69', '0000', '邱怡玲', 1, '2021-02-05 11:52:06', '行政中心', '社工', NULL, '', '2022-09-22 19:36:25', ''),
(14, 0, 'grace78', '0000', '許文瀞', 1, '2021-02-05 11:52:49', '行政中心', '組長', NULL, '', '2022-09-22 19:36:25', ''),
(15, 0, 'grace39', '0000', '張簡卉筑', 2, '2021-02-05 11:53:21', '行政中心', '社工組長', NULL, '', '2022-09-22 19:36:25', ''),
(16, 0, 'grace01', '0000', '李國揚', 4, '2021-03-18 13:21:20', '行政中心', '執行長', NULL, '', '2022-09-22 19:36:25', ''),
(17, 0, 'grace02', '0000', '苗長青', 4, '2021-03-18 13:23:31', '行政中心', '執行長秘書', NULL, '', '2022-09-22 19:36:25', ''),
(18, 0, 'grace03', '0000', '吳智文', 3, '2021-03-18 13:24:33', '伯特利家園', '主任', NULL, '', '2022-09-22 19:36:25', ''),
(19, 0, 'grace04', '0000', '李萬榮', 1, '2021-03-18 13:25:50', '伯特利家園', '生活輔導員', NULL, '', '2022-09-22 19:36:25', ''),
(20, 0, 'grace05', '0000', '晏傳恕', 1, '2021-03-18 13:27:08', '伯特利家園', '生活輔導員', NULL, '', '2022-09-22 19:36:25', ''),
(21, 0, 'grace06', '0000', '施朝根', 3, '2021-03-18 13:27:42', '毘努伊勒家園', '主任', NULL, '', '2022-09-22 19:36:25', ''),
(22, 0, 'grace07', '0000', '洪勝霖', 1, '2021-03-18 13:28:18', '毘努伊勒家園', '生活輔導組長', NULL, '', '2022-09-22 19:36:25', ''),
(23, 0, 'grace08', '0000', '力聖臨', 1, '2021-03-18 13:29:11', '毘努伊勒家園', '生活輔導員', NULL, '', '2022-09-22 19:36:25', ''),
(24, 0, 'test', 'test', '花花', 1, '2021-03-06 17:04:49', '行政中心', '組長', NULL, '', '2022-09-22 19:36:25', ''),
(25, 1, 'testuser', 'testjia123456', 'jia', 1, '2022-09-29 17:47:27', '', '', '2022-09-29 17:47:27', '園主任', '2022-09-29 17:47:27', ''),
(26, 2, 'test01', 'test01', 'test001', 1, '2022-10-12 14:17:44', '', '', '2022-10-12 14:17:44', '花花', '2022-10-12 14:17:44', '');

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
  `Time_all` float NOT NULL,
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
(1, 111, 'test712', '活動', '周一早上9:00-12:00', 16.5, '是', '否', '否', '111年07月12日', '2022-07-12 22:34:31', '園主任', '2022-09-20 17:59:06', '園主任'),
(2, 111, 'test713', '美工', '周二下午13:00-12:00', 6, '是', '否', '是', '111年07月12日', '2022-07-12 22:35:07', '園主任', '2022-07-14 21:40:25', '園主任'),
(3, 111, 'test728', '環境清潔', '周三早上9:00-12:00', 13.5, '是', '是', '否', '111年07月28日', '2022-07-28 19:03:34', '園主任', '2022-07-28 19:09:15', '園主任'),
(4, 111, 'test11234', '文宣', '周四下午13:00-12:00', 2, '是', '是', '是', '111年07月28日', '2022-07-28 19:03:59', '園主任', '2022-07-28 19:10:58', '園主任'),
(5, 111, '測試測試測試', '其他', '周三下午13:00-12:00', 16, '是', '是', '否', '111年10月12日', '2022-10-12 14:33:35', '花花', '2022-10-12 14:34:40', '花花'),
(6, 111, 'test測試', '文宣', '周三下午13:00-12:00', 19, '是', '否', '否', '111年10月12日', '2022-10-12 14:36:45', '花花', '0000-00-00 00:00:00', ''),
(7, 111, '測試567', '美工', '周二下午13:00-12:00', 4, '是', '否', '否', '111年10月12日', '2022-10-12 14:43:30', '花花', '2022-10-12 14:44:01', '花花');

-- --------------------------------------------------------

--
-- 資料表結構 `volunteer_hours_record`
--

CREATE TABLE `volunteer_hours_record` (
  `Id` int(240) NOT NULL,
  `Volunteer_id` int(240) NOT NULL,
  `Year` int(10) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Add_hours` float NOT NULL,
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
(17, 1, 111, 'test712', -3, '減至16', '', 0, '2022-07-14 22:03:22', '園主任', '0000-00-00 00:00:00', ''),
(18, 3, 111, 'test728', 11.5, '', '111年07月28日', 1, '2022-07-28 19:03:34', '園主任', '0000-00-00 00:00:00', ''),
(19, 4, 111, 'test11234', 0, '', '111年07月28日', 1, '2022-07-28 19:03:59', '園主任', '0000-00-00 00:00:00', ''),
(25, 3, 111, 'test728', 2.5, '+2.5小時', '', 0, '2022-07-28 19:08:58', '園主任', '0000-00-00 00:00:00', ''),
(26, 3, 111, 'test728', -0.5, 'test', '', 0, '2022-07-28 19:09:15', '園主任', '0000-00-00 00:00:00', ''),
(27, 4, 111, 'test11234', 4.5, '+4.5hours', '', 0, '2022-07-28 19:09:33', '園主任', '0000-00-00 00:00:00', ''),
(29, 4, 111, 'test11234', -2.5, '', '', 0, '2022-07-28 19:10:58', '園主任', '0000-00-00 00:00:00', ''),
(30, 1, 111, 'test712', 2.5, 'test+2.5', '', 0, '2022-09-20 17:51:57', '園主任', '0000-00-00 00:00:00', ''),
(31, 1, 111, 'test712', 1.5, 'test1.5', '', 0, '2022-09-20 17:52:12', '園主任', '0000-00-00 00:00:00', ''),
(32, 1, 111, 'test712', -3.5, '目前服務時數由20更改為16.5(-3.5)。資料異動者：園主任，異動時間：2022-09-20 11:59:06。', '', 0, '2022-09-20 17:59:06', '園主任', '0000-00-00 00:00:00', ''),
(33, 5, 111, '測試測試測試', 15, '', '111年10月12日', 1, '2022-10-12 14:33:35', '花花', '0000-00-00 00:00:00', ''),
(34, 5, 111, '測試測試測試', 1, '', '', 0, '2022-10-12 14:34:40', '花花', '0000-00-00 00:00:00', ''),
(35, 6, 111, 'test測試', 19, '', '111年10月12日', 1, '2022-10-12 14:36:45', '花花', '0000-00-00 00:00:00', ''),
(36, 7, 111, '測試567', 4, '', '111年10月12日', 1, '2022-10-12 14:43:30', '花花', '0000-00-00 00:00:00', '');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `accounting_record`
--
ALTER TABLE `accounting_record`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `accounting_record_cash`
--
ALTER TABLE `accounting_record_cash`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `accounting_record_cash_balance`
--
ALTER TABLE `accounting_record_cash_balance`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `accounting_record_report`
--
ALTER TABLE `accounting_record_report`
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
-- 資料表索引 `case_report`
--
ALTER TABLE `case_report`
  ADD PRIMARY KEY (`Id`);

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
-- 資料表索引 `form_case_report`
--
ALTER TABLE `form_case_report`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `form_interlocution_queskeywords`
--
ALTER TABLE `form_interlocution_queskeywords`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `login_record`
--
ALTER TABLE `login_record`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `members_assemble`
--
ALTER TABLE `members_assemble`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `overtime`
--
ALTER TABLE `overtime`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `overtime_hours_record`
--
ALTER TABLE `overtime_hours_record`
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
-- 資料表索引 `program_act`
--
ALTER TABLE `program_act`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `program_plan`
--
ALTER TABLE `program_plan`
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
-- 資料表索引 `resume_forms`
--
ALTER TABLE `resume_forms`
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
-- 資料表索引 `signature_notice`
--
ALTER TABLE `signature_notice`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `sign_notice`
--
ALTER TABLE `sign_notice`
  ADD PRIMARY KEY (`Id`);

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_cash`
--
ALTER TABLE `accounting_record_cash`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_cash_balance`
--
ALTER TABLE `accounting_record_cash_balance`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_report`
--
ALTER TABLE `accounting_record_report`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `board_supervisor`
--
ALTER TABLE `board_supervisor`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `case_report`
--
ALTER TABLE `case_report`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `closed`
--
ALTER TABLE `closed`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `consult`
--
ALTER TABLE `consult`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel`
--
ALTER TABLE `counsel`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel_visit`
--
ALTER TABLE `counsel_visit`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `current_case`
--
ALTER TABLE `current_case`
  MODIFY `Id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `day_off`
--
ALTER TABLE `day_off`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dlgrec`
--
ALTER TABLE `dlgrec`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forms`
--
ALTER TABLE `forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_all_info`
--
ALTER TABLE `form_all_info`
  MODIFY `Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_case_report`
--
ALTER TABLE `form_case_report`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_interlocution_queskeywords`
--
ALTER TABLE `form_interlocution_queskeywords`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `login_record`
--
ALTER TABLE `login_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members_assemble`
--
ALTER TABLE `members_assemble`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `overtime`
--
ALTER TABLE `overtime`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `overtime_hours_record`
--
ALTER TABLE `overtime_hours_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_case`
--
ALTER TABLE `placement_case`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_forms`
--
ALTER TABLE `placement_forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_form_all_info`
--
ALTER TABLE `placement_form_all_info`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_act`
--
ALTER TABLE `program_act`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_plan`
--
ALTER TABLE `program_plan`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `published`
--
ALTER TABLE `published`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `received`
--
ALTER TABLE `received`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume`
--
ALTER TABLE `resume`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume_forms`
--
ALTER TABLE `resume_forms`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
-- 使用資料表自動遞增(AUTO_INCREMENT) `signature_notice`
--
ALTER TABLE `signature_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sign_notice`
--
ALTER TABLE `sign_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supervisor_record`
--
ALTER TABLE `supervisor_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `training`
--
ALTER TABLE `training`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tw_counties`
--
ALTER TABLE `tw_counties`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_info`
--
ALTER TABLE `user_info`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer`
--
ALTER TABLE `volunteer`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_hours_record`
--
ALTER TABLE `volunteer_hours_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
