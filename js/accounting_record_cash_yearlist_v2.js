const notyf = new Notyf();

window.year_list = [];



$(document).ready(function () {
  $.ajax({
    // url: "database/find_ar_cash_yearlist.php",
    url: "database/find_ar_cash_yearlist_v2.php",
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      var cssstring = "";
      //            console.log(data)
  
      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>民國" +
          value.Year +
          "年度</td>" +
          '<td id="'+value.Year+'_last_pb"></td>' +
          '<td id="'+value.Year+'_year_i"></td>' +
          '<td id="'+value.Year+'_year_c"></td>' +
          '<td id="'+value.Year+'_this_pb"></td>' +
          '<td><a href="accounting_record_cash_v2.php?year=' +
          value.Year +
          '">點擊進入</a></td>' +
          "</tr>";
  
          year_list.push(value.Year);
      });
  
  
  
      $("#ar_cash_yearlist_all").append(cssstring);
    },
    error: function (e) {
      notyf.alert('伺服器錯誤,無法載入');
      // console.log(e);
    },
  });
  
  // console.log(year_list)
  
  $.each(year_list, function (i, year_num) {
    // 顯示各期零用金紀錄、兒少單據、轉帳資料之餘額總計 region
   
    var this_year_datas = load_year_balance_num(year_num);
    // console.log(this_year_datas)
    var last_year_datas = [];
    var total_last_pb = 0;

    if(i == 0)
    {
      last_year_datas = [];
      total_last_pb = 0;
    }
    else
    {
      last_year_datas = load_year_balance_num((parseInt(year_num) - 1));
      total_last_pb = Number(last_year_datas[2]);
    }    


    $("#"+year_num+"_last_pb").html(total_last_pb);
 
    var new_total_this_pb = Number(this_year_datas[2]) + total_last_pb;

    $("#"+year_num+"_year_i").html(Number(this_year_datas[0]));
    $("#"+year_num+"_year_c").html(Number(this_year_datas[1]));
    $("#"+year_num+"_this_pb").html(new_total_this_pb);
    
    // console.log(total_last_pb, Number(this_year_datas[0]), Number(this_year_datas[1]), new_total_this_pb)

   //endregion
  });
});


load_year_balance_num = function(year_num) {

  var balance_arr = [];
  
  $.ajax({
    url: "database/find_accounting_record_cash_balance_year_v2.php",
    data: {
      year: year_num,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
     // console.log(data);
      var total_year_i = 0;
     var total_year_c = 0;
     var total_this_pb = 0;
 
     $.each(data, function (index, value) {
       total_year_i += Number(value.Income_sum);
       total_year_c += Number(value.Cost_sum);
       total_this_pb += Number(value.This_pb);
     });

     balance_arr.push(total_year_i)
     balance_arr.push(total_year_c)
     balance_arr.push(total_this_pb)
 
    },
    error: function (e) {
    //  console.log(e)
      swal({
        type: "error",
        title: "系統錯誤!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      })
      // .then(function () {
      //   history.back();
      // });
    },
  });

  return balance_arr;
}
