<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Id = $_REQUEST['Id'];

@$upload_content = json_encode($_REQUEST['upload_content'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];


@$file_dir = "../upload/case_all/";

$file_0 = "";

$file_name_0 = "";

$sql = "";

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷檔案上傳
if (isset($_FILES["files"]))
{
    @$file_name_0 = $_FILES["files"]["name"];
    @$file_0 = $file_dir . $_FILES["files"]["name"];

    

    if ($_FILES["files"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["files"]["tmp_name"],
            $file_dir . $_FILES["files"]["name"]
        );
    }

}

$sql = "UPDATE `form_all_info` SET `Upload_path` = '$file_0',
`Upload_info` = '$upload_content',
`Update_date` = NOW(), `Update_name` = '$user'
WHERE `Id` = '$Id';";
    
if(mysqli_query($conn,$sql)){
    echo true;
}else{
    echo false;
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
?>