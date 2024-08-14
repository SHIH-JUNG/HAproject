<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

// $user = $_SESSION['name'];

$caseID = $_POST['caseID'];
$user_name = $_POST['user_name'];
$newCaseName = $_POST['newCaseName'];
$Object_type = $_POST['Object_type'];
$Case_grade = $_POST['Case_grade'];
$Case_property = $_POST['Case_property'];
$Case_stage = $_POST['Case_stage'];
$Open_case_date = $_POST['Open_case_date'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$ID = $_POST['ID'];
$Referral = $_POST['Referral'];
$assign = $_POST['assign'];

$sql = "UPDATE `current_case` SET `Name` = '$newCaseName',
`Object_type` = '$Object_type',
`Case_grade` = '$Case_grade',
`Case_property` = '$Case_property',
`Case_stage` = '$Case_stage',
`Open_case_date` = '$Open_case_date',
`Phone` = '$phone',
`Birth` = '$birthday',
`Case_pid` = '$ID',
`Referral` = '$Referral',
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