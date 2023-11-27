<?php
session_start();
include("sql_connect.php");

$user = $_SESSION['name'];

$Annual_default = $_REQUEST['Annual_default'];
$Resume_id = $_REQUEST['R_id'];
$this_year = $_REQUEST['this_year'];

$sqlUpdate = "UPDATE `resume_seniority` SET `Annual_default` = '$Annual_default', `Update_date` = NOW() WHERE `Resume_id` = '$Resume_id' AND `Rec_year` = $this_year;";
if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    $this_year -= 1;
    $sqlUpdate = "UPDATE `resume_seniority` SET `Annual_default` = '$Annual_default', `Update_date` = NOW() WHERE `Resume_id` = '$Resume_id' AND `Rec_year` = $this_year;";
    if (mysqli_query($conn, $sqlUpdate)){
        echo true;
    }
    else{
        echo false;
    }
}

mysqli_close($conn);
