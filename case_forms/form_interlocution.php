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
                                                        <th>社工/關懷人員</th>
                                                        <th>督導</th>
                                                    </tr>
                                                    <tr>
                                                       <td><input name="interlocution_date" id="interlocution_date" type="date"></td>
                                                       <td>
                                                            <select name="interlocution_place" id="interlocution_place">
                                                                <option value="">所有</option>
                                                                <option value="電訪">電訪</option>
                                                                <option value="面訪">面訪</option>
                                                                <option value="家訪">家訪</option>
                                                            </select>     
                                                       </td>
                                                       <td>
                                                            <textarea style="min-height:26em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_ques" id="interlocution_ques" placeholder="請輸入個案問題"></textarea>
                                                       </td>
                                                       <td>
                                                           <table style="width:100%;">
                                                               <tr><td>訪談時間</td></tr>
                                                               <tr><td><input name="interlocution_time" id="interlocution_time" type="time"></td></tr>
                                                               <tr><td>處遇</td></tr>
                                                               <tr><td><textarea style="min-height:14em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_content" id="interlocution_content" placeholder="請輸入處遇"></textarea></td></tr>
                                                               <tr><td>下次目標</td></tr>
                                                               <tr><td><textarea style="min-height:14em;height:auto;width:100%;resize: none;font-size: 20px;" name="interlocution_next_target" id="interlocution_next_target" placeholder="請輸入下次目標"></textarea></td></tr>
                                                           </table>
                                                       </td>
                                                       <td><input name="assign_name" id="assign_name" type="text"></td>
                                                       <td><input name="supervise_name" id="supervise_name" type="text"></td>
                                                    </tr>
                                                </table>
                                               
                                            </form>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_interlocution_detail" class="btn btn-default">儲存</button>
                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">返回</button>
                                    <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button>
                                    <button style="font-size:20px" onclick="test()" class="btn btn-default">測試</button>
                                </div>
                                <div class="text-right">
                                    <button style="font-size:20px" id="end" type="button" class="btn btn-default">結案</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>