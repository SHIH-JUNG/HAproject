//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填寫資料(輔導紀錄)region
var name = getUrlVars()["name"];
var date = getUrlVars()["date"];
var house = getUrlVars()["house"];
var addition =getUrlVars()["addition"];
$("#name").text(decodeURIComponent(name));
$("#date").text(date);
$("#house").text(decodeURIComponent(house));
$("#addition").text(decodeURIComponent(addition));
//endregion

//新增後追紀錄region
$("#family_add_new").on('click', function(){
//    count();
    
//    $("#daily_all_tb").append()
    var num = document.getElementsByName('num[]').length;

    var cssstring = 
                '<tr name="num[]">'+
                    '<td><input id="care_date'+num+'" type="date"></td>'+
                    '<td>'+
                        '<select class="department" id="department'+num+'">'+
                            '<option value="" disabled selected hidden>請選擇部門</option>'+
                        '</select>'+
                        '<select class="user" id="user'+num+'">'+
                            '<option value="" disabled selected hidden>請選擇同工</option>'+
                        '</select>'+
                    '</td>'+
                    '<td>'+
                        '<select id="care_who'+num+'">'+
                            '<option value="" disabled selected hidden>請選擇關懷對象</option>'+
                            '<option value="個案本人">個案本人</option>'+
                            '<option value="家屬">家屬</option>'+
                            '<option value="友人">友人</option>'+
                            '<option value="牧者">牧者</option>'+
                            '<option value="單位社工">單位社工</option>'+
                            '<option value="其他">其他</option>'+
                        '</select>'+
                    '</td>'+                    
                    '<td>'+
                        '<select id="care_status'+num+'">'+
                            '<option value="" disabled selected hidden>請選擇關懷狀況</option>'+
                            '<option value="電話接聽">電話接聽</option>'+
                            '<option value="電話未接聽">電話未接聽</option>'+
                            '<option value="電話空號">電話空號</option>'+
                            '<option value="面訪">面訪</option>'+
                            '<option value="通訊軟體">通訊軟體</option>'+
                            '<option value="其他">其他</option>'+
                        '</select>'+
                    '</td>'+ 
                    '<td>'+
                        '<select id="join_or_not'+num+'">'+
                            '<option value="" disabled selected hidden>請選擇家屬團契參予意願</option>'+
                            '<option value="有意願，但尚未來過家屬團契">有意願，但尚未來過家屬團契</option>'+
                            '<option value="有意願，且已來過家屬團契">有意願，且已來過家屬團契</option>'+
                            '<option value="無意願">無意願</option>'+
                            '<option value="不明">不明</option>'+
                        '</select>'+
                    '</td>'+ 
                    '<td></td>'+
                    '<td><button onClick="store('+num+');">儲存</button> <button onClick="location.reload();">取消</button></td>'+
//                    '<td><button onClick="store3('+num+');">儲存</button> <button onClick="location.reload();">取消</button></td>'+
                '</tr>'
    $("#family_all").append(cssstring);
    
    //選擇部門和負責人方法region

//如果部門改變呼叫user方法region
$(".department").on('change',function(){   
    $(".user").empty();
    append_user();
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
                        $(".user").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    }
    //endregion

//endregion
    
    //只能按一次
    var btn = $(this); 
    btn.prop('disabled',true); 
});
//endregion

//點擊儲存到family_all資料庫region
function store(num){
    var face_id = getUrlVars()["face_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var addition = decodeURIComponent(getUrlVars()["addition"]);
    var family_id = getUrlVars()["id"];
    
    $.ajax({
        url: "database/add_family_all.php",
        data: {
            face_id:face_id,
            url: 'family_note.php?face_id='+face_id+'&number='+num+'&name='+name+'&addition='+addition+'&family_id='+family_id+'',
            name: name,
            addition: addition,
            number:num,
            family_id:family_id,
            care_date:$('#care_date'+num+'').val(),
            department:$('#department'+num+'').val(),
            user:$('#user'+num+'').val(),
            care_who:$('#care_who'+num+'').val(),
            care_status:$('#care_status'+num+'').val(),
            join_or_not:$('#join_or_not'+num+'').val(),

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
            console.log(e);
        }
    });
}
//endregion

//抓所有後追蹤紀錄region
    var face_id = getUrlVars()["face_id"];
    var family_id = getUrlVars()["id"];
    $.ajax({
        url: "database/find_family_all.php",
        data: {
            face_id: face_id,
            family_id:family_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var cssstring ="";
            for(index in data.number){
                var date = (data.date[index]).substr(0,10);
                cssstring += 
                        '<tr name="num[]">'+
//                            '<td><input id="date_self'+data.number[index]+'" type="date" value="'+data.date_self[index]+'"></td>'+
                            '<td>'+data.care_date[index]+'</td>'+
                            '<td>'+data.user[index]+'</td>'+
                            '<td>'+data.care_who[index]+'</td>'+
                            '<td>'+data.care_status[index]+'</td>'+
                            '<td>'+data.join_or_not[index]+'</td>'+
                            '<td>'+date+'</td>'+
                            '<td><a href="'+data.url[index]+'">點擊進入</a></td>'+
//                            '<td><button>修改</button></td>'
//                            '<td><button onClick="update('+data.number[index]+');">修改</button></td>'+
                        '</tr>'
            }
            $("#family_all").append(cssstring);
        },
        error: function (e) {
            console.log(e);
        }
    });
//endregion