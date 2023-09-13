<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];

$Name = $_POST['name'];
$Upload_date = $_POST['upload_date'];
$Entry_date = $_POST['entry_date'];
$On_or_off = $_POST['on_or_off'];
$File1_check = $_POST['file1_check'];
$File2_check = $_POST['file2_check'];
$File3_check = $_POST['file3_check'];
$File4_check = $_POST['file4_check'];

// $CustomFile1 = $_POST['customFile1'];
// $CustomFile2 = $_POST['customFile2'];
// $CustomFile3 = $_POST['customFile3'];
// $CustomFile4 = $_POST['customFile4'];

$Create_date = $_POST['create_date'];
$Create_name = $_POST['create_name'];
$Update_date = $_POST['update_date'];
$Update_name = $_POST['update_name'];



$sqlUpdate = "UPDATE `resume` SET `upload_date` = '$Upload_date', `name` = '$Name', `on_or_off` = '$On_or_off',
`file1_check` = '$File1_check', `file2_check` = '$File2_check',`file3_check` = '$File3_check',`file4_check` = '$File4_check',
 `create_date` = '$Create_date', `create_name` = '$Create_name', 
 `update_name` = '$Update_name', `Update_date` = NOW();";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
