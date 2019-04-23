<?php

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'project';

    // 创建连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    $conn->query("SET NAMES utf-8");
    // 检测连接是否成功
    if ($conn->connect_error) {
        die('连接失败：'.$conn->connect_error);
    } else {
        // echo '连接成功';
    }
    
?>