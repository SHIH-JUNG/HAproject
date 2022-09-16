<?php session_start(); ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
//將session清空
$login =$_SESSION['login'];
unset($_SESSION['login']);
unset($_SESSION['Account']);
unset($_SESSION['authority']);
session_destroy();
echo '<meta http-equiv=REFRESH CONTENT=0;url=login.php>';   
?>;