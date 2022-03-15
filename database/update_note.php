<?php
include("sql_connect.php");

$id = $_POST['id'];
$title = $_POST['title'];
$description = $_POST['description'];
$start = $_POST['start'];
$end = $_POST['end'];

$Update_auto_note = "UPDATE `sign_notice` SET `file_name` = '$title',`datetime` = '$start' WHERE `sign_notice`.`id` = '$id'";
mysqli_query($conn,$Update_auto_note);

$sqlUpdate = "UPDATE `calendar` SET `title` = '$title', `description` = '$description', `start` = '$start',`end` = '$end' WHERE `calendar`.`id` = '$id'";

if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>