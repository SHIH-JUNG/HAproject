const notyf = new Notyf();

//公告region
        $.ajax({
            url: "database/announcement.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                // console.log(data);
                var cssString = "";
                for (var index in data.title) {
                    cssString += 
                            '<tr>' +
                            '<td style="LINE-HEIGHT:1px">' + data.title[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.date[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.publisher[index] + '</td>' +
                            '</tr>'
                }
                $("#ann").html(cssString);
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
            }
        });
//endregion    
    
//通知region
    $.ajax({
            url: "database/sign_info.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
//                console.log(data);
                var cssString = "";
                for (var index in data.file_name) {
                    cssString += 
                            '<tr>' +
                            '<td style="LINE-HEIGHT:1px">' + data.file_name[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.name[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.date[index] + '</td>' +
                            '</tr>'
                }
                $("#sign_info").html(cssString);
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
            }
        });
//endregion

//簽核通知region
    $.ajax({
            url: "database/sign_check.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
//                console.log(data);
                var cssString = "";
                for (var index in data.file_name) {
                    cssString += 
                            '<tr id="'+data.url[index]+'" class="'+data.face_id[index]+','+data.file_name[index]+','+data.id[index]+'" >' +
                                '<td style="LINE-HEIGHT:1px">'+ data.file_name[index]+'</td>' +
                                '<td style="LINE-HEIGHT:1px">'+ data.authority_name[index] +'</td>' +
                                '<td style="LINE-HEIGHT:1px">' + data.date[index] + '</td>' +
                            '</tr>'
                }
                $("#sign_check").html(cssString);
//                var st = ;
                
                //點擊table tr 進入詳細頁面
                $(".table-hover tbody").on("click","tr",function () {
                    var classarr = $(this).attr("class").split(",");
                    var title = classarr[1].substr(-4);
                    var face_id = classarr[0];
                    var check_id = classarr[2];
                    var url = $(this).attr("id");
//                    console.log(check_id)
//                    if(title == "審核通過"){
                        //審核
                        $.ajax({
                            url: "database/click_review.php",
                            type: "POST",
                            data:{
                                face_id:face_id,
                                check_id:check_id
                            },
                            dataType: "JSON",
                            async: false,//啟用同步請求
                            success: function (data) {
//                                console.log(data)
                                location.href = url;
                            },

                            error: function (e) {
//                                    notyf.alert('伺服器錯誤,無法載入' + e);
                                console.log(e)
                             }
                        });
//                    }else{
////                        console.log(url)
//                        location.href =url;
//                    }

                });
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
//                console.log(e)
            }
        });
//endregion

//簽核通知 region
$.ajax({
    url: "database/find_signature_notice.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        console.log(data);
        var cssString = "";
        $.each(data,function(index,value){

        var tr_color = "";
        var url = value.Url;

        console.log(url);
            switch (value.Sign_state) {
                case "未簽核":
                    tr_color = "#FF9797";
                    break;
                case "已簽核":
                    tr_color = "#00EC00";
                    break;
                default:
                    tr_color = "#00EC00";
                    break;
            }

            cssString += 
                    '<tr style="background-color:'+tr_color+';">' +
                    '<td style="LINE-HEIGHT:1px">' + value.Title + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Timestamp + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Assign + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Signer + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Sign_state + '</td>' +
                    '<td>' + '<a style="text-decoration: underline;" href="'+value.Url+'">查看</a>' + '</td>' +
                    '</tr>'
        });
        $("#sign_notice").html(cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion  

//新增公告region
    $("#ann_cancel").click(function(){
        $('#add_ann_m').modal('show'); 
    });
    $("#ann_add").click(function(){
        $('#add_ann_m').modal('show'); 
    });
    
    $("#add_new_ann").click(function(){
        $.ajax({
                url: "database/add_ann.php",
                data:{
                    ann_title:$("#ann_title").val(),
                    authority:$("#ann_authority").val(),
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if(data == 1){
                        swal({
                            title:'新增成功！',
                            type:'success',                        
                        }).then(function(){
                            location.reload();
                        }) 
                    }else{
                        swal({
                          title:'新增失敗！',
                          type:'error',
                        })
                    } 
                },
            });
    });
//endregion

//取消後清除文字框region
function ann_cancel(){
    $("#ann_title").val("");
    $("#ann_authority").val("1");
}
//endregion



