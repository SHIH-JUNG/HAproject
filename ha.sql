-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-11-15 14:00:25
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.2.4

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `accounting_record_cash`
--

INSERT INTO `accounting_record_cash` (`Id`, `Year`, `Month`, `Form_class`, `Invoice_date`, `Invoice_seq`, `Invoice_class`, `Invoice_content`, `Invoice_type`, `Amount`, `Withdrawal_date`, `Payee`, `Upload_date`, `Record_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 111, 4, '日記帳', '111/04/06', '56', '', 'test04/06內容', '收入', 3200, '111/04/07', '社工員1', '', '111/04/08', 'test備註0407', '2022-08-18 18:49:19', '園主任', '2022-08-23 23:04:26', '園主任'),
(2, 111, 4, '日記帳', '111/04/08', '60', '', 'test04/08內容', '支出', 1512, '111/04/08', '社工員2', '', '111/04/09', 'test備註0409', '2022-08-18 19:23:26', '園主任', '2022-09-20 18:05:26', '園主任'),
(3, 111, 6, '日記帳', '111/06/16', '66', '', 'test06/16內容', '收入', 4879, '111/06/17', '社工組長', '', '111/06/18', '備註test0618', '2022-08-18 19:24:29', '園主任', '2022-08-18 19:24:29', ''),
(4, 111, 5, '轉帳', '111/05/11', '', '', 'test05/11內容', '支出', 550, '', '', '', 'test備註05/11', '', '2022-08-18 20:03:26', '園主任', '2022-08-23 20:56:41', '園主任'),
(5, 111, 4, '轉帳', '111/04/13', '', '', 'test04/13內容', '支出', 100, '', '', '', '111/04/13', '04/13', '2022-08-18 22:26:47', '園主任', '2022-08-18 22:34:45', '園主任'),
(6, 111, 7, '轉帳', '111/07/12', '', '', 'test07/12內容', '支出', 3000, '111/07/11', '社工組長', '', '111/07/12', 'test備註0711', '2022-08-23 19:42:21', '園主任', '2022-08-23 20:56:02', '園主任'),
(7, 111, 7, '日記帳', '111/07/11', '78', '', '內容07/11', '支出', 2567, '111/07/11', '社工員1', '', '111/07/11', 'test備註711', '2022-08-23 19:43:36', '園主任', '2022-12-29 12:49:47', '社工員1'),
(8, 111, 7, '兒少單據', '111/07/12', '', '扣繳', 'test單據類別扣繳0711', '', 0, '', '', '111/07/11', '111/07/11', 'test備註上傳日期0711', '2022-08-23 19:58:30', '園主任', '2022-12-29 12:50:06', '社工員1'),
(9, 111, 7, '日記帳', '111/07/13', '79', '', 'test0713內容', '收入', 3516, '111/07/10', '社工員2', '', '111/07/14', 'test備註領款人0710社工員2', '2022-08-23 20:58:14', '園主任', '2022-08-23 20:58:34', '園主任'),
(10, 111, 6, '日記帳', '111/06/11', '63', '', 'test06/11內容', '支出', 1512, '111/06/09', '社工員2', '', '111/06/12', 'TEST備註0611', '2022-08-23 22:00:24', '園主任', '2022-08-23 22:00:24', ''),
(11, 111, 7, '日記帳', '111/07/14', '82', '', 'test07/14內容', '收入', 3154, '111/07/11', '社工員1', '', '111/07/13', 'test0713備註', '2022-08-23 22:14:05', '園主任', '2022-08-23 22:14:05', ''),
(12, 111, 7, '日記帳', '111/07/23', '88', '', 'test07/23內容', '支出', 8765, '111/07/23', '社工員1', '', '111/07/24', 'TEST備註0724', '2022-08-23 22:20:06', '園主任', '2022-08-23 22:20:06', ''),
(13, 111, 7, '日記帳', '111/07/23', '89', '', 'test07/23內容2', '支出', 33, '111/07/23', '社工員2', '', '111/07/24', 'TEST33', '2022-08-23 22:22:49', '園主任', '2022-08-25 20:07:50', '園主任'),
(14, 111, 8, '日記帳', '111/08/01', '90', '', 'TEST0801內容', '支出', 112, '111/08/01', '社工員2', '', '111/08/01', 'TEST112', '2022-08-23 22:24:08', '園主任', '2022-08-23 22:24:08', ''),
(15, 111, 8, '日記帳', '111/08/05', '81', '', 'test0805內容', '收入', 2156, '111/08/04', '', '', '111/08/05', 'TEST08/05', '2022-08-23 22:25:59', '園主任', '2022-08-25 20:08:03', '園主任'),
(16, 111, 1, '日記帳', '111/01/01', '1', '', 'TEST1', '支出', 450, '111/01/01', '', '', '111/01/01', 'TEST0101', '2022-08-23 22:27:37', '園主任', '2022-08-23 22:59:48', '園主任'),
(17, 111, 4, '日記帳', '111/04/20', '63', '', 'TEST內容0420', '支出', 661, '111/04/20', '社工員2', '', '111/04/23', 'TEST420', '2022-08-23 23:05:45', '園主任', '2022-08-23 23:05:45', ''),
(18, 111, 6, '日記帳', '111/06/26', '67', '', 'TEST06/26內容', '支出', 55, '111/06/26', '社工員1', '', '111/06/28', 'TEST0628REMARK', '2022-08-23 23:07:02', '園主任', '2022-08-25 20:08:10', '園主任'),
(19, 111, 6, '日記帳', '111/06/06', '12334', '', 'tttt66', '收入', 123, '111/06/04', '', '', '111/06/08', 'tteee\n1.aaa', '2022-10-13 15:48:53', '社工組長', '2022-10-13 15:48:53', ''),
(20, 111, 12, '兒少單據', '111/12/08', '', '兒紹', '學校社會工作的意義與功能 學校社會工作意義: 1.學校社會工作是運用社會工作理論與方法，將輔導的觸角延伸學生的家庭與社區，以其了解學生問題的社會因素，並充分利用社會資源來提高輔導效能 的專業。 2.學校社會工作是以社會工作的專業原則，在學校教育體系裡行使社會工作的專業知識、方法與技巧，來解決存在於學校體系、家庭和', '支出', 3500, '', '', '111/12/08', '111/12/08', '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', '2022-12-08 11:49:03', '花花', '2022-12-08 11:49:03', ''),
(21, 111, 12, '轉帳', '111/12/08', '10405249', '', '社會個案工作 社會個案工作-個案管理理論(題庫15) 社會個案工作-個案管理的意義與發展取向(題庫14) 社會個案工作-社會個案工作的專業關係與會談原則(題庫13) 社會個案工作-個案工作結案與追蹤輔導(題庫12) 社會個案工作-社會資源整合(題庫11) 社會個案工作-個案預估與處遇計畫(題庫10) 社會個案工作-蒐集資料與個案紀錄(題庫9) 社會個案工作-任務中心模式(題庫7) 社會個案工作-危機調適模式(題庫7) 社會個案工作-生態系統理論(題庫6) 社會個案工作-行為修正學派(題庫5) 社會個案工作-問題解決學派(題庫5) 社會個案工作-心理暨社會學派(題庫4)', '收入', 200, '111/12/15', '叫http好了', '', '111/12/08', '- 9月 24, 2019\n點此查詢「社會福利行政」其它章節(空大書香園地) 保守福利體制福利國家又稱勞資合作(或社會保險模式)福利國家(Corporatist Welfare Regime) (Social Insurance Model)。在歐陸，由於深受天主教教會與威權主義的保守國家影響下而形成勞資合作(社會保險模式)福利國家，其中，德國俾斯麥首相的德意志福利模式最為大家所熟知。保守福利國家所關切的是秩序與地位的維持穩定不變。為達到這個目標，社會保險基金(老年年金、健康保險、失業保險、意外事故保險)的設立就', '2022-12-08 11:50:02', '花花', '2022-12-08 11:50:02', ''),
(22, 111, 12, '日記帳', '111/12/08', '087786950', '', '五)對話與合作(Dialogue and Collaboration)  人與人之間的互動關係是人類存在的重要因素，透過對話可以 找出、了解服務對象的優勢與感受，同時給予肯定。在 Paulo Freier(1973)根據為受壓迫人群服務的經驗中發現，充滿真誠與愛 的對話可以超越受壓迫人群在過往生活中所產生的障礙，提醒對話 需基於愛、謙虛、人性的基礎，方能建立信任、平等的關係。而合 作指的是在與服務對象工作過程中，並非是要以專家的角色提供答 案，而是要與他們共討協商、討論、確認他們的目標，達到其想要 的美好想望(引自 Saleebey,1997)。  (六)相信案主(Suspension of Disbelief)  Saleebey(1997)指出在專業主義文化中，專業人員本身具有知 識、訊息和想法，這是一種優勢，但也因擁有此優勢容易採用問題 診斷評估的處遇方式，對服務對象的陳述、見解懷有偏見與懷疑。  優勢觀點提醒社會工作者，在服務過程中應避免發生「專業霸權」  的現象，集合個體及社區的力量讓個體的生活能夠更加美好，此美 好為服務對象自己所定義的好美。', '收入', 30001, '111/12/11', '叫http好了', '', '111/12/08', 'cp3sj3xu4g;410 !!0.0.0.0.0.0.0.0.00.0.0..0.0.', '2022-12-08 11:51:27', '花花', '2022-12-08 11:51:47', '花花'),
(23, 111, 12, '日記帳', '111/12/08', '10405249', '', 'test', '支出', 700, '111/12/09', '叫http好了', '', '111/12/08', '..11.1.2.2.12.12.', '2022-12-08 11:52:56', '花花', '2022-12-08 11:52:56', ''),
(24, 111, 12, '日記帳', '111/12/08', '454634586452513', '', '415354354345524', '支出', 1300, '111/12/13', '叫http好了', '', '111/12/08', '.1', '2022-12-08 11:53:36', '花花', '2022-12-08 11:53:36', ''),
(25, 112, 6, '日記帳', '112/06/15', '120', '', '吃的', '支出', 120, '112/06/15', '社工組長', '', '112/06/15', '', '2023-06-15 14:56:23', '社工員1', '2023-06-15 14:56:23', ''),
(26, 112, 6, '日記帳', '112/06/16', '1233', '', '吃', '支出', 100, '112/06/16', '許文瀞', '', '112/06/16', '', '2023-06-16 10:52:14', '社工員1', '2023-06-16 10:52:14', ''),
(27, 112, 6, '日記帳', '112/06/16', '1213', '', '5487436', '支出', 1548, '112/06/16', '執行長', '', '112/06/16', '', '2023-06-16 11:17:50', '社工員1', '2023-06-16 11:17:50', ''),
(28, 112, 7, '日記帳', '112/07/13', '123', '', '5', '支出', 12, '112/07/13', '晏傳恕', '', '112/07/13', '', '2023-07-13 13:51:36', '社工員1', '2023-07-13 13:51:36', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `accounting_record_cash_balance`
--

INSERT INTO `accounting_record_cash_balance` (`Id`, `Year`, `Month`, `Income_sum`, `Cost_sum`, `Last_pb`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(2, 111, 7, 6670, 11365, 3435, '2022-08-23 22:20:06', '園主任', '2022-12-29 12:49:47', '社工員1'),
(3, 111, 8, 2156, 112, -4695, '2022-08-23 22:24:08', '園主任', '2022-12-29 12:49:47', '社工員1'),
(4, 111, 1, 0, 450, 0, '2022-08-23 22:27:37', '園主任', '2022-08-23 22:59:48', '園主任'),
(5, 111, 4, 3200, 2173, 0, '2022-08-23 23:05:45', '園主任', '2022-09-20 18:05:26', '園主任'),
(6, 111, 6, 5002, 1567, 0, '2022-08-23 23:07:02', '園主任', '2022-10-13 15:48:53', '社工組長'),
(7, 111, 12, 30001, 2000, 0, '2022-12-08 11:51:27', '花花', '2022-12-08 11:53:36', '花花'),
(8, 112, 6, 0, 1768, 0, '2023-06-15 14:56:23', '社工員1', '2023-06-16 11:17:50', '社工員1'),
(9, 112, 7, 0, 12, -1768, '2023-07-13 13:51:36', '社工員1', '2023-07-13 13:51:36', '');

-- --------------------------------------------------------

--
-- 資料表結構 `accounting_record_cash_v2`
--

CREATE TABLE `accounting_record_cash_v2` (
  `Id` int(244) NOT NULL,
  `Year` int(100) NOT NULL,
  `Month` int(10) NOT NULL,
  `Form_class` varchar(10) NOT NULL,
  `Invoice_type` varchar(20) NOT NULL,
  `Amount` decimal(10,0) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Files_path` longtext NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `accounting_record_cash_v2`
--

INSERT INTO `accounting_record_cash_v2` (`Id`, `Year`, `Month`, `Form_class`, `Invoice_type`, `Amount`, `Remark`, `Files_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 109, 2, '兒少單據', '收入', 1512, 'test\r\n1512 sads', '[\"../accounting_record_cash/109_data/upload/test10902type0-1.xlsx\",\"../accounting_record_cash/109_data/upload/test10902type0-2.xlsx\"]', '2023-08-22 19:53:13', 'jia', '2023-08-22 19:53:13', ''),
(2, 109, 2, '兒少單據', '支出', 155, 'dass', '[\"../accounting_record_cash/109_data/upload/test10902type0-2 - 複製.xlsx\",\"../accounting_record_cash/109_data/upload/test10902type0-1 - 複製.xlsx\"]', '2023-08-22 20:00:58', 'jia', '2023-08-22 20:00:58', ''),
(3, 109, 3, '日記帳', '收入', 2212, 'dwa asas', '[\"../accounting_record_cash/109_data/upload/test10903type2-1 - 複製.xlsx\",\"../accounting_record_cash/109_data/upload/test10903type2-1.xlsx\"]', '2023-08-22 20:56:51', '園主任', '2023-08-22 20:56:51', ''),
(4, 109, 3, '日記帳', '支出', 555, 'as', '[\"../accounting_record_cash/109_data/upload/test10903type2-22.xlsx\",\"../accounting_record_cash/109_data/upload/test10903type2-22 - 複製.xlsx\"]', '2023-08-22 20:58:01', '園主任', '2023-08-22 20:58:01', ''),
(5, 109, 4, '日記帳', '支出', 215, 'dasd', '[\"../accounting_record_cash/109_data/upload/test10904type2-1.xlsx\",\"../accounting_record_cash/109_data/upload/test10904type2-1 - 複製.xlsx\"]', '2023-08-22 21:00:18', '園主任', '2023-08-22 21:00:18', ''),
(6, 109, 2, '日記帳', '支出', 522, 'test', '[\"../accounting_record_cash/109_data/upload/test10902type2-1.xlsx\"]', '2023-08-23 18:42:42', 'jia', '2023-08-23 18:42:42', ''),
(7, 109, 3, '日記帳', '支出', 121, 'dddd', '[\"../accounting_record_cash/109_data/upload/test10903type2-1 - 複製 - 複製.xlsx\"]', '2023-08-23 18:46:40', 'jia', '2023-08-23 18:46:40', ''),
(8, 109, 4, '日記帳', '收入', 333, 'dasdasd333\r\nasdasdadsada1dsada', '[\"../accounting_record_cash/_data/upload/test10904type2-2.xlsx\",\"../accounting_record_cash/_data/upload/test10904type2-2 - 複製.xlsx\",\"../accounting_record_cash/_data/upload/tesadasdasd.xlsx\"]', '2023-08-23 20:59:48', 'jia', '2023-08-23 22:46:28', 'jia');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `accounting_record_report`
--

INSERT INTO `accounting_record_report` (`Id`, `Report_year`, `Report_type`, `Report_path`, `Report_name`, `Report_title`, `Report_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '110', '季報表', '../accounting_record_report/損益表_1100112.docx', '損益表_1100112.docx', '損益表', '110/01/12', 'TEST備註', '2022-10-05 17:50:45', '社工員1', '2022-10-05 17:50:45', ''),
(2, '111', '年報表', '../accounting_record_report/資產負債表_1110105.docx', '資產負債表_1110105.docx', '資產負債表', '111/01/05', 'test資產負債表', '2022-10-05 17:56:13', '社工員1', '2022-10-05 17:56:13', ''),
(3, '110', '月報表', '../accounting_record_report/text報表_1100102.docx', 'text報表_1100102.docx', 'text報表', '110/01/02', 'test', '2022-10-05 19:09:36', '社工員1', '2022-10-05 19:09:36', ''),
(4, '109', '月報表', '../accounting_record_report/test2報表_1090315.docx', 'test2報表_1090315.docx', 'test2報表', '109/03/15', 'test0314ssdsd', '2022-10-05 19:11:37', '社工員1', '2022-10-15 19:57:08', 'jia'),
(5, '111', '月報表', '../accounting_record_report/個案管理系統行政管理1012.docx', '個案管理系統行政管理1012.docx', '1208', '111/12/08', '1208', '2022-12-08 11:54:43', '花花', '2022-12-08 11:54:43', ''),
(6, '111', '季報表', '../accounting_record_report/個案管理系統測試20221011(05).docx', '個案管理系統測試20221011(05).docx', '1208', '111/12/08', '1208', '2022-12-08 11:55:12', '花花', '2022-12-08 11:55:12', ''),
(7, '111', '上半年報表', '../accounting_record_report/個案管理系統測試20221025(03).docx', '個案管理系統測試20221025(03).docx', '1208', '111/12/08', '0111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', '2022-12-08 11:55:29', '花花', '2022-12-08 11:55:29', ''),
(8, '111', '下半年報表', '../accounting_record_report/個案管理系統行政管理1012.docx', '個案管理系統行政管理1012.docx', '12081208', '111/12/08', '8', '2022-12-08 11:55:43', '花花', '2022-12-08 11:57:13', '花花'),
(9, '111', '年報表', '../accounting_record_report/個案管理系統行政管理1012.docx', '個案管理系統行政管理1012.docx', '年年有餘', '111/12/08', '555', '2022-12-08 11:56:06', '花花', '2022-12-08 11:56:06', ''),
(10, '111', '現金報表', '../accounting_record_report/個案管理系統測試20221011(05).docx', '個案管理系統測試20221011(05).docx', '現金ㄟ報表', '111/12/08', '讚', '2022-12-08 11:56:37', '花花', '2022-12-08 11:56:37', ''),
(11, '111', '記帳士報表', '../accounting_record_report/個案管理系統行政管理1012.docx', '個案管理系統行政管理1012.docx', '1208', '111/12/08', '1208', '2022-12-08 11:56:53', '花花', '2022-12-08 11:56:53', ''),
(13, '111', '年報表', '../accounting_record_report/plan_doc1.docx', 'plan_doc1.docx', 'plan', '111/12/16', '', '2022-12-29 12:51:02', '社工員1', '2022-12-29 12:51:02', '');

-- --------------------------------------------------------

--
-- 資料表結構 `announcement`
--

CREATE TABLE `announcement` (
  `Id` int(244) NOT NULL,
  `title` varchar(500) NOT NULL,
  `authority` int(20) NOT NULL,
  `publisher` varchar(50) NOT NULL,
  `datetime` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `announcement`
--

INSERT INTO `announcement` (`Id`, `title`, `authority`, `publisher`, `datetime`) VALUES
(1, 'testaaaaaa', 7, '社工組長', '2023-09-12'),
(2, 'asdadasd', 3, '社工組長', '2023-09-12'),
(3, '9月22日-團督會議', 3, '社工組長', '2023-09-16'),
(4, 'test', 3, '園主任', '2023-10-02'),
(5, 'teasda', 4, '園主任', '2023-10-02'),
(6, 'aaaaaaaaa', 7, '園主任', '2023-10-02'),
(7, 'test公告1003', 5, '園主任', '2023-10-03'),
(8, 'test公告1003auth4', 4, 'jia', '2023-10-03');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(36, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"ttttt理監事會記錄標題1015\"},{\"name\":\"upload_rec_date\",\"value\":\"111年10月15日\"},{\"name\":\"upload_rec_remark\",\"value\":\"adsada44444;;備註;;備註\"},{\"name\":\"upload_rec_supervise\",\"value\":\"園主任\"},{\"name\":\"customFile1\",\"value\":\"test.bmp\"}]\"', '../board_supervisor/upload/test.bmp', '園主任', '', '', '0000-00-00 00:00:00', '2022-10-15 23:17:58', 'jia', '0000-00-00 00:00:00', ''),
(37, '111', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次理監事會\"},{\"name\":\"meeting_date\",\"value\":\"111年12月06日\"},{\"name\":\"meeting_time\",\"value\":\"07:13\"},{\"name\":\"place\",\"value\":\"擠不出防曬乳的空罐子裡面\"},{\"name\":\"ceo_name\",\"value\":\"跳跳虎\"},{\"name\":\"attendees\",\"value\":\"櫻桃、水蜜桃、阿桃、逃之夭夭\"},{\"name\":\"absent\",\"value\":\"全球暖化、地球暖化、全球溫度上升造成生態環境blablabla\"},{\"name\":\"record\",\"value\":\"瑪麗\"},{\"name\":\"discuss\",\"value\":\"提問：瑪麗亞凱莉每年聖誕節都賺翻，要如何向她學習\"},{\"name\":\"motion\",\"value\":\"我覺得我們應該多吃蔬菜、開會的時候也請不要吃火鍋，而且你還加芋頭在裡面\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '../board_supervisor/signature/1680176391.png', 'ttt33', '2023-03-30 19:39:51', '2022-12-06 17:23:42', '花花', '0000-00-00 00:00:00', ''),
(38, '109', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次理監事會不過現在是17點26分\"},{\"name\":\"meeting_date\",\"value\":\"109年12月30日\"},{\"name\":\"meeting_time\",\"value\":\"22:31\"},{\"name\":\"place\",\"value\":\"中午在販賣機買的20元可樂丟的那個垃圾桶的前面那間麵包店\"},{\"name\":\"ceo_name\",\"value\":\"我快下班了主席\"},{\"name\":\"attendees\",\"value\":\"時鐘、分針、秒針\"},{\"name\":\"absent\",\"value\":\"休假、加薪\"},{\"name\":\"record\",\"value\":\"鑰匙\"},{\"name\":\"discuss\",\"value\":\"開會請不要在大太陽底下的龜殼上開會，謝謝。\"},{\"name\":\"motion\",\"value\":\"今天沒有擦防曬乳，黑掉了\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-06 17:28:46', '花花', '0000-00-00 00:00:00', ''),
(39, '112', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第五屆第十五次\"},{\"name\":\"upload_rec_date\",\"value\":\"112年06月16日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"upload_rec_supervise\",\"value\":\"社工員2\"},{\"name\":\"customFile1\",\"value\":\"1bZYPyDJiiTVVstmxuFXrq.jpg\"}]\"', '../board_supervisor/upload/1bZYPyDJiiTVVstmxuFXrq.jpg', '社工員2', '', '', '0000-00-00 00:00:00', '2023-06-16 10:46:19', '社工員1', '0000-00-00 00:00:00', ''),
(40, '112', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"第五屆第四促\"},{\"name\":\"upload_rec_date\",\"value\":\"112年06月16日\"},{\"name\":\"upload_rec_remark\",\"value\":\"\"},{\"name\":\"upload_rec_supervise\",\"value\":\"社工員2\"},{\"name\":\"customFile1\",\"value\":\"倉庫食物.xlsx\"}]\"', '../board_supervisor/upload/倉庫食物.xlsx', '社工員2', '', '', '0000-00-00 00:00:00', '2023-06-16 10:47:08', '社工員1', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `board_supervisor_v2`
--

CREATE TABLE `board_supervisor_v2` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `Agenda_file_path` longtext NOT NULL,
  `Rec_file_path` longtext NOT NULL,
  `Director` varchar(300) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(300) NOT NULL,
  `Supervise` varchar(300) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `board_supervisor_v2`
--

INSERT INTO `board_supervisor_v2` (`Id`, `Year`, `record_content`, `upload_content`, `Agenda_file_path`, `Rec_file_path`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test理監事會記錄議程test25\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年08月25日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"test;;議程test25\"},{\"name\":\"upload_title_name\",\"value\":\"test理監事會記錄標題825\"},{\"name\":\"upload_rec_date\",\"value\":\"112年08月25日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test;;理監事會記錄;;825\"},{\"name\":\"upload_rec_director\",\"value\":\"園主任\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '[\"../board_supervisor/112_0_data/upload/test825-1.docx\",\"../board_supervisor/112_0_data/upload/test825-2.docx\",\"../board_supervisor/112_0_data/upload/test825-1 - 複製.docx\"]', '[\"../board_supervisor/112_0_data/upload/rec_test825-1.docx\",\"../board_supervisor/112_0_data/upload/rec_test825-1 - 複製.docx\",\"../board_supervisor/112_0_data/upload/rec_test825-2.docx\"]', '園主任', '', '', '', '執行長', '', '', '', '2023-08-30 21:36:02', '園主任', '0000-00-00 00:00:00', ''),
(2, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會議章程0902\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年09月02日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"0902\"},{\"name\":\"upload_title_name\",\"value\":\"test理監事會記錄0902\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月02日\"},{\"name\":\"upload_rec_remark\",\"value\":\"dwa0902\"},{\"name\":\"upload_rec_director\",\"value\":\"社工組長\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '', '', '社工組長', '', '', '', '執行長', '', '', '', '2023-09-25 22:29:35', 'jia', '0000-00-00 00:00:00', ''),
(3, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"TT會議章程0822\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年08月22日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"TTASSD0822\"},{\"name\":\"upload_title_name\",\"value\":\"TT理監事會記錄0901\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月01日\"},{\"name\":\"upload_rec_remark\",\"value\":\"TT0901\"},{\"name\":\"director\",\"value\":\"社工組長\"},{\"name\":\"supervise\",\"value\":\"執行長\"}]\"', '', '[\"../board_supervisor/112_3_data/upload/tEST0901.docx\"]', '社工組長', '', '', '', '執行長', '', '', '', '2023-09-25 22:42:49', 'jia', '2023-09-25 22:45:58', 'jia'),
(4, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會議章程標題1006\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年10月06日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"test\"},{\"name\":\"upload_title_name\",\"value\":\"test理監事會記錄標題1006\"},{\"name\":\"upload_rec_date\",\"value\":\"112年10月06日\"},{\"name\":\"upload_rec_remark\",\"value\":\"trdasd\"},{\"name\":\"upload_rec_director\",\"value\":\"社工組長\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '', '', '社工組長', '', '', '', '執行長', '', '', '', '2023-10-02 18:17:42', 'jia', '0000-00-00 00:00:00', '');

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
  `backgroundColor` varchar(1000) NOT NULL,
  `publisher` varchar(10) NOT NULL,
  `url` varchar(100) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `database_name` varchar(1000) NOT NULL,
  `db_id` varchar(2000) NOT NULL,
  `authority` varchar(1000) NOT NULL,
  `authority_num` int(244) NOT NULL DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `calendar`
--

INSERT INTO `calendar` (`id`, `title`, `description`, `start`, `end`, `backgroundColor`, `publisher`, `url`, `date`, `database_name`, `db_id`, `authority`, `authority_num`) VALUES
(3, 'bas', 'ttt', '2023-10-11 12:00', '2023-10-11 13:00', '', '園主任', '', '2023-10-02 16:28:28', '', '', '園主任', 100),
(4, '車輛外出登記-jia', '借出車輛：FAS-0982，地點：test高雄，外出時間：16:25', '2023-10-02 16:20', '2023-10-02 17:45', '#D9006C	', 'jia', '', '2023-10-02 16:39:41', 'vehicle_retain', '11', 'all', 100),
(5, '車輛外出登記-jia', '借出車輛：DAW-0921，地點：ttt高雄，外出時間：17:00', '2023-10-02 17:00', '2023-10-02 00:00', '#D9006C	', 'jia', '', '2023-10-02 16:55:34', 'vehicle_retain', '12', 'all', 100),
(6, '車輛外出登記-jia', '借出車輛：TES交通工具，地點：P，外出時間：14:25', '2023-10-02 14:25', '2023-10-02 15:20', '#D9006C	', 'jia', '', '2023-10-02 16:57:28', 'vehicle_retain', '13', 'all', 100),
(7, '社工訪視-test社工訪視', '標題：test社工訪視，時間：2023-10-02 14:05，主要承辦人員：社工員1', '2023-10-02 14:05', '2023-10-02 15:15', '#02C874', 'jia', '', '2023-10-02 17:01:53', 'visit_index', '4', 'all', 100),
(8, '請假：jia 事假', 'day_off_detail.php?day_off_id=3&resume_id=1', '2023-10-06 08:30', '2023-10-06 11:00', '#FFA042', 'jia', '', '2023-10-02 17:37:44', 'day_off', '3', 'jia', 100),
(9, '團督記錄簽核：test團督記錄標題aab', 'supervisor_record_detail_v2.php?year=112&id=5&sr_id=5&rec_type=upload', '2023-10-05 00:00', '2023-10-05 00:00', 'purple', 'jia', '', '2023-10-02 18:14:38', 'supervisor_record', '5', '社工組長、執行長', 100),
(10, '理監事會記錄簽核：test理監事會記錄標題1006', 'board_supervisor_detail_v2.php?year=112&id=4&bs_id=4&rec_type=upload', '2023-10-06 00:00', '2023-10-06 00:00', 'purple', 'jia', '', '2023-10-02 18:17:42', 'board_supervisor', '4', '社工組長、執行長', 100),
(11, '會員大會記錄簽核：會員大會記錄標題1011', 'members_assemble_detail_v2.php?year=112&id=3&ma_id=3&rec_type=upload', '2023-10-11 00:00', '2023-10-11 00:00', 'purple', 'jia', '', '2023-10-02 18:19:21', 'members_assemble', '3', '園主任、執行長', 100),
(12, '車輛外出登記-園主任', '借出車輛：adasdad，地點：adasdsa，外出時間：12:00', '2023-10-02 12:00', '2023-10-02 00:00', '#D9006C	', '園主任', '', '2023-10-02 18:24:04', 'vehicle_retain', '14', 'all', 100),
(14, '社工訪視-test標題社工訪視快樂聯盟', '標題：test標題社工訪視快樂聯盟，時間：2023-10-02 17:05，主要承辦人員：社工員1', '2023-10-02 17:05', '0000-00-00 00:00', '#02C874', 'jia', '', '2023-10-02 20:02:22', 'visit_index', '5', 'all', 100),
(15, 'testaaa', 'bbbb', '2023-10-04 13:25', '2023-10-04 14:25', '', 'jia', '', '2023-10-02 20:10:14', '', '', 'jia', 100),
(17, 'test公告1003', '標題：test公告1003，權限：5，發佈時間：2023/10/03 12:47:08', '2023-10-03 18:47', '2023-10-03 18:47', 'red', '園主任', '', '2023-10-03 18:47:08', 'announcement', '7', '', 5),
(18, 'test公告1003auth4', '標題：test公告1003auth4，權限：4，發佈時間：2023-10-03 18:00', '2023-10-03 18:00', '2023-10-03 18:00', 'red', 'jia', '', '2023-10-03 18:53:36', 'announcement', '8', '', 4),
(19, 'test', 'asdassd', '2023-10-05 12:00', '2023-10-05 13:00', '', '園主任', '', '2023-10-03 18:54:24', '', '', '園主任', 100);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(31, '2', 'RE112', 4, '2022-08-08', 'TEST0808', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員2', '2022-10-24 10:37:21', '園主任', '2022-10-24 10:37:21', ''),
(32, '7', '123', 27, '2022-10-24', '瓜', 'A', '未結案', 0, 0, 0, 1, 0, 0, '丘培民', '2022-10-24 10:38:02', 'jia', '2022-10-24 10:38:02', ''),
(33, '8', '440', 33, '2022-10-01', '測O試', 'B', '未結案', 0, 0, 0, 1, 0, 0, 'test001', '2022-10-25 11:35:52', '花花', '2022-10-25 11:35:52', ''),
(34, '8', '440', 33, '2022-10-01', '測O試', 'B', '未結案', 0, 0, 0, 0, 1, 0, 'test001', '2022-10-25 11:39:40', '花花', '2022-10-25 11:39:40', ''),
(35, '8', '440', 34, '2022-10-01', '測O試', 'B', '未結案', 0, 0, 1, 0, 0, 0, 'test001', '2022-10-25 11:44:06', '花花', '2022-10-25 11:44:06', ''),
(36, '8', '440', 39, '2022-10-01', '測O試', 'B', '未結案', 0, 0, 0, 0, 0, 1, 'test001', '2022-10-25 14:02:24', '花花', '2022-10-25 14:02:24', ''),
(37, '10', 'RE877', 50, '2022-12-09', '何竹田', 'A', '未結案', 0, 0, 1, 0, 0, 0, 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:19:33', '花花', '2022-12-09 10:19:33', ''),
(38, '11', '441', 52, '2022-12-09', '立可貸', 'C', '未結案', 0, 0, 0, 1, 0, 0, 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:23:23', '花花', '2022-12-09 10:23:23', ''),
(39, '11', '441', 52, '2022-12-09', '立可貸', 'C', '未結案', 0, 0, 0, 0, 1, 0, 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:23:59', '花花', '2022-12-09 10:23:59', ''),
(40, '11', '441', 53, '2022-12-09', '立可貸', 'C', '未結案', 0, 0, 1, 0, 0, 0, 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:26:55', '花花', '2022-12-09 10:26:55', ''),
(41, '11', '441', 54, '2022-12-09', '立可貸', 'C', '未結案', 0, 0, 1, 0, 0, 0, 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:27:41', '花花', '2022-12-09 10:27:41', ''),
(42, '10', 'RE877', 59, '2022-12-09', '何竹田', 'A', '未結案', 0, 0, 0, 0, 0, 1, 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:57:25', '花花', '2022-12-09 14:57:25', ''),
(43, '6', 'RE111', 69, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 1, 0, '社工員1', '2023-06-16 11:09:43', '花花', '2023-06-16 11:09:43', ''),
(44, '12', '442', 71, '2023-07-20', 'wu小姐', 'B', '未結案', 0, 1, 0, 0, 0, 0, '花花', '2023-07-20 11:04:54', '花花', '2023-07-20 11:04:54', ''),
(45, '12', '442', 77, '2023-07-20', 'wu小姐', 'B', '未結案', 0, 0, 0, 0, 0, 1, '花花', '2023-07-20 11:45:45', '花花', '2023-07-20 11:45:45', ''),
(46, '6', 'RE111', 2, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2023-09-19 23:23:12', '社工組長', '2023-09-19 23:23:12', ''),
(47, '6', 'RE111', 2, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 1, 0, '社工員1', '2023-09-19 23:23:33', '社工組長', '2023-09-19 23:23:33', ''),
(48, '6', 'RE111', 8, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 0, 0, 1, '社工員1', '2023-09-19 23:30:45', '社工組長', '2023-09-19 23:30:45', ''),
(49, '6', 'RE111', 2, '2022-08-08', 'test', 'B', '未結案', 0, 0, 0, 1, 0, 0, '社工員1', '2023-09-20 00:09:43', '社工組長', '2023-09-20 00:09:43', '');

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
  `Supervise1` varchar(30) NOT NULL,
  `Supervise1_signature` text NOT NULL,
  `Supervise1_sign_msg` text NOT NULL,
  `Supervise1_sign_time` datetime NOT NULL,
  `Supervise2` varchar(30) NOT NULL,
  `Supervise2_signature` text NOT NULL,
  `Supervise2_sign_msg` text NOT NULL,
  `Supervise2_sign_time` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `closed`
--

INSERT INTO `closed` (`Id`, `Open_case_seqid`, `Open_case_id`, `Closed_id`, `Open_date`, `Closed_date`, `Name`, `Gender`, `Birth`, `File_name`, `Main_issue`, `Minor_issue`, `Intervention`, `Evaluation`, `Closed_reason`, `Closed_result`, `Remark`, `Assign`, `Supervise1`, `Supervise1_signature`, `Supervise1_sign_msg`, `Supervise1_sign_time`, `Supervise2`, `Supervise2_signature`, `Supervise2_sign_msg`, `Supervise2_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 0, 're211', '671', '2021-01-20', '2021-12-25', 'Allen', '男', '', '', '主要問題test2', '', '問題處遇test1', '', 'othertest結案原因123', '', '備註test461', '社工員1', '', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '2022-04-06 18:01:44', '社工員1', '2022-04-06 19:50:28', '園主任'),
(2, 0, 're161', '658', '2021-12-01', '2022-09-13', 'Amy', '女', '', '', '主要問題test111', '', '問題處遇test121', '', '失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）', '', '備註test46123', '社工員2', '園主任', '../signature/1651745907.png', 'TEST王小七', '2022-05-05 18:18:27', '', '', '', '0000-00-00 00:00:00', '2022-04-06 18:01:44', '社工員2', '2022-10-13 19:00:11', '社工組長'),
(9, 0, '6', '672', '2021-10-11', '2021-12-16', '黃QQ', '男', '', '', '診斷問題主要問題test', '', 'TEST問題處遇QQ1', '', '達到目標，已無需要在服務', '', 'test結案原因/備註QQ', '社工員1', '園主任', '../signature/1657023532.png', 'test主任', '2022-07-05 20:18:52', '', '', '', '0000-00-00 00:00:00', '2022-07-05 19:14:38', '園主任', '2022-07-05 19:16:10', '園主任'),
(11, 0, '', '699', '2022-07-02', '2022-07-01', 'testaaa', '女', '', '', 'test主要問題', '', '問題處遇test', '', 'othertest其他結案原因', '', '備註test', '社工員2', '', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '2022-07-05 20:43:40', '園主任', '2022-07-05 20:43:40', ''),
(12, 1, 'RE111', '700', '2022-08-08', '2022-08-08', 'test', '男', '', '', 'test診斷問題主要問題', '', '問題處遇TTT', '', '達到目標，已無需要在服務', '', 'test結案原因/備註test', '園主任', '', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '2022-08-08 21:10:18', '園主任', '2022-08-08 21:10:18', ''),
(14, 0, 'dqdq111', '6588', '2020-02-15', '2020-10-14', 'testab', '其他', '', '', 'ttt主要問題\n主要問題', '', '問題處遇test\ntest', '', 'other結案原因test', '', 'tttt備註\ndasdad', '社工員2', '', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '2022-10-15 21:17:31', 'jia', '2022-10-15 21:17:31', ''),
(15, 6, 'RE111', 'RE111', '2022-08-08', '2022-10-24', 'test', '男', '1991-02-03', '1.xls', 'test診斷問題主要問題', 'test診斷問題次要問題', '一、aaaa1\n二、aaaaaa\n三、aaaaaaaAA', '一、-(已緩解)\n\n二、-(已緩解)\n\n三、-(                    )\n四、量表評量成效\n1.	憂鬱程度:\n重點文字說明:\n2.	BSRS-5\n重點文字說明:\n3.	生活品質量表：\n重點文字說明:\n4.	家庭關係量表：\n重點文字說明:\n5.	就業輔導評估 □成功就業□失業■就業輔導中□其他說明\n6.	社會適應程度評估 □適應良好■佳□尚可□不佳\n7.	整體成效說明：ttttttttttt', '達到目標，已無需要在服務', '1111符合結案', 'test結案原因/備註test', '社工員1', '社工組長', '../signature/1666705015.png', 'test\n社工組長1025', '2022-10-25 21:36:55', '', '', '', '0000-00-00 00:00:00', '2022-10-25 20:02:03', '社工員1', '2022-10-25 21:40:23', '社工組長'),
(16, 9, 'RE115', 'RE115', '2022-12-09', '2022-12-09', '十二月零九日', '男', '1980-02-12', '', '1', '2', '一、333\n二、222\n三、222', '一、-(已緩312321解)\n\n二、-(已緩2131解)\n\n三、-(           312         )\n四、量表評量成效\n1.	憂鬱程度:\n重點文字說明:\n2.	BSRS-5\n重點文字說明:\n3.	生活品質量表：\n重點文字說明:\n4.	家庭關係量表：\n重點文字說明:\n5.	就業輔導評估 □成功就業□失業□就業輔導中□其他說明\n6.	社會適應程度評估 □適應良好□佳□尚可□不佳\n7.	整體成效說明：', '個案者死亡', '00', '00', 'ㄓㄜㄒㄧㄢ', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '2022-12-09 10:11:21', '花花', '2022-12-09 10:11:21', ''),
(17, 6, 'RE111', 'RE111', '2022-08-08', '2023-06-05', 'test', '男', '1991-02-03', '', 'test診斷問題主要問題', 'test次要問題	', '一、1\n二、2三、3', '一、-(已緩解)\n\n二、-(已緩解)\n\n三、-(                    )\n四、量表評量成效\n1.	憂鬱程度:\n重點文字說明:\n2.	BSRS-5\n重點文字說明:\n3.	生活品質量表：\n重點文字說明:\n4.	家庭關係量表：\n重點文字說明:\n5.	就業輔導評估 □成功就業□失業■就業輔導中□其他說明\n6.	社會適應程度評估 □適應良好■佳□尚可□不佳\n7.	整體成效說明：', '達到目標，已無需要在服務', 'test達到目標，已無需要在服務', 'test結案原因/備註test', 'jia', '園主任', '', '', '0000-00-00 00:00:00', '執行長', '../signature/1685965641.png', 'test65', '2023-06-05 19:47:21', '2023-06-05 19:30:22', 'jia', '2023-06-05 19:30:22', ''),
(18, 8, '440', '440', '2022-10-01', '2023-07-20', '測O試', '女', '1974-04-21', '', '6', '7', '一、\n二、\n三、', '一、-(已緩解)\n\n二、-(已緩解)\n\n三、-(                    )\n四、量表評量成效\n1.	憂鬱程度:\n重點文字說明:\n2.	BSRS-5\n重點文字說明:\n3.	生活品質量表：\n重點文字說明:\n4.	家庭關係量表：\n重點文字說明:\n5.	就業輔導評估 □成功就業□失業■就業輔導中□其他說明\n6.	社會適應程度評估 □適應良好□佳□尚可□不佳\n7.	整體成效說明：', '再次入監無法合作', '4.再次入監無法合作', '', '花花', '社工員1', '', '', '0000-00-00 00:00:00', '社工員2', '', '', '0000-00-00 00:00:00', '2023-07-20 14:40:12', '花花', '2023-07-20 14:40:12', '');

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
  `M_type` varchar(100) NOT NULL,
  `M_addiction` varchar(200) NOT NULL,
  `Age` varchar(10) NOT NULL,
  `A_detail` varchar(20) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `L_detail` varchar(30) NOT NULL,
  `Info_Name` varchar(30) NOT NULL,
  `Relationship_detail` varchar(20) NOT NULL,
  `R_detail` varchar(20) NOT NULL,
  `R_phone` varchar(500) NOT NULL,
  `Referral` varchar(50) NOT NULL,
  `Referral_detail` varchar(20) NOT NULL,
  `Referral_phone` varchar(500) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `consult`
--

INSERT INTO `consult` (`Id`, `Phone_id`, `Call_datetime`, `Way`, `Way_detail`, `Name`, `Gender`, `Object_type`, `Addiction`, `M_type`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, `Info_Name`, `Relationship_detail`, `R_detail`, `R_phone`, `Referral`, `Referral_detail`, `Referral_phone`, `Referral_name`, `Know_from`, `Know_from_detail`, `Eligible`, `Assign`, `Phone_note`, `Count`, `Location`, `Location_detail`, `Start_date`, `End_date`, `Start_time`, `End_time`, `One_user_name`, `Two_user_name`, `Remark`, `Is_firstadd`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(5, '1', '2021-09-16 09:00:00', '面訪', '社區', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', '', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'test0125', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 17:57:53', '園主任', '2022-01-25 17:57:53', ''),
(6, '2', '2021-09-25 14:30:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'yukia男友fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2021-10-08 00:00:00', '園主任', '2023-09-27 00:19:15', '園主任'),
(7, '2', '0000-00-00 00:00:00', '面訪', '家訪', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '', 'yukiad家', '家訪', '2021-09-26', '2021-09-26', '14:00:00', '15:00:00', '社工員1', '社工組長', 'test', 0, '2021-10-08 00:00:00', '園主任', '2023-09-27 00:19:15', '園主任'),
(8, '2', '2021-10-08 09:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2021-10-08 00:00:00', '園主任', '2023-09-27 13:47:15', '園主任'),
(9, '2', '2021-10-14 00:00:00', '面訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '', '屏東縣公所test', '其他::屏東縣公所', '2021-10-14', '2021-10-14', '10:30:00', '12:00:00', '社工員2', '社工員1', 'TEST\naaaabbb', 0, '2022-01-25 18:34:36', '園主任', '2023-09-27 13:40:55', '園主任'),
(10, '2', '2021-10-11 00:00:00', '面訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '男友', '配偶', '07123912', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1', '', 'yukia男友家', '家訪', '2021-10-11', '2021-10-11', '12:00:00', '13:00:00', '社工員1', '社工員2', 'TEST', 0, '2022-01-25 18:35:40', '園主任', '2023-09-27 13:46:52', '園主任'),
(11, '2', '2021-09-29 08:30:00', '電訪', '', 'yukia', '女', '愛滋感染者', '海洛因、安非他命、大麻', '其他::其他方式', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'fein', '同居人', '配偶', '0712391233', '自行打電話求助', '自行求助', '', 'yukia男友fein', '田中教會', '教會', '不明', '社工組長', 'testtest1\n\naab', '6', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 18:36:37', '園主任', '2023-09-27 13:33:08', '園主任'),
(12, '1', '0000-00-00 00:00:00', '面訪', '家訪', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', '', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen父親', 'Allen父親', '父母', '09852154', '矯正署', '矯正機關', '', '', '屏安醫院', '醫院', '不明', '社工員2', '', '', 'Allen家裡', '家訪', '2021-09-17', '2021-09-17', '08:00:00', '09:00:00', '社工員2', '社工組長', 'TEST123', 0, '2022-01-25 19:16:02', '園主任', '2022-01-25 19:16:25', '園主任'),
(13, '1', '2021-10-05 00:00:00', '電訪', '', 'Allen', '男', '愛滋感染者', '古柯鹼、安非他命、K他命', '', 'K他命', '36', '30-39歲', '新北市林口區公園路561號', '北部', 'Allen', '本人', '', '09853357', '矯正署', '矯正機關', '123', '矯正署人員', '屏安醫院', '醫院', '不明', '社工員2', 'TEST', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 19:17:14', '園主任', '2022-01-25 19:17:14', ''),
(14, '3', '2021-12-16 10:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:02:17', '園主任', '2022-04-15 19:26:41', '園主任'),
(15, '3', '2021-12-17 00:00:00', '電訪', '', 'Deny', '其他', '兒少', '大麻、FM2藥丸', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Denyfa', 'deny父親', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員2', 'TEST', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-01-25 20:06:35', '園主任', '2022-01-25 20:06:35', ''),
(16, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '大麻、FM2藥丸', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'denyfa', 'deny父親', '父母', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '八德醫院', '醫院', '不明', '社工員1', '', '', '社區', '社區', '2021-12-18', '2021-12-18', '15:00:00', '16:00:00', '社工員2', '社工員1', 'TEST', 0, '2022-01-25 20:07:36', '園主任', '2022-01-25 20:07:36', ''),
(17, '4', '2021-12-29 16:10:00', '電訪', '', 'Timmy', '男', '家庭', '酒精', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', 'test', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-01-25 20:12:19', '園主任', '2023-09-27 20:21:01', '園主任'),
(18, '4', '2021-09-22 00:00:00', '電訪', '', 'Timmy', '男', '家庭', '', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', 'test', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:17:02', '園主任', '2023-09-27 20:21:01', '園主任'),
(19, '4', '0000-00-00 00:00:00', '面訪', '家訪', 'Timmy', '男', '家庭', '', '', '酒精', '25', '20-29歲', '屏東縣屏東市自由路1162號', '南部', 'Timmy', '本人', '', '0982136831', '', '', '', '', '屏東教會', '教會', '', '社工員2', '', '', 'test家訪', '家訪', '2021-11-07', '2021-11-07', '12:00:00', '13:00:00', '社工員1', '', 'test備註	備註', 0, '2022-04-15 19:18:08', '園主任', '2023-09-27 20:21:01', '園主任'),
(20, '3', '2021-11-21 00:00:00', '電訪', '', 'Deny', '其他', '兒少', '', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '0376351831', '張醫師', '', '', '不明', '社工員1', 'test通話內容	', '4', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-04-15 19:27:30', '園主任', '2022-04-15 19:27:30', ''),
(21, '3', '0000-00-00 00:00:00', '面訪', '社區', 'Deny', '其他', '兒少', '', '', '大麻', '29', '20-29歲', '臺北市松山區八德路781號', '北部', 'Deny', '本人', '', '09852233', '八德醫院', '醫院', '', '', '', '', '不明', '社工員1', '', '', 'test社區', '社區', '2021-11-25', '2021-11-25', '10:00:00', '11:00:00', '社工員2', '', 'test備註	', 0, '2022-04-15 19:28:08', '園主任', '2022-04-15 19:28:08', ''),
(22, '5', '2021-10-13 10:15:00', '電訪', '', '黃QQ', '其他', '愛滋感染者', '', '其他::其他方式', '海洛因、搖頭丸、K他命、檳榔、精神藥物、其他::其他物質', '48', '40-49歲', '屏東縣屏東市自由路6756號', '南部', '黃QQ的阿姨', '阿姨', '親戚', '03585421', '轉介來源屏東某鄉鎮市社區', '社區', '0628341234', 'test轉介人', '', '', '不明', '社工員1', 'test諮詢內容	諮詢內容aaa', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:44:17', '園主任', '2023-09-26 23:46:51', '園主任'),
(23, '6', '2021-09-05 10:00:00', '電訪', '', 'test', '其他', '一般藥癮者', '', '', '古柯鹼、搖頭丸、K他命、FM2藥丸、酒精、強力膠、檳榔、其他::其他藥物', '18', '10-19歲', '屏東縣內埔鄉東寧村勝利路12666號', '南部', 'test', 'test', '本人', '011111111', '', '', '', '', '', '', '不明', '社工組長', 'test諮詢內容	諮詢內容	諮詢內容	諮詢內容1111', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-04-15 19:56:23', '園主任', '2022-04-15 19:56:23', ''),
(24, '7', '2022-10-25 08:40:00', '電訪', '監所', '陳O玲', '女', '愛滋感染者', '', '', '安非他命、強力膠、精神藥物、其他::測試/不願透漏', '41', '40-49歲', '內埔鄉', '南部', '吳O哲', '助人者與受助者', '社工', '', '高女監觀護人個管師自行求助', '矯正機關', '077920586', '觀護人/針O具先生', '', '', '否', 'test001', '簡短介入測試，使用物質不願透漏，第二次測試、第三次', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-10-25 09:52:09', '花花', '2022-10-25 09:57:29', '花花'),
(25, '8', '2022-10-25 10:55:00', '面訪', '監所', '陳O玲', '女', '愛滋感染者', '', '', '菸', '41', '50-59歲', '內埔', '中部', '', '', '', '', '', '', '', '', '', '', '不明', 'test001', '測試，編號7，test', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-10-25 09:59:16', '花花', '2022-10-25 16:23:11', '花花'),
(26, '8', '0000-00-00 00:00:00', '面訪', '監所', '陳O玲', '女', '愛滋感染者', '', '', '古柯鹼、大麻、菸', '41', '50-59歲', '內埔', '中部', '', '', '', '', '', '', '', '', '', '', '不明', 'test001', '', '', '面訪', '監所', '2022-10-26', '2022-10-26', '12:00:00', '13:00:00', 'test001', 'test001', '1111', 0, '2022-10-25 10:00:44', '花花', '2022-10-25 10:00:44', ''),
(27, '8', '2022-10-29 00:00:00', '電訪', '', '陳O玲', '女', '愛滋感染者', '', '', '古柯鹼', '41', '50-59歲', '內埔', '中部', '不知道', '0', '', '0000000010', '', '', '', '', '', '', '不明', 'test001', '一二三...四五!!..........一，一二', '3', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-10-25 10:02:17', '花花', '2022-10-25 10:02:17', ''),
(28, '9', '2022-10-25 10:14:00', '電訪', '監所', '測O試', '男', '兒少', '', '其他::其他方式1、其他方式2', 'K他命、FM2藥丸、檳榔、其他::o、其他藥物、test藥物', '52', '50-59歲', '台北101', '東部', '沒O有', '沒O有', '社工', '', '社工發現', '', '', '社工員/不知道', '', '', '不明', 'test001', '今天天氣很好', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-10-25 10:43:10', '花花', '2023-09-27 20:47:22', '園主任'),
(29, '9', '2022-10-31 00:00:00', '電訪', '', '測O試', '男', '兒少', '', '其他::其他方式1、其他方式2', 'K他命、FM2藥丸、檳榔、其他::o、其他藥物、test藥物', '52', '50-59歲', '台北101', '東部', '1111', '1111', '', '1111', '社工發現', '', '', '社工員/不知道', '', '', '不明', 'test001', '1111', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-10-25 10:44:02', '花花', '2023-09-27 20:47:22', '園主任'),
(30, '9', '0000-00-00 00:00:00', '面訪', '監所', '測O試', '男', '兒少', '', '其他::其他方式1、其他方式2', 'K他命、FM2藥丸、檳榔、其他::o、其他藥物、test藥物', '52', '50-59歲', '台北101', '東部', '沒O有', '沒O有', '社工', '', '社工發現', '', '', '社工員/不知道', '', '', '不明', 'test001', '', '', '111', '監所', '2022-10-31', '2022-10-31', '16:00:00', '17:00:00', 'test001', 'test001', '1111', 0, '2022-10-25 10:44:28', '花花', '2023-09-27 20:47:22', '園主任'),
(31, '9', '0000-00-00 00:00:00', '面訪', '家訪', '測O試', '男', '兒少', '', '其他::其他方式1、其他方式2', 'K他命、FM2藥丸、檳榔、其他::o、其他藥物、test藥物', '52', '50-59歲', '台北101', '東部', '沒O有', '沒O有', '社工', '', '社工發現', '', '', '社工員/不知道', '', '', '不明', 'test001', '', '', '11', '家訪', '2022-11-04', '2022-11-04', '10:00:00', '11:00:00', 'test001', 'test001', '1', 0, '2022-10-25 10:45:21', '花花', '2023-09-27 20:47:22', '園主任'),
(32, '9', '2022-11-12 00:00:00', '電訪', '', '測O試', '男', '兒少', '', '其他::其他方式1、其他方式2', 'K他命、FM2藥丸、檳榔、其他::o、其他藥物、test藥物', '52', '50-59歲', '台北101', '東部', '測試', '朋友', '', '0900-777-777', '社工發現', '', '', '社工員/不知道', '', '', '不明', 'test001', '02020202022', '5', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-10-25 10:46:25', '花花', '2023-09-27 20:47:22', '園主任'),
(33, '10', '2022-10-26 14:11:00', '電訪', '社區', '測試一', '女', '愛滋感染者', '', '', '安非他命、K他命、檳榔', '', '20-29歲', '', '南部', '', '', '親戚', '', '', '矯正機關', '', '', '', '', '是', '花花', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-10-26 14:13:11', 'jia', '2023-09-27 20:14:58', '園主任'),
(34, '11', '2022-10-26 14:13:00', '面訪', '社區', '嗯嗯嗯', '男', '一般藥癮者', '', '', '強力膠、檳榔', '', '10-19歲', '學人路257號', '', '', '', '手足', '', '', '自行求助', '', '', '', '', '', '力聖臨', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-10-26 14:14:47', 'jia', '2023-09-27 20:32:00', '園主任'),
(35, '12', '2018-07-30 10:57:00', '面訪', '家訪', '青蛙', '其他', '家庭', '', '', '酒精、精神藥物、香菸', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '母女', '子女', '', '案母通報，尋求本機構單位協助', '自行求助', '', '社工員/林萬億', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '請問數學課本上面的題目要如何作答，以及明天的午餐到底要吃甚麼，咖哩還是湯麵。', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-12-09 08:57:39', '花花', '2022-12-09 08:57:39', ''),
(36, '12', '2018-11-21 00:00:00', '電訪', '', '青蛙', '其他', '家庭', '', '', '酒精', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '子女', '', '0900-000-000', '案母通報，尋求本機構單位協助', '自行求助', '', '社工員/林萬億', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '講話不要超過10分貝，記得去打第四劑疫苗，可是我打完第五劑了，還要再一次嗎？1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223222222222332222222222222222222222222222222222222222333333333333222222222222222222222222222222222222211', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-12-09 09:06:00', '花花', '2022-12-09 09:06:00', ''),
(37, '12', '0000-00-00 00:00:00', '面訪', '機構', '青蛙', '其他', '家庭', '', '', '酒精、精神藥物、香菸', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '母女', '子女', '', '案母通報，尋求本機構單位協助', '自行求助', '', '', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '', '', '面質', '機構', '2019-02-03', '2019-02-03', '12:00:00', '17:00:00', 'ㄓㄜㄒㄧㄢ', '叫http好了', '888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888', 0, '2022-12-09 09:08:25', '花花', '2022-12-09 09:08:25', ''),
(38, '12', '2019-11-30 00:00:00', '電訪', '', '青蛙', '其他', '家庭', '', '', '酒精', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '子女', '', '0900-000-000', '案母通報，尋求本機構單位協助', '自行求助', '', '社工員/林萬億', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '555555555555555555555555555555555555555555555555555555555555555', '4', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-12-09 09:09:03', '花花', '2022-12-09 09:09:03', ''),
(39, '12', '2020-06-15 00:00:00', '電訪', '', '青蛙', '其他', '家庭', '', '', '酒精', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '子女', '', '0900-000-000', '案母通報，尋求本機構單位協助', '自行求助', '', '社工員/林萬億', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '...', '5', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-12-09 09:09:37', '花花', '2022-12-09 09:09:37', ''),
(40, '12', '2021-01-06 00:00:00', '電訪', '', '青蛙', '其他', '家庭', '', '', '酒精', '30', '30-39歲', '屏東縣外埔鄉', '南部', '青蛙媽媽', '子女', '', '0900-000-000', '案母通報，尋求本機構單位協助', '自行求助', '', '社工員/林萬億', '', '', '不明', 'ㄓㄜㄒㄧㄢ', 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', '6', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2022-12-09 09:10:21', '花花', '2022-12-09 09:10:21', ''),
(41, '13', '2022-12-08 11:13:00', '面訪', '監所', '十二月零九日', '男', '一般藥癮者', '', '', '安非他命、酒精、菸', '40', '40-49歲', '桃園', '離島', '農曆', '爸爸與兒子', '子女', '', '屏東醫院', '教會', '', '牧師/佛洛伊德', '', '', '無', 'ㄓㄜㄒㄧㄢ', '11', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2022-12-09 09:14:25', '花花', '2022-12-09 09:14:25', ''),
(42, '14', '2023-03-09 00:03:00', '電訪', '社區', 'wwwwww', '男', '一般藥癮者', '', '', '古柯鹼、K他命、強力膠', '11', '', '過江村過江路6號', '', '龔修霆', '', '', '0970637529', '', '', '', '', '', '', '', '李萬榮', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2023-03-30 09:03:36', 'jia', '2023-05-11 21:20:13', 'jia'),
(43, '15', '2023-02-14 14:00:00', '面訪', '社區', 'dqwdqd1234', '女', '家庭', '', '其他：其他毒品施用方式s', '海洛因、大麻、FM2藥丸、檳榔、菸、其他::e', '33', '30-39歲', '', '', '', '', '', '', '', '', '', '', '', '', '不明', '社工組長', 'tqdqwdqwdqw', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2023-04-26 20:40:25', 'jia', '2023-04-26 21:26:08', 'jia'),
(44, '16', '2023-07-20 09:53:00', '面訪', '社區', 'wu小姐', '其他', '一般藥癮者', '', '口服', 'K他命、酒精、菸', '', '10歲以下', '高雄', '南部', 'wu先生', '夫妻', '配偶', '', '東港安泰', '醫院', '', '鄭小姐', '', '', '不明', '花花', '', '1', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2023-07-20 09:57:08', '花花', '2023-07-20 10:34:03', '花花'),
(45, '16', '2023-07-20 00:00:00', '電訪', '', 'wu小姐', '其他', '一般藥癮者', '', '口服', 'K他命', '', '10歲以下', '高雄', '南部', 'wu先生', '夫妻', '', '0973-001-002', '東港安泰', '醫院', '', '鄭小姐', '', '', '不明', 'ㄓㄜㄒㄧㄢ', '早安你好心情好', '2', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2023-07-20 10:01:01', '花花', '2023-07-20 10:01:01', ''),
(46, '2', '2023-09-21 09:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '', '', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'testaaa', '同居人', '配偶', '0622344154', '', '', '', '', '', '', '不明', '社工員2', 'testab\nnote', '', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2023-09-27 20:01:15', '社工員1', '2023-09-27 20:07:03', '園主任'),
(47, '2', '2023-09-14 08:45:00', '電訪', '', 'yukia', '女', '愛滋感染者', '', '', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'testu', '同居人', '配偶', '06223414', '', '', '', '', '', '', '不明', '社工員1', 'testremark', '', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2023-09-27 20:04:05', '園主任', '2023-09-27 20:04:05', ''),
(48, '2', '2023-09-06 00:00:00', '面訪', '其他::屏東安置中心', 'yukia', '女', '愛滋感染者', '', '', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', '', '', '配偶', '', '', '', '', '', '', '', '不明', '社工組長', '', '', 'test屏東安置中心', '其他::屏東安置中心', '2023-09-06', '2023-09-06', '13:30:00', '14:30:00', '社工員1', '', 'testr', 0, '2023-09-27 20:06:12', '園主任', '2023-09-27 20:06:35', '園主任'),
(49, '2', '2023-09-07 10:00:00', '電訪', '', 'yukia', '女', '愛滋感染者', '', '', '海洛因、安非他命', '34', '30-39歲', '彰化縣田中鎮西路里斗中路一段152號', '中部', 'rrrrra', '父母', '配偶', '023494912', '', '', '', '', '', '', '不明', '林鈺舒', 'testggg', '', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 0, '2023-09-27 20:07:37', '園主任', '2023-09-27 20:07:37', ''),
(50, '17', '2023-09-14 09:25:00', '電訪', '', 'rakkii', '其他', '一般藥癮者', '', '其他::其他方式', '嗎啡、大麻、K他命、FM2藥丸、檳榔、菸、精神藥物、其他::其他藥物test', '33', '30-39歲', '', '', '', '', '', '', '', '', '', '', '', '', '', '社工員2', '', '0', '', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 1, '2023-09-27 20:30:08', '園主任', '2023-09-27 20:30:08', '');

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
  `Upload_path` text NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) DEFAULT current_timestamp(),
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `counsel`
--

INSERT INTO `counsel` (`Id`, `Refferal`, `Counsel_id`, `Name`, `Gender`, `Sexual_orientation`, `Birth`, `Pid`, `Info_name`, `Info_phone`, `Address`, `In_prison_date`, `Out_prison_date`, `In_prison_date_2nd`, `Out_prison_date_2nd`, `In_prison_date_3rd`, `Out_prison_date_3rd`, `Is_parole`, `HIV_diagnosis_date`, `Family_know`, `Cocktail_therapy_status`, `Cocktail_therapy_name`, `Interview_date_1st`, `Interview_date_2nd`, `Interview_date_3rd`, `Interview_date_4th`, `Interview_date_5th`, `Interview_date_6th`, `Interview_date_7th`, `Upload_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '高雄監獄', 766, '黃QQ', '男', '同性', '1969-08-11', 'T121956775', '劉大福', '988517485', '屏東縣內埔鄉東寧村勝利路5557-2號', '2016-09-30', '2022-05-06', '2022-05-18', '0000-00-00', '0000-00-00', '0000-00-00', '是', '2022-06-25', '否', '否', '', '2022-02-11', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-03-05 00:00:00', '', '2022-10-13 18:58:30', '社工組長'),
(2, '台南監獄', 622, 'test', '女', '異性', '1952-09-17', 'd1234455186', 'test緊急聯絡人', '05121312', '屏東縣屏東市自由路63312號', '2021-12-01', '2023-03-02', '2021-12-02', '2022-05-26', '0000-00-00', '0000-00-00', '否', '2021-12-29', '是', '否', '', '2022-02-02', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-03-07 16:55:01', '園主任', '2022-10-25 11:08:34', '花花'),
(3, '台南監獄', 999, '測O試', '其他', '雙性', '1981-05-14', 'V123456789', '快樂聯盟', '', '橋下', '2020-10-25', '2022-10-15', '2011-10-19', '2010-10-24', '2010-03-03', '2010-10-09', '是', '2010-10-16', '否', '是', '', '2026-10-15', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-10-25 11:02:57', '花花', '0000-00-00 00:00:00', ''),
(4, '屏東看守所', 998, '快O樂', '男', '', '1991-10-10', 'V456123789', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '0000-00-00', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-10-25 11:09:44', '花花', '0000-00-00 00:00:00', ''),
(5, '高雄監獄', 5552, '哇哇', '', '', '1976-08-25', 'N224566318', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '0000-00-00', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-10-26 14:19:27', 'jia', '0000-00-00 00:00:00', ''),
(6, '屏東監獄', 0, '盧櫻桃', '女', '同性', '1978-09-18', 'L994625008', '古楊桃', '', '小琉球縣小琉球鄉小琉球路10號3F', '2010-01-03', '2010-02-03', '2010-02-04', '2010-02-11', '2010-03-04', '2010-04-07', '否', '2010-06-03', '否', '是', '穩定服藥', '2027-12-01', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2022-12-09 09:28:00', '花花', '0000-00-00 00:00:00', ''),
(7, '台南看守所', 9527, 'wu先生', '男', '同性', '2023-07-20', 's37266362', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '是', '0000-00-00', '', '', '', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2023-07-20 10:08:04', '花花', '0000-00-00 00:00:00', ''),
(8, '台南監獄', 65, 'test927', '其他', '異性', '1966-09-08', 'J114567854', 'testa', '', '', '2020-05-11', '2020-12-23', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '0000-00-00', '是', '', '', '2020-04-15', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '0000-00-00', '', '2023-09-27 21:36:47', '園主任', '2023-09-27 22:00:15', '園主任');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `counsel_visit`
--

INSERT INTO `counsel_visit` (`Id`, `Referral`, `Counsel_id`, `Name`, `Pid`, `Location`, `Location_detail`, `Start_date`, `End_date`, `Start_time`, `End_time`, `One_user_name`, `Two_user_name`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(4, '高雄監獄', 766, '黃QQ', 'T121956775', '高雄監所1', '監所', '2021-12-09', '2021-12-09', '13:30:00', '17:30:00', '社工員1', '社工員2', '高雄監所1備註test', '2022-03-09 17:58:37', '園主任', '2022-03-09 19:28:14', '園主任'),
(5, '高雄監獄', 766, '黃QQ', 'T121956775', '', '高雄監所1', '2022-01-21', '2022-01-21', '07:00:00', '08:30:00', '社工員1', '社工員2', '高雄監獄2備註', '2022-03-09 17:59:13', '園主任', '2022-03-09 19:28:24', '園主任'),
(6, '高雄監獄', 766, '黃QQ', 'T121956775', '家訪1', '家訪', '2022-01-28', '2022-01-28', '12:00:00', '13:00:00', '社工員1', '執行長', 'test', '2022-03-09 18:21:39', '園主任', '0000-00-00 00:00:00', ''),
(7, '高雄監獄', 766, '黃QQ', 'T121956775', '', 'test', '2022-02-04', '2022-02-04', '06:30:00', '09:00:00', '社工組長', '社工員2', 'test', '2022-03-09 19:32:25', '園主任', '0000-00-00 00:00:00', ''),
(8, '台南監獄', 622, 'test', 'd1234455186', '監所test', '監所', '2021-11-11', '2021-11-11', '12:00:00', '13:00:00', '社工員2', '', 'test', '2022-03-09 19:36:12', '園主任', '0000-00-00 00:00:00', ''),
(9, '台南監獄', 999, '測O試', 'V123456789', '不知道a', '家訪', '2022-06-24', '2022-06-24', '14:30:00', '15:00:00', '社工員2', '', '000dddaf', '2022-10-25 11:03:38', '花花', '2023-09-27 22:43:10', '園主任'),
(10, '台南監獄', 999, '測O試', 'V123456789', '11', '家訪', '2022-10-14', '2022-10-14', '09:00:00', '11:30:00', 'test001', 'test001', '11', '2022-10-25 11:04:36', '花花', '0000-00-00 00:00:00', ''),
(11, '台南監獄', 999, '測O試', 'V123456789', '1', '社區', '2022-10-15', '2022-10-15', '16:00:00', '17:00:00', 'test001', 'test001', '1', '2022-10-25 11:05:16', '花花', '0000-00-00 00:00:00', ''),
(12, '台南監獄', 999, '測O試', 'V123456789', '1', '社區', '2022-10-15', '2022-10-15', '16:00:00', '17:00:00', 'test001', 'test001', '1', '2022-10-25 11:05:16', '花花', '0000-00-00 00:00:00', ''),
(13, '台南監獄', 999, '測O試', 'V123456789', '1', '社區', '2022-10-15', '2022-10-15', '16:00:00', '17:00:00', 'test001', 'test001', '1', '2022-10-25 11:05:16', '花花', '0000-00-00 00:00:00', ''),
(14, '台南監獄', 999, '測O試', 'V123456789', '7', '監所', '2022-10-17', '2022-10-17', '12:00:00', '13:00:00', 'test001', 'test001', '1', '2022-10-25 11:05:56', '花花', '0000-00-00 00:00:00', ''),
(15, '台南監獄', 999, '測O試', 'V123456789', '555555555', '555', '2022-10-18', '2022-10-18', '11:00:00', '12:00:00', 'test001', 'test001', '5555', '2022-10-25 11:06:25', '花花', '0000-00-00 00:00:00', ''),
(16, '台南監獄', 999, '測O試', 'V123456789', '999', '社區', '2022-10-19', '2022-10-19', '14:00:00', '15:00:00', 'test001', 'test001', '999999999999999999999999', '2022-10-25 11:06:55', '花花', '0000-00-00 00:00:00', ''),
(17, '屏東監獄', 0, '盧櫻桃', 'L994625008', '面訪', '監所', '2020-07-29', '2020-07-29', '04:00:00', '19:00:00', 'ㄓㄜㄒㄧㄢ', '叫http好了', '00', '2022-12-09 09:33:04', '花花', '0000-00-00 00:00:00', ''),
(18, '屏東監獄', 0, '盧櫻桃', 'L994625008', '面訪', '監所', '2021-08-06', '2021-08-06', '13:00:00', '14:00:00', 'ㄓㄜㄒㄧㄢ', '叫http好了', '0.0', '2022-12-09 09:33:42', '花花', '0000-00-00 00:00:00', ''),
(19, '屏東監獄', 0, '盧櫻桃', 'L994625008', '電訪', '監所', '2022-01-01', '2022-01-01', '12:00:00', '16:00:00', 'ㄓㄜㄒㄧㄢ', '叫http好了', '無', '2022-12-09 09:34:15', '花花', '0000-00-00 00:00:00', ''),
(20, '屏東監獄', 0, '盧櫻桃', 'L994625008', '面訪', '監所', '2022-02-01', '2022-02-01', '01:00:00', '07:30:00', 'ㄓㄜㄒㄧㄢ', 'test001', '48548459471863416841856454164168418634189794416456464164634889464444444854156341564658601', '2022-12-09 09:35:19', '花花', '0000-00-00 00:00:00', ''),
(21, '屏東監獄', 0, '盧櫻桃', 'L994625008', '面訪', '監所', '2022-03-01', '2022-03-01', '07:00:00', '09:00:00', 'ㄓㄜㄒㄧㄢ', '社工組長', ':)', '2022-12-09 09:35:52', '花花', '0000-00-00 00:00:00', ''),
(22, '屏東監獄', 0, '盧櫻桃', 'L994625008', '電訪', '家訪', '2022-04-03', '2022-04-03', '12:30:00', '14:00:00', 'ㄓㄜㄒㄧㄢ', 'ㄓㄒ', '...', '2022-12-09 09:36:27', '花花', '0000-00-00 00:00:00', ''),
(23, '屏東監獄', 0, '盧櫻桃', 'L994625008', '面訪', '監所', '2022-05-09', '2022-05-09', '13:30:00', '15:30:00', 'ㄓㄜㄒㄧㄢ', 'test001', '麵包', '2022-12-09 09:37:21', '花花', '0000-00-00 00:00:00', ''),
(24, '屏東監獄', 0, '盧櫻桃', 'L994625008', '3226', '家訪', '2022-06-05', '2022-06-05', '12:00:00', '13:00:00', 'ㄓㄜㄒㄧㄢ', '丘培民', '777', '2022-12-09 09:38:01', '花花', '0000-00-00 00:00:00', ''),
(25, '高雄監獄', 766, '黃QQ', 'T121956775', 'fdfdfdf', '監所', '2023-06-28', '2023-06-28', '12:00:00', '13:00:00', '園主任', '社工組長', '', '2023-07-12 10:45:11', '社工員1', '2023-07-12 13:12:25', '社工員1'),
(26, '高雄監獄', 766, '黃QQ', 'T121956775', 'fdfs', '家訪', '2023-07-05', '2023-07-05', '12:00:00', '13:00:00', '執行長', '許文瀞', '', '2023-07-12 13:12:04', '社工員1', '0000-00-00 00:00:00', ''),
(27, '台南看守所', 9527, 'wu先生', 's37266362', '訪談', '監所', '2023-07-20', '2023-07-20', '12:00:00', '13:00:00', 'ㄓㄜㄒㄧㄢ', '', '', '2023-07-20 10:19:28', '花花', '0000-00-00 00:00:00', ''),
(28, '台南監獄', 999, '測O試', 'V123456789', 'test方式', '其他::其他方式', '2023-09-13', '2023-09-13', '09:30:00', '11:00:00', '社工員2', '', 'testrrr', '2023-09-27 22:49:47', '園主任', '2023-09-27 22:50:01', '園主任');

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
  `Case_storage` varchar(200) NOT NULL,
  `Close_case_date` date NOT NULL,
  `Case_assign` varchar(20) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `current_case`
--

INSERT INTO `current_case` (`Id`, `Case_id`, `Phone_id`, `Unopen_type`, `Case_Create_date`, `Object_type`, `Case_grade`, `Case_property`, `Case_stage`, `Open_case_date`, `Name`, `Gender`, `Sexual_orientation`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Case_storage`, `Close_case_date`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 'RE111', '6', 'phone', '2021-08-08', '藥癮家庭', 'B', '安置家園', '1', '2021-08-08', 'test', '男', '同性', '062223331', '1991-02-03', 'T1334356112', '其他', '已結案', '', '2021-12-12', '社工員1', '2021-08-08 19:11:33', '園主任', '2022-08-08 21:10:18', '園主任'),
(2, 'RE112', '', 'case', '2022-08-08', '一般藥癮者', 'B', '安置家園', '2', '2022-08-08', 'TEST0808', '女', '異性', '0972631122', '1993-06-22', 'S167123331', '醫院', '未結案', '', '0000-00-00', '社工員2', '2022-08-08 19:38:58', '園主任', '0000-00-00 00:00:00', ''),
(4, 'RE113', '', 'case', '2022-08-03', '一般藥癮者', 'A', '社區', '', '2022-08-03', '黃QQ', '男', '異性', '08123124444', '1993-10-15', 'B123555515', '社區', '未結案', '', '0000-00-00', '社工組長', '2022-08-08 19:42:41', '園主任', '0000-00-00 00:00:00', ''),
(5, 'RE114', '', 'case', '2021-06-11', '一般藥癮者', 'B', '安置家園', '1', '2021-06-11', 'test611', '其他', '雙性', '061234441', '1995-12-12', 'C248491122', '自行求助', '未結案', '', '0000-00-00', '社工員2', '2022-08-08 20:52:35', '園主任', '0000-00-00 00:00:00', ''),
(6, 'RE111', '', 'reopencase', '2022-08-08', '藥癮家庭', 'B', '安置家園', '1', '2022-08-08', 'test', '男', '同性', '062223331', '1991-02-03', 'T1334356112', '其他', '未結案', 'interlocution12、interlocution13、case6', '0000-00-00', '社工員1', '2022-08-08 21:23:47', '園主任', '0000-00-00 00:00:00', ''),
(7, '123', '', 'case', '2022-10-14', '愛滋感染者', 'A', '安置家園', 'A', '2022-10-24', '瓜', '女', '異性', '0008798', '2022-10-20', 'M2224786629', '教會', '未結案', '', '0000-00-00', '丘培民', '2022-10-24 10:28:37', 'jia', '0000-00-00 00:00:00', ''),
(8, '440', '', 'case', '2022-10-25', '愛滋感染者', 'B', '自立宿舍', '社會賦歸期', '2022-10-01', '測O試', '女', '異性', '0900-666-777', '1974-04-21', 'V123456788', '警政', '已結案', '', '2023-07-20', 'test001', '2022-10-25 11:27:22', '花花', '2023-07-20 14:40:12', '花花'),
(9, 'RE115', '13', 'phone', '2022-12-09', '一般藥癮者', 'A', '自立宿舍', '0', '2022-12-09', '十二月零九日', '男', '雙性', '0900-000-000', '1980-02-12', 'Z652123745', '教會', '已結案', '', '2022-12-09', 'ㄓㄜㄒㄧㄢ', '2022-12-09 09:16:23', '花花', '2022-12-09 10:11:21', '花花'),
(10, 'RE877', '', 'case', '2022-12-09', '藥癮家庭', 'A', '社區', '223', '2022-12-09', '何竹田', '男', '同性', '0977985162', '1999-03-23', 'y997501623', '藥癮家庭', '未結案', '', '0000-00-00', 'ㄓㄜㄒㄧㄢ', '2022-12-09 09:54:24', '花花', '0000-00-00 00:00:00', ''),
(11, 'A441', '', 'case', '2022-12-09', '親職兒少', 'C', '社區', 'b', '2022-12-09', '立可貸', '其他', '異性', '0977412563', '1997-10-19', 'j744510096', '民間社福機構', '未結案', '', '0000-00-00', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:00:35', '花花', '0000-00-00 00:00:00', ''),
(12, '442', '16', 'phone', '2023-07-20', '愛滋感染者', 'B', '自立宿舍', '3', '2023-07-20', 'wu小姐', '其他', '異性', '配偶', '2004-06-22', 'E225488729', '醫院', '未結案', 'case70、interlocution71、life73、health74、employment_satif77、satif78、familyship79、settlement80', '0000-00-00', '花花', '2023-07-20 10:36:00', '花花', '0000-00-00 00:00:00', ''),
(13, '443', '', 'reopencase', '2023-07-20', '愛滋感染者', 'B', '自立宿舍', '社會賦歸期', '2023-07-20', '測ｏ試', '男', '', '0973-771-113', '2023-07-20', 'I121326167', '矯正機關', '未結案', '', '0000-00-00', '社工員1', '2023-07-20 14:44:30', '花花', '0000-00-00 00:00:00', ''),
(14, 'A442', '', 'case', '2023-09-20', '親職兒少', 'A', '自立宿舍', '2', '2023-09-20', 'ag1', '女', '異性', '5512134', '1972-06-05', 'H2431123311', '醫院', '未結案', '', '0000-00-00', '社工員2', '2023-09-20 22:31:42', '社工組長', '0000-00-00 00:00:00', ''),
(15, 'B101', '998', 'counsel', '2023-09-20', '親職兒少', 'B', '自立宿舍', '2', '2023-09-20', '快O樂', '男', '異性', '22223123', '1991-10-10', 'V2456123789', '醫院', '未結案', '', '0000-00-00', '社工組長', '2023-09-20 22:34:02', '社工組長', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `day_off_v2`
--

CREATE TABLE `day_off_v2` (
  `Id` int(244) NOT NULL,
  `Resume_id` int(244) NOT NULL,
  `Resume_name` varchar(200) NOT NULL,
  `Rec_year` int(244) NOT NULL,
  `Fillin_date` date NOT NULL,
  `Day_off_type` varchar(50) NOT NULL,
  `Reason` longtext NOT NULL,
  `Disposal_type` varchar(1000) NOT NULL,
  `Hours_type` varchar(1000) NOT NULL,
  `Other_files` longtext NOT NULL,
  `Overtime_date_start` varchar(1000) NOT NULL,
  `Overtime_date_end` varchar(1000) NOT NULL,
  `Hours` float NOT NULL,
  `Remain_comp_hours` float NOT NULL,
  `Remain_annual_hours` float NOT NULL,
  `Used_comp_hours` float NOT NULL,
  `Used_annual_hours` float NOT NULL,
  `Allow_status` varchar(100) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL,
  `Supervise` varchar(100) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(200) NOT NULL,
  `Job_agent` varchar(100) NOT NULL,
  `Job_agent_signature` longtext NOT NULL,
  `Job_agent_sign_msg` longtext NOT NULL,
  `Job_agent_sign_time` varchar(100) NOT NULL,
  `Director` varchar(100) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `day_off_v2`
--

INSERT INTO `day_off_v2` (`Id`, `Resume_id`, `Resume_name`, `Rec_year`, `Fillin_date`, `Day_off_type`, `Reason`, `Disposal_type`, `Hours_type`, `Other_files`, `Overtime_date_start`, `Overtime_date_end`, `Hours`, `Remain_comp_hours`, `Remain_annual_hours`, `Used_comp_hours`, `Used_annual_hours`, `Allow_status`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Job_agent`, `Job_agent_signature`, `Job_agent_sign_msg`, `Job_agent_sign_time`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`) VALUES
(1, 1, 'jia', 112, '2023-06-03', '病假', 'teradads請假\r\n事由', '', '', '../resume/resume_user1_testuser/day_off_datas/dayoftest111.docx', '112年05月09日_08:00', '112年05月09日_14:00', 6, 0, 16.4, 0, 6, '核准', '2023-06-03 20:06:43', 'jia', '2023-06-03 21:22:21', '社工組長', '執行長', '../signature/1685965557.png', 'ddd65', '2023-06-05 19:45:57', '社工員2', '', '', '', '社工組長', '../signature/1685965325.png', 'test65', '2023-06-05 19:42:05'),
(2, 6, 'fffff', 112, '2023-09-07', '事假', 'testatsdasd\r\nreww\r\n請假\r\n事由', '', '', '../resume/resume_user6_ffff/day_off_datas/testasdadsa_day_off09.docx', '112年09月01日_10:00', '112年09月01日_14:00', 4, 0, 20, 0, 4, '審核中', '2023-09-07 21:19:31', 'fffff', '2023-09-07 21:19:31', '', '執行長', '', '', '', '社工員2', '', '', '', '社工組長', '', '', ''),
(3, 1, 'jia', 112, '2023-10-02', '事假', 'test請假\r\n事由', '扣時數', '半天假', '../resume/resume_user1_testuser/day_off_datas/testdayoff.docx', '112年10月06日_8:30', '112年10月06日_11:00', 2.5, 0, 14.4, 0, 2.5, '審核中', '2023-10-02 17:37:44', 'jia', '2023-10-02 17:37:44', '', '執行長', '', '', '', '社工員2', '', '', '', '社工組長', '', '', '');

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
  `dlgrec_0` text NOT NULL,
  `dlgrec_1` text NOT NULL,
  `dlgrec_2` text NOT NULL,
  `dlgrec_3` text NOT NULL,
  `dlgrec_4` text NOT NULL,
  `dlgrec_5` text NOT NULL,
  `dlgrec_6` text NOT NULL,
  `dlgrec_7` text NOT NULL,
  `dlgrec_8` text NOT NULL,
  `dlgrec_9` text NOT NULL,
  `dlgrec_10` text NOT NULL,
  `dlgrec_11` text NOT NULL,
  `dlg_manager` varchar(30) NOT NULL,
  `social_worker` varchar(30) NOT NULL,
  `social_worker_sign` longtext NOT NULL,
  `social_worker_sign_msg` longtext NOT NULL,
  `social_worker_sign_time` datetime NOT NULL,
  `supervise1` varchar(30) NOT NULL,
  `supervise1_sign` longtext NOT NULL,
  `supervise1_sign_msg` longtext NOT NULL,
  `supervise1_sign_time` datetime NOT NULL,
  `supervise2` varchar(30) NOT NULL,
  `supervise2_sign` longtext NOT NULL,
  `supervise2_sign_msg` longtext NOT NULL,
  `supervise2_sign_time` datetime NOT NULL,
  `Upload_name` varchar(500) NOT NULL,
  `Upload_path` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `dlgrec`
--

INSERT INTO `dlgrec` (`Id`, `bf_num`, `al_num`, `em_num`, `lp_num`, `leave_num`, `dlgrec_date`, `dlgrec_0`, `dlgrec_1`, `dlgrec_2`, `dlgrec_3`, `dlgrec_4`, `dlgrec_5`, `dlgrec_6`, `dlgrec_7`, `dlgrec_8`, `dlgrec_9`, `dlgrec_10`, `dlgrec_11`, `dlg_manager`, `social_worker`, `social_worker_sign`, `social_worker_sign_msg`, `social_worker_sign_time`, `supervise1`, `supervise1_sign`, `supervise1_sign_msg`, `supervise1_sign_time`, `supervise2`, `supervise2_sign`, `supervise2_sign_msg`, `supervise2_sign_time`, `Upload_name`, `Upload_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 20, 30, 29, 33, 3, '2021-12-22', 'test1', '', '', '', '', 'test2', 't', '', '', '', 'test5', 'test6\n', 'testw', '社工員1', '../signature/1651571061.png', 'test社工員留言45', '2022-05-03 17:44:21', '園主任', '../signature/1651571093.png', 'test督導留言', '2022-05-03 17:44:53', '', '', '', '0000-00-00 00:00:00', '', '', '2022-04-07 20:46:39', '社工員1', '2022-10-13 19:00:30', '社工組長'),
(2, 17, 280, 28, 30, 2, '2021-11-10', 'test1', 'test2', 'test2', '', '', '', 'test3', 'test4', 'test特殊個案反應情形輔導處理', 'test輔導諮詢執行實況', 'test問題處遇概況', 'test備註', 'test管理員/生活輔導員', '社工員1', '', '', '0000-00-00 00:00:00', '執行長', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '', '', '2022-04-07 20:47:56', '園主任', '2023-09-26 19:38:06', '園主任'),
(3, 10, 8, 9, 10, 3, '2022-10-25', 'NAH BAD', 'TOO HOT', 'TOO HOT', 'SLEEPING...', 'GREAT!', 'GET OFF WORK~~', 'DINNER', 'NIGHT!', '諮商', '讚', '很好', '沒有備註~~!', '工讀生', '社工員1', '../signature/1666679062.png', '', '2022-10-25 14:24:22', '社工組長', '../signature/1666679094.png', '', '2022-10-25 14:24:54', '', '', '', '0000-00-00 00:00:00', '', '', '2022-10-25 14:23:54', '花花', '2023-05-17 18:41:45', '叫http好了'),
(4, 7, 7, 6, 8, 0, '2022-12-01', '讚，太早了', '讚', '讚', '讚', '讚', '讚', '讚', '讚，很早睡', '家庭會議', '順利', '因為...所以...', '無', 'ㄓㄜㄒㄧㄢ生輔', 'jia', '../signature/1682943115.png', '', '2023-05-01 20:11:55', '社工組長', '../signature/1670553179.png', '', '2022-12-09 10:32:59', '', '', '', '0000-00-00 00:00:00', '', '', '2022-12-09 10:31:56', '花花', '2023-05-17 18:40:44', '叫http好了'),
(5, 21, 17, 27, 28, 2, '2022-11-25', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '如', 'ㄓㄒ', '../signature/1670553351.png', '', '2022-12-09 10:35:51', '花花', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '', '', '2022-12-09 10:35:40', '花花', '2023-05-17 18:41:23', '叫http好了'),
(6, 3, 5, 6, 14, 0, '2023-03-04', 'test6', 'test9', 'test9', 'test12', 'test14', 'test17', 'tez18', 'tadsa21', 'test特殊個案反應情形輔導處理', 'test\n輔導諮詢執行實況', 'test\n問題處遇概況', 'test備註', 'test生活輔導員', '社工員1', '', '', '0000-00-00 00:00:00', '園主任', '', '', '0000-00-00 00:00:00', '執行長', '../signature/1685971065.png', 'test65', '2023-06-05 21:17:45', '', '', '2023-06-05 21:11:44', '執行長', '2023-09-23 12:43:17', '社工員1'),
(7, 3, 3, 3, 3, 1, '2023-07-20', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ\n', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', '張11', '花花', '', '', '0000-00-00 00:00:00', '社工員1', '', '', '0000-00-00 00:00:00', '社工員2', '', '', '0000-00-00 00:00:00', '', '', '2023-07-20 14:58:13', '花花', '2023-07-20 14:58:13', ''),
(8, 5, 6, 7, 7, 2, '2023-09-13', 'tes', '', '', '', '', '', '', '', 'b', 'a', 'd', 'ss', 'tesst生活輔導員', '社工員2', '', '', '0000-00-00 00:00:00', '園主任', '', '', '0000-00-00 00:00:00', '執行長', '', '', '0000-00-00 00:00:00', 'testdlgrec - 複製.docx', '../dlgrec/testdlgrec - 複製.docx', '2023-09-26 19:38:49', '園主任', '2023-09-26 19:41:48', '園主任');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `forms`
--

INSERT INTO `forms` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `answer`, `file_path`, `Health_rec`) VALUES
(1, '6', 'RE111', 2, 'case', 'test', 'T1334356112', '2023-09-19 23:23:12', '社工組長', '2023-09-20 00:09:43', '社工組長', '\"[{\"name\":\"assign_name\",\"value\":\"社工組長\"},{\"name\":\"fillin_date\",\"value\":\"2023-09-19\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"phone_home\",\"value\":\"062223331\"},{\"name\":\"phone_mobile\",\"value\":\"\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"2023-06\"},{\"name\":\"correctional_question_end\",\"value\":\"2023-11\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"5\"},{\"name\":\"family_description\",\"value\":\"\"},{\"name\":\"assessment\",\"value\":\"aaa\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_time_1\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medical_other\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"dealwith_target\",\"value\":\"\"},{\"name\":\"dealwith_strategy\",\"value\":\"\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"pretest_depression_radio_text\",\"value\":\"\"},{\"name\":\"midtest_depression_radio_text\",\"value\":\"\"},{\"name\":\"posttest_depression_radio_text\",\"value\":\"\"},{\"name\":\"BSRS5_checkbox_text\",\"value\":\"\"},{\"name\":\"pretest_life_text\",\"value\":\"\"},{\"name\":\"midtest_life_text\",\"value\":\"\"},{\"name\":\"posttest_life_text\",\"value\":\"\"},{\"name\":\"pretest_familyship_text\",\"value\":\"\"},{\"name\":\"midtest_familyship_text\",\"value\":\"\"},{\"name\":\"posttest_familyship_text\",\"value\":\"\"},{\"name\":\"other_assessments\",\"value\":\"\"},{\"name\":\"case_closed_yes\",\"value\":\"\"},{\"name\":\"case_closed_radio\",\"value\":\"暫不結案\"},{\"name\":\"case_closed_year\",\"value\":\"\"},{\"name\":\"case_closed_month\",\"value\":\"\"},{\"name\":\"case_closed_day\",\"value\":\"\"},{\"name\":\"case_closed_totalmonth\",\"value\":\"\"},{\"name\":\"case_closed_remark\",\"value\":\"\"}]\"', '../upload/undefined', ''),
(2, '6', 'RE111', 3, 'interlocution', 'test', 'T1334356112', '2023-09-19 23:23:59', '社工組長', '2023-09-20 21:19:12', '社工組長', '\"[{\"name\":\"interlocution_date\",\"value\":\"\"},{\"name\":\"interlocution_place\",\"value\":\"\"},{\"name\":\"interlocution_ques_types\",\"value\":\"就醫、就業媒合、法律、家庭關係、就業職訓\"},{\"name\":\"interlocution_ques\",\"value\":\"aaaaaa\"},{\"name\":\"interlocution_time\",\"value\":\"\"},{\"name\":\"interlocution_content\",\"value\":\"\"},{\"name\":\"interlocution_next_target\",\"value\":\"dwqdwad\"},{\"name\":\"assign_name\",\"value\":\"社工組長\"},{\"name\":\"supervise_name\",\"value\":\"\"}]\"', '', ''),
(3, '6', 'RE111', 4, 'resource', 'test', 'T1334356112', '2023-09-19 23:24:21', '社工組長', '2023-09-19 23:24:26', '社工組長', '\"[{\"name\":\"rtable1&resource_rec_1[]\",\"value\":[\"dddddddd\",\"\",\"\",\"\",\"\",\"社工組長\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]}]\"', '', ''),
(4, '6', 'RE111', 5, 'life', 'test', 'T1334356112', '2023-09-19 23:24:56', '社工組長', '0000-00-00 00:00:00', '', '\"[{\"name\":\"w_test\",\"value\":\"中測\"},{\"name\":\"fillin_date\",\"value\":\"2023-09-19\"},{\"name\":\"life_answer_score1\",\"value\":\"\"},{\"name\":\"customRange1\",\"value\":\"50\"},{\"name\":\"customRange2\",\"value\":\"50\"},{\"name\":\"customRange3\",\"value\":\"50\"},{\"name\":\"customRange4\",\"value\":\"50\"},{\"name\":\"customRange5\",\"value\":\"50\"},{\"name\":\"customRange6\",\"value\":\"50\"},{\"name\":\"customRange7\",\"value\":\"50\"},{\"name\":\"n0\",\"value\":\"\"},{\"name\":\"n1\",\"value\":\"\"},{\"name\":\"n2\",\"value\":\"\"},{\"name\":\"n3\",\"value\":\"\"},{\"name\":\"n4\",\"value\":\"\"},{\"name\":\"n5\",\"value\":\"\"},{\"name\":\"life_answer_score2\",\"value\":\"\"}]\"', '', ''),
(5, '6', 'RE111', 8, 'employment_satif', 'test', 'T1334356112', '2023-09-19 23:30:45', '社工組長', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date_0\",\"value\":\"2023-09-19\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"work_experience\",\"value\":\"\"},{\"name\":\"contact_name\",\"value\":\"\"},{\"name\":\"relation\",\"value\":\"\"},{\"name\":\"contact_phone\",\"value\":\"\"},{\"name\":\"physical_mental_t_1\",\"value\":\"\"},{\"name\":\"physical_mental_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_1\",\"value\":\"\"},{\"name\":\"correction_rec_t_2\",\"value\":\"\"},{\"name\":\"correction_rec_t_3\",\"value\":\"\"},{\"name\":\"correction_rec_t_4\",\"value\":\"\"},{\"name\":\"correction_rec_t_5\",\"value\":\"\"},{\"name\":\"correction_rec_date_start\",\"value\":\"\"},{\"name\":\"correction_rec_date_end\",\"value\":\"\"},{\"name\":\"capability_t_0\",\"value\":\"\"},{\"name\":\"capability_t_1\",\"value\":\"\"},{\"name\":\"capability_t_2\",\"value\":\"\"},{\"name\":\"capability_t_3\",\"value\":\"\"},{\"name\":\"capability_t_4\",\"value\":\"\"},{\"name\":\"other_skills_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_0\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_1\",\"value\":\"\"},{\"name\":\"traffic_capacity_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_date\",\"value\":\"\"},{\"name\":\"employment_status_t_1\",\"value\":\"\"},{\"name\":\"employment_status_t_2\",\"value\":\"\"},{\"name\":\"employment_status_t_3\",\"value\":\"\"},{\"name\":\"employment_status_t_4\",\"value\":\"\"},{\"name\":\"employment_status_t_5\",\"value\":\"\"},{\"name\":\"employment_status_t_6\",\"value\":\"\"},{\"name\":\"tsn_case_id\",\"value\":\"RE111\"},{\"name\":\"fillin_date_1\",\"value\":\"2023-09-19\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"3\"},{\"name\":\"answer4\",\"value\":\"1\"},{\"name\":\"answer5\",\"value\":\"1\"},{\"name\":\"answer6\",\"value\":\"2\"},{\"name\":\"answer7\",\"value\":\"3\"},{\"name\":\"answer8\",\"value\":\"4\"},{\"name\":\"answer9\",\"value\":\"4\"},{\"name\":\"answer10\",\"value\":\"4\"},{\"name\":\"answer_score\",\"value\":\"26\"}]\"', '', ''),
(6, '6', 'RE111', 9, 'satif', 'test', 'T1334356112', '2023-09-19 23:31:19', '社工組長', '0000-00-00 00:00:00', '', '\"[{\"name\":\"fillin_date\",\"value\":\"2023-09-19\"},{\"name\":\"case_name\",\"value\":\"test\"},{\"name\":\"assign_name\",\"value\":\"社工組長\"},{\"name\":\"tsn_case_id\",\"value\":\"RE111\"},{\"name\":\"agency\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer2\",\"value\":\"4\"},{\"name\":\"answer3\",\"value\":\"4\"},{\"name\":\"answer4\",\"value\":\"4\"},{\"name\":\"answer5\",\"value\":\"4\"},{\"name\":\"answer6\",\"value\":\"4\"},{\"name\":\"answer7\",\"value\":\"4\"},{\"name\":\"answer8\",\"value\":\"4\"},{\"name\":\"answer9\",\"value\":\"4\"},{\"name\":\"answer10\",\"value\":\"4\"},{\"name\":\"answer11\",\"value\":\"4\"},{\"name\":\"answer12\",\"value\":\"4\"},{\"name\":\"answer13\",\"value\":\"4\"},{\"name\":\"answer14\",\"value\":\"4\"},{\"name\":\"answer15\",\"value\":\"4\"},{\"name\":\"answer16\",\"value\":\"ddddd\"},{\"name\":\"answer_score\",\"value\":\"60\"}]\"', '', ''),
(7, '6', 'RE111', 10, 'familyship', 'test', 'T1334356112', '2023-09-19 23:31:44', '社工組長', '0000-00-00 00:00:00', '', '\"[{\"name\":\"w_test\",\"value\":\"中測\"},{\"name\":\"fillin_date\",\"value\":\"2023-09-19\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"education_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"marital_other\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"4\"},{\"name\":\"answer_score\",\"value\":\"4\"}]\"', '', ''),
(8, '6', 'RE111', 11, 'BSRS5', 'test', 'T1334356112', '2023-09-19 23:32:11', '社工組長', '2023-09-20 00:02:04', '社工組長', '\"[{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"age\",\"value\":\"32\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"answer1\",\"value\":\"0\"},{\"name\":\"answer2\",\"value\":\"0\"},{\"name\":\"answer3\",\"value\":\"1\"},{\"name\":\"answer4\",\"value\":\"1\"},{\"name\":\"answer5\",\"value\":\"0\"},{\"name\":\"answer6\",\"value\":\"0\"},{\"name\":\"answer_score\",\"value\":\"2\"},{\"name\":\"statement\",\"value\":\"ddddddddddd\"}]\"', '', ''),
(9, '6', 'RE111', 12, 'settlement', 'test', 'T1334356112', '2023-09-19 23:32:38', '社工組長', '2023-09-19 23:32:54', '社工組長', '\"[{\"name\":\"fillin_date\",\"value\":\"2023-09-19\"},{\"name\":\"assign_name\",\"value\":\"社工組長\"},{\"name\":\"name\",\"value\":\"test\"},{\"name\":\"birth\",\"value\":\"1991-02-03\"},{\"name\":\"pid\",\"value\":\"T1334356112\"},{\"name\":\"sex\",\"value\":\"男\"},{\"name\":\"phone\",\"value\":\"062223331\"},{\"name\":\"address\",\"value\":\"\"},{\"name\":\"residence\",\"value\":\"\"},{\"name\":\"cohabitant_other\",\"value\":\"\"},{\"name\":\"current_job_other\",\"value\":\"\"},{\"name\":\"economic_status_0\",\"value\":\"\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion_other\",\"value\":\"\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record_2\",\"value\":\"\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"\"},{\"name\":\"correctional_question_start\",\"value\":\"\"},{\"name\":\"correctional_question_end\",\"value\":\"\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"0\"},{\"name\":\"family_description\",\"value\":\"d\"},{\"name\":\"assessment\",\"value\":\"\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"\"},{\"name\":\"personal_system\",\"value\":\"\"},{\"name\":\"family_system\",\"value\":\"\"},{\"name\":\"social_system\",\"value\":\"\"},{\"name\":\"resource_system\",\"value\":\"\"},{\"name\":\"diagnose_main\",\"value\":\"\"},{\"name\":\"diagnose_minor\",\"value\":\"\"},{\"name\":\"basic_indicator\",\"value\":\"本身同意於安置中心入住並有意願重新開始者\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定\"},{\"name\":\"end_indicator\",\"value\":\"入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)\"},{\"name\":\"end_indicator\",\"value\":\"生活可自理者且行動能力正常\"},{\"name\":\"end_indicator\",\"value\":\"因應COVID-19疫情個案都必須做過快篩機制結果為陰性者才能入住\"},{\"name\":\"resource_w_referrals\",\"value\":\"\"},{\"name\":\"customFile1\",\"value\":\"undefined\"}]\"', '../upload/undefined', '');

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
  `Case_storage` varchar(200) NOT NULL,
  `Upload_info` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL,
  `Supervise1` varchar(100) NOT NULL,
  `Supervise1_signature` longtext NOT NULL,
  `Supervise1_sign_msg` longtext NOT NULL,
  `Supervise1_sign_time` varchar(200) NOT NULL,
  `Supervise2` varchar(100) NOT NULL,
  `Supervise2_signature` longtext NOT NULL,
  `Supervise2_sign_msg` longtext NOT NULL,
  `Supervise2_sign_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `form_all_info`
--

INSERT INTO `form_all_info` (`Id`, `Case_seqid`, `Case_id`, `Case_name`, `Case_pid`, `Is_upload`, `Url`, `Upload_path`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Case_storage`, `Upload_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise1`, `Supervise1_signature`, `Supervise1_sign_msg`, `Supervise1_sign_time`, `Supervise2`, `Supervise2_signature`, `Supervise2_sign_msg`, `Supervise2_sign_time`) VALUES
(1, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/aaaaaaa.docx', 0, 'life', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_life0\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_life0\",\"value\":\"2023-09-18\"},{\"name\":\"add_new_typelife0\",\"value\":\"上傳檔案\"},{\"name\":\"result_scorelife0\",\"value\":\"test88/test結果\\n919\"},{\"name\":\"test_typelife0\",\"value\":\"前測\"},{\"name\":\"filelife0\",\"value\":\"aaaaaaa.docx\"},{\"name\":\"remarklife0\",\"value\":\"111remark\\n919\"}]\"', '2023-09-19 00:44:30', '社工組長', '2023-09-19 23:18:20', '社工組長', '園主任', '../signature/1695055559.png', 'tesaraasas', '2023-09-19 00:45:59', '執行長', '', '', ''),
(2, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'case', '2023-09-19', 'test個案評估表', '\"[{\"name\":\"case\",\"value\":\"暫不結案，持續服務至民國年月日\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-20 00:09:43', '社工組長', '', '', '', '', '', '', '', ''),
(3, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'interlocution', '0000-00-00', 'test會談紀錄', '\"[{\"name\":\"interlocution\",\"value\":\"\"},{\"name\":\"interlocution\",\"value\":\"aaaaaa\"},{\"name\":\"interlocution\",\"value\":\"社工組長\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-20 21:19:12', '社工組長', '', '', '', '', '', '', '', ''),
(4, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'resource', '0000-00-00', '', '', '', '', '2023-09-19 00:00:00', '社工組長', '0000-00-00 00:00:00', '', '', '', '', '', '', '', '', ''),
(5, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 1, 'life', '2023-09-19', '', '\"[{\"name\":\"life\",\"value\":\"<div>第一部分得分：-分，結果：。<br/>第二部分得分：-分。</div>\"},{\"name\":\"life\",\"value\":\"中測\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-19 23:24:56', '社工組長', '', '', '', '', '', '', '', ''),
(6, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'health', '2023-09-19', '', '', '', '', '2023-09-19 00:00:00', '社工組長', '0000-00-00 00:00:00', '', '', '', '', '', '', '', '', ''),
(7, '6', 'RE111', 'test', 'T1334356112', 1, '', '', 0, 'sullen', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"upload_date_sullen0\",\"value\":\"2023-09-19\"},{\"name\":\"scoresullen0\",\"value\":\"88\"},{\"name\":\"filesullen0\",\"value\":\"\"},{\"name\":\"test_typesullen0\",\"value\":\"前測\"},{\"name\":\"remarksullen0\",\"value\":\"aaaaaab\"}]\"', '2023-09-19 23:30:11', '社工組長', '2023-09-19 23:30:16', '社工組長', '園主任', '', '', '', '執行長', '', '', ''),
(8, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'employment_satif', '2023-09-19', '就業需求評估表&就業服務滿意度調查表', '\"[{\"name\":\"employment_satif\",\"value\":\"26\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-19 23:30:45', '社工組長', '', '', '', '', '', '', '', ''),
(9, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'satif', '2023-09-19', 'test5服務滿意度量表', '\"[{\"name\":\"satif\",\"value\":\"60\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-19 23:31:19', '社工組長', '', '', '', '', '', '', '', ''),
(10, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'familyship', '2023-09-19', 'test5家庭關係', '\"[{\"name\":\"familyship\",\"value\":\"4\"},{\"name\":\"familyship\",\"value\":\"中測\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-19 23:31:44', '社工組長', '', '', '', '', '', '', '', ''),
(11, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'BSRS5', '0000-00-00', 'test5BSRS-5量表', '\"[{\"name\":\"BSRS5\",\"value\":\"2\"},{\"name\":\"BSRS5\",\"value\":\"ddddddddddd\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-20 00:02:04', '社工組長', '', '', '', '', '', '', '', ''),
(12, '6', 'RE111', 'test', 'T1334356112', 0, 'case_detail.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03', '', 0, 'settlement', '2023-09-19', '', '\"[{\"name\":\"settlement\",\"value\":\"符合基本條件指標條件共2項，符合收案指標條件共3項。\"}]\"', 'cache', '', '2023-09-19 00:00:00', '社工組長', '2023-09-19 23:32:54', '社工組長', '', '', '', '', '', '', '', ''),
(13, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/fasda.docx', 1, 'case', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_case1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_case1\",\"value\":\"2023-09-14\"},{\"name\":\"add_new_typecase1\",\"value\":\"上傳檔案\"},{\"name\":\"resultcase1\",\"value\":\"結案919\"},{\"name\":\"filecase1\",\"value\":\"fasda.docx\"},{\"name\":\"remarkcase1\",\"value\":\"已結案個案評估表919\"}]\"', '2023-09-19 23:37:29', '社工組長', '0000-00-00 00:00:00', '', '園主任', '', '', '', '執行長', '', '', ''),
(14, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/fas.docx', 1, 'interlocution', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_interlocution1\",\"value\":\"2023-09-19\"},{\"name\":\"add_new_typeinterlocution1\",\"value\":\"上傳檔案\"},{\"name\":\"interlocution_dateinterlocution1\",\"value\":\"2023-09-13\"},{\"name\":\"interlocution_quesinterlocution1\",\"value\":\"test問題陳述\"},{\"name\":\"assign_nameinterlocution1\",\"value\":\"社工組長\"},{\"name\":\"fileinterlocution1\",\"value\":\"fas.docx\"},{\"name\":\"remarkinterlocution1\",\"value\":\"會談紀錄919\"}]\"', '2023-09-19 23:38:09', '社工組長', '0000-00-00 00:00:00', '', '園主任', '', '', '', '執行長', '', '', ''),
(15, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/resoruce0919.docx', 1, 'resource', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_resource1\",\"value\":\"2023-09-19\"},{\"name\":\"add_new_typeresource1\",\"value\":\"上傳檔案\"},{\"name\":\"fileresource1\",\"value\":\"resoruce0919.docx\"},{\"name\":\"remarkresource1\",\"value\":\"社會資源應用表格919\"}]\"', '2023-09-19 23:38:48', '社工組長', '0000-00-00 00:00:00', '', '園主任', '', '', '', '執行長', '', '', ''),
(16, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/health_tabn.docx', 1, 'health', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_health1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_health1\",\"value\":\"2023-09-14\"},{\"name\":\"add_new_typehealth1\",\"value\":\"上傳檔案\"},{\"name\":\"filehealth1\",\"value\":\"health_tabn.docx\"},{\"name\":\"remarkhealth1\",\"value\":\"健康管理評估表914\"}]\"', '2023-09-19 23:39:32', '社工組長', '0000-00-00 00:00:00', '', '園主任', '', '', '', '執行長', '', '', ''),
(17, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/eee_s919.docx', 1, 'employment_satif', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_employment_satif1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_employment_satif1\",\"value\":\"2023-09-13\"},{\"name\":\"add_new_typeemployment_satif1\",\"value\":\"上傳檔案\"},{\"name\":\"scoreemployment_satif1\",\"value\":\"90\"},{\"name\":\"fileemployment_satif1\",\"value\":\"eee_s919.docx\"},{\"name\":\"remarkemployment_satif1\",\"value\":\"就業服務滿意度913\"}]\"', '2023-09-19 23:40:26', '社工組長', '0000-00-00 00:00:00', '', '社工組長', '', '', '', '執行長', '', '', ''),
(18, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/ss66.docx', 1, 'satif', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_satif1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_satif1\",\"value\":\"2023-09-06\"},{\"name\":\"add_new_typesatif1\",\"value\":\"上傳檔案\"},{\"name\":\"scoresatif1\",\"value\":\"66\"},{\"name\":\"filesatif1\",\"value\":\"ss66.docx\"},{\"name\":\"remarksatif1\",\"value\":\"服務滿意度量表97\"}]\"', '2023-09-19 23:41:01', '社工組長', '0000-00-00 00:00:00', '', '社工組長', '', '', '', '歐陽美悌', '', '', ''),
(19, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/fa_919.docx', 1, 'familyship', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_familyship1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_familyship1\",\"value\":\"2023-09-13\"},{\"name\":\"add_new_typefamilyship1\",\"value\":\"上傳檔案\"},{\"name\":\"scorefamilyship1\",\"value\":\"86\"},{\"name\":\"test_typefamilyship1\",\"value\":\"前測\"},{\"name\":\"filefamilyship1\",\"value\":\"fa_919.docx\"},{\"name\":\"remarkfamilyship1\",\"value\":\"家庭關係913\"}]\"', '2023-09-19 23:41:54', '社工組長', '0000-00-00 00:00:00', '', '社工組長', '', '', '', '執行長', '', '', ''),
(20, '6', 'RE111', 'test', 'T1334356112', 1, '', '', 1, 'BSRS5', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_BSRS51\",\"value\":\"2023-09-19\"},{\"name\":\"add_new_typeBSRS51\",\"value\":\"上傳檔案\"},{\"name\":\"scoreBSRS51\",\"value\":\"3\"},{\"name\":\"disposeBSRS51\",\"value\":\"處置情形a\"},{\"name\":\"fileBSRS51\",\"value\":\"\"},{\"name\":\"remarkBSRS51\",\"value\":\"BSRS-5量表 919\"}]\"', '2023-09-19 23:42:37', '社工組長', '2023-09-20 00:11:48', '社工組長', '園主任', '', '', '', '執行長', '', '', ''),
(21, '6', 'RE111', 'test', 'T1334356112', 1, '', '../upload/case_all/setcase_919.docx', 1, 'settlement', '0000-00-00', '', '', 'storage', '\"[{\"name\":\"create_date_settlement1\",\"value\":\"2023-09-19\"},{\"name\":\"fillin_date_settlement1\",\"value\":\"2023-09-19\"},{\"name\":\"add_new_typesettlement1\",\"value\":\"上傳檔案\"},{\"name\":\"resultsettlement1\",\"value\":\"符合基本條件指標條件共4項，符合收案指標條件共5項。\"},{\"name\":\"filesettlement1\",\"value\":\"setcase_919.docx\"},{\"name\":\"remarksettlement1\",\"value\":\"安置、自立宿舍評估量表結案\"}]\"', '2023-09-19 23:43:22', '社工組長', '0000-00-00 00:00:00', '', '社工組長', '', '', '', '園主任', '', '', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `form_case_report`
--

INSERT INTO `form_case_report` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Open_case_date`, `Name`, `Birth`, `Gender`, `Address`, `Education`, `Drug_record`, `Referral`, `Demand`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '6', 'RE111', 6, 'case', '2022-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:50:22', '園主任', '2023-05-24 14:30:11', '園主任'),
(2, '6', 'RE111', 12, 'settlement', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2022-10-06 14:50:46', '園主任', '2023-09-19 23:32:54', '社工組長'),
(3, '6', 'RE111', 13, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '法律', '社工員1', '2022-10-06 14:52:03', '園主任', '2022-10-15 21:41:16', 'jia'),
(4, '6', 'RE111', 15, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '就業輔導', '社工員1', '2022-10-06 14:52:35', '園主任', '2022-10-15 21:41:21', 'jia'),
(5, '1', 'RE111', 1, 'case', '2021-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:52:58', '園主任', '2023-09-08 09:59:32', '社工組長'),
(6, '1', 'RE111', 3, 'case', '2021-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2022-10-06 14:53:07', '園主任', '2022-10-15 21:41:40', 'jia'),
(7, '1', 'RE111', 16, 'interlocution', '2021-08-08', 'test', '0000-00-00', '', '', '', '', '', '就醫', '社工員1', '2022-10-06 14:53:31', '園主任', '2022-10-15 21:41:46', 'jia'),
(8, '1', 'RE111', 17, 'interlocution', '2021-08-08', 'test', '0000-00-00', '', '', '', '', '', '經濟', '社工員1', '2022-10-06 14:53:44', '園主任', '2022-10-15 21:41:50', 'jia'),
(9, '2', 'RE112', 4, 'case', '2022-08-08', 'TEST0808', '1993-06-22', '女', '', '', '', '醫院', '', '社工員2', '2022-10-06 14:58:31', '園主任', '2022-10-24 10:37:21', '園主任'),
(10, '2', 'RE112', 9, 'interlocution', '2022-08-08', 'TEST0808', '0000-00-00', '', '', '', '', '', '就業輔導', '社工員2', '2022-10-06 14:58:38', '園主任', '2022-10-15 21:40:49', 'jia'),
(11, '4', 'RE113', 18, 'interlocution', '2022-08-03', '黃QQ', '0000-00-00', '', '', '', '', '', '就業媒合', '社工組長', '2022-10-06 14:58:50', '園主任', '2022-10-15 21:42:02', 'jia'),
(12, '4', 'RE113', 19, 'interlocution', '2022-08-03', '黃QQ', '0000-00-00', '', '', '', '', '', '家庭關係', '社工組長', '2022-10-06 14:58:57', '園主任', '2022-10-15 21:42:07', 'jia'),
(13, '5', 'RE114', 21, 'case', '2021-06-11', 'test611', '1995-12-12', '', '高雄市', '初中', '', '自行求助', '', '社工員2', '2022-10-06 17:49:24', '園主任', '2022-10-15 21:42:18', 'jia'),
(14, '6', 'RE111', 25, 'BSRS5', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2022-10-15 21:10:40', 'jia', '2022-10-15 21:10:40', ''),
(15, '7', '123', 27, 'case', '2022-10-24', '瓜', '2022-10-20', '女', '', '', '', '教會', '', '丘培民', '2022-10-24 10:38:02', 'jia', '2022-10-24 11:41:54', '園主任'),
(16, '8', '440', 33, 'case', '2022-10-01', '測O試', '1974-04-21', '女', '屏東縣', '不識字', '其他', '警政', '', 'test001', '2022-10-25 11:35:52', '花花', '2022-10-25 11:39:40', '花花'),
(17, '8', '440', 34, 'interlocution', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '入住規範入住規範', 'test001', '2022-10-25 11:44:06', '花花', '2022-10-25 11:44:06', ''),
(18, '8', '440', 35, 'resource', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 11:49:32', '花花', '2022-10-25 11:49:32', ''),
(19, '8', '440', 36, 'life', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 11:53:51', '花花', '2022-10-25 11:54:59', '花花'),
(20, '8', '440', 37, 'health', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 13:08:29', '花花', '2022-10-25 13:13:44', '花花'),
(21, '8', '440', 39, 'employment_satif', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 14:02:24', '花花', '2022-10-25 14:04:40', '花花'),
(22, '8', '440', 40, 'satif', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 14:06:07', '花花', '2022-10-25 14:06:07', ''),
(23, '8', '440', 41, 'familyship', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 14:06:48', '花花', '2022-10-25 14:07:11', '花花'),
(24, '8', '440', 42, 'BSRS5', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 14:07:53', '花花', '2022-10-25 14:08:38', '花花'),
(25, '8', '440', 43, 'settlement', '2022-10-01', '測O試', '0000-00-00', '', '', '', '', '', '', 'test001', '2022-10-25 14:09:41', '花花', '2022-10-25 14:12:36', '花花'),
(26, '10', 'RE877', 49, 'life', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:17:07', '花花', '2022-12-09 10:17:30', '花花'),
(27, '10', 'RE877', 50, 'interlocution', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '入住規範入住規範', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:19:33', '花花', '2022-12-09 10:21:20', '花花'),
(28, '10', 'RE877', 51, 'satif', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:21:59', '花花', '2022-12-09 10:21:59', ''),
(29, '11', '441', 52, 'case', '2022-12-09', '立可貸', '1997-10-19', '其他', '', '', '', '民間社福機構', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:23:23', '花花', '2022-12-09 10:23:59', '花花'),
(30, '11', '441', 53, 'interlocution', '2022-12-09', '立可貸', '0000-00-00', '', '', '', '', '', '法律', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:26:55', '花花', '2022-12-09 10:26:55', ''),
(31, '11', '441', 54, 'interlocution', '2022-12-09', '立可貸', '0000-00-00', '', '', '', '', '', '家庭培力', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:27:41', '花花', '2022-12-09 10:27:41', ''),
(32, '11', '441', 55, 'BSRS5', '2022-12-09', '立可貸', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 10:28:44', '花花', '2022-12-09 10:28:44', ''),
(33, '10', 'RE877', 56, 'resource', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:44:16', '花花', '2022-12-09 14:44:16', ''),
(34, '10', 'RE877', 57, 'health', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:47:01', '花花', '2022-12-09 14:49:31', '花花'),
(35, '10', 'RE877', 59, 'employment_satif', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:57:25', '花花', '2022-12-09 14:57:41', '花花'),
(36, '10', 'RE877', 60, 'familyship', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:58:41', '花花', '2022-12-09 14:58:53', '花花'),
(37, '10', 'RE877', 61, 'BSRS5', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 14:59:15', '花花', '2022-12-09 14:59:30', '花花'),
(38, '10', 'RE877', 62, 'settlement', '2022-12-09', '何竹田', '0000-00-00', '', '', '', '', '', '', 'ㄓㄜㄒㄧㄢ', '2022-12-09 15:03:15', '花花', '2022-12-09 15:03:58', '花花'),
(39, '6', 'RE111', 69, 'case', '2022-08-08', 'test', '1991-02-03', '男', '屏東縣', '高中職', '其他', '其他', '', '社工員1', '2023-06-16 11:08:56', '花花', '2023-06-16 11:09:43', '花花'),
(40, '12', '442', 70, 'case', '2023-07-20', 'wu小姐', '2004-06-22', '其他', '屏東縣', '高中職', '安非他命', '醫院', '', '花花', '2023-07-20 10:50:42', '花花', '2023-07-20 10:57:32', '花花'),
(41, '12', '442', 71, 'interlocution', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '如何就醫', '花花', '2023-07-20 11:04:54', '花花', '2023-07-20 11:05:08', '花花'),
(42, '12', '442', 72, 'resource', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:07:22', '花花', '2023-07-20 11:07:38', '花花'),
(43, '12', '442', 73, 'life', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:09:57', '花花', '2023-07-20 11:10:16', '花花'),
(44, '12', '442', 74, 'health', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:12:09', '花花', '2023-07-20 11:13:35', '花花'),
(45, '12', '442', 77, 'employment_satif', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:45:45', '花花', '2023-07-20 11:46:41', '花花'),
(46, '12', '442', 78, 'satif', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:48:19', '花花', '2023-07-20 11:48:19', ''),
(47, '12', '442', 79, 'familyship', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:50:24', '花花', '2023-07-20 11:53:02', '花花'),
(48, '12', '442', 69, 'BSRS5', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:54:29', '花花', '2023-07-20 11:54:29', ''),
(49, '12', '442', 80, 'settlement', '2023-07-20', 'wu小姐', '0000-00-00', '', '', '', '', '', '', '花花', '2023-07-20 11:57:26', '花花', '2023-07-20 11:57:26', ''),
(50, '6', 'RE111', 2, 'case', '2022-08-08', 'test', '1991-02-03', '男', '', '', '', '其他', '', '社工員1', '2023-09-19 23:23:12', '社工組長', '2023-09-20 00:09:43', '社工組長'),
(51, '6', 'RE111', 3, 'interlocution', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '就醫、就業媒合、法律、家庭關係、就業職訓', '社工員1', '2023-09-19 23:23:59', '社工組長', '2023-09-20 21:19:12', '社工組長'),
(52, '6', 'RE111', 4, 'resource', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:24:21', '社工組長', '2023-09-19 23:24:26', '社工組長'),
(53, '6', 'RE111', 5, 'life', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:24:56', '社工組長', '2023-09-19 23:24:56', ''),
(54, '6', 'RE111', 8, 'employment_satif', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:30:45', '社工組長', '2023-09-19 23:30:45', ''),
(55, '6', 'RE111', 9, 'satif', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:31:19', '社工組長', '2023-09-19 23:31:19', ''),
(56, '6', 'RE111', 10, 'familyship', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:31:44', '社工組長', '2023-09-19 23:31:44', ''),
(57, '6', 'RE111', 11, 'BSRS5', '2022-08-08', 'test', '0000-00-00', '', '', '', '', '', '', '社工員1', '2023-09-19 23:32:11', '社工組長', '2023-09-20 00:02:04', '社工組長');

-- --------------------------------------------------------

--
-- 資料表結構 `form_interlocution_queskeywords`
--

CREATE TABLE `form_interlocution_queskeywords` (
  `Id` int(244) NOT NULL,
  `Ques_type` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(16, '入住規範入住規範'),
(17, '如何就醫'),
(18, 'test');

-- --------------------------------------------------------

--
-- 資料表結構 `leave_rule_table`
--

CREATE TABLE `leave_rule_table` (
  `Id` int(30) NOT NULL,
  `Rule_table_json` longtext NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `leave_rule_table`
--

INSERT INTO `leave_rule_table` (`Id`, `Rule_table_json`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '[\"3\",\"7\",\"10\",\"14\",\"14\",\"15\",\"15\",\"15\",\"15\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\",\"23\",\"24\",\"25\",\"26\",\"27\",\"28\",\"29\",\"30\",\"30\"]', '2022-12-01 10:13:54', 'jia', '2023-03-30 18:18:59', 'jia');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(108, '2022-10-24 10:02:36', 'test5', '3', '園主任', '22.7189,120.4412', 1),
(109, '2022-10-24 10:16:27', 'text1', '1', 'jia', '22.6622,120.4916', 1),
(110, '2022-10-25 09:35:49', 'test', '1', '花花', '22.5989885,120.559418', 1),
(111, '2022-10-25 15:35:22', 'test5', '3', '園主任', '22.6483444,120.3262535', 1),
(112, '2022-10-25 15:41:32', 'text1', '1', 'jia', '22.6478837,120.6119199', 1),
(113, '2022-10-25 16:21:36', 'test', '1', '花花', '22.598993,120.559417', 0),
(114, '2022-10-26 14:10:13', 'text1', '1', 'jia', '22.6622,120.4916', 1),
(115, '2022-10-27 17:09:54', 'text1', '1', 'jia', '22.6483444,120.3262535', 1),
(116, '2022-10-28 10:11:47', 'text1', '1', 'jia', '25.0384,121.5637', 1),
(117, '2022-10-28 13:33:16', 'test5', '3', '園主任', '22.6478971,120.6119418', 1),
(118, '2022-10-28 13:55:46', 'text1', '1', '社工員1', '22.6479106,120.6119313', 0),
(119, '2022-10-31 16:34:01', 'text1', '1', '社工員1', '22.6483444,120.3262535', 1),
(120, '2022-11-01 14:51:43', 'text1', '1', '社工員1', '22.5937,120.542', 1),
(121, '2022-11-01 18:25:40', 'text1', '1', '社工員1', '22.6483444,120.3262535', 0),
(122, '2022-11-07 16:41:14', 'text1', '1', '社工員1', '22.6478892,120.6119463', 1),
(123, '2022-11-15 21:30:48', 'text1', '1', '社工員1', '22.6479066,120.6119246', 1),
(124, '2022-11-18 13:15:01', 'text1', '1', 'jia', '22.6478996,120.6119327', 1),
(125, '2022-11-18 17:35:38', 'text1', '1', '社工員1', '22.6479185,120.6119187', 0),
(126, '2022-11-24 10:03:32', 'text1', '1', '社工員1', '22.98133,120.2224227', 1),
(127, '2022-11-30 13:37:44', 'test5', '3', '園主任', '22.6478894,120.61194', 1),
(128, '2022-11-30 14:09:55', 'test5', '3', '園主任', '22.6699,120.5806', 0),
(129, '2022-11-30 15:16:48', 'text1', '1', '社工員1', '22.6622,120.4916', 1),
(130, '2022-12-01 10:32:06', 'text1', '1', '社工員1', '22.6699,120.5806', 1),
(131, '2022-12-01 13:52:51', 'text1', '1', '社工員1', '22.6478852,120.6119413', 0),
(132, '2022-12-02 13:22:15', 'text1', '1', '社工員1', '22.647884,120.6119392', 1),
(133, '2022-12-06 19:50:47', 'text1', '1', '社工員1', '22.6478709,120.6119534', 1),
(134, '2022-12-08 10:57:57', 'test5', '3', '叫http好了', '22.6459648,120.6059008', 1),
(135, '2022-12-08 10:58:37', 'text1', '1', '社工員1', '22.6459648,120.6059008', 1),
(136, '2022-12-09 13:31:39', 'text1', '1', '社工員1', '22.7344384,120.5796864', 1),
(137, '2022-12-12 20:13:51', 'text1', '1', '社工員1', '22.647902,120.6119256', 1),
(138, '2022-12-26 13:25:01', 'text1', '1', '社工員1', '22.6479155,120.6119273', 1),
(139, '2022-12-29 11:22:59', 'text1', '1', '社工員1', '22.6479072,120.6119451', 1),
(140, '2022-12-29 13:50:30', 'test5', '3', '叫http好了', '22.6699,120.5806', 1),
(141, '2023-01-12 13:01:15', 'text1', '1', '社工員1', '22.6492416,120.6091776', 1),
(142, '2023-01-13 10:22:20', 'text1', '1', '社工員1', '22.6358323,120.3089428', 1),
(143, '2023-02-02 13:55:48', 'text1', '1', 'jia', '22.6479171,120.611908', 1),
(144, '2023-02-22 11:01:30', 'text1', '1', 'jia', '22.6479163,120.6119113', 1),
(145, '2023-03-16 16:21:25', 'text1', '1', 'jia', '22.6479027,120.6119512', 1),
(146, '2023-03-30 18:31:21', 'testuser', '1', 'jia', '22.6478603,120.6119272', 1),
(147, '2023-03-30 18:33:19', 'test3', '2', '社工組長', '22.6478843,120.6119294', 1),
(148, '2023-03-30 18:40:03', 'test3', '3', '社工組長', '22.6478806,120.6119355', 0),
(149, '2023-03-30 18:41:40', 'testuser', '1', 'jia', '22.6478896,120.6119322', 0),
(150, '2023-03-30 19:39:27', 'twha202212061557', '1', 'ㄓㄜㄒㄧㄢ', '22.6478965,120.6119217', 1),
(151, '2023-03-30 20:06:41', 'text1', '1', '社工員1', '22.6699,120.5806', 1),
(152, '2023-03-31 14:14:36', 'text1', '1', '社工員1', '22.5937263,120.4888954', 1),
(153, '2023-03-31 14:16:54', 'test3', '3', '社工組長', '22.6483444,120.3262535', 1),
(154, '2023-03-31 21:35:11', 'text1', '1', '社工員1', '22.6483444,120.3262535', 0),
(155, '2023-04-13 12:55:51', 'text1', '1', '社工員1', '22.6478628,120.6119423', 1),
(156, '2023-04-13 13:03:00', 'text1', '1', '社工員1', '22.6478807,120.6119262', 0),
(157, '2023-04-13 13:21:21', 'text1', '1', '社工員1', '22.8451812,120.2627998', 0),
(158, '2023-04-13 13:23:32', 'text1', '1', '社工員1', '22.8451812,120.2627998', 0),
(159, '2023-04-13 13:49:18', 'text1', '1', '社工員1', '22.8278398,120.257872', 0),
(160, '2023-04-13 14:02:22', 'text1', '1', '社工員1', '22.6787328,120.5108736', 0),
(161, '2023-04-13 14:02:46', 'text1', '1', '社工員1', '22.8451812,120.2627998', 0),
(162, '2023-04-13 14:30:30', 'text1', '1', '社工員1', '22.4591872,120.4486144', 0),
(163, '2023-04-13 16:16:34', 'text1', '1', '社工員1', '22.6622,120.4916', 0),
(164, '2023-04-19 19:30:30', 'text1', '1', '社工員1', '22.5937109,120.4889104', 1),
(165, '2023-05-17 18:15:25', 'test5', '3', '叫http好了', '22.6478834,120.6119256', 1),
(166, '2023-05-24 10:44:57', 'text1', '1', '社工員1', '22.6478737,120.6119298', 1),
(167, '2023-05-24 14:09:15', 'test5', '3', '園主任', '22.5867259,120.4933512', 1),
(168, '2023-05-24 14:36:57', 'text1', '1', '社工員1', '22.6845,120.4854', 0),
(169, '2023-05-24 14:52:57', 'text1', '1', '社工員1', '22.626304,120.5108736', 0),
(170, '2023-05-25 20:52:26', 'test5', '3', '園主任', '22.5937437,120.4889049', 1),
(171, '2023-06-06 09:14:44', 'text1', '1', '社工員1', '22.6478618,120.6119351', 1),
(172, '2023-06-06 12:34:43', 'text1', '1', '社工員1', '22.5837056,120.4912128', 0),
(173, '2023-06-08 15:35:45', 'test3', '3', '社工組長', '22.647866,120.6119376', 1),
(174, '2023-06-15 10:48:36', 'text1', '1', '社工員1', '22.6558442,120.4703258', 1),
(175, '2023-06-15 11:01:24', 'text1', '1', '社工員1', '22.6478709,120.6119264', 0),
(176, '2023-06-15 13:46:12', 'text1', '1', '社工員1', '22.5837056,120.4912128', 0),
(177, '2023-06-15 13:47:05', 'test3', '3', '社工組長', '22.5837056,120.4912128', 1),
(178, '2023-06-15 13:54:49', 'test3', '3', '社工組長', '22.5837056,120.4912128', 0),
(179, '2023-06-15 21:16:12', 'test3', '3', '社工組長', '22.5837056,120.4912128', 0),
(180, '2023-06-16 10:37:53', 'text1', '1', '社工員1', '22.641,120.5126', 1),
(181, '2023-06-16 10:41:53', 'test', '1', '花花', '22.675456,120.471552', 1),
(182, '2023-06-16 10:49:27', 'text1', '1', '社工員1', '22.641,120.5126', 0),
(183, '2023-06-16 10:52:51', 'text1', '1', '社工員1', '22.641,120.5126', 0),
(184, '2023-07-12 10:44:27', 'text1', '1', '社工員1', '22.6478634,120.6119446', 1),
(185, '2023-07-12 18:58:43', 'test3', '3', '社工組長', '22.5869824,120.4912128', 1),
(186, '2023-07-13 11:08:59', 'text1', '1', '社工員1', '22.6478847,120.6119287', 1),
(187, '2023-07-13 13:43:22', 'text1', '1', '社工員1', '22.5556697,120.539412', 0),
(188, '2023-07-13 14:44:27', 'test3', '3', '社工組長', '22.6699,120.5806', 1),
(189, '2023-07-13 15:10:49', 'text1', '1', '社工員1', '22.647872,120.6119439', 0),
(190, '2023-07-14 10:00:21', 'text1', '1', '社工員1', '22.6478777,120.6119283', 1),
(191, '2023-07-14 11:59:53', 'test6', '4', '執行長', '22.647874,120.6119461', 1),
(192, '2023-07-14 13:13:21', 'text1', '1', '社工員1', '22.6478649,120.6119424', 0),
(193, '2023-07-14 16:05:08', 'text1', '1', '社工員1', '22.5837056,120.4912128', 0),
(194, '2023-07-14 16:08:00', 'text1', '1', '社工員1', '22.6478637,120.6119572', 0),
(195, '2023-07-14 16:09:18', 'text1', '1', '社工員1', '22.7311616,120.4944896', 0),
(196, '2023-07-14 16:10:50', 'text1', '1', '社工員1', '22.6662,120.4732', 0),
(197, '2023-07-18 10:06:43', 'test', '1', '花花', '22.5555859,120.539412', 1),
(198, '2023-07-20 09:45:11', 'test', '1', '花花', '22.7367857,120.4933512', 1),
(199, '2023-07-20 09:50:59', 'test', '1', '花花', '22.7367857,120.4933512', 0),
(200, '2023-07-21 17:30:55', 'test', '1', '花花', '22.7049472,120.5764096', 1),
(201, '2023-08-08 12:19:37', 'text1', '1', '社工員1', '22.6478779,120.6119549', 1),
(202, '2023-08-09 13:01:23', 'text1', '1', '社工員1', '22.6478671,120.6119483', 1),
(203, '2023-08-17 18:21:22', 'test5', '3', '園主任', '22.5937436,120.488882', 1),
(204, '2023-08-23 15:26:46', 'test5', '3', '園主任', '22.5936998,120.4889058', 1),
(205, '2023-08-23 16:34:47', 'test5', '3', '園主任', '22.5585737,120.4522468', 0),
(206, '2023-08-30 13:53:00', 'text1', '1', '社工員1', '22.6478528,120.6119323', 1),
(207, '2023-08-30 18:49:24', 'test5', '3', '園主任', '22.5937072,120.4889061', 1),
(208, '2023-08-30 21:47:54', 'test5', '3', '園主任', '22.5937062,120.4889085', 0),
(209, '2023-08-31 14:48:04', 'test5', '3', '園主任', '24.1769764,120.6424333', 1),
(210, '2023-08-31 19:43:21', 'test5', '3', '園主任', '24.1769764,120.6424333', 0),
(211, '2023-08-31 21:31:10', 'test5', '3', '園主任', '22.6478722,120.6119505', 0),
(212, '2023-08-31 22:33:13', 'test5', '3', '園主任', '22.5938715,120.4888746', 0),
(213, '2023-09-05 20:06:15', 'test5', '3', '園主任', '22.593865083333338,120.48887100000002', 1),
(214, '2023-09-05 20:06:29', 'text1', '1', '社工員1', '22.593865083333338,120.48887100000002', 1),
(215, '2023-09-05 20:07:10', 'testuser', '1', 'jia', '22.593865083333338,120.48887100000002', 1),
(216, '2023-09-05 20:20:00', 'testuser', '1', 'jia', '22.593865083333338,120.48887100000002', 0),
(217, '2023-09-05 20:20:15', 'test5', '3', '園主任', '22.593865083333338,120.48887100000002', 0),
(218, '2023-09-05 20:32:06', 'test5', '3', '園主任', '22.5938715,120.4888746', 0),
(219, '2023-09-05 20:32:34', 'testuser', '1', 'jia', '22.5938715,120.4888746', 0),
(220, '2023-09-05 20:32:49', 'test5', '3', '園主任', '22.5938715,120.4888746', 0),
(221, '2023-09-05 20:44:58', 'twha202212061600', '3', 'ㄓㄒ', '22.593867916666667,120.48887750000003', 1),
(222, '2023-09-06 13:59:01', 'test5', '3', '園主任', '22.5105513,120.447285', 1),
(223, '2023-09-07 20:52:28', 'test3', '3', '社工組長', '22.4843158,120.4698871', 1),
(224, '2023-09-07 21:13:48', 'test01', '1', 'test001', '22.4843158,120.4698871', 1),
(225, '2023-09-07 21:17:26', 'ffff', '1', 'fffff', '22.4843158,120.4698871', 1),
(226, '2023-09-07 21:20:10', 'test3', '3', '社工組長', '22.4843158,120.4698871', 0),
(227, '2023-09-07 21:28:21', 'ffff', '1', 'fffff', '22.4843158,120.4698871', 0),
(228, '2023-09-07 21:30:11', 'test3', '3', '社工組長', '22.4843158,120.4698871', 0),
(229, '2023-09-08 09:37:21', 'test3', '3', '社工組長', '22.4843158,120.4698871', 1),
(230, '2023-09-09 22:50:54', 'test5', '3', '園主任', '22.5936803,120.4889298', 1),
(231, '2023-09-12 08:23:22', 'test3', '3', '社工組長', '22.4860994,120.4477014', 1),
(232, '2023-09-12 16:38:33', 'test5', '2', '園主任', '22.4860994,120.4477014', 1),
(233, '2023-09-12 16:38:45', 'test3', '3', '社工組長', '22.4860994,120.4477014', 0),
(234, '2023-09-12 23:21:40', 'test5', '2', '園主任', '24.1769764,120.6424333', 0),
(235, '2023-09-12 23:27:51', 'test3', '3', '社工組長', '24.1769764,120.6424333', 0),
(236, '2023-09-12 23:28:00', 'test3', '3', '社工組長', '24.1769764,120.6424333', 0),
(237, '2023-09-12 23:36:49', 'test3', '3', '社工組長', '24.1769764,120.6424333', 0),
(238, '2023-09-13 16:12:21', 'test3', '3', '社工組長', '22.593877,120.48887', 1),
(239, '2023-09-13 19:21:30', 'test3', '3', '社工組長', '22.6478587,120.6119873', 0),
(240, '2023-09-14 13:12:17', 'test3', '3', '社工組長', '22.599065814476354,120.55944537278793', 1),
(241, '2023-09-14 13:38:47', 'testuser', '5', 'jia', '22.599066871725896,120.55944512459295', 1),
(242, '2023-09-14 13:40:22', 'test3', '3', '社工組長', '22.599066871725896,120.55944512459295', 0),
(243, '2023-09-14 13:50:19', 'test3', '3', '社工組長', '22.6483444,120.3262535', 0),
(244, '2023-09-14 13:50:34', 'testuser', '5', 'jia', '22.599067,120.559445', 0),
(245, '2023-09-14 18:21:13', 'test3', '3', '社工組長', '22.59396,120.488805', 0),
(246, '2023-09-15 13:52:00', 'test3', '3', '社工組長', '22.593817,120.48880199999999', 1),
(247, '2023-09-15 13:52:47', 'testuser', '5', 'jia', '22.593817,120.48880199999999', 1),
(248, '2023-09-15 14:28:23', 'test3', '3', '社工組長', '22.593877,120.48887', 0),
(249, '2023-09-16 12:18:43', 'testuser', '5', 'jia', '22.593919,120.488807', 1),
(250, '2023-09-16 12:28:32', 'test3', '3', '社工組長', '22.593919,120.488807', 1),
(251, '2023-09-17 19:00:54', 'testuser', '5', 'jia', '22.5939065,120.4888475', 1),
(252, '2023-09-18 14:05:52', 'test3', '3', '社工組長', '22.720364,120.306796', 1),
(253, '2023-09-19 00:45:46', 'test5', '2', '園主任', '22.593877,120.48887', 0),
(254, '2023-09-19 19:39:10', 'test3', '3', '社工組長', '24.1418,120.6806', 1),
(255, '2023-09-20 20:24:13', 'test3', '3', '社工組長', '22.593919322429123,120.48880667757085', 1),
(256, '2023-09-20 23:34:47', 'test3', '3', '社工組長', '22.593919299897994,120.48880670010202', 0),
(257, '2023-09-22 12:23:49', 'text1', '7', '社工員1', '22.683296919004484,120.48382589803803', 1),
(258, '2023-09-23 09:39:36', 'text1', '7', '社工員1', '22.7802165,120.4937671', 1),
(259, '2023-09-25 13:15:01', 'testuser', '5', 'jia', '22.5939125,120.488813', 1),
(260, '2023-09-25 15:02:15', 'testuser', '5', 'jia', '22.593917186487676,120.48880871388471', 0),
(261, '2023-09-25 15:50:35', 'test5', '2', '園主任', '22.5939125,120.488813', 1),
(262, '2023-09-25 16:02:31', 'testuser', '5', 'jia', '22.593916472840217,120.48880938832706', 0),
(263, '2023-09-25 16:56:04', 'testuser', '5', 'jia', '22.593909666666665,120.48881566666667', 0),
(264, '2023-09-26 19:31:41', 'test5', '2', '園主任', '22.593916310975608,120.48880948217636', 1),
(265, '2023-09-27 19:40:07', 'test5', '2', '園主任', '22.593917186487676,120.48880871388471', 1),
(266, '2023-09-27 22:56:17', 'test5', '2', '園主任', '22.593916472840217,120.48880938832706', 0),
(267, '2023-09-29 15:05:58', 'test5', '2', '園主任', '22.5939125,120.488813', 1),
(268, '2023-09-29 18:35:23', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 1),
(269, '2023-09-29 20:42:58', 'test5', '2', '園主任', '22.593916310975608,120.48880948217636', 0),
(270, '2023-09-29 20:49:06', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 0),
(271, '2023-09-29 20:55:26', 'test5', '2', '園主任', '22.593909666666665,120.48881566666667', 0),
(272, '2023-10-01 12:41:00', 'testuser', '5', 'jia', '22.593916472840217,120.48880938832706', 1),
(273, '2023-10-02 15:27:20', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 1),
(274, '2023-10-02 15:32:33', 'test5', '2', '園主任', '22.593916310975608,120.48880948217636', 1),
(275, '2023-10-02 16:13:08', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 0),
(276, '2023-10-02 16:26:53', 'test5', '2', '園主任', '22.5939125,120.488813', 0),
(277, '2023-10-02 16:28:40', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 0),
(278, '2023-10-02 18:10:49', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 0),
(279, '2023-10-02 18:19:51', 'test5', '2', '園主任', '22.593916310975608,120.48880948217636', 0),
(280, '2023-10-02 19:10:50', 'testuser', '5', 'jia', '22.5939125,120.488813', 0),
(281, '2023-10-02 20:07:39', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 0),
(282, '2023-10-03 17:33:05', 'testuser', '5', 'jia', '22.593916310975608,120.48880948217636', 1),
(283, '2023-10-03 18:04:44', 'test5', '2', '園主任', '22.593916310975608,120.48880948217636', 1),
(284, '2023-10-03 18:47:23', 'test3', '3', '社工組長', '22.593916310975608,120.48880948217636', 1),
(285, '2023-10-03 18:53:00', 'testuser', '5', 'jia', '22.5939125,120.488813', 0),
(286, '2023-10-03 18:54:13', 'test5', '2', '園主任', '22.593916472840217,120.48880938832706', 0),
(287, '2023-10-03 19:13:06', 'test5', '2', '園主任', '22.593916135139327,120.48880971567179', 0),
(288, '2023-10-03 19:13:15', 'test5', '2', '園主任', '22.593916135139327,120.48880971567179', 0),
(289, '2023-10-04 14:33:31', 'test5', '2', '園主任', '22.5936353,120.4889542', 1),
(290, '2023-10-18 10:35:58', 'testuser', '5', 'jia', '22.473738068167826,120.45982048685022', 1),
(291, '2023-10-19 15:29:37', 'testuser', '5', 'jia', '22.593862,120.488856', 1),
(292, '2023-10-19 17:35:02', 'testuser', '5', 'jia', '22.593917,120.488809', 0),
(293, '2023-10-19 18:03:25', 'testuser', '5', 'jia', '22.593862,120.488856', 0),
(294, '2023-11-05 17:58:01', 'testuser', '5', 'jia', '22.5939034298948,120.48882057010519', 1),
(295, '2023-11-05 17:59:59', 'test6', '2', '執行長', '22.5939034298948,120.48882057010519', 1),
(296, '2023-11-15 20:28:50', 'test6', '2', '執行長', '22.5939034298948,120.48882057010519', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `members_assemble`
--

INSERT INTO `members_assemble` (`Id`, `Year`, `record_content`, `upload_content`, `file_path`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '109', '[{\"name\":\"title_name\",\"value\":\"test會員大會記錄標題123\"},{\"name\":\"meeting_date\",\"value\":\"109年08月13日\"},{\"name\":\"meeting_time\",\"value\":\"09:00\"},{\"name\":\"place\",\"value\":\"test會議地點\"},{\"name\":\"ceo_name\",\"value\":\"主席aaa\"},{\"name\":\"attendees\",\"value\":\"aa出席人員\"},{\"name\":\"absent\",\"value\":\"bb請假人員\"},{\"name\":\"record\",\"value\":\"dasda出\"},{\"name\":\"discuss\",\"value\":\"aaaaaa提案討論\"},{\"name\":\"motion\",\"value\":\"臨時動議bbbb：;;ddd\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-07 20:57:28', '社工員1', '2022-10-13 15:44:37', '社工組長'),
(2, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"test會員大會記錄標題\\tupload\"},{\"name\":\"upload_rec_date\",\"value\":\"111年04月06日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test備註\"},{\"name\":\"upload_rec_supervise\",\"value\":\"園主任\"},{\"name\":\"customFile1\",\"value\":\"test2報表_1100314.docx\"}]\"', '../members_assemble/upload/test2報表_1100314.docx', '園主任', '', '', '0000-00-00 00:00:00', '2022-10-07 21:01:24', '社工員1', '0000-00-00 00:00:00', ''),
(3, '109', '[{\"name\":\"title_name\",\"value\":\"會員大會記錄標題2\"},{\"name\":\"meeting_date\",\"value\":\"109年11月11日\"},{\"name\":\"meeting_time\",\"value\":\"13:10\"},{\"name\":\"place\",\"value\":\"會議地點BBB\"},{\"name\":\"ceo_name\",\"value\":\"主席NN\"},{\"name\":\"attendees\",\"value\":\"AA出席人員\"},{\"name\":\"absent\",\"value\":\"請假人員V\"},{\"name\":\"record\",\"value\":\"紀錄者T\"},{\"name\":\"discuss\",\"value\":\"AA提案討論\"},{\"name\":\"motion\",\"value\":\"臨時動議BSSDD\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-07 21:05:07', '社工員1', '2022-10-13 18:56:36', '社工組長'),
(4, '111', '[{\"name\":\"title_name\",\"value\":\"2022年度12月08日第八次理監事會\"},{\"name\":\"meeting_date\",\"value\":\"111年12月08日\"},{\"name\":\"meeting_time\",\"value\":\"01:40\"},{\"name\":\"place\",\"value\":\"會議地點\"},{\"name\":\"ceo_name\",\"value\":\"主席的主席\"},{\"name\":\"attendees\",\"value\":\"玻璃杯、水壺\"},{\"name\":\"absent\",\"value\":\"毛毛蟲\"},{\"name\":\"record\",\"value\":\"壁虎\"},{\"name\":\"discuss\",\"value\":\"是否延長及增加休息時間以免過度勞動？\"},{\"name\":\"motion\",\"value\":\"玉米是從哪裡出來的，答案：桃太郎在河裡撈的\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-08 11:38:06', '花花', '0000-00-00 00:00:00', ''),
(5, '109', '[{\"name\":\"title_name\",\"value\":\"2022年度12月08日第八次會員大會\"},{\"name\":\"meeting_date\",\"value\":\"109年12月13日\"},{\"name\":\"meeting_time\",\"value\":\"20:52\"},{\"name\":\"place\",\"value\":\"會議地點\"},{\"name\":\"ceo_name\",\"value\":\"ㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟㄟ\"},{\"name\":\"attendees\",\"value\":\"王雪凡、陈露程、曾嘉伊、申仔霁刘炫玉钟仁婷吴姗峰刘姿凡林晓凤赵翊祺白建屏魏恬伟葛卓涵蒋玉东曾莘琳胡本洱高芳宇卢琛平魏宗灵傅翀唐丽冰龚修东庞新涵方键汤豫毅龚照东周二智刘昊恒徐川廷阎栖晨\"},{\"name\":\"absent\",\"value\":\"一赵今冯瑾语朱元阳王晶霖袁依阳张旎婷张伟今琼侯乔涵吕武雯张辰冉任欣菲张俞麾魏泽华黄浩澧张雄月彭之仪刘昱敏陈泽\"},{\"name\":\"record\",\"value\":\"周二智\"},{\"name\":\"discuss\",\"value\":\"本研究目的是找出女性單親新住民之優勢，故本節將進行「優 勢觀點」之文獻探討。首先從探討優勢觀點出現的脈絡及與傳統工 作模式的差異所在；再來從文獻中了解優勢觀點之定義；最後是了 解優勢觀點在服務中所需遵守的服務原則。;;;;一、優勢觀點與社會工作;;;;「事事順利」、「馬到成功」、「心想事成」是中國文化中常 會出現的祝福吉祥語，但生活中又豈是真的都是事事順心，前進的 道路又怎可能毫無障礙、一路平坦呢?逆境並不全然就是不幸的事 情，安逸使人停滯，困境讓人激發潛能，換言之困境可能會激發個 體各項能力的展現。而社會工作專業的重要助人原則便是透過創造 個體自身能力與環境資源之間的平等關係，激發個體潛能以解決其 所面臨的困境 (曾仁杰，2014)。優勢觀點的出現就是讓社會工作 者能夠以不同於病理觀點的過度重視問題、缺陷為處遇焦點，改以 以多元正向的態度去看到個體的優勢與可能性，以回應社會工作的 助人原則。;;;;優勢觀點於 1980 年代在美國堪薩斯大學社會福利學院由實驗 方案開始發展並逐漸成形，最早運用於精神病患社區重建領域，之 後廣泛運用於老人與身心障礙者社區照顧、藥物濫用者復健、少年 非行矯治等(引自劉鶴群、詹巧盈、房智慧，2013)。;;;;優勢觀點強調以能力取向來看待個體，(張令臻，2008)；它的 基本假定包含「人有能力成長及變遷」、「人有界定其處境的能力 與知識」、「人有復原力」等三大項(王篤強，2007)。那其與病理;;;;觀點的差異為何呢? Saleebey(1996)將病理觀點與優勢觀點的哲學;;;;(資料來源：Saleebey,1996)\"},{\"name\":\"motion\",\"value\":\"(一)個人優勢：;;;;1.熱望：優勢觀點相信人類擁有慾望、目標、抱負、希望與夢 想。而且人因夢想而偉大，關注實現目標過程中的成長，而不僅是 處理過往創傷所造成的問題。;;;;2.能力：優勢觀點強調要個體是有能力的，有些能力是天生;;;;的，有些是尚未被開發出來的。對於個體能力要予以尊重並讓其可 發揮，使個體可以快速達到自己設定的目標。;;;;3.自信：相信自己有能力可以達成的，同時也要覺知個體要面 臨的挑戰為何及所具備的能力。;;;;(二)環境優勢：;;;;1.資源：包含正式與非正式網絡所提供的資源。優勢觀點強調 優先使用自然資源，且須具有可近性、持續性、多樣性、可及性。;;;;2.社會關係：每個人都是在生態環境中生活的一員，必然會與 他人建立社會關係。好的社會關係有助於個體對社會生活的適應。;;;;3.機會：優勢觀點提醒社會工作者「機會」是個體的重要資 源，有時個體並非能力上的弱勢，而是缺乏一個公平的「機會」。;;;;綜合上述，本研究之「優勢」係指個體本身的內在資源與環境 中所帶來的資源兩個部分。個體本身的特質、能力都是其內在資 源；個體所處的情境中包含家庭、正式及非正式資源都是女性單親 新住民環境的資源與優勢。;;;;三、優勢觀點的內涵要素;;;;對於「優勢歸點」的定義有所了解後，下列就其內涵要素進行 說明之：;;;;(一)復原(元)力(Resilience);;;;復原(元)力是優勢觀點的核心概念。它指的是個體改變態度、;;;;感受、價值、目標、技巧、及角色的獨特過程，是一種面對生活的;;;;方式、態度以及面對挑戰的方法。過程中並非都是呈現完美的直 線，搖擺不定甚至回到原點都是正常的現象。復原(元)力是建立在 希望、意願與負責的行動等三大基礎上(宋麗玉譯，2003)。;;;;復原(元)力是一種歷經扭曲、壓縮或延展之後能夠回復原狀的 力量或能力(曾月娥，2007)。換言之，復原(元)力是個體在面臨改 變、壓力的因應能力，並非是忽略生活中的痛苦，而是一種面對磨 難而抗爭的力量(余香靜，2010)。;;;;(二)增強權能(Empowerment);;;;增強權能在社會工作取向中是一種反壓力、反歧視的實務觀 點，分成直接目的與間接目的。直接目的在於協助個體恢復或取得 權能;間接目的在於提升個體的意識覺醒(Bransford,2011；\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-08 11:44:35', '花花', '0000-00-00 00:00:00', ''),
(6, '111', '', '\"[{\"name\":\"upload_title_name\",\"value\":\"一加一等於二\"},{\"name\":\"upload_rec_date\",\"value\":\"111年12月08日\"},{\"name\":\"upload_rec_remark\",\"value\":\"點此查詢「社會個案工作」其它章節 家庭系統理論: 家庭系統理論將家庭視為跨越時間，家人彼此互相關聯且相互影響的單位。 家庭系統倫理認為，為有效的幫助人，所採取的預防與介入的層次應該以家庭，而非以個人為主要目標。 因此，家庭系統理論與治療模式是以家庭為基礎，而不是以個人為基礎。 家庭系統理論的主要概念: 家庭系統理論的主要概念可分為: 整體性、殊途同歸、多目標性、配合度、階層組織、互相依賴、界限、滲透性、系統類型、變遷、家系圖、家庭三角關係。 1.整體性 家庭系統是由一群個體所組成，並形成一個複雜而整體合而為一的單位。 2.殊途同歸 是指從不同的開端與採用不同的手段可以獲得相同的結果。 3.多目標性 又稱同門異路性,是指起點相似的條件可能會導致不相似的目標發展。譬如,早期兒童有相同家庭背景與生活條件的個人也許在青少年期會產生不同的表現。 4.配合度 它是指在家庭系統的行為具有互補特性。 5.階層組織 它是指一層一層的系統逐層越來越複雜。譬如, 家庭系統由許多較小的次系統與較大的超系統。 (1)階層組織的概念是指家庭如何由許多較小的單位或次系統組成較大的家庭系統。 (2)這些次系統經常以性別或世代為組織分類。 (3)實務上可分為婚姻(或夫婦)次系統、父母次系統與兄弟姐妹次系統三種基本次系統。 6.互相依賴 組成整個系統的個體與次系統間是彼此依賴並彼此互相影響。例如,每個人與家庭有關的行為都是要與其他每個家人的行為互相配合。 7.界限 家庭與家庭間會劃分界限,在這時候會將屬於本家庭系統者劃分進來,而將屬於家庭以外者排除在系統以外。 每一層的家庭系統間也劃分界限,各次系統間也劃分界限。 界限會影響人們在家庭系統的進進出出。 界限的類型分個人界限與世代界限兩種。 個人界限:個人界限是圍繞個人與各次系統的無形的籓界。 世代界限:不同世代間的一種無形分割線 8.滲透性 是指資訊或系統成員可以跨越不同系統界限的難易程度。 9.系統類型 與系統界限有密切關係的概念是系統的開放性與封閉性。這兩個術語是指一個家庭系統在其家庭成員與其他系統間所建立的界限。 所有的家庭系統的開放程度與封閉程度都可以一條由極端開放到極端封閉的連續光譜中進行定位。 10.變遷;;點此查詢「社會個案工作」其它章節 問題呈現: 這個階段是整個工作過程的開端。 在此階段，案主準備呈現其問題，而簽訂契約是這個階段的關鍵工作。 此階段非常強調工作者與案主間的互動與案主的參與，社會個案工作者的態度是決定案主很重要的因素，如尊重案主的自尊、價值與其自我決定的權利應該是要經過溝通的，並須傾聽案主的問題及其看法。 在工作過程的每個階段，社會個案工作者應該在其社會工作價值觀的指導下，與案主合作共同發展其助人關\"},{\"name\":\"upload_rec_supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"},{\"name\":\"customFile1\",\"value\":\"個案管理系統行政管理1012.docx\"}]\"', '../members_assemble/upload/個案管理系統行政管理1012.docx', 'ㄓㄜㄒㄧㄢ', '../members_assemble/signature/1680176417.png', 'asadads', '2023-03-30 19:40:17', '2022-12-08 11:46:48', '花花', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `members_assemble_v2`
--

CREATE TABLE `members_assemble_v2` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `Agenda_file_path` longtext NOT NULL,
  `Rec_file_path` longtext NOT NULL,
  `Director` varchar(300) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(300) NOT NULL,
  `Supervise` varchar(300) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `members_assemble_v2`
--

INSERT INTO `members_assemble_v2` (`Id`, `Year`, `record_content`, `upload_content`, `Agenda_file_path`, `Rec_file_path`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '111', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會員大會記錄_議程test1111\"},{\"name\":\"upload_agenda_date\",\"value\":\"111年11月11日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"test;;議程;;111年11月11日\"},{\"name\":\"upload_title_name\",\"value\":\"test會員大會記錄標題1111111\"},{\"name\":\"upload_rec_date\",\"value\":\"111年11月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"111年11月11日;;test會員大會記錄\"},{\"name\":\"upload_rec_director\",\"value\":\"園主任\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '[\"../members_assemble/111_0_data/upload/test111_11_11-1.docx\",\"../members_assemble/111_0_data/upload/test111_11_11-1 - 複製.docx\",\"../members_assemble/111_0_data/upload/test111_11_11-2.docx\"]', '[\"../members_assemble/111_0_data/upload/test111_11_11-recx1.docx\",\"../members_assemble/111_0_data/upload/test111_11_11-recx2.docx\"]', '園主任', '', '', '', '執行長', '', '', '', '2023-08-30 22:06:49', '園主任', '0000-00-00 00:00:00', ''),
(2, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"tt會議章程0902\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年09月02日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"tt;;0902\"},{\"name\":\"upload_title_name\",\"value\":\"tt會員大會記錄0906\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月06日\"},{\"name\":\"upload_rec_remark\",\"value\":\"0906\"},{\"name\":\"director\",\"value\":\"園主任\"},{\"name\":\"supervise\",\"value\":\"執行長\"}]\"', '[\"../members_assemble/112_2_data/upload/ma0906.docx\"]', '', '園主任', '', '', '', '執行長', '', '', '', '2023-09-25 22:50:32', 'jia', '2023-09-25 22:50:59', 'jia'),
(3, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"會議章程標題1011\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年10月11日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"dwdaw\"},{\"name\":\"upload_title_name\",\"value\":\"會員大會記錄標題1011\"},{\"name\":\"upload_rec_date\",\"value\":\"112年10月11日\"},{\"name\":\"upload_rec_remark\",\"value\":\"dwd1011\"},{\"name\":\"upload_rec_director\",\"value\":\"園主任\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '', '', '園主任', '', '', '', '執行長', '', '', '', '2023-10-02 18:19:21', 'jia', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `overtime`
--

CREATE TABLE `overtime` (
  `Id` int(244) NOT NULL,
  `Resume_id` int(244) NOT NULL,
  `Resume_name` varchar(200) NOT NULL,
  `Rec_year` int(244) NOT NULL,
  `Fillin_date` date NOT NULL,
  `Overtime_date` varchar(500) NOT NULL,
  `Reason` longtext NOT NULL,
  `Overtime_hours` float NOT NULL,
  `Subsidy_type` varchar(100) NOT NULL,
  `Free_date` varchar(500) NOT NULL,
  `Free_hours` float NOT NULL,
  `Allow_status` varchar(100) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL,
  `Supervise` varchar(100) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(200) NOT NULL,
  `Checker` varchar(100) NOT NULL,
  `Checker_signature` longtext NOT NULL,
  `Checker_sign_msg` longtext NOT NULL,
  `Checkert_sign_time` varchar(200) NOT NULL,
  `Director` varchar(100) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `overtime`
--

INSERT INTO `overtime` (`Id`, `Resume_id`, `Resume_name`, `Rec_year`, `Fillin_date`, `Overtime_date`, `Reason`, `Overtime_hours`, `Subsidy_type`, `Free_date`, `Free_hours`, `Allow_status`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Checker`, `Checker_signature`, `Checker_sign_msg`, `Checkert_sign_time`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`) VALUES
(1, 1, 'jia', 112, '2023-06-03', '112.04.05', 'TEST加班事由0405', 1.5, '補休時數', '112.05.22', 1, '核准', '2023-06-03 21:13:21', 'jia', '2023-06-03 21:22:11', '社工組長', '執行長', '../signature/1685965617.png', '5512341', '2023-06-05 19:46:57', '社工員2', '', '', '', '社工組長', '../signature/1685965476.png', '', '2023-06-05 19:44:36'),
(2, 1, 'jia', 112, '2023-09-25', '112.09.08', 'test\r\n加班事由', 2.2, '加班津貼', '', 0, '核准', '2023-09-25 15:50:08', 'jia', '2023-09-25 16:01:57', '園主任', '執行長', '', '', '', '歐陽美悌', '', '', '', '園主任', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `peers_dlgrec`
--

CREATE TABLE `peers_dlgrec` (
  `Id` int(100) NOT NULL,
  `bf_num` int(100) NOT NULL,
  `al_num` int(100) NOT NULL,
  `em_num` int(100) NOT NULL,
  `lp_num` int(100) NOT NULL,
  `leave_num` int(100) NOT NULL,
  `peers_dlgrec_date` date NOT NULL,
  `peers_dlgrec_0` text NOT NULL,
  `peers_dlgrec_1` text NOT NULL,
  `peers_dlgrec_2` text NOT NULL,
  `peers_dlgrec_3` text NOT NULL,
  `peers_dlgrec_4` text NOT NULL,
  `peers_dlgrec_5` text NOT NULL,
  `peers_dlgrec_6` text NOT NULL,
  `peers_dlgrec_7` text NOT NULL,
  `peers_dlgrec_8` text NOT NULL,
  `peers_dlgrec_9` text NOT NULL,
  `peers_dlgrec_10` text NOT NULL,
  `peers_dlgrec_11` text NOT NULL,
  `dlg_manager` varchar(30) NOT NULL,
  `social_worker` varchar(30) NOT NULL,
  `social_worker_sign` longtext NOT NULL,
  `social_worker_sign_msg` longtext NOT NULL,
  `social_worker_sign_time` datetime NOT NULL,
  `supervise1` varchar(30) NOT NULL,
  `supervise1_sign` longtext NOT NULL,
  `supervise1_sign_msg` longtext NOT NULL,
  `supervise1_sign_time` datetime NOT NULL,
  `supervise2` varchar(30) NOT NULL,
  `supervise2_sign` longtext NOT NULL,
  `supervise2_sign_msg` longtext NOT NULL,
  `supervise2_sign_time` datetime NOT NULL,
  `Upload_name` varchar(500) NOT NULL,
  `Upload_path` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `peers_dlgrec`
--

INSERT INTO `peers_dlgrec` (`Id`, `bf_num`, `al_num`, `em_num`, `lp_num`, `leave_num`, `peers_dlgrec_date`, `peers_dlgrec_0`, `peers_dlgrec_1`, `peers_dlgrec_2`, `peers_dlgrec_3`, `peers_dlgrec_4`, `peers_dlgrec_5`, `peers_dlgrec_6`, `peers_dlgrec_7`, `peers_dlgrec_8`, `peers_dlgrec_9`, `peers_dlgrec_10`, `peers_dlgrec_11`, `dlg_manager`, `social_worker`, `social_worker_sign`, `social_worker_sign_msg`, `social_worker_sign_time`, `supervise1`, `supervise1_sign`, `supervise1_sign_msg`, `supervise1_sign_time`, `supervise2`, `supervise2_sign`, `supervise2_sign_msg`, `supervise2_sign_time`, `Upload_name`, `Upload_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 20, 30, 29, 33, 3, '2021-12-22', 'test1', '', '', '', '', 'test2', 't', '', '', '', 'test5', 'test6\n', 'testw', '社工員1', '../signature/1651571061.png', 'test社工員留言45', '2022-05-03 17:44:21', '園主任', '../signature/1651571093.png', 'test督導留言', '2022-05-03 17:44:53', '', '', '', '0000-00-00 00:00:00', '', '', '2022-04-07 20:46:39', '社工員1', '2022-10-13 19:00:30', '社工組長'),
(2, 17, 28, 28, 30, 2, '2021-11-10', 'test1', 'test2', 'test2', '', '', '', 'test3', 'test4', 'test特殊個案反應情形輔導處理', 'test輔導諮詢執行實況	', 'test問題處遇概況	', 'test備註	', 'test管理員/生活輔導員', '社工員1', '', '', '0000-00-00 00:00:00', '執行長', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '', '', '2022-04-07 20:47:56', '園主任', '2023-05-17 18:43:27', '叫http好了'),
(3, 10, 8, 9, 10, 3, '2022-10-25', 'NAH BAD', 'TOO HOT', 'TOO HOT', 'SLEEPING...', 'GREAT!', 'GET OFF WORK~~', 'DINNER', 'NIGHT!', '諮商', '讚', '很好', '沒有備註~~!', '工讀生', '社工員1', '../signature/1666679062.png', '', '2022-10-25 14:24:22', '社工組長', '../signature/1666679094.png', '', '2022-10-25 14:24:54', '', '', '', '0000-00-00 00:00:00', '', '', '2022-10-25 14:23:54', '花花', '2023-05-17 18:41:45', '叫http好了'),
(4, 7, 7, 6, 8, 0, '2022-12-01', '讚，太早了', '讚', '讚', '讚', '讚', '讚', '讚', '讚，很早睡', '家庭會議', '順利', '因為...所以...', '無', 'ㄓㄜㄒㄧㄢ生輔', 'jia', '../signature/1682943115.png', '', '2023-05-01 20:11:55', '社工組長', '../signature/1670553179.png', '', '2022-12-09 10:32:59', '', '', '', '0000-00-00 00:00:00', '', '', '2022-12-09 10:31:56', '花花', '2023-05-17 18:40:44', '叫http好了'),
(5, 21, 17, 27, 28, 2, '2022-11-25', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '如', 'ㄓㄒ', '../signature/1670553351.png', '', '2022-12-09 10:35:51', '花花', '', '', '0000-00-00 00:00:00', '', '', '', '0000-00-00 00:00:00', '', '', '2022-12-09 10:35:40', '花花', '2023-05-17 18:41:23', '叫http好了'),
(6, 3, 5, 6, 14, 0, '2023-03-04', 'test6', 'test9', 'test9', 'test12', 'test14', 'test17', 'tez18', 'tadsa21', 'test特殊個案反應情形輔導處理', 'test\n輔導諮詢執行實況', 'test\n問題處遇概況', 'test備註', 'test生活輔導員', '社工員1', '', '', '0000-00-00 00:00:00', '園主任', '', '', '0000-00-00 00:00:00', '執行長', '../signature/1685971065.png', 'test65', '2023-06-05 21:17:45', '', '', '2023-06-05 21:11:44', '執行長', '2023-06-05 21:16:17', '執行長'),
(7, 3, 3, 3, 3, 1, '2023-07-20', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ\n', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', 'ㄏㄏ', '張11', '花花', '', '', '0000-00-00 00:00:00', '社工員1', '', '', '0000-00-00 00:00:00', '社工員2', '', '', '0000-00-00 00:00:00', '', '', '2023-07-20 14:58:13', '花花', '2023-07-20 14:58:13', ''),
(8, 333, 33, 434, 32, 3242, '2023-08-18', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'rr', 'e', 'r', 'rrerw', '晏傳恕', '', '', '0000-00-00 00:00:00', '晏傳恕', '', '', '0000-00-00 00:00:00', '晏傳恕', '', '', '0000-00-00 00:00:00', '', '', '2023-08-09 14:54:53', '社工員1', '2023-08-09 14:54:53', ''),
(9, 3, 3, 3, 3, 0, '2023-08-04', 'dadad', '2222', '2222', '333', '444', '555', '666', '777', '888', '8889', '88822', '21123131221\nffffffffffff', 'test12312', '社工員2', '', '', '0000-00-00 00:00:00', '園主任', '../signature/1693488918.png', 'aaaaa', '2023-08-31 21:35:18', '執行長', '', '', '0000-00-00 00:00:00', '', '', '2023-08-31 21:34:37', '園主任', '2023-08-31 21:35:08', '園主任'),
(10, 5, 5, 5, 5, 0, '2023-09-07', 'a', 'c', 'c', 'd', 'e', '', '', '', 'ggg', 'g', '2222222', '1111', 'test管理員/生活輔導員', '社工員1', '', '', '0000-00-00 00:00:00', '園主任', '', '', '0000-00-00 00:00:00', '執行長', '', '', '0000-00-00 00:00:00', 'testppeerdlgrec - 複製.docx', '../peers_dlgrec/testppeerdlgrec - 複製.docx', '2023-09-26 19:42:26', '園主任', '2023-09-26 19:48:44', '園主任');

-- --------------------------------------------------------

--
-- 資料表結構 `placement_case`
--

CREATE TABLE `placement_case` (
  `Id` int(254) NOT NULL,
  `Case_id` varchar(2000) NOT NULL,
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
  `Case_storage` varchar(200) NOT NULL,
  `Close_case_date` date NOT NULL,
  `Case_assign` varchar(20) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `placement_case`
--

INSERT INTO `placement_case` (`Id`, `Case_id`, `Unopen_type`, `Case_Create_date`, `Object_type`, `Case_grade`, `Case_property`, `Case_stage`, `Open_case_date`, `Name`, `Gender`, `Sexual_orientation`, `Phone`, `Birth`, `Case_pid`, `Referral`, `Case_state`, `Case_storage`, `Close_case_date`, `Case_assign`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '471', 'placement_case', '2020-11-11', '愛滋感染者', 'A', '自立宿舍', '3', '2020-11-10', 'TESTAB12', '男', '異性', '052342342', '1945-02-05', 'HG12314341', '民間社福機構', '未結案', 'settlement1', '0000-00-00', '社工員2', '2023-08-29 22:53:28', 'jia', '2023-08-29 23:47:44', 'jia'),
(2, 'B122', 'placement_case', '2023-09-20', '親職兒少', 'A', '安置家園', '2', '2023-09-20', 'tesa', '男', '異性', '2222221', '1733-05-01', 'P1111322323', '其他', '未結案', '', '0000-00-00', '社工員2', '2023-09-20 22:39:18', '社工組長', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `placement_forms`
--

CREATE TABLE `placement_forms` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `placement_forms`
--

INSERT INTO `placement_forms` (`Id`, `Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `answer`, `file_path`, `Health_rec`) VALUES
(1, '1', '471', 1, 'settlement', 'TESTAB12', 'HG12314341', '2023-08-29 23:45:24', 'jia', '2023-08-30 00:16:22', '園主任', '\"[{\"name\":\"fillin_date\",\"value\":\"2023-08-29\"},{\"name\":\"assign_name\",\"value\":\"jia\"},{\"name\":\"name\",\"value\":\"TESTAB12\"},{\"name\":\"birth\",\"value\":\"1945-02-05\"},{\"name\":\"pid\",\"value\":\"HG12314341\"},{\"name\":\"sex\",\"value\":\"男生\"},{\"name\":\"phone\",\"value\":\"052342342\"},{\"name\":\"address\",\"value\":\"tesadada\"},{\"name\":\"residence\",\"value\":\"tesadada\"},{\"name\":\"same_address\",\"value\":\"same_address\"},{\"name\":\"education\",\"value\":\"高中職\"},{\"name\":\"education_graduate\",\"value\":\"是\"},{\"name\":\"marital\",\"value\":\"未婚\"},{\"name\":\"cohabitant\",\"value\":\"與其他人同住\"},{\"name\":\"cohabitant_other\",\"value\":\"aaa同住\"},{\"name\":\"current_job\",\"value\":\"其他\"},{\"name\":\"current_job_other\",\"value\":\"aaaa其他職業\"},{\"name\":\"economic_status\",\"value\":\"0\"},{\"name\":\"economic_status_0\",\"value\":\"24221\"},{\"name\":\"economic_status_1\",\"value\":\"\"},{\"name\":\"economic_status_2\",\"value\":\"\"},{\"name\":\"economic_status_3\",\"value\":\"\"},{\"name\":\"religion\",\"value\":\"佛教\"},{\"name\":\"religion\",\"value\":\"天主教\"},{\"name\":\"religion\",\"value\":\"其他\"},{\"name\":\"religion_other\",\"value\":\"test其他宗教信仰\"},{\"name\":\"drug_record_0\",\"value\":\"\"},{\"name\":\"drug_record_1\",\"value\":\"\"},{\"name\":\"drug_record\",\"value\":\"2\"},{\"name\":\"drug_record_2\",\"value\":\"2\"},{\"name\":\"drug_record_3\",\"value\":\"\"},{\"name\":\"correctional_question_count\",\"value\":\"1\"},{\"name\":\"correctional_question_start\",\"value\":\"2019-02\"},{\"name\":\"correctional_question_end\",\"value\":\"2020-01\"},{\"name\":\"correctional_year\",\"value\":\"0\"},{\"name\":\"correctional_month\",\"value\":\"11\"},{\"name\":\"family_description\",\"value\":\"test個案家庭概況描述\"},{\"name\":\"assessment\",\"value\":\"test\\r\\n需求評估\"},{\"name\":\"treatment_time_year\",\"value\":\"\"},{\"name\":\"treatment_time_month\",\"value\":\"\"},{\"name\":\"treatment_status\",\"value\":\"尚未接受治療\"},{\"name\":\"medical_name\",\"value\":\"\"},{\"name\":\"medical_info\",\"value\":\"\"},{\"name\":\"medical_phone\",\"value\":\"\"},{\"name\":\"health_clinic_name\",\"value\":\"\"},{\"name\":\"health_clinic_phone\",\"value\":\"\"},{\"name\":\"CD4_index_0\",\"value\":\"\"},{\"name\":\"CD4_index_1\",\"value\":\"\"},{\"name\":\"CD4_index_2\",\"value\":\"\"},{\"name\":\"viral_0\",\"value\":\"\"},{\"name\":\"viral_1\",\"value\":\"\"},{\"name\":\"viral_2\",\"value\":\"\"},{\"name\":\"medicine\",\"value\":\"吉他韋Biktarvy\"},{\"name\":\"medicine\",\"value\":\"信澤力Symtuza\"},{\"name\":\"medicine\",\"value\":\"3TC速汰滋\"},{\"name\":\"medicine\",\"value\":\"Duovir倍歐減\"},{\"name\":\"medicine\",\"value\":\"Kivexa克為滋\"},{\"name\":\"symptoms\",\"value\":\"無\"},{\"name\":\"symptoms_other\",\"value\":\"\"},{\"name\":\"statement\",\"value\":\"dasda個案問題陳述\"},{\"name\":\"personal_system\",\"value\":\"sadssa個人系統\"},{\"name\":\"family_system\",\"value\":\"dsadas家庭系統\"},{\"name\":\"social_system\",\"value\":\"dsadsd社會系統\"},{\"name\":\"resource_system\",\"value\":\"ssadsada資源層面\"},{\"name\":\"diagnose_main\",\"value\":\"assdads主要問題\"},{\"name\":\"diagnose_minor\",\"value\":\"asdadsdsaa次要問題\"},{\"name\":\"basic_indicator\",\"value\":\"本身同意於安置中心入住並有意願重新開始者\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定\"},{\"name\":\"basic_indicator\",\"value\":\"願意配合入住時藥癮檢測與每周、不定時藥癮檢測\"},{\"name\":\"end_indicator\",\"value\":\"入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)\"},{\"name\":\"end_indicator\",\"value\":\"生活可自理者且行動能力正常\"},{\"name\":\"end_indicator\",\"value\":\"個案需要至感染科就診，並附上病歷摘要表，以利審核\"},{\"name\":\"end_indicator\",\"value\":\"個案家屬需負擔個案就醫、生活用品等費用\"},{\"name\":\"resource_w_referrals\",\"value\":\"test資源與轉介\"},{\"name\":\"customFile1\",\"value\":\"test.jpeg\"}]\"', '../upload/test.jpeg', '');

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
  `Case_storage` varchar(200) NOT NULL,
  `Upload_info` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(20) NOT NULL,
  `Supervise1` varchar(100) NOT NULL,
  `Supervise1_signature` longtext NOT NULL,
  `Supervise1_sign_msg` longtext NOT NULL,
  `Supervise1_sign_time` varchar(200) NOT NULL,
  `Supervise2` varchar(100) NOT NULL,
  `Supervise2_signature` longtext NOT NULL,
  `Supervise2_sign_msg` longtext NOT NULL,
  `Supervise2_sign_time` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `placement_form_all_info`
--

INSERT INTO `placement_form_all_info` (`Id`, `Pcase_id`, `Case_id`, `Case_name`, `Case_pid`, `Is_upload`, `Url`, `Upload_path`, `Number`, `Form_name`, `Fillin_date`, `Remark`, `Other_info`, `Case_storage`, `Upload_info`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Supervise1`, `Supervise1_signature`, `Supervise1_sign_msg`, `Supervise1_sign_time`, `Supervise2`, `Supervise2_signature`, `Supervise2_sign_msg`, `Supervise2_sign_time`) VALUES
(1, '1', '471', 'TESTAB12', 'HG12314341', 0, 'placement_case_detail.php?name=TESTAB12&gender=男&pid=HG12314341&date=2020-11-10&property=自立宿舍&type=愛滋感染者&grade=B&id=1&open_id=471&referral=民間社福機構&case_Create_date=2020-11-11&unopen_type=placement_case&birth=1945-02-05', '', 0, 'settlement', '2023-08-29', 'TEST22', '\"[{\"name\":\"settlement\",\"value\":\"符合基本條件指標條件共3項，符合收案指標條件共4項。\"}]\"', 'storage', '', '2023-08-29 00:00:00', 'jia', '2023-08-30 00:16:22', '園主任', '園主任', '../signature/1693326048.png', '園主任\ntesat', '2023-08-30 00:20:48', '執行長', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `program_act`
--

CREATE TABLE `program_act` (
  `Id` int(100) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `Activity_name` varchar(300) NOT NULL,
  `Activity_category` varchar(300) NOT NULL,
  `Person` varchar(300) NOT NULL,
  `Location` varchar(300) NOT NULL,
  `Service` varchar(300) NOT NULL,
  `Cost` int(100) NOT NULL,
  `Number` int(100) NOT NULL,
  `Lecturer` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(300) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `program_act`
--

INSERT INTO `program_act` (`Id`, `Date`, `Activity_name`, `Activity_category`, `Person`, `Location`, `Service`, `Cost`, `Number`, `Lecturer`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(10, '112.03.08', '222', '針具', '一般藥癮者', 'eee', 'eeeeww', 1111, 12345, 'fef', '2023-03-31 15:31:49', 'ㄓㄜㄒㄧㄢ', '2023-09-11 22:10:36', '社工員1'),
(11, '112.04.12', 'lkkk', 'kkk', '愛滋感染者', 'kkk', 'kkkk', 222, 22, 'ggg', '2023-04-10 09:12:48', 'ㄓㄜㄒㄧㄢ', '2023-09-13 19:24:37', '社工組長'),
(12, '112.05.03', 'ddd', 'ddd', '藥癮家庭', 'ddd', 'ddd', 111, 1111, 'ddd', '2023-05-24 10:57:09', '社工員1', '2023-09-11 22:10:58', '社工員1'),
(13, '112.06.08', 'ddd', 'ddd', '愛滋感染者', 'ddd', 'ddd', 2222, 22, 'ddd', '2023-06-06 10:25:18', '社工員1', '0000-00-00 00:00:00', ''),
(14, '112.07.27', '哈哈', '公益', '愛滋感染者', '潮好玩', '擺攤', 10800, 3, '張麗玉', '2023-07-20 15:39:16', '花花', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `program_plan`
--

CREATE TABLE `program_plan` (
  `Id` int(11) NOT NULL,
  `Date` varchar(200) NOT NULL,
  `Plan_name` varchar(300) NOT NULL,
  `Plan_from` varchar(300) NOT NULL,
  `Fund` varchar(200) NOT NULL,
  `Remark` varchar(500) NOT NULL,
  `Proposal_date` date DEFAULT NULL,
  `Interim_date` date DEFAULT NULL,
  `Achieve_date` date DEFAULT NULL,
  `Other_date` date DEFAULT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `program_plan`
--

INSERT INTO `program_plan` (`Id`, `Date`, `Plan_name`, `Plan_from`, `Fund`, `Remark`, `Proposal_date`, `Interim_date`, `Achieve_date`, `Other_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '112.09.12', 'QQQQ', 'QQQQhgh', '事務', '', '2023-09-22', '2023-09-12', '2023-09-22', '2023-09-13', '2023-09-12 07:58:51', '社工員1', '2023-09-23 10:03:13', '社工員1'),
(2, '112.09.15', 'test計畫名稱914d', 'test計畫來源914d', '人事', 'bga', '0000-00-00', '2023-09-23', '0000-00-00', '0000-00-00', '2023-09-23 17:18:37', 'jia', '2023-09-23 17:19:47', 'jia');

-- --------------------------------------------------------

--
-- 資料表結構 `program_plan_form`
--

CREATE TABLE `program_plan_form` (
  `Id` int(244) NOT NULL,
  `Program_id` int(244) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `File_type` varchar(100) NOT NULL,
  `File_year` varchar(100) NOT NULL,
  `File_path` varchar(2000) NOT NULL,
  `Upload_date` datetime NOT NULL,
  `Upload_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `program_plan_form`
--

INSERT INTO `program_plan_form` (`Id`, `Program_id`, `Name`, `File_type`, `File_year`, `File_path`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`) VALUES
(22, 1, '', 'file_A', '112', '../program_plan/program_plan_user1_QQQQ/program_plan_datas/accounting_record_cash_v2.php', '2023-09-12 00:00:00', '社工員1', '2023-09-22 00:00:00', '社工員1'),
(23, 1, '', 'file_C', '112', '../program_plan/program_plan_user1_QQQQ/program_plan_datas/accounting_record_cash_detail_v2.php', '2023-09-12 00:00:00', '社工員1', '2023-09-22 00:00:00', '社工員1'),
(24, 1, '', 'file_D', '112', '../program_plan/program_plan_user1_QQQQ/program_plan_datas/adasdadas.docx', '2023-09-13 00:00:00', '社工組長', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `program_result`
--

CREATE TABLE `program_result` (
  `Id` int(11) NOT NULL,
  `Year` int(100) NOT NULL,
  `Date` date NOT NULL,
  `Plan_name` varchar(300) NOT NULL,
  `Proposal_date` date DEFAULT NULL,
  `Interim_date` date DEFAULT NULL,
  `Achieve_date` date DEFAULT NULL,
  `Other_date` date DEFAULT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `program_result_form`
--

CREATE TABLE `program_result_form` (
  `Id` int(244) NOT NULL,
  `Program_id` int(244) NOT NULL,
  `Program_name` varchar(100) NOT NULL,
  `File_type` varchar(100) NOT NULL,
  `File_year` varchar(100) NOT NULL,
  `File_path` varchar(2000) NOT NULL,
  `Upload_date` datetime NOT NULL,
  `Upload_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `Subject` varchar(300) NOT NULL,
  `Upload_name` varchar(500) NOT NULL,
  `Upload_path` varchar(2000) NOT NULL,
  `Leader` varchar(30) NOT NULL,
  `Leader_signature` varchar(500) NOT NULL,
  `Leader_sign_msg` varchar(2000) NOT NULL,
  `Leader_sign_time` varchar(54) NOT NULL,
  `Director` varchar(30) NOT NULL,
  `Director_signature` varchar(500) NOT NULL,
  `Director_sign_msg` varchar(2000) NOT NULL,
  `Director_sign_time` varchar(54) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `published`
--

INSERT INTO `published` (`Id`, `Year`, `Title_name`, `Published_date`, `Num_publish`, `Subject`, `Upload_name`, `Upload_path`, `Leader`, `Leader_signature`, `Leader_sign_msg`, `Leader_sign_time`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(31, '112', 'test68', '112.06.08', 't12312455', 'test68subject', '', '', '社工組長', '', '', '', '園主任', '', '', '', '2023-06-08', '社工組長', '0000-00-00', ''),
(32, '112', 'test123', '112.06.07', 't1235', 'tt123', '', '', '社工組長', '', '', '', '園主任', '', '', '', '2023-06-08', '社工組長', '0000-00-00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `published_form`
--

CREATE TABLE `published_form` (
  `Id` int(244) NOT NULL,
  `Published_id` int(244) NOT NULL,
  `Published_name` varchar(100) NOT NULL,
  `File_type` varchar(100) NOT NULL,
  `File_year` varchar(100) NOT NULL,
  `File_path` varchar(2000) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Upload_date` datetime NOT NULL,
  `Upload_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `received`
--

CREATE TABLE `received` (
  `Id` int(255) NOT NULL,
  `Year` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Title_name` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Received_date` varchar(30) NOT NULL,
  `Subject` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Unit` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Num_receive` varchar(1000) NOT NULL,
  `Upload_name` varchar(500) NOT NULL,
  `Upload_path` varchar(2000) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Executive` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Executive_signature` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Executive_sign_msg` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Executive_sign_time` varchar(54) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Supervise` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Supervise_signature` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Supervise_sign_msg` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Supervise_sign_time` varchar(54) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Leader` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Leader_signature` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Leader_sign_msg` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Leader_sign_time` varchar(54) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Director` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Director_signature` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Director_sign_msg` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Director_sign_time` varchar(54) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Distribution` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Distribution_signature` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Distribution_sign_msg` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `Distribution_sign_time` varchar(54) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `received`
--

INSERT INTO `received` (`Id`, `Year`, `Title_name`, `Received_date`, `Subject`, `Unit`, `Num_receive`, `Upload_name`, `Upload_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`, `Executive`, `Executive_signature`, `Executive_sign_msg`, `Executive_sign_time`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Leader`, `Leader_signature`, `Leader_sign_msg`, `Leader_sign_time`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Distribution`, `Distribution_signature`, `Distribution_sign_msg`, `Distribution_sign_time`) VALUES
(33, '111', 'fffffff', '111.07.19', 'ggggggggg', 'ggggggggggg', 'hhhh', 'stuChecklist_m11056012.pdf', '../received/stuChecklist_m11056012.pdf', '2022-07-05', '社工員1', '2023-08-30', '社工員1', '', '', '', '', 'jia', '../signature/1680159943.png', '', '2023-03-30 15:05:43', 'jia', '../signature/1668757489.png', '', '2022-11-18 15:44:49', '花花', '../signature/1670311606.png', '', '2022-12-06 15:26:46', '', '', '', ''),
(34, '111', 'fffffff', '111.05.18', 'ggggggggg', 'ggggggggggg', 'ggggggggeeee', '2022-10-25 14-47-40.mp4', '../received/2022-10-25 14-47-40.mp4', '2022-10-06', '社工員1', '2022-11-18', '社工員1', '', '', '', '', '', '', '', '', '社工員1', '../signature/1668764222.png', '111', '2022-11-18 17:37:02', '', '', '', '', '', '', '', ''),
(35, '111', 'test', '111.10.12', 'testtesttest', 'test測試', 'cde00112233', '國立屏東科技大學 資訊管理所 M11056012 龔修霆 碩士論文 完整.docx', '../received/國立屏東科技大學 資訊管理所 M11056012 龔修霆 碩士論文 完整.docx', '2022-10-12', '花花', '2023-08-08', '社工員1', '', '', '', '', '花花', '../signature/1670311567.png', '', '2022-12-06 15:26:07', '', '', '', '', '', '', '', '', '', '', '', ''),
(36, '111', '555', '111.10.11', 'fff', 'fff', 'ff', '', '', '2022-10-18', '社工員1', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(37, '112', '3ffff', '112.06.07', 'fefe', 'fewfw', 'fefw', '圖片1.png', '../received/圖片1.png', '2023-06-06', '社工員1', '2023-06-06', '社工員1', '', '', '', '', '社工員1', '../signature/1686029483.png', '', '2023-06-06 13:31:23', '施朝根', '', '', '', '力聖臨', '', '', '', '', '', '', ''),
(38, '112', 'efef', '112.06.15', 'efefe', 'efefew', 'fwfwfw', '圖片1.png', '../received/圖片1.png', '2023-06-06', '社工員1', '2023-06-06', '社工員1', '', '', '', '', '社工員1', '../signature/1686029800.png', '', '2023-06-06 13:36:40', '洪勝霖', '', '', '', '力聖臨', '', '', '', '', '', '', ''),
(39, '112', 'wwwww', '112.06.05', 'www', 'www', 'www', '', '', '2023-06-06', '社工員1', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(40, '112', 'dsadaw', '112.06.07', 'wdw', 'wadaw', 'awda', '', '', '2023-06-06', '社工員1', '0000-00-00', '', '丘培民', '', '', '', '執行長', '', '', '', '洪勝霖', '', '', '', '施朝根', '', '', '', '洪勝霖', '', '', ''),
(41, '112', 'dsfds', '112.06.02', 'sfsdfdsf', 'sfsdfsf', 'sdfsdfdsf', '', '', '2023-06-06', '社工員1', '0000-00-00', '', '社工員1', '../signature/1686060317.png', '', '2023-06-06 22:05:17', '社工員1', '../signature/1686060052.png', '', '2023-06-06 22:00:52', '力聖臨', '', '', '', '洪勝霖', '', '', '', '洪勝霖', '', '', ''),
(42, '112', 'test68', '112.06.08', 'tee', 'unit68', 't678', '', '', '2023-06-08', '社工組長', '0000-00-00', '', '歐陽美悌', '', '', '', '園主任', '', '', '', '執行長', '', '', '', '社工組長', '', '', '', '林鈺舒', '', '', ''),
(43, '112', 'tta', '112.06.07', 'ttas', 'units', 't123', '', '', '2023-06-08', '社工組長', '0000-00-00', '', '歐陽美悌', '', '', '', '園主任', '', '', '', '執行長', '', '', '', '社工組長', '', '', '', '洪勝霖', '', '', '');

-- --------------------------------------------------------

--
-- 資料表結構 `received_forms`
--

CREATE TABLE `received_forms` (
  `Id` int(244) NOT NULL,
  `Received_id` int(244) NOT NULL,
  `Received_name` varchar(100) NOT NULL,
  `FIle_type` varchar(100) NOT NULL,
  `File_year` varchar(100) NOT NULL,
  `File_path` varchar(2000) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Upload_date` datetime NOT NULL,
  `Upload_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `record_warn`
--

CREATE TABLE `record_warn` (
  `Id` int(244) NOT NULL,
  `Record_id` int(244) NOT NULL,
  `Rtype_name` varchar(100) NOT NULL,
  `R_or_G` varchar(50) NOT NULL,
  `Title` varchar(1000) NOT NULL,
  `Warn_timestap` datetime NOT NULL,
  `Url` text NOT NULL,
  `State` varchar(500) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(100) DEFAULT current_timestamp(),
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `record_warn`
--

INSERT INTO `record_warn` (`Id`, `Record_id`, `Rtype_name`, `R_or_G`, `Title`, `Warn_timestap`, `Url`, `State`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 2, 'supervisor_record', 'R', '上傳提醒：TEST團督記錄標題925', '2023-10-05 12:38:00', 'supervisor_record_detail_v2.php?year=112&id=2&sr_id=2&rec_type=upload', '已上傳', '2023-09-25 17:51:41', 'jia', '2023-09-25 18:06:06', 'jia'),
(2, 3, 'supervisor_record', 'G', '上傳提醒：test團督記錄922', '2023-10-02 12:38:00', 'supervisor_record_detail_v2.php?year=112&id=3&sr_id=3&rec_type=upload', '議程未完成上傳', '2023-09-25 18:09:38', 'jia', '0000-00-00 00:00:00', ''),
(3, 3, 'supervisor_record', 'R', '上傳提醒：test團督記錄922', '2023-10-02 12:38:00', 'supervisor_record_detail_v2.php?year=112&id=3&sr_id=3&rec_type=upload', '記錄未完成上傳', '2023-09-25 18:09:38', 'jia', '0000-00-00 00:00:00', ''),
(4, 2, 'board_supervisor', 'G', '上傳提醒：test理監事會記錄0902', '2023-10-02 16:35:00', 'board_supervisor_detail_v2.php?year=112&id=2&bs_id=2&rec_type=upload', '議程未完成上傳', '2023-09-25 22:29:35', 'jia', '0000-00-00 00:00:00', ''),
(5, 2, 'board_supervisor', 'R', '上傳提醒：test理監事會記錄0902', '2023-10-02 16:35:00', 'board_supervisor_detail_v2.php?year=112&id=2&bs_id=2&rec_type=upload', '記錄未完成上傳', '2023-09-25 22:29:35', 'jia', '0000-00-00 00:00:00', ''),
(6, 4, 'supervisor_record', 'G', '上傳提醒：test團督記錄0904', '2023-09-09 00:00:00', 'supervisor_record_detail_v2.php?year=112&id=4&sr_id=4&rec_type=upload', '已上傳', '2023-09-25 22:39:04', 'jia', '2023-09-25 22:40:52', 'jia'),
(7, 4, 'supervisor_record', 'R', '上傳提醒：test團督記錄0904', '2023-09-11 00:00:00', 'supervisor_record_detail_v2.php?year=112&id=4&sr_id=4&rec_type=upload', '記錄未完成上傳', '2023-09-25 22:39:04', 'jia', '0000-00-00 00:00:00', ''),
(8, 3, 'board_supervisor', 'G', '上傳提醒：TT理監事會記錄0901', '2023-08-29 00:00:00', 'board_supervisor_detail_v2.php?year=112&id=3&bs_id=3&rec_type=upload', '議程未完成上傳', '2023-09-25 22:42:49', 'jia', '0000-00-00 00:00:00', ''),
(9, 3, 'board_supervisor', 'R', '上傳提醒：TT理監事會記錄0901', '2023-09-08 00:00:00', 'board_supervisor_detail_v2.php?year=112&id=3&bs_id=3&rec_type=upload', '已上傳', '2023-09-25 22:42:49', 'jia', '2023-09-25 22:45:58', 'jia'),
(10, 2, 'members_assemble', 'G', '上傳提醒：tt會員大會記錄0906', '2023-09-09 00:00:00', 'members_assemble_detail_v2.php?year=112&id=2&ma_id=2&rec_type=upload', '已上傳', '2023-09-25 22:50:32', 'jia', '2023-09-25 22:50:59', 'jia'),
(11, 2, 'members_assemble', 'R', '上傳提醒：tt會員大會記錄0906', '2023-09-13 00:00:00', 'members_assemble_detail_v2.php?year=112&id=2&ma_id=2&rec_type=upload', '記錄未完成上傳', '2023-09-25 22:50:32', 'jia', '0000-00-00 00:00:00', ''),
(12, 4, 'board_supervisor', 'G', '上傳提醒：test理監事會記錄標題1006', '2023-10-13 00:00:00', 'board_supervisor_detail_v2.php?year=112&id=4&bs_id=4&rec_type=upload', '議程未完成上傳', '2023-10-02 18:17:42', 'jia', '0000-00-00 00:00:00', ''),
(13, 4, 'board_supervisor', 'R', '上傳提醒：test理監事會記錄標題1006', '2023-10-13 00:00:00', 'board_supervisor_detail_v2.php?year=112&id=4&bs_id=4&rec_type=upload', '記錄未完成上傳', '2023-10-02 18:17:42', 'jia', '0000-00-00 00:00:00', ''),
(14, 3, 'members_assemble', 'G', '上傳提醒：會員大會記錄標題1011', '2023-10-18 00:00:00', 'members_assemble_detail_v2.php?year=112&id=3&ma_id=3&rec_type=upload', '議程未完成上傳', '2023-10-02 18:19:21', 'jia', '0000-00-00 00:00:00', ''),
(15, 3, 'members_assemble', 'R', '上傳提醒：會員大會記錄標題1011', '2023-10-18 00:00:00', 'members_assemble_detail_v2.php?year=112&id=3&ma_id=3&rec_type=upload', '記錄未完成上傳', '2023-10-02 18:19:21', 'jia', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `resume`
--

CREATE TABLE `resume` (
  `Id` int(244) NOT NULL,
  `Account_id` int(244) NOT NULL,
  `Account` varchar(100) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(500) NOT NULL,
  `Entry_date` varchar(100) NOT NULL,
  `On_or_off` varchar(10) NOT NULL,
  `Resigned_date` varchar(100) DEFAULT NULL,
  `Seniority` float NOT NULL,
  `Annual_hours` float NOT NULL,
  `Leave_hours` float NOT NULL,
  `Overtime_hours` float NOT NULL,
  `Comp_hours` float NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `resume`
--

INSERT INTO `resume` (`Id`, `Account_id`, `Account`, `Name`, `Email`, `Entry_date`, `On_or_off`, `Resigned_date`, `Seniority`, `Annual_hours`, `Leave_hours`, `Overtime_hours`, `Comp_hours`, `Resume_datas_date`, `Employment_contract_date`, `NDA_file_date`, `Diploma_date`, `PA_file_date`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 25, 'testuser', 'jia', '', '111年09月08日', '是', '111年11月02日', 0.85, 24, 0, 0, 0, '2023-07-14', '2022-10-02', '2022-09-29', '2022-09-29', '2022-10-02', 'test0908', '2022-09-29 17:47:27', '園主任', '2023-07-14 12:09:04', '執行長'),
(2, 26, 'test01', 'test001', '', '111年10月12日', '是', '', 0.46, 0, 0, 0, 0, '2022-10-12', '2022-10-12', '2022-10-12', '2022-10-12', '2022-10-12', '無，測試', '2022-10-12 14:17:44', '花花', '2023-03-30 18:17:28', 'jia'),
(3, 27, 'twha202212061557', 'ㄓㄜㄒㄧㄢ', '', '111年12月06日', '是', '', 0.31, 0, 0, 0, 0, '2022-12-06', NULL, '2022-12-06', '2022-12-06', NULL, '20221206測試~~~~~~~~~', '2022-12-06 15:59:24', '花花', '2023-03-30 18:17:41', 'jia'),
(4, 28, 'twha202212061600', 'ㄓㄒ', '', '111年12月06日', '否', NULL, 0, 0, 0, 0, 0, '0000-00-00', NULL, '0000-00-00', '0000-00-00', NULL, '15465451321324654', '2022-12-06 16:00:44', '花花', '2022-12-06 16:00:44', ''),
(5, 29, 'twha202212061601', '叫http好了', '', '111年12月04日', '否', NULL, 0, 0, 0, 0, 0, '0000-00-00', '2022-12-06', '0000-00-00', '2022-12-06', '2022-12-06', '', '2022-12-06 16:03:07', '花花', '2022-12-06 16:03:34', '花花'),
(6, 30, 'ffff', 'fffff', '', '111年12月26日', '是', '', 0.55, 24, 0, 0, 0, '2023-07-14', NULL, '2022-12-26', '2022-12-26', NULL, '', '2022-12-26 15:41:10', '社工員1', '2023-07-14 12:09:24', '執行長'),
(7, 31, 'test714', 'a714', '', '112年07月12日', '是', '', 0.01, 0, 0, 0, 0, '2023-07-14', NULL, '2023-07-14', '0000-00-00', NULL, 'eddw', '2023-07-14 12:07:28', '執行長', '2023-07-14 12:08:49', '執行長'),
(8, 3, 'test3', '社工組長', 'test3_ab@gmail.com', '102年06月20日', '是', '', 10.26, 128, 0, 0, 0, '0000-00-00', NULL, '2023-09-20', '0000-00-00', NULL, 'test\r\n社工組長\r\n創建', '2023-09-20 23:35:47', '社工組長', '2023-09-20 23:36:01', '社工組長');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `resume_forms`
--

INSERT INTO `resume_forms` (`Id`, `Resume_id`, `Resume_name`, `File_type`, `File_year`, `File_path`, `Remark`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`) VALUES
(1, 1, 'jia', 'file_A', '112', '[\"../resume/resume_user1_testuser/resume_datas/testr.docx\",\"../resume/resume_user1_testuser/resume_datas/nnnnnnnnn.docx\"]', 'test0908', '2022-09-29 00:00:00', '園主任', '2023-07-14 00:00:00', '執行長'),
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
(13, 2, 'test001', 'file_E', '111', '../resume/resume_user2_test01/resume_datas/個案管理系統測試20221011(05).docx', '無，測試', '2022-10-12 00:00:00', '花花', '2022-10-12 14:18:16', ''),
(14, 3, 'ㄓㄜㄒㄧㄢ', 'file_A', '111', '../resume/resume_user3_twha202212061557/resume_datas/個案管理系統測試20221011(05).docx', '20221206測試~~~~~~~~~', '2022-12-06 00:00:00', '花花', '2022-12-06 15:59:24', ''),
(15, 3, 'ㄓㄜㄒㄧㄢ', 'file_C', '111', '../resume/resume_user3_twha202212061557/resume_datas/個案管理系統測試20221025(03).docx', '20221206測試~~~~~~~~~', '2022-12-06 00:00:00', '花花', '2022-12-06 15:59:24', ''),
(16, 3, 'ㄓㄜㄒㄧㄢ', 'file_D', '111', '../resume/resume_user3_twha202212061557/resume_datas/個案管理系統行政管理1012.docx', '20221206測試~~~~~~~~~', '2022-12-06 00:00:00', '花花', '2022-12-06 15:59:24', ''),
(17, 5, '叫http好了', 'file_D', '111', '../resume/resume_user5_twha202212061601/resume_datas/個案管理系統測試20221025(03).docx', '', '2022-12-06 00:00:00', '花花', '2022-12-06 16:03:07', ''),
(18, 5, '叫http好了', 'file_B', '111', '../resume/resume_user5_twha202212061601/resume_datas/個案管理系統測試20221011(05).docx', '', '2022-12-06 00:00:00', '花花', '2022-12-06 16:03:34', ''),
(19, 5, '叫http好了', 'file_E', '111', '../resume/resume_user5_twha202212061601/resume_datas/個案管理系統行政管理1012.docx', '', '2022-12-06 00:00:00', '花花', '2022-12-06 16:03:34', ''),
(20, 6, 'fffff', 'file_A', '112', '[\"../resume/resume_user6_ffff/resume_datas/testr.docx\",\"../resume/resume_user6_ffff/resume_datas/nnnnnnnnn.docx\",\"../resume/resume_user6_ffff/resume_datas/dasdadsd.docx\"]', '', '2022-12-26 00:00:00', '社工員1', '2023-07-14 00:00:00', '執行長'),
(21, 6, 'fffff', 'file_C', '111', '../resume/resume_user6_ffff/resume_datas/未命名.png', '', '2022-12-26 00:00:00', '社工員1', '2022-12-26 15:41:10', ''),
(22, 6, 'fffff', 'file_D', '111', '../resume/resume_user6_ffff/resume_datas/龔修霆履歷表(中文).docx', '', '2022-12-26 00:00:00', '社工員1', '2022-12-26 15:41:10', ''),
(23, 1, 'jia', 'file_A', '112', '[\"../resume/resume_user1_testuser/resume_datas/testr.docx\",\"../resume/resume_user1_testuser/resume_datas/nnnnnnnnn.docx\"]', 'test0908', '2023-07-14 00:00:00', '社工員1', '2023-07-14 00:00:00', '執行長'),
(24, 6, 'fffff', 'file_A', '112', '[\"../resume/resume_user6_ffff/resume_datas/testr.docx\",\"../resume/resume_user6_ffff/resume_datas/nnnnnnnnn.docx\",\"../resume/resume_user6_ffff/resume_datas/dasdadsd.docx\"]', '', '2023-07-14 00:00:00', '社工員1', '2023-07-14 00:00:00', '執行長'),
(25, 7, 'a714', 'file_A', '112', '[\"../resume/resume_user7_test714/resume_datas/dqwdqwq.docx\",\"../resume/resume_user7_test714/resume_datas/testr.docx\"]', 'eddw', '2023-07-14 00:00:00', '執行長', '2023-07-14 12:08:49', '執行長'),
(26, 7, 'a714', 'file_C', '112', '../resume/resume_user7_test714/resume_datas/dasdadsd.docx', 'eddw', '2023-07-14 00:00:00', '執行長', '2023-07-14 12:07:28', ''),
(27, 8, '社工組長', 'file_C', '112', '../resume/resume_user8_test3/resume_datas/at.docx', 'test\r\n社工組長\r\n創建', '2023-09-20 00:00:00', '社工組長', '2023-09-20 23:35:47', '');

-- --------------------------------------------------------

--
-- 資料表結構 `resume_seniority`
--

CREATE TABLE `resume_seniority` (
  `Id` int(244) NOT NULL,
  `Resume_id` int(244) NOT NULL,
  `Seniority_num` float NOT NULL,
  `Rec_year` int(244) NOT NULL,
  `Type` varchar(100) NOT NULL,
  `Annual_default` float NOT NULL,
  `Change_num` float NOT NULL,
  `Day_off_id` int(244) NOT NULL,
  `Overtime_id` int(244) NOT NULL,
  `Remark` varchar(3000) NOT NULL,
  `sys_update_date` datetime NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `resume_seniority`
--

INSERT INTO `resume_seniority` (`Id`, `Resume_id`, `Seniority_num`, `Rec_year`, `Type`, `Annual_default`, `Change_num`, `Day_off_id`, `Overtime_id`, `Remark`, `sys_update_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 1, 0.85, 112, 'Annual_default', 24, 0, 0, 0, '員工建檔修改預設補修時數：24.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', 'jia', '2023-07-14 12:09:04', '執行長'),
(2, 2, 0.46, 112, 'Annual_default', 0, 0, 0, 0, '員工建檔修改預設補修時數：0.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', 'test001', '2023-01-09 21:34:51', 'test001'),
(3, 3, 0.31, 112, 'Annual_default', 0, 0, 0, 0, '員工建檔修改預設補修時數：0.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', 'ㄓㄜㄒㄧㄢ', '2023-01-09 21:34:51', 'ㄓㄜㄒㄧㄢ'),
(4, 4, 0, 112, 'Annual_default', 0, 0, 0, 0, '員工建檔修改預設補修時數：0.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', 'ㄓㄒ', '2023-01-09 21:34:51', 'ㄓㄒ'),
(5, 5, 0, 112, 'Annual_default', 0, 0, 0, 0, '員工建檔修改預設補修時數：0.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', '叫http好了', '2023-01-09 21:34:51', '叫http好了'),
(6, 6, 0.55, 112, 'Annual_default', 24, 0, 0, 0, '員工建檔修改預設補修時數：24.0小時。', '0000-00-00 00:00:00', '2023-01-09 21:33:38', 'fffff', '2023-07-14 12:09:24', '執行長'),
(15, 1, 0, 112, 'Leave', 0, 5, 1, 0, '使用的補休時數：0.0小時，使用的特休時數：5.0小時。', '0000-00-00 00:00:00', '2023-05-25 23:04:30', '社工組長', '2023-05-25 23:04:30', ''),
(16, 1, 0, 112, 'Comp_hours', 0, 3.4, 0, 2, '新增的補休時數：4.6小時，加班日期：112.04.01。使用的補休時數：1.2小時，補休日期：112.04.07。', '0000-00-00 00:00:00', '2023-05-25 23:04:52', '社工組長', '2023-05-25 23:04:52', ''),
(17, 1, 0, 112, 'Comp_hours', 0, 0.5, 0, 0, '新增的補休時數：1.5小時，加班日期：112.04.05。使用的補休時數：1.0小時，補休日期：112.05.22。', '0000-00-00 00:00:00', '2023-06-03 21:22:11', '社工組長', '2023-06-03 21:22:11', ''),
(18, 1, 0, 112, 'Leave', 0, 6, 0, 0, '使用的補休時數：0.0小時，使用的特休時數：6.0小時。', '0000-00-00 00:00:00', '2023-06-03 21:22:21', '社工組長', '2023-06-03 21:22:21', ''),
(19, 7, 0.01, 112, 'Annual_default', 0, 0, 0, 0, '員工建檔修改預設補修時數：0.0小時。', '0000-00-00 00:00:00', '2023-07-14 12:07:28', '執行長', '2023-07-14 12:07:48', '執行長'),
(20, 8, 10.26, 112, 'Annual_default', 128, 0, 0, 0, '員工建檔修改預設補修時數：128.0小時。', '0000-00-00 00:00:00', '2023-09-20 23:35:47', '社工組長', '2023-09-20 23:36:01', '社工組長');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `screening`
--

INSERT INTO `screening` (`Id`, `Screening_id`, `Reservation_date`, `Reservation_time`, `Name`, `Age`, `A_detail`, `Phone`, `Gender`, `Sexual_orientation`, `Screening_type`, `Screening_results`, `Interview_content`, `Remark`, `Reagent_seq`, `Amount`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(3, 1, '2021-10-07', '10:50:00', 'Cerytics', '22', '20-29歲', '0621312345', '其他', '同性', 'HIV', '', '', 'test37', '', '', '2022-01-15 19:44:44', '園主任', '2022-10-13 18:59:00', '社工組長'),
(4, 2, '2021-11-04', '14:15:00', 'Kiealy', '36', '30-39歲', '023458942', '男', '異性', 'HIV+梅毒', '', 'TWEW', '', 'RC1019281', '125', '2022-01-15 19:46:52', '園主任', '2022-01-20 22:49:54', '園主任'),
(5, 3, '2021-09-10', '07:10:00', 'jien', '22', '20-29歲', '076524388', '女', '雙性', '梅毒', '梅 positive', 'test', ' tew t ', 'SW1353', '249', '2022-01-18 18:09:14', '園主任', '0000-00-00 00:00:00', ''),
(6, 4, '2021-12-08', '13:20:00', 'heriao', '41', '40-49歲', '038741812', '女', '異性', 'HIV+梅毒', 'H+梅 positive', 'test', '', '', '', '2022-01-20 22:48:50', '園主任', '0000-00-00 00:00:00', ''),
(7, 5, '2022-01-06', '07:10:00', 'test', '', '30-39歲', '052234423', '其他', '異性', 'HIV', 'H negative', '', '', '', '', '2022-03-07 18:10:11', '園主任', '0000-00-00 00:00:00', ''),
(8, 6, '2022-06-01', '10:10:00', 'test221', '34', '30-39歲', '051123214', '男', '異性', 'test taas', 'test ppp', 'test', 'teesa', 'B1212124', '123', '2022-06-23 21:07:17', '園主任', '0000-00-00 00:00:00', ''),
(9, 7, '2022-10-24', '10:10:00', '測O試', '43', '40-49歲', '0911222111', '男', '同性', '梅毒', 'test ppp', '1111111111112', '111111111111111111111111111111111111111', '011010101010101', '200', '2022-10-25 11:13:25', '花花', '0000-00-00 00:00:00', ''),
(10, 8, '2021-11-05', '10:20:00', '布萊特', '19', '10-19歲', '0989664220', '男', '同性', '甚麼意思', '梅 positive', 'YYOYOYOYOYOYOYOTV', '456654565456545654565456545645641654874641894679466441021584110015', '0023', '200', '2022-12-09 09:45:45', '花花', '2022-12-09 09:50:35', '花花'),
(11, 9, '2023-07-20', '10:23:00', 'wu先生', '9', '10歲以下', '0973-797-003', '男', '同性', 'hiv+', 'hiv+positive', '', '', '', '300', '2023-07-20 10:25:09', '花花', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `screening_result_keywords`
--

CREATE TABLE `screening_result_keywords` (
  `Id` int(100) NOT NULL,
  `screening_result` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(9, 'test ppp'),
(10, 'hiv+positive');

-- --------------------------------------------------------

--
-- 資料表結構 `screening_type_keywords`
--

CREATE TABLE `screening_type_keywords` (
  `Id` int(100) NOT NULL,
  `screening_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `screening_type_keywords`
--

INSERT INTO `screening_type_keywords` (`Id`, `screening_type`) VALUES
(1, 'HIV'),
(2, '梅毒'),
(3, 'HIV+梅毒'),
(9, 'test taas'),
(10, '快篩'),
(11, '甚麼意思'),
(12, 'hiv+');

-- --------------------------------------------------------

--
-- 資料表結構 `signature_notice`
--

CREATE TABLE `signature_notice` (
  `Id` int(11) NOT NULL,
  `Sign_id` varchar(2000) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `signature_notice`
--

INSERT INTO `signature_notice` (`Id`, `Sign_id`, `Title`, `Url`, `Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(7, '0', '團督記錄簽核：test會議記錄標題818', 'supervisor_record_detail.php?year=111&id=17&sr_id=17&rec_type=fillin', '2022-08-18 16:05', '社工員1', '執行長', '未簽核', 'supervisor_record', '2022-08-18 16:10:58', '社工員1', '2022-08-18 16:10:58', ''),
(8, '0', '團督記錄簽核：uploadtt會議記錄標題818', 'supervisor_record_detail.php?year=111&id=18&sr_id=18&rec_type=upload', '2022-08-18 00:00', '社工員1', '園主任', '已簽核', 'supervisor_record', '2022-08-18 16:11:27', '社工員1', '2022-08-18 16:11:27', ''),
(9, '0', '理監事會議記錄簽核：test理監事會議會議記錄標題818', 'board_supervisor_detail.php?year=111&id=32&bs_id=32&rec_type=fillin', '2022-08-18 17:20', '園主任', '園主任', '已簽核', 'board_supervisor', '2022-08-18 16:35:25', '園主任', '2022-08-18 16:35:25', ''),
(11, '0', '理監事會議記錄簽核：test上傳會議記錄理監事會議818', 'board_supervisor_detail.php?year=111&id=33&bs_id=33&rec_type=upload', '2022-08-18 00:00', '社工員1', '社工組長', '已簽核', 'board_supervisor', '2022-08-18 16:38:40', '社工員1', '2022-08-18 16:38:40', ''),
(12, '0', '會員大會記錄簽核：test會員大會記錄標題818', 'members_assemble_detail.php?year=111&id=14&ma_id=14&rec_type=fillin', '2022-08-18 14:00', '社工員2', '社工組長', '未簽核', 'members_assemble', '2022-08-18 16:55:38', '社工員2', '2022-08-18 16:55:38', ''),
(13, '0', '會員大會記錄簽核：upload會員大會記錄標題818', 'members_assemble_detail.php?year=111&id=15&ma_id=15&rec_type=upload', '2022-08-18 00:00', '社工員2', '園主任', '已簽核', 'members_assemble', '2022-08-18 16:56:50', '社工員2', '2022-08-18 16:56:50', ''),
(14, '0', '團督記錄簽核：test會議記錄標題920', 'supervisor_record_detail.php?year=111&id=19&sr_id=19&rec_type=fillin', '2022-09-20 07:07', '園主任', '社工組長', '未簽核', 'supervisor_record', '2022-09-20 18:04:02', '園主任', '2022-09-20 18:04:02', ''),
(15, '0', '會員大會記錄簽核：test會員大會記錄標題	123', 'members_assemble_detail.php?year=109&id=0&ma_id=0&rec_type=fillin', '2020-08-13 09:00', '社工員1', '社工組長', '未簽核', 'members_assemble', '2022-10-07 20:57:28', '社工員1', '2022-10-07 20:57:28', ''),
(16, '0', '會員大會記錄簽核：test會員大會記錄標題	upload', 'members_assemble_detail.php?year=111&id=2&ma_id=2&rec_type=upload', '2022-10-07 00:00', '社工員1', '園主任', '未簽核', 'members_assemble', '2022-10-07 21:01:24', '社工員1', '2022-10-07 21:01:24', ''),
(17, '0', '理監事會記錄簽核：test理監事會記錄標題1007', 'board_supervisor_detail.php?year=111&id=34&bs_id=34&rec_type=fillin', '2022-10-07 10:05', '社工員1', '社工組長', '未簽核', 'board_supervisor', '2022-10-07 21:03:01', '社工員1', '2022-10-07 21:03:01', ''),
(18, '0', '會員大會記錄簽核：會員大會記錄標題2', 'members_assemble_detail.php?year=109&id=3&ma_id=3&rec_type=fillin', '2020-11-11 13:10', '社工員1', '社工組長', '未簽核', 'members_assemble', '2022-10-07 21:05:07', '社工員1', '2022-10-07 21:05:07', ''),
(19, '0', '團督記錄簽核：TEST團督記錄標題1231007', 'supervisor_record_detail.php?year=111&id=20&sr_id=20&rec_type=fillin', '2022-10-07 10:15', '社工員1', '園主任', '未簽核', 'supervisor_record', '2022-10-07 21:15:09', '社工員1', '2022-10-07 21:15:09', ''),
(20, '0', '理監事會議記錄簽核：uploadtt理監事會記錄標題1209', 'board_supervisor_detail.php?year=109&id=35&bs_id=35&rec_type=upload', '2022-10-13 00:00', '社工組長', '社工員2', '未簽核', 'board_supervisor', '2022-10-13 16:26:15', '社工組長', '2022-10-13 16:26:15', ''),
(21, '0', '理監事會記錄簽核：adasad', 'board_supervisor_detail.php?year=111&id=36&bs_id=36&rec_type=fillin', '2022-10-15 01:11', 'jia', '力聖臨', '未簽核', 'board_supervisor', '2022-10-15 23:08:50', 'jia', '2022-10-15 23:08:50', ''),
(22, '0', '團督記錄簽核：test團督記錄標題1015', 'supervisor_record_detail.php?year=111&id=21&sr_id=21&rec_type=fillin', '2022-10-15 00:20', 'jia', '社工組長', '未簽核', 'supervisor_record', '2022-10-15 23:16:59', 'jia', '2022-10-15 23:16:59', ''),
(23, '0', '理監事會議記錄簽核：ttttt理監事會記錄標題1015', 'board_supervisor_detail.php?year=111&id=36&bs_id=36&rec_type=upload', '2022-10-15 00:00', 'jia', '園主任', '未簽核', 'board_supervisor', '2022-10-15 23:17:58', 'jia', '2022-10-15 23:17:58', ''),
(24, '15', '結案簽核：案號RE111姓名test', 'closed_detail.php?closed_id=15', '2022-10-24 00:00', '社工員1', '社工組長', '已簽核', 'closed', '2022-10-25 20:02:03', '社工員1', '2022-10-25 21:40:23', '社工組長'),
(25, '22', '團督記錄簽核：2022年度12月06日第六次團督', 'supervisor_record_detail.php?year=111&id=22&sr_id=22&rec_type=fillin', '2022-12-06 15:16', '花花', '花花', '未簽核', 'supervisor_record', '2022-12-06 16:41:02', '花花', '2022-12-06 16:41:02', ''),
(26, '23', '團督記錄簽核：2022年度12月06日第六次團督但是是16時42分', 'supervisor_record_detail.php?year=111&id=23&sr_id=23&rec_type=fillin', '2022-12-06 04:54', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'supervisor_record', '2022-12-06 16:46:09', '花花', '2022-12-06 16:46:09', ''),
(27, '24', '團督記錄簽核：2022年度12月06日第六次團督16時47分', 'supervisor_record_detail.php?year=109&id=24&sr_id=24&rec_type=fillin', '2020-11-11 23:11', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'supervisor_record', '2022-12-06 16:49:53', '花花', '2022-12-06 16:50:14', '花花'),
(28, '25', '團督記錄簽核：2022年度12月06日第六次團督16時50分', 'supervisor_record_detail.php?year=110&id=25&sr_id=25&rec_type=fillin', '2021-07-17 21:57', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'supervisor_record', '2022-12-06 16:54:39', '花花', '2022-12-06 16:54:39', ''),
(29, '37', '理監事會記錄簽核：2022年度12月06日第六次理監事會', 'board_supervisor_detail.php?year=111&id=37&bs_id=37&rec_type=fillin', '2022-12-06 07:13', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'board_supervisor', '2022-12-06 17:23:42', '花花', '2022-12-06 17:23:42', ''),
(30, '38', '理監事會記錄簽核：2022年度12月06日第六次理監事會不過現在是17點26分', 'board_supervisor_detail.php?year=109&id=38&bs_id=38&rec_type=fillin', '2020-12-30 22:31', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'board_supervisor', '2022-12-06 17:28:46', '花花', '2022-12-06 17:28:46', ''),
(31, '4', '會員大會記錄簽核：2022年度12月08日第八次理監事會', 'members_assemble_detail.php?year=111&id=4&ma_id=4&rec_type=fillin', '2022-12-08 01:40', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'members_assemble', '2022-12-08 11:38:06', '花花', '2022-12-08 11:38:06', ''),
(32, '5', '會員大會記錄簽核：2022年度12月08日第八次會員大會', 'members_assemble_detail.php?year=109&id=5&ma_id=5&rec_type=fillin', '2020-12-13 20:52', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'members_assemble', '2022-12-08 11:44:35', '花花', '2022-12-08 11:44:35', ''),
(33, '6', '會員大會記錄簽核：一加一等於二', 'members_assemble_detail.php?year=111&id=6&ma_id=6&rec_type=upload', '2022-12-08 00:00', '花花', 'ㄓㄜㄒㄧㄢ', '未簽核', 'members_assemble', '2022-12-08 11:46:48', '花花', '2022-12-08 11:46:48', ''),
(34, '16', '結案簽核：案號RE115姓名十二月零九日', 'closed_detail.php?closed_id=16', '2022-12-09 00:00', 'ㄓㄜㄒㄧㄢ', 'ㄓㄜㄒㄧㄢ', '未簽核', 'closed', '2022-12-09 10:11:21', '花花', '2023-05-24 15:04:37', '社工員1'),
(35, '26', '團督記錄簽核：444', 'supervisor_record_detail.php?year=112&id=26&sr_id=26&rec_type=fillin', '2023-01-11 15:53', '社工員1', '晏傳恕', '未簽核', 'supervisor_record', '2023-01-12 13:53:30', '社工員1', '2023-01-12 14:18:12', '社工員1'),
(36, '27', '團督記錄簽核：wwww', 'supervisor_record_detail.php?year=112&id=27&sr_id=27&rec_type=fillin', '2023-03-23 10:30', 'jia', '丘培民', '未簽核', 'supervisor_record', '2023-03-30 09:31:17', 'jia', '2023-03-30 09:31:17', ''),
(37, '37', '收文簽核：主旨fefe,來文單位fewfw', 'received_detail.php?re_id=37&year=112', '2023-06-07 00:00', '社工員1', '李萬榮、施朝根、力聖臨', '未簽核', 'received', '2023-06-06 13:30:23', '社工員1', '2023-06-06 13:30:23', ''),
(38, '38', '收文簽核：主旨efefe,來文單位efefew', 'received_detail.php?re_id=38&year=112', '2023-06-15 00:00', '社工員1', '洪勝霖、洪勝霖、力聖臨', '未簽核', 'received', '2023-06-06 13:31:08', '社工員1', '2023-06-06 13:31:08', ''),
(39, '39', '收文簽核：主旨www,來文單位www', 'received_detail.php?re_id=39&year=112', '2023-06-05 00:00', '社工員1', '、、', '未簽核', 'received', '2023-06-06 18:59:36', '社工員1', '2023-06-06 18:59:36', ''),
(40, '0', '發文簽核：主旨ddd', 'published_detail.php?pu_id=0&year=112', '2023-06-07 00:00', '社工員1', '、undefined、undefined', '未簽核', 'published', '2023-06-06 19:04:09', '社工員1', '2023-06-06 19:04:09', ''),
(41, '24', '發文簽核：主旨', 'published_detail.php?pu_id=24&year=', ' 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 19:06:28', '社工員1', '2023-06-06 19:06:28', ''),
(42, '25', '發文簽核：主旨', 'published_detail.php?pu_id=25&year=', ' 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 19:07:00', '社工員1', '2023-06-06 19:07:00', ''),
(43, '26', '發文簽核：主旨', 'published_detail.php?pu_id=26&year=', ' 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 19:07:42', '社工員1', '2023-06-06 19:07:42', ''),
(44, '27', '發文簽核：主旨ffff', 'published_detail.php?pu_id=27&year=112', '2023-06-05 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 19:09:25', '社工員1', '2023-06-06 19:09:25', ''),
(45, '28', '發文簽核：主旨ddddd', 'published_detail.php?pu_id=28&year=112', '2023-06-04 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 19:31:22', '社工員1', '2023-06-06 19:31:22', ''),
(46, '29', '發文簽核：主旨qwqeasdzddsd', 'published_detail.php?pu_id=29&year=112', '2023-06-08 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 20:02:50', '社工員1', '2023-06-06 20:02:50', ''),
(47, '0', '發文簽核：主旨rewrw', 'published_detail.php?pu_id=0&year=112', '2023-06-07 00:00', '社工員1', 'undefined、undefined', '未簽核', 'published', '2023-06-06 20:08:23', '社工員1', '2023-06-06 20:08:23', ''),
(48, '40', '收文簽核：主旨wdw,來文單位wadaw', 'received_detail.php?re_id=40&year=112', '2023-06-07 00:00', '社工員1', '執行長、洪勝霖、施朝根', '未簽核', 'received', '2023-06-06 21:59:11', '社工員1', '2023-06-06 21:59:11', ''),
(49, '41', '收文簽核：主旨sfsdfdsf,來文單位sfsdfsf', 'received_detail.php?re_id=41&year=112', '2023-06-02 00:00', '社工員1', '社工組長、力聖臨、洪勝霖', '未簽核', 'received', '2023-06-06 22:00:24', '社工員1', '2023-06-06 22:00:24', ''),
(50, '1', '請假單簽核：undefined', 'day_off_detail.php?day_off_id=1&resume_id=1', '2023-06-03 00:00', 'jia', '社工員2、社工組長、執行長', '社工員2未簽核、社工組長已簽核、執行長已簽核', 'day_off', '2023-06-03 20:06:43', 'jia', '2023-06-03 20:06:43', ''),
(51, '1', '加班紀錄簽核：jia 加班日期112.04.05', 'overtime_detail.php?overtime_id=1&resume_id=1', '2023-06-03 00:00', 'jia', '社工員2、社工組長、執行長', '社工員2未簽核、社工組長已簽核、執行長已簽核', 'overtime', '2023-06-03 21:13:21', 'jia', '2023-06-03 21:13:21', ''),
(52, '17', '結案簽核：案號RE111姓名test', 'closed_detail.php?closed_id=17', '2023-06-05 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長已簽核', 'closed', '2023-06-05 19:30:22', 'jia', '2023-06-05 19:30:22', ''),
(53, '6', '生輔紀錄簽核：日期2023-03-04生活輔導員test生活輔導員', 'dlgrec_detail.php?dlgrec_id=6', '2023-06-05 15:44', '社工員1', '社工員1、園主任、執行長', '社工員1未簽核、園主任未簽核、執行長已簽核', 'dlgrec', '2023-06-05 21:11:44', '執行長', '2023-06-05 21:11:44', ''),
(54, '43', '收文簽核：主旨ttas,來文單位units', 'received_detail.php?re_id=43&year=112', '2023-06-07 00:00', '社工組長', '歐陽美悌、園主任、執行長、社工組長、洪勝霖', '歐陽美悌未簽核、園主任未簽核、執行長未簽核、社工組長未簽核、洪勝霖未簽核', 'received', '2023-06-08 15:48:41', '社工組長', '2023-06-08 15:48:41', ''),
(55, '32', '發文簽核：主旨tt123', 'published_detail.php?pu_id=32&year=112', '2023-06-07 00:00', '社工組長', '社工組長、園主任', '社工組長未簽核、園主任未簽核', 'published', '2023-06-08 15:49:53', '社工組長', '2023-06-08 15:49:53', ''),
(56, '39', '理監事會議記錄簽核：第五屆第十五次', 'board_supervisor_detail.php?year=112&id=39&bs_id=39&rec_type=upload', '2023-06-16 00:00', '社工員1', '社工員2', '未簽核', 'board_supervisor', '2023-06-16 10:46:19', '社工員1', '2023-06-16 10:46:19', ''),
(57, '40', '理監事會議記錄簽核：第五屆第四促', 'board_supervisor_detail.php?year=112&id=40&bs_id=40&rec_type=upload', '2023-06-16 00:00', '社工員1', '社工員2', '未簽核', 'board_supervisor', '2023-06-16 10:47:08', '社工員1', '2023-06-16 10:47:08', ''),
(67, '18', '結案簽核：案號440姓名測O試', 'closed_detail.php?closed_id=18', '2023-07-20 00:00', '花花', '社工員1、社工員2', '社工員1未簽核、社工員2未簽核', 'closed', '2023-07-20 14:40:12', '花花', '2023-07-20 14:40:12', ''),
(68, '7', '生輔紀錄簽核：日期2023-07-20生活輔導員張11', 'dlgrec_detail.php?dlgrec_id=7', '2023-07-20 08:13', '花花', '花花、社工員1、社工員2', '花花未簽核、社工員1未簽核、社工員2未簽核', 'dlgrec', '2023-07-20 14:58:13', '花花', '2023-07-20 14:58:13', ''),
(69, '8', '生輔紀錄簽核：日期2023-08-18生活輔導員rrerw', 'peers_dlgrec_detail.php?peers_dlgrec_id=8', '2023-08-09 08:53', '晏傳恕', '晏傳恕、晏傳恕、晏傳恕', '晏傳恕未簽核、晏傳恕未簽核、晏傳恕未簽核', 'peers_dlgrec', '2023-08-09 14:54:53', '社工員1', '2023-08-09 14:54:53', ''),
(70, '0', '團督記錄簽核：test團督記錄標題816', 'supervisor_record_detail_v2.php?year=112&id=0&sr_id=0&rec_type=upload', '2023-08-16 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長未簽核', 'supervisor_record', '2023-08-16 19:18:10', 'jia', '2023-08-16 19:18:10', ''),
(71, '0', '理監事會記錄簽核：test理監事會記錄標題825', 'board_supervisor_detail_v2.php?year=112&id=0&bs_id=0&rec_type=upload', '2023-08-25 00:00', '園主任', '園主任、執行長', '園主任未簽核、執行長未簽核', 'board_supervisor', '2023-08-30 21:36:02', '園主任', '2023-08-30 21:36:02', ''),
(72, '0', '會員大會記錄簽核：test會員大會記錄標題1111111', 'members_assemble_detail_v2.php?year=111&id=0&ma_id=0&rec_type=upload', '2022-11-11 00:00', '園主任', '園主任、執行長', '園主任未簽核、執行長未簽核', 'members_assemble', '2023-08-30 22:06:49', '園主任', '2023-08-30 22:06:49', ''),
(73, '9', '生輔紀錄簽核：日期2023-08-04生活輔導員test12312', 'peers_dlgrec_detail.php?peers_dlgrec_id=9', '2023-08-31 15:37', '社工員2', '社工員2、園主任、執行長', '社工員2未簽核、園主任已簽核、執行長未簽核', 'peers_dlgrec', '2023-08-31 21:34:37', '園主任', '2023-08-31 21:34:37', ''),
(74, '2', '請假單簽核：fffff 事假', 'day_off_detail.php?day_off_id=2&resume_id=6', '2023-09-07 00:00', 'fffff', '社工員2、社工組長、執行長', '社工組長未簽核、執行長未簽核、社工員2未簽核', 'day_off', '2023-09-07 21:19:31', 'fffff', '2023-09-07 21:19:31', ''),
(77, '1_6_RE111', '開案個案-(生活品質問卷)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=life', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任已簽核、執行長未簽核', 'current_case', '2023-09-19 00:44:30', '社工組長', '2023-09-19 00:44:30', ''),
(79, '7_6_RE111', '開案個案-(憂鬱量表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=sullen', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:30:11', '社工組長', '2023-09-19 23:30:11', ''),
(80, '13_6_RE111', '開案個案-(個案評估表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=case', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:37:29', '社工組長', '2023-09-19 23:37:29', ''),
(81, '14_6_RE111', '開案個案-(個案會談紀錄)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=interlocution', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:38:09', '社工組長', '2023-09-19 23:38:09', ''),
(82, '15_6_RE111', '開案個案-(社會資源應用表格)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=resource', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:38:48', '社工組長', '2023-09-19 23:38:48', ''),
(83, '16_6_RE111', '開案個案-(健康管理評估表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=health', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:39:32', '社工組長', '2023-09-19 23:39:32', ''),
(84, '17_6_RE111', '開案個案-(就業需求評估表&就業服務滿意度調查表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=employment_satif', '2023-09-19 00:00', '社工員1', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'current_case', '2023-09-19 23:40:26', '社工組長', '2023-09-19 23:40:26', ''),
(85, '18_6_RE111', '開案個案-(服務滿意度量表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=satif', '2023-09-19 00:00', '社工員1', '社工組長、歐陽美悌', '社工組長未簽核、歐陽美悌未簽核', 'current_case', '2023-09-19 23:41:01', '社工組長', '2023-09-19 23:41:01', ''),
(86, '19_6_RE111', '開案個案-(家庭關係)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=familyship', '2023-09-19 00:00', '社工員1', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'current_case', '2023-09-19 23:41:54', '社工組長', '2023-09-19 23:41:54', ''),
(87, '20_6_RE111', '開案個案-(BSRS-5量表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=BSRS5', '2023-09-19 00:00', '社工員1', '園主任、執行長', '園主任未簽核、執行長未簽核', 'current_case', '2023-09-19 23:42:37', '社工組長', '2023-09-19 23:42:37', ''),
(88, '21_6_RE111', '開案個案-(安置、自立宿舍評估量表)簽核：案號：RE111', 'case_all.php?name=test&gender=男&pid=T1334356112&date=2022-08-08&property=安置家園&type=藥癮家庭&grade=B&id=6&open_id=RE111&referral=其他&case_Create_date=2022-08-08&unopen_type=reopencase&birth=1991-02-03&form_type=settlement', '2023-09-19 00:00', '社工員1', '社工組長、園主任', '社工組長未簽核、園主任未簽核', 'current_case', '2023-09-19 23:43:22', '社工組長', '2023-09-19 23:43:22', ''),
(89, '8', '生輔紀錄簽核：日期2023-09-08生活輔導員test生活輔導員', 'dlgrec_detail.php?dlgrec_id=8', '2023-09-23 11:53', '社工員2', '社工員2、園主任、執行長', '社工員2未簽核、園主任未簽核、執行長未簽核', 'dlgrec', '2023-09-23 17:12:53', 'jia', '2023-09-23 17:12:53', ''),
(90, '2', '加班紀錄簽核：jia 加班日期112.09.08', 'overtime_detail.php?overtime_id=2&resume_id=1', '2023-09-25 00:00', 'jia', '歐陽美悌、園主任、執行長', '園主任未簽核、執行長未簽核、歐陽美悌未簽核', 'overtime', '2023-09-25 15:50:08', 'jia', '2023-09-25 15:50:08', ''),
(91, '2', '團督記錄簽核：TEST團督記錄標題925', 'supervisor_record_detail_v2.php?year=112&id=2&sr_id=2&rec_type=upload', '2023-09-25 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長未簽核', 'supervisor_record', '2023-09-25 17:47:26', 'jia', '2023-09-25 17:47:26', ''),
(92, '2', '團督記錄簽核：TEST團督記錄標題925', 'supervisor_record_detail_v2.php?year=112&id=2&sr_id=2&rec_type=upload', '2023-09-25 00:00', 'jia', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'supervisor_record', '2023-09-25 17:51:41', 'jia', '2023-09-25 17:51:41', ''),
(94, '3', '團督記錄簽核：test團督記錄922', 'supervisor_record_detail_v2.php?year=112&id=3&sr_id=3&rec_type=upload', '2023-09-22 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長未簽核', 'supervisor_record', '2023-09-25 18:09:38', 'jia', '2023-09-25 18:09:38', ''),
(95, '2', '理監事會記錄簽核：test理監事會記錄0902', 'board_supervisor_detail_v2.php?year=112&id=2&bs_id=2&rec_type=upload', '2023-09-02 00:00', 'jia', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'board_supervisor', '2023-09-25 22:29:35', 'jia', '2023-09-25 22:29:35', ''),
(96, '4', '團督記錄簽核：test團督記錄0904', 'supervisor_record_detail_v2.php?year=112&id=4&sr_id=4&rec_type=upload', '2023-09-04 00:00', 'jia', '社工組長、園主任', '社工組長未簽核、園主任未簽核', 'supervisor_record', '2023-09-25 22:39:04', 'jia', '2023-09-25 22:39:04', ''),
(97, '3', '理監事會記錄簽核：TT理監事會記錄0901', 'board_supervisor_detail_v2.php?year=112&id=3&bs_id=3&rec_type=upload', '2023-09-01 00:00', 'jia', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'board_supervisor', '2023-09-25 22:42:49', 'jia', '2023-09-25 22:42:49', ''),
(98, '2', '會員大會記錄簽核：tt會員大會記錄0906', 'members_assemble_detail_v2.php?year=112&id=2&ma_id=2&rec_type=upload', '2023-09-06 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長未簽核', 'members_assemble', '2023-09-25 22:50:32', 'jia', '2023-09-25 22:50:32', ''),
(99, '8', '生輔紀錄簽核：日期生活輔導員tesst生活輔導員', 'dlgrec_detail.php?dlgrec_id=8', '2023-09-26 13:49', '社工員2', '社工員2、園主任、執行長', '社工員2未簽核、園主任未簽核、執行長未簽核', 'dlgrec', '2023-09-26 19:38:49', '園主任', '2023-09-26 19:38:49', ''),
(100, '10', '生輔紀錄簽核：日期2023-09-07生活輔導員test管理員/生活輔導員', 'peers_dlgrec_detail.php?peers_dlgrec_id=10', '2023-09-26 13:26', '社工員1', '社工員1、園主任、執行長', '社工員1未簽核、園主任未簽核、執行長未簽核', 'peers_dlgrec', '2023-09-26 19:42:26', '園主任', '2023-09-26 19:42:26', ''),
(101, '3', '請假單簽核：jia 事假', 'day_off_detail.php?day_off_id=3&resume_id=1', '2023-10-02 00:00', 'jia', '社工員2、社工組長、執行長', '社工組長未簽核、執行長未簽核、社工員2未簽核', 'day_off', '2023-10-02 17:37:44', 'jia', '2023-10-02 17:37:44', ''),
(102, '5', '團督記錄簽核：test團督記錄標題aa', 'supervisor_record_detail_v2.php?year=112&id=5&sr_id=5&rec_type=upload', '2023-10-05 00:00', 'jia', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'supervisor_record', '2023-10-02 18:14:38', 'jia', '2023-10-02 18:14:38', ''),
(103, '4', '理監事會記錄簽核：test理監事會記錄標題1006', 'board_supervisor_detail_v2.php?year=112&id=4&bs_id=4&rec_type=upload', '2023-10-06 00:00', 'jia', '社工組長、執行長', '社工組長未簽核、執行長未簽核', 'board_supervisor', '2023-10-02 18:17:42', 'jia', '2023-10-02 18:17:42', ''),
(104, '3', '會員大會記錄簽核：會員大會記錄標題1011', 'members_assemble_detail_v2.php?year=112&id=3&ma_id=3&rec_type=upload', '2023-10-11 00:00', 'jia', '園主任、執行長', '園主任未簽核、執行長未簽核', 'members_assemble', '2023-10-02 18:19:21', 'jia', '2023-10-02 18:19:21', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `sign_notice`
--

INSERT INTO `sign_notice` (`Id`, `file_name`, `authority`, `date`, `person`, `datetime`, `authority_name`) VALUES
(3, 'Allen家訪', 1, '0000-00-00', '園主任', '2021-12-21 12:00', '、、'),
(4, '車輛外出登記-jia', 1, '0000-00-00', '園主任', '2023-10-02 16:20', '、、'),
(5, 'Tim(安非他命)會談', 1, '0000-00-00', '園主任', '2021-11-19 09:00', '社工員1、社工員2、'),
(6, 'deny(大麻)會談', 1, '0000-00-00', '園主任', '2021-10-14 12:00', '社工員2、社工員1、'),
(7, '社工訪視-test社工訪視', 1, '0000-00-00', '園主任', '2023-10-02 14:05', '社工員2、社工員1、'),
(8, 'deny(大麻)會談', 1, '0000-00-00', '園主任', '2021-12-31 12:00', '社工員2、社工員1、'),
(9, '團督記錄簽核：test團督記錄標題aab', 1, '0000-00-00', '園主任', '2023-10-05 00:00', '社工員2、社工組長、'),
(10, 'Allen(K他命)會談', 1, '0000-00-00', '園主任', '2021-11-06 07:00', '社工員1、社工員2、'),
(12, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-27 12:00', '社工員1、執行長、'),
(14, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-11-17 12:00', '社工組長、社工員2、'),
(15, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-27 12:00', '社工組長、執行長、'),
(17, 'Allen(K他命)面訪', 1, '0000-00-00', '園主任', '2021-12-26 12:00', '社工員2、社工員1、'),
(18, 'test公告1003auth4', 1, '0000-00-00', '園主任', '2023-10-03 18:00', '社工員1、社工組長、'),
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
(35, 'test001()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(36, '陳O玲(古柯鹼,大麻,菸)面訪', 1, '0000-00-00', '花花', '2022-10-26 12:00', 'test001、test001、'),
(37, '測O試(FM2藥丸,檳榔)面訪', 1, '0000-00-00', '花花', '2022-10-31 16:00', 'test001、test001、'),
(38, '測O試(FM2藥丸,檳榔)面訪', 1, '0000-00-00', '花花', '2022-11-04 10:00', 'test001、test001、'),
(39, '測O試(2022-10-13)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-13 13:00', 'test001、test001、'),
(40, '測O試(2022-10-14)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-14 09:00', 'test001、test001、'),
(41, '測O試(2022-10-15)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-15 16:00', 'test001、test001、'),
(42, '測O試(2022-10-15)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-15 16:00', 'test001、test001、'),
(43, '測O試(2022-10-15)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-15 16:00', 'test001、test001、'),
(44, '測O試(2022-10-17)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-17 12:00', 'test001、test001、'),
(45, '測O試(2022-10-18)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-18 11:00', 'test001、test001、'),
(46, '測O試(2022-10-19)監所服務-訪談', 1, '0000-00-00', '花花', '2022-10-19 14:00', 'test001、test001、'),
(47, 'qas()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(48, 'ㄓㄜㄒㄧㄢ(2022-12-06)在職訓練', 1, '0000-00-00', '花花', '2022-12-06 12:00', '、、'),
(49, '青蛙(酒精,精神藥物,香菸)面訪', 1, '0000-00-00', '花花', '2019-02-03 12:00', 'ㄓㄜㄒㄧㄢ、叫http好了、'),
(50, '盧櫻桃(2020-07-29)監所服務-訪談', 1, '0000-00-00', '花花', '2020-07-29 04:00', 'ㄓㄜㄒㄧㄢ、叫http好了、'),
(51, '盧櫻桃(2021-08-06)監所服務-訪談', 1, '0000-00-00', '花花', '2021-08-06 13:00', 'ㄓㄜㄒㄧㄢ、叫http好了、'),
(52, '盧櫻桃(2022-01-01)監所服務-訪談', 1, '0000-00-00', '花花', '2022-01-01 12:00', 'ㄓㄜㄒㄧㄢ、叫http好了、'),
(53, '盧櫻桃(2022-02-01)監所服務-訪談', 1, '0000-00-00', '花花', '2022-02-01 01:00', 'ㄓㄜㄒㄧㄢ、test001、'),
(54, '盧櫻桃(2022-03-01)監所服務-訪談', 1, '0000-00-00', '花花', '2022-03-01 07:00', 'ㄓㄜㄒㄧㄢ、社工組長、'),
(55, '盧櫻桃(2022-04-03)監所服務-訪談', 1, '0000-00-00', '花花', '2022-04-03 12:30', 'ㄓㄜㄒㄧㄢ、ㄓㄒ、'),
(56, '盧櫻桃(2022-05-09)監所服務-訪談', 1, '0000-00-00', '花花', '2022-05-09 13:30', 'ㄓㄜㄒㄧㄢ、test001、'),
(57, '盧櫻桃(2022-06-05)監所服務-訪談', 1, '0000-00-00', '花花', '2022-06-05 12:00', 'ㄓㄜㄒㄧㄢ、丘培民、'),
(58, 'fff()在職訓練', 1, '0000-00-00', 'ㄓㄜㄒㄧㄢ', ' 12:00', '、、'),
(59, '測O試(FM2藥丸,檳榔)面訪', 1, '0000-00-00', '社工員1', '2023-03-30 12:00', '社工員2、花花、'),
(60, 'fdfsf()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(61, '(2023-06-12)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-12 05:00', '、、'),
(62, 'timo(2023-06-09)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-09 03:00', '、、'),
(63, 'timo(2023-06-17)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-17 12:00', '、、'),
(64, 'timo()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(65, 'timo(2023-06-17)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-17 12:00', '、、'),
(66, 'timo(2023-06-02)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-02 12:00', '、、'),
(67, 'timo(2023-06-20)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-20 12:00', '、、'),
(68, 'timo()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(69, 'ddddd()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(70, '黃QQ(2023-07-13)監所服務-訪談', 1, '0000-00-00', '社工員1', '2023-07-13 12:00', '園主任、社工組長、'),
(71, 'ddddd(2023-07-05)在職訓練', 1, '0000-00-00', '社工員1', '2023-07-05 12:00', '、、'),
(72, 'Timo()在職訓練', 1, '0000-00-00', '社工員1', ' 12:00', '、、'),
(73, '黃QQ(2023-07-05)監所服務-訪談', 1, '0000-00-00', '社工員1', '2023-07-05 12:00', '執行長、許文瀞、'),
(74, '(2023-07-10)在職訓練', 1, '0000-00-00', '社工組長', '2023-07-10 12:00', '、、'),
(75, '(2023-07-06)在職訓練', 1, '0000-00-00', '社工組長', '2023-07-06 08:00', '、、'),
(76, 'fffg(2023-06-29)在職訓練', 1, '0000-00-00', '社工員1', '2023-06-29 12:00', '、、'),
(77, 'qqqq()在職訓練', 1, '0000-00-00', '執行長', ' 12:00', '、、'),
(78, 'fffg(2023-07-04)在職訓練', 1, '0000-00-00', '執行長', '2023-07-04 12:30', '、、'),
(79, 'fffg(2023-07-11)在職訓練', 1, '0000-00-00', '執行長', '2023-07-11 12:30', '、、'),
(80, 'wu先生(2023-07-20)監所服務-訪談', 1, '0000-00-00', '花花', '2023-07-20 12:00', 'ㄓㄜㄒㄧㄢ、、'),
(81, 'cccc(2023-08-10)在職訓練', 1, '0000-00-00', '社工員1', '2023-08-10 12:00', '、、'),
(82, '內部開會', 1, '0000-00-00', '社工組長', '2023-09-12 14:00', '、'),
(83, '出訪', 1, '0000-00-00', '社工組長', '2023-09-12 08:00', '、'),
(84, '團督會議', 1, '0000-00-00', '社工組長', '2023-09-22 13:00', '、'),
(85, 'ssa', 1, '0000-00-00', '園主任', '2023-10-24 12:00', '、'),
(86, 'testa', 1, '0000-00-00', 'jia', '2023-10-10 12:00', '、'),
(87, 'bas', 1, '0000-00-00', '園主任', '2023-10-11 12:00', '、'),
(88, 'testb', 1, '0000-00-00', 'jia', '2023-10-04 12:00', '、'),
(89, 'testaaa', 1, '0000-00-00', 'jia', '2023-10-04 13:25', '、'),
(90, 'test', 1, '0000-00-00', '園主任', '2023-10-05 12:00', '、');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(21, '111', '[{\"name\":\"title_name\",\"value\":\"test團督記錄標題1015\"},{\"name\":\"meeting_date\",\"value\":\"111年10月15日\"},{\"name\":\"meeting_time\",\"value\":\"12:20\"},{\"name\":\"place\",\"value\":\"test會議地點\"},{\"name\":\"ceo_name\",\"value\":\"test主席\"},{\"name\":\"attendees\",\"value\":\"asasd出席人員;;asdadsfff\"},{\"name\":\"absent\",\"value\":\"ttt;;請假人員\"},{\"name\":\"record\",\"value\":\"tttasdas;;紀錄者\"},{\"name\":\"suggest\",\"value\":\"yyyy;;督導建議\"},{\"name\":\"next_focus\",\"value\":\"下次團督重點]]];;ffdsfs\"}]', '', '', '社工組長', '', '', '0000-00-00 00:00:00', '2022-10-15 23:16:59', 'jia', '2022-10-15 23:19:10', 'jia'),
(22, '111', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次團督\"},{\"name\":\"meeting_date\",\"value\":\"111年12月06日\"},{\"name\":\"meeting_time\",\"value\":\"15:16\"},{\"name\":\"place\",\"value\":\"快樂聯盟五樓陽台\"},{\"name\":\"ceo_name\",\"value\":\"香蕉小姐\"},{\"name\":\"attendees\",\"value\":\"蘋果先生、青貧果先生、冬呱、深藍色口罩女士\"},{\"name\":\"absent\",\"value\":\"冬季長褲、昨天的晚餐\"},{\"name\":\"record\",\"value\":\"企鵝\"},{\"name\":\"suggest\",\"value\":\"可以多一點人開，不然很無聊\"},{\"name\":\"next_focus\",\"value\":\"一定要買機票再搭飛機\"},{\"name\":\"supervise\",\"value\":\"花花\"}]', '', '', '花花', '../supervisor_record/signature/1670316102.png', '', '2022-12-06 16:41:42', '2022-12-06 16:41:02', '花花', '0000-00-00 00:00:00', ''),
(23, '111', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次團督但是是16時42分\"},{\"name\":\"meeting_date\",\"value\":\"111年12月06日\"},{\"name\":\"meeting_time\",\"value\":\"04:54\"},{\"name\":\"place\",\"value\":\"麥味登廚房內煮蛋花湯的鍋子裡面\"},{\"name\":\"ceo_name\",\"value\":\"又是測試主席\"},{\"name\":\"attendees\",\"value\":\"財產清冊1、柴產清冊2、柴慘清冊3\"},{\"name\":\"absent\",\"value\":\"杯墊、不會亮的電燈泡、放在室外的紅色除濕機\"},{\"name\":\"record\",\"value\":\"藍色墨水原子筆\"},{\"name\":\"suggest\",\"value\":\"今年很棒，明年會更好\"},{\"name\":\"next_focus\",\"value\":\"帶著正面的心態迎接下一年的工作\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-06 16:46:09', '花花', '0000-00-00 00:00:00', ''),
(24, '109', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次團督16時47分\"},{\"name\":\"meeting_date\",\"value\":\"109年11月11日\"},{\"name\":\"meeting_time\",\"value\":\"23:11\"},{\"name\":\"place\",\"value\":\"大仁科大的停車場\"},{\"name\":\"ceo_name\",\"value\":\"大野狼先生\"},{\"name\":\"attendees\",\"value\":\"大野狼小姐，很兇的羊咩咩、黑色長尾夾\"},{\"name\":\"absent\",\"value\":\"荷葉、玫瑰、豆芽菜\"},{\"name\":\"record\",\"value\":\"裁紙機\"},{\"name\":\"suggest\",\"value\":\"咖啡還是茶？要先決定\"},{\"name\":\"next_focus\",\"value\":\"疫情嚴峻，大家加油\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-06 16:49:53', '花花', '2022-12-06 16:50:14', '花花'),
(25, '110', '[{\"name\":\"title_name\",\"value\":\"2022年度12月06日第六次團督16時50分\"},{\"name\":\"meeting_date\",\"value\":\"110年07月17日\"},{\"name\":\"meeting_time\",\"value\":\"21:57\"},{\"name\":\"place\",\"value\":\"潮州的黃昏市場，在賣地瓜葉那間攤販的隔壁巷子進去第二間\"},{\"name\":\"ceo_name\",\"value\":\"主席主席主席\"},{\"name\":\"attendees\",\"value\":\"數學、自然、科學、社會、人文\"},{\"name\":\"absent\",\"value\":\"交通違規、紅燈行、綠燈也停、黃燈繼續停\"},{\"name\":\"record\",\"value\":\"賣口香糖的大學教授\"},{\"name\":\"suggest\",\"value\":\"我覺得啦，是有進步，不過齁，針對每日喝水量不足1500CC這件事情還是要再加油\"},{\"name\":\"next_focus\",\"value\":\"要買鮮奶茶，不喝奶精的奶茶\"},{\"name\":\"supervise\",\"value\":\"ㄓㄜㄒㄧㄢ\"}]', '', '', 'ㄓㄜㄒㄧㄢ', '', '', '0000-00-00 00:00:00', '2022-12-06 16:54:39', '花花', '0000-00-00 00:00:00', ''),
(26, '112', '[{\"name\":\"title_name\",\"value\":\"444\"},{\"name\":\"meeting_date\",\"value\":\"112年01月11日\"},{\"name\":\"meeting_time\",\"value\":\"15:53\"},{\"name\":\"place\",\"value\":\"84\"},{\"name\":\"ceo_name\",\"value\":\"95\"},{\"name\":\"attendees\",\"value\":\"DDD\"},{\"name\":\"absent\",\"value\":\"DD\"},{\"name\":\"record\",\"value\":\"DD\"},{\"name\":\"suggest\",\"value\":\"D\"},{\"name\":\"next_focus\",\"value\":\"DD\"}]', '', '', '晏傳恕', '', '', '0000-00-00 00:00:00', '2023-01-12 13:53:30', '社工員1', '2023-01-12 14:18:12', '社工員1'),
(27, '112', '[{\"name\":\"title_name\",\"value\":\"wwww\"},{\"name\":\"meeting_date\",\"value\":\"112年03月23日\"},{\"name\":\"meeting_time\",\"value\":\"10:30\"},{\"name\":\"place\",\"value\":\"wwww\"},{\"name\":\"ceo_name\",\"value\":\"www\"},{\"name\":\"attendees\",\"value\":\"www\"},{\"name\":\"absent\",\"value\":\"ww\"},{\"name\":\"record\",\"value\":\"ww\"},{\"name\":\"suggest\",\"value\":\"ww\"},{\"name\":\"next_focus\",\"value\":\"www\"},{\"name\":\"supervise\",\"value\":\"丘培民\"}]', '', '', '丘培民', '', '', '0000-00-00 00:00:00', '2023-03-30 09:31:17', 'jia', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `supervisor_record_v2`
--

CREATE TABLE `supervisor_record_v2` (
  `Id` int(240) NOT NULL,
  `Year` varchar(300) NOT NULL,
  `record_content` longtext NOT NULL,
  `upload_content` longtext NOT NULL,
  `Agenda_file_path` longtext NOT NULL,
  `Rec_file_path` longtext NOT NULL,
  `Director` varchar(300) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(300) NOT NULL,
  `Supervise` varchar(300) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `supervisor_record_v2`
--

INSERT INTO `supervisor_record_v2` (`Id`, `Year`, `record_content`, `upload_content`, `Agenda_file_path`, `Rec_file_path`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會議章程標題815\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年08月15日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"test會議章程標題;;815;;abaaaa\"},{\"name\":\"upload_title_name\",\"value\":\"test團督記錄標題815\"},{\"name\":\"upload_rec_date\",\"value\":\"112年08月15日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test;;團督記錄標題;;815;;a\"},{\"name\":\"director\",\"value\":\"園主任\"},{\"name\":\"supervise\",\"value\":\"執行長\"}]\"', '[\"../supervisor_record/112_0_data/upload/testd1234.docx\",\"../supervisor_record/112_0_data/upload/testd123.docx\",\"../supervisor_record/112_0_data/upload/testd123 - 複製.docx\",\"../supervisor_record/112_0_data/upload/testd1234 - 複製 (2).docx\"]', '[\"../supervisor_record/112_0_data/upload/tcsacas.docx\",\"../supervisor_record/112_0_data/upload/tstaaaa.docx\",\"../supervisor_record/112_0_data/upload/asdadasdsb - 複製.jpg\",\"../supervisor_record/112_0_data/upload/asdadasdsb.jpg\"]', '園主任', '../supervisor_record/signature/1692191331.png', 'dwdw', '2023-08-16 21:08:51', '執行長', '', '', '', '2023-08-16 19:18:10', 'jia', '2023-08-16 22:16:31', '園主任'),
(2, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"TEST會議章程標題925\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年09月25日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"TEST;;議程;;925\"},{\"name\":\"upload_title_name\",\"value\":\"TEST團督記錄標題925\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月25日\"},{\"name\":\"upload_rec_remark\",\"value\":\"TEST;;記錄;;925\"},{\"name\":\"director\",\"value\":\"社工組長\"},{\"name\":\"supervise\",\"value\":\"執行長\"}]\"', '[\"../supervisor_record/112_2_data/upload/議程925.docx\"]', '[\"../supervisor_record/112_2_data/upload/TEST會議記錄925.docx\"]', '社工組長', '', '', '', '執行長', '', '', '', '2023-09-25 17:51:41', 'jia', '2023-09-25 18:06:06', 'jia'),
(3, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會議章程922\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年09月22日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"test922\"},{\"name\":\"upload_title_name\",\"value\":\"test團督記錄922\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月22日\"},{\"name\":\"upload_rec_remark\",\"value\":\"testassasdaa;;922\"},{\"name\":\"upload_rec_director\",\"value\":\"園主任\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '', '', '園主任', '', '', '', '執行長', '', '', '', '2023-09-25 18:09:38', 'jia', '0000-00-00 00:00:00', ''),
(4, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"tt會議章程0902\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年09月02日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"testasdasds\"},{\"name\":\"upload_title_name\",\"value\":\"test團督記錄0904\"},{\"name\":\"upload_rec_date\",\"value\":\"112年09月04日\"},{\"name\":\"upload_rec_remark\",\"value\":\"aaaaaa\"},{\"name\":\"director\",\"value\":\"社工組長\"},{\"name\":\"supervise\",\"value\":\"園主任\"}]\"', '[\"../supervisor_record/112_4_data/upload/aaa.docx\"]', '', '社工組長', '', '', '', '園主任', '', '', '', '2023-09-25 22:39:04', 'jia', '2023-09-25 23:20:07', 'jia'),
(5, '112', '', '\"[{\"name\":\"upload_agenda_title_name\",\"value\":\"test會議章程標題\"},{\"name\":\"upload_agenda_date\",\"value\":\"112年10月04日\"},{\"name\":\"upload_agenda_remark\",\"value\":\"asdad\"},{\"name\":\"upload_title_name\",\"value\":\"test團督記錄標題aa\"},{\"name\":\"upload_rec_date\",\"value\":\"112年10月05日\"},{\"name\":\"upload_rec_remark\",\"value\":\"test\"},{\"name\":\"upload_rec_director\",\"value\":\"社工組長\"},{\"name\":\"upload_rec_supervise\",\"value\":\"執行長\"}]\"', '[\"../supervisor_record/112_5_data/upload/test團督記錄_章程.docx\"]', '[\"../supervisor_record/112_5_data/upload/test團督記錄.docx\"]', '社工組長', '', '', '', '執行長', '', '', '', '2023-10-02 18:14:38', 'jia', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `training`
--

CREATE TABLE `training` (
  `Id` int(11) NOT NULL,
  `Account_id` int(11) NOT NULL,
  `Resume_id` int(11) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Training_date` varchar(1000) NOT NULL,
  `Training_start_time` time DEFAULT NULL,
  `Training_end_time` time DEFAULT NULL,
  `Training_name` varchar(500) NOT NULL,
  `Hours` float NOT NULL,
  `Place` varchar(500) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Upload_name` varchar(200) NOT NULL,
  `Upload_path` text NOT NULL,
  `First_insert` tinyint(4) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(200) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `training`
--

INSERT INTO `training` (`Id`, `Account_id`, `Resume_id`, `Name`, `Training_date`, `Training_start_time`, `Training_end_time`, `Training_name`, `Hours`, `Place`, `Remark`, `Upload_name`, `Upload_path`, `First_insert`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 5, 0, '園主任', '112年09月08日', '09:40:00', '11:20:00', 'test課程內容', 1.7, '快樂聯盟', 'dasda', 'course_test1.docx', '../training/course_test1.docx', 1, '2023-09-29 18:04:21', '園主任', '2023-09-29 20:48:49', '園主任'),
(2, 25, 1, 'jia', '112年09月01日', '09:40:00', '11:00:00', 'test課程內容1', 1.3, '快樂聯盟', 'testad', 'jia_course_test1.docx', '../training/jia_course_test1.docx', 1, '2023-09-29 18:38:35', 'jia', '2023-09-29 20:48:27', '園主任'),
(3, 25, 1, 'jia', '111年05月13日', '13:10:00', '14:10:00', 'test課程內容2', 1, '家裡', 'adsd', '', '', 0, '2023-09-29 18:42:14', 'jia', '2023-09-29 18:42:14', ''),
(4, 25, 1, 'jia', '110年06月15日', '08:10:00', '10:10:00', 'test課程內容4', 2, '培訓中心1', 'dasdas\r\nga4', 'jia_course_test4.docx', '../training/jia_course_test4.docx', 0, '2023-09-29 18:42:55', 'jia', '2023-09-29 20:03:47', 'jia'),
(5, 25, 1, 'jia', '112年09月22日', '08:50:00', '11:00:00', 'test課程內容xx', 2.2, 'test', 'aasdd', '', '', 0, '2023-09-29 20:04:33', 'jia', '2023-09-29 20:04:33', ''),
(6, 25, 1, 'jia', '112年09月18日', '08:50:00', '11:00:00', 'test課程內容5', 2.2, 'test', 'aasdd5', '', '', 0, '2023-09-29 20:04:34', 'jia', '2023-09-29 20:05:50', 'jia'),
(7, 25, 1, 'jia', '112年09月23日', '15:20:00', '16:00:00', '課程內容dwq', 0.7, '家裡', 'sads', '', '', 0, '2023-09-29 20:05:29', 'jia', '2023-09-29 20:05:29', '');

-- --------------------------------------------------------

--
-- 資料表結構 `tw_counties`
--

CREATE TABLE `tw_counties` (
  `Id` int(20) NOT NULL,
  `Area` varchar(30) NOT NULL,
  `Counties_Cities` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `Resume_id` int(244) DEFAULT NULL,
  `Account` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Authority` int(11) NOT NULL,
  `Date` datetime NOT NULL DEFAULT current_timestamp(),
  `Job` varchar(10) NOT NULL,
  `Authority_pages` longtext NOT NULL,
  `Email` longtext NOT NULL,
  `Allow_create_acc` varchar(100) NOT NULL,
  `Allow_register_name` varchar(200) NOT NULL,
  `Create_date` datetime DEFAULT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_info`
--

INSERT INTO `user_info` (`Id`, `Resume_id`, `Account`, `Password`, `Name`, `Authority`, `Date`, `Job`, `Authority_pages`, `Email`, `Allow_create_acc`, `Allow_register_name`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, NULL, 'text1', '123', '社工員1', 7, '2021-03-06 17:04:49', '社工員', '', '', '已通過', '', NULL, '', '2023-01-16 11:14:52', '社工員1'),
(2, NULL, 'text2', '456', '社工員2', 7, '2020-10-05 21:12:04', '社工員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(3, 8, 'test3', '789', '社工組長', 3, '2020-10-05 21:12:04', '方案組長', '', 'test3_ab@gmail.com', '已通過', '', NULL, '', '2023-09-20 23:36:01', '社工組長'),
(5, NULL, 'test5', '258', '園主任', 2, '2020-10-05 21:12:04', '執行長', '', '', '已通過', '', NULL, '', '2022-12-06 16:03:34', '花花'),
(6, NULL, 'test6', '369', '執行長', 2, '2020-10-05 21:12:04', '執行長', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_h1\",\"page_h2\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_m\",\"page_n1\",\"page_n2\",\"page_o\",\"page_p1\",\"page_p2\",\"page_q\",\"page_r1\",\"page_r2\",\"page_Auth\"]', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(10, NULL, 'grace12', '0000', '歐陽美悌', 6, '2021-02-05 11:47:28', '行政人員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(11, NULL, 'grace75', '0000', '林鈺舒', 7, '2021-02-05 11:49:26', '社工員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(12, NULL, 'grace66', '0000', '丘培民', 7, '2021-02-05 11:49:47', '社工員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(13, NULL, 'grace69', '0000', '邱怡玲', 7, '2021-02-05 11:52:06', '社工員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(15, NULL, 'grace39', '0000', '張簡卉筑', 4, '2021-02-05 11:53:21', '公關組長', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(16, NULL, 'grace01', '0000', '李國揚', 1, '2021-03-18 13:21:20', '理事長', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(17, NULL, 'grace02', '0000', '苗長青', 4, '2021-03-18 13:23:31', '公關組長', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(18, NULL, 'grace03', '0000', '吳智文', 5, '2021-03-18 13:24:33', '專案社工', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(19, NULL, 'grace04', '0000', '李萬榮', 5, '2021-03-18 13:25:50', '專案社工', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(20, NULL, 'grace05', '0000', '晏傳恕', 5, '2021-03-18 13:27:08', '專案社工', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(21, NULL, 'grace06', '0000', '施朝根', 3, '2021-03-18 13:27:42', '方案組長', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(22, NULL, 'grace07', '0000', '洪勝霖', 8, '2021-03-18 13:28:18', '生輔員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(23, NULL, 'grace08', '0000', '力聖臨', 8, '2021-03-18 13:29:11', '生輔員', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(24, NULL, 'test', 'test', '花花', 3, '2021-03-06 17:04:49', '方案組長', '', '', '已通過', '', NULL, '', '2022-09-22 19:36:25', ''),
(25, 1, 'testuser', 'testjia123456', 'jia', 5, '2022-09-29 17:47:27', '專案社工', '[\"page_a\",\"page_b\",\"page_c\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_h1\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_r1\",\"page_r2\"]', '', '已通過', '', '2022-09-29 17:47:27', '園主任', '2023-10-19 18:23:08', 'jia'),
(26, 2, 'test01', '', 'test001', 5, '2022-10-12 14:17:44', '專案社工', '', '', '已通過', '', '2022-10-12 14:17:44', '花花', '2023-09-13 16:31:48', '社工組長'),
(27, 3, 'twha202212061557', 'twha20221206', 'ㄓㄜㄒㄧㄢ', 6, '2022-12-06 15:59:24', '行政人員', '', '', '已通過', '', '2022-12-06 15:59:24', '花花', '2023-03-30 18:17:41', 'jia'),
(28, 4, 'twha202212061600', '', 'ㄓㄒ', 7, '2022-12-06 16:00:44', '社工員', '', '', '已通過', '', '2022-12-06 16:00:44', '花花', '2023-09-13 19:22:07', '社工組長'),
(29, 5, 'twha202212061601', '', '叫http好了', 8, '2022-12-06 16:03:07', '生輔員', '', '', '已通過', '', '2022-12-06 16:03:07', '花花', '2023-09-13 16:31:19', '社工組長'),
(30, 6, 'ffff', 'timo789', 'fffff', 5, '2022-12-26 15:41:10', '專案社工', '', '', '已通過', '', '2022-12-26 15:41:10', '社工員1', '2023-07-14 12:09:24', '執行長'),
(31, 7, 'test714', 'test714', 'a714', 3, '2023-07-14 12:07:28', '方案組長', '', '', '已通過', '', '2023-07-14 12:07:28', '執行長', '2023-07-14 12:07:48', '執行長'),
(32, NULL, 'teaz8a', 'tea222', '陳oo', 8, '2023-09-12 22:58:14', '生輔員', '[\"page_c\",\"page_d\",\"page_e\",\"page_f\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_p1\",\"page_p2\",\"page_r1\",\"page_r2\"]', 'teaz8a@gmail.com', '已通過', '社工組長', '2023-09-12 22:58:14', '社工組長', '2023-09-13 17:13:05', '社工組長');

-- --------------------------------------------------------

--
-- 資料表結構 `user_info_default_auth`
--

CREATE TABLE `user_info_default_auth` (
  `Id` int(244) NOT NULL,
  `Authority_num` int(244) NOT NULL,
  `Job` varchar(500) NOT NULL,
  `Authority_pages` longtext NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(50) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `user_info_default_auth`
--

INSERT INTO `user_info_default_auth` (`Id`, `Authority_num`, `Job`, `Authority_pages`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 1, '理事長', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_h1\",\"page_h2\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_m\",\"page_n1\",\"page_n2\",\"page_o\",\"page_p1\",\"page_p2\",\"page_q\",\"page_r1\",\"page_r2\",\"page_Auth\"]', '2023-09-12 14:41:58', '社工組長', '2023-09-12 14:41:58', ''),
(2, 2, '執行長', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_h1\",\"page_h2\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_m\",\"page_n1\",\"page_n2\",\"page_o\",\"page_p1\",\"page_p2\",\"page_q\",\"page_r1\",\"page_r2\",\"page_Auth\"]', '2023-09-12 14:42:46', '社工組長', '2023-09-12 14:42:46', ''),
(3, 3, '方案組長', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_h1\",\"page_h2\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_m\",\"page_n1\",\"page_n2\",\"page_o\",\"page_p1\",\"page_p2\",\"page_q\",\"page_r1\",\"page_r2\",\"page_Auth\"]', '2023-09-12 14:43:36', '社工組長', '2023-09-12 14:43:36', ''),
(4, 4, '公關組長', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_r1\",\"page_r2\"]', '2023-09-12 14:45:35', '社工組長', '2023-09-12 15:51:29', '社工組長'),
(5, 5, '專案社工', '[\"page_a\",\"page_b\",\"page_c\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_r1\",\"page_r2\"]', '2023-09-12 14:46:57', '社工組長', '2023-09-12 15:52:18', '社工組長'),
(6, 6, '行政人員', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_r1\",\"page_r2\"]', '2023-09-12 14:48:57', '社工組長', '2023-09-12 15:53:21', '社工組長'),
(7, 7, '社工員', '[\"page_b\",\"page_c\",\"page_d\",\"page_e\",\"page_f\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_r1\",\"page_r2\"]', '2023-09-12 14:50:25', '社工組長', '2023-09-12 14:50:25', ''),
(8, 8, '生輔員', '[\"page_c\",\"page_d\",\"page_e\",\"page_f\",\"page_k\",\"page_l\",\"page_n1\",\"page_o\",\"page_p1\",\"page_p2\",\"page_r1\",\"page_r2\"]', '2023-09-12 14:51:43', '社工組長', '2023-09-12 14:51:43', ''),
(9, 9, '工讀生', 'null', '2023-09-12 14:54:00', '社工組長', '2023-09-12 14:54:00', ''),
(10, 9, '志工', 'null', '2023-09-12 14:54:15', '社工組長', '2023-09-12 14:54:15', '');

-- --------------------------------------------------------

--
-- 資料表結構 `vehicle_retain`
--

CREATE TABLE `vehicle_retain` (
  `Id` int(11) NOT NULL,
  `Borrow_date` date NOT NULL,
  `Out_timestap` time NOT NULL,
  `Back_timestap` time NOT NULL,
  `Reason` varchar(2000) NOT NULL,
  `Place` varchar(500) NOT NULL,
  `Vehicle` varchar(500) NOT NULL,
  `Booker` varchar(50) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(50) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `vehicle_retain`
--

INSERT INTO `vehicle_retain` (`Id`, `Borrow_date`, `Out_timestap`, `Back_timestap`, `Reason`, `Place`, `Vehicle`, `Booker`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '2023-10-01', '14:10:00', '15:06:00', 'test外出1', '高雄1', 'RT-4521', '社工員2', '2023-10-01 14:42:02', 'jia', '2023-10-01 15:06:08', 'jia'),
(2, '2023-10-02', '09:25:00', '00:00:00', 'test1002', '屏東市區1002', 'VAR-1242', '社工員2', '2023-10-01 15:23:08', 'jia', '2023-10-01 15:23:08', ''),
(3, '2023-10-01', '16:00:00', '00:00:00', 'TEST事由', '屏東市區445', 'DRE-0982', '社工組長', '2023-10-01 15:23:41', 'jia', '2023-10-01 15:23:41', ''),
(4, '2023-10-01', '13:05:00', '00:00:00', 'TEST事由', '高雄231', 'DDA-1233', '社工員1', '2023-10-01 15:24:49', 'jia', '2023-10-01 15:24:49', ''),
(7, '2023-10-01', '10:30:00', '00:00:00', 'adasd', 'dasd', 'ttt', 'jia', '2023-10-01 15:31:44', 'jia', '2023-10-01 15:31:44', ''),
(8, '2023-10-02', '15:30:00', '00:00:00', 'TEST事由', '地點高雄', 'FVR-0921', '園主任', '2023-10-02 15:55:40', '園主任', '2023-10-02 15:55:40', ''),
(9, '2023-10-02', '13:30:00', '00:00:00', 'adsd', '屏東市', 'DEA-9988', '園主任', '2023-10-02 16:04:55', '園主任', '2023-10-02 16:04:55', ''),
(10, '2023-10-02', '17:00:00', '00:00:00', 'test事由', 'test高雄', 'DAS-0982', 'jia', '2023-10-02 16:20:24', 'jia', '2023-10-02 16:20:24', ''),
(11, '2023-10-02', '16:20:00', '17:45:00', 'ttt事由', 'test高雄', 'FAS-0982', 'jia', '2023-10-02 16:39:41', 'jia', '2023-10-02 16:39:41', ''),
(12, '2023-10-02', '17:00:00', '17:50:00', 'ttt事由', 'ttt高雄', 'DAW-0921', 'jia', '2023-10-02 16:55:34', 'jia', '2023-10-02 16:56:09', 'jia'),
(13, '2023-10-02', '14:25:00', '15:20:00', 'TTT', 'P', 'TES交通工具', 'jia', '2023-10-02 16:57:28', 'jia', '2023-10-02 16:57:53', 'jia'),
(14, '2023-10-02', '12:00:00', '00:00:00', 'taasd', 'adasdsa', 'adasdad', '園主任', '2023-10-02 18:24:04', '園主任', '2023-10-02 18:24:04', '');

-- --------------------------------------------------------

--
-- 資料表結構 `visit_index`
--

CREATE TABLE `visit_index` (
  `Id` int(11) NOT NULL,
  `Visit_title` varchar(300) NOT NULL,
  `Visit_time` datetime NOT NULL,
  `Visit_assign1` varchar(50) NOT NULL,
  `Visit_assign2` varchar(50) NOT NULL,
  `Visit_end_time` datetime DEFAULT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(50) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `visit_index`
--

INSERT INTO `visit_index` (`Id`, `Visit_title`, `Visit_time`, `Visit_assign1`, `Visit_assign2`, `Visit_end_time`, `Remark`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 'test社工訪視', '2023-09-07 09:30:00', '社工員1', '社工員2', '2023-09-07 12:00:00', '', '2023-09-07 19:09:01', '園主任', '2023-09-16 12:31:45', '社工組長'),
(2, 'testaaaaaaaaa', '2023-09-06 08:20:00', '社工員2', '丘培民', '2023-09-07 15:30:00', 'test\n訪視結束15:30', '2023-09-07 20:01:44', '園主任', '2023-09-07 20:26:24', '園主任'),
(3, '社工訪視1', '2023-09-15 14:30:00', '社工組長', '社工員2', NULL, '', '2023-09-16 12:31:16', '社工組長', '2023-09-16 12:31:16', ''),
(4, 'test社工訪視', '2023-10-02 14:05:00', '社工員1', '社工員2', '2023-10-02 15:15:00', 'aaa', '2023-10-02 17:01:53', 'jia', '2023-10-02 17:08:32', 'jia'),
(5, 'test標題社工訪視快樂聯盟', '2023-10-02 17:05:00', '社工員1', '社工員2', NULL, '', '2023-10-02 20:02:22', 'jia', '2023-10-02 20:02:22', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `volunteer`
--

INSERT INTO `volunteer` (`Id`, `Year`, `Name`, `Serv_type`, `Serv_time`, `Time_all`, `Rece_hours`, `Serv_award`, `Honor_card`, `Sign_date`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 112, 'test712', '活動', '周一早上9:00-12:00', 30.5, '是', '否', '否', '111年07月12日', '2022-07-12 22:34:31', '園主任', '2023-05-24 15:28:43', '社工員1'),
(2, 111, 'test713', '美工', '周二下午13:00-12:00', 10, '是', '否', '是', '111年07月12日', '2022-07-12 22:35:07', '園主任', '2022-11-26 16:21:56', '社工員1'),
(3, 111, 'test728', '環境清潔', '周三早上9:00-12:00', 13.5, '是', '是', '否', '111年07月28日', '2022-07-28 19:03:34', '園主任', '2022-07-28 19:09:15', '園主任'),
(4, 111, 'test11234', '文宣', '周四下午13:00-12:00', 2, '是', '是', '是', '111年07月28日', '2022-07-28 19:03:59', '園主任', '2022-07-28 19:10:58', '園主任'),
(5, 111, '測試測試測試', '其他', '周三下午13:00-12:00', 16, '是', '是', '否', '111年10月12日', '2022-10-12 14:33:35', '花花', '2022-10-12 14:34:40', '花花'),
(6, 111, 'test測試', '文宣', '周三下午13:00-12:00', 19, '是', '否', '否', '111年10月12日', '2022-10-12 14:36:45', '花花', '0000-00-00 00:00:00', ''),
(7, 111, '測試567', '美工', '周二下午13:00-12:00', 4, '是', '否', '否', '111年10月12日', '2022-10-12 14:43:30', '花花', '2022-10-12 14:44:01', '花花'),
(8, 111, 'ㄓㄜㄒㄧㄢ', '輔導', '周三下午13:00-12:00', 21, '否', '否', '否', '111年12月06日', '2022-12-06 16:33:48', '花花', '2022-12-06 16:34:06', '花花'),
(9, 111, '劉品均', '電腦', '周一早上9:00-12:00', 0, '是', '是', '是', '111年12月09日', '2022-12-09 14:16:02', '花花', '0000-00-00 00:00:00', ''),
(10, 111, '劉品均', '電腦', '周一早上9:00-12:00', 93, '是', '是', '是', '111年12月09日', '2022-12-09 14:16:53', '花花', '2022-12-09 14:17:08', '花花'),
(11, 111, '劉品均', '電腦', '周一早上9:00-12:00', 99, '是', '是', '是', '111年12月09日', '2022-12-09 14:17:39', '花花', '0000-00-00 00:00:00', ''),
(12, 111, '劉品均', '電腦', '周一早上9:00-12:00', 22, '是', '是', '是', '111年12月23日', '2022-12-23 10:04:29', '花花', '0000-00-00 00:00:00', ''),
(13, 111, '劉品均', '電腦', '周一早上9:00-12:00', 55, '是', '是', '是', '111年12月23日', '2022-12-23 10:06:59', '花花', '0000-00-00 00:00:00', '');

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
  `Record_date` varchar(500) NOT NULL,
  `Record_time` varchar(500) NOT NULL,
  `Remark` varchar(2000) NOT NULL,
  `Sign_date` varchar(100) NOT NULL,
  `Is_firstadd` tinyint(1) NOT NULL,
  `Create_date` datetime DEFAULT current_timestamp(),
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime NOT NULL,
  `Update_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `volunteer_hours_record`
--

INSERT INTO `volunteer_hours_record` (`Id`, `Volunteer_id`, `Year`, `Name`, `Add_hours`, `Record_date`, `Record_time`, `Remark`, `Sign_date`, `Is_firstadd`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 1, 111, 'TEST111_Vuser54', 16, '2022-07-12', '', 'test', '111年07月12日', 1, '2022-07-12 22:34:31', '園主任', '0000-00-00 00:00:00', ''),
(2, 2, 111, 'test713', 6, '', '', '', '111年07月12日', 1, '2022-07-12 22:35:07', '園主任', '0000-00-00 00:00:00', ''),
(12, 1, 111, 'TEST111_Vuser54', -1, '2022-07-14', '', '目前服務時數由16更改為15(-1)。資料異動者：園主任，異動時間：2022-07-14 15:43:51。', '', 0, '2022-07-14 21:43:51', '園主任', '0000-00-00 00:00:00', ''),
(16, 1, 111, 'TEST111_Vuser54', 4, '2022-07-14', '', '新增至19小時', '', 0, '2022-07-14 22:02:58', '園主任', '0000-00-00 00:00:00', ''),
(17, 1, 111, 'TEST111_Vuser54', -3, '2022-07-14', '', '減至16', '', 0, '2022-07-14 22:03:22', '園主任', '0000-00-00 00:00:00', ''),
(18, 3, 111, 'test728', 11.5, '', '', '', '111年07月28日', 1, '2022-07-28 19:03:34', '園主任', '0000-00-00 00:00:00', ''),
(19, 4, 111, 'test11234', 0, '', '', '', '111年07月28日', 1, '2022-07-28 19:03:59', '園主任', '0000-00-00 00:00:00', ''),
(25, 3, 111, 'test728', 2.5, '', '', '+2.5小時', '', 0, '2022-07-28 19:08:58', '園主任', '0000-00-00 00:00:00', ''),
(26, 3, 111, 'test728', -0.5, '', '', 'test', '', 0, '2022-07-28 19:09:15', '園主任', '0000-00-00 00:00:00', ''),
(27, 4, 111, 'test11234', 4.5, '', '', '+4.5hours', '', 0, '2022-07-28 19:09:33', '園主任', '0000-00-00 00:00:00', ''),
(29, 4, 111, 'test11234', -2.5, '', '', '', '', 0, '2022-07-28 19:10:58', '園主任', '0000-00-00 00:00:00', ''),
(30, 1, 111, 'TEST111_Vuser54', 2.5, '2022-09-20', '13:30-16:00', 'test+2.5', '', 0, '2022-09-20 17:51:57', '園主任', '0000-00-00 00:00:00', ''),
(31, 1, 111, 'TEST111_Vuser54', 1.5, '2022-09-20', '14:30-16:00', 'test1.5', '', 0, '2022-09-20 17:52:12', '園主任', '0000-00-00 00:00:00', ''),
(32, 1, 111, 'TEST111_Vuser54', -3.5, '2022-09-20', '', '目前服務時數由20更改為16.5(-3.5)。資料異動者：園主任，異動時間：2022-09-20 11:59:06。', '', 0, '2022-09-20 17:59:06', '園主任', '0000-00-00 00:00:00', ''),
(33, 5, 111, '測試測試測試', 15, '', '', '', '111年10月12日', 1, '2022-10-12 14:33:35', '花花', '0000-00-00 00:00:00', ''),
(34, 5, 111, '測試測試測試', 1, '', '', '', '', 0, '2022-10-12 14:34:40', '花花', '0000-00-00 00:00:00', ''),
(35, 6, 111, 'test測試', 19, '', '', '', '111年10月12日', 1, '2022-10-12 14:36:45', '花花', '0000-00-00 00:00:00', ''),
(36, 7, 111, '測試567', 4, '', '', '', '111年10月12日', 1, '2022-10-12 14:43:30', '花花', '0000-00-00 00:00:00', ''),
(37, 2, 111, 'test713', 4, '', '', '', '', 0, '2022-11-26 16:21:56', '社工員1', '0000-00-00 00:00:00', ''),
(38, 8, 111, 'ㄓㄜㄒㄧㄢ', 20, '', '', '', '111年12月06日', 1, '2022-12-06 16:33:48', '花花', '0000-00-00 00:00:00', ''),
(39, 8, 111, 'ㄓㄜㄒㄧㄢ', 1, '', '', '', '', 0, '2022-12-06 16:34:06', '花花', '0000-00-00 00:00:00', ''),
(40, 9, 111, '劉品均', 0, '', '', '', '111年12月09日', 1, '2022-12-09 14:16:02', '花花', '0000-00-00 00:00:00', ''),
(41, 10, 111, '劉品均', 45, '', '', '', '111年12月09日', 1, '2022-12-09 14:16:53', '花花', '0000-00-00 00:00:00', ''),
(42, 10, 111, '劉品均', 48, '', '', '88', '', 0, '2022-12-09 14:17:08', '花花', '0000-00-00 00:00:00', ''),
(43, 11, 111, '劉品均', 99, '', '', '', '111年12月09日', 1, '2022-12-09 14:17:39', '花花', '0000-00-00 00:00:00', ''),
(44, 12, 111, '劉品均', 22, '', '', '', '111年12月23日', 1, '2022-12-23 10:04:29', '花花', '0000-00-00 00:00:00', ''),
(45, 13, 111, '劉品均', 55, '', '', '', '111年12月23日', 1, '2022-12-23 10:06:59', '花花', '0000-00-00 00:00:00', ''),
(46, 1, 112, 'TEST111_Vuser54', 2, '2023-03-30', '14:30-16:30', '', '', 0, '2023-03-30 14:15:38', 'jia', '0000-00-00 00:00:00', ''),
(47, 1, 112, 'TEST111_Vuser54', 12, '2023-05-24', '', '', '', 0, '2023-05-24 15:28:43', '社工員1', '0000-00-00 00:00:00', ''),
(48, 1, 111, 'TEST111_Vuser54', 1, '2023-06-21', '16:30-17:30', 'test621', '', 0, '2023-06-26 17:29:19', '執行長', '0000-00-00 00:00:00', ''),
(49, 1, 111, 'TEST111_Vuser54', -1, '2023-06-26', '', '目前服務時數由17.5更改為16.5(-1.0)。資料異動者：執行長，異動時間：2023-06-26 12:06:43。', '', 0, '2023-06-26 18:06:43', '執行長', '0000-00-00 00:00:00', ''),
(50, 1, 111, 'TEST111_Vuser54', 1, '2023-06-26', '', '目前服務時數由16.5更改為17.5(1.0)。資料異動者：執行長，異動時間：2023-06-26 12:09:59。', '', 0, '2023-06-26 18:09:59', '執行長', '0000-00-00 00:00:00', ''),
(51, 1, 111, 'TEST111_Vuser54', -1, '2023-06-26', '', '目前服務時數由17.5更改為16.5(-1.0)。資料異動者：執行長，異動時間：2023-06-26 12:12:23。', '', 0, '2023-06-26 18:12:23', '執行長', '0000-00-00 00:00:00', ''),
(52, 1, 111, 'TEST111_Vuser54', 2, '2023-06-26', '', '目前服務時數由16.5更改為18.5(2.0)。資料異動者：執行長，異動時間：2023-06-26 12:13:18。', '', 0, '2023-06-26 18:13:18', '執行長', '0000-00-00 00:00:00', ''),
(53, 1, 111, 'TEST111_Vuser54', 0.5, '2023-06-21', '14:30-15:00', 'test621_0.5', '', 0, '2023-06-26 18:22:33', '執行長', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- 資料表結構 `volunteer_meeting`
--

CREATE TABLE `volunteer_meeting` (
  `Id` int(244) NOT NULL,
  `Title_name` varchar(500) NOT NULL,
  `Meeting_date` varchar(100) NOT NULL,
  `Meeting_time_start` varchar(30) NOT NULL,
  `Meeting_time_end` varchar(30) NOT NULL,
  `Meeting_place` varchar(500) NOT NULL,
  `Expected_attendees` varchar(2000) NOT NULL,
  `Attendees_seq_contents` varchar(2000) NOT NULL,
  `Actual_attendence` varchar(100) NOT NULL,
  `Absence` varchar(100) NOT NULL,
  `Agenda_contents` longtext NOT NULL,
  `Proposal_contents` longtext NOT NULL,
  `Resolution_contents` longtext NOT NULL,
  `Review_suggest` varchar(2000) NOT NULL,
  `Extempore_motion` varchar(2000) NOT NULL,
  `Next_meeting_date` varchar(100) NOT NULL,
  `Signin_file_path` longtext NOT NULL,
  `Signout_file_path` longtext NOT NULL,
  `Meeting_file_path` longtext NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(30) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `volunteer_meeting`
--

INSERT INTO `volunteer_meeting` (`Id`, `Title_name`, `Meeting_date`, `Meeting_time_start`, `Meeting_time_end`, `Meeting_place`, `Expected_attendees`, `Attendees_seq_contents`, `Actual_attendence`, `Absence`, `Agenda_contents`, `Proposal_contents`, `Resolution_contents`, `Review_suggest`, `Extempore_motion`, `Next_meeting_date`, `Signin_file_path`, `Signout_file_path`, `Meeting_file_path`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, '111年第1次志工會議a', '111年11月01日', '09:15', '00:00', 'test會議地點aaasda', 'teest\r\n應出席人員1\r\n\r\n應出席人員2\r\n應出席人員3', '', '27', '3', 'ttt\r\n會議議程1\r\n會議議程2\r\n\r\n會議議程3\r\n會議議程aa', '\"[{\"input_id\":\"resolution_contents_1\",\"val\":\"提案一、aaaaaaaaa\"},{\"input_id\":\"resolution_contents_2\",\"val\":\"提案二、\\nbbb\"},{\"input_id\":\"resolution_contents_3\",\"val\":\"提案三、\\nc\\nd\\ne\"},{\"input_id\":\"resolution_contents_4\",\"val\":\"提案四、test\\nasdasds\\nasda\\na\"},{\"input_id\":\"resolution_contents_5\",\"val\":\"提案五、aaaa\"},{\"input_id\":\"resolution_contents_6\",\"val\":\"提案六、b\"},{\"input_id\":\"resolution_contents_7\",\"val\":\"提案七、\"}]\"', '\"[{\"input_id\":\"proposal_contents_1\",\"val\":\"決議：aaaaaaaaa\"},{\"input_id\":\"proposal_contents_2\",\"val\":\"決議：\\nbbb\"},{\"input_id\":\"proposal_contents_3\",\"val\":\"決議：\\nc\\nd\\ne\"},{\"input_id\":\"proposal_contents_4\",\"val\":\"決議：test\\nasdasds\\nasda\\na\"},{\"input_id\":\"proposal_contents_5\",\"val\":\"決議：aaaa\"},{\"input_id\":\"proposal_contents_6\",\"val\":\"決議：b\"},{\"input_id\":\"proposal_contents_7\",\"val\":\"決議：\"}]\"\n', 'ttt\r\n檢討及建議：\r\n1daasa\r\n2wdwdawd\r\nddadsa\r\n1111111', '臨時動議：\r\n1wewdjdia\r\ndjasida\r\nddddd\r\n11111', '111年11月10日', '../volunteer_meeting/志工簽到表test1101.png', '../volunteer_meeting/志工閱後簽退test1101.png', '', '2022-11-11 13:13:50', '社工員1', '2022-11-11 15:34:09', '社工員1'),
(2, '112年第15次志工會議', '112年06月01日', '08:00', '11:00', 'test會議地點11215', 'testuser1\r\ntestuser2\r\ntestuser3\r\ntestuser4\r\ntestuser5', '', '12', '1', 'test\r\n會議議程\r\n11215', '\"[{\"input_id\":\"proposal_contents_1\",\"val\":\"提案一、aaaaaaaaa\"},{\"input_id\":\"proposal_contents_2\",\"val\":\"提案二、\\nbbb\"},{\"input_id\":\"proposal_contents_3\",\"val\":\"提案三、\\nc\\nd\\ne\"},{\"input_id\":\"proposal_contents_4\",\"val\":\"提案四、test\\nasdasds\\nasda\\na\"},{\"input_id\":\"proposal_contents_5\",\"val\":\"提案五、5dqwqw\"},{\"input_id\":\"proposal_contents_6\",\"val\":\"提案六、6adwawd\"}]\"', '\"[{\"input_id\":\"resolution_contents_1\",\"val\":\"決議：test決議1\"},{\"input_id\":\"resolution_contents_2\",\"val\":\"決議：test決議2\"},{\"input_id\":\"resolution_contents_3\",\"val\":\"決議：test3\"},{\"input_id\":\"resolution_contents_4\",\"val\":\"決議：\"},{\"input_id\":\"resolution_contents_5\",\"val\":\"決議：asdasdsttt5555\"},{\"input_id\":\"resolution_contents_6\",\"val\":\"決議：dfqwwadasd6666\"}]\"', 'test\r\n檢討及建議\r\n11215', 'test\r\n臨時動議\r\n11215', '112年06月30日', '../volunteer_meeting/志工簽到表test11215.png', '../volunteer_meeting/志工閱後簽退test11215.png', '[\"../volunteer_meeting/p4.jpg\",\"../volunteer_meeting/p3.jpg\",\"../volunteer_meeting/p2.jpg\",\"../volunteer_meeting/p1.jpg\",\"../volunteer_meeting/p6.jpg\",\"../volunteer_meeting/p5.jpg\"]', '2023-06-26 19:55:08', '社工員2', '2023-08-08 20:48:00', 'jia');

-- --------------------------------------------------------

--
-- 資料表結構 `volunteer_v2`
--

CREATE TABLE `volunteer_v2` (
  `Id` int(244) NOT NULL,
  `Year` int(244) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Birth` varchar(500) NOT NULL,
  `Gender` varchar(50) NOT NULL,
  `Home_phone` varchar(300) NOT NULL,
  `Cellphone` varchar(300) NOT NULL,
  `E_mail` varchar(500) NOT NULL,
  `Training_detail` varchar(300) NOT NULL,
  `Brochure_num` varchar(300) NOT NULL,
  `V_files` longtext NOT NULL,
  `Serv_time_1` varchar(500) NOT NULL,
  `Serv_time_2` varchar(1000) NOT NULL,
  `Serv_award` varchar(100) NOT NULL,
  `Remark` text NOT NULL,
  `Expertise` varchar(300) NOT NULL,
  `Vgroup` varchar(300) NOT NULL,
  `Serv_status` varchar(300) NOT NULL,
  `Time_all` float NOT NULL,
  `Social_worker` varchar(300) NOT NULL,
  `Social_worker_signature` longtext NOT NULL,
  `Social_worker_sign_msg` longtext NOT NULL,
  `Social_worker_sign_time` varchar(300) NOT NULL,
  `Supervise` varchar(300) NOT NULL,
  `Supervise_signature` longtext NOT NULL,
  `Supervise_sign_msg` longtext NOT NULL,
  `Supervise_sign_time` varchar(300) NOT NULL,
  `Director` varchar(300) NOT NULL,
  `Director_signature` longtext NOT NULL,
  `Director_sign_msg` longtext NOT NULL,
  `Director_sign_time` varchar(300) NOT NULL,
  `Create_date` datetime NOT NULL,
  `Create_name` varchar(100) NOT NULL,
  `Update_date` datetime DEFAULT current_timestamp(),
  `Update_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `volunteer_v2`
--

INSERT INTO `volunteer_v2` (`Id`, `Year`, `Name`, `Birth`, `Gender`, `Home_phone`, `Cellphone`, `E_mail`, `Training_detail`, `Brochure_num`, `V_files`, `Serv_time_1`, `Serv_time_2`, `Serv_award`, `Remark`, `Expertise`, `Vgroup`, `Serv_status`, `Time_all`, `Social_worker`, `Social_worker_signature`, `Social_worker_sign_msg`, `Social_worker_sign_time`, `Supervise`, `Supervise_signature`, `Supervise_sign_msg`, `Supervise_sign_time`, `Director`, `Director_signature`, `Director_sign_msg`, `Director_sign_time`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(1, 111, 'TEST111_Vuser54', '54.11.22', '男', '05-7733-7675', '096325632', 'ea123@HMNN.COM', '二者皆沒有', 'F123445', '[\"../volunteer/volunteer_user1_TEST111_Vuser54/TESTVDATA1.odt\",\"../volunteer/volunteer_user1_TEST111_Vuser54/TESTVDATA2.odt\",\"../volunteer/volunteer_user1_TEST111_Vuser54/TESTVDATA3.odt\"]', '星期日', '11:00至16:30', '是', 'TESTVuser54REMARK', '活動', '行政服務志工組', '持續', 19, '社工員1', '', '', '', '執行長', '../signature/1687771163.png', 'test626', '2023-06-26 17:19:23', '園主任', '', '', '', '2023-06-21 19:17:57', '執行長', '2023-09-23 10:59:42', '社工員1');

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
-- 資料表索引 `accounting_record_cash_v2`
--
ALTER TABLE `accounting_record_cash_v2`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `accounting_record_report`
--
ALTER TABLE `accounting_record_report`
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
-- 資料表索引 `board_supervisor_v2`
--
ALTER TABLE `board_supervisor_v2`
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
-- 資料表索引 `day_off_v2`
--
ALTER TABLE `day_off_v2`
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
-- 資料表索引 `leave_rule_table`
--
ALTER TABLE `leave_rule_table`
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
-- 資料表索引 `members_assemble_v2`
--
ALTER TABLE `members_assemble_v2`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `overtime`
--
ALTER TABLE `overtime`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `peers_dlgrec`
--
ALTER TABLE `peers_dlgrec`
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
-- 資料表索引 `program_plan_form`
--
ALTER TABLE `program_plan_form`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `program_result`
--
ALTER TABLE `program_result`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `program_result_form`
--
ALTER TABLE `program_result_form`
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
-- 資料表索引 `received_forms`
--
ALTER TABLE `received_forms`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `record_warn`
--
ALTER TABLE `record_warn`
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
-- 資料表索引 `resume_seniority`
--
ALTER TABLE `resume_seniority`
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
-- 資料表索引 `supervisor_record_v2`
--
ALTER TABLE `supervisor_record_v2`
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
-- 資料表索引 `user_info_default_auth`
--
ALTER TABLE `user_info_default_auth`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `vehicle_retain`
--
ALTER TABLE `vehicle_retain`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `visit_index`
--
ALTER TABLE `visit_index`
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
-- 資料表索引 `volunteer_meeting`
--
ALTER TABLE `volunteer_meeting`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `volunteer_v2`
--
ALTER TABLE `volunteer_v2`
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
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_cash_balance`
--
ALTER TABLE `accounting_record_cash_balance`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_cash_v2`
--
ALTER TABLE `accounting_record_cash_v2`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `accounting_record_report`
--
ALTER TABLE `accounting_record_report`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `announcement`
--
ALTER TABLE `announcement`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `board_supervisor`
--
ALTER TABLE `board_supervisor`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `board_supervisor_v2`
--
ALTER TABLE `board_supervisor_v2`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `case_report`
--
ALTER TABLE `case_report`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `closed`
--
ALTER TABLE `closed`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `consult`
--
ALTER TABLE `consult`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel`
--
ALTER TABLE `counsel`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `counsel_visit`
--
ALTER TABLE `counsel_visit`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `current_case`
--
ALTER TABLE `current_case`
  MODIFY `Id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `day_off_v2`
--
ALTER TABLE `day_off_v2`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `dlgrec`
--
ALTER TABLE `dlgrec`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forms`
--
ALTER TABLE `forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_all_info`
--
ALTER TABLE `form_all_info`
  MODIFY `Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_case_report`
--
ALTER TABLE `form_case_report`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `form_interlocution_queskeywords`
--
ALTER TABLE `form_interlocution_queskeywords`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `leave_rule_table`
--
ALTER TABLE `leave_rule_table`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `login_record`
--
ALTER TABLE `login_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members_assemble`
--
ALTER TABLE `members_assemble`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `members_assemble_v2`
--
ALTER TABLE `members_assemble_v2`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `overtime`
--
ALTER TABLE `overtime`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `peers_dlgrec`
--
ALTER TABLE `peers_dlgrec`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_case`
--
ALTER TABLE `placement_case`
  MODIFY `Id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_forms`
--
ALTER TABLE `placement_forms`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `placement_form_all_info`
--
ALTER TABLE `placement_form_all_info`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_act`
--
ALTER TABLE `program_act`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_plan`
--
ALTER TABLE `program_plan`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_plan_form`
--
ALTER TABLE `program_plan_form`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_result`
--
ALTER TABLE `program_result`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `program_result_form`
--
ALTER TABLE `program_result_form`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `published`
--
ALTER TABLE `published`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `received`
--
ALTER TABLE `received`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `received_forms`
--
ALTER TABLE `received_forms`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `record_warn`
--
ALTER TABLE `record_warn`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume`
--
ALTER TABLE `resume`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume_forms`
--
ALTER TABLE `resume_forms`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `resume_seniority`
--
ALTER TABLE `resume_seniority`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening`
--
ALTER TABLE `screening`
  MODIFY `Id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening_result_keywords`
--
ALTER TABLE `screening_result_keywords`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `screening_type_keywords`
--
ALTER TABLE `screening_type_keywords`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `signature_notice`
--
ALTER TABLE `signature_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `sign_notice`
--
ALTER TABLE `sign_notice`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supervisor_record`
--
ALTER TABLE `supervisor_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supervisor_record_v2`
--
ALTER TABLE `supervisor_record_v2`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `training`
--
ALTER TABLE `training`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tw_counties`
--
ALTER TABLE `tw_counties`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_info`
--
ALTER TABLE `user_info`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_info_default_auth`
--
ALTER TABLE `user_info_default_auth`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `vehicle_retain`
--
ALTER TABLE `vehicle_retain`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `visit_index`
--
ALTER TABLE `visit_index`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer`
--
ALTER TABLE `volunteer`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_hours_record`
--
ALTER TABLE `volunteer_hours_record`
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_meeting`
--
ALTER TABLE `volunteer_meeting`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_v2`
--
ALTER TABLE `volunteer_v2`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
