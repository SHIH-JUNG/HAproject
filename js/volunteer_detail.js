const notyf = new Notyf();

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
      yearRange: "-15:+5",
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

vo_id = getUrlVars()["vo_id"];
// re_year = getUrlVars()["year"];

director_msg_arr = [];
supervise_msg_arr = [];
// social_worker_msg_arr = [];

//顯示志工資料 region
$(document).ready(function () {

  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    console.log(this_id)
    datepicker_create(this_id);
  });
  //endregion

  // 載入全部user至下拉式選單
  append_user();

  // 生成服務時間的日期選擇器
  generate_serv_time_2();

  $.ajax({
    url: "database/find_volunteer_data_detail.php",
    data: {
      vo_id: vo_id,
      // year: re_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#vo_id").html(value.vo_id);

        $("#year").val(value.Year);
        $("#name").val(value.Name);
        $("#birth").val(value.Birth);
        $("#gender").val(value.Gender);

        $("#home_phone").val(value.Home_phone);
        $("#cellphone").val(value.Cellphone);


        $("#e_mail").val(value.E_mail);
        $("#training_detail").val(value.Training_detail);
        $("#brochure_num").val(value.Brochure_num);

        $("#serv_time_1").val(value.Serv_time_1);

        $("#start_time_h").val(value.Serv_time_2.split(":")[0]);
        $("#start_time_m").val(value.Serv_time_2.split(":")[1].split("至")[0]);
        $("#end_time_h").val(value.Serv_time_2.split("至")[1].split(":")[0]);
        $("#end_time_m").val(value.Serv_time_2.split(":")[2]);


        $("#serv_award").val(value.Serv_award);
        $("#remark").val(value.Remark);
        $("#expertise").val(value.Expertise);
        $("#vgroup").val(value.Vgroup);

        $("[name='serv_status'][value='"+value.Serv_status+"']").attr('checked',true);
        $("#time_all").val(value.Time_all);

        $("#social_worker").val(value.Social_worker);
        $("#director").val(value.Director);
        $("#supervise").val(value.Supervise);

        // $("#create_date").val(value.Create_date != "0000-00-00 00:00:00" ? value.Create_date : "");
        // $("#create_name").val(value.Create_name);
        // $("#update_date").val(value.Update_date != "0000-00-00 00:00:00" ? value.Update_date : "");
        // $("#update_name").val(value.Update_name);

        var director_sign_file_val = value.Director_signature.replace("../signature/","");

        $("#director_signature_simg").text("點擊顯示簽名圖片");
        
        if(director_sign_file_val=="")
        {
          $("#director_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#director_signature_simg").attr(
            "href",
            "./signature/" + director_sign_file_val
          );
        }
        

        director_msg_arr.push(value.Director_sign_msg);
        director_msg_arr.push(value.Director_sign_time);

        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );

        $("#supervise_signature_simg").text("點擊顯示簽名圖片");
        
        if(supervise_sign_file_val=="")
        {
          $("#supervise_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#supervise_signature_simg").attr(
            "href",
            "./signature/" + supervise_sign_file_val
          );
        }
        

        supervise_msg_arr.push(value.Supervise_sign_msg);
        supervise_msg_arr.push(value.Supervise_sign_time);
        

        if(value.V_files!="")
        {
          var file_a_arr = value.V_files.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

          // console.log(file_a_arr)
  
          window.file_a_input_val_arr = [];
  
          var file_a_htmlstr = "";
  
          $.each(file_a_arr, function (i, val) {
  
            var volunteer_file_path = val.replace("../", "./");
            var volunteer_file_name = val.split("/");
  
            var volunteer_file_val = volunteer_file_name[volunteer_file_name.length - 1];
  
            file_a_input_val_arr.push(val);
  
            file_a_htmlstr += '<input class="vo_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_a_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
              + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + volunteer_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + volunteer_file_val
              + '</a><br/><br/>';
          });
  
          file_a_htmlstr += '<br/>'
            + '<button class="vo_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete();">刪除</button>'
            + '<div>※點選上面要刪除的檔案</div>'
            + '<br/><hr style="border:3px dashed blue; height:1px">'
            + '<button class="vo_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';
  
          $("#volunteer_file").html(file_a_htmlstr);
        }


        if(!$("#volunteer_file").html())
        {
          $("#volunteer_file").html(
                '<div>※目前無檔案</div>'
                + '<br/><hr style="border:3px dashed blue; height:1px">'
                + '<button class="vo_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>'
          );
        }
      });
    },
    error: function (e) {
      console.log(e);
      notyf.alert('伺服器錯誤,無法載入');
    },
  });

  $(".vo_question").attr("disabled", true);

  if(user_name == $("#supervise").val() || user_name == $("#director").val())
  {
    $("#allow_status").attr("disabled", false);
    $("#submit_area").show();
  }
  else
  {
    $("#allow_status").attr("disabled", true);
    $("#submit_area").hide();
  }

  //手動新增按鈕點擊跳出模態框
  $('#myModal').on('shown.bs.modal', function () {
    $('#add_time_all_btn').trigger('focus');
  });

  //jsignature插件初始化 region
  jsignature_initialization();
  //endregion


  //隱藏jsignature畫布區域 region
  $("#signature_area").hide();
  //endregion

  // 顯示時數紀錄region
  $.ajax({
    url: "database/find_volunteer_hours_record.php",
    data: {
      vo_id: vo_id,
      Year: $("#year").val(),
      Name: $("#name").val(),
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      var cssString = "";
      // console.log(data);

      $.each(data, function (index, value) {
        cssString +=
        '<tr id="' +
        value.Id +
        '">' +
        '<td style="text-align:center">' +
        value.Record_date +
        "</td>" +
        '<td style="text-align:center">' +
        value.Record_time +
        "</td>" +
        '<td style="text-align:center">' +
        value.Add_hours +
        "</td>" +
        '<td style="text-align:center">' +
        value.Remark +
        "</td>" +
        '<td style="text-align:center">' +
        value.Create_name +
        "</td>" +
        '<td style="text-align:center">' +
        value.Create_date +
        "</td>" +
        "</tr>";

        //印出表格
        $("#call_record_view").html(cssString);
      });
    },
    error: function (e) {
      console.log(e);
      notyf.alert('伺服器錯誤,無法載入');
    },
  });

});
// endregion

