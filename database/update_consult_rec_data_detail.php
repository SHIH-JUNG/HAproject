<?php
session_start();
include("sql_connect.php");

// var_dump($_POST);

$Phone_id = $_POST['Phone_id'];
$Consult_id = $_POST['Consult_id'];
$Call_datetime = $_POST['Call_datetime'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];


$user = $_SESSION['name'];


$select_consult_datas = 
"SELECT `Phone_id`, `Name`, `Gender`, 
`Object_type`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, 
`R_detail`, `Eligible`, `Assign` FROM `consult` WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC LIMIT 1;";

$find_consult_datas = mysqli_query($conn, $select_consult_datas);
$row_nums = mysqli_num_rows($find_consult_datas);
$consult_datas = mysqli_fetch_row($find_consult_datas);

$sqlUpdate = "";

if($Way == '電訪')
{
    $Info_Name = $_POST['Info_Name'];
    $Relationship_detail = $_POST['Relationship_detail'];
    $R_phone = $_POST['R_phone'];
    $Assign = $_POST['Assign'];
    $Phone_note = $_POST['Phone_note'];

    $sqlUpdate = "UPDATE `consult` SET `Phone_id` = '$consult_datas[0]', `Call_datetime` = '$Call_datetime', `Way` = '$Way', `Way_detail` = '$Way_detail', 
    `Name` = '$consult_datas[1]', `Gender` = '$consult_datas[2]', `Object_type` = '$consult_datas[3]', `M_addiction` = '$consult_datas[4]', 
    `Age` = '$consult_datas[5]', `A_detail` = '$consult_datas[6]', `Address` = '$consult_datas[7]',  `L_detail` = '$consult_datas[8]', `R_detail` = '$consult_datas[9]', 
    `Info_Name` = '$Info_Name', `Relationship_detail` = '$Relationship_detail', `R_phone` = '$R_phone', `Assign` = '$Assign', `Phone_note` = '$Phone_note', 
    `Eligible` = '$consult_datas[10]', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Consult_id';";
    
    if(mysqli_query($conn, $sqlUpdate)){
        echo true;
    }else{
        echo false;
    }
}
elseif($Way == '面訪')
{
    $Start_date = $_POST['Start_date'];
    $End_date = $_POST['End_date'];
    $Start_time = $_POST['Start_time'];
    $End_time = $_POST['End_time'];
    $One_user_name = $_POST['One_user_name'];
    $Two_user_name = $_POST['Two_user_name'];
    $Location = $_POST['Location'];
    $Location_detail = $_POST['Location_detail'];
    $Remark = $_POST['Remark'];

    $sqlUpdate = "UPDATE `consult` SET `Phone_id` = '$consult_datas[0]', `Call_datetime` = '$Start_date', `Way` = '$Way', `Way_detail` = '$Way_detail', 
    `Name` = '$consult_datas[1]', `Gender` = '$consult_datas[2]', `Object_type` = '$consult_datas[3]', `M_addiction` = '$consult_datas[4]', 
    `Age` = '$consult_datas[5]', `A_detail` = '$consult_datas[6]', `Address` = '$consult_datas[7]',  `L_detail` = '$consult_datas[8]', `R_detail` = '$consult_datas[9]', 
    `Start_date` = '$Start_date', `End_date` = '$End_date', `Start_time` = '$Start_time', `End_time` = '$End_time',
    `One_user_name` = '$One_user_name', `Two_user_name` = '$Two_user_name', `Location` = '$Location', `Location_detail` = '$Location_detail', `Remark` = '$Remark',  
    `Eligible` = '$consult_datas[10]', `Assign` = '$consult_datas[11]', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Consult_id';";

    if(mysqli_query($conn, $sqlUpdate)){
        echo true;
    }else{
        echo false;
    }
}


mysqli_close($conn);

?>