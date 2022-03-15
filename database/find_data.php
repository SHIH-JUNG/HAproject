<?php
include("sql_connect.php"); 
//region 抓資料
$note = "SELECT *,DATE(`consult`.`Call_datetime`) AS Call_datetime FROM `consult` ORDER BY `consult`.`Call_datetime` DESC ,`consult`.`Phone_id` DESC;";
$select_note = mysqli_query($conn,$note);
$data = array();
$data['phone_count'] = array();
$data['Phone_id'] = array();
$data['Name'] = array();
$data['Call_datetime'] = array();
$data['Count'] =array();
$data['Way'] =array();
$data['Way_detail'] =array();
$data['Gender'] = array();
$data['Object_type'] =array();
$data['Addiction'] = array();
$data['Address'] =array();
$data['A_detail'] =array();
$data['L_detail'] =array();
$data['Relationship_detail'] =array();
$data['R_detail'] =array();
$data['Know_from_detail'] =array();
$data['Eligible'] =array();
$data['Assign'] =array();
$data['R_phone'] =array();
$data['Start_date'] =array();

for($i=1; $i <= mysqli_num_rows($select_note);$i++){
    $note_text = mysqli_fetch_row($select_note);
   $count = "SELECT COUNT(`phone_id`) FROM `consult` WHERE `phone_id`='$note_text[1]' AND `Way` = '電訪'";
   $select_count = mysqli_query($conn,$count);
   $count_text = mysqli_fetch_row($select_count);
        
    array_push($data['phone_count'], $count_text[0]);
    array_push($data['Phone_id'], $note_text[1]);
    array_push($data['Name'], $note_text[5]);
    array_push($data['Call_datetime'], $note_text[42]);
    array_push($data['Way'], $note_text[3]);
    array_push($data['Way_detail'], $note_text[4]);
    array_push($data['Count'], $note_text[27]);
    array_push($data['Gender'], $note_text[6]);
    array_push($data['Object_type'], $note_text[7]);
    array_push($data['Addiction'], $note_text[8]);
    array_push($data['Address'], $note_text[12]);
    array_push($data['A_detail'], $note_text[11]);
    array_push($data['L_detail'], $note_text[13]);
    array_push($data['Relationship_detail'], $note_text[15]);
    array_push($data['R_detail'], $note_text[16]);
    array_push($data['Know_from_detail'], $note_text[23]);
    array_push($data['Eligible'], $note_text[24]);
    array_push($data['Assign'], $note_text[25]);
    array_push($data['R_phone'], $note_text[17]);
    array_push($data['Start_date'], $note_text[30]);

  }
  mysqli_close($conn);
    echo json_encode($data);
//endregion
?>
