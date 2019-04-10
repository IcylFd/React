import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  render(){
    return(
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered={(el) => {el.style.color='blue'}}
          appear
        >
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>

        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  onEntered={(el) => {el.style.color='pink'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAdd}>add</button>
      </Fragment>
    )
  }

  handleToggle(){
    this.setState({
      show: this.state.show ? false : true
    })
  }

  handleAdd(){
    this.setState((prevState) => {
      return (
        {
          list:[...prevState.list,'item']
        }
      )
    })
  }
}

export default App;