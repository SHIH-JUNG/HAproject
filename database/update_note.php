<?php session_start(); ?>
<?php
include("sql_connect.php");

$id = $_POST['id'];
$title = $_POST['title'];
$description = $_POST['description'];
$start = $_POST['start'];
$end = $_POST['end'];

@$db_name = $_POST['db_name'];
@$db_id = $_POST['db_id'];
@$authority_num = $_POST['authority_num'];

$user = $_SESSION['name'];


$Update_auto_note = "UPDATE `sign_notice` SET `file_name` = '$title',`datetime` = '$start' WHERE `sign_notice`.`id` = '$id';";
mysqli_query($conn,$Update_auto_note);



if($db_name == 'vehicle_retain')
{
    $sqlUpdate = "UPDATE `calendar` SET `title` = '$title', `description` = '$description', `start` = '$start',`end` = '$end' WHERE `calendar`.`id` = '$id';";

    $date_s = date('Y-m-d', strtotime($start));
    $time_s = date('H:i:s', strtotime($start));

    $date_e = date('Y-m-d', strtotime($end));
    $time_e = date('H:i:s', strtotime($end));

    $sqlUpdate .= "UPDATE `vehicle_retain` SET `Back_timestap` = '$time_e', `Out_timestap` = '$time_s', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$db_id';";
}
elseif ($db_name == 'visit_index') {
    $sqlUpdate = "UPDATE `calendar` SET `title` = '$title', `description` = '$description', `end` = '$end' WHERE `calendar`.`id` = '$id';";

    $sqlUpdate .= "UPDATE `visit_index` SET `Visit_end_time` = '$end', `Update_name` = '$user', `Update_date` = NOW() WHERE `Id` = '$db_id';";
}
elseif ($db_name == 'day_off') {
    $sqlUpdate = "UPDATE `calendar` SET `title` = '$title' WHERE `calendar`.`id` = '$id';";
}
elseif ($db_name == 'supervisor_record' || $db_name == 'board_supervisor'  || $db_name == 'members_assemble') {
    $sqlUpdate = "UPDATE `calendar` SET `title` = '$title' WHERE `calendar`.`id` = '$id';";
}
elseif ($db_name == 'announcement') {
    $ann_description = "標題：" . $title . "，權限：" . $authority_num . "，發佈時間：" . $start;

    $sqlUpdate = "UPDATE `calendar` SET `title` = '$title', `start` = '$start', `end` = '$start', `description` = '$ann_description' WHERE `calendar`.`id` = '$id';";

    $sqlUpdate .= "UPDATE `announcement` SET `title` = '$title', `datetime` = '$start' WHERE `Id` = '$db_id';";
}
else
{

}


if(mysqli_multi_query($conn, $sqlUpdate)){
    echo true;
    // echo $sqlUpdate;
}else{
    echo false;
}
mysqli_close($conn);

?>