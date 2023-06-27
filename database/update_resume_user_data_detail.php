<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Resume_id = $_REQUEST['Resume_id'];
@$Account = $_REQUEST['Account'];
@$Name = $_REQUEST['Name'];
@$Entry_date = $_REQUEST['Entry_date'];
@$Resigned_date = $_REQUEST['Resigned_date'];
@$On_or_off = $_REQUEST['On_or_off'];

@$Seniority = $_REQUEST['Seniority'];
@$Annual_hours = $_REQUEST['Annual_hours'];

@$Remark = $_REQUEST['Remark'];
@$File_year = $_REQUEST['File_year'];


$user = $_SESSION['name'];

// @$File_name = json_decode($_REQUEST['File_name'], true);
// @$File_name  = $File_name[0];
// @$count_type = $File_name["name"];


// 員工建立檔案路徑
@$file_dir = "../resume/resume_user".$Resume_id."_".$Account."/resume_datas/";

$file_0 = "";
$file_0_date = NULL;
$file_1 = "";
$file_1_date = NULL;
$file_2 = "";
$file_2_date = NULL;

$file_sql_0 = "";
$file_sql_1 = "";
$file_sql_2 = "";

$file_sqls_date_update = "";


// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷履歷表檔案上傳 類型 file_A
if (isset($_FILES["resume_files0"]))
{
    @$file_0_date = date("Y-m-d");
    @$file_0_year = date("Y") - 1911;

    $file_0_arr = array();

    for ($a = 0; $a < count($_FILES["resume_files0"]["name"]); $a++)
    {
        @$file_0 = $file_dir . $_FILES["resume_files0"]["name"][$a];
    
        if ($_FILES["resume_files0"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["resume_files0"]["tmp_name"][$a],
                $file_0
            );
        }
        array_push($file_0_arr, $file_dir . $_FILES["resume_files0"]["name"][$a]);
    }

    // 查詢 原本的`File_path`
    $select_user_data_num = "SELECT `File_path` FROM `resume_forms` WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_A' AND  `File_year` = '$File_year' ORDER BY `resume_forms`.`Upload_date` ASC;";

    $find_user_data_num = mysqli_query($conn,$select_user_data_num);
    $row_nums = mysqli_num_rows($find_user_data_num);
    $user_data_num = mysqli_fetch_row($find_user_data_num);


    // $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);

    if($row_nums > 0)
    {
        $file_0_arr = json_encode(array_merge(json_decode($user_data_num[0], true),$file_0_arr),JSON_UNESCAPED_UNICODE);

        $file_0_arr = json_decode($file_0_arr, true);

        $file_0_arr = array_values(array_unique($file_0_arr,SORT_REGULAR));

        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `resume_forms` WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_A' AND  `File_year` = '$File_year' ORDER BY `resume_forms`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_0 = "UPDATE `resume_forms` SET `File_year` = '$file_0_year',
        `File_path` = '$file_0_arr',
        `Remark` = '$Remark', `Update_date` = '$file_0_date', `Update_name` = '$user'
        WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_A';";
    }
    else
    {
        @$file_sql_0 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($Resume_id, '$Name', 'file_A', '$file_0_year'
            , '$file_0_arr', '$Remark', '$file_0_date' , '$user');";
    }

    $file_sqls_date_update .= "`Resume_datas_date` = '$file_0_date',";

}
// 判斷保密契約上傳 類型 file_C
if (isset($_FILES["resume_files1"]))
{
    @$file_1 = $file_dir . $_FILES["resume_files1"]["name"];
    
    @$file_1_date = date("Y-m-d");
    @$file_1_year = date("Y") - 1911;

    if ($_FILES["resume_files1"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files1"]["tmp_name"],
            $file_1
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `resume_forms` WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_C' AND  `File_year` = '$File_year' ORDER BY `resume_forms`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_1 = "UPDATE `resume_forms` SET `File_year` = '$file_1_year',
        `File_path` = '$file_1',
        `Remark` = '$Remark', `Update_date` = '$file_1_date', `Update_name` = '$user'
        WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_C';";
    }
    else
    {
        @$file_sql_1 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($Resume_id, '$Name', 'file_C', '$file_1_year'
            , '$file_1', '$Remark', '$file_1_date' , '$user');";
    }

    $file_sqls_date_update .= "`NDA_file_date` = '$file_1_date',";

}
// 判斷畢業證書上傳 類型 file_D
if (isset($_FILES["resume_files2"]))
{
    @$file_2 = $file_dir . $_FILES["resume_files2"]["name"];
    
    @$file_2_date = date("Y-m-d");
    @$file_2_year = date("Y") - 1911;
    
    if ($_FILES["resume_files2"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["resume_files2"]["tmp_name"],
            $file_2
        );
    }

    // 查詢
    $select_id_num = "SELECT count(`Id`) FROM `resume_forms` WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_D' AND  `File_year` = '$File_year' ORDER BY `resume_forms`.`Upload_date` ASC;";

    $find_id_num = mysqli_query($conn,$select_id_num);
    $id_num = mysqli_fetch_row($find_id_num);

    if($id_num[0]>0)
    {
        @$file_sql_2 = "UPDATE `resume_forms` SET `File_year` = '$file_2_year',
        `File_path` = '$file_2',
        `Remark` = '$Remark', `Update_date` = '$file_2_date', `Update_name` = '$user'
        WHERE `Resume_id` = '$Resume_id' AND `File_type` = 'file_D';";
    }
    else
    {
        @$file_sql_2 = "INSERT INTO `resume_forms` (`Resume_id`, `Resume_name`
            , `File_type`, `File_year`
            , `File_path`
            , `Remark`, `Upload_date`, `Upload_name`) VALUES 
            ($Resume_id, '$Name', 'file_D', '$file_2_year'
            , '$file_2', '$Remark', '$file_2_date' , '$user');";
    }

    $file_sqls_date_update .= "`Diploma_date` = '$file_2_date',";
}

$file_sqls = $file_sql_0.$file_sql_1.$file_sql_2;

$Remark_seniority = "員工建檔修改預設補修時數：".$Annual_hours."小時。";



$sql = "UPDATE `resume` SET `Name` = '$Name', `Entry_date`='$Entry_date', `On_or_off`='$On_or_off', `Resigned_date` = '$Resigned_date', `Seniority`= '$Seniority', `Annual_hours`= '$Annual_hours',".$file_sqls_date_update." `Remark` = '$Remark', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Id` = '$Resume_id';";

$sql .= "UPDATE `user_info` SET `Name` = '$Name', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Resume_id` = '$Resume_id';";

$sql .= "UPDATE `resume_seniority` SET `Seniority_num`= '$Seniority', `Rec_year`= '$File_year', `Annual_default`= '$Annual_hours', `Remark`= '$Remark_seniority', `Update_date` = NOW(), `Update_name` = '$user' WHERE `Resume_id` = '$Resume_id' AND `Type` = 'Annual_default';";

$sql.=$file_sqls;


if (mysqli_multi_query($conn, $sql)) {
    echo true;
    // echo $sql;
} else {
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}


mysqli_close($conn);
?>