<?php

    header("content-type:text/html;charset=utf-8");
    // 连接数据库
    include 'conn.php';

    // 接受前台传输过来的page和num
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $num = isset($_POST['num']) ? $_POST['num'] : '';
    // echo $page,$num;
    $index = ($page - 1) * $num;
    // echo $index,$page,$num;


    // 查询数据库
    $Sql = "SELECT * FROM list ORDER BY price LIMIT $index,$num"; 

    // 执行sql语句
    $res2 = $conn->query($Sql);

    // 返回结果集
    $str = $res2->fetch_all(MYSQLI_ASSOC);
    // var_dump($str);

    // 做成关联数组 传多数据到前台
    // $list = array(
    //     'page'=>$page,
    //     'num'=>$num,
    //     'index'=>$index,
    //     'reg'=>$reg2
    // );
    
    // 返回给前台
    echo json_encode($str,JSON_UNESCAPED_UNICODE);

?>