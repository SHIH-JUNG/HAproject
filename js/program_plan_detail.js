//取得url id值region
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
//endregion

//datepicker創建 region
datepicker_create = function (selector_id) {
  if (selector_id.includes("birth")) {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      yearRange: "-109:+0",
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
  } else {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      minDate: new Date(new Date().getFullYear() - 10, 0, 1),
      maxDate: new Date(new Date().getFullYear() + 10, 11, 31),
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
  }
};
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
  var strAry = endate.split("-");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry.join(".");
};
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) {
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) < 1911) {
    strAry[0] = parseInt(strAry[0]) + 1911;
  }

  return strAry.join("-");
};
//endregion

//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};

const notyf = new Notyf();

var program_id = getUrlVars()["id"];

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


  // load_files();

  load_program_datas();

});

program_id = getUrlVars()["program_id"];

function load_files() {
  $.ajax({
      url: "database/find_program_plan_froms_data_detail.php",
      data:{
          program_id:program_id,
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
          // file_year_arr.sort((a, b) => a - b)
          // 從大到小排序
          file_year_arr.sort((a, b) => b - a)
      },
      error:function(e){
          notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
          // console.log(e)
      }
  });


  // console.log(file_year_arr)

  // console.log(file_year_arr[0])
  // console.log(file_year_arr[file_year_arr.length - 1])

  window.file_year_min = parseInt(file_year_arr[file_year_arr.length - 1]);
  // window.file_year_max = parseInt(file_year_arr[file_year_arr.length - 1]);

  var count = this_year - file_year_min;
  var tab_str = "";

  // console.log(count);

  for(var i=0; i<=count; i++)
  {
      tab_str += '<tr id="'+(this_year - i)+'">'
      +'<td>'+ (this_year - i) +'</td>'

      + '<td>'
        + '<div class="col-sm-8">'
          + '<div class="text-left">'
              + '<input name="employment_contract_'+(this_year - i)+'" type="file" class="program_forms_question'+(this_year - i)+' form-control"/>'
              + '<br/>'
              + '<div id="employment_contract_'+(this_year - i) + '"></div>'
          + '</div>'
        + '</div>'            
      + '</td>'
      
      + '<td>'
        + '<div class="col-sm-8">'
          + '<div class="text-left">'
              + '<input name="PA_file_'+(this_year - i)+'" type="file" class="program_forms_question'+(this_year - i)+' form-control"/>' 
              + '<br/>'
              + '<div id="PA_file_'+(this_year - i) + '"></div>'
          + '</div>'
        + '</div>'            
      + '</td>'

      +'<td>'+ '<textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="remark_'+(this_year - i)+'" class="program_forms_question'+(this_year - i)+'" placeholder="備註"></textarea>' +'</td>'
      +'<td>'
          +'<div id="edit_div'+(this_year - i)+'">'
              +'<button style="font-size:20px" id="program_forms_edit'+(this_year - i)+'" class="btn btn-default" onclick="program_forms_edit('+(this_year - i)+');">編輯</button>'
          +'</div>'
          +'<div id="save_div'+(this_year - i)+'" hidden>'
              +'<button style="font-size:20px" onclick="update_row('+(this_year - i)+')" class="btn btn-default">修改</button><br/><br/>'           
              +'<button style="font-size:20px" id="program_forms_cancel'+(this_year - i)+'" class="btn btn-default" onclick="program_forms_cancel('+(this_year - i)+');">取消</button>'
          +'</div>'
      +'</td>'
      +'</tr>';


  }

  $("#all_files").html(tab_str);

  $('[class^=program_forms_question]').attr('disabled', true);
}
window.file_A_arr = [];
window.file_C_arr = [];
window.file_D_arr = [];
function load_program_datas() {
  $.ajax({
      url: "database/find_program_plan_user_data_detail.php",
      data:{
          program_id:program_id,
      },
      type: "POST",
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log(data)
          $.each(data,function(index,value){
              $("#date").val(check_sql_date_format(value.Date));
              $("#plan_name").val(value.Plan_name);
              $("#plan_from").val(value.Plan_from);
              if(value.Fund.includes("其他")){
                var funds=value.Fund.split('-')
                $("#fund").val(funds[0]);
                $("#funding").val(funds[1]);
              }
              else{
                $("#fund").val(value.Fund);
                document.getElementById('funding').type = 'hidden';
              }
              $("#remark").val(value.Remark);
          });
          
        
      },
      error:function(e){
          notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
          // console.log(e)
      }
  });

  $.ajax({
      url: "database/find_program_plan_forms_data_detail.php",
      data:{
          program_id:program_id,
      },
      type: "POST",
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log(data.length)

          var this_year_file_upload_num = 0;
          var recently_upload_date = "---年--月--日";

          if(data.length==0){
            $("#proposal_file").html('<br/>'
              + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_A_arr);">刪除</button>'
              + '<div>※點選上面要刪除的檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_A\', file_A_arr);">新增檔案++</button><br/><div id="selected-file_A"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>'
            );
            
            $("#achieve_file").html('<br/>'
              + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_C_arr);">刪除</button>'
              + '<div>※點選上面要刪除的檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_C\', file_C_arr);">新增檔案++</button><br/><div id="selected-file_C"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>'
            );
            
            $("#other_file").html('<br/>'
              + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_D_arr);">刪除</button>'
              + '<div>※點選上面要刪除的檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_D\', file_D_arr);">新增檔案++</button><br/><div id="selected-file_D"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>'
            );
          }
          $.each(data,function(index,value){

            if(parseInt(value.File_year) == this_year)
            {
              this_year_file_upload_num += 1;
            }

            if(index == (data.length - 1))
            {
              recently_upload_date = trans_to_Tw(value.Update_date);
            }

              // console.log(value.File_type);
              switch (value.File_type) {
                  // 計劃書
                  case "file_A":
                      // var program_file_path = value.File_path.replace("../", "./");
                      // var program_file_name = value.File_path.split("/");
                      // $("[name='proposal_file']").attr("value", program_file_name[program_file_name.length - 1]);
                      // $("#proposal_file").html(
                      //     '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                      //     +program_file_name[program_file_name.length - 1]
                      //     +'</a>');
                      
                      //上傳多個檔案
                      var file_a_arr = value.File_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");
                      // console.log(file_a_arr)
                      
                      var file_a_htmlstr = "";
                      $.each(file_a_arr, function (i, val) {
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        var program_file_val = program_file_name[program_file_name.length - 1];
                        file_A_arr.push(val);
                        file_a_htmlstr += '<input class="program_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_a_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                          + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + program_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                          + program_file_val
                          + '</a><br/><br/>';
                      });
                      file_a_htmlstr += '<br/>'
                        + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_A_arr);">刪除</button>'
                        + '<div>※點選上面要刪除的檔案</div>'
                        + '<br/><hr style="border:3px dashed blue; height:1px">'
                        + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_A\', file_A_arr);">新增檔案++</button><br/><div id="selected-file_A"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';
                      $("#proposal_file").html(file_a_htmlstr);
                      break;

                  // 期中報告
                  case "file_B":
                      var program_file_path = value.File_path.replace("../", "./");
                      var program_file_name = value.File_path.split("/");
                      $("[name='interim_file"+value.File_year+"']").attr("value", program_file_name[program_file_name.length - 1]);
                      $("#interim_file").html(
                        '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                        +program_file_name[program_file_name.length - 1]
                        +'</a>');
                    break;
                      break;
                  // 成果報告
                  case "file_C":
                      // var program_file_path = value.File_path.replace("../", "./");
                      // var program_file_name = value.File_path.split("/");
                      // $("[name='achieve_file']").attr("value", program_file_name[program_file_name.length - 1]);
                      // $("#achieve_file").html(
                      //     '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                      //     +program_file_name[program_file_name.length - 1]
                      //     +'</a>');
                      //上傳多個檔案
                      var file_a_arr = value.File_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");
                      // console.log(file_a_arr)
                      window.file_C_arr = [];
                      var file_a_htmlstr = "";
                      $.each(file_a_arr, function (i, val) {
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        var program_file_val = program_file_name[program_file_name.length - 1];
                        file_C_arr.push(val);
                        file_a_htmlstr += '<input class="program_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_a_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                          + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + program_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                          + program_file_val
                          + '</a><br/><br/>';
                      });
                      file_a_htmlstr += '<br/>'
                        + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_C_arr);">刪除</button>'
                        + '<div>※點選上面要刪除的檔案</div>'
                        + '<br/><hr style="border:3px dashed blue; height:1px">'
                        + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_C\', file_C_arr);">新增檔案++</button><br/><div id="selected-file_C"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';
                      $("#achieve_file").html(file_a_htmlstr);
                      break;
                  // 其他檔案
                  case "file_D":
                      // var program_file_path = value.File_path.replace("../", "./");
                      // var program_file_name = value.File_path.split("/");
                      // $("[name='other_file']").attr("value", program_file_name[program_file_name.length - 1]);
                      // $("#other_file").html(
                      //     '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                      //     +program_file_name[program_file_name.length - 1]
                      //     +'</a>');
                      //上傳多個檔案
                      var file_a_arr = value.File_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");
                      // console.log(file_a_arr)
                      window.file_D_arr = [];
                      var file_a_htmlstr = "";
                      $.each(file_a_arr, function (i, val) {
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        var program_file_val = program_file_name[program_file_name.length - 1];
                        file_D_arr.push(val);
                        file_a_htmlstr += '<input class="program_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_a_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                          + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + program_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                          + program_file_val
                          + '</a><br/><br/>';
                      });
                      file_a_htmlstr += '<br/>'
                        + '<button class="program_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(file_D_arr);">刪除</button>'
                        + '<div>※點選上面要刪除的檔案</div>'
                        + '<br/><hr style="border:3px dashed blue; height:1px">'
                        + '<button class="program_question" style="color:blue;" type="button" onclick="selectFiles_insert(\'file_D\', file_D_arr);">新增檔案++</button><br/><div id="selected-file_D"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';
                      $("#other_file").html(file_a_htmlstr);
                      break;
              }

          });

          $(".this_year_file_upload_num").text(this_year_file_upload_num);
          $(".recently_upload_date").text(recently_upload_date);
      },
      error:function(e){
          notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
          console.log(e);
      }
  });


  $(".program_question").attr("disabled",true);
}

