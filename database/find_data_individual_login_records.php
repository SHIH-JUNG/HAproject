<?php 
include("sql_connect.php"); 
session_start();

$user_aacount = $_SESSION['Account'];
$user_name = $_SESSION['name'];
@$mode = $_POST['mode'];


if(!empty($_POST['mode']))
{
    $sql = "SELECT *, COUNT(*) as count FROM (SELECT * FROM `login_record` WHERE `Login_account` = '$user_aacount' AND `Login_name` = '$user_name' ORDER BY `Id` DESC LIMIT 9999) LGRC GROUP BY MONTH(LGRC.Login_timestamp) ORDER BY `Id` DESC;";
}
else
{
    $sql = "SELECT * FROM `login_record` WHERE `Login_account` = '$user_aacount' AND `Login_name` = '$user_name' ORDER BY `Id` DESC;";
}


//宣告空的陣列
$datas = array();

$query = mysqli_query($conn, $sql);

//如果請求成功
if ($query)
{
  //使用 mysqli_num_rows 方法，判別執行的語法，其取得的資料量，是否大於0
  if (mysqli_num_rows($query) > 0)
  {
    //取得的量大於0代表有資料
    //while迴圈會根據查詢筆數，決定跑的次數
    //mysqli_fetch_assoc 方法取得 一筆值
    while ($row = mysqli_fetch_assoc($query))
    {
      $datas[] = $row;
    }
  }
  
  //釋放資料庫查詢到的記憶體
  mysqli_free_result($query);
}
else
{
  echo "{$sql} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
echo json_encode($datas);
//endregion
?>