<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Program_id = $_REQUEST['Program_id'];
@$Date = $_REQUEST['Date'];
@$Plan_name = $_REQUEST['Plan_name'];
@$Plan_from = $_REQUEST['Plan_from'];
@$Fund = $_REQUEST['Fund'];
@$File_year = $_REQUEST['File_year'];

@$Is_update_hours_sql = "";


$user = $_SESSION['name'];

// @$File_name = json_decode($_REQUEST['File_name'], true);
// @$File_name  = $File_name[0];
// @$count_type = $File_name["name"];


// 員工建立檔案路徑
@$file_dir = "../program_plan/program_plan_user".$Program_id."_".$Plan_name."/program_plan_datas/";

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

$file_sqls_date_update = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷履歷表檔案上傳 類型 file_A
if (isset($_FILES["program_plan_files0"]))
{
    @$file_0 = $file_dir . $_FILES["program_plan_files0"]["name"];
    
    @$file_0_date = date("Y-m-d");
    @$file_0_year = date("Y") - 1911;

    if ($_FILES["program_plan_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files0"]["tmp_name"],
            $file_0
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `program_plan_form` WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_A' AND  `File_year` = '$File_year' ORDER BY `program_plan_form`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_0 = "UPDATE `program_plan_form` SET `File_year` = '$file_0_year',
        `File_path` = '$file_0',
        `Update_date` = '$file_0_date', `Update_name` = '$user'
        WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_A';";
    }
    else
    {
        @$file_sql_0 = "INSERT INTO `program_plan_form` (`Program_id`, `Name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($Program_id, '$Name', 'file_A', '$file_0_year'
            , '$file_0', '$file_0_date' , '$user');";
    }

    $file_sqls_date_update .= "`Proposal_date` = '$file_0_date',";

}

// 判斷保密契約上傳 類型 file_B
if (isset($_FILES["program_plan_files1"]))
{
    @$file_1 = $file_dir . $_FILES["program_plan_files1"]["name"];
    
    @$file_1_date = date("Y-m-d");
    @$file_1_year = date("Y") - 1911;

    if ($_FILES["program_plan_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files1"]["tmp_name"],
            $file_1
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `program_plan_form` WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_B' AND  `File_year` = '$File_year' ORDER BY `program_plan_form`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_1 = "UPDATE `program_plan_form` SET `File_year` = '$file_1_year',
        `File_path` = '$file_1',
        `Update_date` = '$file_1_date', `Update_name` = '$user'
        WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_B';";
    }
    else
    {
        @$file_sql_1 = "INSERT INTO `program_plan_form` (`Program_id`, `Name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($Program_id, '$Name', 'file_B', '$file_1_year'
            , '$file_1', '$file_1_date' , '$user');";
    }

    $file_sqls_date_update .= "`Interim_date` = '$file_1_date',";

}

// 判斷畢業證書上傳 類型 file_C
if (isset($_FILES["program_plan_files2"]))
{
    @$file_2 = $file_dir . $_FILES["program_plan_files2"]["name"];
    
    @$file_2_date = date("Y-m-d");
    @$file_2_year = date("Y") - 1911;
    
    if ($_FILES["program_plan_files2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files2"]["tmp_name"],
            $file_2
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `program_plan_form` WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_C' AND  `File_year` = '$File_year' ORDER BY `program_plan_form`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_2 = "UPDATE `program_plan_form` SET `File_year` = '$file_2_year',
        `File_path` = '$file_2',
        `Update_date` = '$file_2_date', `Update_name` = '$user'
        WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_C';";
    }
    else
    {
        @$file_sql_2 = "INSERT INTO `program_plan_form` (`Program_id`, `Name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($Program_id, '$Name', 'file_C', '$file_2_year'
            , '$file_2', '$file_2_date' , '$user');";
    }

    $file_sqls_date_update .= "`Achieve_date` = '$file_2_date',";
}

// 判斷畢業證書上傳 類型 file_D
if (isset($_FILES["program_plan_files3"]))
{
    @$file_3 = $file_dir . $_FILES["program_plan_files3"]["name"];
    
    @$file_3_date = date("Y-m-d");
    @$file_3_year = date("Y") - 1911;
    
    if ($_FILES["program_plan_files3"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["program_plan_files3"]["tmp_name"],
            $file_3
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `program_plan_form` WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_D' AND  `File_year` = '$File_year' ORDER BY `program_plan_form`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_3 = "UPDATE `program_plan_form` SET `File_year` = '$file_3_year',
        `File_path` = '$file_3',
        `Update_date` = '$file_3_date', `Update_name` = '$user'
        WHERE `Program_id` = '$Program_id' AND `File_type` = 'file_D';";
    }
    else
    {
        @$file_sql_3 = "INSERT INTO `program_plan_form` (`Program_id`, `Name`
            , `File_type`, `File_year`
            , `File_path`
            , `Upload_date`, `Upload_name`) VALUES 
            ($Program_id, '$Name', 'file_D', '$file_3_year'
            , '$file_3', '$file_3_date' , '$user');";
    }

    $file_sqls_date_update .= "`Other_date` = '$file_3_date',";
}

$file_sqls = $file_sql_0.$file_sql_1.$file_sql_2.$file_sql_3;

// $Remark_seniority = "員工建檔修改預設補修時數：".$Annual_hours."小時。";



$sql = "UPDATE `program_plan` SET `Date`='$Date', `Plan_name`='$Plan_name', 
`Plan_from` = '$Plan_from', `Fund`= '$Fund',".$file_sqls_date_update." `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id` = '$Program_id';";

// $sql .= "UPDATE `user_info` SET `Name` = '$Name', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Program_id` = '$Program_id';";

// $sql .= "UPDATE `resume_seniority` SET `Seniority_num`= '$Seniority', `Rec_year`= '$File_year', `Annual_default`= '$Annual_hours', `Remark`= '$Remark_seniority', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Program_id` = '$Program_id' AND `Type` = 'Annual_default';";

$sql.=$file_sqls;


if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>