<?php
session_start();
include("sql_connect.php");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT sync_link, share_link FROM accounting_sheet WHERE id=1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode(array("sync_link" => "", "share_link" => ""));
}

$conn->close();
?>
