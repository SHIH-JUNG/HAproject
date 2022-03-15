<?php 
include("sql_connect.php"); 

$Case_id = $_POST['Case_id'];
$Form_id = $_POST['Form_id'];
$Form_type = $_POST['Form_type'];
$Case_pid = $_POST['Case_pid'];
//region 抓資料


$sql_find = "SELECT count(`Form_id`) FROM `forms` WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid';";

$find_num = mysqli_query($conn,$sql_find);
$form_id_num = mysqli_fetch_row($find_num);

if($form_id_num[0]>0)
{
    $sql = "SELECT `answer`,`file_path` FROM `forms` WHERE `Case_id` = '$Case_id' AND `Form_id` = '$Form_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' ORDER BY `forms`.`Id` DESC;";
}
else
{
    $sql = "SELECT `answer`,`file_path` FROM `forms` WHERE `Case_id` = '$Case_id' AND `Form_type` = '$Form_type' AND `Case_pid` = '$Case_pid' ORDER BY `forms`.`Id` DESC LIMIT 1;";
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