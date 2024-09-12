<?php
session_start();
include("sql_connect.php");

$program_id = $_POST['program_id'];
$user = $_SESSION['name'];

$action = isset($_POST['action']) ? $_POST['action'] : '';

if ($action === 'delete_file') {
    $file_type = $_POST['file_type'];
    $file_id = $_POST['file_id'];

    $query = "SELECT File_path FROM program_plan_form WHERE Program_id = '$program_id' AND File_type = 'file_$file_type'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    if ($row) {
        $file_paths = json_decode($row['File_path'], true);

        if (isset($file_paths[$file_id])) {
            unset($file_paths[$file_id]);
            $new_file_paths = array_values($file_paths);
            $json_paths = json_encode($new_file_paths);

            $update_query = "UPDATE program_plan_form SET File_path = '$json_paths', Update_date = NOW(), Update_name = '$user' WHERE Program_id = '$program_id' AND File_type = 'file_$file_type'";

            if (mysqli_query($conn, $update_query)) {
                echo json_encode(['status' => 'success', 'message' => '文件已成功刪除']);
            } else {
                echo json_encode(['status' => 'error', 'message' => '刪除文件時發生錯誤: ' . mysqli_error($conn)]);
            }
        } else {
            echo json_encode(['status' => 'error', 'message' => '找不到指定的文件']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => '找不到指定的記錄']);
    }
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
            $file_name = $_FILES['files']['name'][$key];
            $file_path = $file_dir . $file_name;
            if (move_uploaded_file($tmp_name, $file_path)) {
                $file_paths[] = $file_path;
            }
        }
    }

    $success = true;
    $message = '';

    if (!empty($file_paths) || !$is_file_upload) {
        $file_year = date("Y") - 1911;
        $update_date = date("Y-m-d H:i:s");

        if ($is_file_upload) {
            $json_paths = json_encode($file_paths);
            $query = "INSERT INTO `program_plan_form`
                (`Program_id`, `File_type`, `File_year`, `File_path`, `Upload_date`, `Upload_name`, `Update_date`, `Update_name`)
                VALUES ('$program_id', '$file_type', '$file_year', '$json_paths', '$update_date', '$user', '$update_date', '$user')
                ON DUPLICATE KEY UPDATE
                `File_path` = '$json_paths',
                `Update_date` = '$update_date',
                `Update_name` = '$user'";
        } else {
            $query = "UPDATE `program_plan` SET
                `Date` = '$date',
                `Plan_name` = '$plan_name',
                `Plan_from` = '$plan_from',
                `Fund` = '$fund',
                `Remark` = '$remark',
                `Update_date` = '$update_date',
                `Update_name` = '$user'
                WHERE `Id` = '$program_id'";
        }

        if (!mysqli_query($conn, $query)) {
            $success = false;
            $message = '更新失敗: ' . mysqli_error($conn);
        }
    } else {
        $success = false;
        $message = '沒有文件被上傳';
    }

    if ($success) {
        echo json_encode(['status' => 'success', 'message' => '更新成功']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $message]);
    }
}

mysqli_close($conn);
?>
