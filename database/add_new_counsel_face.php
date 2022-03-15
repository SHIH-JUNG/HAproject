<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Counsel_id = $_POST['Counsel_id'];
$Name = $_POST['Name'];
@$Pid = $_POST['Pid'];
@$Referral = $_POST['Referral'];

@$Location = $_POST['Location'];
@$Location_detail = $_POST['Location_detail'];

@$Start_date = $_POST['Start_date'];
@$End_date = $_POST['End_date'];
@$Start_time = $_POST['Start_time'];
@$End_time = $_POST['End_time'];

@$One_user = $_POST['One_user'];
@$Two_user = $_POST['Two_user'];

$user = $_SESSION['name'];
@$Remark = $_POST['Remark'];


$sql = "INSERT INTO `counsel_visit` (`Referral`,`Counsel_id`,`Name`,`Pid`,`Location`,`Location_detail`,`Start_date`,`End_date`,`Start_time`,`End_time`,`One_user_name`,`Two_user_name`,`Remark`,`Create_date`,`Create_name`) VALUES
 ('$Referral','$Counsel_id','$Name','$Pid',
 '$Location','$Location_detail',
 '$Start_date','$End_date',
 '$Start_time','$End_time',
 '$One_user','$Two_user',
 '$Remark',Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
