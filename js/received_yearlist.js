//抓所有曾入住紀錄region
$(document).ready(function () {
  $.ajax({
    url: "database/find_re_yearlist.php",
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      var cssstring = "";
      //            console.log(data)

      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>民國" +
          value.Year +
          "年度</td>" +
          '<td><a href="received.php?year=' +
          value.Year +
          '">點擊進入</a></td>' +
          "</tr>";
      });

      $("#re_yearlist_all").append(cssstring);
    },
    error: function (e) {
      // console.log(e);
    },
  });
});
//endregion
