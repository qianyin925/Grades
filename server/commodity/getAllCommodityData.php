<?php
/* 获取所有商品数据 */
/* 通过商品ID获取单个商品信息 */
header('Content-type:text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*');

//导入数据库连接请求方法+数据库参数
require_once '../config/MySQL.php';

//查询语句 order by name desc
$sql = "select * from {$commodity} where com_isremove = '0' order by com_time DESC ;";
//调用封装的方法：执行可执行SQL语句
$get = db_implement($sql);

//对查询语句结果进行处理 格式化==> 每次只能处理一条数据若查询结果有多条数据则需要进行循环遍历
while($row = mysql_fetch_assoc($get)){
    $result['content'][] = $row;
}
  

/* 对查询结果进行分析 并添加状态位 200查有所值 404并没有查询到任何东西 */
if($result){
  $result['error'] = '200';
}else{
  $result['error'] = '404';
}
/* 对查询的数据进行JSON编码 并输出 */
echo json_encode($result);







