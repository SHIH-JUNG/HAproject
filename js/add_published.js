//datepicker創建 region
datepicker_create = function (selector_id) {
  if (selector_id == "birth") {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      yearRange: "-109:+0",
      onClose: function (dateText) {
        // console.log($("#" + selector_id).val());
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
      // minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1),
      // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
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

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
  var strAry = endate.split(".");

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

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  append_user();
});

function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  var form_data = new FormData();
  var published_date_year_split = $("#published_date").val().split(".");
  var year = published_date_year_split[0];

  $("input[type='file']").each(function(index, element) {
      var published_files = $(this).prop("files");

      if (published_files != undefined) {
        if (published_files.length != 0) {
          for (var i = 0; i < published_files.length; i++) {
            form_data.append("published_files"+index, published_files[i]);
            // console.log(published_files[i])
          }
        }
      }
  });

  form_data.append("Year", year);
  form_data.append("Title_name", $("#title_name").val());
  form_data.append("Published_date", $("#published_date").val());
  form_data.append("Subject",$("#subject").val());
  form_data.append("Num_publish",$("#num_publish").val());


  form_data.append("Sign_published_date", trans_to_EN($("#published_date").val()));
  form_data.append("Leader",$("#leader").val());
  form_data.append("Director",$("#director").val());
  // form_data.append("Executive",$("#executive").val());
  // form_data.append("Supervise",$("#supervise").val());
  // form_data.append("Distribution",$("#distribution").val());

  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_published.php",
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
              "published.php?year=" + year;
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
          // console.log(e);
          swal({
              type: "error",
              title: "新增失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
          });
      },
    });
}


// 新增發文region
$("#pu_add_new").on("click", function () {

  //判斷該量表是否含有 input[type="file"] 類型資料
  if ($('input[type="file"]').length != 0) {
    var exist_arr = check_file_exist();

    // console.log(exist_arr);
    //如果上傳的檔案檔名重複則提示使用者
    if (exist_arr.length != 0) {
      // console.log(exist_arr[0][1]);
      swal({
        title: exist_arr[0][1],
        text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認送出",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true,
      })
        .then(
          function (result) {
            if (result) {
              submit_form();
            }
          },
          function (dismiss) {
            if (dismiss == "cancel") {
              swal({
                title: "已取消，建議請更改檔名",
                type: "success",
              });
            }
          }
        )
        .catch(swal.noop);
    } else {
      var stau = false;

      if (check_null_data() != "以下為必填欄位，不能為空值!\r\n") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_null_data(),
          type: "error",
        });
      } else {
        submit_form();
      }
    }
  } else {
    return false;
  }
});
//endregion

//檢查發文紀錄的必填欄位region
function check_add_published_data() {
  var title_name = $("#title_name").val();
  var published_date = $("#published_date").val();
  var num_publish = $("#num_publish").val();
  var subject = $("#subject").val();

  var errorstr = "";

  if (title_name == null) {
    errorstr += "未填寫發文記錄標題!\r\n";
  }
  if (published_date == null) {
    errorstr += "未填寫發文日期!\r\n";
  }
  if (num_publish == null) {
    errorstr += "未填寫發文字號!\r\n";
  }
  if (subject == null) {
    errorstr += "未填寫主旨!\r\n";
  }

  if (errorstr == "") {
    if (title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫發文記錄標題!\r\n";
    }
    if (published_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫發文日期!\r\n";
    }
    if (num_publish.replace(/\s*/g, "") == "") {
      errorstr += "未填寫發文字號!\r\n";
    }
    if (subject.replace(/\s*/g, "") == "") {
      errorstr += "未填寫主旨!\r\n";
    }
  }

  return errorstr;
}
//endregion

//檢查必填欄位 region
function check_null_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    // console.log($(check_element));
    // console.log($(check_element).val());

    var check_element_tagname = $(check_element).prop("tagName");
    var check_element_type = $(check_element).attr("type");

    if(check_element_tagname == "INPUT" && check_element_type=="file")
    {
      var file_len = $(check_element).prop("files").length;

      if(file_len == 0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else if(check_element_tagname == "INPUT" && check_element_type=="radio")
    {
      var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");

      if($('[name="'+check_element_children_name+'"]:checked').length==0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else
    {
      if($(check_element).val() == null || $(check_element).val().replace(/\s*/g, "") == "")
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
  });

  return errorstr;
}
//endregion

//檢查檔名是否重複，提示使用者region
function check_file_exist() {
  var check_file_value = $('input[type="file"]').prop("files");
  var warning_str = "";
  var file_arr = [];
  var file_n = "";
  var exist_info = [];

  for (var i = 0; i < check_file_value.length; i++) {
    file_arr.push(check_file_value[i]["name"]);
  }
  $.each(file_arr, function (index, value) {
    $.ajax({
      url: "database/published_file_check.php",
      data: {
        file_name: value,
      },
      type: "POST",
      dataType: "JSON",
      async: false,
      success: function (data) {
        //  console.log(data)
        if (data != "") {
          $.each(data, function (index, value) {
            file_n = data[index].file_path.replace(
              "../published/",
              ""
            );

            warning_str += "已有重複檔案名稱：\n" + file_n;

            exist_info.push([file_n, warning_str]);
          });
        } else {
          warning_str = "";
        }
      },
      error: function (e) {
        // console.log(e);
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
      },
    });
  });
  return exist_info;
}
//endregion

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
            $("#leader").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#director").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            // $("#executive").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            // $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            // $("#distribution").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
  });
}
//endregion