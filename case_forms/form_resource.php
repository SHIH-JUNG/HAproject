<style>
    .resource_table thead tr th {
        background-color: rgb(255 201 54);
        text-align: center;
    }
    .resource_table tbody tr td input
    {
        width:100%;
    }

    .form_resource tbody tr td
    {
        padding:0px;
    }

    .resource_table input[type="text"]
    {
         border: none;
    }

    .resourcetab_th tr th:nth-child(1)
    {   
        width:16em;
    }

    .resourcetab_th tr th:nth-child(6)
    {   
        width:7em;
    }

    .resourcetab_th tr th:nth-child(3)
    {   
        width:6em;
    }

    .resourcetab_th tr th:nth-child(5)
    {   
        width:12em;
    }

    .resourcetab_tb tr td input[type="date"]
    {
        border:none;
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
                                <h4 id="form_type">社會資源應用表格</h4>
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
                                            <h4>表格內容</h4>
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
                                            <form id="form_1" class="form_resource">
                                               
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_resource_detail" class="btn btn-default">儲存</button>
                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">返回</button>
                                    <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button>
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