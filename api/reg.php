<?php

    // 连接数据库
    include 'conn.php'; 

    $fn = isset($_POST['fn']) ? $_POST['fn'] : '';

    if ($fn == 'checkname') {
        // 接受前台传来的用户名
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        // echo $name;

        // 查询数据库
        $sql = "SELECT * FROM reg WHERE `phone` = '$phone'";

        // 执行查询
        $res = $conn->query($sql);
        // var_dump($res);
        
        if ($res->num_rows) {
            // 存在 1
            echo '1';
        } else {
            // 不存在 0
            echo '0';
        }
    }else if ($fn == 'reg') {
        // 接受前台传来用户名和密码 
        $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
        $password = isset($_POST['password']) ? $_POST['password'] : '';
        // echo $name,$password;

        //添加数据
        $sqlz = "INSERT INTO reg(PHONE,PASSWORD) VALUES ('$phone','$password')";

        // 执行sql语句:返回是boolean值
        $result = $conn->query($sqlz);

        //var_dump($result);

        if ($result) {
            // 可以注册
            echo 'yes';
        }else {
            // 不可以注册
            echo 'no';
        }
    }

    // 关闭结果集和数据库
    // $res->close();
    // $result->close();
    // $conn->close();
    
?>