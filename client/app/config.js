/* 配置 */
/* PHP后端项目URL */
export const URL = 'http://localhost/grades/server/';


//商品字段
export const commodity = {
  com_id : 'com_id',         //商品ID
  com_title : 'com_title',               //标题
  com_evaluate : 'com_evaluate',         //评价{评价人id:星级}
  com_collect : 'com_collect',           //收藏{收藏者id数组}
  com_newPrice : 'com_newPrice',          //价格{原价，现价}
  com_oldPrice : 'com_oldPrice',          //价格{原价，原价价}
  com_img : 'com_img',                   //图片{主图，缩略图}
  com_salesVolume : 'com_salesVolume',   //销量（月）
  com_time : 'com_time',                  //时间
  com_size : 'com_size',                           //尺寸
  com_number : 'com_number',            //数量
  com_color  : 'com_color'            //颜色
}

/**
 * 订单状态说明：默认值为0
 * 1表示 ：购物车中
 * 2表示 ：已下单
 * 3表示 : 已发货
 * 4表示 ：已收货 
 * 付款方式：默认值为0
 * 1表示 : 货到付款
 * 2表示 : 在线支付
 */