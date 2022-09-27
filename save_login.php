<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>

<!DOCTYPE html>
<html>

<head>
    <!--網頁icon-->
    <link rel="icon" href="image/HA.png" type="image/x-icon">
    <!-- CSS-->
    <link href="css/style.css" rel="stylesheet" />
    <!--  notify  -->
    <link href="css/notify/notyf.min.css" rel="stylesheet" />
    <!--  sweetalert2  -->
    <link href="css/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
    <!-- ================== CSS bootstrap-select ================== -->
    <link href="css/bootstrap-select/bootstrap-select.min.css" rel="stylesheet" />

    <!--  時間24小時  -->
    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">

    <meta charset="UTF-8" />
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>
    <!--行事曆自動換行-->
    <style>

    </style>
</head>
<!--<SVG>引入bootstrap icon-->

<body>
    <!-- /#wrapper -->
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/bootstrap.min.js"></script>
    <!-- 表格 JavaScript -->
    <script src="javascript/jquery.dataTables.min.js"></script>
    <script src="javascript/dataTables-data.js"></script>
    <!-- 滾動條 JavaScript -->
    <script src="javascript/jquery.slimscroll.js"></script>
    <!-- Fancy Dropdown JS -->
    <script src="javascript/dropdown-bootstrap-extended.js"></script>
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- ================== JS notify控制 ================== -->
    <script src="javascript/notify/notyf.min.js"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
    <!-- ================== JQ cookie.js ================== -->
    <script src="javascript/cookie/js.cookie-2.1.3.min.js"></script>
    <!--     ==================  時間24小時 ================== -->
    <script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="js/bootstrap-datetimepicker.zh-TW.js" charset="UTF-8"></script>

    <script>
        $( document ).ready(function() {
          
            // if(navigator.geolocation) {
            //     navigator.geolocation.getCurrentPosition(
            //         function (position) {  
            //             longitude = position.coords.longitude;  
            //             latitude = position.coords.latitude;  
            //             // console.log(longitude)
            //             // console.log(latitude)

            //             var parameters = latitude.toString() + "," + longitude.toString();

            //             // console.log('https://www.google.com/maps/search/?api=1&query='+parameters)
            //             window.open('https://www.google.com/maps/search/?api=1&query='+parameters, 'Google Map');
            //         },
            //         function (e) 
            //         {
            //             var msg = e.code;
            //             var dd = e.message;
            //             // console.log(msg)
            //             // console.log(dd)
            //             notyf.alert('錯誤訊息(' + error.code + '): ' + error.message);
            //         }
            //     ) 
            // }

            if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(showPosition);
                } else {
                    alert("Geolocation is not supported by this browser.");
                }
            
            
            function showPosition(pos){
                $.post('database/save_login_record.php', {
                        'lat':pos.coords.latitude,
                        'lng':pos.coords.longitude
                }, function(res){
                    if(res.includes("ok"))
                    {
                        // alert("打卡成功!");
                        swal({
                            title:'打卡成功!',
                            type:'success',                        
                        }).then(function(){
                            window.location.replace("index.php"); 
                        }) 
                    }
                    else
                    {
                        window.location.replace("index.php"); 
                    }
                });
            }
            
        });
    </script>
</body>
</html>
