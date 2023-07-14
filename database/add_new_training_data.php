<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
// $Name = $_POST['Name'];
$Training_id = $_POST['Training_id'];
$Start_date = $_POST['Start_date'];
$Start_time_h = $_POST['Start_time_h'];
$Start_time_m = $_POST['Start_time_m'];
$End_time_h = $_POST['End_time_h'];
$End_time_m = $_POST['End_time_m'];
$Content_detail = $_POST['Content_detail'];
$Location_detail = $_POST['Location_detail'];
$New_remark = $_POST['New_remark'];



$user = $_SESSION['name'];


$sql = "INSERT INTO `training` (`Start_date`,`Training_id`,`Start_time_h`,`Start_time_m`,`End_time_h`,
                                `End_time_m`,`Content_detail`,`Location_detail`,`New_remark`) VALUES
 ('$Training_id','$Start_date','$Start_time_h','$Start_time_m','$End_time_h',
 '$End_time_m','$Content_detail','$Location_detail','$New_remark');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
