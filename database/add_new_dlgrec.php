<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$bf_num = $_REQUEST['bf_num'];
$al_num = $_REQUEST['al_num'];
$em_num = $_REQUEST['em_num'];
$lp_num = $_REQUEST['lp_num'];
$leave_num = $_REQUEST['leave_num'];
$dlgrec_date = $_REQUEST['dlgrec_date'];
$dlgrec_0 = $_REQUEST['dlgrec_0'];
$dlgrec_1 = $_REQUEST['dlgrec_1'];
$dlgrec_2 = $_REQUEST['dlgrec_2'];
$dlgrec_3 = $_REQUEST['dlgrec_3'];
$dlgrec_4 = $_REQUEST['dlgrec_4'];
$dlgrec_5 = $_REQUEST['dlgrec_5'];
$dlgrec_6 = $_REQUEST['dlgrec_6'];
$dlgrec_7 = $_REQUEST['dlgrec_7'];
$dlgrec_8 = $_REQUEST['dlgrec_8'];
$dlgrec_9 = $_REQUEST['dlgrec_9'];
$dlgrec_10 = $_REQUEST['dlgrec_10'];
$dlgrec_11 = $_REQUEST['dlgrec_11'];

$dlg_manager = $_REQUEST['dlg_manager'];
$social_worker = $_REQUEST['social_worker'];
$supervise1 = $_REQUEST['supervise1'];
$supervise2 = $_REQUEST['supervise2'];

$user = $_SESSION['name'];

$select_id_num = "SELECT MAX(Id) FROM `dlgrec` ORDER BY `dlgrec`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $dlgrec_id = (int)$id_num[0] + 1;
}
else
{
    $dlgrec_id = 1;
}

$url = 'dlgrec_detail.php?dlgrec_id='.$dlgrec_id;

$title = '生輔紀錄簽核：日期'.$dlgrec_date."生活輔導員".$dlg_manager;

// 上傳報表路徑
@$file_dir = "../dlgrec/";
@$file_name = "";
@$file = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["dlgrec_files0"]))
{
    @$file_name = $_FILES["dlgrec_files0"]["name"];
    @$file = "../dlgrec/" . $_FILES["dlgrec_files0"]["name"];

    

    if ($_FILES["dlgrec_files0"]["error"] > 0) {

        echo false;
    } else {
        //設定檔案上傳路徑，選擇指定資料夾
        move_uploaded_file(
            $_FILES["dlgrec_files0"]["tmp_name"],
            "../dlgrec/" . $_FILES["dlgrec_files0"]["name"]
        );
    }
}


$sql = "INSERT INTO `dlgrec` (`Id`, `bf_num`,`al_num`,`em_num`,`lp_num`,`leave_num`,`dlgrec_date`,
`dlgrec_0`,`dlgrec_1`,`dlgrec_2`,`dlgrec_3`,`dlgrec_4`,`dlgrec_5`,`dlgrec_6`,`dlgrec_7`,`dlgrec_8`,`dlgrec_9`,`dlgrec_10`,`dlgrec_11`,
`dlg_manager`,
`social_worker`,`supervise1`,`supervise2`,
`Upload_path`, `Upload_name`,
`Create_date`,`Create_name`) VALUES
 ('$dlgrec_id','$bf_num','$al_num','$em_num','$lp_num','$leave_num','$dlgrec_date',
 '$dlgrec_0','$dlgrec_1','$dlgrec_2','$dlgrec_3','$dlgrec_4','$dlgrec_5','$dlgrec_6','$dlgrec_7','$dlgrec_8','$dlgrec_9','$dlgrec_10','$dlgrec_11',
 '$dlg_manager',
 '$social_worker','$supervise1','$supervise2',
 '$file', '$file_name',
 Now(),'$user');";

$sign_date = date("Y-m-d H:s");

$signers = $social_worker . "、" . $supervise1 . "、" . $supervise2;

$sign_state = $social_worker . "未簽核" . "、" . $supervise1 . "未簽核" . "、" . $supervise2  . "未簽核";

$sql .= "INSERT INTO `signature_notice` (`Sign_id`, `Title`,`Url`,`Timestamp`, `Assign`, `Signer`, `Sign_state`, `Type`, `Create_date`, `Create_name`) 
VALUES ('$dlgrec_id', '$title', '$url', '$sign_date', '$social_worker', '$signers', '$sign_state', 'dlgrec', Now(), '$user');";

	if(mysqli_multi_query($conn,$sql)){
        echo true;
    }else{
        echo false;
    }

mysqli_close($conn);
?>
