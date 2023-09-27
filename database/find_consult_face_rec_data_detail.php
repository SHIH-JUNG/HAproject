<?php 
include("sql_connect.php"); 
@$Phone_id = $_POST['Phone_id']; 
@$Id = $_POST['Id']; 
//region 抓資料
if(!empty($Id))
{
  $note = "SELECT * FROM `consult` WHERE `Id` = '$Id' AND `Way`='面訪';";
}
elseif(!empty($Phone_id))
{
  $note = "SELECT * FROM `consult` WHERE `Phone_id` = '$Phone_id' AND `Way`='面訪' ORDER BY `Id` DESC";
}
//宣告空的陣列
$datas = array();

$select_all = mysqli_query($conn, $note);

//如果請求成功
if ($select_all)
{
  //使用 mysqli_num_rows 方法，判別執行的語法，其取得的資料量，是否大於0
  if (mysqli_num_rows($select_all) > 0)
  {
    //取得的量大於0代表有資料
    //while迴圈會根據查詢筆數，決定跑的次數
    //mysqli_fetch_assoc 方法取得 一筆值
    while ($row = mysqli_fetch_assoc($select_all))
    {
      $datas[] = $row;
    }
  }

  //釋放資料庫查詢到的記憶體
  mysqli_free_result($select_all);
}
else
{
  echo "{$note} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
echo json_encode($datas);
//endregion
?>