//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

const notyf = new Notyf();

var resume_id = getUrlVars()["id"];

window.file_year_arr = new Array();

window.the_day = new Date();

window.this_year = the_day.getFullYear() - 1911;

//網頁載入 region
$(document).ready(function () {
    
    load_files();
});


function load_files() {
    $.ajax({
        url: "database/find_resume_forms_data_detail.php",
        data:{
            Resume_id:resume_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log(data)

            if(data.length == 0)
            {
                file_year_arr.push(this_year);
            }
            else
            {
                $.each(data,function(index,value){
                    file_year_arr.push(value.File_year);
                    // file_year_arr.push(value.Year);
                });
            }

            // 從小到大排序
            file_year_arr.sort((a, b) => a - b)
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });


    console.log(file_year_arr)

    console.log(file_year_arr[0])
    console.log(file_year_arr[file_year_arr.length - 1])

    window.file_year_min = parseInt(file_year_arr[0]);
    // window.file_year_max = parseInt(file_year_arr[file_year_arr.length - 1]);

    var count = this_year - file_year_min;
    var tab_str = "";

    console.log(count);

    for(var i=0; i<=count; i++)
    {
        tab_str += '<tr id="'+(file_year_min + i)+'">'
        +'<td>'+ (file_year_min + i) +'</td>'
        +'<td>'+ '<input name="'+(file_year_min + i)+'_customFile" type="file" class="form-control resum_forms_question"/>' + 
            '<div id="'+(file_year_min + i) + '_0_customFile">'+
                '<br/><a href="./upload/test履歷表.pdf" style="text-decoration:none;color:blue;" target="_blank">test履歷表.pdf</a>'+
            '</div>' 
        +'</td>'
        +'<td>'+ '<input name="'+(file_year_min + i)+'_customFile" type="file" class="form-control resum_forms_question" multiple="multiple"/>' + '<div id="'+(file_year_min + i) + '_3_customFile"></div>' +'</td>'
        +'<td>'+ '<textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="'+(file_year_min + i)+'_remark" class="resum_forms_question" placeholder="備註"></textarea>' +'</td>'
        +'<td><button  type="button" onclick="update_row(this)">修改</button></td>'
        +'</tr>';
    }

    $("#all_files").html(tab_str);
    $(".resum_forms_question").attr("disabled",true);
}