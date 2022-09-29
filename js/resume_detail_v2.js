//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//datepicker創建 region
datepicker_create = function (selector_id) {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R年mm月dd日",
      showButtonPanel: true,
      minDate: new Date(
        new Date().getFullYear() - 2,
        new Date().getMonth() - 3,
        1
      ),
      maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
      onClose: function (dateText) {
        // console.log($('#'+selector_id).val());
        // console.log(trans_to_EN(dateText));
      },
      beforeShow: function (input, inst) {
        var $this = $(this);
        var cal = inst.dpDiv;
        var outerh = $this.outerHeight();
        if ($this.offset().top > 1200) {
          outerh = outerh * 4;
        } else {
          outerh = outerh * 3;
        }
        // console.log($this.offset().top)
        // console.log(outerh)
  
        var top = $this.offset().top - outerh;
        var left = $this.offset().left - 10;
        setTimeout(function () {
          cal.css({
            top: top,
            left: left,
          });
        }, 10);
      },
    });
    // $("#" + selector_id).datepicker("setDate", "today");
  };
  //endregion
  
  // 民國年轉換日期格式yyyy-dd-mm region
  function split_date(date) {
    return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
  }
  //endregion

const notyf = new Notyf();

var resume_id = getUrlVars()["id"];

window.file_year_arr = new Array();

window.the_day = new Date();

window.this_year = the_day.getFullYear() - 1911;

// 存放檔案名稱
window.file_name = [];

//網頁載入 region
$(document).ready(function () {
    //將input name名稱為ch_datepicker創建datepicker初始化 region
    $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
    });
    //endregion

    load_resume_datas();

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
            // console.log(data)

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


    // console.log(file_year_arr)

    // console.log(file_year_arr[0])
    // console.log(file_year_arr[file_year_arr.length - 1])

    window.file_year_min = parseInt(file_year_arr[0]);
    // window.file_year_max = parseInt(file_year_arr[file_year_arr.length - 1]);

    var count = this_year - file_year_min;
    var tab_str = "";

    // console.log(count);

    for(var i=0; i<=count; i++)
    {
        tab_str += '<tr id="'+(file_year_min + i)+'">'
        +'<td>'+ (file_year_min + i) +'</td>'
        +'<td>'+ '<input name="'+(file_year_min + i)+'_customFile" type="file" class="resume_forms_question'+(file_year_min + i)+' form-control"/>' + 
            '<div id="'+(file_year_min + i) + '_0_customFile">'+
                '<br/><a href="./upload/test履歷表.pdf" style="text-decoration:none;color:blue;" target="_blank">test履歷表.pdf</a>'+
            '</div>' 
        +'</td>'
        +'<td>'+ '<input name="'+(file_year_min + i)+'_customFile" type="file" class="resume_forms_question'+(file_year_min + i)+' form-control" multiple="multiple"/>' + '<div id="'+(file_year_min + i) + '_3_customFile"></div>' +'</td>'
        +'<td>'+ '<textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="'+(file_year_min + i)+'_remark" class="resume_forms_question'+(file_year_min + i)+'" placeholder="備註"></textarea>' +'</td>'
        +'<td>'
            +'<div id="edit_div'+(file_year_min + i)+'">'
                +'<button style="font-size:20px" id="resume_forms_edit'+(file_year_min + i)+'" class="btn btn-default" onclick="resume_forms_edit('+(file_year_min + i)+');">編輯</button>'
            +'</div>'
            +'<div id="save_div'+(file_year_min + i)+'" hidden>'
                +'<button style="font-size:20px" onclick="update_row(this)" class="btn btn-default">修改</button><br/><br/>'           
                +'<button style="font-size:20px" id="resume_forms_cancel'+(file_year_min + i)+'" class="btn btn-default" onclick="resume_forms_cancel('+(file_year_min + i)+');">取消</button>'
            +'</div>'
        +'</td>'
        +'</tr>';


    }

    $("#all_files").html(tab_str);

    $('[class^=resume_forms_question]').attr('disabled', true);
}

function load_resume_datas() {
    $.ajax({
        url: "database/find_resume_user_data_detail.php",
        data:{
            Resume_id:resume_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){
                $("#account").text(value.Account);
                $("#user_name").val(value.Name);
                $("#entry_date").val(value.Entry_date);
                $("#resigned_date").val(value.Resigned_date);
                $("#on_or_off").val(value.On_or_off);
                $("#remark").val(value.Remark);
            });
            
            

        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });

    $.ajax({
        url: "database/find_resume_forms_data_detail.php",
        data:{
            Resume_id:resume_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){
               
                switch (value.File_type) {
                    // 履歷表檔案
                    case "file_A":
                        var resume_file_path = value.File_path.replace("../", "./");
                        var resume_file_name = value.File_path.split("/");
                        $("[name='resume_file']").attr("value", resume_file_name[4]);
                        $("#resume_file").html(
                            '<a href="'+resume_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +resume_file_path
                            +'</a>');
                        break;
                    // 雇傭契約
                    case "file_B":
                    
                        break;
                    // 保密契約
                    case "file_C":
                        var resume_file_path = value.File_path.replace("../", "./");
                        var resume_file_name = value.File_path.split("/");
                        $("[name='nda_file']").attr("value", resume_file_name[4]);
                        $("#nda_file").html(
                            '<a href="'+resume_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +resume_file_path
                            +'</a>');
                        break;
                    // 畢業證書
                    case "file_D":
                        var resume_file_path = value.File_path.replace("../", "./");
                        var resume_file_name = value.File_path.split("/");
                        $("[name='diploma_file']").attr("value", resume_file_name[4]);
                        $("#diploma_file").html(
                            '<a href="'+resume_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +resume_file_path
                            +'</a>');
                        break;
                    // 考績檔案
                    case "file_E":
                
                        break;
                }
            });
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });


    $(".resume_question").attr("disabled",true);
}


