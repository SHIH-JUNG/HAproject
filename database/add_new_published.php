<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_POST['Year'];
$Title_Name = $_POST['Title_name'];
$Published_date = $_POST['Published_date'];
$Subject = $_POST['Subject'];
$Unit = $_POST['Unit'];
$Num_publish = $_POST['Num_publish'];


$user = $_SESSION['name'];


$sql = "INSERT INTO `published` (`Year`,`Title_name`,`Published_date`,`Subject`,`Unit`,
`Num_publish`,`Create_date`,`Create_name`) VALUES
 ('$Year','$Title_Name','$Published_date','$Subject','$Unit','$Num_publish',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
