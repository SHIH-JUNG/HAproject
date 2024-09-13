<?php
session_start();
include("sql_connect.php");

// 設置字符編碼
header('Content-Type: text/html; charset=UTF-8');
mysqli_set_charset($conn, "utf8mb4");

$program_id = $_POST['program_id'];
$user = $_SESSION['name'];

$action = isset($_POST['action']) ? $_POST['action'] : '';

if ($action === 'delete_file') {
    // ... (刪除文件的代碼保持不變)
} else {
    $is_file_upload = isset($_POST['file_type']) && isset($_FILES['files']);

    if ($is_file_upload) {
        $file_type = $_POST['file_type'];
    } else {
        $date = $_POST['Date'];
        $plan_name = $_POST['Plan_name'];
        $plan_from = $_POST['Plan_from'];
        $fund = $_POST['Fund'];
        $remark = $_POST['Remark'];
    }

    $file_dir = "../program_plan/program_plan_user{$program_id}/program_plan_datas/";

    if (!is_dir($file_dir)) {
        mkdir($file_dir, 0777, true);
    }

    $file_paths = [];

    if ($is_file_upload && isset($_FILES['files'])) {
        $existing_query = "SELECT File_path FROM program_plan_form WHERE Program_id = '$program_id' AND File_type = '$file_type'";
        $existing_result = mysqli_query($conn, $existing_query);
        $existing_row = mysqli_fetch_assoc($existing_result);

        if ($existing_row) {
            $file_paths = json_decode($existing_row['File_path'], true) ?: [];
        }

        foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
            // 解碼並轉換文件名
            $file_name = urldecode($_POST['filenames'][$key]);
            $file_name = iconv('UTF-8', 'UTF-8//IGNORE', $file_name);

            // 生成唯一的文件名以避免衝突
            $file_path = $file_dir . $file_name;
            if (file_exists($file_path)) {
                $file_name_parts = pathinfo($file_name);
                $unique_id = uniqid();
                $file_path = $file_dir . $file_name_parts['filename'] . '_' . $unique_id . '.' . $file_name_parts['extension'];
            }
            move_uploaded_file($tmp_name, $file_path);
            $file_paths[] = $file_name; // 存储原始文件名
        }
    }

    $success = true;
    $message = '';

    if (!empty($file_paths) || !$is_file_upload) {
        $file_year = date("Y") - 1911;
        $update_date = date("Y-m-d H:i:s");

        if ($is_file_upload) {
            $json_paths = json_encode($file_paths, JSON_UNESCAPED_UNICODE);
            $json_paths = mysqli_real_escape_string($conn, $json_paths);

            $query = "INSERT INTO `program_plan_form`
                (`Program_id`, `File_type`, `File_year`, `File_path`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`)
                VALUES ('$program_id', '$file_type', '$file_year', '$json_paths', '$update_date', '$user', '$update_date', '$user')
                ON DUPLICATE KEY UPDATE
                `File_path` = '$json_paths',
                `Update_date` = '$update_date',
                `Update_name` = '$user'";
        } else {
            // 使用參數化查詢來防止SQL注入
            $stmt = mysqli_prepare($conn, "UPDATE `program_plan` SET
                `Date` = ?, `Plan_name` = ?, `Plan_from` = ?, `Fund` = ?, `Remark` = ?,
                `Update_date` = ?, `Update_name` = ? WHERE `Id` = ?");

            mysqli_stmt_bind_param($stmt, "ssssssss", $date, $plan_name, $plan_from, $fund, $remark, $update_date, $user, $program_id);

            if (!mysqli_stmt_execute($stmt)) {
                $success = false;
                $message = '更新失敗: ' . mysqli_stmt_error($stmt);
            }
            mysqli_stmt_close($stmt);
        }

        if ($is_file_upload && !mysqli_query($conn, $query)) {
            $success = false;
            $message = '更新失敗: ' . mysqli_error($conn);
        }
    } else {
        $success = false;
        $message = '沒有文件被上傳';
    }

    if ($success) {
        echo json_encode(['status' => 'success', 'message' => '更新成功'], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode(['status' => 'error', 'message' => $message], JSON_UNESCAPED_UNICODE);
    }
}

mysqli_close($conn);
?>