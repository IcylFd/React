import React,{component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

//子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(){
		this.props.delete(this.props.index);
	}
	render(){
		const { content, test } = this.props;
		return (
			<div onClick={this.handleDelete}>
				{test} - {content}
			</div>
		)
	}
	handleClick(){
		const { deleteItem, index} = this.props;
		deleteItem(index);
	}
}
TodoItem.propTypes = {                   //参数类型校验
	test:PropTypes.string.isRequired,    //isRequired 要求必须传递该参数
	content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {      //参数默认值
	test: 'hello world'
}
export default TodoItem;
