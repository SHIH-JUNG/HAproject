<?php
session_start();
include("sql_connect.php");
$Phone_id = $_POST['Phone_id']; 

// $call_datetime = $_POST['call_datetime'];
$user = $_SESSION['name'];
$Way = $_POST['Way'];
$Way_detail = $_POST['Way_detail'];
$Name = $_POST['Name'];
$Gender = $_POST['Gender'];
$Object_type = $_POST['Object_type'];
// $Addition = $_POST['Addition'];
@$main_radio = $_POST['main_radio'];
$Age = $_POST['Age'];
@$a_val = $_POST['a_val'];
$Address = $_POST['Address'];
@$l_val = $_POST['l_val'];
$Info_Name = $_POST['Info_Name'];
$Relationship_detail = $_POST['Relationship_detail'];
@$r_val = $_POST['r_val'];
$R_phone = $_POST['R_phone'];
$Referral = $_POST['Referral'];
@$ref_val = $_POST['ref_val'];

@$Referral_phone = $_POST['Referral_phone'];

$Referral_name = $_POST['Referral_name'];
// $Know_from = $_POST['Know_from'];
// @$k_val = $_POST['k_val'];
@$e_val = $_POST['e_val'];
$Assign = $_POST['Assign'];
$Phone_note = $_POST['Phone_note'];

// if(!empty($Addition))
// {
//     $Addiction = implode("、",$Addition);
// }
// else
// {
//     $Addiction = '';
// }

if(!empty($main_radio))
{
    $Main_radio = implode("、",$main_radio);
}
else
{
    $Main_radio = '';
}

if(!empty($R_phone))
{
    $R_Phone = implode("、",$R_phone);
}
else
{
    $R_Phone = '';
}

if(!empty($Referral_phone))
{
    $Referral_Phone = implode("、",$Referral_phone);
}
else
{
    $Referral_Phone = '';
}

$sqlUpdate ="UPDATE `consult` SET `Way`='$Way', `Way_detail`='$Way_detail', `Object_type` = '$Object_type',
  `M_addiction` = '$Main_radio',
  `Age` = '$Age',`A_detail` = '$a_val', `Address` = '$Address', `L_detail` = '$l_val',
   `Info_Name` = '$Info_Name', `Relationship_detail` = '$Relationship_detail', `R_detail` = '$r_val',
    `R_phone` = '$R_Phone', `Eligible` = '$e_val',`Assign` = '$Assign',
      `Phone_note` = '$Phone_note' , `Update_name` = '$user',`Update_date` = NOW() WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC LIMIT 1;";


$sqlUpdate .="UPDATE `consult` SET `Name` = '$Name', `Gender` = '$Gender', `Referral` = '$Referral',`Referral_detail` = '$ref_val',
     `Referral_phone` = '$Referral_Phone', `Referral_name` = '$Referral_name' WHERE `Phone_id` = '$Phone_id' ORDER BY `consult`.`Create_date` ASC;";
if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>