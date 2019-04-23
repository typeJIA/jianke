<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';
    $sql = "DELETE FROM cart";
    $res = $conn->query($sql);
    // var_dump($res);
    // 返回结果集
    // $arr = $res->fetch_all(MYSQLI_ASSOC);
    if($res){
        // 删除成功
        echo true;
    }else {
        // 删除失败
        echo false;
    }

?>