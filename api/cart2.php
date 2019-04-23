<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';
    $ID = isset($_POST['id']) ? $_POST['id'] : '';
    // 查询数据库
    $sql = "DELETE FROM cart WHERE spid = '$ID'";
    $res = $conn->query($sql);
    // 返回结果集
    // $arr = $res->fetch_all(MYSQLI_ASSOC);
    if($res){
        // 删除成功
        echo 1;
    }else {
        // 删除失败
        echo 0;
    }

?>