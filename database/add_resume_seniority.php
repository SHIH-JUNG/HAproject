<?php
session_start();
include("sql_connect.php");

$user = $_SESSION['name'];


$Resume_id = $_POST['R_id'];
$Seniority_num = $_POST['Seniority_num'];
$Rec_year = $_POST['Rec_year'];
$Type = $_POST['Type'];
$Annual_default = $_POST['Annual_default'];
$Change_num = $_POST['Change_num'];
$Day_off_id = $_POST['Day_off_id'];
$Overtime_id = $_POST['Overtime_id'];
$Remark = $_POST['Remark'];
$sys_update_date = $_POST['sys_update_date'];

$sqlInsert = "INSERT INTO `resume_seniority` (`Resume_id`, `Seniority_num`, `Rec_year`, `Type`, `Annual_default`, `Change_num`, `Day_off_id`, 
`Overtime_id`, `Remark`, `Create_date`, `Create_name`) VALUES ";

for ($a = 0; $a < count($Annual_default); $a++){
    $sqlInsert = $sqlInsert . "($Resume_id[$a], $Seniority_num[$a], $Rec_year, '$Type[$a]', $Annual_default[$a], $Change_num[$a], $Day_off_id[$a], $Overtime_id[$a], 
    '$Remark[$a]', NOW(), '$user'),";
}
$sqlInsert = substr($sqlInsert,0,strlen($sqlInsert)-1).';';
// echo $sqlInsert;

if (mysqli_query($conn, $sqlInsert)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