//生成服務時間的選項 region
generate_serv_time_2 = function() {

  var gen_str = "";

  gen_str = '<select id="start_time_h" class="vo_question">'+
    '<option>00</option>'+
    '<option>01</option>'+
    '<option>02</option>'+
    '<option>03</option>'+
    '<option>04</option>'+
    '<option>05</option>'+
    '<option>06</option>'+
    '<option>07</option>'+
    '<option>08</option>'+
    '<option>09</option>'+
    '<option>10</option>'+
    '<option>11</option>'+
    '<option>12</option>'+
    '<option>13</option>'+
    '<option>14</option>'+
    '<option>15</option>'+
    '<option>16</option>'+
    '<option>17</option>'+
    '<option>18</option>'+
    '<option>19</option>'+
    '<option>20</option>'+
    '<option>21</option>'+
    '<option>22</option>'+
    '<option>23</option>'+
  '</select>'+
  '<label>：</label>'+
  '<select id="start_time_m" class="vo_question">'+
    '<option>00</option>'+
    '<option>30</option>'+                                         
  '</select>'+
  ' '+
  '<label>至</label>'+
  ' '+
  '<select id="end_time_h" class="vo_question">'+
    '<option>00</option>'+
    '<option>01</option>'+
    '<option>02</option>'+
    '<option>03</option>'+
    '<option>04</option>'+
    '<option>05</option>'+
    '<option>06</option>'+
    '<option>07</option>'+
    '<option>08</option>'+
    '<option>09</option>'+
    '<option>10</option>'+
    '<option>11</option>'+
    '<option>12</option>'+
    '<option>13</option>'+
    '<option>14</option>'+
    '<option>15</option>'+
    '<option>16</option>'+
    '<option>17</option>'+
    '<option>18</option>'+
    '<option>19</option>'+
    '<option>20</option>'+
    '<option>21</option>'+
    '<option>22</option>'+
    '<option>23</option>'+
  '</select>'+
  '<label>：</label>'+
  '<select id="end_time_m" class="vo_question">'+
    '<option>00</option>'+
    '<option>30</option>'+                                         
  '</select>';

  $("#serv_time_area").append(gen_str);
}
//endregion

