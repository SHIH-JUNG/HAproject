<?php
//資料庫設定
//資料庫位置
$servername = "127.0.0.1";
// $username = "test";
// $password = "1105";
$username = "root";
//$password = "0000";
$password = "";
$dbname = "ha";
$dbport = "3306";

//對資料庫連線
$conn=mysqli_connect($servername, $username, $password, $dbname, $dbport);
if(!@mysqli_connect($servername, $username, $password, $dbname, $dbport))
        die("無法對資料庫連線");

//資料庫連線採UTF8
mysqli_query($conn, "SET CHARACTER SET utf8;");
//選擇資料庫
if(!@mysqli_select_db($conn,$dbname))
        die("無法使用資料庫");
