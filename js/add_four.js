
$(document).ready(function() {
//標頭日期region
    var d = new Date();
    var RE = d.getFullYear()-1911;
    var M = d.getMonth()+1;
    var cssString = "";
    cssString += RE+" 年 "+M+" 月 ";
    $("#time").html(cssString);
//endregion

//載入家園名稱region
        $.ajax({
            url: "database/find_house_info.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                for (var index in data.id) {
                    $("#fa_name").append($("<option value='"+data.name[index]+"'>"+data.name[index]+"</option>")); 
                }
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
            }
        });
//endregion    
});

//新增四階段輔導表region
//$(document).on('click',"#four_add", function(){
////    console.log($("#back_content").val());
//    $.ajax({
//        url: "database/add_new_four.php",
//        type: "POST",
//        dataType: "JSON",
//        
//        data:{
//            data:decodeURIComponent($("#add_four").serialize()),
//            addition:$("input[name='addition[]']").val(),
//            name:$("#name").val(),
//            stay_datetime:$("#stay_datetime").val(),
//            access_datetime:$("#access_datetime").val(),
//            complex_content:$("#complex_content").val(),
//            back_content:$("#back_content").val(),
//        },
//        async: false,//啟用同步請求
//        success: function (data) {
//               if(data == 1){
//                    swal({
//                        type: 'success',
//                        title: '新增成功!',
//                        allowOutsideClick: false //不可點背景關閉
//                        }).then(function () {
//                            window.location.replace("four.php"); 
//                        })
//                    
//               }else{
//                    swal({
//                        type: 'error',
//                        title: '新增失敗!',
//                        allowOutsideClick: false //不可點背景關閉
//                        }).then(function () {
//                            window.location.replace("four.php"); 
//                        })
//               } 
//        },
//        error: function (e) {
//            alert('伺服器錯誤,無法載入' + e);
//         }
//    });
//});
//endregion

//抓個人四階段表region
//$.ajax({
//    url: "database/find_personal_four.php",
//    type: "POST",
//    dataType: "JSON",
//    success: function (data) {
//        data = eval("("+toArray(data)+")");
//        console.log(data.stay_datetime);
//    },
//    error: function (e) {
//            alert('伺服器錯誤,無法載入' + e);
//     }
//});
////endregion
//
////資料前處理將資料轉為JSON格式region
////返回拚好json格式的字符串
//function toArray(str)
//{
//  var list = str.toString().split(",");
//  var myStr = "{";
//  for(var i=0;i<list.length;i++)
//  {
//    try{
//      var keys = list[i].split("=");
//      var key = Trim(keys[0]); 
//      var value= Trim(keys[1]);
//      if(i>0)
//      {
//        myStr += ",";
//      }
//      myStr += "\""+key+"\":\""+value+"\"";
//    }catch(e)
//    {
//      continue;
//    }
//  }
//  myStr += "}";
//  return myStr;
//}
////替换掉字串中頭尾的空格
//function Trim(str){  
//    return str.replace(/(^\s*)|(\s*$)/g, "");  
//}
//endregion