program_update = function() {
  
  var stau = false;

  if (check_updat_program_user_data() != "") {
      stau = false;
  } else {
      stau = true;
  }

  if (!stau) {
      swal({
        title: check_updat_program_user_data(),
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

      var year_split = $("#date").val().split(".")[0];

      // console.log(file_name)

      // var get_program_files = get_files_name_value();

      // var no_file_arr = [];

      $("input.program_question[type='file']").each(function(index, element) {
          var program_files = $(this).prop("files");
          // console.log(program_files.length)
          // var program_files_val = $(this).attr("value") || "";
          // var program_files_name = $(this).attr("name");

          if (program_files != undefined) {
            if (program_files.length != 0) {
              for (var i = 0; i < program_files.length; i++) {
                form_data.append("program_plan_files"+index, program_files[i]);
                // console.log(program_files[i])
              }
            } 
          //   else 
          //   {
          //     //載入量表『無重新上傳檔案』情況下按儲存，則加入no_file_arr供後端程式判斷
          //     no_file_arr.push({ name: program_files_name, value: program_files_val });
          //   }
          }
      });
      
      // 未選擇檔案的file陣列no_file_arr加入File_name變數供後端程式判斷
      // form_data.append("File_name", JSON.stringify(no_file_arr));

      var foundChick="";
      if($("#fund").val()=="其他"){
        foundChick = "其他-"+$("#funding").val();
      }
      else{
        foundChick = $("#fund").val();
      }

      form_data.append("Program_id", program_id);
      form_data.append("Date", $("#date").val());
      form_data.append("Plan_name", $("#plan_name").val());
      form_data.append("Plan_from", $("#plan_from").val());
      form_data.append("Fund", foundChick);
      form_data.append("Remark", $("#remark").val());
      form_data.append("File_year", year_split);

      // 預覽傳到後端的資料詳細內容
      // for (var pair of form_data.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }


      $.ajax({
          url: "database/update_program_plan_user_data_detail.php",
          type: "POST",
          //   data: {
          //     Program_id:program_id,
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
              title: "更新成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
              window.location.href =
                "program_plan_detail.php?"+
                "&program_id=" +
                program_id +
                "";
            });
          } else {
            swal({
              type: "error",
              title: "更新失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
            });
          }
        },
        error: function (e) {
          // console.log(e)
          swal({
              type: "error",
              title: "更新失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
          });
        },
      });
    }
}

