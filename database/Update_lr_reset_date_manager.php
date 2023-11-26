<?php
session_start();
include("sql_connect.php");

$user = $_SESSION['name'];


$reset_date = $_POST['rest_date'];



$sqlUpdate = "UPDATE `leave_rule_table` SET `reset_date` = '$reset_date',
 `update_name` = '$user', `Update_date` = NOW() ORDER BY `leave_rule_table`.`Create_date` DESC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
