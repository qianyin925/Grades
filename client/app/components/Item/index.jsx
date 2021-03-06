/* 客户端：木偶组件List中的每个木偶组件Item */
import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';

import LazyLoad from 'react-lazy-load';

//引入 方法 对特定元素的字数进行限制 并将多余的文字用省略号替代
import { wordlimit } from '../../static/js/common';
class ItemComponent extends React.Component{
  render(){
    const data = this.props.data;
    return (
      <Link to={`/prospects/commodity/${data.com_id}`}>
      <div id='ItemComponent'>
        <div className = 'img'>
        <LazyLoad height={173} offsetVertical={300}>
          <img src={ data.com_img } alt=""/>
        </LazyLoad>
          
        </div>
        <p ref='title' className = 'title'>{data.com_title}</p>
        <p className = 'evacol'>
            评价<span>{data.com_evaluate}</span>
            收藏<span>{data.com_collect}</span>
        </p>
        <p className = 'price'>
            <span className = 'newPrice'><span>￥</span>{data.com_newPrice}</span>
            <span className = 'oldPrice'>￥{data.com_oldPrice}</span>
            <span className = 'float-right'>月销{data.com_salesVolume}笔</span>
        </p>
      </div>
      </Link>
    );
  }
  componentDidMount(){
    //调用方法 对标题的字数进行限制，超过用省略号进行替代
    wordlimit(this.refs.title,23);
  }
  //组件更新后  触发==>执行函数 对标题字数进行限制
  componentDidUpdate(){
    wordlimit(this.refs.title,23);
  }
}
export default ItemComponent;


