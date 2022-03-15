//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填寫資料(輔導紀錄)region

//固定資料 region
var open_id = getUrlVars()["open_id"];
var name = getUrlVars()["name"];
var num = getUrlVars()["number"];
var date = getUrlVars()["date"];
var house = getUrlVars()["house"];
var addition = getUrlVars()["addition"];
var track_date = getUrlVars()["track_date"];
var track_id = getUrlVars()["track_id"];
$("#open_id").text(open_id);
$("#name").text(decodeURIComponent(name));
$("#date").text(date);
$("#house").text(decodeURIComponent(house));
$("#addition").text(decodeURIComponent(addition));
$("#track_date").text(track_date);
$.ajax({
    url: "database/find_close.php",
    type: "POST",
    data: {
        open_id: open_id,
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        var end_date = (data.end_date[0]).substr(0, 10);

        $("#gender").text(data.gender[0]);
        $("#age").text(data.age[0]);
        $("#info_name").text(data.contact_name[0]);
        $("#info_phone").text(data.contact[0]);
        $("#enter_date").text(data.enter_date[0]);
        $("#leave_date").text(data.leave_date[0]);
        $("#end_date").text(end_date);

        //        if(data.leave_or_not[0] != ""){
        //            $('input[name=leave_or_not][value=' + data.leave_or_not[0] + ']').attr('checked', true);
        //        }
    },

    error: function (e) {
        console.log(e)
    }
});


$.ajax({
    url: "database/find_track_all.php",
    type: "POST",
    data: {
        open_id: open_id,
        track_id: track_id
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        $("#track_assign").text(data.user[0]);
        if (data.track_who[0] !== "") {
            $('input[name=track_who][value=' + data.track_who[0] + ']').attr('checked', true);
        }
        if (data.track_status[0] !== "") {
            $('input[name=track_status][value=' + data.track_status[0] + ']').attr('checked', true);
        }
        if (data.join_or_not[0] !== "") {
            $('input[name=join_or_not][value=' + data.join_or_not[0] + ']').attr('checked', true);
        }
    },

    error: function (e) {
        console.log(e)
    }
});
//endregion

