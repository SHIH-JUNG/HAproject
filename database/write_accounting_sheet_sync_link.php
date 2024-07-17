<?php
session_start();
include("sql_connect.php");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sync_link = $_POST['content'];

// Update the database with the new sync link and save the old one
$sql = "UPDATE accounting_sheet
        SET previous_sync_link = sync_link, sync_link = '$sync_link'
        WHERE id = 1";
if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Error" . $conn->error;
}

$conn->close();
?>
