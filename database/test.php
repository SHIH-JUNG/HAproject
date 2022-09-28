<?php 

// 檔名格式 標題_日期.副檔名
$file_prop = "履歷表檔案_20220108.pdf";


function get_file_name_and_date($file)
{
  // 分割副檔名 -> 標題_日期
  $file_name  = explode(".",$file);
  // 分割檔名 -> 標題、日期
  $file_title = explode("_",$file_name[0])[0];
  $file_date = explode("_",$file_name[0])[1];

  return array($file_title, $file_date);
}

$get_file_array = get_file_name_and_date($file_prop);

// $get_file_array[0] 檔案標題，ex：履歷表檔案
echo $get_file_array[0];
// $get_file_array[1] 檔案日期，ex：20220108
echo $get_file_array[1];


?>