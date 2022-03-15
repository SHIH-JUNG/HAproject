<?php
include("sql_connect.php"); 
//region 抓資料
$note = "SELECT *, DATE_FORMAT(`Reservation_time`, '%H:%i') As Reservation_time FROM `screening`";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['Id'] = array();
$data['Screening_id'] = array();
$data['Reservation_date'] = array();
$data['Reservation_time'] =array();
$data['Name'] = array();
$data['Age'] =array();
$data['A_detail'] =array();
$data['Phone'] =array();
$data['Gender'] =array();
$data['Sexual_orientation'] =array();
$data['Screening_type'] =array();
$data['Screening_results'] =array();
$data['Interview_content'] =array();
$data['Remark'] =array();
$data['Reagent_seq'] =array();
$data['Amount'] =array();
$data['Create_date'] =array();
$data['Create_name'] =array();
$data['Update_date'] =array();
$data['Update_name'] =array();


for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
    array_push($data['Id'], $note_text[0]);
    array_push($data['Screening_id'], $note_text[1]);
    array_push($data['Reservation_date'], $note_text[2]);
    array_push($data['Reservation_time'], $note_text[20]);
    array_push($data['Name'], $note_text[4]);
    array_push($data['Age'], $note_text[5]);
    array_push($data['A_detail'], $note_text[6]);
    array_push($data['Phone'], $note_text[7]);
    array_push($data['Gender'], $note_text[8]);
    array_push($data['Sexual_orientation'], $note_text[9]);
    array_push($data['Screening_type'], $note_text[10]);
    array_push($data['Screening_results'], $note_text[11]);
    array_push($data['Interview_content'], $note_text[12]);
    array_push($data['Remark'], $note_text[13]);
    array_push($data['Reagent_seq'], $note_text[14]);
    array_push($data['Amount'], $note_text[15]);
    array_push($data['Create_date'], $note_text[16]);
    array_push($data['Create_name'], $note_text[17]);
    array_push($data['Update_date'], $note_text[18]);
    array_push($data['Update_name'], $note_text[19]);
  }
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>
