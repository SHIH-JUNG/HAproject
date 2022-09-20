<?php
session_start();
include("sql_connect.php");
$overtime_id = $_POST['overtime_id'];

$user = $_SESSION['name'];

$Year = $_POST['Year'];
$Name = $_POST['Name'];

$Overtime_date = $_POST['Overtime_date'];
$Free_date = $_POST['Free_date'];
$Overtime_time = $_POST['Overtime_time'];
$Free_time = $_POST['Free_time'];


$Is_update_hours_sql = "";

$diff = 0;



$select_time_hours = "SELECT `Time_all` FROM `overtime` WHERE `Id` = '$overtime_id' ORDER BY `overtime`.`Create_date` ASC LIMIT 1;";

$find_time_hours = mysqli_query($conn, $select_time_hours);
$time_hours = mysqli_fetch_row($find_time_hours);


if ($Time_all != $time_hours[0]) {
    $Time_all = $Time_all;

    $diff = (int)$Time_all - (int)$time_hours[0];

    $diff_remark_str = "目前服務時數由" . $time_hours[0] . "更改為" . $Time_all . "(" . $diff . ")。資料異動者：" . $user . "，異動時間：" . date("Y-m-d H:i:s") . "。";

    $Is_update_hours_sql = "INSERT INTO `overtime_hours_record` (`overtime_id`, `Year` ,`Name` ,`Add_hours`, `Remark`, `Is_firstadd` ,`Create_date` ,`Create_name`) VALUES
    ($overtime_id, '$Year', '$Name', '$diff', '$diff_remark_str', 0, Now(), '$user');";
} else {
    $Time_all = $time_hours[0];
    $Is_update_hours_sql = "";
}


$sqlUpdate = "UPDATE `overtime` SET `Year` = '$Year', `Name` = '$Name', `Overtime_date` = '$Overtime_date',
 `Free_date` = '$Free_date', `Overtime_time` = '$Overtime_time', `Free_time` = '$Free_time',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$overtime_id' ORDER BY `overtime`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
