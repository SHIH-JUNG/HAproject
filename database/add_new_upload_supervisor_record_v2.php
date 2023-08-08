<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$upload_content = json_encode($_REQUEST['upload_content'],JSON_UNESCAPED_UNICODE);
@$year = $_REQUEST['year'];

@$title = $_REQUEST['title'];
@$rec_type = $_REQUEST['rec_type'];

@$signer = $_REQUEST['signer'];
@$rec_date_time = $_REQUEST['rec_date_time'];

@$Director = $_REQUEST['Director'];
@$Supervise = $_REQUEST['Supervise'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `supervisor_record_v2` ORDER BY `supervisor_record_v2`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $sr_id = (int)$id_num[0] + 1;
}
else
{
    $sr_id = 0;
}

$sign_state = $Director . "未簽核" . "、" . $Supervise . "未簽核";

$url = 'supervisor_record_detail.php?year='.$year.'&id='.$sr_id.'&sr_id='.$sr_id.'&rec_type='.$rec_type .'';

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

// 上傳報表路徑
@$file_dir = "../supervisor_record/" . $year . "data/upload/";

$file_0 = "";
$file_1 = "";

$file_0_arr = array();
$file_1_arr = array();

$sql = "";

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

if (isset($_FILES["agenda_files"]))
{
    @$file_0_date = date("Y-m-d");

    for ($a = 0; $a < count($_FILES["agenda_files"]["name"]); $a++)
    {
        @$file_0 = $file_dir .$_FILES["agenda_files"]["name"][$a];
    
        if ($_FILES["agenda_files"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["agenda_files"]["tmp_name"][$a],
                $file_0
            );
        }

        array_push($file_0_arr, $file_0);
    }

    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
}

if(empty($file_0_arr))
{
    $file_0_arr = implode($file_0_arr);
}


if (isset($_FILES["rec_files"]))
{
    @$file_1_date = date("Y-m-d");

    for ($a = 0; $a < count($_FILES["rec_files"]["name"]); $a++)
    {
        @$file_1 = $file_dir .$_FILES["rec_files"]["name"][$a];
    
        if ($_FILES["rec_files"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["rec_files"]["tmp_name"][$a],
                $file_1
            );
        }

        array_push($file_1_arr, $file_1);
    }

    $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
}

if(empty($file_1_arr))
{
    $file_1_arr = implode($file_1_arr);
}

$sql = "INSERT INTO `supervisor_record_v2` (`Id`, `Year`, `upload_content`, `Agenda_file_path`, `Rec_file_path`, `Create_date`, `Create_name`, `Director`, `Supervise`) VALUES 
($sr_id, '$year', '$upload_content', '$file_0_arr','$file_1_arr', NOW(), '$user', '$Director', '$Supervise');";

// $sql .= "INSERT INTO `calendar` (`title`,`description`,`start`, `end`, `publisher`) VALUES ('$title','$url','$start_datetime', '$end_datetime', '$user')";
$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$sr_id', '$title','$url','$rec_date_time', '$user', '$signer', '$sign_state', 'supervisor_record', Now(), '$user')";

if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}



mysqli_close($conn);
?>