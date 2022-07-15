<form id="form_a" class="form" action="">
    <table id="all_data" style="width:75%;margin-bottom: 0px;" class="table table-bordered">
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">會議記錄標題</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="title_name" name="title_name" type="text" style="width:37em;"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">主持人</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="ceo_name" name="ceo_name" type="text" style="width:37em;"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">出席人員</td>
            <td>
                <textarea style="height:7em;width:37em;resize: none;font-size: 20px;" class="bs_question" id="attendees" name="attendees" placeholder="請輸入出席人員"></textarea>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">理監事會議記錄</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="record" name="record" type="text" style="width:37em;"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">日期</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="meeting_date" name="meeting_date" datepicker="ch_datepicker" type="text"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">時間</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="meeting_time" name="meeting_time" type="time"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">地點</td>
            <td style="border-bottom: solid 1px;"><input class="bs_question" id="place" name="place" type="text" style="width:37em;"></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">理監事會議建議</td>
            <td>
                <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" class="bs_question" id="suggest" name="suggest" placeholder="請輸入理監事會議建議"></textarea>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">下次理監事會議重點</td>
            <td>
                <textarea style="height:16em;width:700px;resize: none;font-size: 20px;" class="bs_question" id="next_focus" name="next_focus" placeholder="請輸入下次理監事會議重點"></textarea>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>督導簽章</label>
            </td>
            <td style="">
                <input class="closed_question" style="width:15em;" id="supervise" type="text"><button style="margin:.5em;margin-right:3em;color:red;" type="button" id="supervise_signature_btn">簽名</button>
                <button style="margin:.5em;" type="button" id="supervise_signature_msg_btn" onclick="sign_msg_model('supervise');" data-toggle="modal" data-target="#myModal">查看留言</button>
                <a src="" id="supervise_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>建立日期</label>
            </td>
            <td style="">
                <span id="adate"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>建立者</label>
            </td>
            <td style="">
                <span id="applicant"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>修改日期</label>
            </td>
            <td style="">
                <span id="udate"></span>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                <label>修改者</label>
            </td>
            <td>
                <span id="up_applicant"></span>
            </td>
        </tr>
    </table>
</form>