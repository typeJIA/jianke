<?php

    // 连接数据库
    include 'conn.php';

    // 接受前台传过来的用户名和密码进行查询
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    // $password = isset($_POST['password']) ? $_POST['password'] : '';

    // 查询数据库是否有该用户名
    $sql = "SELECT * FROM reg WHERE phone = '$phone'";

    // 执行sql语句:返回结果集
    $res = $conn->query($sql);
    // var_dump($res);

    // 返回状态信息给前台 
    if ($res->num_rows) {
        // 存在
        echo '1'; 
    } else {
        // 不存在
        echo '0';
    }

    // 关闭数据库和结果集
    // $res->close();
    // $conn->close();

?>