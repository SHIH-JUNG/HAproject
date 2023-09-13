<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];

$Name = $_POST['name'];
$Upload_date = $_POST['upload_date'];
$Entry_date = $_POST['entry_date'];

// $CustomFile1 = $_POST['customFile1'];
// $CustomFile2 = $_POST['customFile2'];
// $CustomFile3 = $_POST['customFile3'];
// $CustomFile4 = $_POST['customFile4'];

$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
$Update_date = $_POST['update_date'];
$Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `resume` SET `upload_date` = '$Upload_date', `name` = '$Name',
--  `customFile1` = '$CustomFile1',`customFile2` = '$CustomFile2', 
--  `customFile3` = '$CustomFile3',`customFile4` = '$CustomFile4',
 `create_date` = '$Create_date', `create_name` = '$Create_name', 
 `update_name` = '$Update_name', `Update_date` = NOW();";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
