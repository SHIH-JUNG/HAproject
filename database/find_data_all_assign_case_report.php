<?php 
include("sql_connect.php"); 


$sql = "SELECT `Id`,`Case_assign`,`Case_seqid`, `Case_id`, `Form_id`, `Open_case_date`, `Name`, `Case_grade`, `Case_state`
,SUM(Interlocution_home_count) AS Interlocution_home_count, SUM(Interlocution_phone_count) AS Interlocution_phone_count
, SUM(Interlocution_face_count) AS Interlocution_face_count, SUM(Case_count) AS Case_count
, SUM(Case_closed_count) AS Case_closed_count, SUM(Employment_satif_count) AS Employment_satif_count, `Create_date` FROM (
  SELECT * FROM `case_report` WHERE YEAR(Create_date)=YEAR(NOW()) ORDER BY `Id` DESC LIMIT 9999) c_report GROUP BY c_report.Case_seqid ORDER BY `Create_date` ASC;";

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