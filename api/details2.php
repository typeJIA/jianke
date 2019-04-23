<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';

    // $fn = isset($_POST['fn']) ? $_POST['fn'] : '';
    // 接受前台传输过来的id
    $ID = isset($_POST['id']) ? $_POST['id'] : '';
    $num = isset($_POST['Nums']) ? $_POST['Nums'] : '';
    $tel = isset($_POST['tel']) ? $_POST['tel'] : '';
    // echo $ID,$num;
    // 查询数据库
    $sql = "SELECT * FROM cart WHERE spid = $ID";
    $res = $conn->query($sql);
    // var_dump($res);
    if ($res->num_rows) {
        // 更新数据库数据
        $sqla = "UPDATE cart SET number = '$num' WHERE phone = '$tel'";
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
        $sqla = "INSERT INTO cart(phone,spid,number) VALUES ('$tel','$ID','$num')";
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