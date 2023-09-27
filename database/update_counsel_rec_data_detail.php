<?php
session_start();
include("sql_connect.php");

@$Consult_v_id = $_POST['Consult_v_id'];
@$One_user_name= $_POST['One_user_name'];
@$Two_user_name= $_POST['Two_user_name'];
@$Location= $_POST['Location'];
@$Location_detail= $_POST['Location_detail'];
@$Remark= $_POST['Remark'];
@$Start_date= $_POST['Start_date'];
@$End_date= $_POST['End_date'];
@$Start_time= $_POST['Start_time'];
@$End_time= $_POST['End_time'];

$user = $_SESSION['name'];

$sqlUpdate ="UPDATE `counsel_visit` SET `One_user_name` = '$One_user_name', 
`Two_user_name` = '$Two_user_name', 
`Location` = '$Location', 
`Remark` = '$Remark', 
`Start_date` = '$Start_date' , `End_date` = '$End_date', 
`Start_time` = '$Start_time' , `End_time` = '$End_time', 
`Location_detail` = '$Location_detail',
`Update_name` = '$user', `Update_date` = NOW() 
WHERE `Id` = $Consult_v_id;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>