<?php
include("sql_connect.php"); 
//region 抓資料
$note = "SELECT * FROM `tw_counties` ORDER BY `tw_counties`.`Id` ASC;";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['Id'] = array();
$data['Area'] = array();
$data['Counties_Cities'] = array();




for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);

    array_push($data['Id'], $note_text[0]);
    array_push($data['Area'], $note_text[1]);
    array_push($data['Counties_Cities'], $note_text[2]);

  }
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>
