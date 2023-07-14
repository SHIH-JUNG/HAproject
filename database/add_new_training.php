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

$select_id_num = "SELECT MAX(Training_id) FROM `training` ORDER BY `training`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $training_id = (int)$id_num[0] + 1;
}
else
{
    $training_id = 0;
}


$sql = "INSERT INTO `training` (`Training_id`, `Name`,`Training_date`,`Training_name`,`Hours`,`Place`,`Remark`, `First_insert`, `Create_date`,`Create_name`) VALUES
 ('$training_id', '$Name','$Training_date','$Training_name','$Hours','$Place','$Remark','1',Now(),'$user');";
if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
