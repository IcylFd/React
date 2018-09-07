import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './activeStyle.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            // show:true
            list:[]
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render(){
        return (
            <Fragment>
                {/*<div className={this.state.show ? 'show' : 'hide'}>hello</div>*/}
                {/*<CSSTransition*/}
                    {/*in={this.state.show}*/}
                    {/*timeout={1000}*/}
                    {/*classNames='fade'*/}
                    {/*unmountOnExit*/}
                    {/*onEntered={(el) => {el.style.color='blue'}}*/}
                {/*>*/}
                    {/*<div>hello</div>*/}
                    {/*<button onClick={this.handleToggle}>toggle</button>*/}
                {/*</CSSTransition>*/}


                {/*TransitionGroup写在所有组件的外部,与CSSTransition配合使用*/}
                <TransitionGroup>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color='blue'}}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )

                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment>
        )
    }
    handleToggle(){
        this.setState({
            show:this.state.show ? false : true
        })
    }
    handleAddItem(){
        this.setState((prevState) => {
            return {
                list: [...prevState.list,'item'],
            }
        })
    }
}

export default App;
