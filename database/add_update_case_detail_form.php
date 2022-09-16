<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$Case_id = $_REQUEST['Case_id'];
$Form_id = $_REQUEST['Form_id'];
$Form_type = $_REQUEST['Form_type'];
$Case_name = $_REQUEST['Case_name'];
$Case_pid = $_REQUEST['Case_pid'];
@$Fillin_date = $_REQUEST['Fillin_date'];
@$answer = json_encode($_REQUEST['answer'],JSON_UNESCAPED_UNICODE);
@$other_info = json_encode($_REQUEST['other_info'],JSON_UNESCAPED_UNICODE);

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

@$other_info_sql = "UPDATE `form_all_info` SET `Fillin_date` = '$Fillin_date', `Other_info` = '$other_info', `Update_date` = NOW(), `Update_name`= '$user'
WHERE `Case_id` = '$Case_id' AND `Id` = '$Form_id' AND `Form_name` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

@$case_report_sql = "INSERT INTO `case_report` (`Case_seqid`, `Case_id` ,`Form_id` ,`Open_case_date` ,`Name` ,`Case_grade` ,`Case_state`,
`$count_type` ,`Case_assign`, `Create_date` ,`Create_name`) VALUES
('$r_case_seqid', '$r_case_id', '$r_form_id', '$r_open_case_date'
 ,'$r_name', '$r_case_grade', '$r_case_state', 1, '$r_case_assign', Now(), '$user');";


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


$sql_find = "SELECT count(`Form_id`) FROM `forms` WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid';";

$find_num = mysqli_query($conn,$sql_find);
$form_id_num = mysqli_fetch_row($find_num);

if($form_id_num[0]>0)
{
    if(isset($_FILES["file4"]))
    {
        // if($_FILES["file4"]["name"] != null && $_FILES["file4"]["type"] == "application/pdf"){
        if($_FILES["file4"]["name"] != null){
            $sqlUpdate ="UPDATE `forms` SET `Case_name` = '$Case_name',`Case_pid` = '$Case_pid', `Update_date` = NOW(), `Update_name`= '$user',`answer` = '$answer',`file_path` = '$file', `Health_rec` = '$health_rec'
            WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

            if(isset($_REQUEST['other_info']))
            {
                $sqlUpdate .= $other_info_sql;
            }

            @$sqlUpdate .= $case_report_sql;

            if(mysqli_multi_query($conn, $sqlUpdate)){
                // echo $sqlUpdate;
                // echo "a";
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
        $sqlUpdate ="UPDATE `forms` SET `Case_name` = '$Case_name',`Case_pid` = '$Case_pid', `Update_date` = NOW(), `Update_name`= '$user',`answer` = '$answer', `Health_rec` = '$health_rec'
        WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' LIMIT 1;";

        if(isset($_REQUEST['other_info']))
        {
            $sqlUpdate .= $other_info_sql;           
        }

        @$sqlUpdate .= $case_report_sql;

        if(mysqli_multi_query($conn, $sqlUpdate)){
            // echo $sqlUpdate;
            // echo "b";
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
            $sql = "INSERT INTO `forms` (`Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `answer`, `file_path`, `Health_rec`) VALUES 
            ('$Case_id', '$Form_id', '$Form_type', '$Case_name', '$Case_pid',
            NOW(), '$user',
            '$answer', '$file', '$health_rec');";

            if(isset($_REQUEST['other_info']))
            {
                $sql .=  $other_info_sql;        
            }

            @$sql .= $case_report_sql;

            if(mysqli_multi_query($conn,$sql)){
                // echo $sql;
                // echo "c";
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
        $sql = "INSERT INTO `forms` (`Case_id`, `Form_id`, `Form_type`, `Case_name`, `Case_pid`, `Create_date`, `Create_name`, `answer`, `Health_rec`) VALUES 
        ('$Case_id', '$Form_id', '$Form_type', '$Case_name', '$Case_pid',
        NOW(), '$user',
        '$answer', '$health_rec');";

        if(isset($_REQUEST['other_info']))
        {
            $sql .=  $other_info_sql;           
        }

        @$sql .= $case_report_sql;

        if(mysqli_multi_query($conn,$sql)){
            // echo $sql;
            // echo "d";
            echo true;
            
        }else{
            echo false;
        }
    }
    
}



mysqli_close($conn);
?>