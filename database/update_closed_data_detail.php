<?php
session_start();
include("sql_connect.php");
$Closed_id = $_POST['Closed_id']; 

$user = $_SESSION['name'];

$Closed_date = $_POST['Closed_date'];

$Main_issue = $_POST['Main_issue'];
$Intervention = $_POST['Intervention'];
$Closed_reason = $_POST['Closed_reason'];
$Remark = $_POST['Remark'];
$Assign = $_POST['Assign'];



$sqlUpdate ="UPDATE `closed` SET `Closed_date` = '$Closed_date', `Main_issue` = '$Main_issue', `Intervention` = '$Intervention',
 `Closed_reason` = '$Closed_reason',
  `Remark` = '$Remark',
  `Assign` = '$Assign',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Closed_id` = '$Closed_id' ORDER BY `closed`.`Create_date` ASC LIMIT 1;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>