<?php
session_start();
include("sql_connect.php");
$peers_dlgrec_id = $_POST['peers_dlgrec_id']; 

$bf_num = $_POST['bf_num'];
$al_num = $_POST['al_num'];
$em_num = $_POST['em_num'];
$lp_num = $_POST['lp_num'];
$leave_num = $_POST['leave_num'];
$peers_dlgrec_date = $_POST['peers_dlgrec_date'];
$peers_dlgrec_0 = $_POST['peers_dlgrec_0'];
$peers_dlgrec_1 = $_POST['peers_dlgrec_1'];
$peers_dlgrec_2 = $_POST['peers_dlgrec_2'];
$peers_dlgrec_3 = $_POST['peers_dlgrec_3'];
$peers_dlgrec_4 = $_POST['peers_dlgrec_4'];
$peers_dlgrec_5 = $_POST['peers_dlgrec_5'];
$peers_dlgrec_6 = $_POST['peers_dlgrec_6'];
$peers_dlgrec_7 = $_POST['peers_dlgrec_7'];
$peers_dlgrec_8 = $_POST['peers_dlgrec_8'];
$peers_dlgrec_9 = $_POST['peers_dlgrec_9'];
$peers_dlgrec_10 = $_POST['peers_dlgrec_10'];
$peers_dlgrec_11 = $_POST['peers_dlgrec_11'];

$dlg_manager = $_POST['dlg_manager'];
// $social_worker = $_POST['social_worker'];
// $supervise1 = $_POST['supervise1'];
// $supervise2 = $_POST['supervise2'];

$user = $_SESSION['name'];



$sqlUpdate ="UPDATE `peers_dlgrec` SET `bf_num` = '$bf_num', `al_num` = '$al_num', `em_num` = '$em_num', `lp_num` = '$lp_num', `leave_num` = '$leave_num', `peers_dlgrec_date` = '$peers_dlgrec_date',
 `peers_dlgrec_0` = '$peers_dlgrec_0', `peers_dlgrec_1` = '$peers_dlgrec_2', `peers_dlgrec_3` = '$peers_dlgrec_3', `peers_dlgrec_4` = '$peers_dlgrec_4', `peers_dlgrec_5` = '$peers_dlgrec_5', `peers_dlgrec_6` = '$peers_dlgrec_6',
 `peers_dlgrec_7` = '$peers_dlgrec_7', `peers_dlgrec_8` = '$peers_dlgrec_8', `peers_dlgrec_9` = '$peers_dlgrec_9', `peers_dlgrec_10` = '$peers_dlgrec_10', `peers_dlgrec_11` = '$peers_dlgrec_11',
  `dlg_manager` = '$dlg_manager',
  `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$peers_dlgrec_id' ORDER BY `peers_dlgrec`.`Create_date` ASC LIMIT 1;";

// `social_worker` = '$social_worker', `supervise1` = '$supervise1', `supervise2` = '$supervise2',

// @$sqlUpdate .= "UPDATE `signature_notice` SET `Timestamp` = '$sign_closed_date', `Assign` = '$Assign', `Signer`='$Supervise', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$Closed_id' AND `Type` = 'closed' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

// if(mysqli_multi_query($conn, $sqlUpdate)){
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>