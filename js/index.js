const notyf = new Notyf();

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
    console.log(date)
    return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
  }
  //endregion

let DateDiff = function (date1, date2) { // date1 和 date2 是 2016-06-18 格式
    let strDate, oDate1, oDate2, result
    strDate = date1.split("-");
    oDate1 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    strDate = date2.split("-");
    oDate2 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    result = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
    return result;
};

function  getDaysBetween(dateString1,dateString2){
    var  startDate = Date.parse(dateString1);
    var  endDate = Date.parse(dateString2);
    var days=(endDate - startDate)/(1*24*60*60*1000);
    // alert(days);
    return  days;
}

$(document).ready(function () {
    // 載入全部user至下拉式選單
    append_user();

    
    //show 訊息公告 region
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

            if(cssString != '') {
                $("#ann").html(cssString);
            }
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
    //endregion


    //show 社工訪視 region
    $.ajax({
        url: "database/visit_show.php",
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);

            var cssString = "";
            $.each(data, function (index, value) {

                var timenow = moment().format('YYYY-MM-DD HH:mm');

                var tr_color = "";

                // 判斷訪視是否結束，結束的話Visit_end_time不為null值
                if(value.Visit_end_time == null)
                {
                    var visit_end_time = "";
                    tr_color = "#FF9797";

                    cssString +=
                            '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_title + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_time + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign1 + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign2 + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + visit_end_time + '</td>';
                    
                    if(value.Visit_end_time == null)
                    {
                        cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="javascript: void(0)" onclick="end_visit('+value.Id+')">結束訪視</a>' + '</td>' +
                        '</tr>';
                    }
                    else
                    {
                        cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px"><span style="color:blue;">已結束</span></td></tr>';
                    }
                }
                else
                {
                    let date_diff = DateDiff(timenow.split(" ")[0], value.Visit_end_time.split(" ")[0]);

                    // console.log(date_diff)

                    var visit_end_time = value.Visit_end_time;
                    tr_color = "#90ee90";

                    if(date_diff <= 7) // 判斷訪視是否結束，已結束的訪視只留下最近七天的紀錄
                    {
                        

                        cssString +=
                            '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_title + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_time + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign1 + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Visit_assign2 + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + visit_end_time + '</td>';
                    
                        if(value.Visit_end_time == null)
                        {
                            cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="javascript: void(0)" onclick="end_visit('+value.Id+')">結束訪視</a>' + '</td>' +
                            '</tr>';
                        }
                        else
                        {
                            cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px"><span style="color:blue;">已結束</span></td></tr>';
                        }
                    }
                }
                
            });
            
            if(cssString != '') {
                $("#visit_info").html(cssString);
            }

            //綁定表格欄onclick事件，點擊顯示模態框，社工訪視-詳細資料
            $("#visit_info>tr td").each(function(i,v)
            {
                var currentEle_class = $(this).attr("row_name");

                if(currentEle_class != "last_row")
                {
                    var currentEle = $(this);
                    
                    currentEle.on("click",function () {
                    
                        var attr_id = $(this).parent("tr").attr("id");

                        $('#show_visit_m').modal('show');
                    
                        show_visit_modal(attr_id);
                    });
                }
            });

        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
    //endregion


    //show 請假 region
    $.ajax({
        url: "database/day_off_show.php",
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log(data);

            var cssString = "";
            $.each(data, function (index, value) {

                var timenow = moment().format('YYYY-MM-DD HH:mm');

                // let date_diff = 7;
                let date_diff = DateDiff(timenow.split(" ")[0], value.Update_date.split(" ")[0]);
                
                // console.log(date_diff);
                
                if(date_diff <= 7) // 只留下最近七天有更新過的紀錄
                {
                    var tr_color = "";

                    if(value.Allow_status != "核准")
                    {
                        tr_color = "#FF9797";
                    }
                    else
                    {
                        tr_color = "#90ee90";
                    }

                    var day_off_date = value.Overtime_date_start.split("_");
                    var day_off_date_str = split_date(day_off_date[0]) + " " +day_off_date[1];
                    
                    var row_url = "day_off_detail.php?day_off_id=" + value.Id + "&resume_id=" + value.Resume_id;
                    
                    cssString +=
                            '<tr style="background-color:'+tr_color+';" id="'+value.Id+'">' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Resume_name + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Day_off_type + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + day_off_date_str + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Hours + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Job_agent + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Allow_status + '</td>';
                    
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="'+row_url+'">查看</a>' + '</td>' +
                    '</tr>';
                }
            });
            
            if(cssString != '') {
                $("#dayoff_info").html(cssString);
            }
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
    //endregion


    //show 會議記錄提醒 region
    $.ajax({
        url: "database/record_warn_show.php",
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log(data);

            var cssString = "";
            $.each(data, function (index, value) {

                var timenow = moment().format('YYYY-MM-DD HH:mm');

                let date_diff = getDaysBetween(timenow.split(" ")[0], value.Warn_timestap.split(" ")[0]);

                if(date_diff <= 0) // date_diff小於等於0，表示到了提醒日期
                {                    
                    var rtype = "";

                    if(value.R_or_G == "R")
                    {
                        rtype = "會議記錄";
                    }
                    else if(value.R_or_G == "G")
                    {
                        rtype = "會議議程";
                    }
                                        
                    cssString +=
                            '<tr id="'+value.Id+'">' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Create_date + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Title + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + rtype + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.State + '</td>' +
                            '<td row_name="n_row" style="LINE-HEIGHT:1px">' + value.Create_name + '</td>';
                    
                    cssString += '<td row_name="last_row" style="LINE-HEIGHT:1px">' + '<a style="text-decoration: underline;" href="'+value.Url+'">查看</a>' + '</td>' +
                    '</tr>';
                }
            });
            
            if(cssString != '') {
                $("#record_warn_info").html(cssString);
            }
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
    //endregion
});    








//show 社工訪視 detail show modal region
function show_visit_modal(modal_id) {
    $.ajax({
        url: "database/visit_show.php",
        data:{
            Id:modal_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log(data);
    
            $.each(data, function (index, value) {
    
                if(value.Visit_end_time == null)
                {
                    var visit_end_time = "";
                }
                else
                {
                    var visit_end_time = value.Visit_end_time;
                }

                $("#s_visit_title").val(value.Visit_title);
                $("#s_visit_time").val(value.Visit_time);
                $("#s_visit_assign1").val(value.Visit_assign1);
                $("#s_visit_assign2").val(value.Visit_assign2);
                $("#s_visit_end_time").val(visit_end_time);
                $("#s_visit_remark").val(value.Remark);
            });
                
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

//前往簽核提醒頁面 region
go_to_signature_notice = function() {
    window.location.href = "signature_notice.php";
}
//endregion


//insert 社工訪視 region
$("#visit_add").click(function(){
    $('#add_visit_m').modal('show'); 
});


$("#add_new_visit").click(function(){
    $.ajax({
        url: "database/add_visit.php",
        data:{
            Visit_title:$("#visit_title").val(),
            Visit_time:$("#visit_time").val(),
            Visit_assign1:$("#visit_assign1").val(),
            Visit_assign2:$("#visit_assign2").val(),
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
        error: function (e) {
            swal({
                type: 'error',
                title: '新增失敗!請聯絡負責人',
                allowOutsideClick: false //不可點背景關閉
            })
            console.log(e)
        }
    });
});
//endregion

//update end 社工訪視 region
update_visit = function(this_btn){
    var attr_id = $(this_btn).attr("btn_id");

    $.ajax({                                                                                    
        url: "database/end_visit.php",
        data:{
            Id:attr_id,
            Visit_end_time:$("#visit_end_time").val(),
            Visit_remark:$("#remark").val(),
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(data == 1){
                swal({
                    title:'更新成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
            }  
        },
        error:function(e){
            console.log(e);
            swal({
                title:'更新失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });
}
//endregion

//點擊 結束訪視 region
end_visit = function(attr_id){
    $('#update_visit_m').modal('show'); 

    var timenow = moment().format('YYYY-MM-DD HH:mm');
    $("#visit_end_time").val(timenow);

    $("#update_visit_btn").attr("btn_id",attr_id);
}
//endregion

//insert 訊息公告 region
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
        error: function (e) {
            swal({
                type: 'error',
                title: '新增失敗!請聯絡負責人',
                allowOutsideClick: false //不可點背景關閉
            })
            console.log(e)
        }
    });
});
//endregion

//新增公告 取消按鈕 取消新增後清除文字框 region
function ann_cancel(){
    $("#ann_title").val("");
    $("#ann_authority").val("1");
}
//endregion

//呼叫user方法region
function append_user(){             
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) 
            {
                $("#visit_assign1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#visit_assign2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#s_visit_assign1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#s_visit_assign2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#visit_assign1").val(assign_name);
                // $("#visit_assign2").val(assign_name);
            }
        },
    });
}
//endregion

