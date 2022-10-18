<?php
session_start();
include("sql_connect.php");

$sr_id = $_POST['sr_id'];
$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$year = $_POST['year'];

$user = $_SESSION['name'];

$assign = $_POST['assign'];
$title = $_POST['title'];
$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

$url = 'supervisor_record_detail.php?year='.$year.'&id='.$sr_id.'&sr_id='.$sr_id.'&rec_type=fillin';


@$signed_timestamp = $_POST['signed_timestamp'];

@$update_signer_sql = "";

if($signed_timestamp!="0000-00-00 00:00:00")
{
    $update_signer_sql = ", `Supervise` = '$signer'";
}

$sqlUpdate ="UPDATE `supervisor_record` SET `Year` = '$year', `record_content` = '$record_content' ".$update_signer_sql.", `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$sr_id' ORDER BY `supervisor_record`.`Create_date` ASC LIMIT 1;";

@$sqlUpdate .= "UPDATE `signature_notice` SET `Title` = '$title', `Url` = '$url', `Timestamp` = '$rec_date_time', `Assign` = '$assign', `Signer`='$signer', `Update_name` = '$user', `Update_date` = NOW() WHERE `Record_id` = '$sr_id' AND `Type` = 'supervisor_record' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>