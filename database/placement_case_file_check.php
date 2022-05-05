<?php session_start(); ?>
<?php
//連接資料庫
//只要此頁面上有用到連接MySQL就要include它
include("sql_connect.php");
$Case_id = $_POST['Case_id'];
$Form_id = $_POST['Form_id'];
$Form_type = $_POST['Form_type'];
$Case_pid = $_POST['Case_pid'];

@$file = "../upload/" . $_POST['file_name'];


//宣告空的陣列
$datas = array();

$sql = "SELECT `Case_id`,`Form_id`,`Form_type`,`Case_pid`,`Create_name`,`Update_name`,`file_path` FROM `forms` WHERE `file_path` = '$file' AND `Case_id` != '$Case_id' AND `Form_id` != '$Form_id' AND `Form_type` != '$Form_type' AND `Case_pid` != '$Case_pid';";

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
?>