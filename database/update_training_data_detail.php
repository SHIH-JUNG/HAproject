<?php
session_start();
include("sql_connect.php");
// $Id = $_POST['re_id'];
$user = $_SESSION['name'];

// $Name = $_REQUEST['Name'];

$Training_id = $_REQUEST['Training_id'];
$Training_date = $_REQUEST['Training_date'];
$Training_start_time = $_REQUEST['Training_start_time'];
$Training_end_time = $_REQUEST['Training_end_time'];
$Training_name = $_REQUEST['Training_name'];
$Place = $_REQUEST['Place'];
$Hours = $_REQUEST['Hours'];
$Remark = $_REQUEST['Remark'];

// 上傳報表路徑
@$file_dir = "../training/";

@$file = "";

@$sql_file_upload = "";

$file_0_arr = array();
$file_1_arr = array();
$file_0_sql = "";
$file_1_sql = "";

// 無該檔案資料夾則建立
if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

// 判斷報表上傳
if (isset($_FILES["Upload_name"]))
{
    for ($a = 0; $a < count($_FILES["Upload_name"]["name"]); $a++){
        @$file_name = $_FILES["Upload_name"]["name"][$a];
        @$file = "../training/" . $_FILES["Upload_name"]["name"][$a];
    
        if ($_FILES["Upload_name"]["error"][$a] > 0) {
            echo false;
        } else {
            //設定檔案上傳路徑，選擇指定資料夾
            move_uploaded_file(
                $_FILES["Upload_name"]["tmp_name"][$a],
                "../training/" . $_FILES["Upload_name"]["name"][$a]
            );
        }
        array_push($file_0_arr, $file_name);
        array_push($file_1_arr, $file);
    }

    // 查詢 原本的`Upload_name`
    $select_0_file_num = "SELECT `Upload_name` FROM `training` WHERE `Id` = '$Training_id';";

    $find_0_file_num = mysqli_query($conn,$select_0_file_num);
    $row_nums0 = mysqli_num_rows($find_0_file_num);
    $f0_file_num = mysqli_fetch_row($find_0_file_num);

    // var_dump($f0_file_num);
    
    if($row_nums0 > 0 && $f0_file_num[0]!="")
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
        $file_0_sql = ", `Upload_name`= ''";
    }
    else
    {
        $file_0_sql = ", `Upload_name`= '$file_0_arr'";
    }
    $file_0_arr = json_encode($file_0_arr,JSON_UNESCAPED_UNICODE);

    // 查詢 原本的`Upload_path`
    $select_0_file_num = "SELECT `Upload_path` FROM `training` WHERE `Id` = '$Training_id';";

    $find_0_file_num = mysqli_query($conn,$select_0_file_num);
    $row_nums0 = mysqli_num_rows($find_0_file_num);
    $f0_file_num = mysqli_fetch_row($find_0_file_num);

    // var_dump($f0_file_num);
    
    if($row_nums0 > 0 && $f0_file_num[0]!="")
    {
        $file_1_arr = json_encode(array_merge(json_decode($f0_file_num[0], true),$file_1_arr),JSON_UNESCAPED_UNICODE);

        $file_1_arr = json_decode($file_1_arr, true);

        $file_1_arr = array_values(array_unique($file_1_arr,SORT_REGULAR));

        $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
    }
    else
    {
        $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
    }

    if(empty($file_1_arr))
    {
        $file_1_sql = ", `Upload_path`= ''";
    }
    else
    {
        $file_1_sql = ", `Upload_path`= '$file_1_arr'";
    }
    $file_1_arr = json_encode($file_1_arr,JSON_UNESCAPED_UNICODE);
}
$file_sql = $file_0_sql . $file_1_sql;

$sqlUpdate = "UPDATE `training` SET `Training_date` = '$Training_date', `Training_start_time` = '$Training_start_time', `Training_end_time` = '$Training_end_time',
`Training_name` = '$Training_name', `Hours` = '$Hours', `Place` = '$Place'
".$file_sql."
,`Remark` = '$Remark',
`Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$Training_id';";

if (mysqli_query($conn, $sqlUpdate)) {
    echo true;
} else {
    echo false;
}
mysqli_close($conn);
