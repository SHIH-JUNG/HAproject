<?php
session_start();
include("sql_connect.php");

// var_dump($_POST);

$Phone_id = $_POST['Phone_id'];

$Call_datetime = $_POST['Call_datetime'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];

$Start_date = $_POST['Start_date'];
$End_date = $_POST['End_date'];
$Start_time = $_POST['Start_time'];
$End_time = $_POST['End_time'];
$One_user_name = $_POST['One_user_name'];
$Two_user_name = $_POST['Two_user_name'];
$Location = $_POST['Location'];
$Location_detail = $_POST['Location_detail'];
$Remark = $_POST['Remark'];

$user = $_SESSION['name'];


$select_consult_datas = 
"SELECT `Phone_id`, `Name`, `Gender`, 
`Object_type`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, 
`R_detail`, `Eligible`, `Assign` FROM `consult` WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC LIMIT 1;";

$find_consult_datas = mysqli_query($conn, $select_consult_datas);
$row_nums = mysqli_num_rows($find_consult_datas);
$consult_datas = mysqli_fetch_row($find_consult_datas);

$sql = 
"INSERT INTO `consult` (`Phone_id`,`Call_datetime`,`Way`,`Way_detail`,
`Name`,`Gender`,`Object_type`,`M_addiction`,
`Age`,`A_detail`,`Address`,`L_detail`,`R_detail`,
`Start_date`, `End_date`, `Start_time`, `End_time`, 
`One_user_name`, `Two_user_name`, 
`Location`, `Location_detail`, 
`Remark`,
`Eligible`, `Assign`, `Is_firstadd`, 
`Create_date`,`Create_name`) VALUES
('$Phone_id','$Call_datetime','$Way', '$Way_detail',
'$consult_datas[1]','$consult_datas[2]','$consult_datas[3]', '$consult_datas[4]',
'$consult_datas[5]','$consult_datas[6]', '$consult_datas[7]', '$consult_datas[8]', '$consult_datas[9]',
'$Start_date','$End_date', '$Start_time', '$End_time', 
'$One_user_name', '$Two_user_name',
'$Location', '$Location_detail',
'$Remark',
'$consult_datas[10]', '$consult_datas[11]', 0, Now(), '$user')";

if(mysqli_query($conn, $sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);

?>