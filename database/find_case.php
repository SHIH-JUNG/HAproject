<?php 
include("sql_connect.php"); 
// @$face_id = $_POST['face_id'];
@$Phone_id = $_POST['Phone_id'];
// @$four_id = $_POST['four_id'];
@$Open_id = $_POST['Open_id'];
// $Phone_id = '4';
// $Open_id = '2';
//region 抓資料
if($Open_id != "" && $Phone_id != ""){
    $note = "SELECT *,DATE(`current_case`.`Open_case_date`) AS Open_case_date FROM `current_case` WHERE `Phone_id`='$Phone_id' AND `Case_id`='$Open_id' ORDER BY `current_case`.`Open_case_date` ASC";
}
// else if($four_id != ""){
//     $note = "SELECT * FROM `four` WHERE `Id`='$four_id' ORDER BY `four`.`datetime` DESC limit 1";
// }
// else if($face_id != ""){
//     $note = "SELECT * FROM `four` WHERE `face_id`='$face_id' ORDER BY `four`.`datetime` DESC limit 1";
// }
else{
    $note = "SELECT *,DATE(`current_case`.`Open_case_date`) AS Open_case_date FROM `current_case` WHERE `Case_state` = '未結案' ORDER BY `current_case`.`Open_case_date` DESC";
}

$select_note = mysqli_query($conn,$note);
$data = array();
$data['Case_id'] = array();
$data['Phone_id'] = array();
$data['Scale_id'] = array();
$data['Open_case_date'] = array();
$data['Close_case_date'] = array();
$data['Case_grade'] = array();
$data['Case_state'] = array();
$data['Name'] = array();
$data['Case_pid'] = array();
$data['Gender'] = array();
$data['Case_property'] = array();
$data['Object_type'] = array();
$data['M_addiction'] = array();
$data['Age'] = array();
$data['Info_Name'] = array();
$data['R_phone'] = array();
$data['Referral'] = array();
$data['Referral_phone'] = array();
$data['Remark'] = array();
$data['Assign'] = array();
$data['times'] = array();

for($i=1; $i <= mysqli_num_rows($select_note);$i++){    
    $note_text = mysqli_fetch_row($select_note);
    $Phone_id = $note_text[1];    
    $count = "SELECT COUNT(CONCAT(`Phone_id`)) FROM `current_case` WHERE `Phone_id` = '$Phone_id'";
    $select_count = mysqli_query($conn,$count);
    $count_text = mysqli_fetch_row($select_count);
    
    array_push($data['Case_id'], $note_text[1]);
    array_push($data['Phone_id'], $note_text[2]);
    array_push($data['Scale_id'], $note_text[3]);
    array_push($data['Open_case_date'], $note_text[25]);
    array_push($data['Close_case_date'], $note_text[5]);
    array_push($data['Case_grade'], $note_text[6]);
    array_push($data['Case_state'], $note_text[7]);
    array_push($data['Name'], $note_text[8]);
    array_push($data['Case_pid'], $note_text[9]);
    array_push($data['Gender'], $note_text[10]);
    array_push($data['Case_property'], $note_text[11]);
    array_push($data['Object_type'], $note_text[12]);
    array_push($data['M_addiction'], $note_text[13]);
    array_push($data['Age'], $note_text[14]);
    array_push($data['Info_Name'], $note_text[15]);
    array_push($data['R_phone'], $note_text[16]);
    array_push($data['Referral'], $note_text[17]);
    array_push($data['Referral_phone'], $note_text[18]);
    array_push($data['Remark'], $note_text[19]);
    array_push($data['Assign'], $note_text[20]); 
    array_push($data['times'], $count_text[0]);
}
// echo "<pre>";
// echo print_r($data);

mysqli_close($conn);
echo json_encode($data);
//endregion
?>