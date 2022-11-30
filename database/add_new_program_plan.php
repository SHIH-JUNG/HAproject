<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_POST['Year'];
$Date = $_POST['Date'];
$Plan_name = $_POST['Plan_name'];


$user = $_SESSION['name'];


$sql = "INSERT INTO `program_plan` (`Year`,`Date`,`Plan_name`,`Create_date`,`Create_name`) VALUES
 ('$Year','$Date','$Plan_name', Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
