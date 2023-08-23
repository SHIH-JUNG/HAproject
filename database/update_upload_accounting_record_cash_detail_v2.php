<?php
session_start();
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");

$arc_id = (int)$_REQUEST['arc_id'];


$Form_class = $_REQUEST['Form_class'];
$Invoice_year = (int)$_REQUEST['Invoice_year'];
$Invoice_month = (int)$_REQUEST['Invoice_month'];

$Invoice_type = $_REQUEST['Invoice_type'];
$Amount = $_REQUEST['Amount'];

$Remark = $_REQUEST['Remark'];

$user = $_SESSION['name'];

$sqlUpdate = "";

// 上傳報表路徑
@$file_dir = "../accounting_record_cash/" . $_REQUEST['arc_year'] . "_data/upload/";

$file_0 = "";

$file_0_sql = "";

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

    // 查詢 原本的`File_path`
    $select_0_file_num = "SELECT `Files_path` FROM `accounting_record_cash_v2` WHERE `Id` = '$arc_id' ORDER BY `accounting_record_cash_v2`.`Create_date` ASC;";

    $find_0_file_num = mysqli_query($conn,$select_0_file_num);
    $row_nums = mysqli_num_rows($find_0_file_num);
    $f0_file_num = mysqli_fetch_row($find_0_file_num);

    // var_dump($file_0_arr);
    // echo "<br/>-------------------------------------------";
    // var_dump($f0_file_num);
    // echo "<br/>-------------------------------------------";

    if($row_nums > 0 && $f0_file_num[0]!="")
    {
        $file_0_arr = json_encode(array_merge(json_decode($f0_file_num[0], true),$file_0_arr),JSON_UNESCAPED_UNICODE);

        $file_0_arr = json_decode($file_0_arr, true);

        $file_0_arr = array_values(array_unique($file_0_arr,SORT_REGULAR));

        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);
    }

    if(empty($file_0_arr))
    {
        $file_0_sql = ", `Files_path`= ''";
    }
    else
    {
        $file_0_sql = ", `Files_path`= '$file_0_arr'";
    }
    
    // var_dump($file_0_arr);
}


$sqlUpdate = "UPDATE `accounting_record_cash_v2` SET `Invoice_type` = '$Invoice_type'
, `Amount`= '$Amount', `Remark`= '$Remark' ". $file_0_sql  ."
, `Update_date` = NOW(), `Update_name`= '$user'
        WHERE `Id` = '$arc_id';";



// if(mysqli_multi_query($conn,$sqlUpdate)){
if(mysqli_query($conn,$sqlUpdate)){
    echo true;
}else{
    echo "{$sqlUpdate} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
?>