<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Id = $_POST['Id'];
$Visit_end_time = $_POST['Visit_end_time'];
$Visit_remark = $_POST['Visit_remark'];

$user = $_SESSION['name'];

$sql = "UPDATE `visit_index` SET `Visit_end_time` = '$Visit_end_time' ,`Remark` = '$Visit_remark' ,`Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Id';";


if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>