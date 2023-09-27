<?php
session_start();
include("sql_connect.php");
$Phone_id = $_POST['Phone_id'];
$Call_datetime = $_POST['Call_datetime'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];
$Name = $_POST['Name'];
$Gender = $_POST['Gender'];
$Object_type = $_POST['Object_type'];

$M_type = $_POST['M_type'];

$main_radio = $_POST['main_radio'];

$Age = $_POST['Age'];
$a_val = $_POST['a_val'];
$Address = $_POST['Address'];
$l_val = $_POST['l_val'];

$Info_Name = $_POST['Info_Name'];
$Relationship_detail = $_POST['Relationship_detail'];
$r_val = $_POST['r_val'];

$R_phone = $_POST['R_phone'];

$Referral = $_POST['Referral'];
$ref_val = $_POST['ref_val'];
$Referral_phone = $_POST['Referral_phone'];
$Referral_name = $_POST['Referral_name'];

$e_val = $_POST['e_val'];
$Assign = $_POST['Assign'];

$Phone_note = $_POST['Phone_note'];

$user = $_SESSION['name'];


$sqlUpdate ="UPDATE `consult` SET `Name` = '$Name', `Gender` = '$Gender', `Object_type` = '$Object_type',
`M_type` = '$M_type', `M_addiction` = '$main_radio', 
`Age` = '$Age', `A_detail` = '$a_val', `Address` = '$Address', `L_detail` = '$l_val',
`Referral` = '$Referral', `Referral_detail` = '$ref_val', `Referral_phone` = '$Referral_phone', `Referral_name` = '$Referral_name',
`Eligible` = '$e_val',
`Update_name` = '$user', `Update_date` = NOW() WHERE `Phone_id` = '$Phone_id';";

$sqlUpdate .="UPDATE `consult` SET `Call_datetime` = '$Call_datetime', `Way` = '$Way', `Way_detail` = '$Way_detail', 
`Info_Name` = '$Info_Name', `Relationship_detail` = '$Relationship_detail', `R_phone` = '$R_phone', `R_detail` = '$r_val',
`Assign` = '$Assign', `Phone_note` = '$Phone_note',
`Update_name` = '$user', `Update_date` = NOW() WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC LIMIT 1;";

if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>