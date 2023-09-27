<?php
session_start();
include("sql_connect.php");

// var_dump($_POST);

$Phone_id = $_POST['Phone_id'];

$Call_datetime = $_POST['Call_datetime'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];

$Info_Name = $_POST['Info_Name'];
$Relationship_detail = $_POST['Relationship_detail'];
$R_phone = $_POST['R_phone'];
$Assign = $_POST['Assign'];
$Phone_note = $_POST['Phone_note'];

$user = $_SESSION['name'];


$select_consult_datas = 
"SELECT `Phone_id`, `Name`, `Gender`, 
`Object_type`, `M_addiction`, `Age`, `A_detail`, `Address`, `L_detail`, 
`R_detail`, `Eligible` FROM `consult` WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC LIMIT 1;";

$find_consult_datas = mysqli_query($conn, $select_consult_datas);
$row_nums = mysqli_num_rows($find_consult_datas);
$consult_datas = mysqli_fetch_row($find_consult_datas);

$sql = 
"INSERT INTO `consult` (`Phone_id`,`Call_datetime`,`Way`,`Way_detail`,
`Name`,`Gender`,`Object_type`,`M_addiction`,
`Age`,`A_detail`,`Address`,`L_detail`,`R_detail`,
`Info_Name`,`Relationship_detail`,`R_phone`,`Assign`,`Phone_note`,
`Eligible`, `Is_firstadd`, `Create_date`,`Create_name`) VALUES
('$Phone_id','$Call_datetime','$Way', '$Way_detail',
'$consult_datas[1]','$consult_datas[2]','$consult_datas[3]', '$consult_datas[4]',
'$consult_datas[5]','$consult_datas[6]', '$consult_datas[7]', '$consult_datas[8]', '$consult_datas[9]',
'$Info_Name','$Relationship_detail', '$R_phone', '$Assign', '$Phone_note',
'$consult_datas[10]', 0, Now(), '$user')";

if(mysqli_query($conn, $sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);

?>