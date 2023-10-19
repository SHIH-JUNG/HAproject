<?php 
    $menu_login_authority = $_SESSION['authority'];
?>
<?php include("check_auth_pages.php"); ?>

<div class="fixed-sidebar-left">
    <ul class="nav navbar-nav side-nav nicescroll-bar" id="menu_tab_nav">
        <?php echo $all_pages; ?>
    </ul>
</div>