function check_updat_program_user_data() {
  var date = $("#date").val();
  var plan_name = $("#plan_name").val();
  var plan_from = $("#plan_from").val();
  var fund = $("#fund").val();

  var errorstr = "";

  
  if (date == null) {
      errorstr += "未填寫日期!\r\n";
  }
  if(plan_name == null)
  {
      errorstr += "未填寫計畫名稱!\r\n";
  }
  if(plan_from == null)
  {
      errorstr += "未填寫計畫來源!\r\n";
  }
  if(fund == null)
  {
      errorstr += "未填寫經費來源!\r\n";
  }
  if (errorstr == "") {
      if (date.replace(/\s*/g, "") == "") {
        errorstr += "未填寫日期!\r\n";
      }
      if (plan_name.replace(/\s*/g, "") == "") {
        errorstr += "未填寫計畫名稱!\r\n";
      }
      if (plan_from.replace(/\s*/g, "") == "") {
        errorstr += "未填寫計畫來源!\r\n";
      }
      // if (fund.replace(/\s*/g, "") == "") {
      //   errorstr += "未填寫經費來源!\r\n";
      // }
    }
  
    return errorstr;
}

update_row = function(row_year) {
//去掉資料內前後端多餘的空白，file類型須排除，否則報錯
$("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
});
var form_data = new FormData();

