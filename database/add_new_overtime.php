<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Rec_year = $_REQUEST['Rec_year'];
$Fillin_date = $_REQUEST['Fillin_date'];

$Overtime_date = $_REQUEST['Overtime_date'];
$Reason = $_REQUEST['Reason'];
$Overtime_hours = $_REQUEST['Overtime_hours'];

$Subsidy_type = $_REQUEST['Subsidy_type'];

@$Free_date = $_REQUEST['Free_date'];
@$Free_hours = $_REQUEST['Free_hours'];

@$Director = $_REQUEST['Director'];
@$Supervise = $_REQUEST['Supervise'];
@$Checker = $_REQUEST['Checker'];


$user = $_SESSION['name'];
$user_acc = $_SESSION['Account'];

$title = $_POST['title'];
$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

$select_id_num = "SELECT MAX(Id) FROM `overtime` ORDER BY `overtime`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $overtime_id = (int)$id_num[0] + 1;
}
else
{
    $overtime_id = 0;
}

// 查詢 帳號的Resume_id
$select_id_num = "SELECT `Resume_id` FROM `user_info` WHERE `Account` = '$user_acc' AND `Name` = '$user';";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

// 查詢 id、名字
$select_user_data_num = "SELECT `Id`, `Name` FROM `resume` WHERE `Id` = '$id_num[0]';";

$find_user_data_num = mysqli_query($conn,$select_user_data_num);
$user_data_num = mysqli_fetch_row($find_user_data_num);

$url = 'overtime_detail.php?overtime_id='.$overtime_id.'&resume_id='.$user_data_num[0].'';

$sign_state = $Director . "未簽核" . "、" . $Supervise . "未簽核" . "、" . $Checker . "未簽核";


$sql = "INSERT INTO `overtime` (`Id`, `Resume_id`, `Resume_name`, 
`Rec_year`, `Fillin_date`, 
`Overtime_date`, 
`Reason`, 
`Overtime_hours`, 
`Subsidy_type`, 
`Free_date`, `Free_hours`, 
`Allow_status`, 
`Create_date`, `Create_name`, 
`Supervise`,`Checker`, `Director`) VALUES
 ('$overtime_id', '$user_data_num[0]', '$user_data_num[1]',
 '$Rec_year', '$Fillin_date', 
 '$Overtime_date', 
 '$Reason', 
 '$Overtime_hours', 
 '$Subsidy_type',
 '$Free_date', '$Free_hours', 
 '審核中', 
 NOW(), '$user',  
 '$Supervise', '$Checker', '$Director');";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$overtime_id', '$title','$url','$rec_date_time', '$user', '$signer', '$sign_state', 'overtime', Now(), '$user')";


if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
