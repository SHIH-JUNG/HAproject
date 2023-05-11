<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Case_seqid = $_REQUEST['Case_seqid'];
$Case_id = $_REQUEST['Case_id'];
$Form_id = $_REQUEST['Form_id'];
$Form_type = $_REQUEST['Form_type'];
$Case_name = $_REQUEST['Case_name'];
$Case_pid = $_REQUEST['Case_pid'];
@$Fillin_date = $_REQUEST['Fillin_date'];
@$answer = json_encode($_REQUEST['answer'],JSON_UNESCAPED_UNICODE);
//服務摘要表欄位內容
@$other_info = json_encode($_REQUEST['other_info'],JSON_UNESCAPED_UNICODE);

//工作報表1欄位內容
@$Case_report = json_decode($_REQUEST['Case_report'], true);
@$Case_report  = $Case_report[0];
@$count_type = $Case_report["count_type"];
@$r_case_seqid = $Case_report["case_seqid"];
@$r_case_id = $Case_report["case_id"];
@$r_form_id = $Case_report["form_id"];
@$r_open_case_date = $Case_report["open_case_date"];
@$r_name = $Case_report["name"];
@$r_case_grade = $Case_report["case_grade"];
@$r_case_state = $Case_report["case_state"];
@$r_case_assign = $Case_report["case_assign"];

// 工作報表2欄位內容
@$Case_report2 = json_decode($_REQUEST['Case_report2'], true);
@$Case_report2  = $Case_report2[0];
@$r_birth = $Case_report2["birth"];
@$r_sex = $Case_report2["sex"];
@$r_residence = $Case_report2["residence"];
@$r_education = $Case_report2["education"];
@$r_drug_record = $Case_report2["drug_record"];
@$r_case_referral = $Case_report2["case_referral"];
@$r_ques_type = $Case_report2["ques_type"];

if(!isset($_REQUEST['health_rec']))
{
    $health_rec = "";
}
else
{
    @$health_rec = json_encode($_REQUEST['health_rec'],JSON_UNESCAPED_UNICODE);
}

@$file_dir = "../upload/";

@$file = "../upload/" . $_FILES["file4"]["name"];

$user = $_SESSION['name'];

@$other_info_sql = "UPDATE `placement_form_all_info` SET `Fillin_date` = '$Fillin_date', `Other_info` = '$other_info', `Update_date` = NOW(), `Update_name`= '$user'
WHERE `Case_id` = '$Case_id' AND `Id` = '$Form_id' AND `Form_name` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

// // 儲存工作報表資料，顯示在case_report.php 第一張報表 region
// $case_report_sql = "";

// // count_type判斷資料有無異動，有異動才新增資料進資料庫
// if($count_type!="")
// {   
//     // 依據個案的表單序號 查詢今天有無紀錄 若已經有紀錄則不寫入資料庫
//     $sql_find_case_report = "SELECT count(*) FROM `case_report` WHERE `Case_seqid` = '$r_case_seqid' AND `Case_id` = '$r_case_id' AND `Form_id` = '$r_form_id' AND `$count_type`=1 AND TO_DAYS(`Create_date`)= TO_DAYS(NOW());";

//     $find_num_case_report = mysqli_query($conn,$sql_find_case_report);
//     $form_id_num_cr = mysqli_fetch_row($find_num_case_report);

//     if($form_id_num_cr[0]>0)
//     {
//         @$case_report_sql = "";
//     }
//     else
//     {
//         @$case_report_sql = "INSERT INTO `case_report` (`Case_seqid`, `Case_id` ,`Form_id` ,`Open_case_date` ,`Name` ,`Case_grade` ,`Case_state`,
//         `$count_type` ,`Case_assign`, `Create_date` ,`Create_name`) VALUES
//         ('$r_case_seqid', '$r_case_id', '$r_form_id', '$r_open_case_date'
//          ,'$r_name', '$r_case_grade', '$r_case_state', 1, '$r_case_assign', Now(), '$user');";
//     }
// }
// //endregion

// // 儲存工作報表資料，顯示在case_report.php 第二張報表 region

// //新增語法
// @$insert_case_report2_sql = "INSERT INTO `form_case_report` (`Case_seqid`, `Case_id` ,`Form_id` ,`Form_type` ,`Open_case_date` ,`Name` ,`Birth` ,`Gender`,
// `Address` ,`Education` ,`Drug_record` ,`Referral` ,`Demand` ,
// `Case_assign`, `Create_date` ,`Create_name`) VALUES
// ('$r_case_seqid', '$r_case_id', '$r_form_id', '$Form_type', '$r_open_case_date'
// ,'$r_name', '$r_birth', '$r_sex'
// ,'$r_residence', '$r_education', '$r_drug_record', '$r_case_referral', '$r_ques_type'
//  , '$r_case_assign', Now(), '$user');";

// //更新語法
// @$update_case_report2_sql = "UPDATE `form_case_report` SET `Form_type` = '$Form_type', `Name` = '$r_name', `Birth` = '$r_birth', `Gender` = '$r_sex'
// , `Address` = '$r_residence', `Education` = '$r_education', `Drug_record` = '$r_drug_record'
// , `Referral` = '$r_case_referral', `Demand` = '$r_ques_type', `Case_assign` = '$r_case_assign'
// , `Update_date` = NOW(), `Update_name`= '$user'
// WHERE `Case_seqid` = '$r_case_seqid' AND `Case_id` = '$r_case_id' AND `Form_id` = '$r_form_id' ORDER BY `Create_date` DESC;";

