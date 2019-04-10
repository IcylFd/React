import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: [],
        inputValue:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.getTodoItems = this.getTodoItems.bind(this);
  }
  handleButtonClick() {
    this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
    })
  }

  handleInputChange(e) {
    this.setState({
        inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({list})
  }

  getTodoItems(){
    return(
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
          deleteItem={this.handleItemClick} 
          content={item} 
          key={item} 
        />)
        }
      )
    )    
  }

  componentDidMount(){
    axios.get('/todolist.json')
    .then((res) => {
      this.setState(() => ({
        list: [...res.data]
      }))
    })
    .catch(() => {alert('error')})
  }

  render() {
    return (
      <Fragment>
        <input onChange={this.handleInputChange} 
               value={this.state.inputValue}
        />
        <button className='btn' onClick={this.handleButtonClick}>add</button>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default Todolist;
