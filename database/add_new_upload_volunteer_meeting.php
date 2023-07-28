<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$year = $_REQUEST['year'];
@$Title_name = $_REQUEST['Title_name'];
@$Meeting_date = $_REQUEST['Meeting_date'];
@$Meeting_time_start = $_REQUEST['Meeting_time_start'];
@$Meeting_time_end = $_REQUEST['Meeting_time_end'];
@$Meeting_place = $_REQUEST['Meeting_place'];
@$Expected_attendees = $_REQUEST['Expected_attendees'];
@$Actual_attendence = $_REQUEST['Actual_attendence'];
@$Absence = $_REQUEST['Absence'];

@$Agenda_contents = $_REQUEST['Agenda_contents'];
@$Proposal_contents = json_encode($_REQUEST['Proposal_contents'],JSON_UNESCAPED_UNICODE);
@$Resolution_contents = json_encode($_REQUEST['Resolution_contents'],JSON_UNESCAPED_UNICODE);

@$Review_suggest = $_REQUEST['Review_suggest'];
@$Extempore_motion = $_REQUEST['Extempore_motion'];
@$Next_meeting_date = $_REQUEST['Next_meeting_date'];
@$Attendees_seq_contents = $_REQUEST['Attendees_seq_contents'];

@$signer = $_REQUEST['signer'];
@$title = $_REQUEST['title'];
@$rec_date_time = $_REQUEST['rec_date_time'];


$user = $_SESSION['name'];


$select_id_num = "SELECT MAX(Id) FROM `volunteer_meeting` ORDER BY `volunteer_meeting`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $vom_id = (int)$id_num[0] + 1;
}
else
{
    $vom_id = 0;
}

$url = 'volunteer_meeting_detail.php?vom_id='.$vom_id;

$start_datetime = date("Y-m-d H:s");
$end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));


// 上傳報表路徑
@$file_dir = "../volunteer_meeting/";

$file_0 = "";
$file_1 = "";
$file_2 = "";


$file_name_0 = "";
$file_name_1 = "";
$file_name_2 = "";

$file_2_arr = array();

$sql = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷檔案上傳
if (isset($_FILES["meeting_files0"]))
{
    @$file_name_0 = $_FILES["meeting_files0"]["name"];
    @$file_0 = $file_dir . $_FILES["meeting_files0"]["name"];

    

    if ($_FILES["meeting_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["meeting_files0"]["tmp_name"],
            $file_dir . $_FILES["meeting_files0"]["name"]
        );
    }

}

if (isset($_FILES["meeting_files1"]))
{
    @$file_name_1 = $_FILES["meeting_files1"]["name"];
    @$file_1 = $file_dir . $_FILES["meeting_files1"]["name"];

    

    if ($_FILES["meeting_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["meeting_files1"]["tmp_name"],
            $file_dir . $_FILES["meeting_files1"]["name"]
        );
    }

}

if (isset($_FILES["meeting_files2"]))
{
    @$file_2_date = date("Y-m-d");

    for ($a = 0; $a < count($_FILES["meeting_files2"]["name"]); $a++)
    {
        @$file_2 = $file_dir .$_FILES["meeting_files2"]["name"][$a];
    
        if ($_FILES["meeting_files2"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["meeting_files2"]["tmp_name"][$a],
                $file_2
            );
        }

        array_push($file_2_arr, $file_2);
    }

    $file_2_arr = json_encode($file_2_arr,JSON_UNESCAPED_UNICODE);
}

if(empty($file_2_arr))
{
    $file_2_arr = implode($file_2_arr);
}

$sql = "INSERT INTO `volunteer_meeting` (`Id`, `Title_name` ,`Meeting_date`, `Meeting_time_start`, `Meeting_time_end`, `Meeting_place`
, `Expected_attendees`, `Attendees_seq_contents`, `Actual_attendence`, `Absence`
, `Agenda_contents`, `Proposal_contents`, `Resolution_contents`
, `Review_suggest`, `Extempore_motion`
, `Next_meeting_date`
, `Signin_file_path`, `Signout_file_path`, `Meeting_file_path`
, `Create_date`, `Create_name`) VALUES 
($vom_id ,'$Title_name', '$Meeting_date', '$Meeting_time_start', '$Meeting_time_end', '$Meeting_place'
, '$Expected_attendees', '$Attendees_seq_contents', '$Actual_attendence', '$Absence'
, '$Agenda_contents', '$Proposal_contents', '$Resolution_contents'
, '$Review_suggest', '$Extempore_motion'
, '$Next_meeting_date'
, '$file_0', '$file_1', '$file_2_arr'
, NOW(), '$user');";


// @$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
// VALUES ($vom_id, '$title', '$url', '$rec_date_time', '$user', '$signer', '未簽核', 'volunteer_meeting', Now(), '$user');";


if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>