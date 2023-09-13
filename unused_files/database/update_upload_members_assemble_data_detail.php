<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$ma_id = $_REQUEST['ma_id'];

@$upload_content = json_encode($_REQUEST['upload_content'], JSON_UNESCAPED_UNICODE);
@$year = $_REQUEST['year'];

@$file_dir = "../members_assemble/upload/";

@$file = "../members_assemble/upload/" . $_FILES["file4"]["name"];

$user = $_SESSION['name'];

@$assign = $_REQUEST['assign'];
@$title = $_REQUEST['title'];
@$signer = $_REQUEST['signer'];
@$rec_date_time = $_REQUEST['rec_date_time'];

$url = 'members_assemble_detail.php?year='.$year.'&id='.$ma_id.'&ma_id='.$ma_id.'&rec_type=upload';


@$signed_timestamp = $_REQUEST['signed_timestamp'];

@$update_signer_sql = "";

if($signed_timestamp!="0000-00-00 00:00:00")
{
    $update_signer_sql = ", `Supervise` = '$signer'";
}

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}


if (isset($_FILES["file4"])) {

    // if ($_FILES["file4"]["type"] == "application/pdf") {
    //     if ($_FILES["file4"]["error"] > 0) {
    //         echo false;
    //     } else {
    //     //設定檔案上傳路徑，選擇指定資料夾
    //         move_uploaded_file(
    //             $_FILES["file4"]["tmp_name"],
    //             "../members_assemble/upload/" . $_FILES["file4"]["name"]
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
            "../members_assemble/upload/" . $_FILES["file4"]["name"]
        );
    }
}

if (isset($_REQUEST['File_name'])) {
    @$file = "../members_assemble/upload/" . $_REQUEST['File_name'];
} else {
    @$file = "../members_assemble/upload/" . $_FILES["file4"]["name"];
}


if (isset($_FILES["file4"]) || isset($_REQUEST['File_name'])) {
    $sqlUpdate = "UPDATE `members_assemble` SET `Year` = '$year', `Update_date` = NOW(), `Update_name`= '$user', `upload_content` = '$upload_content' ".$update_signer_sql.", `file_path` = '$file'
        WHERE `Id` = '$ma_id' LIMIT 1;";

    @$sqlUpdate .= "UPDATE `signature_notice` SET `Title` = '$title', `Url` = '$url', `Timestamp` = '$rec_date_time', `Assign` = '$assign', `Signer`='$signer', `Update_name` = '$user', `Update_date` = NOW() WHERE `Sign_id` = '$ma_id' AND `Type` = 'members_assemble' ORDER BY `signature_notice`.`Create_date` ASC LIMIT 1;";

    if (mysqli_multi_query($conn, $sqlUpdate)) {
        echo true;
    } else {
        echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    }
} else {
    echo false;
}

mysqli_close($conn);
?>