//抓track_detail的值填入region
$.ajax({
    url: "database/find_track_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        number: num,
        track_id: track_id,
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        
        //印出會辦人員檢核欄位並取代region
        var user = (data.user[0]).split('、');
        var department = (data.department[0]).split('、');
        var suggest = (data.suggest[0]).split('、');
        var csstring =""; 
        if(data.department[0] != ""){
            if(suggest.length < 2){
                user[0] = data.user[0];
                department[0] = data.department[0];
                suggest[0] = data.suggest[0];
            }
           for(var index in user){
                csstring += 
                    '<label>會辦人員：</label>' +
                    //                        '<span>'+department[index]+'　</span>'+
                    //                        '<span>'+user[index]+'</span>'+
                    '<select class="department" name="department' + index + '[]" disabled>' +
                        '<option value="' + department[index] + '" selected >' + department[index] + '</option>' +
                    '</select>' +
                    ' <select name="user' + index + '[]" disabled>' +
                        '<option value="' + user[index] + '" selected>' + user[index] + '</option>' +
                    '</select>' +
                    ' <input value="'+suggest[index]+'" name="suggest'+index+'[]" type="text" style="width:50%"  disabled>'+
                    '<br>' +
                    '<br>'
//                        '<span>'+department[index]+'　</span>'+
//                        '<span>'+user[index]+'</span>'+
//                        '<br>'+
//                        '<br>'
               
//                        '<label>第二階層：</label>'+
//                        '<span name="department'+index+'[]" class="department" id="department'+index+'"></span>'+
//                        '<span name="user'+index+'[]" class="user" id="user'+index+'"></span>'+
//                        '<br>'+
//                        '<br>'+
//                        '<label>會辦人員：</label>'+
//                        '<span name="department'+index+'[]" class="department" id="department'+index+'"></span>'+
//                        '<span name="user'+index+'[]" class="user" id="user'+index+'"></span>'
            }
            csstring +=
                '<span id="new_office"></span>'+
                '<button onclick="add_new()">新增會辦人員</button>'
                ' <button id="back" onclick="back()" hidden>退回</button>'

            $("#office_td").html(csstring);
        }
        //確認身分是否可以退回
        if($("#job_title").text() == " 組長" || $("#job_title").text() == " 園主任"){
            $("#back").attr('hidden',false);
        }
        //endregion
        
        //抓input name填入region
        var exp = undefined;
        if (data.end_status[0] !== "") {
            $('input[name=end_status][value=' + data.end_status[0] + ']').attr('checked', true);
        }
        if (data.how_track[0] !== "") {
            $('input[name=how_track][value=' + data.how_track[0] + ']').attr('checked', true);
        }
        if (data.track_who[0] !== "") {
            $('input[name=track_who][value=' + data.track_who[0] + ']').attr('checked', true);
        }
        if (data.track_name[0] !== "") {
            $('input[name=track_name][value=' + data.track_name[0] + ']').attr('checked', true);
        }

        if (data.track_status[0] !== "") {
            $('input[name=track_status][value=' + data.track_status[0] + ']').attr('checked', true);
        }
        if (data.track_status_other[0] !== "") {
            $('input[name=track_status_other][value=' + data.track_status_other[0] + ']').attr('checked', true);
        }
        if (data.join_or_not[0] !== "") {
            $('input[name=join_or_not][value=' + data.join_or_not[0] + ']').attr('checked', true);
        }
        if (data.attend[0] !== "") {
            $('input[name=attend][value=' + data.attend[0] + ']').attr('checked', true);
        }
        if (data.now_status[0] !== "") {
            $('input[name=now_status][value=' + data.now_status[0] + ']').attr('checked', true);
        }
        if (data.live_status[0] !== "") {
            $('input[name=live_status][value=' + data.live_status[0] + ']').attr('checked', true);
        }
        if (data.work_status[0] !== "") {
            $('input[name=work_status][value=' + data.work_status[0] + ']').attr('checked', true);
        }
        if (data.church_or_not[0] !== "") {
            $('input[name=church_or_not][value=' + data.church_or_not[0] + ']').attr('checked', true);
        }
        if (data.leave_use[0] !== "") {
            $('input[name=leave_use][value=' + data.leave_use[0] + ']').attr('checked', true);
        }
        if (data.leave_smoke[0] !== "") {
            $('input[name=leave_smoke][value=' + data.leave_smoke[0] + ']').attr('checked', true);
        }
        if (data.leave_additiom[0] !== "") {
            $('input[name=leave_additiom][value=' + data.leave_additiom[0] + ']').attr('checked', true);
        }
        if (data.next[0] !== "") {
            $('input[name=next][value=' + data.next[0] + ']').attr('checked', true);
        }

        if (data.leave_drink[0] !== "") {
            $('input[name=leave_drink][value=' + data.leave_drink[0] + ']').attr('checked', true);
        }
        if (data.how_track[0] !== "") {
            $('input[name=how_track][value=' + data.how_track[0] + ']').attr('checked', true);
        }
        //endregion
        
        //判斷是否是其他選項以外的值//region
        if (data.home_status[0] !== "" && data.home_status[0] !== exp) {

            if (data.home_status[0] == "緊密" || data.home_status[0] == "疏離" || data.home_status[0] == "衝突" || data.home_status[0] == "失聯") {
                $('input[name=home_status][value=' + data.home_status[0] + ']').attr('checked', true);
            } else {
                $('input[name=home_status][value=其它]').attr('checked', true);
                $("#home_other").val(data.home_status[0]);
            }
        }
        if (data.why_not_track[0] !== "" && data.why_not_track[0] !== exp) {

            if (data.why_not_track[0] == "個案失聯" || data.why_not_track[0] == "個案死亡" || data.why_not_track[0] == "家屬拒絕聯繫" || data.why_not_track[0] == "其他") {
                $('input[name=why_not_track][value=' + data.why_not_track[0] + ']').attr('checked', true);
            } else {
                $('input[name=why_not_track][value=其他]').attr('checked', true);
                $("#why_not_track_other").val(data.why_not_track[0]);
            }

        }
        if (data.use_addition[0] != exp && data.use_addition[0] != "") {
            var use_addition = data.use_addition[0].split("、");
            $.each(use_addition, function (index, element) {
                if (element == "海洛因" || element == "安非他命" || element == "大麻" || element == "強力膠" || element == "K他命" || element == "FM2" || element == "搖頭丸" || element == "咖啡包") {
                    $('input[name^="use_addition"][value=' + element + ']').attr('checked', true);
                    //                    console.log(element)
                } else {
                    $("input[name^=use_addition][value='其他']").attr('checked', true);
                    $("#addition_other").val(element);
                }
            });
        }

        if (data.re_use[0] != exp && data.re_use[0] != "") {
            var re_use = data.re_use[0].split("、");
            $.each(re_use, function (index, element) {
                if (element == "身體依賴" || element == "身心疾病" || element == "自己想用" || element == "毅力不足" || element == "無聊" || element == "壓力" || element == "工作" || element == "朋友" || element == "感情" || element == "家庭" || element == "環境") {
                    $('input[name^="re_use"][value=' + element + ']').attr('checked', true);
                } else {
                    $("input[name^=re_use][value='其他']").attr('checked', true);
                    $("#re_use_other").val(element);
                }
            });
        }
        //endregion
        
        //判斷選項填入對應的值region
        if (data.track_who[0] == "家屬") {
            $("#track_family").val(data.track_name[0]);
        } else if (data.track_who[0] == "友人") {
            $("#track_friend").val(data.track_name[0]);
        } else if (data.track_who[0] == "牧者") {
            $("#track_chruch").val(data.track_name[0]);
        } else if (data.track_who[0] == "單位社工") {
            $("#track_sworker").val(data.track_name[0]);
        } else if (data.track_who[0] == "其他") {
            $("#track_who_other").val(data.track_name[0]);
        }


        if (data.now_status[0] == "司法安置") {
            $("#placement1").val(data.now_status_placement[0]);
        } else if (data.now_status[0] == "社福安置") {
            $("#placement2").val(data.now_status_placement[0]);
        } else if (data.now_status[0] == "醫療安置") {
            $("#placement3").val(data.now_status_placement[0]);
        } else if (data.now_status[0] == "其它戒治機構") {
            $("#placement4").val(data.now_status_placement[0]);
        } else if (data.now_status[0] == "其它") {
            $("#placement5").val(data.now_status_placement[0]);
        }

        if (data.live_status[0] == "與家人同住") {
            $("#family").val(data.live_name[0]);
        } else if (data.live_status[0] == "與教會同住") {
            $("#church").val(data.live_name[0]);
        } else if (data.live_status[0] == "與朋友同住") {
            $("#friend").val(data.live_name[0]);
        } else if (data.live_status[0] == "其它") {
            $("#live_other").val(data.live_name[0]);
        }

        if (data.work_status[0] == "就業") {
            $("#work1").val(data.work[0]);
        } else if (data.work_status[0] == "升學") {
            $("#work2").val(data.work[0]);
        } else if (data.work_status[0] == "無業") {
            $("#work3").val(data.work[0]);
        } else if (data.work_status[0] == "其它") {
            $("#work4").val(data.work[0]);
        }

        if (data.track_status[0] == "面訪") {
            $("#track_status_place").val(data.track_status_other[0]);
        } else if (data.track_status[0] == "其他") {
            $("#track_status_other").val(data.track_status_other[0]);
        }
        //endregion

        $("#address").val(data.address[0]);
        $("#address2").val(data.address2[0]);
        $("#info_relationship").val(data.info_relationship[0]);
        $("#why_leave").val(data.why_leave[0]);
        $("#join_times").val(data.join_times[0]);


        $("#placement").val(data.now_status_placement[0]);
        $("#live_name").val(data.live_name[0]);
        $("#work").val(data.work[0]);


        $("#church_name").val(data.church_name[0]);
        $("#church_phone").val(data.church_phone[0]);
        $("#where_church").val(data.where_church[0]);
        $("#who_church").val(data.who_church[0]);
        $("#who_phone").val(data.who_phone[0]);
        $("#church_other").val(data.church_other[0]);


        $("#leave_long").val(data.leave_long[0]);

        $("#smoke_long").val(data.smoke_long[0]);
        $("#drink_long").val(data.drink_long[0]);
        $("#additiom_long").val(data.additiom_long[0]);

        $("#all_assess").val(data.all_assess[0]);
        $("#back_dealwith").val(data.back_dealwith[0]);


        $("#next_date").val(data.next_date[0]);
        $("#turn_out").val(data.turn_out[0]);
        $("#why_turn_out").val(data.why_turn_out[0]);

        //        $("#number").val(data.number[0]);
    },

    error: function (e) {
        console.log(e)
    }
});
//endregion

