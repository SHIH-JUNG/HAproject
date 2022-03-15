<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$title = $_POST['ann_title'];
$authority = $_POST['authority'];
$publisher = $_SESSION['name'];

$sql = "INSERT INTO `announcement` (`title`,`authority` , `publisher`) VALUES ('$title' , '$authority' , '$publisher')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>