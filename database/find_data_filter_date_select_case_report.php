<?php 
include("sql_connect.php"); 

$filter_date_select = $_POST['filter_date_select'];
$assign = $_POST['assign'];

// $filter_date_select = "今年";
// $assign = "社工員1";


$select_sql = "";


if($assign != "")
{
    $select_sql .= "`Case_assign`='$assign'";
}

$select_sql2 = "";

switch ($filter_date_select) {
    case '所有資料':
        $select_sql2 .= "";
        break;
    case '本週':
        $select_sql2 .= "YEARWEEK(date_format(Create_date,'%Y-%m-%d'),1) = YEARWEEK(NOW(),1)";
        break;
    case '上週':
        $select_sql2 .= "YEARWEEK(date_format(Create_date,'%Y-%m-%d'),1) = YEARWEEK(NOW(),1)-1";
        break;
    case '本月':
        $select_sql2 .= "date_format(Create_date,'%Y-%m')=date_format(now(),'%Y-%m')";
        break;
    case '上月':
        $select_sql2 .= "date_format(Create_date,'%Y-%m')=date_format(DATE_SUB(curdate(), INTERVAL 1 MONTH),'%Y-%m')";
        break;
    case '本季':
        $select_sql2 .= "QUARTER(Create_date)=QUARTER(NOW())";
        break;
    case '上季':
        $select_sql2 .= "QUARTER(Create_date)=QUARTER(DATE_SUB(NOW(),interval 1 QUARTER))";
        break;
    case '距今半年':
        $select_sql2 .= "Create_date between date_sub(now(),interval 6 month) and now()";
        break;
    case '今年':
        $select_sql2 .= "YEAR(Create_date)=YEAR(NOW())";
        break;
    case '去年':
        $select_sql2 .= "YEAR(Create_date)=YEAR(date_sub(NOW(),interval 1 YEAR))";
        break;
    default:
        $select_sql2 .= "";
        break;
}

$select_sql_fin = "";

if($select_sql!="" AND $select_sql2=="")
{
    $select_sql_fin = "WHERE " . $select_sql;
}
else if($select_sql=="" AND $select_sql2!="")
{
    $select_sql_fin = "WHERE " . $select_sql2;
}
else if($select_sql!="" AND $select_sql2!="")
{
    $select_sql_fin = "WHERE " . $select_sql . " AND " . $select_sql2;
}
else
{
    $select_sql_fin = "";
}


$sql = "SELECT `Id`,`Case_assign`,`Case_seqid`, `Case_id`, `Form_id`, `Open_case_date`, `Name`, `Case_grade`, `Case_state`, 
SUM(Interlocution_home_count) AS Interlocution_home_count, SUM(Interlocution_phone_count) AS Interlocution_phone_count
, SUM(Interlocution_face_count) AS Interlocution_face_count, SUM(Case_count) AS Case_count
, SUM(Case_closed_count) AS Case_closed_count, SUM(Employment_satif_count) AS Employment_satif_count, `Create_date` FROM (
  SELECT * FROM `case_report` $select_sql_fin ORDER BY `Id` DESC LIMIT 9999) c_report GROUP BY c_report.Case_seqid ORDER BY `Create_date` ASC;";

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