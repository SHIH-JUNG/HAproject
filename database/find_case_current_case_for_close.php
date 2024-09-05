<?php 
include("sql_connect.php"); 

$Id = $_POST['Id'];
$Case_id = $_POST['Open_id'];

$sql = "SELECT `Close_case_date` FROM `current_case` WHERE `Id`=$Id AND `Case_id`='$Case_id' ORDER BY `current_case`.`Open_case_date` DESC LIMIT 1;";
// echo $sql;

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