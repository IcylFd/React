import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  //子组件与父组件通信要调用父组件传递过来的方法
  handleDelete(){
    // let index = this.props.index
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content !== this.props.content){
      return true;
    } else {
      return false;
    }
  }


  render() {
    const { content, test } = this.props
    return (
      <div onClick={this.handleDelete}>{test} - {content}</div>
    )
  }
}


TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello'
}

export default TodoItem;