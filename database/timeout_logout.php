<?

if(!isset($_SESSION['login'])){
header( "refresh:3; url=login.php" );
}

else {
$a = session_id();

?>

    <script language=javascript>

      //一段時間未執行,則系統登出



      var oTimerId;

      function Timeout()
      {
        window.open("logout.php","_top")
      }

      function ReCalculate()
      {
        clearTimeout(oTimerId);
        oTimerId = setTimeout('Timeout()', 5 * 60 * 60 * 1000);
      }

      document.onmousedown = ReCalculate;
      document.onmousemove = ReCalculate;
      ReCalculate();

    </script>

 <?}?>