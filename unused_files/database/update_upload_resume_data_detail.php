<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$res_id = $_REQUEST['res_id'];

@$upload_content = json_encode($_REQUEST['upload_content'], JSON_UNESCAPED_UNICODE);
@$name = $_REQUEST['name'];

@$file_dir = "../resume/upload/";

@$file = "../resume/upload/" . $_FILES["file4"]["name"];

$user = $_SESSION['name'];


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
    //             "../resume/upload/" . $_FILES["file4"]["name"]
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
            "../resume/upload/" . $_FILES["file4"]["name"]
        );
    }
}

if (isset($_REQUEST['File_name'])) {
    @$file = "../resume/upload/" . $_REQUEST['File_name'];
} else {
    @$file = "../resume/upload/" . $_FILES["file4"]["name"];
}


if (isset($_FILES["file4"]) || isset($_REQUEST['File_name'])) {
    $sqlUpdate = "UPDATE `resume` SET `Name` = '$name', `Update_date` = NOW(), `Update_name`= '$user', `upload_content` = '$upload_content', `file_path` = '$file'
        WHERE `Id` = '$res_id' LIMIT 1;";


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