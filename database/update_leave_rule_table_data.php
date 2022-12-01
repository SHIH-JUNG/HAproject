<?php
session_start();
include("sql_connect.php");

$user = $_SESSION['name'];


$rule_arr = json_encode($_POST['rule_arr'],JSON_UNESCAPED_UNICODE);



$sqlUpdate = "UPDATE `leave_rule_table` SET `Rule_table_json` = '$rule_arr',
 `update_name` = '$user', `Update_date` = NOW() ORDER BY `leave_rule_table`.`Create_date` DESC LIMIT 1;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
