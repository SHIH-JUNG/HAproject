<?php
session_start();
include("sql_connect.php");

$User_info_id = $_POST['User_info_id']; 
$Allow_status = $_POST['Allow_status'];

$user = $_SESSION['name'];



// 修改審核狀態
$sqlUpdate ="UPDATE `user_info` SET `Allow_create_acc` = '$Allow_status', 
`Update_name` = '$user', `Allow_register_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$User_info_id';";

if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);

?>