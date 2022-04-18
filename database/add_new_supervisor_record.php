<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$record_content = json_encode($_POST['record_content'],JSON_UNESCAPED_UNICODE);
$year = $_POST['year'];

$user = $_SESSION['name'];


$sql = "INSERT INTO `supervisor_record` (`Year`, `record_content`,`Create_date`,`Create_name`) VALUES
 ('$year', '$record_content', Now(), '$user');";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
