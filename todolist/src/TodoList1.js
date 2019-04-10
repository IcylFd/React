import React, { Component } from 'react'
import 'antd/dist/antd.css' 
import store from './store';
import { getChangeInputValue, getAddTodoItem, getDeleteTodoItem, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI'
import axios from 'axios';

class TodoList1 extends Component {
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleCommit = this.handleCommit.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (<TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleCommit={this.handleCommit}
      handleDeleteItem={this.handleDeleteItem}
    />)
  }

  handleInputChange(e){
    const action = getChangeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState());
  }

  handleCommit(){
    const action = getAddTodoItem();
    store.dispatch(action);
  }

  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index);
    store.dispatch(action);
  }

  componentDidMount() {
    const action = getInitList();
    // console.log(action);
    store.dispatch(action);
  }
}

export default TodoList1;