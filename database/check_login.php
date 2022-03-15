<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$id = $_POST['id'];
$pw = $_POST['pw'];

// $id = 'test5';
// $pw = '258';
if($id != null && $pw !=null){
    $sql = "SELECT * FROM `user_info` where account = '$id'";
    $result = mysqli_query($conn,$sql);
    $row = @mysqli_fetch_row($result);
//搜尋資料庫資料	
	if($row[1] == $id && $row[2] == $pw)
	{
        //將帳號寫入session，方便驗證使用者身份
		$_SESSION['Account'] = $id; 
        $_SESSION['authority'] = $row[4];
        $_SESSION['name'] = $row[3];
        $_SESSION['department'] = $row[6];
        $_SESSION['job'] = $row[7];
        echo true;
	}else{
        echo false;
    }
}else{
    echo false;
}

//   print_r($row);
//   echo $_SESSION['authority'];
  mysqli_close($conn);//關閉對資料庫的連線
?>