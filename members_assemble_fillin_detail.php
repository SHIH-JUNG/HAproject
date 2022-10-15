<form id="form_a" class="form" action="">
    <table id="all_data" style="width:75%;margin-bottom: 0px;" class="table table-bordered">
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">會員大會記錄標題</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="ma_question" id="title_name" name="title_name" type="text" style="width:100%;"></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">會議日期</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="ma_question" id="meeting_date" name="meeting_date" datepicker="ch_datepicker" type="text"></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">會議時間</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="ma_question" id="meeting_time" name="meeting_time" type="time"></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">會議地點</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="ma_question" id="place" name="place" type="text" style="width:100%;"></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">主席</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="ma_question" id="ceo_name" name="ceo_name" type="text" style="width:100%;"></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">出席人員</td>
            <td>
                <div class="col-sm-10"><textarea style="height:7em;width:100%;resize: none;font-size: 20px;" class="ma_question" id="attendees" name="attendees" placeholder="請輸入出席人員"></textarea></div>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">請假人員</td>
            <td>
                <div class="col-sm-10"><textarea style="height:7em;width:100%;resize: none;font-size: 20px;" class="ma_question" id="absent" name="absent" placeholder="請輸入請假人員"></textarea></div>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">紀錄者</td>
            <td style="border-bottom: solid 1px;"><div class="col-sm-10"><textarea style="height:10em;width:100%;resize: none;font-size: 20px;" class="ma_question" id="record" name="record" placeholder="請輸入會議記錄者"></textarea></div></td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">提案討論</td>
            <td>
                <div class="col-sm-10"><textarea style="height:10em;width:100%;resize: none;font-size: 20px;" class="ma_question" id="discuss" name="discuss" placeholder="請輸入提案討論內容"></textarea></div>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">臨時動議</td>
            <td>
                <div class="col-sm-10"><textarea style="height:16em;width:100%;resize: none;font-size: 20px;" class="ma_question" id="motion" name="motion" placeholder="請輸入臨時動議內容"></textarea></div>
            </td>
        </tr>
        <tr style="text-align:left">
            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                <label>督導簽章</label>
            </td>
            <td style="">
                <div class="col-sm-12"><input class="closed_question" style="width:15em;" id="supervise" type="text"><button style="margin:.5em;margin-right:3em;color:red;" type="button" id="supervise_signature_btn">簽名</button>
                <button style="margin:.5em;" type="button" id="supervise_signature_msg_btn" onclick="sign_msg_model('supervise');" data-toggle="modal" data-target="#myModal">查看留言</button>
                <a src="" id="supervise_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a></div>
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