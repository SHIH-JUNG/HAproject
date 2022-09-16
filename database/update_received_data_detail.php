<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];
$Re_id = $_POST['re_id'];
$Year = $_POST['year'];
$Title_name = $_POST['title_name'];
$Received_date = $_POST['received_date'];
$Subject = $_POST['subject'];
$Unit = $_POST['unit'];
$Num_receive = $_POST['num_receive'];
$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
$Update_date = $_POST['update_date'];
$Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `received` SET `received_date` = '$Received_date', `title_name` = '$Title_name', 
`subject` = '$Subject',`unit` = '$Unit',`num_receive` = '$Num_receive', 
 `create_date` = '$Create_date', `create_name` = '$Create_name', `update_name` = '$Update_name', `update_date` = NOW() WHERE `Id` = '$Re_id' ORDER BY `received`.`Received_date` ASC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
