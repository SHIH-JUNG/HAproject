<nav class="navbar navbar-inverse navbar-fixed-top">
    <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block mr-20 pull-left" href="javascript:void(0);">
        <i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></i>
    </a>
    <a href="index.php"><img class="brand-img pull-left" src="image/HA.png" /></a>
    <a href="index.php"><img class="brand-img pull-left" style="width:330px;height:70px" src="image/logo字.png" /></a>
    <ul class="nav navbar-right top-nav pull-right">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">歡迎 <?php echo $_SESSION['name']." ".$_SESSION['job']; ?><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg></a>
            <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                <li>
                    <a href="login_records.php">
                    <i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg></i>
                    打卡紀錄</a>
                </li>
                <li>
                    <a href="#" id="Sign_out">
                        <i>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z" />
                                <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
                            </svg>
                        </i> 
                    登出</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>