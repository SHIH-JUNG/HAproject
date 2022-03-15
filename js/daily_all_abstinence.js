//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填寫資料region
var name = getUrlVars()["name"];
var date = getUrlVars()["date"];
var family = getUrlVars()["family"];
var addition = getUrlVars()["addition"];
//console.log(decodeURIComponent(name))
$("#name").html('姓名：'+decodeURIComponent(name)+' ');
$("#study_date").html('入園日期：'+date+'');
$("#family").html('家園：'+decodeURIComponent(family)+' ');
$("#addition").html('主要戒治物質：'+decodeURIComponent(addition)+'');

//endregion

//抓所有詢戒日常問卷region
    var id = getUrlVars()["face_id"];
    $.ajax({
        url: "database/find_daily_all_a.php",
        data: {
            face_id: id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(data.check_end[0] == 1){
                $("#daily_add_new").css("display","none");
                $("#end").css("display","none");
                $("#cancel").css("display","none");
            }
            var cssstring ="";
            for(index in data.number){
                cssstring += 
                        '<tr name="num[]">'+
                            '<td>第'+data.number[index]+'個月</td>'+
                            '<td><input id="date_self_a'+data.number[index]+'" type="date" value="'+data.date_self[index]+'"></td>'+
                            '<td>'+data.write_date_self[index]+'</td>'+
                            '<td><a href="'+data.url_self[index]+'">點擊進入</a></td>'+
                            '<td><input id="date_other_a'+data.number[index]+'" type="date" value="'+data.date_other[index]+'"></td>'+
                            '<td>'+data.write_date_other[index]+'</td>'+
                            '<td><a href="'+data.url_other[index]+'">點擊進入</a></td>'+
                            '<td><button onClick="update('+data.number[index]+');">修改</button></td>'+
                        '</tr>'
            }

            $("#daily_all_tb_a").append(cssstring);
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
//endregion

//點擊新增詢戒生活問卷行region
$("#daily_add_new_a").on('click', function(){
    
//    $("#daily_all_tb").append()
    var num = document.getElementsByName('num[]').length + 1;

    var cssstring = 
                '<tr name="num[]">'+
                    '<td>第'+num+'個月</td>'+
                    '<td><input id="date_self_a'+num+'" type="date"></td>'+
                    '<td></td>'+
                    '<td></a></td>'+
                    '<td><input id="date_other_a'+num+'" type="date"></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td><button onClick="store('+num+');">儲存</button></td>'+
                '</tr>'
    $("#daily_all_tb_a").append(cssstring);
    
    //只能按一次
    var btn = $(this); 
    btn.prop('disabled',true); 
});
//endregion

//點擊儲存到資料庫region
function store(num){
    var id = getUrlVars()["face_id"];
    var name = getUrlVars()["name"];
    var addition = getUrlVars()["addition"];
    var date_self_a = $('#date_self_a'+num).val();
    var date_other_a = $('#date_other_a'+num).val();
//    console.log($('#number'+num+'').text())
    $.ajax({
        url: "database/add_daily_all_a.php",
        data: {
            face_id: id,
            date_self: $('#date_self_a'+num+'').val(),
            url_self: 'daily_detail_self_a.php?face_id='+id+'&number='+num+'&name='+name+'&addition='+addition+'&date='+date_self_a+'',
            date_other: $('#date_other_a'+num+'').val(),
            url_other: 'daily_detail_other_a.php?face_id='+id+'&number='+num+'&name='+name+'&addition='+addition+'&date='+date_other_a+'',
            number:num
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                swal({
                    title: '儲存失敗！',
                    type: 'error',
                })
            }
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
}
//endregion

//點擊修改region
function update(num){
    var id = getUrlVars()["face_id"];
//    console.log($('#number'+num+'').text())
    $.ajax({
        url: "database/update_daily_all_a.php",
        data: {
            face_id: id,
            number:num,
            date_self: $('#date_self_a'+num+'').val(),
            date_other: $('#date_other_a'+num+'').val(),
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '修改成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                swal({
                    title: '修改失敗！',
                    type: 'error',
                })
            }
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
}
//endregion

//取消新增region
$("#cancel").on('click', function(){
    location.reload();
})
//endregion

//結案region
$("#end").on('click', function () {
    var id = getUrlVars()["face_id"];
    swal({
        title: '確認結案？',
        text: "結案後無法再新增紀錄",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false, //不可點背景關閉
        confirmButtonText: '確認！',
        cancelButtonText: '取消'
    }).then(function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                url: "database/daily_end_a.php",
                data: {
                    face_id: id,
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '結案成功！',
                            type: 'success',
                        }).then(function () {
                            location.reload();
                        })
                    } else {
                        swal({
                            title: '結案失敗！',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    console.log("錯誤");
                }
            });
        }

    });
});
//endregion