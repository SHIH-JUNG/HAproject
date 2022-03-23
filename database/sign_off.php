<?php
include("sql_connect.php");
//region 抓資料
$note = "SELECT * FROM `sign_off`;";
$select_note = mysqli_query($conn, $note);
$data = array();
$data['id'] = array();
$data['info_name'] = array();
$data['submitter'] = array();
$data['submit_date'] = array();
$data['read_date'] = array();
$data['audit_date'] = array();
$data['state'] = array();



for ($i = 1; $i <= mysqli_num_rows($select_note); $i++) {
    $note_text = mysqli_fetch_row($select_note);

    array_push($data['id'], $note_text[0]);
    array_push($data['info_name'], $note_text[1]);
    array_push($data['submitter'], $note_text[2]);
    array_push($data['submit_date'], $note_text[3]);
    array_push($data['read_date'], $note_text[4]);
    array_push($data['audit_date'], $note_text[5]);
    array_push($data['state'], $note_text[6]);
}
mysqli_close($conn);
echo json_encode($data);
//endregion
