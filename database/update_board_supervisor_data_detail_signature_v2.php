<?php
session_start();
include("sql_connect.php");
$bs_id = $_POST['bs_id'];
$sign_msg = $_POST['sign_msg'];
$sign_type = $_POST['sign_type'];
$sign_name = $_POST['sign_name'];


$user = $_SESSION['name'];
// $sign_url = $_POST['sign_url'];

/*  base64格式编码转换为图片并保存对应文件夹 */  
$base64_content = $_POST['src_data'];
// echo $base64_content;die;

//截取数据为数组
$base64_content= explode(',',$base64_content); 

//生成目录：demo所在根目录下
// $new_file = "./".date('Ymd',time())."/";  
// $new_file = "../signature".date('Ymd',time())."/";  
$new_file = "../board_supervisor/signature/";  
if(!file_exists($new_file)){  
	//检查是否有该文件夹，如果没有就创建，并给予最高权限  
	mkdir($new_file, 0700);  
}

//文件后缀名
$type = 'png';
//生成文件名：相对路径
$new_file = $new_file.time().".$type";

switch ($sign_type) {
    case 'supervise':
        $sql_str = " `Supervise` = '$user', `Supervise_signature` = '$new_file', `Supervise_sign_msg` = '$sign_msg',`Supervise_sign_time` = NOW()";
        break;
    case 'director':
        $sql_str = " `Director` = '$user', `Director_signature` = '$new_file', `Director_sign_msg` = '$sign_msg',`Director_sign_time` = NOW()";
        break;
    default:
            return false;
        break;
}

$sign_state_sqlstr2 = $sign_name."已簽核";
$sign_state_sqlstr1 = $sign_name."未簽核";

//转换为图片文件
if (file_put_contents($new_file,base64_decode($base64_content[1]))){
	$sqlUpdate ="UPDATE `board_supervisor_v2` SET $sql_str WHERE `Id` = '$bs_id' ORDER BY `board_supervisor_v2`.`Create_date` ASC LIMIT 1;";

    $sqlUpdate .="UPDATE `signature_notice` SET `Sign_state` = REPLACE(`Sign_state`, '$sign_state_sqlstr1', '$sign_state_sqlstr2') WHERE `Sign_id` = '$bs_id' AND `Type`='board_supervisor' ORDER BY `signature_notice`.`Id` ASC LIMIT 1;";

    if(mysqli_multi_query($conn, $sqlUpdate)){
        echo true;
    }else{
        echo false;
        echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
    }  
}else{ 
	return false;  
}  







mysqli_close($conn);

?>