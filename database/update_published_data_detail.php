<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];
$Pu_id = $_POST['pu_id'];
$Year = $_POST['year'];
$Title_name = $_POST['title_name'];
$Published_date = $_POST['published_date'];
$Subject = $_POST['subject'];
$Unit = $_POST['unit'];
$Num_publish = $_POST['num_publish'];
$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
$Update_date = $_POST['update_date'];
$Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `published` SET `published_date` = '$Published_date', `title_name` = '$Title_name', `subject` = '$Subject',
 `unit` = '$Unit',`num_publish` = '$Num_publish',
 `create_date` = '$Create_date', `create_name` = '$Create_name', `update_name` = '$Update_name', `update_date` = NOW() WHERE `Id` = '$Pu_id' ORDER BY `published`.`Published_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
