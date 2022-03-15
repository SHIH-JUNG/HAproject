<?php
session_start();
include("sql_connect.php");

@$Id = $_POST['Id'];
@$Way_detail = $_POST['Way_detail'];
@$One_user= $_POST['One_user'];
@$Two_user= $_POST['Two_user'];
@$Location= $_POST['Location'];
@$Location_detail= $_POST['Location_detail'];
@$Remark= $_POST['Remark'];
@$M_addiction= $_POST['Addition'];
@$Add_date= $_POST['Add_date'];
@$End_date= $_POST['End_date'];
@$Start_time= $_POST['Start_time'];
@$End_time= $_POST['End_time'];

$user = $_SESSION['name'];

$sqlUpdate ="UPDATE `consult` SET `Way_detail`='$Way_detail', `One_user_name` = '$One_user', `Two_user_name` = '$Two_user', `Location` = '$Location', `Remark` = '$Remark', `M_addiction` = '$M_addiction', `Start_date` = '$Add_date' , `End_date` = '$End_date', `Start_time` = '$Start_time' , `End_time` = '$End_time' , `Location_detail` = '$Location_detail',`Update_name` = '$user', `Update_date` = NOW() WHERE `consult`.`Id` = $Id";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>