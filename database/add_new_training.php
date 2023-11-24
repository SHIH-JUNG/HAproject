<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
// $Name = $_REQUEST['Name'];
$Training_date = $_REQUEST['Training_date'];
$Training_start_time = $_REQUEST['Training_start_time'];
$Training_end_time = $_REQUEST['Training_end_time'];
$Training_name = $_REQUEST['Training_name'];
$Hours = $_REQUEST['Hours'];
$Place = $_REQUEST['Place'];
$Remark = $_REQUEST['Remark'];

$acc_id = $_SESSION['acc_id'];
$resume_id = $_SESSION['resume_id'];

$user = $_SESSION['name'];

$select_training_datas = 
"SELECT `Id` FROM `training` WHERE `Account_id` = '$acc_id' ORDER BY `training`.`Create_date` ASC LIMIT 1;";

$find_training_datas = mysqli_query($conn, $select_training_datas);
$row_nums = mysqli_num_rows($find_training_datas);
$consult_datas = mysqli_fetch_row($find_training_datas);

if($row_nums > 0)
{
    $first_insert = 0;
}
else
{
    $first_insert = 1;
}

$select_id_num = "SELECT MAX(Id) FROM `training` ORDER BY `training`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $training_id = (int)$id_num[0] + 1;
}
else
{
    $training_id = 1;
}

// 上傳報表路徑
@$file_dir = "../training/";
@$file_name = "";
@$file = "";

$file_0_arr = array();
$file_1_arr = array();

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["Upload_name"]))
{
    for ($a = 0; $a < count($_FILES["Upload_name"]["name"]); $a++){
        @$file_name = $_FILES["Upload_name"]["name"][$a];
        @$file = "../training/" . $_FILES["Upload_name"]["name"][$a];
    
        if ($_FILES["Upload_name"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["Upload_name"]["tmp_name"][$a],
                "../training/" . $_FILES["Upload_name"]["name"][$a]
            );
        }
        array_push($file_0_arr, $file_name);
        array_push($file_1_arr, $file);
    }
    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);

}

$sql = "INSERT INTO `training` (`Id`, `Account_id`, `Resume_id`, `Name`, 
`Training_date`, `Training_start_time`, `Training_end_time`, 
`Training_name`, `Hours`, `Place`, `Remark`, `First_insert`, 
`Upload_path`, `Upload_name`,`Create_date`,`Create_name`) VALUES
('$training_id', '$acc_id', '$resume_id', '$user', 
'$Training_date', '$Training_start_time', '$Training_end_time', 
'$Training_name', '$Hours', '$Place', '$Remark', '$first_insert',
'$file_1_arr', '$file_0_arr', Now(), '$user');";

if (mysqli_query($conn, $sql)) {
    echo true;
} else {
    echo false;
}

mysqli_close($conn);
