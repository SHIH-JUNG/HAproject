<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Id = $_POST['Id'];
$title = $_POST['title'];
$time = $_POST['time'];
$assign1 = $_POST['assign1'];
$assign2 = $_POST['assign2'];
$remark = $_POST['remark'];
$user = $_SESSION['name'];

$sql = "UPDATE `visit_index` SET 
`Visit_title` = '$title', 
`Visit_time` = '$time', 
`Visit_assign1` = '$assign1', 
`Visit_assign2` = '$assign2', 
`Remark` = '$remark',
`Update_date` = NOW(), 
`Update_name` = '$user' 
WHERE `Id` = $Id;";

if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>