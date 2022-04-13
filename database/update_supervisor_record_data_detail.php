<?php
session_start();
include("sql_connect.php");

$sr_id = $_POST['sr_id'];
$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$user = $_SESSION['name'];


$sqlUpdate ="UPDATE `supervisor_record` SET `record_content` = '$record_content', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$sr_id' ORDER BY `supervisor_record`.`Create_date` ASC LIMIT 1;";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>