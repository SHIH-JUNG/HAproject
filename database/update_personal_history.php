<?php
session_start();
include("sql_connect.php");


$Id = $_POST['Id'];
$Phone_id = $_POST['Phone_id'];
$nCall_datetime = $_POST['nCall_datetime'];
$nInfo_Name = $_POST['nInfo_Name'];
$nRelationship_detail = $_POST['nRelationship_detail'];
$nR_phone = $_POST['nR_phone'];
$nAssign = $_POST['nuser'];
$nPhone_note = $_POST['nPhone_note'];
$Update_name = $_SESSION['name'];
  


$sql = "SELECT * FROM `consult` WHERE `Phone_id`='$Phone_id' ORDER BY `consult`.`Id` DESC";
$select_sql = mysqli_query($conn,$sql);
$sql_text = mysqli_fetch_row($select_sql);
if($sql_text[0] == $Id){
    $sql2 = "UPDATE `consult` SET `Create_date` = '$nCall_datetime' WHERE  `Phone_id` = '$Phone_id'";
    mysqli_query($conn,$sql2);
}


$sqlUpdate ="UPDATE `consult` SET `Call_datetime` = '$nCall_datetime', `Info_Name` = '$nInfo_Name', `Relationship_detail` = '$nRelationship_detail',
 `Phone_note` = '$nPhone_note', `Update_name` = '$Update_name', `Assign` = '$nAssign', `Update_date` = NOW() WHERE `consult`.`Id` = '$Id'";
if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>