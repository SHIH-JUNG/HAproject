<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Number = $_REQUEST['Number'];
$Form_name = $_REQUEST['Form_name'];
$Phone_id = $_REQUEST['Phone_id'];
$Case_id = $_REQUEST['Case_id'];
$Name = $_REQUEST['Name'];
$Case_pid = $_REQUEST['Case_pid'];
@$upload_info = json_encode($_REQUEST['upload_info'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];


@$file_dir = "../upload/case_all/";

@$file = "../upload/case_all/" . $_FILES["file4"]["name"];

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
    //             "../upload/case_all/" . $_FILES["file4"]["name"]
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
            "../upload/case_all/" . $_FILES["file4"]["name"]
        );
    }
}

if($_FILES["file4"]["name"] != null)
{
    $sql = "INSERT INTO `form_all_info` (`Phone_id`,`Case_id`, `Case_name`, `Case_pid`,`Is_upload`,`Upload_path`, `Number`,`Form_name`,`Upload_info`,`Create_date`,`Create_name`) VALUES
    ('$Phone_id','$Case_id',
    '$Name', '$Case_pid',
    1,'$file',
    '$Number','$Form_name',
    '$upload_info',NOW(),
    '$user')";
    
        if(mysqli_query($conn,$sql)){
            echo true;
        }else{
            echo false;
        }
}
else
{
    echo false;
}

mysqli_close($conn);
?>