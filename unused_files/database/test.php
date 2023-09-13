<?php session_start(); ?>
<?php 
include("sql_connect.php");

function isJson($string) {
  json_decode($string);
  return json_last_error() === JSON_ERROR_NONE;
}

@$sql_find_case_info = "SELECT `answer` FROM `forms` WHERE `Case_seqid` = '6' AND `Case_id` = 'RE111' AND `Form_type` = 'interlocution' ORDER BY `forms`.`Id` DESC;";

//宣告空的陣列
$datas = array();

$select_all = mysqli_query($conn, $sql_find_case_info);

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
}

// print_r($datas);
// echo '<pre>';
// echo $datas[0]['answer'];
// echo '<pre>';
// echo $datas[1]['answer'];
// echo '<pre>';
// echo $datas[2]['answer'];

// echo '<pre>';
// echo $datas[2]['answer'];

// echo count($datas[2]['answer']);
$obj = str_replace(array('"[', ']"'), '', $datas[2]['answer']);
echo $obj;
$obj = json_decode($obj, true);
echo is_array($obj);
?>