$("input.program_forms_question"+row_year+"[type='file']").each(function(index, element) {
    var program_forms_files = $(this).prop("files");

    if (program_forms_files != undefined) {
      if (program_forms_files.length != 0) {
        for (var i = 0; i < program_forms_files.length; i++) {
          form_data.append("program_forms_files"+index, program_forms_files[i]);
          // console.log(program_forms_files[i])
        }
      } 
    }
});

var foundChick="";
if($("#fund").val()=="其他"){
  foundChick = "其他-"+$("#funding").val();
}
else{
  foundChick = $("#fund").val();
}

form_data.append("program_id", program_id);
form_data.append("Date", $("#date").val());
form_data.append("Plan_name", $("#plan_name").val());
form_data.append("Plan_from", $("#plan_from").val());
form_data.append("Fund", foundChick);
form_data.append("Remark", $("#remark").val());

$.ajax({
    url: "database/update_program_plan_forms_data_detail.php",
    type: "POST",
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
        title: "更新成功!",
        allowOutsideClick: false, //不可點背景關閉
      }).then(function () {
        window.location.href =
          "program_plan_detail.php?"+
          "&program_id=" +
          program_id +
          "";
      });
    } else {
      swal({
        type: "error",
        title: "更新失敗！請聯絡網站維護人員",
        allowOutsideClick: false, //不可點背景關閉
      });
    }
  },
  error: function (e) {
    // console.log(e)
    swal({
        type: "error",
        title: "更新失敗！請聯絡網站維護人員",
        allowOutsideClick: false, //不可點背景關閉
    });
  },
});
 
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


//表格鎖定控制region
function program_forms_edit(id){
  $('.program_forms_question'+id+'').attr('disabled', false);
  $('#edit_div'+id+'').attr('hidden', true);
  $('#save_div'+id+'').attr('hidden', false);

};
function program_forms_cancel(id){
  $('.program_forms_question'+id+'').attr('disabled', true);
  $('#edit_div'+id+'').attr('hidden', false);
  $('#save_div'+id+'').attr('hidden', true);
};
//endregion

//總表格鎖定控制region
function program_edit(){
  $('.program_question').attr('disabled', false);
  $('#edit_div').attr('hidden', true);
  $('#save_div').attr('hidden', false);
};
function program_cancel(){
  $('.program_question').attr('disabled', true);
  $('#edit_div').attr('hidden', false);
  $('#save_div').attr('hidden', true);
};
//endregion

