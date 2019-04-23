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


/* -----列表渲染----- */ 
    // 查询数据库
    $sqli = "SELECT * FROM `list`";
    // 执行sqli语句
    $res = $conn->query($sqli);
    // 返回结果集
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);
    // echo json_encode($arr,JSON_UNESCAPED_UNICODE);

    
/* -----列表分页功能----- */ 
    // 设置文件路径
    $path = "SELECT * FROM list LIMIT $index,$num";
    // 执行sqli语句
    $result = $conn->query($path);
    // 返回结果集
    $reg = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);



    // 做成关联数组 传多数据到前台
    $list = array(
        'total'=>count($arr),
        'page'=>$page,
        'num'=>$num,
        'index'=>$index,
        'reg'=>$reg
    );
    
    // 返回给前台
    echo json_encode($list,JSON_UNESCAPED_UNICODE);

    

?>