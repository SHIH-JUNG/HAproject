<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Visit_title = $_POST['Visit_title'];
$Visit_time = $_POST['Visit_time'];
$Visit_assign1 = $_POST['Visit_assign1'];
$Visit_assign2 = $_POST['Visit_assign2'];


$user = $_SESSION['name'];

$sql = "INSERT INTO `visit_index` (`Visit_title`,`Visit_time`
, `Visit_assign1`,`Visit_assign2`
,`Create_date`,`Create_name`) VALUES
('$Visit_title', '$Visit_time', 
'$Visit_assign1',
'$Visit_assign2',
Now(), '$user')";


if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
}

mysqli_close($conn);
?>