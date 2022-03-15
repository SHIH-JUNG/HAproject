//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//固定資料 region
var open_id = getUrlVars()["open_id"];
var face_id = getUrlVars()["face_id"];
var name = getUrlVars()["name"];
var addition = getUrlVars()["addition"];
var inside_id = getUrlVars()["inside_id"];
var num = getUrlVars()["number"];
$("#open_id").text(open_id);
$("#name").text(decodeURIComponent(name));
$("#addition").text(decodeURIComponent(addition));

$.ajax({
    url: "database/find_four.php",
    type: "POST",
    data: {
        face_id: face_id,
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        var TimeNow= new Date();
        var today = TimeNow.getFullYear()+"-"+('0'+(TimeNow.getMonth()+1)).substr(-2)+"-"+('0'+TimeNow.getDate()).substr(-2);

        if(Date.parse(today,10) < Date.parse(data.stage1[0])){
            $("#stage").text("第一階段");
        }else if(Date.parse(today,10) < Date.parse(data.stage2[0])){
            $("#stage").text("第二階段");
        }else if(Date.parse(today,10) < Date.parse(data.stage3[0])){
            $("#stage").text("第三階段");
        }else{
            $("#stage").text("第四階段");
        }
        
        $("#age").text(data.Age[0]);
        $("#enter_date").text(data.stay_datetime[0]);
        $("#address").text(data.Address[0]);
        $("#house").text(data.house[0]);
        $("#info_name").text(data.main_contact[0]);
        $("#info_phone").text(data.contact_phone[0]);
    },

    error: function (e) {
        console.log(e)
    }
});

