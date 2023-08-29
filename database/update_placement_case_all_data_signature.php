<?php
session_start();
include("sql_connect.php");

$sign_info = $_POST['sign_info'];
$submit_board_type = $_POST['submit_board_type'];

$sign_msg = $_POST['sign_msg'];
$sign_type = $_POST['sign_type'];
$sign_name = $_POST['sign_name'];

$user = $_SESSION['name'];

$sign_info_arr = explode('_', $sign_info);


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

switch ($sign_type) {
    
    case 'supervise1':
        $sql_str = " `Supervise1` = '$user', `Supervise1_signature` = '$new_file', `Supervise1_sign_msg` = '$sign_msg',`Supervise1_sign_time` = NOW()";
        break;
    
    case 'supervise2':
        $sql_str = " `Supervise2` = '$user', `Supervise2_signature` = '$new_file', `Supervise2_sign_msg` = '$sign_msg',`Supervise2_sign_time` = NOW()";
        break;
    default:
        return false;
        break;
}

$sign_state_sqlstr2 = $sign_name."已簽核";
$sign_state_sqlstr1 = $sign_name."未簽核";

//转换为图片文件
if (file_put_contents($new_file, base64_decode($base64_content[1]))) {
    if($user == $sign_name){
        $sqlUpdate = "UPDATE `placement_form_all_info` SET $sql_str WHERE `Id` = '$sign_info_arr[0]' AND `Case_id` = '$sign_info_arr[2]' AND `Form_name` = '$submit_board_type' LIMIT 1;";
        $sqlUpdate .="UPDATE `signature_notice` SET `Sign_state` = REPLACE(`Sign_state`, '$sign_state_sqlstr1', '$sign_state_sqlstr2') WHERE `Sign_id` = '$sign_info' AND `Type`='placement_case' ORDER BY `signature_notice`.`Id` ASC LIMIT 1;";

        if (mysqli_multi_query($conn, $sqlUpdate)) {
            echo true;
        } else {
            echo false;
            echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
        }
    }
    else
    {
        echo "noallowsign";
    }
} else {
    return false;
}





mysqli_close($conn);
