<?php
include("sql_connect.php");
session_start();

$user = $_SESSION["name"];

$Case_id = $_POST['Case_id'];
$Case_pid = $_POST['Case_pid'];
$Case_grade = $_POST['Case_grade'];

$sqlUpdate = "UPDATE `current_case` SET `Case_grade` = '$Case_grade' ,`Update_name` = '$user', `Update_date` = NOW() WHERE `current_case`.`Case_id` = '$Case_id' AND `current_case`.`Case_pid` = '$Case_pid' ORDER BY `current_case`.`Create_date` ASC LIMIT 1;";

if(mysqli_query($conn, $sqlUpdate)){
    echo true;
}else{
    echo false;
}
mysqli_close($conn);

?>