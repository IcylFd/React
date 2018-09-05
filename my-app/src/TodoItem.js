import React,{Component} from 'react';
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
		console.log('child render');
		const { content, test } = this.props;
		return (
			<div onClick={this.handleDelete}>
				{test} - {content}
			</div>
		)
		// return <div>item</div>
		// return React.createElement('div',{},'item');   //创建节点：标签,属性,内容
	}

	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.content !== this.props.content){
			return true;
		}
		else{
            return false;
		}
	}

	componentWillReceiveProps(){
		console.log('child componentWillReceiveProps');
	}


    //当这个组件即将被页面中剔除时才会被执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
	handleClick(){
		const { deleteItem, index} = this.props;
		deleteItem(index);
	}
}
TodoItem.propTypes = {                   //参数类型校验
	test:PropTypes.string.isRequired,    //isRequired 要求必须传递该参数
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

TodoItem.defaultProps = {      //参数默认值
	test: 'hello world'
}
export default TodoItem;
