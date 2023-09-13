<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$year = $_POST['year'];

$title = $_POST['title'];
$rec_type = $_POST['rec_type'];
$user = $_SESSION['name'];

$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

$select_id_num = "SELECT MAX(Id) FROM `board_supervisor` ORDER BY `board_supervisor`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $bs_id = (int)$id_num[0] + 1;
}
else
{
    $bs_id = 0;
}

$url = 'board_supervisor_detail.php?year='.$year.'&id='.$bs_id.'&bs_id='.$bs_id.'&rec_type='.$rec_type .'';

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

$sql = "INSERT INTO `board_supervisor` (`Id`, `Year`, `record_content`,`Create_date`,`Create_name`, `Supervise`) VALUES
 ($bs_id, '$year', '$record_content', Now(), '$user', '$signer');";

// $sql .= "INSERT INTO `calendar` (`title`,`description`,`start`, `end`, `publisher`) VALUES ('$title','$url','$start_datetime', '$end_datetime', '$user')";
$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$bs_id', '$title','$url','$rec_date_time', '$user', '$signer', '未簽核', 'board_supervisor', Now(), '$user')";

	if(mysqli_multi_query($conn,$sql)){
        echo true;
    }else{
        echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    }

mysqli_close($conn);
