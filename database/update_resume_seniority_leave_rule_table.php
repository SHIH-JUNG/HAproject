<?php
session_start();
include("sql_connect.php");

$user = $_SESSION['name'];

$Id = $_REQUEST['id'];
$Annual_default = $_REQUEST['Annual_default'];
$Resume_id = $_REQUEST['R_id'];
$success=0;
$false='';
for ($a = 0; $a < count($Annual_default); $a++){
    $sqlUpdate = "UPDATE `resume_seniority` SET `Annual_default` = $Annual_default[$a], `Update_date` = NOW() WHERE `Id` = $Id[$a];";
    if (mysqli_query($conn, $sqlUpdate)) {
        $success+=1;
    } else {
        $false+=$Resume_id+' ';
    }
}
// $sqlUpdate = "UPDATE `resume_seniority` SET `Annual_default` = '$Annual_default' WHERE `Id` = '$Id';";
// if (mysqli_query($conn, $sqlUpdate)) {
//     echo true;
// } else {
//     echo false;
// }
echo $success;
echo '/' ;
echo $false;
mysqli_close($conn);
