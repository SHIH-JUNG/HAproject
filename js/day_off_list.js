//抓所有曾入住紀錄region
$(document).ready(function () {
  $.ajax({
    url: "database/find_day_off_list.php",
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      var cssstring = "";
      //            console.log(data)

      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>" +
          value.Name +
          "</td>" +
          '<td><a href="day_off.php?name=' +
          value.Name +
          "&day_id=" +
          value.Id +
          '">點擊進入</a></td>' +
          "</tr>";
      });

      $("#day_off_list_all").append(cssstring);
    },
    error: function (e) {
      console.log(e);
    },
  });
});
//endregion
