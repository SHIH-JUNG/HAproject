<?php
session_start();
include("sql_connect.php");
$Refferal = $_POST['Refferal'];
$Counsel_id = $_POST['Counsel_id'];
$Id = $_POST['Id'];
$Name = $_POST['Name'];
@$Gender = $_POST['Gender'];
@$Sexual_orientation = $_POST['Sexual_orientation'];
@$Birth = $_POST['Birth'];
$Pid = $_POST['Pid'];

@$Info_name = $_POST['Info_name'];
@$Info_phone = $_POST['Info_phone'];
@$Address = $_POST['Address'];

@$In_prison_date = $_POST['In_prison_date'];
@$Out_prison_date = $_POST['Out_prison_date'];
@$In_prison_date_2nd = $_POST['In_prison_date_2nd'];
@$Out_prison_date_2nd = $_POST['Out_prison_date_2nd'];
@$In_prison_date_3rd = $_POST['In_prison_date_3rd'];
@$Out_prison_date_3rd = $_POST['Out_prison_date_3rd'];

@$Is_parole = $_POST['Is_parole'];

@$HIV_diagnosis_date = $_POST['HIV_diagnosis_date'];

@$Family_know = $_POST['Family_know'];
@$Cocktail_therapy_status = $_POST['Cocktail_therapy_status'];

$user = $_SESSION['name'];


$sqlUpdate ="UPDATE `counsel` SET `Refferal` = '$Refferal', `Name` = '$Name', `Gender` = '$Gender',`Sexual_orientation` = '$Sexual_orientation',
 `Birth` = '$Birth', `Pid` = '$Pid', `Info_name` = '$Info_name', `Info_phone` = '$Info_phone', `Address` = '$Address',
  `In_prison_date` = '$In_prison_date',`Out_prison_date` = '$Out_prison_date', `In_prison_date_2nd` = '$In_prison_date_2nd', `Out_prison_date_2nd` = '$Out_prison_date_2nd',
  `In_prison_date_3rd` = '$In_prison_date_3rd', `Out_prison_date_3rd` = '$Out_prison_date_3rd',
  `Is_parole` = '$Is_parole', `HIV_diagnosis_date` = '$HIV_diagnosis_date', `Family_know` = '$Family_know', `Cocktail_therapy_status` = '$Cocktail_therapy_status',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Counsel_id` = '$Counsel_id' AND `Id` = '$Id' ORDER BY `counsel`.`Create_date` ASC LIMIT 1;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>