$.ajax({
    url: "database/find_inside_all.php",
    type: "POST",
    data: {
        open_id: open_id,
        inside_id: inside_id,
        number:num
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        $("#care_date").text(data.care_date[0]);
        $("#care_assign").text(data.user[0]);
        if (data.care_who[0] !== "") {
            $('input[name=care_who][value=' + data.care_who[0] + ']').attr('checked', true);
        }
        if (data.care_status[0] !== "") {
            $('input[name=care_status][value=' + data.care_status[0] + ']').attr('checked', true);
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

//抓inside_detail的值填入region
$.ajax({
    url: "database/find_inside_detail.php",
    type: "POST",
    data: {
        face_id: face_id,
        open_id: open_id,
        number: num,
        inside_id: inside_id,
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
                '<button onclick="add_new()">新增會辦人員</button>'+
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
        if (data.how_care[0] !== "") {
            $('input[name=how_care][value=' + data.how_care[0] + ']').attr('checked', true);
        }
        if (data.care_who[0] !== "") {
            $('input[name=care_who][value=' + data.care_who[0] + ']').attr('checked', true);
        }
        if (data.care_name[0] !== "") {
            $('input[name=care_name][value=' + data.care_name[0] + ']').attr('checked', true);
        }
        if (data.care_status[0] !== "") {
            $('input[name=care_status][value=' + data.care_status[0] + ']').attr('checked', true);
        }
        if (data.care_status_other[0] !== "") {
            $('input[name=care_status_other][value=' + data.care_status_other[0] + ']').attr('checked', true);
        }
        if (data.join_or_not[0] !== "") {
            $('input[name=join_or_not][value=' + data.join_or_not[0] + ']').attr('checked', true);
        }
        if (data.attend[0] !== "") {
            $('input[name=attend][value=' + data.attend[0] + ']').attr('checked', true);
        }
        if (data.how_care[0] !== "") {
            $('input[name=how_care][value=' + data.how_care[0] + ']').attr('checked', true);
        }
        //endregion
        
        //判斷選項填入對應的值region
        if (data.care_who[0] == "家屬") {
            $("#care_family").val(data.care_name[0]);
        } else if (data.care_who[0] == "友人") {
            $("#care_friend").val(data.care_name[0]);
        } else if (data.care_who[0] == "牧者") {
            $("#care_church").val(data.care_name[0]);
        } else if (data.care_who[0] == "單位社工") {
            $("#care_sworker").val(data.care_name[0]);
        } else if (data.care_who[0] == "其他") {
            $("#care_who_other").val(data.care_name[0]);
        }

        if (data.care_status[0] == "面訪") {
            $("#care_status_place").val(data.care_status_other[0]);
        } else if (data.care_status[0] == "其他") {
            $("#care_status_other").val(data.care_status_other[0]);
        }
        //endregion
        
        $("#address").val(data.address[0]);
        $("#info_name").val(data.info_name[0]);
        $("#info_phone").val(data.info_phone[0]);
        $("#info_relationship").val(data.info_relationship[0]);
        $("#join_times").val(data.join_times[0]);
        $("#all_assess").val(data.all_assess[0]);
        $("#back_dealwith").val(data.back_dealwith[0]);
        $("#next_date").val(data.next_date[0]);

    },

    error: function (e) {
        console.log(e)
    }
});
////endregion

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
function inside_store() {
    if($(".type").val() == "退回"){
        var type = "退回";
    }else{
        var type = "";
    }
    var office_num =$(".department").length;
    var department = [];
    var user = [];
    var suggest = [];
    var how_care = $("input[name='how_care']:checked").val();
    var care_who = $("input[name='care_who']:checked").val();
    var care_name = "";
    var care_status = $("input[name='care_status']:checked").val();
    var care_status_other = "";
    var join_or_not = $("input[name='join_or_not']:checked").val();
    var attend = $("input[name='attend']:checked").val();
    var num = getUrlVars()['number'];
    var family_id = getUrlVars()['family_id'];

    
    //判斷所有會辦人員region
    for(var i=0;i<office_num;i++){
        department.push($('select[name="department'+i+'[]"]').val());
        user.push($('select[name="user'+i+'[]"]').val());
        suggest.push($('input[name="suggest'+i+'[]"]').val())
    }
    //endregion
    
    //分辨care_who填寫region
    if (care_who == "家屬") {
        care_name = $("#care_family").val();
    } else if (care_who == "友人") {
        care_name = $("#care_friend").val();
    } else if (care_who == "牧者") {
        care_name = $("#care_church").val();
    } else if (care_who == "單位社工") {
        care_name = $("#care_sworker").val();
    } else if (care_who == "其他") {
        care_name = $("#care_who_other").val();
    }
    //endregion

    //分辨care_status填寫 region
    if (care_status == "面訪") {
        care_status_other = $("#care_status_place").val();
    } else if (care_status == "其他") {
        care_status_other = $("#care_status_other").val();
    }
    //endregion

    
    $.ajax({
        url: "database/add_inside_note.php",
        type: "POST",
        data: {
            open_id: $("#open_id").text(),
            face_id: face_id,
            name: $("#name").text(),
            gender: $("#gender").text(),
            addition: $("#addition").text(),
            age: $("#age").text(),
            address: $("#address").text(),
            info_name: $("#info_name").text(),
            info_phone: $("#info_phone").text(),
            info_relationship: $("#info_relationship").val(),
            house:$("#house").text(),
            enter_date:$("#enter_date").text(),
            stage:$("#stage").text(),
            care_date: $("#care_date").text(),
            care_assign: $("#care_assign").text(),
            how_care: how_care,
            care_who: care_who,
            care_name: care_name,
            care_status: care_status,
            care_status_other: care_status_other,
            join_or_not: join_or_not,
            join_times: $("#join_times").val(),
            attend: attend,
            all_assess: $("#all_assess").val(),
            back_dealwith: $("#back_dealwith").val(),
            next_date: $("#next_date").val(),
            number: num,
            inside_id: inside_id,
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
                swal({
                    title: '儲存失敗！請聯絡負責單位',
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

$("#inside_preview").on('click',function(){
    var open_id = getUrlVars()["open_id"];
    var face_id = getUrlVars()["face_id"];
    var inside_id = getUrlVars()["inside_id"];
    var num = getUrlVars()["number"];
    var face_num = getUrlVars()["face_num"];
//    console.log(id);
    location.href = 'inside_preview.php?open_id='+open_id+'&face_id='+face_id+'&inside_id='+inside_id+'&num='+num+'&face_num='+face_num+'';
});


//endregion

//設定麵包屑返回region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];
var inside_id = getUrlVars()["inside_id"];
var face_num = getUrlVars()["face_num"];
//    console.log(id);
var url = 'inside_all.php?id='+inside_id+'&face_id='+face_id+'&open_id='+open_id+'&name='+$("#name").text()+'&addition='+$("#addition").text()+'&enter_date='+$("#enter_date").text()+'&house='+$("#house").text()+'&face_num='+face_num+'';

//
$("#history").attr('href',url);
//endregion

//跳轉到在園紀錄region
$("#inside_page").on('click', function(){
var open_id = getUrlVars()["open_id"];
var face_id = getUrlVars()["face_id"];
var name = getUrlVars()["name"];
var addition = getUrlVars()["addition"];
var inside_id = getUrlVars()["inside_id"];
var four_id = getUrlVars()["four_id"];
var face_num = getUrlVars()["face_num"];
    window.open('four_all.php?name='+name+'&date='+$("#enter_date").text()+'&house='+$("#house").text()+'&id='+face_id+'&open_id='+open_id+'&addition='+addition+'&age='+$("#age").text()+'&gender='+$("#gender").text()+'&four_id='+four_id+'&face_num='+face_num+'');
    
//    $.ajax({
//        url: "database/find_open_all.php",
//        type: "POST",
//        data: {
//            face_id: face_id,
//            num:num
//        },
//        dataType: "JSON",
//        async: false, //啟用同步請求
//        success: function (data) {
//            
//        },
//
//        error: function (e) {
//            console.log(e)
//        }
//    });
    
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