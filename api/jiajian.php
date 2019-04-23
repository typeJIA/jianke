<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';

    $ID = isset($_POST['id']) ? $_POST['id'] : '';
    $jia = isset($_POST['Nums']) ? $_POST['Nums'] : '';
    // echo $ID,$num;
    // 查询数据库
    $sql = "SELECT * FROM jj WHERE spid = $ID";
    $res = $conn->query($sql);
    // var_dump($res);
    if ($res->num_rows) {
        // 更新数据库数据
        $sqla = "UPDATE jj SET jia = '$jia' WHERE spid = '$ID'";
        $resb = $conn->query($sqla);
        // var_dump($resb);
        // 返回结果集
        // $arr = $res->fetch_all(MYSQLI_ASSOC);
        if($resb){
            // 修改成功
            echo 1;
        }else {
            // 修改失败
            echo 0;
        }
        
    }else{
        // 插入数据
        $sqla = "INSERT INTO jj(spid,jia) VALUES ('$ID','$jia')";
        $resa = $conn->query($sqla);
        // echo 123;
        // 返回结果集
        // $arr = $res->fetch_all(MYSQLI_ASSOC);
        if($resa){
            // 修改成功
            echo 1;
        }else {
            // 修改失败
            echo 0;
        }
    }
    
?>