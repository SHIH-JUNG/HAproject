<?php
include("sql_connect.php");
@$Id = $_POST['Id'];

//宣告空的陣列
$datas = array();

$find_four_all = "SELECT *,DATE(`form_all_info`.`Create_date`) AS Form_Create_date FROM `form_all_info` WHERE `Id` = '$Id' ORDER BY `form_all_info`.`Id` ASC";


$select_four_all = mysqli_query($conn, $find_four_all);

//如果請求成功
if ($select_four_all)
{
  //使用 mysqli_num_rows 方法，判別執行的語法，其取得的資料量，是否大於0
  if (mysqli_num_rows($select_four_all) > 0)
  {
    //取得的量大於0代表有資料
    //while迴圈會根據查詢筆數，決定跑的次數
    //mysqli_fetch_assoc 方法取得 一筆值
    while ($row = mysqli_fetch_assoc($select_four_all))
    {
      $datas[] = $row;
    }
  }

  //釋放資料庫查詢到的記憶體
  mysqli_free_result($select_four_all);
}
else
{
  echo "{$find_four_all} 語法執行失敗，錯誤訊息：" . mysqli_error($conn);
}

mysqli_close($conn);
echo json_encode($datas);
// echo '<pre>';
// var_dump($datas);
?>