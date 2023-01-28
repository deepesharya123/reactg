import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("clicked the class event handler")
    }
    render() {
    return (
      <div>
        <button onClick={()=> this.clickHandler()} >Click me(class event handler)</button>
    </div>
    )
}
}

export default ClassClick