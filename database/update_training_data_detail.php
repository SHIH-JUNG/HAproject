<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];

$Name = $_POST['name'];
$Training_date = $_POST['training_date'];
$On_or_off = $_POST['on_or_off'];
$Training_name = $_POST['training_name'];
$Place = $_POST['place'];
$Remark = $_POST['remark'];
$Num_receive = $_POST['num_receive'];
$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
// $Update_date = $_POST['update_date'];
// $Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `training` SET `training_date` = '$Training_date', `on_or_off` = '$On_or_off',`training_name` = '$Training_name', `place` = '$Place',
 `remark` = '$Remark', `create_date` = '$Create_date', `create_name` = '$Create_name', `update_name` = '$user', `update_date` = NOW();";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
