import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';

class TodoList extends Component {   //React.Component
  constructor(props){
    super(props);
    //当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state={
      list:[],
      inputValue:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleButtonClick(){
    this.setState({
       list:[...this.state.list,this.state.inputValue],    //... ES6语法 展开运算符
       inputValue:''
    })
  };

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }

  // handleItemClick(index){
  //   const list = this.state.list;
  //   list.splice(index,1);
  //   this.setState({list});      //ES6中键和值同名，可直接写一个
  // }

  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list});
  }

  getTodoItems (){
    return (
      this.state.list.map((item,index) => {
              return <TodoItem
                      delete={this.handleDelete}
                      key={index}
                      content={item}
                      index={index}
                    />
            })
    )
  }

  render() {
    return (
      //包裹多个元素，不添加dom
      <Fragment>
        <div>
          <input className='inputBox' value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button style={{background: "pink",color: "#fff"}} onClick={this.handleButtonClick}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
          <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }
}

export default TodoList;