sign_msg_model = function (sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $("#myModal2").on("shown.bs.modal", function () {
    $("#" + sign_type_name).trigger("focus");
  });

  switch (sign_type_name) {
    case "director":
      var type_name = "主管";
      $(".sign_msg").text(director_msg_arr[0]);
      $(".sign_msg_time").val(director_msg_arr[1]);
      break;

    case "supervise":
      var type_name = "執行長";
      $(".sign_msg").text(supervise_msg_arr[0]);
      $(".sign_msg_time").val(supervise_msg_arr[1]);
      break;

    // case "social_worker":
    //   var type_name = "職務代理人";
    //   $(".sign_msg").text(social_worker_msg_arr[0]);
    //   $(".sign_msg_time").val(social_worker_msg_arr[1]);
    //   break;
  }

  $(".sign_msg_td_name").text(type_name + "簽名留言內容");
};

//jsignature插件初始化 region
function jsignature_initialization() {
  var $sigdiv = $("#signature_div");
  $sigdiv.jSignature({ UndoButton: true }); // 初始化jSignature插件-属性用","隔开
  // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
  // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
  // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
  // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
  // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

  // 同步更新畫布中的簽名圖片和簽名檔案格式 region
  $("#signature_div").bind("change", function (e) {
    var datapair = $sigdiv.jSignature("getData", "image");
    $("#signature_images").attr(
      "src",
      "data:" + datapair[0] + "," + datapair[1]
    );
  });
  //endregion

  //重設繪製簽名 region
  $("#signature_reset").click(function () {
    $("#signature_div").jSignature("reset"); //重置画布，可以进行重新作画
    $("#signature_images").attr("src", "");
  });
  //endregion
}
//endregion


// 儲存該簽名 region
signature_submit = function(this_btn) {

  // 獲取簽名類型(督導、組長、主管)
  var sign_type = $(this_btn).attr("board_name");

  // console.log(sign_type);

  var ajax_url = "database/update_volunteer_data_detail_signature.php";

  var src_data = $("#signature_images").attr("src");
  // console.log(src);

  // 判斷有無簽名圖片，若有送出簽名並儲存檔案
  if (src_data) {
    // console.log("submit_sign");
    $.ajax({
      type: "post",
      url: ajax_url,
      data: {
        vo_id: vo_id,
        src_data: src_data,
        sign_msg: $("#signature_msg").val(),
        sign_type: sign_type,
        sign_name:$("#"+sign_type+"").val(),
        year_num:$("#year").val(),
      },
      async: false,
      success: function (data) {
        console.log(data);
        if (data == 1) 
        {
          swal({
          title: "送出簽名成功！",
          type: "success",
          }).then(function () {
          location.reload();
          });
        }
        else if(data.includes("noallowsign"))
        {
          swal({
              type: 'error',
              title: '您無權限簽核此欄位',
              text: '當前登入的帳號名稱與簽核欄位名稱不符',
              allowOutsideClick: false //不可點背景關閉
          });
        }
        else 
        {
          swal({
            title: "生成簽名圖片失敗！請聯絡負責單位",
            type: "error",
          });
      }
      },
    });
  } else {
    alert("簽名圖片檔不能為空！");
    return false;
  }
}
//endregion

//按簽名 按紐，顯示簽名畫布 隱藏其他詳細資料 region
signature_btn_click = function(sign_board_name) {

  var type_name = "";

  switch (sign_board_name) {
    case "director":
      type_name = "主管";
      break;

    case "supervise":
      type_name = "執行長";
      break;

    case "social_worker":
      type_name = "社工員";
      
      break;
  }

  $("#signature_h4").text(type_name + "簽名");
  $("#signature_title_td").text(type_name);
  $("#signature_msg_td").text(type_name);
  $("#sign_submit_btn").attr("board_name", sign_board_name);

  $("#signature_area").show();
  $("#collapseTwo").hide();
}
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {
  $("#signature_area").hide();
  $("#collapseTwo").show();
  // $('html, body').scrollTop(0);
};
//endregion

//更新發文個案表基本資料region
$("#vo_update").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];

  var stau = false;

  if (check_updat_volunteer_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_volunteer_data(),
      type: "error",
    });
  } else {
    submit_form();
  }
});


