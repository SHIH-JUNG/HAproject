<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$Account = $_REQUEST['Account'];
@$Name = $_REQUEST['Name'];
@$Password = $_REQUEST['Password'];
@$Email = $_REQUEST['Email'];
@$Entry_date = $_REQUEST['Entry_date'];
@$On_or_off = $_REQUEST['On_or_off'];
@$Remark = $_REQUEST['Remark'];
@$File_year = $_REQUEST['File_year'];


$user = $_SESSION['name'];

// 查詢
$select_id_num = "SELECT MAX(Id) FROM `resume` ORDER BY `resume`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $resume_seq_id = (int)$id_num[0] + 1;
}
else
{
    $resume_seq_id = 0;
}

$select_id_num2 = "SELECT MAX(Id) FROM `user_info` ORDER BY `user_info`.`Create_date` ASC LIMIT 1;";

$find_id_num2 = mysqli_query($conn,$select_id_num2);
$id_num2 = mysqli_fetch_row($find_id_num2);

if($id_num2[0]>0)
{
    $user_info_id = (int)$id_num2[0] + 1;
}
else
{
    $user_info_id = 0;
}


// 員工建立檔案路徑
@$file_dir = "../".$Name."_".$Account."_".$Entry_date."/resume_datas/";

$file_0 = "";
$file_0_date = NULL;
$file_1 = "";
$file_1_date = NULL;
$file_2 = "";
$file_2_date = NULL;

$file_sql_0 = "";
$file_sql_1 = "";
$file_sql_2 = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷履歷表檔案上傳 類型 file_A
if (isset($_FILES["resume_files0"]))
{
    @$file_0 = "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files0"]["name"];

    @$file_0_date = date("Y-m-d");

    if ($_FILES["resume_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files0"]["tmp_name"],
            "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files0"]["name"]
        );
    }

    @$file_sql_0 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($resume_seq_id, '$Name', 'file_A', '$File_year'
            , '$file_0', '$Remark', '$file_0_date', '$user');";
}
// 判斷保密契約上傳 類型 file_C
if (isset($_FILES["resume_files1"]))
{
    @$file_1 = "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files1"]["name"];
    
    @$file_1_dat = date("Y-m-d");

    if ($_FILES["resume_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files1"]["tmp_name"],
            "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files1"]["name"]
        );
    }

    @$file_sql_1 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($resume_seq_id, '$Name', 'file_C', '$File_year'
            , '$file_1', '$Remark', '$file_1_date', '$user');";
}
// 判斷畢業證書上傳 類型 file_D
if (isset($_FILES["resume_files2"]))
{
    @$file_2 = "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files2"]["name"];
    
    @$file_2_date = date("Y-m-d");
    
    if ($_FILES["resume_files2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files2"]["tmp_name"],
            "../".$Name."_".$Account."_".$Entry_date."/resume_datas/" . $_FILES["resume_files2"]["name"]
        );
    }

    $file_sql_2 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($resume_seq_id, '$Name', 'file_D', '$File_year'
            , '$file_2', '$Remark', '$file_2_date', '$user');";
}

$file_sqls = $file_sql_0.$file_sql_1.$file_sql_2;




$sql = "INSERT INTO `resume` (`Id`, `Account_id`, `Account`, `Name`, `Entry_date`
, `On_or_off`
, `Resume_datas_date`, `NDA_file_date`, `Diploma_date`
, `Remark`, `Create_date`, `Create_name`) VALUES 
    ($resume_seq_id, $user_info_id, '$Account', '$Name', '$Entry_date', '$On_or_off'
    , '$file_0_date', '$file_1_date', '$file_2_date', '$Remark', NOW(), '$user');";

$sql.=$file_sqls;

$sql .= "INSERT INTO `user_info` (`Id`, `Resume_id`, `Account`, `Password`, `Name`
, `Authority`, `Create_date`, `Create_name`) VALUES 
    ($user_info_id, $resume_seq_id, '$Account', '$Password', '$Name'
    , 1, NOW(), '$user');";



if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>