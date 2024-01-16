-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-01-16 17:35:50
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `ha`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(16, '入住規範入住規範'),
(17, '如何就醫');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `Upload_name` varchar(500) NOT NULL,
  `Upload_path` varchar(2000) NOT NULL,
  `Create_date` date NOT NULL,
  `Create_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Update_date` date NOT NULL,
  `Update_name` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Executive` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Executive_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Executive_sign_msg` varchar(2000) CHARACTER SET utf8mb4 NOT NULL,
  `Executive_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_sign_msg` varchar(2000) CHARACTER SET utf8mb4 NOT NULL,
  `Supervise_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL,
  `Leader` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Leader_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Leader_sign_msg` varchar(2000) CHARACTER SET utf8mb4 NOT NULL,
  `Leader_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL,
  `Director` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Director_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Director_sign_msg` varchar(2000) CHARACTER SET utf8mb4 NOT NULL,
  `Director_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL,
  `Distribution` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `Distribution_signature` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Distribution_sign_msg` varchar(500) CHARACTER SET utf8mb4 NOT NULL,
  `Distribution_sign_time` varchar(54) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(9, 'test ppp'),
(10, 'hiv+positive');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `signature_notice`
--

INSERT INTO `signature_notice` (`Id`, `Sign_id`, `Title`, `Url`, `Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(105, '1', '發文簽核：主旨aa', 'published_detail.php?pu_id=1&year=113', '2024-01-17 00:00', '資訊管理員', '資訊管理員、資訊管理員', '資訊管理員未簽核、資訊管理員未簽核', 'published', '2024-01-17 00:12:03', '資訊管理員', '2024-01-17 00:12:03', ''),
(106, '1', '收文簽核：主旨111,來文單位qweq', 'received_detail.php?re_id=1&year=113', '2024-01-10 00:00', '資訊管理員', '資訊管理員、、、、', '資訊管理員未簽核、未簽核、未簽核、未簽核、未簽核', 'received', '2024-01-17 00:13:32', '資訊管理員', '2024-01-17 00:13:32', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `user_info`
--

INSERT INTO `user_info` (`Id`, `Resume_id`, `Account`, `Password`, `Name`, `Authority`, `Date`, `Job`, `Authority_pages`, `Email`, `Allow_create_acc`, `Allow_register_name`, `Create_date`, `Create_name`, `Update_date`, `Update_name`) VALUES
(33, NULL, 'adminRoot', 'UserInfoAdminRoot', '資訊管理員', 1, '2024-01-17 00:06:21', '資訊管理員', '[\"page_a\",\"page_b\",\"page_c\",\"page_c_b\",\"page_d\",\"page_d_b\",\"page_e\",\"page_e_a\",\"page_f\",\"page_f_a\",\"page_g\",\"page_h1\",\"page_h2\",\"page_i1\",\"page_i2\",\"page_i3\",\"page_j1\",\"page_j2\",\"page_k\",\"page_l\",\"page_m\",\"page_n1\",\"page_n2\",\"page_o\",\"page_p1\",\"page_p2\",\"page_q\",\"page_r1\",\"page_r2\",\"page_Auth\"]', '', '已通過', '', '2024-01-17 00:06:21', '', '2024-01-17 00:06:21', '');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  MODIFY `id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

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
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

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
  MODIFY `Id` int(240) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_meeting`
--
ALTER TABLE `volunteer_meeting`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `volunteer_v2`
--
ALTER TABLE `volunteer_v2`
  MODIFY `Id` int(244) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
