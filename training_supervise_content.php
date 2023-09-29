 <!---Table--->
 <div style="zoom:75%" class="row text-center">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="table-wrap">
                        <div class="table-responsive">
                            <div>
                                <h4>查詢</h4>
                            </div>
                            <div　class="col-sm-12" id="toolbar">
                                <div class="col-sm-12">
                                    <table style="font-size:20px;font-family:微軟正黑體;width:100%" class="table table-bordered NOline">
                                        <tr>

                                            <td class="text-right" style="background-color:rgb(255 201 54)">年度：</td>
                                            <td class="text-left">
                                                <select id="training_year" rel="0" class="filter search">
                                                    <option value="">所有</option>
                                                </select>
                                            </td>

                                            <td class="text-right" style="background-color:rgb(255 201 54)">員工姓名：</td>
                                            <td class="text-left">
                                                <select id="name" rel="2" class="filter search">
                                                    
                                                </select>
                                            </td>

                                            <td class="text-right" style="background-color:rgb(255 201 54)">在職訓練日期：</td>
                                            <td colspan="4" class="text-left">
                                                <input id="tr_min_date" type="text" name="ch_datepicker" style="width: 10em;" placeholder="在職訓練日期搜尋"><label>～</label>
                                                <input id="tr_max_date" type="text" name="ch_datepicker" style="width: 10em;" placeholder="在職訓練日期搜尋">
                                            </td>
                                        </tr>
                                        <tr>
                                        <td class="text-right" style="background-color:rgb(255 201 54)">課程名稱：</td>
                                            <td class="text-left">
                                                <select id="training_name" rel="4" class="filter search">
                                                    <option value="">所有</option>
                                                </select>
                                            </td>
                                        
                                            <td class="text-right" style="background-color:rgb(255 201 54)">在職訓練地點：</td>
                                            <td class="text-left">
                                                <select id="place" rel="6" class="filter search">
                                                    <option value="">所有</option>
                                                </select>
                                            </td>

                                            <td class="text-right" style="background-color:rgb(255 201 54)">時數：</td>
                                            <td class="text-left">
                                                <!-- <select id="hours" rel="4" class="filter search">
                                                    <option value="">所有</option>
                                                </select> -->
                                                <input id="hours" rel="5" class="filter search" type="number" placeholder="時數搜尋">
                                            </td>

                                            <td class="text-right" style="background-color:rgb(255 201 54)">檔案是否上傳：</td>
                                            <td class="text-left">
                                                <select id="file_upload" rel="7" class="filter search">
                                                    <option value="">所有</option>
                                                    <option value="已上傳">已上傳</option>
                                                    <option value="未上傳">未上傳</option>
                                                </select>
                                            </td>

                                            <td class="text-right">
                                                <button onclick="location.reload();">重置搜尋</button><span> </span>
                                            </td>

                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <p>
                            <h4>員工在職訓練一覽表</h4>
                            <br>
                            <div class="table-wrap">
                                <div class="table-responsive">
                                    <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" id="tab_all" data-toolbar="#toolbar">
                                        <thead>
                                            <tr>
                                                <th class="text-right" colspan="15">
                                                    <a href="add_training.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                                <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                            </svg>新增</button></a>
                                                </th>
                                            </tr>
                                            <tr style="background-color:rgb(255 201 54);">
                                                <th>年度</th>
                                                <th>在職訓練日期</th>
                                                <th>姓名</th>
                                                <th>時間</th>
                                                <th>課程名稱</th>
                                                <th>時數</th>
                                                <th>在職訓練地點</th>
                                                <th>檔案是否上傳</th>
                                                <th style="width:5em;"></th>
                                                <!-- <th>創建日期</th>
                                                <th>創建者</th>
                                                <th>更新日期</th>
                                                <th>更新者</th> -->
                                            </tr>
                                        </thead>
                                        <tbody id="call_view"></tbody>
                                    </table>
                                    <div class="text-center">
                                        <span id="count_people"></span>
                                        <span id="count_people2"></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!---/Table--->