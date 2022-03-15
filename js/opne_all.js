//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填入資訊region
var face_id = getUrlVars()["face_id"];
var phone_id = getUrlVars()["phone_id"];
var age = getUrlVars()["age"];
var addition = getUrlVars()["addition"];
var address = getUrlVars()["address"];
var name = getUrlVars()["name"];
var gender = getUrlVars()["gender"];
var assign = getUrlVars()["assign"];

$("#face_id").text(face_id);
$("#name").text(decodeURIComponent(name));
$("#gender").text(decodeURIComponent(gender));
$("#assign").text(decodeURIComponent(assign));
//endregion

//抓所有輔導表region
var face_id = getUrlVars()["face_id"];
$.ajax({
    url: "database/find_open_all.php",
    data: {
        face_id: face_id,
    },
    type: "POST",
    dataType: "JSON",
    success: function (data) {
        var cssstring = "";
        for (index in data.number) {
            cssstring +=
            '<tr name="num[]">' +
                '<td>' + data.stay_times[index] + '</td>' +
                '<td>' + data.face_times[index] + '</td>' +
                '<td>' + data.open_date[index] + '</td>' +
                '<td>' + data.enter_date[index] + '</td>' +
                '<td>' + data.leave_date[index] + '</td>' +
                '<td><span id="remark_val'+data.number[index]+'">' + data.remark[index] + '</span><input id="update_remark'+data.number[index]+'" type="text" hidden></td>' +
                '<td><a href="' + data.url[index] + '">點擊進入</a></td>' +
                '<td>'+
                    '<button id="update'+data.number[index]+'" onclick="update('+data.number[index]+')">修改</button>'+
                    '<button id="update_store'+data.number[index]+'" onclick="update_store('+data.number[index]+')" hidden>儲存</button>'+
                    ' <button id="update_cancel'+data.number[index]+'" onclick="location.reload();" hidden>取消</button>'+
                '</td>'
            '</tr>'
        }        
        $("#open_tab_add").append(cssstring);
        $("#stay_times").val(data.latest_stay_times[0]);
        $("#open_id").val(data.open_id[0]);
    },
    error: function (e) {
        console.log(e);
    }
});
//endregion

//點擊新增詢輔導紀錄region
$("#open_add_new").on('click', function () {
    //    count();

    //    $("#daily_all_tb").append()
    var times = getUrlVars()["times"];
    var num = document.getElementsByName('num[]').length;
    if($("#stay_times").val() == ""){
        $("#stay_times").val('0');
    }
    var cssstring =
        '<tr name="num[]">' +
        '<td>'+$("#stay_times").val()+'</td>' +
        '<td>' + times + '</td>' +
        '<td><input id="open_date' + num + '" type="date"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td><input id="remark' + num + '" type="text"></td>' +
        '<td></td>' +
        '<td><button onClick="store(' + num + ');">儲存</button> <button onClick="location.reload();">取消</button></td>' +
        '</tr>'
    $("#open_tab_add").append(cssstring);

    //只能按一次
    var btn = $(this);
    btn.prop('disabled', true);
});
//endregion

//點擊修改region
function update(num){
    $('#remark_val'+num+'').attr('hidden',true);
    $('#update_remark'+num+'').attr('hidden',false);
    $('#update'+num+'').attr('hidden',true);
    $('#update_store'+num+'').attr('hidden',false);
    $('#update_cancel'+num+'').attr('hidden',false);
}
//修改後儲存
function update_store(num){
    var face_id = getUrlVars()["face_id"];
    $.ajax({
        url: "database/update_open_all.php",
        data: {
            face_id: face_id,
            number:num,
            remark:$('#update_remark'+num+'').val()
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

//點擊儲存region
function store(num) {
    var face_id = getUrlVars()["face_id"];
    var phone_id = getUrlVars()["phone_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var gender = decodeURIComponent(getUrlVars()["gender"]);
//    var date = getUrlVars()["date"];
    var times = getUrlVars()["times"];
    var assign = decodeURIComponent(getUrlVars()["assign"]);
    if($('#stay_times').val() == 0){
        var url = 'first_open.php?face_id=' + face_id + '&gender=' + gender + '&name=' + name + '&phone_id=' + phone_id + '&date=' + $('#open_date'+num+'').val() + '&times=' + times + '&assign=' + assign + '&num='+num+'';
    }else{
        var url = 'first_open_again.php?face_id=' + face_id + '&gender=' + gender + '&name=' + name + '&phone_id=' + phone_id + '&date=' + $('#open_date'+num+'').val() + '&times=' + times + '&assign=' + assign +'&num='+num+'';
    }


    //    console.log(face_id,name,num,times,$('#open_date'+num+'').val(),url,$('#remark'+num+'').val())
        $.ajax({
            url: "database/add_open_all.php",
            data: {
                face_id: face_id,
                open_id:$("#open_id").val(),
                name: name,
                number: num,
                face_times: times,
                open_date: $('#open_date' + num + '').val(),
                url: url,
                remark: $('#remark' + num + '').val(),
                stay_times: $('#stay_times').val()
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
                console.log(e)
            }
        });
}
//endregion

//新增至詢戒家屬一覽表region
$("#add_new_family").on('click', function () {
    swal({
        title: '確認新增？',
        text: "確認後將新增至詢戒家屬關懷一覽表",
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
                url: "database/add_family.php",
                data: {
                    phone_id:phone_id,
                    face_id:face_id,
                    name:decodeURIComponent(name),
                    gender:decodeURIComponent(gender),
                    age:age,
                    address:decodeURIComponent(address),
                    addition:decodeURIComponent(addition)
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '新增成功！',
                            type: 'success',
                        }).then(function () {
                            location.reload();
                        })
                    } else {
                        swal({
                            title: '新增失敗！',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

    //只能按一次
    var btn = $(this);
    btn.prop('disabled', true);
});
});
//endregion