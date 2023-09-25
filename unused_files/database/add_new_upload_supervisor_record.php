<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

@$upload_content = json_encode($_REQUEST['upload_content'],JSON_UNESCAPED_UNICODE);
@$year = $_REQUEST['year'];

@$file_dir = "../supervisor_record/upload/";

@$file = "../supervisor_record/upload/" . $_FILES["file4"]["name"];

@$title = $_REQUEST['title'];
@$rec_type = $_REQUEST['rec_type'];

@$signer = $_REQUEST['signer'];
@$rec_date_time = $_REQUEST['rec_date_time'];

$user = $_SESSION['name'];


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
    //             "../supervisor_record/upload/" . $_FILES["file4"]["name"]
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
            "../supervisor_record/upload/" . $_FILES["file4"]["name"]
        );
    }
}

    if(isset($_REQUEST['File_name']))
    {
        @$file = "../supervisor_record/upload/" . $_REQUEST['File_name'];
    }
    else
    {
        @$file = "../supervisor_record/upload/" . $_FILES["file4"]["name"];
    }

    if(isset($_FILES["file4"]) || isset($_REQUEST['File_name']))
    {
        $select_id_num = "SELECT MAX(Id) FROM `supervisor_record` ORDER BY `supervisor_record`.`Create_date` ASC LIMIT 1;";

        $find_id_num = mysqli_query($conn,$select_id_num);
        $id_num = mysqli_fetch_row($find_id_num);

        if($id_num[0]>0)
        {
            $sr_id = (int)$id_num[0] + 1;
        }
        else
        {
            $sr_id = 1;
        }

        $url = 'supervisor_record_detail.php?year='.$year.'&id='.$sr_id.'&sr_id='.$sr_id.'&rec_type='.$rec_type .'';

        $start_datetime = date("Y-m-d H:s");
        $end_datetime = date("Y-m-d H:s" ,strtotime("+2 day"));

        // if($_FILES["file4"]["name"] != null && $_FILES["file4"]["type"] == "application/pdf"){
        if(@$_FILES["file4"]["name"] != null || isset($_REQUEST['File_name'])){
            $sql = "INSERT INTO `supervisor_record` (`Id`, `Year`, `upload_content`, `file_path`, `Create_date`, `Create_name`, `Supervise`) VALUES 
            ($sr_id, '$year', '$upload_content', '$file', NOW(), '$user', '$signer');";

            // $sql .= "INSERT INTO `calendar` (`title`,`description`,`start`, `end`, `publisher`) VALUES ('$title','$url','$start_datetime', '$end_datetime', '$user')";
            $sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
            VALUES ('$sr_id', '$title','$url','$rec_date_time', '$user', '$signer', '未簽核', 'supervisor_record', Now(), '$user')";

            if(mysqli_multi_query($conn,$sql)){
                echo true;
            }else{
                echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
            }
        }
        else
        {
            echo false;
        }
    }
    else
    {
        echo false;
    }



mysqli_close($conn);
?>