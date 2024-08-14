//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

const notyf = new Notyf();

//抓所有開案記錄 包含曾經的 region
$(document).ready(function () {
    var id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
//    console.log(four_id)
    $.ajax({
        url: "database/find_case_all_all.php",
        data: {
            Id: id,
            Open_id:open_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var cssstring ="";
        //    console.log(data)

            $.each(data,function(index,value){
                cssstring += 
                '<tr name="num1[]">'+
//                            '<td><input id="date_self'+value.number+'" type="date" value="'+value.date_self+'"></td>'+
                    '<td>'+value.Name+'</td>'+
                    '<td>'+value.Open_case_date+'</td>'+
                    '<td><a href="case_all.php?name='+value.Name+'&gender='+value.Gender+'&pid='+value.Case_pid+'&date='+value.Open_case_date+'&property='+ value.Case_property +'&type='+ value.Object_type+'&grade='+ value.Case_grade+'&id='+value.Id+'&open_id='+value.Case_id+'&referral='+value.Referral+'&case_Create_date='+value.Case_Create_date+'&unopen_type='+value.Unopen_type+'&birth='+value.Birth+'">點擊進入</a></td>'+
//                            '<td><button>修改</button></td>'
//                            '<td><button onClick="update('+value.number+');">修改</button></td>'+
                '</tr>'
                
            });
            
            $("#case_all").append(cssstring);
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e);
        }
    });
});
//endregion