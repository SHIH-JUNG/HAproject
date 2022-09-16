<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_POST['Year'];
$Title_Name = $_POST['Title_name'];
$Received_date = $_POST['Received_date'];
$Subject = $_POST['Subject'];
$Unit = $_POST['Unit'];
$Num_receive = $_POST['Num_receive'];


$user = $_SESSION['name'];


$sql = "INSERT INTO `received` (`Year`,`Title_name`,`Received_date`,`Subject`,`Unit`,
`Num_receive`,`Create_date`,`Create_name`) VALUES
 ('$Year','$Title_Name','$Received_date','$Subject','$Unit','$Num_receive',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
