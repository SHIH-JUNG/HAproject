<?php
session_start();
include("sql_connect.php");
$dlgrec_id = $_POST['dlgrec_id']; 
$sign_msg = $_POST['sign_msg'];
$sign_type = $_POST['sign_type'];
$sign_name = $_POST['sign_name'];

$user = $_SESSION['name'];


/*  base64格式编码转换为图片并保存对应文件夹 */  
$base64_content = $_POST['src_data'];
// echo $base64_content;die;

//截取数据为数组
$base64_content= explode(',',$base64_content); 

//生成目录：demo所在根目录下
// $new_file = "./".date('Ymd',time())."/";  
// $new_file = "../signature".date('Ymd',time())."/";  
$new_file = "../signature/";  
if(!file_exists($new_file)){  
	//检查是否有该文件夹，如果没有就创建，并给予最高权限  
	mkdir($new_file, 0700);  
}

//文件后缀名
$type = 'png';
//生成文件名：相对路径
$new_file = $new_file.time().".$type";

switch ($sign_type) {
    case 'supervise1':
        $sql_str = " `supervise1` = '$user', `supervise1_sign` = '$new_file', `supervise1_sign_msg` = '$sign_msg',`supervise1_sign_time` = NOW()";
        break;
    case 'supervise2':
        $sql_str = " `supervise2` = '$user', `supervise2_sign` = '$new_file', `supervise2_sign_msg` = '$sign_msg',`supervise2_sign_time` = NOW()";
        break;
    case 'social_worker':
        $sql_str = " `social_worker` = '$user', `social_worker_sign` = '$new_file', `social_worker_sign_msg` = '$sign_msg',`social_worker_sign_time` = NOW()";
        break;
    default:
            return false;
        break;
}


$sign_state_sqlstr2 = $sign_name."已簽核";
$sign_state_sqlstr1 = $sign_name."未簽核";


//转换为图片文件
if (file_put_contents($new_file,base64_decode($base64_content[1]))){
    if($user == $sign_name){
        $sqlUpdate ="UPDATE `dlgrec` SET $sql_str WHERE `Id` = '$dlgrec_id' ORDER BY `dlgrec`.`Create_date` ASC LIMIT 1;";

        $sqlUpdate .="UPDATE `signature_notice` SET `Sign_state` = REPLACE(`Sign_state`, '$sign_state_sqlstr1', '$sign_state_sqlstr2') WHERE `Sign_id` = '$dlgrec_id' AND `Type`='dlgrec' ORDER BY `signature_notice`.`Id` ASC LIMIT 1;";


        if(mysqli_multi_query($conn, $sqlUpdate)){
            echo true;
        }else{
            echo false;
            echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
        }  

    }
    else
    {
        echo "noallowsign";
    }
}else{ 
	return false;  
}  





mysqli_close($conn);

?>