<?php
session_start();
include("sql_connect.php");
$program_id = $_POST['program_id'];

$user = $_SESSION['name'];

$Year = $_POST['Year'];
$Date = $_POST['Date'];
$Plan_name = $_POST['Plan_name'];
$Is_update_hours_sql = "";




$sqlUpdate = "UPDATE `program_plan` SET `Year` = '$Year', `Date` = '$Date', `Plan_name` = '$Plan_name',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$program_id' ORDER BY `program_plan`.`Create_date` ASC LIMIT 1;";
$sqlUpdate .= $Is_update_hours_sql;


if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
