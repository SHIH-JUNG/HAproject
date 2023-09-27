<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Counsel_id = $_POST['Counsel_id'];
// $Name = $_POST['Name'];
// @$Pid = $_POST['Pid'];
// @$Referral = $_POST['Referral'];

@$Location = $_POST['Location'];
@$Location_detail = $_POST['Location_detail'];

@$Start_date = $_POST['Start_date'];
@$End_date = $_POST['End_date'];
@$Start_time = $_POST['Start_time'];
@$End_time = $_POST['End_time'];

@$One_user_name = $_POST['One_user_name'];
@$Two_user_name = $_POST['Two_user_name'];

$user = $_SESSION['name'];
@$Remark = $_POST['Remark'];


$select_consult_datas = 
"SELECT `Counsel_id`, `Name`, `Pid`, `Refferal` FROM `counsel` WHERE `Counsel_id` = '$Counsel_id' ORDER BY `counsel`.`Create_date` ASC LIMIT 1;";

$find_consult_datas = mysqli_query($conn, $select_consult_datas);
$row_nums = mysqli_num_rows($find_consult_datas);
$consult_datas = mysqli_fetch_row($find_consult_datas);

$sql = "INSERT INTO `counsel_visit` (`Referral`,`Counsel_id`,`Name`,`Pid`,`Location`,`Location_detail`,`Start_date`,`End_date`,`Start_time`,`End_time`,`One_user_name`,`Two_user_name`,`Remark`,`Create_date`,`Create_name`) VALUES
('$consult_datas[3]','$Counsel_id','$consult_datas[1]','$consult_datas[2]',
'$Location','$Location_detail',
'$Start_date','$End_date',
'$Start_time','$End_time',
'$One_user_name','$Two_user_name',
'$Remark',Now(),'$user')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
