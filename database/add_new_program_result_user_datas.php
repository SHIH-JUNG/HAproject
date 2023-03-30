<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Year = $_POST['Year'];
$Date = $_POST['Date'];
$Plan_name = $_POST['Plan_name'];


$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `program_result` ORDER BY `program_result`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $program_id = (int)$id_num[0] + 1;
}
else
{
    $program_id = 1;
}

$sql = "INSERT INTO `program_result` (`Id`,`Year`,`Date`,`Plan_name`,`Create_date`,`Create_name`) VALUES
 ('$program_id', '$Year','$Date','$Plan_name', Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
