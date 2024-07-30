<style>
    #form_1 table tr th
    {
        background-color:rgb(255 201 54);
        text-align:center;
        color:#d86d6d;
    }

    #form_1 table tr td
    {
        vertical-align: top;
    }

    #form_1 table tr td input,
    #form_1 table tr td textarea,
    #form_1 table tr td select
    {
        width: 100%;
    }
</style>
<div style="zoom:80%" class="row">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div  class="text-center">
                                <h4 id="form_type">個別會談摘要記錄表</h4>
                            </div>
                            <br>
                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                        <b>表格內容</b>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>基本資料</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <table style="width:100%;" class="table table-bordered">
                                                <tr>
                                                    <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">案號：</td>
                                                    <td>
                                                        <input style="width:35%;" id="tsn_case_id" type="text" disabled="disabled">
                                                    </td>

                                                    <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">個案姓名：</td>
                                                    <td>
                                                        <input style="width:30%;" id="case_name" type="text" disabled="disabled">
                                                    </td>
                                                </tr>
                                            </table>
                                            <form id="form_1" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <th>會談時間</th>
                                                        <th>會談地點</th>
                                                        <th>個案問題</th>
                                                        <th>處遇內容摘要記錄</th>
                                                        <th>關懷人員</th>
                                                        <th>督導</th>
                                                    </tr>
                                                    <tr>
                                                        <td><input name="interlocution_date" id="interlocution_date" type="date"></td>
                                                        <td>
                                                            <select name="interlocution_place" id="interlocution_place">
                                                                <option value=""></option>
                                                                <option value="電訪">電訪</option>
                                                                <option value="面訪">面訪</option>
                                                                <option value="家訪">家訪</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <span>選擇個案問題分類，並按+號添加至下方</span>
                                                            <!-- <select name="interlocution_ques_type" id="interlocution_ques_type" style="width:80%;"></select> -->
                                                            <select id="interlocution_ques_type" style="width:80%;"></select>
                                                            <button onclick="add_ques_types();return false;">+添加</button>
                                                            <br/>
                                                            <br/>
                                                            <div>
                                                                <input style="width:65%;" id="add_interlocution_ques_type" type="text">
                                                                <button id="add_interlocution_ques_type_btn" onclick="insert_ques_type_keywords();return false;">新增問題類型</button>
                                                            </div>
                                                            <br/>
                                                            <br/>
                                                            <span>個案問題分類：</span>
                                                            <textarea style="min-height:6em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_ques_types" id="interlocution_ques_types" readonly></textarea>
                                                            <button onclick="return_ques_types();return false;">刪掉最後的分類</button><button style="margin-left:1em;" onclick="clear_ques_types();return false;">清空問題分類</button>
                                                            <div class="text-left" style="font-size:16px;color:red;">※有誤刪或清空操作請別存檔並重新整理網頁</div>
                                                            <textarea style="min-height:26em;height:auto;width:100%;resize: none;font-size: 20px;margin-top:1.5em;" name="interlocution_ques" id="interlocution_ques" placeholder="請輸入個案問題"></textarea>
                                                        </td>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr><td>訪談時間</td></tr>
                                                                <tr><td><input name="interlocution_time" id="interlocution_time" type="time"></td></tr>
                                                                <tr><td>處遇</td></tr>
                                                                <tr><td><textarea style="min-height:14em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_content" id="interlocution_content" placeholder="請輸入處遇"></textarea></td></tr>
                                                                <tr><td>下次服務目標</td></tr>
                                                                <tr><td><textarea style="min-height:14em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_next_target" id="interlocution_next_target" placeholder="請輸入下次服務目標"></textarea></td></tr>
                                                            </table>
                                                        </td>
                                                        <!-- <td><input name="assign_name" id="assign_name" type="text"></td>
                                                        <td id='SignOff'><input name="supervise_name" id="supervise_name" type="text"></td> -->

                                                            <td>
                                                                <div class="col-sm-12" style="margin-top:0.3em;">
                                                                <select name="signName" class="signName" style="width:70%; display: block; margin-bottom: 10px;">
                                                                    <option value="">請選擇</option>
                                                                </select>
                                                                </div>
                                                                <div class="col-sm-12" style="margin-bottom: 10px;">
                                                                <button style="width:70%; color:red;" type="button" class="signature_btn"data-sign-board-name="assign" onclick="signature_btn">簽名</button>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                <a src="" id="show_signature_image" style="color:blue;" target="_blank" alt="簽名圖片連結">點擊顯示簽名圖片</a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="col-sm-12" style="margin-top:0.3em;">
                                                                <select name="signName" class="signName" style="width:70%; display: block; margin-bottom: 10px;">
                                                                    <option value="">請選擇</option>
                                                                </select>
                                                                </div>
                                                                <div class="col-sm-12" style="margin-bottom: 10px;">
                                                                <button style="width:70%; color:red;" type="button" class="signature_btn" #case_storage_model onclick="signature_btn">簽名</button>
                                                                </div>
                                                                <div class="col-sm-12">
                                                                <a src="" id="show_signature_image" style="color:blue;" target="_blank" alt="簽名圖片連結">點擊顯示簽名圖片</a>
                                                                </div>
                                                            </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_interlocution_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                    </svg>
                                    儲存</button>
                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                    </svg>
                                    返回</button>
                                    <!-- <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button> -->
                                    <!-- <button style="font-size:20px" onclick="test()" class="btn btn-default">測試</button> -->
                                </div>
                                <!-- <div class="text-right">
                                    <button style="font-size:20px" id="trans_grade" type="button" class="btn btn-default">轉級</button>
                                    <button style="font-size:20px" id="trans_case" type="button" class="btn btn-default">轉案</button>
                                    <button style="font-size:20px" id="end" type="button" class="btn btn-default">結案</button>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>