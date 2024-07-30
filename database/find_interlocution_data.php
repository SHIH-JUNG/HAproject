<?php
include("sql_connect.php");

$sign_name = $_POST['sign_name'];
$signature_data = $_POST['signature_data'];
$sign_board_name = $_POST['sign_board_name'];
$id = $_POST['id'];

// 生成簽名檔名
$signature_file_name = $sign_name . "_" . time() . ".png";
$signature_file_path = "../signature/" . $signature_file_name;

// 保存簽名圖片
file_put_contents($signature_file_path, base64_decode($signature_data));

// 更新資料庫
$column_name = ($sign_board_name == "assign") ? "assign_signature" : "supervisor_signature";
$sign_column = ($sign_board_name == "assign") ? "assign" : "supervisor";

$query = "UPDATE `form_case_report` SET `$column_name` = '$signature_file_path', `$sign_column` = '$sign_name' WHERE `Id` = '$id'";
$result = mysqli_query($conn, $query);

$response = array();
if ($result) {
  $response['success'] = true;
  $response['signature_path'] = $signature_file_path;
} else {
  $response['success'] = false;
}

mysqli_close($conn);

echo json_encode($response);
?>
