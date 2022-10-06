<?php 
include("sql_connect.php"); 

@$mode = $_POST['mode'];
@$Id = $_POST['Case_seqid'];
// @$Case_id = $_POST['Case_id'];

if (!empty($_POST['Case_seqid'])) {
  $sql = "SELECT *, YEAR(Create_date) AS Year FROM `form_case_report` WHERE `Case_seqid` = '$Id' ORDER BY `form_case_report`.`Update_date` DESC;";
}
elseif (!empty($_POST['mode'])) {
  $sql = "SELECT Case_seqid FROM (SELECT * FROM `form_case_report` ORDER BY `form_case_report`.`Update_date` DESC LIMIT 9999) f_report GROUP BY f_report.Case_seqid;";
}
else {
  $sql = "SELECT *, YEAR(Create_date) AS Year FROM `form_case_report` ORDER BY `form_case_report`.`Update_date` DESC;";
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