<?php 
    $authority_pages = json_decode($_SESSION['authority_pages']);
    
    // 全部選單
    $all_pages = '';

    //首頁

    $index_page = 
    '<li>
        <a href="index.php">首頁
        </a>
    </li>';

    // 行政管理
    $adminst_pages = '';

    // 收文
    $received_page = '';

    // 發文
    $published_page = '';

    // 員工管理
    $employee_pages = '';

    // 履歷表檔案
    $resume_page = '';

    // 在職訓練
    $training_page = '';

    // 請假
    $day_off_page = '';

    // 加班
    $overtime_page = '';

    // 特休規則管理
    $leave_rule_table_page = '';

    // 志工管理
    $volunteer_pages = '';

    // 志工資料
    $volunteer_page1 = '';

    // 志工會議及活動
    $volunteer_page2 = '';

    // 會議管理
    $meeting_rec_pages = '';

    // 團督記錄
    $meeting_rec_page1 = '';

    // 理監事會議
    $meeting_rec_page2 = '';

    // 會員大會
    $meeting_rec_page3 = '';

    // 會計管理
    $accounting_pages = '';

    // 零用金
    $accounting_page1 = '';

    // 帳目報表
    $accounting_page2 = '';
    
    // 個案管理
    $case_pages = '';

    // 未開案管理
    $nonopen_case_pages = '';

    // 簡短服務
    $nonopen_case_page1 = '';

    // 監所服務
    $nonopen_case_page2 = '';

    // 篩檢
    $nonopen_case_page3 = '';

    // 開案管理
    $open_case_pages = '';

    // 開案個案
    $open_case_page1 = '';

    // 安置評估
    $open_case_page2 = '';
    
    // 結案
    $closed_page = '';

    // 安置中心生輔紀錄
    $dlgrec_all_pages = '';

    // 生輔紀錄
    $dlgrec_page1 = '';

    // 同儕生輔紀錄
    $dlgrec_page2 = '';

    // 服務報表
    $case_report_page = '';

    // 方案管理
    $program_pages = '';

    // 方案計畫
    $program_page1 = '';

    // 方案活動
    $program_page2 = '';

    // 權限管理
    $auth_pages = '';

    // 加入最前面的網頁元素內容
    // $all_pages .=
    // '<div class="fixed-sidebar-left">
    // <ul class="nav navbar-nav side-nav nicescroll-bar" id="menu_tab_nav">';

    // 先加入首頁
    $all_pages .= $index_page;

    // 依據 authority_pages 內容 加入選單第2、3層內容 region
    foreach($authority_pages as $key => $page_name)
    {
        // 依據權限頁面陣列裡的名稱添加選單元素
        switch ($page_name) {
            case 'page_a':
                    $received_page = 
                    '<li>
                        <a href="received_yearlist.php">收文
                        </a>
                    </li>';
                break;

            case 'page_b':
                    $published_page = 
                    '<li>
                        <a href="published_yearlist.php">發文
                        </a>
                    </li>';
                break;

            case 'page_c':
                    $resume_page =
                    '<li>
                        <a href="resume_detail_v2.php?id='.$_SESSION['resume_id'].'">履歷表檔案</a>
                    </li>';
                break;
    
            case 'page_c_b':
                    $resume_page = 
                    '<li>
                        <a href="resume.php">履歷表檔案
                        </a>
                    </li>';
                break;
            
            case 'page_d':
                    $training_page = 
                    '<li>
                        <a href="training.php">在職訓練
                        </a>
                    </li>';
                break;

            case 'page_d_b':
                    $training_page = 
                    '<li>
                        <a href="training.php">在職訓練
                        </a>
                    </li>';
                break;

            case 'page_e':
                    $day_off_page = 
                    '<li>
                        <a href="day_off.php">請假系統
                        </a>
                    </li>';
                break;
    
            case 'page_e_a':
                    $day_off_page = 
                    '<li>
                        <a href="day_off.php">請假系統
                        </a>
                    </li>';
                break;

            case 'page_f':
                    $overtime_page = 
                    '<li>
                        <a href="overtime.php">加班系統
                        </a>
                    </li>';
                break;
    
            case 'page_f_a':
                    $overtime_page = 
                    '<li>
                        <a href="overtime.php">加班系統
                        </a>
                    </li>';
                break;
            
            case 'page_g':
                    $leave_rule_table_page = 
                    '<li>
                        <a href="leave_rule_table.php">特休規則管理
                        </a>
                    </li>';
                break;

            case 'page_h1':
                    $volunteer_page1 = 
                    '<li>
                        <a href="volunteer.php">志工資料
                        </a>
                    </li>';
                break;

            case 'page_h2':
                    $volunteer_page2 = 
                    '<li>
                        <a href="volunteer_meeting.php">志工會議及活動
                        </a>
                    </li>';
                break;
    
            case 'page_i1':
                    $meeting_rec_page1 = 
                    '<li>
                        <a href="supervisor_record_yearlist_v2.php">團督記錄
                        </a>
                    </li>';
                break;

            case 'page_i2':
                    $meeting_rec_page2 = 
                    '<li>
                        <a href="board_supervisor_yearlist_v2.php">理監事會議
                        </a>
                    </li>';
                break;
    
            case 'page_i3':
                    $meeting_rec_page3 = 
                    '<li>
                        <a href="members_assemble_yearlist_v2.php">會員大會
                        </a>
                    </li>';
                break;
            
            case 'page_j1':
                    $accounting_page1 = 
                    '<li>
                        <a href="accounting_sheet.php">零用金
                        </a>
                    </li>';
                break;

            case 'page_j2':
                    $accounting_page2 = 
                    '<li>
                        <a href="accounting_record_report_yearlist.php">帳目報表
                        </a>
                    </li>';
                break;

            case 'page_k':
                    $nonopen_case_page1 = 
                    '<li>
                        <a href="phone.php">簡短服務
                        </a>
                    </li>';
                break;
    
            case 'page_l':
                    $nonopen_case_page2 = 
                    '<li>
                        <a href="counsel.php">監所服務
                        </a>
                    </li>';
                break;

            case 'page_m':
                    $nonopen_case_page3 = 
                    '<li>
                        <a href="screening.php">篩檢
                        </a>
                    </li>';
                break;
    
            case 'page_n1':
                    $open_case_page1 = 
                    '<li>
                        <a href="current_case.php">開案個案
                        </a>
                    </li>';
                break;
            
            case 'page_n2':
                    $open_case_page2 = 
                    '<li>
                        <a href="placement_case.php">安置評估
                        </a>
                    </li>';
                break;

            case 'page_o':
                    $closed_page = 
                    '<li>
                        <a href="closed.php">結案
                        </a>
                    </li>';
                break;

            case 'page_p1':
                    $dlgrec_page1 = 
                    '<li>
                        <a href="dlgrec.php">生輔紀錄
                        </a>
                    </li>';
                break;
    
            case 'page_p2':
                    $dlgrec_page2 = 
                    '<li>
                        <a href="peers_dlgrec.php">同儕生輔紀錄
                        </a>
                    </li>';
                break;

            case 'page_q':
                    $case_report_page = 
                    '<li>
                        <a href="case_report.php">服務報表
                        </a>
                    </li>';
                break;
    
            case 'page_r1':
                    $program_page1 = 
                    '<li>
                        <a href="program_plan.php">方案計畫
                        </a>
                    </li>';
                break;
            
            case 'page_r2':
                    $program_page2 = 
                    '<li>
                        <a href="program_act.php">方案活動
                        </a>
                    </li>';
                break;

            case 'page_Auth':
                    $auth_pages = 
                    '<li>
                        <a href="javascript:void(0);" data-toggle="collapse" data-target="#auth">權限管理
                            <span class="pull-right">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                            </span>
                        </a>
                        <ul style="font-size:18px" id="auth" class="collapse">
                            <li>
                                <a href="Authority.php">使用者權限
                                </a>
                            </li>
                            <li>
                                <a href="Authority_default_rule_set.php">預設權限
                                </a>
                            </li>
                        </ul>
                    </li>';
                break;
        }
    }
    // endregion

    // 員工管理 - 判斷選單子項（第3層）是否存在 region
    $employee_pages_set = $resume_page . $training_page . $day_off_page . $overtime_page . $leave_rule_table_page;
    if(!empty($employee_pages_set))
    {
        // 員工管理 - 加入開頭
        $employee_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#staff_non_open">員工管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="staff_non_open" class="collapse" auth_page="page_collapse_2">';
        
        // 員工管理 = 履歷表檔案 + 在職訓練 + 請假 + 加班 + 特休規則管理
        $employee_pages .= $resume_page . $training_page . $day_off_page . $overtime_page . $leave_rule_table_page;

        // 員工管理 - 加入結尾
        $employee_pages .= '</ul></li>';
    }
    // endregion

    // 志工管理 - 判斷選單子項（第3層）是否存在 region
    $volunteer_pages_set = $volunteer_page1 . $volunteer_page2;
    if(!empty($volunteer_pages_set))
    {
        // 志工管理 - 加入開頭
        $volunteer_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#volunteer_non_open">志工管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="volunteer_non_open" class="collapse">';
        
        // 志工管理 = 志工資料 + 志工會議及活動
        $volunteer_pages .= $volunteer_page1 . $volunteer_page2;

        // 志工管理 - 加入結尾
        $volunteer_pages .= '</ul></li>';
    }
    // endregion


    // 會議管理 - 判斷選單子項（第3層）是否存在 region
    $meeting_rec_pages_set = $meeting_rec_page1 . $meeting_rec_page2 . $meeting_rec_page3;
    if(!empty($meeting_rec_pages_set))
    {
        // 會議管理 - 加入開頭
        $meeting_rec_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#meeting_non_open">會議管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="meeting_non_open" class="collapse">';
        
        // 會議管理 = 團督記錄 + 理監事會議 + 會員大會
        $meeting_rec_pages .= $meeting_rec_page1 . $meeting_rec_page2 . $meeting_rec_page3;


        // 會議管理 - 加入結尾
        $meeting_rec_pages .= '</ul></li>';
    }
    // endregion


    // 會計管理 - 判斷選單子項（第3層）是否存在 region
    $accounting_pages_set = $accounting_page1 . $accounting_page2;
    if(!empty($accounting_pages_set))
    {
        // 會計管理 - 加入開頭
        $accounting_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#accounting_non_open">會計管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="accounting_non_open" class="collapse">';
        
        // 會計管理 = 零用金 + 帳目報表
        $accounting_pages .= $accounting_page1 . $accounting_page2;

        // 會計管理 - 加入結尾
        $accounting_pages .= '</ul></li>';
    }
    // endregion


    // 行政管理 - 加入開頭
    $adminst_pages = 
    '<li>
    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#administration">行政管理
        <span class="pull-right">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
        </span>
    </a>
    <ul style="font-size:18px" id="administration" class="collapse">';
    

    // 行政管理 = 收文 + 發文 + 員工管理 + 志工管理 + 會議管理 + 會計管理
    $adminst_pages .= $received_page . $published_page . $employee_pages . $volunteer_pages . $meeting_rec_pages. $accounting_pages;


    // 行政管理 - 加入結尾
    $adminst_pages .= '</ul></li>';


    // 未開案管理 - 判斷選單子項（第3層）是否存在 region
    $nonopen_case_pages_set = $nonopen_case_page1 . $nonopen_case_page2 . $nonopen_case_page3;
    if(!empty($nonopen_case_pages_set))
    {
        // 未開案管理 - 加入開頭
        $nonopen_case_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open">未開案管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="non_open" class="collapse">';
        
        // 未開案管理 = 簡短服務 + 監所服務 + 篩檢
        $nonopen_case_pages .= $nonopen_case_page1 . $nonopen_case_page2 . $nonopen_case_page3;

        // 未開案管理 - 加入結尾
        $nonopen_case_pages .= '</ul></li>';
    }
    // endregion


    // 開案管理 - 判斷選單子項（第3層）是否存在 region
    $open_case_pages_set = $open_case_page1 . $open_case_page2;
    if(!empty($open_case_pages_set))
    {
        // 開案管理 - 加入開頭
        $open_case_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open2">開案管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="non_open2" class="collapse">';
        
        // 開案管理 = 開案個案 + 安置評估
        $open_case_pages .= $open_case_page1 . $open_case_page2;
        
        // 開案管理 - 加入結尾
        $open_case_pages .= '</ul></li>';
    }
    // endregion


    // 安置中心生輔紀錄 - 判斷選單子項（第3層）是否存在 region
    $dlgrec_all_pages_set = $dlgrec_page1 . $dlgrec_page2;
    if(!empty($dlgrec_all_pages_set))
    {
        // 安置中心生輔紀錄 - 加入開頭
        $dlgrec_all_pages .= 
        '<li>
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open3">安置中心生輔紀錄
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:15px" id="non_open3" class="collapse">';
        
        // 安置中心生輔紀錄 = 生輔紀錄 + 同儕生輔紀錄
        $dlgrec_all_pages .= $dlgrec_page1 . $dlgrec_page2;
    
        // 安置中心生輔紀錄 - 加入結尾
        $dlgrec_all_pages .= '</ul></li>';
    }
    // endregion


    // 行政管理 - 加入開頭
    $case_pages = 
    '<li>
        <a href="javascript:void(0);" data-toggle="collapse" data-target="#case">個案管理
            <span class="pull-right">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </span>
        </a>
        <ul style="font-size:18px" id="case" class="collapse">';

    // 個案管理 = 未開案管理 + 開案管理 + 結案 + 安置中心生輔紀錄 + 服務報表
    $case_pages .= $nonopen_case_pages . $open_case_pages . $closed_page . $dlgrec_all_pages . $case_report_page;

    // 行政管理 - 加入結尾
    $case_pages .= '</ul></li>';


    // 方案管理 - 判斷選單子項（第2層）是否存在 region
    $program_pages_set = $program_page1 . $program_page2;
    if(!empty($program_pages_set))
    {
        // 方案管理 - 加入開頭
        $program_pages .= 
        '<li>
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#program">方案管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:18px" id="program" class="collapse">';
        
        // 方案管理 = 方案計畫 + 方案活動
        $program_pages .= $program_page1 . $program_page2;

        // 方案管理 - 加入結尾
        $program_pages .= '</ul></li>';
    }
    // endregion
    
    // 全部頁面 = (首頁) + 行政管理 + 個案管理 + 方案管理 + 權限管理
    $all_pages .= $adminst_pages . $case_pages . $program_pages . $auth_pages;
?>