//選擇部門和負責人方法region

//如果部門改變呼叫user方法region
$(".department").on('change', function () {
    $(".user").empty();
    append_user();
});
$.ajax({
    type: 'POST',
    url: 'database/find_house_info.php',
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        for (var index in data.id) {
            $(".department").append('<option value="' + data.name[index] + '">' + data.name[index] + '</option>');
        }
    },
});
//endregion

//呼叫user方法region
function append_user() {
    $.ajax({
        type: 'POST',
        url: 'database/find_check_user.php',
        data: {
            department: $(".department").val()
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            for (var index in data.id) {
                $(".user").append('<option value="' + data.name[index] + '">' + data.name[index] + '</option>');
            }
        },
    });
}
//endregion

//endregion

//退回region
function back(){
    var num =$(".department").length;
    var department =[];
    var user =[];
//    console.log(num)
    var csstring = 
        '<label>會辦人員：</label>'+
        '<select name="department'+num+'[]" class="department" id="department'+num+'">'+
        '<option value="" disabled selected hidden>請選擇部門</option>'+
        '</select> '+
        '<select name="user'+num+'[]" class="user" id="user'+num+'">'+
        '<option value="" disabled selected hidden>請選擇審核人</option>'+
        '</select> '+
        '<input name="suggest'+num+'[]" type="text" style="width:50%" placeholder="請填寫建議">'+
        '<input class="type" type="text" value="退回" hidden>'+
        '<br>'+
        '<br>'

    $("#new_office").html(csstring);
    //選擇部門和負責人方法region

    //如果部門改變呼叫user方法region
        $('#department'+num+'').on('change',function(){   
            $('#user'+num+'').empty();
            append_user3(num);
        });
            $.ajax({
                type:'POST',
                url:'database/find_house_info.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $('#department'+num+'').append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    //endregion

    //呼叫user方法region
    function append_user3(num){             
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                data:{
                    department:$('#department'+num+'').val()
                },
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $('#user'+num+'').append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    }
    //endregion
    
//endregion    
}
//endregion

//儲存region
function track_store() {
    if($(".type").val() == "退回"){
        var type = "退回";
    }else{
        var type = "";
    }
    var office_num =$(".department").length;
    var department = [];
    var user = [];
    var suggest = [];
    var end_status = $("input[name='end_status']:checked").val();
    var how_track = $("input[name='how_track']:checked").val();
    var track_who = $("input[name='track_who']:checked").val();
    var track_name = "";
    var track_status = $("input[name='track_status']:checked").val();
    var track_status_other = "";
    var join_or_not = $("input[name='join_or_not']:checked").val();
    var attend = $("input[name='attend']:checked").val();
    var now_status = $("input[name='now_status']:checked").val();
    var now_status_placement = "";
    var live_status = $("input[name='live_status']:checked").val();
    var live_name = "";
    var work_status = $("input[name='work_status']:checked").val();
    var work = "";
    var home_status = $("input[name='home_status']:checked").val();
    var church_or_not = $("input[name='church_or_not']:checked").val();
    var leave_use = $("input[name='leave_use']:checked").val();
    var leave_smoke = $("input[name='leave_smoke']:checked").val();
    var leave_drink = $("input[name='leave_drink']:checked").val();
    var leave_additiom = $("input[name='leave_additiom']:checked").val();
    var use_addition = $("input[name='use_addition']:checked").val();
    var next = $("input[name='next']:checked").val();
    var why_not_track = $("input[name='why_not_track']:checked").val();
    var num = getUrlVars()['number'];
    var track_id = getUrlVars()['track_id'];
    var face_id = getUrlVars()['face_id'];
    
    //判斷所有會辦人員region
    for(var i=0;i<office_num;i++){
        department.push($('select[name="department'+i+'[]"]').val());
        user.push($('select[name="user'+i+'[]"]').val());
        suggest.push($('input[name="suggest'+i+'[]"]').val())
    }
    //endregion
    
    //傳入array region
    var addition = {}; //创建一个空对象
    $('input[name^="use_addition"]:checked').each(function (index, element) {
        if ($(this).val() == "其他") {
            addition[index] = $("#addition_other").val();
        } else {
            addition[index] = $(this).val(); //压入对象数组
        }
    });
    var re_use = {}; //创建一个空对象
    $('input[name^="re_use"]:checked').each(function (index, element) {
        if ($(this).val() == "其他") {
            re_use[index] = $("#re_use_other").val();
        } else {
            re_use[index] = $(this).val(); //压入对象数组
        }
    });
    //endregion

    //分辨track_who填寫region
    if (track_who == "家屬") {
        track_name = $("#track_family").val();
    } else if (track_who == "友人") {
        track_name = $("#track_friend").val();
    } else if (track_who == "牧者") {
        track_name = $("#track_chruch").val();
    } else if (track_who == "單位社工") {
        track_name = $("#track_sworker").val();
    } else if (track_who == "其他") {
        track_name = $("#track_who_other").val();
    }
    //endregion

    //分辨track_status填寫 region
    if (track_status == "面訪") {
        track_status_other = $("#track_status_place").val();
    } else if (track_status == "其他") {
        track_status_other = $("#track_status_other").val();
    }
    //endregion

    //分辨now_status填寫 region
    if (now_status == "司法安置") {
        now_status_placement = $("#placement1").val();
    } else if (now_status == "社福安置") {
        now_status_placement = $("#placement2").val();
    } else if (now_status == "醫療安置") {
        now_status_placement = $("#placement3").val();
    } else if (now_status == "其它戒治機構") {
        now_status_placement = $("#placement4").val();
    } else if (now_status == "其它") {
        now_status_placement = $("#placement5").val();
    }
    //endregion

    //分辨live_status填寫 region
    if (live_status == "與家人同住") {
        live_name = $("#family").val();
    } else if (live_status == "與教會同住") {
        live_name = $("#church").val();
    } else if (live_status == "與朋友同住") {
        live_name = $("#friend").val();
    } else if (work_status == "其它") {
        live_name = $("#live_other").val();
    }
    //endregion

    //分辨work_status填寫 region
    if (work_status == "就業") {
        work = $("#work1").val();
    } else if (work_status == "升學") {
        work = $("#work2").val();
    } else if (work_status == "無業") {
        work = $("#work3").val();
    } else if (work_status == "其它") {
        work = $("#work4").val();
    }
    //endregion

    //分辨其他 region
    if (home_status == "其它") {
        home_status = $("#home_other").val();
    }

    if (use_addition == "其它") {
        use_addition = $("#addition_other").val();
    }

    if (why_not_track == "其他") {
        why_not_track = $("#why_not_track_other").val();
    }

    //endregion

    $.ajax({
        url: "database/add_track_note.php",
        type: "POST",
        data: {
            face_id:face_id,
            open_id: $("#open_id").text(),
            name: $("#name").text(),
            gender: $("#gender").text(),
            addition: $("#addition").text(),
            age: $("#age").text(),
            address: $("#address").val(),
            address2: $("#address2").val(),
            info_name: $("#info_name").text(),
            info_phone: $("#info_phone").text(),
            info_relationship: $("#info_relationship").val(),
            enter_date: $("#enter_date").text(),
            end_date: $("#end_date").text(),
            leave_date: $("#leave_date").text(),
            end_status: end_status,
            why_leave: $("#why_leave").val(),
            track_date: $("#track_date").text(),
            track_assign: $("#track_assign").text(),
            how_track: how_track,
            track_who: track_who,
            track_name: track_name,
            track_status: track_status,
            track_status_other: track_status_other,
            join_or_not: join_or_not,
            join_times: $("#join_times").val(),
            attend: attend,
            now_status: now_status,
            now_status_placement: now_status_placement,
            live_status: live_status,
            live_name: live_name,
            work_status: work_status,
            work: work,
            home_status: home_status,
            church_or_not: church_or_not,
            church_name: $("#church_name").val(),
            church_phone: $("#church_phone").val(),
            where_church: $("#where_church").val(),
            who_church: $("#who_church").val(),
            who_phone: $("#who_phone").val(),
            church_other: $("#church_other").val(),
            leave_use: leave_use,
            leave_long: $("#leave_long").val(),
            leave_smoke: leave_smoke,
            smoke_long: $("#smoke_long").val(),
            leave_drink: leave_drink,
            drink_long: $("#drink_long").val(),
            leave_additiom: leave_additiom,
            additiom_long: $("#additiom_long").val(),
            use_addition: addition,
            re_use: re_use,
            all_assess: $("#all_assess").val(),
            back_dealwith: $("#back_dealwith").val(),
            next: next,
            next_date: $("#next_date").val(),
            turn_out: $("#turn_out").val(),
            why_turn_out: $("#why_turn_out").val(),
            why_not_track: why_not_track,
            number: num,
            track_id: track_id,
            department:department,
            user:user,
            suggest:suggest,
            url:decodeURIComponent(location.href),
            type:type,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                //                    console.log(data)
                swal({
                    title: '上傳失敗！請聯絡負責單位',
                    type: 'error',
                })
            }

        },

        error: function (e) {
            console.log(e)
        }
    });
};

//endregion

//進入預覽WORD頁面region

$("#track_preview").on('click',function(){
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var number = getUrlVars()["number"];
    var name = getUrlVars()["name"];
    var house = getUrlVars()["house"];
    var date = getUrlVars()["date"];
    var addition = getUrlVars()["addition"];
    var track_date = getUrlVars()["track_date"];
    var track_id = getUrlVars()["track_id"];
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
//    console.log(id);
    location.href = 'track_preview.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&house='+house+'&date='+date+'&addition='+addition+'&track_date='+track_date+'&track_id='+track_id+'&number='+number+'&four_id='+four_id+'&face_num='+face_num+'';
});


//endregion

//跳轉到在園紀錄region
$("#end_page").on('click', function(){
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var addition = getUrlVars()["addition"];
    var name = getUrlVars()["name"];
    var house = getUrlVars()["house"];
    var end_id = getUrlVars()["end_id"];
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
    window.open('close.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&addition='+addition+'&house='+house+'&leave_date='+$("#leave_date").text()+'&end_id='+end_id+'&four_id='+four_id+'&face_num='+face_num+'');
//    $.ajax({
//        url: "database/find_four_all.php",
//        type: "POST",
//        data: {
//            face_id: face_id,
//            end_id:end_id
//        },
//        dataType: "JSON",
//        async: false, //啟用同步請求
//        success: function (data) {
//    //        console.log(data.url[0])
//            
//        },
//
//        error: function (e) {
//            console.log(e)
//        }
//    });
//    
});
//endregion

//檢查會辦功能 region
function add_new() {
    var num =$(".department").length;
    var department =[];
    var user =[];
//    console.log(num)
    var csstring = 
        '<label>會辦人員：</label>'+
        '<select name="department'+num+'[]" class="department" id="department'+num+'">'+
        '<option value="" disabled selected hidden>請選擇部門</option>'+
        '</select> '+
        '<select name="user'+num+'[]" class="user" id="user'+num+'">'+
        '<option value="" disabled selected hidden>請選擇審核人</option>'+
        '</select> '+
        '<input name="suggest'+num+'[]" type="text" style="width:50%" placeholder="請填寫建議">'+
        '<input class="type" type="text" value="新增" hidden>'+
        '<br>'+
        '<br>'

    $("#new_office").append(csstring);
    
//選擇部門和負責人方法region

    //如果部門改變呼叫user方法region
        $('#department'+num+'').on('change',function(){   
            $('#user'+num+'').empty();
            append_user3(num);
        });
            $.ajax({
                type:'POST',
                url:'database/find_house_info.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $('#department'+num+'').append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    //endregion

    //呼叫user方法region
    function append_user3(num){             
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                data:{
                    department:$('#department'+num+'').val()
                },
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $('#user'+num+'').append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    }
    //endregion
    
//endregion    
    
};
//endregion

//選擇部門和負責人方法region

    //如果部門改變呼叫user方法region
        $("#department").on('change',function(){   
            $("#user").empty();
            append_user();
        });
        $("#department1").on('change',function(){   
            $("#user1").empty();
            append_user2();
        });
            $.ajax({
                type:'POST',
                url:'database/find_house_info.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $(".department").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    //endregion

    //呼叫user方法region
    function append_user(){             
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                data:{
                    department:$(".department").val()
                },
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                        for (var index in data.id) {
                            $("#user").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                        }
                },
            });
    }
    function append_user2(){             
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                data:{
                    department:$(".department").val()
                },
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                        for (var index in data.id) {
                            $("#user1").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                        }
                },
            });
    }
    //endregion

    //預設會辦人region
    $('#department').val('行政中心');
    $('#department1').val('行政中心');
    $("#user").empty();
    $("#user1").empty();
    append_user();
    append_user2();
    $('#user').val('許文瀞');
    $('#user1').val('苗長青');
    //endregion
//endregion