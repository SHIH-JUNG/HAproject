<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$account = $_POST['account'];
$password = $_POST['password'];
$name = $_POST['name'];
$email = $_POST['email'];
@$authority = $_POST['authority'];
@$job = $_POST['job'];

// $user = $_SESSION['name'];


$sql = "INSERT INTO `user_info` (`Account`, `Password`, `Name`, `Authority`, `Date`, `Job`, `Email`, `Allow_create_acc`, `Create_date`, `Create_name`) VALUES
 ('$account', '$password', '$name',
 '$authority', NOW(), '$job',
 '$email',
 '審核中',
 Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
