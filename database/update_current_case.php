<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

// $user = $_SESSION['name'];

$caseID = $_POST['caseID'];
$user_name = $_POST['user_name'];
$newCaseName = $_POST['newCaseName'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$ID = $_POST['ID'];
$assign = $_POST['assign'];

$sql = "UPDATE `current_case` SET `Name` = '$newCaseName',
`Phone` = '$phone',
`Birth` = '$birthday',
`Case_pid` = '$ID',
`Case_assign` = '$assign',
`Update_date` = NOW(),
`Update_name` = '$user_name'
WHERE `Case_id` = '$caseID';";
// echo $sql;

if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
?>