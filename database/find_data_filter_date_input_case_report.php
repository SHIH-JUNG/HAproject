<?php 
include("sql_connect.php"); 

$r_min_date = $_POST['r_min_date'];
$r_max_date = $_POST['r_max_date'];
$assign = $_POST['assign'];

// $r_min_date = "2022-04-01";
// $r_max_date = "2022-10-10";
// $assign = "社工員1";

$select_sql = "";

if($assign != "")
{
    $select_sql .= "`Case_assign`='$assign'";
}

if($r_min_date != "" AND $assign!="")
{
    $select_sql .= " AND`Create_date` >= '$r_min_date'";
}
else if($r_min_date != "" AND $assign=="")
{
    $select_sql .= "`Create_date` >= '$r_min_date'";
}

if($r_max_date != "")
{
    $select_sql .= " AND `Create_date` <= '$r_max_date'";
}
else if($r_max_date != "" AND $assign=="")
{
    $select_sql .= "`Create_date` <= '$r_max_date'";
}








$sql = "SELECT `Id`,`Case_assign`,`Case_seqid`, `Case_id`, `Form_id`,
 `Open_case_date`, `Name`, `Case_grade`, `Case_state`,
 SUM(Interlocution_home_count) AS Interlocution_home_count,
  SUM(Interlocution_phone_count) AS Interlocution_phone_count,
   SUM(Interlocution_face_count) AS Interlocution_face_count,
    SUM(Case_count) AS Case_count, SUM(Case_closed_count) AS Case_closed_count,
     SUM(Employment_satif_count) AS Employment_satif_count, `Create_date`
      FROM (SELECT * FROM `case_report` 
      WHERE $select_sql
       ORDER BY `Id` DESC LIMIT 9999) c_report GROUP BY c_report.Case_seqid ORDER BY `Create_date` ASC;";

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

// echo $sql;

mysqli_close($conn);
echo json_encode($datas);
//endregion
?>