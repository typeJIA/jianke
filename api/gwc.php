<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';

    // 查询数据库
    $sql = "SELECT * FROM cart";
    $res = $conn->query($sql);

   
    // 返回结果集
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);
    // 查询结果集返回给前台

    // $a=$arr[0]['id'];
    
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);

?>