<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Name = $_POST['Name'];
$Overtime_date = $_POST['Overtime_date'];
$Reason = $_POST['Reason'];
$Hours = $_POST['Hours'];
$Makeup_date = $_POST['Makeup_date'];
$Makeup_hours = $_POST['Makeup_hours'];


$user = $_SESSION['name'];


$sql = "INSERT INTO `day_off` (`Name`,`Overtime_date`,`Reason`,`Hours`,`Makeup_date`,
`Makeup_hours`,`Create_date`,`Create_name`) VALUES
 ('$Name','$Overtime_date','$Reason','$Hours','$Makeup_date','$Makeup_hours',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
