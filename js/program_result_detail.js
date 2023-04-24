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
  
  //將日期轉為民國年格式111年03月07日 region
  trans_to_Tw = function (endate) {
  
  var strDate = endate.split(" ");
  var strAry = strDate[0].split("-");
  
  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }
  
  return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
  };
  //endregion
  
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
  
  
    load_files();
  
    load_program_datas();
  
  });
  
  
  function load_files() {
    $.ajax({
        url: "database/find_program_result_forms_data_detail.php",
        data:{
            Program_id:program_id,
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
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
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
  
  function load_program_datas() {
    $.ajax({
        url: "database/find_program_result_data_detail.php",
        data:{
            Program_id:program_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data)
  
            $.each(data,function(index,value){
                $("#year").text(value.Year);
                $("#date").val(value.Date);
                $("#plan_name").val(value.Plan_name);
            });
            
            
  
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
  
    $.ajax({
        url: "database/find_program_result_forms_data_detail.php",
        data:{
            Program_id:program_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            console.log(data.length)
  
            var this_year_file_upload_num = 0;
            var recently_upload_date = "---年--月--日";
  
            $.each(data,function(index,value){
  
              if(parseInt(value.File_year) == this_year)
              {
                this_year_file_upload_num += 1;
              }
  
              if(index == (data.length - 1))
              {
                recently_upload_date = trans_to_Tw(value.Update_date);
              }
  
  
                switch (value.File_type) {
                    // 計劃書
                    case "file_A":
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        $("[name='proposal_file']").attr("value", program_file_name[program_file_name.length - 1]);
                        $("#proposal_file").html(
                            '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +program_file_name[program_file_name.length - 1]
                            +'</a>');
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
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        $("[name='achieve_file']").attr("value", program_file_name[program_file_name.length - 1]);
                        $("#achieve_file").html(
                            '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +program_file_name[program_file_name.length - 1]
                            +'</a>');
                        break;
                    // 其他檔案
                    case "file_D":
                        var program_file_path = value.File_path.replace("../", "./");
                        var program_file_name = value.File_path.split("/");
                        $("[name='other_file']").attr("value", program_file_name[program_file_name.length - 1]);
                        $("#other_file").html(
                            '<a href="'+program_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
                            +program_file_name[program_file_name.length - 1]
                            +'</a>');
                        break;
                }
  
            });
  
            $(".this_year_file_upload_num").text(this_year_file_upload_num);
            $(".recently_upload_date").text(recently_upload_date);
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
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
  
        // var entry_date_year_split = $("#entry_date").val().split("年");
  
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
                  form_data.append("program_files"+index, program_files[i]);
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
  
        form_data.append("Year", $("#year").val());
        form_data.append("Date", $("#date").val());
        form_data.append("Plan_name", $("#plan_name").val());
  
        // 預覽傳到後端的資料詳細內容
        // for (var pair of form_data.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
  
  
        $.ajax({
            url: "database/update_program_result_data_detail.php",
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
                  "program_detail.php?"+
                  "&id=" +
                  program_id +
                  "";
              });
            } else {
              swal({
                type: "error",
                title: "更新失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
              });
            }
          },
          error: function (e) {
            console.log(e)
            swal({
                type: "error",
                title: "更新失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
            });
          },
        });
      }
  }
  
  function check_updat_program_user_data() {
    var year = $("#year").val();
    var date = $("#date").val();
    var plan_name = $("#plan_name").val();
  
    var errorstr = "";
  
    
    if (year == null) {
        errorstr += "未填寫年度!\r\n";
      }
    if (date == null) {
        errorstr += "未填寫日期!\r\n";
    }
    if(plan_name == null)
    {
        errorstr += "未填寫計畫名稱!\r\n";
    }
    if (errorstr == "") {
        if (year.replace(/\s*/g, "") == "") {
          errorstr += "未填寫年度!\r\n";
        }
        if (date.replace(/\s*/g, "") == "") {
          errorstr += "未填寫日期!\r\n";
        }
        if (plan_name.replace(/\s*/g, "") == "") {
          errorstr += "未填寫計畫名稱!\r\n";
        }
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
  
  form_data.append("Program_id", program_id);
  form_data.append("Year", $("#year").val());
  form_data.append("Date", $("#date").val());
  form_data.append("Plan_name", $("#plan_name").val());
  
  $.ajax({
      url: "database/update_program_result_forms_data_detail.php",
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
            "program_result_detail.php?"+
            "&id=" +
            program_id +
            "";
        });
      } else {
        swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      console.log(e)
      swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
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
  
  
  //預約表格鎖定控制region
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
  
  //篩檢總表格鎖定控制region
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