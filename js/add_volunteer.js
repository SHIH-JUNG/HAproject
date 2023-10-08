const notyf = new Notyf();

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

// 存放檔案名稱
window.file_name = [];


$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  // 載入全部user至下拉式選單
  append_user();

  // 生成服務時間的日期選擇器
  generate_serv_time_2();
});


//生成服務時間的選項 region
generate_serv_time_2 = function() {

  var gen_str = "";

  gen_str = '<select id="start_time_h">'+
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
  '<select id="start_time_m">'+
    '<option>00</option>'+
    '<option>30</option>'+                                         
  '</select>'+
  ' '+
  '<label>至</label>'+
  ' '+
  '<select id="end_time_h">'+
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
  '<select id="end_time_m">'+
    '<option>00</option>'+
    '<option>30</option>'+                                         
  '</select>';

  $("#serv_time_area").append(gen_str);
}
//endregion

//新增志工紀錄region
$("#vo_add_new").on("click", function () {
  var stau = false;
  
  if (check_add_volunteer_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) {
    swal({
      title: check_add_volunteer_data(),
      type: "error",
    });
  } else {
    submit_form();
  }
});
//endregion


// 處理送出的值 region
function submit_form() {
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
          if(index==0)
          {
            form_data.append("volunteer_files"+index+"[]", volunteer_files[i]);
          }
          else
          {
            form_data.append("volunteer_files"+index, volunteer_files[i]);
          }
          // console.log(volunteer_files[i])
        }
      } else {
        //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
        form_data.append("File_name", JSON.stringify(get_files));
      }
    }
  });


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

  form_data.append("Social_worker",$("#social_worker").val());
  form_data.append("Director",$("#director").val());
  form_data.append("Supervise",$("#supervise").val());

  form_data.append("title", '志工資料簽核：' + $("#year").val() + "年度 志工姓名" + $("#name").val());
  // form_data.append("signer", $("#social_worker").val() + "、" + $("#director").val() + "、" + $("#supervise").val());
  form_data.append("signer", $("#director").val() + "、" + $("#supervise").val());
  form_data.append("rec_date_time", timenow +" 00:00");


  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_volunteer.php",
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
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "volunteer.php";
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗！請聯絡網站維護人員",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function (e) {
          // console.log(e)
          swal({
              type: "error",
              title: "新增失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
          });
      },
    });
}
// endregion

//檢查志工紀錄的必填欄位region
function check_add_volunteer_data() {
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
    errorstr += "未填寫志工督導!\r\n";
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
      errorstr += "未填寫志工督導!\r\n";
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

