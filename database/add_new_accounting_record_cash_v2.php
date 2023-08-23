<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

// $Invoice_year = (int)$_REQUEST['year'];
// $Invoice_month = (int)$_REQUEST['month'];

$Form_class = $_REQUEST['Form_class'];
$Invoice_year = (int)$_REQUEST['Invoice_year'];
$Invoice_month = (int)$_REQUEST['Invoice_month'];

$Invoice_type = $_REQUEST['Invoice_type'];
$Amount = $_REQUEST['Amount'];

$Remark = $_REQUEST['Remark'];

$user = $_SESSION['name'];


// 上傳報表路徑
@$file_dir = "../accounting_record_cash/" . $_REQUEST['Invoice_year'] . "_data/upload/";

$file_0 = "";

$file_0_arr = array();

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

if (isset($_FILES["arc_files"]))
{
    @$file_0_date = date("Y-m-d");

    for ($a = 0; $a < count($_FILES["arc_files"]["name"]); $a++)
    {
        @$file_0 = $file_dir .$_FILES["arc_files"]["name"][$a];
    
        if ($_FILES["arc_files"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["arc_files"]["tmp_name"][$a],
                $file_0
            );
        }

        array_push($file_0_arr, $file_0);
    }

    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
}

if(empty($file_0_arr))
{
    $file_0_arr = implode($file_0_arr);
}

$select_id_num = "SELECT MAX(Id) FROM `accounting_record_cash_v2` ORDER BY `accounting_record_cash_v2`.`Create_date` ASC LIMIT 1;";

$find_id_num = mysqli_query($conn,$select_id_num);
$id_num = mysqli_fetch_row($find_id_num);

if($id_num[0]>0)
{
    $arc_id = (int)$id_num[0] + 1;
}
else
{
    $arc_id = 1;
}

$sql = "INSERT INTO `accounting_record_cash_v2` (`Id`, `Year`, `Month`,`Form_class`, `Invoice_type`, `Amount`, `Remark`, `Files_path`, `Create_date`, `Create_name`) VALUES
        ($arc_id, $Invoice_year, $Invoice_month, '$Form_class',
        '$Invoice_type', '$Amount', '$Remark', '$file_0_arr', NOW(), '$user');";


if(mysqli_query($conn,$sql)){
// if(mysqli_multi_query($conn,$sql)){
    echo true;
}else{
    echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
?>