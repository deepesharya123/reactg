import { Component } from "react";

class ClassEvent extends Component{

    handleclick(){
        console.log("Printing something to the screen");
    }

    render(){
        return <div style={{backgroundColor:"red", padding: '20px 0px' }}>
            <h1>From the class compoent and, class event</h1>
            <button onClick={this.handleclick}>Click here </button><br></br>
            <button onClick={()=> this.handleclick()}>Click here 2</button>
        
        </div>
    }
}

export  default ClassEvent;