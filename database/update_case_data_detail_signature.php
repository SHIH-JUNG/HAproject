<?php
session_start();
include("sql_connect.php");
$interlocution = $_POST['interlocution'];
$sign_type = $_POST['sign_type'];
$employeeSign_imagePath_arr = $_POST['imagePath_arr'];
$employeeSign_Date_arr = $_POST['Date_arr'];
$datePath = $_POST['datePath'];
$id = $_POST['id'];

$user = $_SESSION['name'];

/*  base64格式编码转换为图片并保存对应文件夹 */
$base64_content = $_POST['src_data'];
// echo $base64_content;die;

//截取数据为数组
$base64_content = explode(',', $base64_content);

//生成目录：demo所在根目录下
// $new_file = "./".date('Ymd',time())."/";
// $new_file = "../signature".date('Ymd',time())."/";
$new_file = "../signature/";
if (!file_exists($new_file)) {
    //检查是否有该文件夹，如果没有就创建，并给予最高权限
    mkdir($new_file, 0700);
}

//文件后缀名
$type = 'png';
//生成文件名：相对路径
$new_file = $new_file . time() . ".$type";

// 根據簽名類型選擇更新對應的欄位
switch ($sign_type) {
    case 'assign':
        $sql_str = " `assign` = '$user', `assign_signature` = '$new_file', `assign_sign_time` = NOW()";
        break;
    case 'supervisor1':
        $sql_str = " `supervisor1` = '$user', `supervisor1_signature` = '$new_file', `supervisor1_sign_time` = NOW()";
        break;
    case 'supervisor2':
        $sql_str = " `supervisor2` = '$user', `supervisor2_signature` = '$new_file', `supervisor2_sign_time` = NOW()";
        break;
     default:
        $sql_str = " `employee_sign_imagePath` = '$employeeSign_imagePath_arr', `employee_sign_Date` = '$employeeSign_Date_arr'";
        $new_file = $datePath;
        break;
}

//转换为图片文件
if (file_put_contents($new_file, base64_decode($base64_content[1]))) {
    // 使用 `id` 和 `form_type` 作為唯一標識進行更新
    $sqlUpdate = "UPDATE `form_case_report` SET $sql_str WHERE `Case_seqid` = '$id' AND `form_type` = '$interlocution' ORDER BY 'form_case_report' DESC LIMIT 1;";

    echo $sqlUpdate;  // 打印 SQL 語句，方便調試
    if (mysqli_query($conn, $sqlUpdate)) {
        echo true;
    } else {
        echo false;
        echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    }
} else {
    return false;
}


mysqli_close($conn);
?>
