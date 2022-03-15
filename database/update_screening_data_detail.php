<?php
session_start();
include("sql_connect.php");
$Screening_id = $_POST['Screening_id']; 

$user = $_SESSION['name'];

$Reservation_date = $_POST['Reservation_date'];
$Reservation_time = $_POST['Reservation_time'];

$Name = $_POST['Name'];
$Age = $_POST['Age'];
@$a_val = $_POST['a_val'];
$Gender = $_POST['Gender'];
$Phone = $_POST['Phone'];
$Sexual_orientation = $_POST['Sexual_orientation'];
$Screening_type = $_POST['Screening_type'];
$Screening_results = $_POST['Screening_results'];
$Interview_content = $_POST['Interview_content'];
$Remark = $_POST['Remark'];
$Reagent_seq = $_POST['Reagent_seq'];
$Amount = $_POST['Amount'];


$sqlUpdate ="UPDATE `screening` SET `Reservation_date` = '$Reservation_date', `Reservation_time` = '$Reservation_time', `Name` = '$Name',
 `Age` = '$Age', `A_detail` = '$a_val',
  `Phone` = '$Phone',`Gender` = '$Gender', `Sexual_orientation` = '$Sexual_orientation',
  `Screening_type` = '$Screening_type', `Screening_results` = '$Screening_results', `Interview_content` = '$Interview_content',
  `Remark` = '$Remark', `Reagent_seq` = '$Reagent_seq',`Amount` = '$Amount',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Screening_id` = '$Screening_id' ORDER BY `screening`.`Create_date` ASC LIMIT 1;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>