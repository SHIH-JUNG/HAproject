<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Id = $_POST['id'];
$Year = $_POST['year'];
$Name = $_POST['name'];
$Serv_type = $_POST['serv_type'];
$Serv_time = $_POST['serv_time'];
$Time_all = $_POST['time_all'];
$Rece_hours = $_POST['rece_hours'];
$Serv_award = $_POST['serv_award'];
$Honor_card = $_POST['honor_card'];


$sql = "INSERT INTO `volunteer` (`id`,`year`,`name`,`serv_type`,`serv_time`,`time_all`,
`rece_hours`,`serv_award`,`honor_card`) VALUES
 ('$Id','$Year','$Name','$Serv_type','$Serv_time','$Time_all','$Rece_hours','$Serv_award','$Honor_card');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
