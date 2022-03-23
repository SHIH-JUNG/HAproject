<?php
include("sql_connect.php");
//region 抓資料
$note = "SELECT * FROM `published`";
$select_note = mysqli_query($conn, $note);
$data = array();
$data['id'] = array();
$data['date_publish'] = array();
$data['unit'] = array();
$data['num_publish'] = array();
$data['subject'] = array();

for ($i = 1; $i <= mysqli_num_rows($select_note); $i++) {
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['id'], $note_text[0]);
    array_push($data['date_publish'], $note_text[1]);
    array_push($data['unit'], $note_text[2]);
    array_push($data['num_publish'], $note_text[3]);
    array_push($data['subject'], $note_text[4]);
}
mysqli_close($conn);
echo json_encode($data);
//endregion
