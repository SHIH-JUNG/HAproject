<?php
session_start();
include("sql_connect.php");
$Closed_id = $_POST['Closed_id']; 
$Open_case_id = $_POST['Open_case_id'];
$Open_case_seqid = $_POST['Open_case_seqid'];

$Closed_date = $_POST['Closed_date'];

$Main_issue = $_POST['Main_issue'];
$Minor_issue = $_POST['Minor_issue'];
$Intervention = $_POST['Intervention'];
$Evaluation = $_POST['Evaluation'];

$Closed_reason = $_POST['Closed_reason'];
$Closed_result = $_POST['Closed_result'];

$Remark = $_POST['Remark'];
$Assign = $_POST['Assign'];
// $Supervise1 = $_POST['Supervise1'];
// $Supervise2 = $_POST['Supervise2'];


$user = $_SESSION['name'];

$sign_closed_date = $Closed_date." 00:00";


$sqlUpdate ="UPDATE `closed` SET `Closed_date` = '$Closed_date', 
`Main_issue` = '$Main_issue', `Minor_issue` = '$Minor_issue', `Intervention` = '$Intervention', `Evaluation` = '$Evaluation',
 `Closed_reason` = '$Closed_reason', `Closed_result` = '$Closed_result',
  `Remark` = '$Remark',
  `Assign` = '$Assign',
--   `Supervise1` = '$Supervise2',`Supervise2` = '$Supervise2',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Closed_id' AND `Open_case_seqid` = '$Open_case_seqid' ORDER BY `closed`.`Create_date` ASC LIMIT 1;";

// @$sqlUpdate .= "UPDATE `signature_notice` SET `Timestamp` = '$sign_closed_date', `Assign` = '$Assign', `Signer`='$Supervise', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$Closed_id' AND `Type` = 'closed' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>