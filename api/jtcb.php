<?php

    // 连接数据库
    include 'conn.php';

    // 查询数据库
    $sqli = "SELECT * FROM spsjxr";

    // 执行sqli语句
    $res = $conn->query($sqli);

    // 返回结果集
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);

    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

?>