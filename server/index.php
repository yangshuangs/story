<?php
 /**
     * 设置时区
     */
    date_default_timezone_set('Asia/Shanghai');
    define('SERVER_ROOT', dirname(__FILE__));  

    require_once(SERVER_ROOT . '/public/' . 'config.php');
    require_once(SERVER_ROOT . '/model/' . 'WebBase.php');
    require_once(SERVER_ROOT . '/controller/' . 'error.php');
    require_once(SERVER_ROOT . '/controller/' . 'router.php');