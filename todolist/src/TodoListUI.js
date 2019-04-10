import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

//无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{margin: '20px'}}>
      <Input 
        value={props.inputValue}
        placeholder="todo info" 
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      ></Input>
      <Button type='primary' onClick={props.handleCommit}>提交</Button>
      <List
        size="small"
        header={<div>Todo List</div>}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={() => {props.handleDeleteItem(index)}}>{item}</List.Item>)}
        style={{marginTop: '10px', width: '374px'}}
      >
      </List>
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{margin: '20px'}}>
//         <Input value={this.props.inputValue}
//                placeholder="todo info" 
//                style={{width: '300px', marginRight: '10px'}}
//                onChange={this.props.handleInputChange}
//         ></Input>
//         <Button type='primary' onClick={this.props.handleCommit}>提交</Button>
//         <List
//           size="small"
//           header={<div>Todo List</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
//           style={{marginTop: '10px', width: '374px'}}
//         >
//         </List>
//       </div>
//     );
//   }
// }

export default TodoListUI;