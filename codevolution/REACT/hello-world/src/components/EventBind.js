import React, { Component } from 'react'

 class EventBind extends Component {
    
    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            message: 'Hello'
        }
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    //     console.log(this," printing this")
    // }

    clickHandler = ()=>{
        this.setState({
            message:'Good Bye'
        })
    }

    render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        {/* <button onClick={this.clickHandler.bind(this)}> click </button> */}
        {/* <button onClick={()=> this.clickHandler()}> click </button> */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
        
        </div>
    )
  }
}

export default EventBind