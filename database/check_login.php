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
	if($row[2] == $id && $row[3] == $pw)
	{
        //將帳號寫入session，方便驗證使用者身份
		$_SESSION['Account'] = $id; 
        $_SESSION['acc_id'] = $row[0];
        $_SESSION['resume_id'] = $row[1];
        $_SESSION['authority'] = $row[5];
        $_SESSION['name'] = $row[4];
        $_SESSION['department'] = $row[7];
        $_SESSION['job'] = $row[8];

        $_SESSION['login']= 10;
        $_SESSION['pwd'] = $pw;

        $a = session_id();

        echo true;
	}
    else
    {
        echo false;
    }
}else{
    echo false;
}



//   print_r($row);
//   echo $_SESSION['authority'];
  mysqli_close($conn);//關閉對資料庫的連線
?>