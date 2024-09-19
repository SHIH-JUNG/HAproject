<?php
session_start();
include("sql_connect.php");

// 設置字符編碼
header('Content-Type: text/html; charset=UTF-8');
mysqli_set_charset($conn, "utf8mb4");

$program_id = $_POST['program_id'];
$file_types = ['file_A_arr', 'file_C_arr', 'file_D_arr'];
$user = $_SESSION['name'];

$action = isset($_POST['action']) ? $_POST['action'] : '';

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

$success = true;
$message = '';

if ($is_file_upload && isset($_FILES['files'])) {
    $existing_query = "SELECT File_path FROM program_plan_form WHERE Program_id = '$program_id' AND File_type = '$file_type'";
    $existing_result = mysqli_query($conn, $existing_query);
    $existing_row = mysqli_fetch_assoc($existing_result);

    if ($existing_row) {
        $file_paths = json_decode($existing_row['File_path'], true) ?: [];
    } else {
        $file_paths = [];
    }

    foreach ($_FILES['files']['tmp_name'] as $key => $tmp_name) {
        // 解碼並轉換文件名
        $filename = urldecode($_POST['filenames'][$key]);
        $filename = mb_convert_encoding($filename, 'UTF-8', 'auto');

        // 移除文件名中的非法字符
        $filename = preg_replace('/[^\p{L}\p{N}\s\-\_\.]/u', '', $filename);

        // 確保檔案名不重複
        $file_path = $file_dir . $filename;
        $counter = 1;
        while (file_exists($file_path)) {
            $info = pathinfo($filename);
            $filename = $info['filename'] . '_' . $counter . '.' . $info['extension'];
            $file_path = $file_dir . $filename;
            $counter++;
        }

        if (move_uploaded_file($tmp_name, $file_path)) {
            $relative_path = ltrim("program_plan/program_plan_user{$program_id}/program_plan_datas/{$filename}", '/');
            $file_paths[] = $relative_path;
        }
    }

    if (!empty($file_paths)) {
        $file_year = date("Y") - 1911;
        $update_date = date("Y-m-d H:i:s");

        $json_paths = json_encode($file_paths, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        $json_paths = mysqli_real_escape_string($conn, $json_paths);
        $query = "DELETE FROM `program_plan_form` WHERE `Program_id` = $program_id and `File_type` = '$file_type';";
        mysqli_query($conn, $query);
        $query = "INSERT INTO `program_plan_form`
                  (`Program_id`, `File_type`, `File_year`, `File_path`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`)
                  VALUES ('$program_id', '$file_type', '$file_year', '$json_paths', '$update_date', '$user', '$update_date', '$user')
                  ON DUPLICATE KEY UPDATE
                  `File_path` = '$json_paths',
                  `File_year` = '$file_year',
                  `Update_date` = '$update_date',
                  `Update_name` = '$user'";

        if (!mysqli_query($conn, $query)) {
            $success = false;
            $message = '更新失敗: ' . mysqli_error($conn);
        } else {
            $message = '更新成功';
        }
    } else {
        $success = false;
        $message = '沒有文件被上傳';
    }
} else {
    // 非檔案上傳的處理
    $update_date = date("Y-m-d H:i:s");

    $query = "UPDATE `program_plan` SET
              `Date` = ?, `Plan_name` = ?, `Plan_from` = ?, `Fund` = ?, `Remark` = ?,
              `Update_date` = ?, `Update_name` = ? WHERE `Id` = ?";

    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "ssssssss", $date, $plan_name, $plan_from, $fund, $remark, $update_date, $user, $program_id);

    if (!mysqli_stmt_execute($stmt)) {
        $success = false;
        $message = '更新失敗: ' . mysqli_stmt_error($stmt);
    } else {
        $success = true;
        $message = '更新成功';
    }
    mysqli_stmt_close($stmt);
}

echo json_encode(['status' => $success ? 'success' : 'error', 'message' => $message], JSON_UNESCAPED_UNICODE);

mysqli_close($conn);
?>