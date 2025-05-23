<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$Account = $_SESSION['Account'];
@$user_info_id = $_SESSION['acc_id'];
@$Name = $_SESSION["name"];
// @$Password = $_REQUEST['Password'];
// @$Email = $_REQUEST['Email'];

@$Seniority = $_REQUEST['Seniority'];
@$Annual_hours = $_REQUEST['Annual_hours'];
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
    $resume_seq_id = 1;
}

$_SESSION['resume_id'] = $resume_seq_id;

$select_email_num2 = "SELECT `Email` FROM `user_info` WHERE `Id` = '$user_info_id';";

$find_email_num2 = mysqli_query($conn,$select_email_num2);
$row_nums_2 = mysqli_num_rows($find_email_num2);
$email_num2 = mysqli_fetch_row($find_email_num2);

if($row_nums_2>0)
{
    $Email = $email_num2[0];
}


// $select_id_num2 = "SELECT MAX(Id) FROM `user_info` ORDER BY `user_info`.`Create_date` ASC LIMIT 1;";

// $find_id_num2 = mysqli_query($conn,$select_id_num2);
// $id_num2 = mysqli_fetch_row($find_id_num2);

// if($id_num2[0]>0)
// {
//     $user_info_id = (int)$id_num2[0] + 1;
// }
// else
// {
//     $user_info_id = 1;
// }


// 員工建立檔案路徑
@$file_dir = "../resume/resume_user".$resume_seq_id."_".$Account."/resume_datas/";

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

    @$file_0_date = date("Y-m-d");
    $file_0_arr = array();

    for ($a = 0; $a < count($_FILES["resume_files0"]["name"]); $a++)
    {
        @$file_0 = "../resume/resume_user".$resume_seq_id."_".$Account."/resume_datas/".$_FILES["resume_files0"]["name"][$a];
    
        if ($_FILES["resume_files0"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["resume_files0"]["tmp_name"][$a],
                $file_0
            );
        }

        array_push($file_0_arr, $file_0);
    }

    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    

    @$file_sql_0 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($resume_seq_id, '$Name', 'file_A', '$File_year'
            , '$file_0_arr', '$Remark', '$file_0_date', '$user');";
}

// 判斷保密契約上傳 類型 file_C
if (isset($_FILES["resume_files1"]))
{
    @$file_1 = "../resume/resume_user".$resume_seq_id."_".$Account."/resume_datas/" . $_FILES["resume_files1"]["name"];
    
    @$file_1_date = date("Y-m-d");

    if ($_FILES["resume_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files1"]["tmp_name"],
            $file_1
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
    @$file_2 = "../resume/resume_user".$resume_seq_id."_".$Account."/resume_datas/" . $_FILES["resume_files2"]["name"];
    
    @$file_2_date = date("Y-m-d");
    
    if ($_FILES["resume_files2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files2"]["tmp_name"],
            $file_2
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

$Remark_seniority = "員工建檔新增預設補修時數：".$Annual_hours."小時。";


$sql = "INSERT INTO `resume` (`Id`, `Account_id`, `Account`, `Name`, `Email`, `Entry_date`
, `On_or_off`
, `Seniority`, `Annual_hours`
, `Resume_datas_date`
, `NDA_file_date`, `Diploma_date`
, `Remark`, `Create_date`, `Create_name`) VALUES 
    ($resume_seq_id, $user_info_id, '$Account', '$Name', '$Email', '$Entry_date', '$On_or_off'
    , '$Seniority', '$Annual_hours'
    , '$file_0_date', '$file_1_date', '$file_2_date', '$Remark', NOW(), '$user');";

$sql.=$file_sqls;

// $sql .= "INSERT INTO `user_info` (`Id`, `Resume_id`, `Account`, `Password`, `Name`
// , `Authority`, `Create_date`, `Create_name`) VALUES 
//     ($user_info_id, $resume_seq_id, '$Account', '$Password', '$Name'
//     , 1, NOW(), '$user');";

$sql .= "UPDATE `user_info` SET `Resume_id` = '$resume_seq_id', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id`='$user_info_id';";


$sql .= "INSERT INTO `resume_seniority` (`Resume_id`, `Seniority_num`, `Rec_year`
, `Type`, `Annual_default`, `Remark`, `Create_date`, `Create_name`) VALUES 
    ($resume_seq_id, '$Seniority', '$File_year'
    , 'Annual_default', '$Annual_hours', '$Remark_seniority'
    , NOW(), '$user');";



if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>