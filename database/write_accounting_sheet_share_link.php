<?php
session_start();
include("sql_connect.php");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$share_link = $_POST['content'];

// Update the database with the new share link and save the old one
$sql = "UPDATE accounting_sheet
        SET previous_share_link = share_link, share_link = '$share_link'
        WHERE id = 1";
if ($conn->query($sql) === TRUE) {
    echo "Success";
} else {
    echo "Error" . $conn->error;
}

$conn->close();
?>
