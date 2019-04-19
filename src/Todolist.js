import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import store from './store'
import {getInputAction, getAddItemAction, getDeleteItemAction, getInitList} from './store/actionCreators'
import TodolistUI from './TodolistUI';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handelInputChange = this.handelInputChange.bind(this);
    this.handelStoreChange = this.handelStoreChange.bind(this);
    this.handelBtnClick = this.handelBtnClick.bind(this);
    this.handelDeleteItem = this.handelDeleteItem.bind(this);
    store.subscribe(this.handelStoreChange);
  }
  render() {
    return (
      <TodolistUI
        inputVal={this.state.inputVal}
        handelInputChange={this.handelInputChange}
        handelBtnClick={this.handelBtnClick}
        list={this.state.list}
        handelDeleteItem={this.handelDeleteItem}
      />
    );
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
  }
  handelInputChange(e) {
    const action = getInputAction(e.target.value);
    store.dispatch(action)
  }
  handelStoreChange(e) {
    this.setState(store.getState())
  }
  handelBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }
  handelDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default Todolist;
