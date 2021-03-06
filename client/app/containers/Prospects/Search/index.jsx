/* 搜索页面  智能组件主页 路由： */
import React from 'react';

import { searchCommodity } from '../../../fetch/index';

import Header from '../../../components/Header';
import List from '../../../components/List';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switchSpinState } from '../../../actions/commonGlobal';

class Search extends React.Component{
  constructor(){
    super();
    this.state={
      placeholder: '',      //从首页跳转过来所带的参数
      searchText: '',       //搜索词条
      startIndex: 0,        //开始条数
      dataNumber: 15,       //获取n条数据
      orderBy: 'com_time',  //按照什么进行排序?
      orderType: 'asc'      //降序desc || 升序asc 
    };
  }

  /* 搜索事件处理器  ==> 传给木偶组件 */
  searchHandler(value){
    this.stateChange('searchText', value);   //设置更新搜索词条
    this.props.history.push('/prospects/search/'+this.state.searchText);  //更新路由
    this.resetData();   //更新数据  ===> this.props.history.go(-1);
  }

  /* this.state状态修改 */
  stateChange(key, value){
    let state = this.state;
    if( key && value ){
      state[key] = value;
      this.setState(state);
    }
  }
  //在搜索页点击导航条触发触发
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.searchText !== nextProps.match.params.searchText){
      this.stateChange('placeholder', nextProps.match.params.searchText); //更新 this.state记录当前搜索词条
      this.stateChange('searchText', nextProps.match.params.searchText); //更新 this.state记录当前搜索词条
    }
  }
  //组件更新后首次执行  ==> 首页过来
  componentDidMount(){
    this.stateChange('placeholder', this.props.match.params.searchText); //更新 this.state记录当前搜索词条
    this.stateChange('searchText', this.props.match.params.searchText); //更新 this.state记录当前搜索词条
    this.resetData(); //更新||其实是首次获取数据
  }
  //更新重置数据
  resetData(){
    const { switchSpinState } = this.props;
    switchSpinState();
    //调用封装的 fetch调用方法
    searchCommodity({
      searchText: this.state.searchText,      //搜索词条
      startIndex: this.state.startIndex,      //开始条数
      dataNumber: this.state.dataNumber,      //获取n条数据
      orderBy: this.state.orderBy,            //按照什么进行排序?
      orderType: this.state.orderType         //降序desc || 升序asc 
    }).then(res=>res.json()).then(json=>{
      switchSpinState();
      this.stateChange('data', json);
      console.log(this.state);   //控制台输出当前this.state
    });
  }

  render(){
    return (
      <div>
        <Header searchHandler={this.searchHandler.bind(this)} placeholder={this.state.placeholder} />
        <div style={{minHeight: '300px'}}>
        <List data={this.state.data} />
        </div>
        
      </div>
    );
  }
}
//redux
function mapStateToProps(state){ return {}; }
function mapDispatchToprops(dispatch){
  return {
    switchSpinState: bindActionCreators(switchSpinState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Search);
