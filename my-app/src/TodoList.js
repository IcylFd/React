import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

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
    },() => {
        console.log(this.ul.querySelectorAll('div').length);
    })
  };

  handleInputChange(e){
      console.log(e.target);
      const value = this.input.value;
    this.setState({
      inputValue: value
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
                      key={item}
                      content={item}
                      ind ex={index}
                    />
            })
    )
  }
    // 在组件即将被挂在到页面的时刻自动执行
  componentWillMount(){
      console.log('componentWillMount');
  }

  render() {
      console.log('parent render');
    return (
      //包裹多个元素，不添加dom
      <Fragment>
        <div>
          <input className='inputBox' value={this.state.inputValue} onChange={this.handleInputChange}
          ref={(input) => {this.input = input}}/>
          <button style={{background: "pink",color: "#fff"}} onClick={this.handleButtonClick}>add</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }

    //在组件被挂载到页面之后自动执行
    componentDidMount(){
        console.log('componentDidMount');
    }

    //在组件更新之前自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;   //组件是否需要更新
    }

    //组件被更新之前自动执行（在shouldComponentUpdate之后执行）
    //如果shouldComponentUpdate返回true它才执行
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    //组件更新完成之后被执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

}

export default TodoList;
