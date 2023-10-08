const notyf = new Notyf();

window.year_list = [];


$(document).ready(function () {

  // 載入年份資料 region
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
          // '<td id="'+value.Year+'_last_pb"></td>' +
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
      notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
      // console.log(e);
    },
  });
  //endregion
  
  // console.log(year_list)
  
  window.balance_arr = [];

  $.each(year_list, function (i, year_num) {
    // 顯示各期零用金紀錄資料之餘額總計 region
    
    var total_last_pb = 0;

    var this_year_datas = load_year_balance_num(year_num);
    // console.log(this_year_datas);
    
    if(i == 0)
    {
      total_last_pb = 0;
    }
    else
    {
      total_last_pb = balance_arr[i-1]["value"][2];
    }    

    // console.log(total_last_pb);


 
    var new_total_this_pb = Number(this_year_datas[0]) - Number(this_year_datas[1]) + Number(total_last_pb);
    
    
    balance_arr.push({year:year_num,value:[this_year_datas[0], this_year_datas[1], new_total_this_pb]});

   //endregion
  });

  
  $.each(year_list, function (i, year_num) {
    // if(i == 0)
    // {
    //   $("#"+year_num+"_last_pb").text("0");
    // }
    // else
    // {
    //   $("#"+year_num+"_last_pb").text(balance_arr[i-1]["value"][2]);
    // }
    
    $("#"+year_num+"_year_i").text(balance_arr[i]["value"][0]);
    $("#"+year_num+"_year_c").text(balance_arr[i]["value"][1]);
    $("#"+year_num+"_this_pb").text(balance_arr[i]["value"][2]);
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

     $.each(data, function (index, value) {
      // 根據Invoice_type計算 今年的收入、支出
      switch (value.Invoice_type) {
        case "收入":
          total_year_i += Number(value.Amount);
          break;
        
        case "支出":
          total_year_c += Number(value.Amount);
          break;
      }
    });

    balance_arr.push(total_year_i);
    balance_arr.push(total_year_c);

    // console.log(balance_arr)
    },
    error: function (e) {
    //  console.log(e)
      swal({
        type: "error",
        title: "系統錯誤！請聯絡網站維護人員",
        allowOutsideClick: false, //不可點背景關閉
      })
      // .then(function () {
      //   history.back();
      // });
    },
  });

  return balance_arr;
}
