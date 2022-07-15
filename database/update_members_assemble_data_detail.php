<?php
session_start();
include("sql_connect.php");

$ma_id = $_POST['ma_id'];
$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$year = $_POST['year'];

$user = $_SESSION['name'];


$sqlUpdate ="UPDATE `members_assemble` SET `Year` = '$year', `record_content` = '$record_content', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$ma_id' ORDER BY `members_assemble`.`Create_date` ASC LIMIT 1;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);
