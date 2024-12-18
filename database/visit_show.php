<?php
include("sql_connect.php"); 
//region 抓資料

@$Id = $_POST['Id'];

//宣告空的陣列
$datas = array();

if(isset($_POST['Id']))
{
  $sql = "SELECT * FROM `visit_index` WHERE `Id`='$Id' ORDER BY `visit_index`.`Visit_time` DESC";
}
else
{
  $sql = "SELECT * FROM `visit_index` ORDER BY `visit_index`.`Id` DESC";
}


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
