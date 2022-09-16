<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$add_keyword = $_POST['add_keyword'];


$sql = "INSERT INTO `form_interlocution_queskeywords` (`Ques_type`) VALUES ('$add_keyword');";
  
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>