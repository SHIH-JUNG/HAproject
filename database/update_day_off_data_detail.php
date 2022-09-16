<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];
$Day_id = $_POST['day_id'];
$Name = $_POST['name'];
$Reason = $_POST['reason'];
$Overtime_date = $_POST['overtime_date'];
$Hours = $_POST['hours'];
$Makeup_date = $_POST['makeup_date'];
$Makeup_hours = $_POST['makeup_hours'];
// $Supervise = $_POST['supervise'];

$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
$Update_date = $_POST['update_date'];
$Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `day_off` SET `overtime_date` = '$Overtime_date', `name` = '$Name', `reason` = '$Reason',
 `hours` = '$Hours',`makeup_date` = '$Makeup_date', `makeup_hours` = '$Makeup_hours',
 `create_date` = '$Create_date', `create_name` = '$Create_name', `update_name` = '$Update_name', 
 `update_date` = NOW() WHERE `Id` = '$Day_id' ORDER BY `day_off`.`Overtime_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
