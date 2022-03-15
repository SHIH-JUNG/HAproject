//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓所有曾入住紀錄region
$(document).ready(function () {
    var phone_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
//    console.log(four_id)
    $.ajax({
        url: "database/find_case.php",
        data: {
            Phone_id: phone_id,
            Open_id:open_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var cssstring ="";
//            console.log(data)
            for(index in data.Name){
                cssstring += 
                        '<tr name="num1[]">'+
//                            '<td><input id="date_self'+data.number[index]+'" type="date" value="'+data.date_self[index]+'"></td>'+
                            '<td>'+data.Name[index]+'</td>'+
                            '<td>'+data.Open_case_date[index]+'</td>'+
                            '<td><a href="case_all.php?name='+data.Name[index]+'&pid='+data.Case_pid[index]+'&date='+data.Open_case_date[index]+'&grade='+ data.Case_grade[index] +'&property='+ data.Case_property[index] +'&type='+ data.Object_type[index]+'&id='+data.Phone_id[index]+'&open_id='+data.Case_id[index]+'&addition='+data.M_addiction[index]+'&age='+data.Age[index]+'&gender='+data.Gender[index]+'">點擊進入</a></td>'+
//                            '<td><button>修改</button></td>'
//                            '<td><button onClick="update('+data.number[index]+');">修改</button></td>'+
                        '</tr>'
            }
            
            $("#case_all").append(cssstring);
        },
        error: function (e) {
            console.log(e);
        }
    });
});
//endregion