// 刪除檔案內容 多檔案上傳 region
selectFiles_delete = function (file_a_input_val_arr) {


  if ($("[name='file_a_check']:checked").length > 0) {
    // console.log($("#val_arr" + $("[name='file_a_check']:checked").attr("value")))
    swal({
      title: "是否刪除該檔案？\n" + "檔名："+ $("#val_arr" + $("[name='file_a_check']:checked").attr("value")).text(),
      text: "確認刪除後將無法復原操作",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      showConfirmButton: true,
      showCancelButton: true
    }).then(function (result) {
      if (result) {
        var file_a_sql_id = $("[name='file_a_check']:checked").attr("forms_sql_id");
        var file_a_val = $("[name='file_a_check']:checked").attr("value");

        // console.log(file_a_input_val_arr)

        var r_file_a = file_a_input_val_arr.splice(parseInt(file_a_val), 1);
        console.log(program_id);
        console.log(file_a_input_val_arr);
        console.log(r_file_a);

        // $.ajax({
        //   url: "database/delete_resume_file_a.php",
        //   type: "POST",
        //   data: {
        //     Form_sql_id: file_a_sql_id,
        //     program_id:program_id,
        //     File_a_arr: file_a_input_val_arr,
        //     File_a_delete_index: file_a_val,
        //     Remove_file_a: r_file_a[0],
        //   },
        //   // dataType: "JSON",
        //   success: function (data) {
        //     // console.log(data);
        //     if (data == 1) {
        //       swal({
        //         type: "success",
        //         title: "刪除檔案成功!",
        //         allowOutsideClick: false, //不可點背景關閉
        //       }).then(function () {
        //         location.reload();
        //       });
        //     }

        //   },
        //   error: function (e) {
        //     // console.log(e)
        //     swal({
        //       type: "error",
        //       title: "刪除檔案失敗！請聯絡網站維護人員",
        //       allowOutsideClick: false, //不可點背景關閉
        //     });
        //   },
        // });

      }
    }, function (dismiss) {
      if (dismiss == 'cancel') {
        swal({
          title: '已取消',
          type: 'success',
        })
      }
    }).catch(swal.noop)
  }
  else {
    swal({
      type: 'warning',
      title: '請選取要刪除的檔案!',
      allowOutsideClick: false //不可點背景關閉
    })
  }


}
//endregion

window.selectedFiles = [];
window.selectedFiles_str = "";

selectFiles_insert = function (file, file_arr) {


  if(selectedFiles.length==0)
  {
    selected_files(file, file_arr);
  }
  else
  {
      swal({
        title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
        text: "目前檔案清單："+selectedFiles_str,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
      }).then(function (result) {
        if (result) {
          selected_files(file, file_arr);
        }
      }, function (dismiss) {
        if (dismiss == 'cancel') {
          swal({
            title: '已取消',
            type: 'success',
          })
        }
      }).catch(swal.noop)
  }
    
}


selected_files = function(file, file_arr) {
  selectedFiles = [];
  selectedFiles_str = "";
  var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

  $("#"+file).html(html);

  $.FileDialog({
    "accept": "*",
    "drag_message": "將檔案拖曳至此處新增",
    "title": "載入檔案",
  }).on("files.bs.filedialog", function (event) {
    for (var a = 0; a < event.files.length; a++) {
      selectedFiles.push(event.files[a]);

      console.log(event.files[a])

      if(a == 0)
      {
        selectedFiles_str += event.files[a].name;
      }
      else
      {
        selectedFiles_str += "," + event.files[a].name;
      }

      html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';
    }
    $("#"+file).html(html);
    console.log(selectedFiles_str);
  });
}

// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
  $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  var activeTab = localStorage.getItem('activeTab');
  if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
  }
}

$('#menu_tab_nav li a, .breadcrumb li, .brand-img').on('click',function() {
  localStorage.removeItem('activeTab');
});

const selectElement = document.querySelector("#fund");

selectElement.addEventListener("change", (event) => {
  var result = document.querySelector("#funding");
  // console.log(event.target.value);
  if(event.target.value == "其他"){
    result.type = "text";
  }
  else{
    result.type = "hidden";
  }
});