<?php
session_start();
include("sql_connect.php");

$ma_id = $_POST['ma_id'];
$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$year = $_POST['year'];

$user = $_SESSION['name'];

$assign = $_POST['assign'];
$title = $_POST['title'];
$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

$url = 'members_assemble_detail.php?year='.$year.'&id='.$ma_id.'&ma_id='.$ma_id.'&rec_type=fillin';


@$signed_timestamp = $_POST['signed_timestamp'];

@$update_signer_sql = "";

if($signed_timestamp!="0000-00-00 00:00:00")
{
    $update_signer_sql = ", `Supervise` = '$signer'";
}

$sqlUpdate ="UPDATE `members_assemble` SET `Year` = '$year', `record_content` = '$record_content' ".$update_signer_sql.", `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$ma_id' ORDER BY `members_assemble`.`Create_date` ASC LIMIT 1;";

@$sqlUpdate .= "UPDATE `signature_notice` SET `Title` = '$title', `Url` = '$url', `Timestamp` = '$rec_date_time', `Assign` = '$assign', `Signer`='$signer', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$ma_id' AND `Type` = 'members_assemble' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);
