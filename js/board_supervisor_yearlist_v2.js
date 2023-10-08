const notyf = new Notyf();

//抓年度 region
$(document).ready(function () {
  $.ajax({
    url: "database/find_bs_yearlist_v2.php",
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      var cssstring = "";
      //            console.log(data)

      cssstring +=
        '<tr name="num1[]">' +
        "<td>全部年度</td>" +
        '<td><a href="board_supervisor_v2.php?year=all">點擊進入</a></td>' +
        "</tr>";

      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>民國" +
          value.Year +
          "年度</td>" +
          '<td><a href="board_supervisor_v2.php?year=' +
          value.Year +
          '">點擊進入</a></td>' +
          "</tr>";
      });

      $("#bs_yearlist_all").append(cssstring);
    },
    error: function (e) {
      // console.log(e);
      notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    },
  });
});
//endregion
