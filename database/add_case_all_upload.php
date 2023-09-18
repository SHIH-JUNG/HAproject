<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Id = $_REQUEST['Id'];
$Case_id = $_REQUEST['Case_id'];
$Name = $_REQUEST['Name'];
$Case_pid = $_REQUEST['Case_pid'];

$Number = $_REQUEST['Number'];
$Form_name = $_REQUEST['Form_name'];

@$Supervise1 = $_REQUEST['Supervise1'];
@$Supervise2 = $_REQUEST['Supervise2'];

$history_url = $_REQUEST['history_url'];
$case_user = $_REQUEST['case_user'];
$title = $_REQUEST['title'];
$signer = $_REQUEST['signer'];
$rec_date_time = $_REQUEST['rec_date_time'];


$select_id_num = "SELECT MAX(Id) FROM `form_all_info` ORDER BY `form_all_info`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $form_id = (int)$id_num[0] + 1;
}
else
{
    $form_id = 1;
}



$sign_state = $Supervise1 . "未簽核" . "、" . $Supervise2 . "未簽核";

$sign_id = $form_id . "_" . $Id . "_" . $Case_id;

@$upload_info = json_encode($_REQUEST['upload_info'],JSON_UNESCAPED_UNICODE);

$user = $_SESSION['name'];


@$file_dir = "../upload/case_all/";

@$file = "../upload/case_all/" . $_FILES["file4"]["name"];

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

if(isset($_FILES["file4"]))
{    

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
    $sql = "INSERT INTO `form_all_info` (`Id`, `Case_seqid`, `Case_id`, 
    `Case_name`, `Case_pid`,`Is_upload`,
    `Upload_path`, 
    `Number`,`Form_name`,
    `Supervise1`, `Supervise2`, 
    `Case_storage`,
    `Upload_info`,
    `Create_date`,`Create_name`) VALUES
    ('$form_id', '$Id', '$Case_id',
    '$Name', '$Case_pid', 1,
    '$file',
    '$Number','$Form_name',
    '$Supervise1', '$Supervise2',
    'storage', 
    '$upload_info',
    NOW(),'$user');";

    $sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
    VALUES ('$sign_id', '$title','$history_url','$rec_date_time', '$case_user', '$signer', '$sign_state', 'current_case', Now(), '$user');";

        // echo $sql;

        if(mysqli_multi_query($conn, $sql)){
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