<?php
include("sql_connect.php"); 
//region 抓資料
$year = $_POST['year'];

$note = "SELECT *, ROUND(`Income_sum`,0) AS Income_sum, ROUND(`Cost_sum`,0) AS Cost_sum, ROUND(`Last_pb`,0) AS Last_pb, ROUND((`accounting_record_cash_balance_v2`.`Income_sum`-`accounting_record_cash_balance_v2`.`Cost_sum`), 0) AS This_pb FROM `accounting_record_cash_balance_v2` Where `Year` = '$year' ORDER BY `accounting_record_cash_balance_v2`.`Id` ASC;";

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
