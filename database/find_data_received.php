<?php
include("sql_connect.php");
//region 抓資料
$note = "SELECT * FROM `received`";
$select_note = mysqli_query($conn, $note);
$data = array();
$data['id'] = array();
$data['date_come'] = array();
$data['unit_come'] = array();
$data['words_receive'] = array();
$data['subject'] = array();
$data['num_receive'] = array();


for ($i = 1; $i <= mysqli_num_rows($select_note); $i++) {
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['id'], $note_text[0]);
    array_push($data['date_come'], $note_text[2]);
    array_push($data['unit_come'], $note_text[3]);
    array_push($data['words_receive'], $note_text[4]);
    array_push($data['subject'], $note_text[1]);
    array_push($data['num_receive'], $note_text[5]);
}
mysqli_close($conn);
echo json_encode($data);
//endregion
