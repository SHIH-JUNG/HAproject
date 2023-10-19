<?php 
    $menu_login_authority = $_SESSION['authority'];
    // $menu_login_resume_id = $_SESSION['resume_id'];
    // $authority_pages = json_decode($_SESSION['authority_pages']);
?>

<div class="fixed-sidebar-left">
    <ul class="nav navbar-nav side-nav nicescroll-bar" id="menu_tab_nav">
        <li>
            <a href="index.php">首頁
            </a>
        </li>
        <li>
            <!--class 設為 active 被選中的大項目會為黑底-->
            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#administration">行政管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:18px" id="administration" class="collapse">
                <li>
                    <a href="received_yearlist.php">收文
                    </a>
                </li>
                <li>
                    <a href="published_yearlist.php">發文
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#staff_non_open">員工管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="staff_non_open" class="collapse" auth_page="page_collapse_2">
                        <li>
                            <?php
                                if ($menu_login_authority <= 4 || $menu_login_authority == 6) {

                                    echo '<a href="resume.php">履歷表檔案</a>';
                                }
                                else
                                {
                                    echo '<a href="resume_detail_v2.php?id='.$_SESSION['resume_id'].'">履歷表檔案</a>';
                                }
                            ?>
                        </li>
                        <li>
                            <a href="training.php">在職訓練
                            </a>
                        </li>
                        <li>
                            <a href="day_off.php">請假系統
                            </a>
                        </li>
                        <li>
                            <a href="overtime.php">加班系統
                            </a>
                        </li>
                        <li>
                            <a href="leave_rule_table.php">特休規則管理
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#volunteer_non_open">志工管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="volunteer_non_open" class="collapse">
                        <li>
                            <a href="volunteer.php">志工資料
                            </a>
                        </li>
                        <li>
                            <a href="volunteer_meeting.php">志工會議及活動
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#meeting_non_open">會議管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="meeting_non_open" class="collapse">
                        <li>
                            <a href="supervisor_record_yearlist_v2.php">團督記錄
                            </a>
                        </li>
                        <li>
                            <a href="board_supervisor_yearlist_v2.php">理監事會議
                            </a>
                        </li>
                        <li>
                            <a href="members_assemble_yearlist_v2.php">會員大會
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#accounting_non_open">會計管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="accounting_non_open" class="collapse">
                        <li>
                            <!-- <a href="accounting_record_cash_yearlist_v2.php">零用金
                            </a> -->
                            <a href="accounting_sheet.php">零用金
                            </a>
                        </li>
                        <li>
                            <a href="accounting_record_report_yearlist.php">帳目報表
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#case">個案管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:18px" id="case" class="collapse">
                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open">未開案管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="non_open" class="collapse">
                        <li>
                            <a href="phone.php">簡短服務
                            </a>
                        </li>
                        <li>
                            <a href="counsel.php">監所服務
                            </a>
                        </li>
                        <li>
                            <a href="screening.php">篩檢
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open2">開案管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="non_open2" class="collapse">
                        <li>
                            <a href="current_case.php">開案個案
                            </a>
                        </li>
                        <li>
                            <a href="placement_case.php">安置評估
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="closed.php">結案
                    </a>
                </li>

                <li>
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open3">安置中心生輔紀錄
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:15px" id="non_open3" class="collapse">
                        <li>
                            <a href="dlgrec.php">生輔紀錄
                            </a>
                        </li>
                        <li>
                            <a href="peers_dlgrec.php">同儕生輔紀錄
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="case_report.php">服務報表
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#program">方案管理
                <span class="pull-right">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </span>
            </a>
            <ul style="font-size:18px" id="program" class="collapse">
                <li>
                    <a href="program_plan.php">方案計畫
                    </a>
                </li>
                <li>
                    <a href="program_act.php">方案活動
                    </a>
                </li>
            </ul>
        </li>

        <li>
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
        </li>
    </ul>
</div>