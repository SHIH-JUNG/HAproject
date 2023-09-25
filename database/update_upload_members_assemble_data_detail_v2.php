<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$year = $_REQUEST['year'];
$ma_id = $_REQUEST['ma_id'];
@$rec_type = $_REQUEST['rec_type'];

@$upload_content = json_encode($_REQUEST['upload_content'],JSON_UNESCAPED_UNICODE);


// @$Director = $_REQUEST['Director'];
// @$Supervise = $_REQUEST['Supervise'];

@$title = $_REQUEST['title'];
@$signer = $_REQUEST['signer'];
@$rec_date_time = $_REQUEST['rec_date_time'];

$user = $_SESSION['name'];

$dirname_tamp = $year . "_" . $ma_id;

$url = 'members_assemble_detail_v2.php?year='.$year.'&id='.$ma_id.'&ma_id='.$ma_id.'&rec_type='.$rec_type .'';


// 上傳報表路徑
@$file_dir = "../members_assemble/" . $dirname_tamp . "_data/upload/";

$file_0 = "";
$file_1 = "";

$file_0_arr = array();
$file_1_arr = array();

$sqlUpdate = "";

$file_0_sql = "";
$file_1_sql = "";

$file_sql = "";


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

    // $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);

    // 查詢 原本的`File_path`
    $select_0_file_num = "SELECT `Agenda_file_path` FROM `members_assemble_v2` WHERE `Id` = '$ma_id' ORDER BY `members_assemble_v2`.`Create_date` ASC;";

    $find_0_file_num = mysqli_query($conn,$select_0_file_num);
    $row_nums0 = mysqli_num_rows($find_0_file_num);
    $f0_file_num = mysqli_fetch_row($find_0_file_num);

    // var_dump($f0_file_num);
    
    if($row_nums0 > 0 && $f0_file_num[0]!="")
    {
        $file_0_arr = json_encode(array_merge(json_decode($f0_file_num[0], true),$file_0_arr),JSON_UNESCAPED_UNICODE);

        $file_0_arr = json_decode($file_0_arr, true);

        $file_0_arr = array_values(array_unique($file_0_arr,SORT_REGULAR));

        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }

    if(empty($file_0_arr))
    {
        $file_0_sql = ", `Agenda_file_path`= ''";
    }
    else
    {
        $file_0_sql = ", `Agenda_file_path`= '$file_0_arr'";
    }

    // 查詢 會議上傳提醒
    $select_RW_num = "SELECT `Id`, `Record_id`, `R_or_G`, `State` FROM `record_warn` WHERE `Record_id` = '$ma_id' AND `Rtype_name` = 'members_assemble' AND `R_or_G` = 'G';";

    $find_RW_num = mysqli_query($conn, $select_RW_num);
    $row_nums_RW = mysqli_num_rows($find_RW_num);
    $RW_num = mysqli_fetch_row($find_RW_num);

    if($row_nums_RW > 0)
    {
        $RW_sql = "UPDATE `record_warn` SET `State` = '已上傳', `Update_date` = NOW(), `Update_name`= '$user' WHERE `Id` = '$RW_num[0]' LIMIT 1;";
    }
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

    // 查詢 原本的`File_path`
    $select_1_file_num = "SELECT `Rec_file_path` FROM `members_assemble_v2` WHERE `Id` = '$ma_id' ORDER BY `members_assemble_v2`.`Create_date` ASC;";

    $find_1_file_num = mysqli_query($conn,$select_1_file_num);
    $row_nums1 = mysqli_num_rows($find_1_file_num);
    $f1_file_num = mysqli_fetch_row($find_1_file_num);

    // var_dump($f1_file_num);
    
    if($row_nums1 > 0 && $f1_file_num[0]!="")
    {
        $file_1_arr = json_encode(array_merge(json_decode($f1_file_num[0], true),$file_1_arr),JSON_UNESCAPED_UNICODE);

        $file_1_arr = json_decode($file_1_arr, true);

        $file_1_arr = array_values(array_unique($file_1_arr,SORT_REGULAR));

        $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
    }

    if(empty($file_1_arr))
    {
        $file_1_sql = ", `Rec_file_path`= ''";
    }
    else
    {
        $file_1_sql = ", `Rec_file_path`= '$file_1_arr'";
    }

    $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);

    // 查詢 會議上傳提醒
    $select_RW_num = "SELECT `Id`, `Record_id`, `R_or_G`, `State` FROM `record_warn` WHERE `Record_id` = '$ma_id' AND `Rtype_name` = 'members_assemble' AND `R_or_G` = 'R';";

    $find_RW_num = mysqli_query($conn, $select_RW_num);
    $row_nums_RW = mysqli_num_rows($find_RW_num);
    $RW_num = mysqli_fetch_row($find_RW_num);

    if($row_nums_RW > 0)
    {
        $RW_sql = "UPDATE `record_warn` SET `State` = '已上傳', `Update_date` = NOW(), `Update_name`= '$user' WHERE `Id` = '$RW_num[0]' LIMIT 1;";
    }
}

if(empty($file_1_arr))
{
    $file_1_arr = implode($file_1_arr);
}

$file_sql = $file_0_sql . $file_1_sql;


$sqlUpdate = "UPDATE `members_assemble_v2` SET `upload_content` = '$upload_content' ". $file_sql  ."
, `Update_date` = NOW(), `Update_name`= '$user'
        WHERE `Id` = '$ma_id' LIMIT 1;";

@$sqlUpdate .= $RW_sql;

// @$sqlUpdate .= "UPDATE `signature_notice` SET `Title` = '$title', `Url` = '$url', `Timestamp` = '$rec_date_time', `Assign` = '$assign', `Signer`='$signer', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$ma_id' AND `Type` = 'members_assemble' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

if(mysqli_multi_query($conn,$sqlUpdate)){
    echo true;
}else{
    echo "{$sqlUpdate} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}



mysqli_close($conn);
?>