<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$vom_id = $_REQUEST['vom_id'];
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
@$Review_suggest = $_REQUEST['Review_suggest'];
@$Extempore_motion = $_REQUEST['Extempore_motion'];
@$Next_meeting_date = $_REQUEST['Next_meeting_date'];
@$Attendees_seq_contents = $_REQUEST['Attendees_seq_contents'];

@$signer = $_REQUEST['signer'];
@$title = $_REQUEST['title'];
@$rec_date_time = $_REQUEST['rec_date_time'];


$user = $_SESSION['name'];


$url = 'volunteer_meeting_detail.php?vom_id='.$vom_id;

// @$signed_timestamp = $_REQUEST['signed_timestamp'];

// @$update_signer_sql = "";

// if($signed_timestamp!="0000-00-00 00:00:00")
// {
//     $update_signer_sql = ", `Supervise` = '$signer'";
// }

// 上傳報表路徑
@$file_dir = "../volunteer_meeting/";

$file_0 = "";
$file_1 = "";
$file_2 = "";

$file_name_0 = "";
$file_name_1 = "";
$file_name_2 = "";


$sqlUpdate = "";

$file_0_sql = "";
$file_1_sql = "";
$file_2_sql = "";

$file_2_arr = array();

$file_sql = "";

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
            $file_0
        );
    }

    $file_0_sql = ", `Signin_file_path`= '$file_0'";
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
            $file_1
        );
    }

    $file_1_sql = ", `Signout_file_path`= '$file_1'";
}

if (isset($_FILES["meeting_files2"]))
{
    @$file_2_date = date("Y-m-d");
    @$file_name_2 = $_FILES["meeting_files2"]["name"];

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

    // 查詢 原本的`File_path`
    $select_2_file_num = "SELECT `Meeting_file_path` FROM `volunteer_meeting` WHERE `Id` = '$vom_id' ORDER BY `volunteer_meeting`.`Create_date` ASC;";

    $find_2_file_num = mysqli_query($conn,$select_2_file_num);
    $row_nums = mysqli_num_rows($find_2_file_num);
    $f2_file_num = mysqli_fetch_row($find_2_file_num);

    // var_dump($f2_file_num);
    
    if($row_nums > 0 && $f2_file_num[0]!="")
    {
        $file_2_arr = json_encode(array_merge(json_decode($f2_file_num[0], true),$file_2_arr),JSON_UNESCAPED_UNICODE);

        $file_2_arr = json_decode($file_2_arr, true);

        $file_2_arr = array_values(array_unique($file_2_arr,SORT_REGULAR));

        $file_2_arr = json_encode($file_2_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_2_arr = json_encode($file_2_arr,JSON_UNESCAPED_UNICODE);
    }

    if(empty($file_2_arr))
    {
        $file_2_sql = ", `Meeting_file_path`= ''";
    }
    else
    {
        $file_2_sql = ", `Meeting_file_path`= '$file_2_arr'";
    }
}

$file_sql = $file_0_sql . $file_1_sql. $file_2_sql;


$sqlUpdate = "UPDATE `volunteer_meeting` SET `Title_name` = '$Title_name'
, `Meeting_date`= '$Meeting_date', `Meeting_time_start`= '$Meeting_time_start', `Meeting_time_end`= '$Meeting_time_end', `Meeting_place`= '$Meeting_place'
, `Expected_attendees`= '$Expected_attendees', `Attendees_seq_contents`= '$Attendees_seq_contents'
, `Actual_attendence`= '$Actual_attendence', `Absence`= '$Absence'
, `Agenda_contents`= '$Agenda_contents', `Proposal_contents`= '$Proposal_contents'
, `Review_suggest`= '$Review_suggest', `Extempore_motion`= '$Extempore_motion'
, `Next_meeting_date`= '$Next_meeting_date' ". $file_sql  ."
, `Update_date` = NOW(), `Update_name`= '$user'
        WHERE `Id` = '$vom_id' LIMIT 1;";

// @$sqlUpdate .= "UPDATE `signature_notice` SET `Title` = '$title', `Url` = '$url', `Timestamp` = '$rec_date_time', `Assign` = '$assign', `Signer`='$signer', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$bs_id' AND `Type` = 'board_supervisor' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";



if (mysqli_multi_query($conn, $sqlUpdate)) {
    echo true;
    // echo $sqlUpdate;
} else {
    echo "{$sqlUpdate} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>