<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Rec_year = $_REQUEST['Rec_year'];
$Fillin_date = $_REQUEST['Fillin_date'];

$Day_off_type = $_REQUEST['Day_off_type'];
$Reason = $_REQUEST['Reason'];


@$Overtime_date_start = $_REQUEST['Overtime_date_start'];
@$Overtime_date_end = $_REQUEST['Overtime_date_end'];
@$Overtime_hours = $_REQUEST['Overtime_hours'];

@$Remain_comp_hours = $_REQUEST['Remain_comp_hours'];
@$Remain_annual_hours = $_REQUEST['Remain_annual_hours'];
@$Used_comp_hours = $_REQUEST['Used_comp_hours'];
@$Used_annual_hours = $_REQUEST['Used_annual_hours'];

@$Director = $_REQUEST['Director'];
@$Supervise = $_REQUEST['Supervise'];
@$Job_agent = $_REQUEST['Job_agent'];

$user = $_SESSION['name'];
$user_acc = $_SESSION['Account'];

$title = $_POST['title'];
$signer = $_POST['signer'];
$rec_date_time = $_POST['rec_date_time'];

$sign_state = $Director . "未簽核" . "、" . $Supervise . "未簽核" . "、" . $Job_agent . "未簽核";


$select_id_num = "SELECT MAX(Id) FROM `day_off_v2` ORDER BY `day_off_v2`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $day_off_id = (int)$id_num[0] + 1;
}
else
{
    $day_off_id = 0;
}


// 查詢 帳號的Resume_id
$select_id_num = "SELECT `Resume_id` FROM `user_info` WHERE `Account` = '$user_acc' AND `Name` = '$user';";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

// 查詢 id、名字
$select_user_data_num = "SELECT `Id`, `Name`, `Annual_hours` FROM `resume` WHERE `Id` = '$id_num[0]';";

$find_user_data_num = mysqli_query($conn,$select_user_data_num);
$user_data_num = mysqli_fetch_row($find_user_data_num);


$url = 'day_off_detail.php?day_off_id='.$day_off_id.'&resume_id='.$user_data_num[0].'';


// 檔案路徑
@$file_dir = "../resume/resume_user".$user_data_num[0]."_".$user_acc."/day_off_datas/";

$file_0 = "";
$file_0_date = NULL;

$file_sql_0 = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷檔案上傳
if (isset($_FILES["day_off_file0"]))
{
    @$file_0 = "../resume/resume_user".$user_data_num[0]."_".$user_acc."/day_off_datas/" . $_FILES["day_off_file0"]["name"];

    @$file_0_date = date("Y-m-d");

    if ($_FILES["day_off_file0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["day_off_file0"]["tmp_name"],
            "../resume/resume_user".$user_data_num[0]."_".$user_acc."/day_off_datas/" . $_FILES["day_off_file0"]["name"]
        );
    }
}


$sql = "INSERT INTO `day_off_v2` (`Id`, `Resume_id`, `Resume_name`, 
`Rec_year`, `Fillin_date`, 
`Day_off_type`, 
`Reason`, 
`Other_files`, 
`Overtime_date_start`, `Overtime_date_end`, 
`Hours`, 
`Remain_comp_hours`, `Remain_annual_hours`, `Used_comp_hours`, `Used_annual_hours`, 
`Allow_status`, 
`Create_date`, `Create_name`, 
`Supervise`, `Job_agent`, `Director`) VALUES
 ('$day_off_id', '$user_data_num[0]', '$user_data_num[1]',
 '$Rec_year', '$Fillin_date', 
 '$Day_off_type', 
 '$Reason', 
 '$file_0', 
 '$Overtime_date_start', '$Overtime_date_end', 
 '$Overtime_hours', 
 '$Remain_comp_hours', '$Remain_annual_hours', '$Used_comp_hours', '$Used_annual_hours', 
 '審核中', 
 NOW(), '$user',  
 '$Supervise', '$Job_agent', '$Director');";


$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ($day_off_id, '$title','$url','$rec_date_time', '$user', '$signer', '$sign_state', 'day_off', Now(), '$user')";

if (mysqli_multi_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