resume_update = function() {
    
    var stau = false;

    if (check_updat_resume_user_data() != "") {
        stau = false;
    } else {
        stau = true;
    }

    if (!stau) {
        swal({
          title: check_updat_resume_user_data(),
          type: "error",
        });
      } else {

        //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
        $("input, textarea").each(function () {
            if ($(this).attr("type") != "file") {
                $(this).val(jQuery.trim($(this).val()));
            }
        });
        var form_data = new FormData();

        var entry_date_year_split = $("#entry_date").val().split("年");

        // console.log(file_name)

        // var get_resume_files = get_files_name_value();

        // var no_file_arr = [];

        $("input.resume_question[type='file']").each(function(index, element) {
            var resume_files = $(this).prop("files");
            // console.log(resume_files.length)
            // var resume_files_val = $(this).attr("value") || "";
            // var resume_files_name = $(this).attr("name");

            if (resume_files != undefined) {
              if (resume_files.length != 0) {
                for (var i = 0; i < resume_files.length; i++) {
                  form_data.append("resume_files"+index, resume_files[i]);
                  // console.log(resume_files[i])
                }
              } 
            //   else 
            //   {
            //     //載入量表『無重新上傳檔案』情況下按儲存，則加入no_file_arr供後端程式判斷
            //     no_file_arr.push({ name: resume_files_name, value: resume_files_val });
            //   }
            }
        });
        
        // 未選擇檔案的file陣列no_file_arr加入File_name變數供後端程式判斷
        // form_data.append("File_name", JSON.stringify(no_file_arr));

        form_data.append("Resume_id", resume_id);
        form_data.append("Account", $("#account").text());
        form_data.append("Name", $("#user_name").val());
        form_data.append("Entry_date", $("#entry_date").val());
        form_data.append("Resigned_date", $("#resigned_date").val());
        form_data.append("On_or_off",$("#on_or_off").val());
        form_data.append("Remark",$("#remark").val());
        form_data.append("File_year",entry_date_year_split[0]);

        // 預覽傳到後端的資料詳細內容
        // for (var pair of form_data.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }


        $.ajax({
            url: "database/update_resume_user_data_detail.php",
            type: "POST",
            //   data: {
            //     Resume_id:resume_id,
            //   },
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
          success: function (data) {
            // console.log(data);
            if (data == 1) {
              swal({
                type: "success",
                title: "新增成功!",
                allowOutsideClick: false, //不可點背景關閉
              }).then(function () {
                window.location.href =
                  "resume_detail_v2.php?"+
                  "&id=" +
                  resume_id +
                  "";
              });
            } else {
              swal({
                type: "error",
                title: "新增失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
              });
            }
          },
          error: function (e) {
            console.log(e)
            swal({
                type: "error",
                title: "新增失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
            });
          },
        });
      }
}

function check_updat_resume_user_data() {
    var user_name = $("#user_name").val();
    var entry_date = $("#entry_date").val();
    var on_or_off = $("#on_or_off").val();
    var resigned_date = $("#resigned_date").val();

    var errorstr = "";

    
    if (user_name == null) {
        errorstr += "未填寫員工姓名!\r\n";
      }
    if (entry_date == null) {
    errorstr += "未填寫入職日!\r\n";
    }
    if(on_or_off == "否")
    {
        if (resigned_date == null || resigned_date.replace(/\s*/g, "") == "") {
            errorstr += "在職狀態為否時，需填寫離職日期!\r\n";
        }
    }
    if (errorstr == "") {
        if (user_name.replace(/\s*/g, "") == "") {
          errorstr += "未填寫員工姓名!\r\n";
        }
        if (entry_date.replace(/\s*/g, "") == "") {
          errorstr += "未填寫入職日!\r\n";
        }
      }
    
      return errorstr;
}

// 顯示檔名 region
$("input[type='file']").change(function (event) {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
  
    //創建臨時檔案連結
    // var tmppath = URL.createObjectURL(event.target.files[0]);
  
    //預覽上傳檔名
    $("#" + name).html("檔名：" + filePath[filePath.length - 1]);
  
  });
// endregion

// 獲取檔案的檔名、值 region
get_files_name_value = function() {

    file_name = [];
    $("input[type='file']").each(function() {
      //獲取 檔名.檔案格式
        var filePath = $(this).val().split("\\");
    //   var fileval = $(this).attr("value") || "";
      //獲取 file name名稱
      var name = $(this).attr("name");
      
      file_name.push({ name: name, value: filePath[filePath.length - 1] });
    //   file_name.push({ name: name, value: fileval });
   });
  
   return file_name;
  }
// endregion


//預約表格鎖定控制region
function resume_forms_edit(id){
    $('.resume_forms_question'+id+'').attr('disabled', false);
    $('#edit_div'+id+'').attr('hidden', true);
    $('#save_div'+id+'').attr('hidden', false);

};
function resume_forms_cancel(id){
    $('.resume_forms_question'+id+'').attr('disabled', true);
    $('#edit_div'+id+'').attr('hidden', false);
    $('#save_div'+id+'').attr('hidden', true);
};
//endregion

//篩檢總表格鎖定控制region
function resume_edit(){
    $('.resume_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function resume_cancel(){
    $('.resume_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion