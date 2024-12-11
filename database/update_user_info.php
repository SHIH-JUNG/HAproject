<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Id = $_POST['id'];
$modify_password = $_POST['modify_password'];
$modify_auth_num = $_POST['modify_auth_num'];
$job = $_POST['job'];


$user = $_SESSION['name'];

$sql = "UPDATE `user_info` SET `Password` = '$modify_password', `Authority` = '$modify_auth_num', `Job` = '$job', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id` = '$Id';";

if($modify_password=='*****' || $modify_password==''){
    $sql = "UPDATE `user_info` SET `Authority` = '$modify_auth_num', `Job` = '$job', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id` = '$Id';";
}

if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>
