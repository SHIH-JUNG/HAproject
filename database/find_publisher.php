<?php
include("sql_connect.php");

$id = $_POST['id'];
$find_publisher = "SELECT * FROM calendar WHERE id=$id";
$select_publisher = mysqli_query($conn, $find_publisher);
$publisher = mysqli_fetch_row($select_publisher);

echo $publisher[5];

mysqli_close($conn);
?>