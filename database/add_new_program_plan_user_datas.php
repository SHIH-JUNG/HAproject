<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$Date = $_REQUEST['Date'];
@$Plan_name = $_REQUEST['Plan_name'];
@$File_year = $_REQUEST['File_year'];


$user = $_SESSION['name'];

// 查詢
$select_id_num = "SELECT MAX(Id) FROM `program_plan` ORDER BY `program_plan`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $program_plan_seq_id = (int)$id_num[0] + 1;
}
else
{
    $program_plan_seq_id = 1;
}


// 員工建立檔案路徑
@$file_dir = "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/";

$file_0 = "";
$file_0_date = NULL;
$file_1 = "";
$file_1_date = NULL;
$file_2 = "";
$file_2_date = NULL;
$file_3 = "";
$file_3_date = NULL;

$file_sql_0 = "";
$file_sql_1 = "";
$file_sql_2 = "";
$file_sql_3 = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷方案計畫檔案上傳 類型 file_A
if (isset($_FILES["program_plan_files0"]))
{
    @$file_0 = "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files0"]["name"];

    @$file_0_date = date("Y-m-d");

    if ($_FILES["program_plan_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files0"]["tmp_name"],
            "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files0"]["name"]
        );
    }

    @$file_sql_0 = "INSERT INTO `program_plan_form` (`Program_plan_id`, `Program_plan_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($program_plan_seq_id, '$Plan_name', 'file_A', '$File_year'
            , '$file_0', '$file_0_date', '$user');";
}

// 判斷期中報告上傳 類型 file_B
if (isset($_FILES["program_plan_files1"]))
{
    @$file_1 = "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files1"]["name"];
    
    @$file_1_date = date("Y-m-d");

    if ($_FILES["program_plan_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files1"]["tmp_name"],
            "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files1"]["name"]
        );
    }

    @$file_sql_1 = "INSERT INTO `program_plan_form` (`Program_plan_id`, `Program_plan_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($program_plan_seq_id, '$Plan_name', 'file_B', '$File_year'
            , '$file_1', '$file_1_date', '$user');";
}

// 判斷成果報告上傳 類型 file_C
if (isset($_FILES["program_plan_files2"]))
{
    @$file_2 = "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files2"]["name"];
    
    @$file_2_date = date("Y-m-d");
    
    if ($_FILES["program_plan_files2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files2"]["tmp_name"],
            "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files2"]["name"]
        );
    }

    $file_sql_2 = "INSERT INTO `program_plan_form` (`Program_plan_id`, `Program_plan_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($program_plan_seq_id, '$Plan_name', 'file_C', '$File_year'
            , '$file_2', '$file_2_date', '$user');";
}

// 判斷其他檔案上傳 類型 file_D
if (isset($_FILES["program_plan_files3"]))
{
    @$file_3 = "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files3"]["name"];
    
    @$file_3_date = date("Y-m-d");
    
    if ($_FILES["program_plan_files3"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files3"]["tmp_name"],
            "../program_plan/program_plan_user".$program_plan_seq_id."_".$Plan_name."/program_plan_datas/" . $_FILES["program_plan_files3"]["name"]
        );
    }

    $file_sql_3 = "INSERT INTO `program_plan_form` (`Program_plan_id`, `Program_plan_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($program_plan_seq_id, '$Plan_name', 'file_D', '$File_year'
            , '$file_3', '$file_3_date', '$user');";
}

$file_sqls = $file_sql_0.$file_sql_1.$file_sql_2.$file_sql_3;




$sql = "INSERT INTO `program_plan` (`Id`, `Date`, `Plan_name`
, `Proposal_date`, `Interim_date`, `Achieve_date`
, `Other_date`, `Create_date`, `Create_name`) VALUES 
    ($program_plan_seq_id, '$Date', '$Plan_name'
    , '$file_0_date', '$file_1_date', '$file_2_date', '$file_3_date', NOW(), '$user');";

$sql.=$file_sqls;


if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>