// //判斷該表單資料是否已經寫入過form_case_report資料庫中
// $sql_find_case_report2 = "SELECT count(`Form_id`) FROM `form_case_report` WHERE `Case_seqid` = '$r_case_seqid' AND `Case_id` = '$r_case_id' AND `Form_id` = '$r_form_id';";

// $find_num_case_report2 = mysqli_query($conn,$sql_find_case_report2);
// $form_id_num_cr2 = mysqli_fetch_row($find_num_case_report2);


// $case_report2_sql = "";
// //若form_case_report資料庫已經存在該表單紀錄，則執行update語法，否則執行insert語法
// if($form_id_num_cr2[0]>0)
// {
//     @$case_report2_sql = $update_case_report2_sql;
// }
// else
// {
//     @$case_report2_sql = $insert_case_report2_sql;
// }
// //endregion

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}


if(isset($_FILES["file4"]))
{    
   
    // if ($_FILES["file4"]["type"] == "application/pdf") {
    //     if ($_FILES["file4"]["error"] > 0) {
    //         echo false;
    //     } else {
    //     //設定檔案上傳路徑，選擇指定資料夾
    //         move_uploaded_file(
    //             $_FILES["file4"]["tmp_name"],
    //             "../upload/" . $_FILES["file4"]["name"]
    //         );
    //     }
    // }
    // else
    // {
    //     echo false;
    // }

    if ($_FILES["file4"]["error"] > 0) {

        echo false;

    } else {
    //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["file4"]["tmp_name"],
            "../upload/" . $_FILES["file4"]["name"]
        );
    }
}


$sql_find = "SELECT count(`Form_id`) FROM `placement_forms` WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid';";

$find_num = mysqli_query($conn,$sql_find);
$form_id_num = mysqli_fetch_row($find_num);

if($form_id_num[0]>0)
{
    if(isset($_FILES["file4"]))
    {
        // if($_FILES["file4"]["name"] != null && $_FILES["file4"]["type"] == "application/pdf"){
        if($_FILES["file4"]["name"] != null){
            $sqlUpdate ="UPDATE `placement_forms` SET `Case_name` = '$Case_name',`Case_pid` = '$Case_pid', `Update_date` = NOW(), `Update_name`= '$user',`answer` = '$answer',`file_path` = '$file', `Health_rec` = '$health_rec'
            WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

            if(isset($_REQUEST['other_info']))
            {
                $sqlUpdate .= $other_info_sql;
            }
            // // 工作報表新增/更新
            // @$sqlUpdate .= $case_report2_sql;
            // @$sqlUpdate .= $case_report_sql;

            if(mysqli_multi_query($conn, $sqlUpdate)){
                echo true;
            }else{
                echo false;
            }
        }
        else
        {
            echo false;
        }
    }
    else
    {
        $sqlUpdate ="UPDATE `placement_forms` SET `Case_name` = '$Case_name',`Case_pid` = '$Case_pid', `Update_date` = NOW(), `Update_name`= '$user',`answer` = '$answer', `Health_rec` = '$health_rec'
        WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

        if(isset($_REQUEST['other_info']))
        {
            $sqlUpdate .= $other_info_sql;           
        }
        // // 工作報表新增/更新
        // @$sqlUpdate .= $case_report2_sql;
        // @$sqlUpdate .= $case_report_sql;

        if(mysqli_multi_query($conn, $sqlUpdate)){
            echo true;
        }else{
            echo false;
        }
    }

}
else
{
    if(isset($_REQUEST['File_name']))
    {
        @$file = "../upload/" . $_REQUEST['File_name'];
    }
    else
    {
        @$file = "../upload/" . $_FILES["file4"]["name"];
    }

    if(isset($_FILES["file4"]) || isset($_REQUEST['File_name']))
    {
        
        // if($_FILES["file4"]["name"] != null && $_FILES["file4"]["type"] == "application/pdf"){
        if(@$_FILES["file4"]["name"] != null || isset($_REQUEST['File_name'])){
            $sql = "INSERT INTO `placement_forms` (`Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `answer`, `file_path`, `Health_rec`) VALUES 
            ('$Case_seqid', '$Case_id', '$Form_id', '$Form_type', '$Case_name', '$Case_pid',
            NOW(), '$user',
            '$answer', '$file', '$health_rec');";

            if(isset($_REQUEST['other_info']))
            {
                $sql .=  $other_info_sql;        
            }
            // // 工作報表新增/更新
            // @$sql .= $case_report2_sql;
            // @$sql .= $case_report_sql;

            if(mysqli_multi_query($conn,$sql)){
                echo true;
            }else{
                echo false;
            }
        }
        else
        {
            echo false;
        }
    }
    else
    {
        $sql = "INSERT INTO `placement_forms` (`Case_seqid`, `Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `answer`, `Health_rec`) VALUES 
        ('$Case_seqid', '$Case_id', '$Form_id', '$Form_type', '$Case_name', '$Case_pid',
        NOW(), '$user',
        '$answer', '$health_rec');";

        if(isset($_REQUEST['other_info']))
        {
            $sql .=  $other_info_sql;           
        }
        // // 工作報表新增/更新
        // @$sql .= $case_report2_sql;
        // @$sql .= $case_report_sql;

        if(mysqli_multi_query($conn,$sql)){
            echo true;
        }else{
            echo false;
        }
    }
    
}



mysqli_close($conn);
?>