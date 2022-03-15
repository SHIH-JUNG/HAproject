<?php
session_start();
include("sql_connect.php");

@$Id = $_POST['Id'];
@$Counsel_id = $_POST['Counsel_id'];
@$One_user= $_POST['One_user'];
@$Two_user= $_POST['Two_user'];
@$Location= $_POST['Location'];
@$Location_detail= $_POST['Location_detail'];
@$Remark= $_POST['Remark'];
@$Add_date= $_POST['Add_date'];
@$End_date= $_POST['End_date'];
@$Start_time= $_POST['Start_time'];
@$End_time= $_POST['End_time'];

$user = $_SESSION['name'];

$sqlUpdate ="UPDATE `counsel_visit` SET `One_user_name` = '$One_user', `Two_user_name` = '$Two_user', `Location` = '$Location', `Remark` = '$Remark', `Start_date` = '$Add_date' , `End_date` = '$End_date', `Start_time` = '$Start_time' , `End_time` = '$End_time' , `Location_detail` = '$Location_detail',`Update_name` = '$user', `Update_date` = NOW() WHERE `counsel_visit`.`Id` = $Id AND `counsel_visit`.`Counsel_id` = $Counsel_id;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>