submit_form = function() {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
    }
    });

    //Time Now
    var timenow = moment().format('YYYY-MM-DD');

    var form_data = new FormData();

    var get_files = get_files_name_value();

    $("input[type='file']").each(function(index, element) {
      var volunteer_files = $(this).prop("files");
      
      if (volunteer_files != undefined) {
        if (volunteer_files.length != 0) {
          for (var i = 0; i < volunteer_files.length; i++) {
            form_data.append("volunteer_files"+index, volunteer_files[i]);
            // console.log(volunteer_files[i])
          }
        } else {
          //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
          form_data.append("File_name", JSON.stringify(get_files));
        }
      }
    });

    console.log(selectedFiles)

    for (var a = 0; a < selectedFiles.length; a++) {
      form_data.append("volunteer_files0[]", selectedFiles[a]);
    }

    form_data.append("Vo_id", vo_id);

    form_data.append("Year", $("#year").val());
    form_data.append("Name", $("#name").val());
    form_data.append("Birth", $("#birth").val());
    form_data.append("Gender", $("#gender").val());
    form_data.append("Home_phone", $("#home_phone").val());
    form_data.append("Cellphone", $("#cellphone").val());
    form_data.append("Email", $("#e_mail").val());

    form_data.append("Training_detail", $("#training_detail").val());
    form_data.append("Brochure_num", $("#brochure_num").val());

    form_data.append("Serv_time_1", $("#serv_time_1").val());
    form_data.append("Serv_time_2", $("#start_time_h").val() + ":" + $("#start_time_m").val() + "至" + $("#end_time_h").val() + ":" + $("#end_time_m").val());

    form_data.append("Remark", $("#remark").val());

    form_data.append("Serv_award", $("#serv_award").val());
    form_data.append("Expertise", $("#expertise").val());
    form_data.append("Vgroup", $("#vgroup").val());

    form_data.append("Serv_status", $("[name='serv_status']:checked").val());
    form_data.append("Time_all", $("#time_all").val());


    form_data.append("Social_worker",$("#social_worker").val());
    form_data.append("Director",$("#director").val());
    form_data.append("Supervise",$("#supervise").val());


    // 預覽傳到後端的資料詳細內容
    // for (var pair of form_data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }


    $.ajax({
        url: "database/update_volunteer_data_detail.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function (data) {
          console.log(data);
          if (data == 1) {
            swal({
              type: "success",
              title: "新增成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
              window.location.href =
                "volunteer_detail.php?vo_id=" + vo_id;
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

//檢查更新志工資料必填欄位 region
function check_updat_volunteer_data() {

  var year = $("#year").val();
  var name = $("#name").val();

  var serv_time_1 = $("#serv_time_1").val();

  var social_worker = $("#social_worker").val();
  var director = $("#director").val();
  var supervise = $("#supervise").val();


  var errorstr = "";

  if (year == null) {
    errorstr += "未填寫年度!\r\n";
  }
  if (name == null) {
    errorstr += "未填寫志工姓名!\r\n";
  }
  if (serv_time_1 == null) {
    errorstr += "服務時間未填寫完整!\r\n";
  }
  if (social_worker == null) {
    errorstr += "未填寫社工員!\r\n";
  }
  if (director == null) {
    errorstr += "未填寫主管!\r\n";
  }
  if (supervise == null) {
    errorstr += "未填寫執行長!\r\n";
  }

  if (errorstr == "") {
    
    if (year.replace(/\s*/g, "") == "") {
      errorstr += "未填寫年度!\r\n";
    }
    if (name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫志工姓名!\r\n";
    }
    if (serv_time_1.replace(/\s*/g, "") == "") {
      errorstr += "服務時間未填寫完整!\r\n";
    }
    if (social_worker.replace(/\s*/g, "") == "") {
      errorstr += "未填寫社工員!\r\n";
    }
    if (director.replace(/\s*/g, "") == "") {
      errorstr += "未填寫主管!\r\n";
    }
    if (supervise.replace(/\s*/g, "") == "") {
      errorstr += "未填寫執行長!\r\n";
    }
  }

  return errorstr;
}
//endregion

add_hours = function() {

  var stau = false;

  if (check_volunteer_hours_record_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) 
  {
    swal({
      title: check_volunteer_hours_record_data(),
      type: "error",
    });
  }
  else
  {
    $.ajax({
      url: "database/add_volunteer_hours_record.php",
      data: {
        vo_id: vo_id,
        Year: $("#year").val(),
        Name: $("#name").val(),
        Add_hours:$("#add_hours").val(),
        Record_date:$("#serv_record_date").val(),
        Record_time:$("#serv_record_time").val(),
        Remark:$("#add_hours_remark").val(),
      },
      type: "POST",
      dataType: "JSON",
      success: function (data) {
        if (data == 1) {
          swal({
            title: "新增時數成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "新增時數失敗！請聯絡負責單位",
            type: "error",
          });
        }
      },
      error: function (e) {
        swal({
          title: "新增時數失敗！請聯絡負責單位",
          type: "error",
        });
        console.log(e);
      },
    });
  }
}

//檢查新增服務時數必填欄位 region
function check_volunteer_hours_record_data() {

  var serv_record_date = $("#serv_record_date").val();
  var serv_record_time = $("#serv_record_time").val();
  var add_hours = $("#add_hours").val();




  var errorstr = "";

  if (serv_record_date == null) {
    errorstr += "未填寫服務日期!\r\n";
  }
  if (serv_record_time == null) {
    errorstr += "未填寫服務時數!\r\n";
  }
  if (add_hours == null) {
    errorstr += "未填寫登錄時數!\r\n";
  }

  if (errorstr == "") {
    if (serv_record_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫服務日期!\r\n";
    }
    if (serv_record_time.replace(/\s*/g, "") == "") {
      errorstr += "未填寫服務時數!\r\n";
    }
    if (add_hours.replace(/\s*/g, "") == "") {
      errorstr += "未填寫登錄時數!\r\n";
    }
  }

  return errorstr;
}
//endregion


// 顯示檔名 region
$("input[type='file']").change(function (event) {

   
  // console.log(event.target.files)
  // console.log(event.target.files.length)

  //獲取 file name名稱
  var name = $(this).attr("name");

  var file_names_str = "";

  $.each(event.target.files, function(key,val) {

    file_names_str += "檔案" + (key + 1) + "名稱：" + val.name + "<br/>";

  });

  //預覽上傳檔名
  $("#" + name).html(file_names_str);

});
// endregion

// 獲取檔案的檔名、值 region
get_files_name_value = function() {

  file_name = [];
  $("input[type='file']").each(function() {

    

    // //獲取 檔名.檔案格式
    // var filePath = $(this).val().split("\\");

    //獲取 file name名稱
    var name = $(this).attr("name");
    
    // file_name.push({ name: name, value: filePath[filePath.length - 1] });

    if($(this).context.files.length == 1)
    {
      file_name.push({ name: name, value: $(this).context.files[0].name });
    }
    else
    {
      var files_arr = [];

      $.each($(this).context.files, function(key,val) {

        files_arr.push(val.name);
    
      });

      file_name.push({ name: name, value:files_arr});
    }

    
 });

//  console.log(file_name)

 return file_name;
}
// endregion


// 刪除履歷表檔案內容 多檔案上傳 region
selectFiles_delete = function () {


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

        // console.log(file_a_input_val_arr)
        // console.log(r_file_a)
        // console.log(r_file_a[0])

        $.ajax({
          url: "database/delete_volunteer_file.php",
          type: "POST",
          data: {
            Form_sql_id: file_a_sql_id,
            Volunteer_id: vo_id,
            File_a_arr: file_a_input_val_arr,
            File_a_delete_index: file_a_val,
            Remove_file_a: r_file_a[0],
          },
          // dataType: "JSON",
          success: function (data) {
            console.log(data);
            if (data == 1) {
              swal({
                type: "success",
                title: "刪除檔案成功!",
                allowOutsideClick: false, //不可點背景關閉
              }).then(function () {
                location.reload();
              });
            }

          },
          error: function (e) {
            console.log(e)
            swal({
              type: "error",
              title: "刪除檔案失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          },
        });

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

selectFiles_insert = function () {


  if(selectedFiles.length==0)
  {
    selected_files();
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
          selected_files();
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


selected_files = function() {
  selectedFiles = [];
  selectedFiles_str = "";
  var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

  $("#selected-files").html(html);

  $.FileDialog({
    "accept": "*",
    "drag_message": "將檔案拖曳至此處新增",
    "title": "載入檔案",
  }).on("files.bs.filedialog", function (event) {
    for (var a = 0; a < event.files.length; a++) {
      selectedFiles.push(event.files[a]);

      // console.log(event.files[a])

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
    $("#selected-files").html(html);
  });
}

//呼叫user方法region
function append_user(){             
  $.ajax({
      type:'POST',
      url:'database/find_check_user.php',
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log('test',data)
          for (var index in data.Id) {
            $("#social_worker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#director").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
  });
}
//endregion

//取消重整region
function cancel() {
  location.reload();
}
//endregion

//結案個案總表格鎖定控制region
function vo_edit() {
  $(".vo_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function vo_cancel() {
  $(".vo_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];
  //    console.log(id);
  location.href = "preview_word.php?vo_id=" + vo_id + "";
});

$("#preview_word2").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];
  //    console.log(id);
  location.href = "preview_word2.php?vo_id=" + vo_id + "";
});
//endregion
