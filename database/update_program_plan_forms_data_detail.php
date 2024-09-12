<?php
session_start();
include("sql_connect.php");

$program_id = $_POST['program_id'];
$date = $_POST['Date'];
$plan_name = $_POST['Plan_name'];
$plan_from = $_POST['Plan_from'];
$fund = $_POST['Fund'];
$remark = $_POST['Remark'];
$user = $_SESSION['name'];

// 檔案上傳處理
$file_types = ['file_A', 'file_C', 'file_D'];
$file_paths = [];
$file_dir = "../program_plan/program_plan_user{$program_id}_{$plan_name}/program_plan_datas/";

if (!is_dir($file_dir)) {
    mkdir($file_dir, 0777, true);
}

foreach ($file_types as $index => $file_type) {
    if (isset($_FILES["program_forms_files{$index}"]) && $_FILES["program_forms_files{$index}"]['error'] == 0) {
        $file_name = $_FILES["program_forms_files{$index}"]["name"];
        $file_path = $file_dir . $file_name;
        move_uploaded_file($_FILES["program_forms_files{$index}"]["tmp_name"], $file_path);
        $file_paths[$file_type][] = $file_path;
    }
}

// 更新資料庫
$update_queries = [];

foreach ($file_types as $file_type) {
    if (!empty($file_paths[$file_type])) {
        $json_paths = json_encode($file_paths[$file_type]);
        $file_year = date("Y") - 1911;
        $update_date = date("Y-m-d H:i:s");

        $update_queries[] = "INSERT INTO `program_plan_form`
            (`Program_id`, `File_type`, `File_year`, `File_path`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`)
            VALUES ('$program_id', '$file_type', '$file_year', '$json_paths', '$update_date', '$user', '$update_date', '$user')
            ON DUPLICATE KEY UPDATE
            `File_path` = '$json_paths',
            `Update_date` = '$update_date',
            `Update_name` = '$user'";
    }
}

// 更新主表
$update_queries[] = "UPDATE `program_plan` SET
    `Date` = '$date',
    `Plan_name` = '$plan_name',
    `Plan_from` = '$plan_from',
    `Fund` = '$fund',
    `Remark` = '$remark',
    `Update_date` = NOW(),
    `Update_name` = '$user'
    WHERE `Id` = '$program_id'";

$success = true;
foreach ($update_queries as $query) {
    if (!mysqli_query($conn, $query)) {
        $success = false;
        break;
    }
}

if ($success) {
    echo json_encode(['status' => 'success', 'message' => '更新成功']);
} else {
    echo json_encode(['status' => 'error', 'message' => '更新失敗: ' . mysqli_error($conn)]);
}

mysqli_close($conn);
?>