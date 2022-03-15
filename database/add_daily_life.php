<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$phoen_id = $_POST['phoen_id'];

$note = "SELECT * FROM `face` WHERE `phone_id` = '$phoen_id' ORDER BY `face`.`Id` DESC";
$select_face = mysqli_query($conn,$note);
$face = mysqli_fetch_row($select_face);

$face_id = $face[5].$face[6];
$phone_id = $_POST['phone_id'];
$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$address = $_POST['address'];
$use_addition = $_POST['use_addition'];
$addition = $_POST['addition'];
$assign = $_SESSION['name'];
$Use_Addition = implode("、",$use_addition);
//$assign = $_POST['assign'];

$sql = "INSERT INTO `daily_life` (`face_id`, `phone_id`, `name`, `gender`, `age`,`address`,`use_addition`,`addition`,`assign`) VALUES ('$face_id', '$phone_id', '$name', '$gender', '$age','$address','$Use_Addition','$addition','$assign')";
	if(mysqli_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }
mysqli_close($conn);
?>