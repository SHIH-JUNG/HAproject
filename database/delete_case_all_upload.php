<?php session_start(); ?>
<?php 
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Id = $_POST['Id'];

$sqlUpdate = "DELETE from form_all_info WHERE `Id` = '$Id';";

if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}



mysqli_close($conn);


?>