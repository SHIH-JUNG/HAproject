<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Name = $_POST['Name'];
$Training_date = $_POST['Training_date'];
$Training_name = $_POST['Training_name'];
$Hours = $_POST['Hours'];
$Place = $_POST['Place'];
$Remark = $_POST['Remark'];



$user = $_SESSION['name'];


$sql = "INSERT INTO `training` (`Name`,`Training_date`,`Training_name`,`Hours`,`Place`,`Remark`,`Create_date`,`Create_name`) VALUES
 ('$Name','$Training_date','$Training_name','$Hours','$Place','$Remark',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
