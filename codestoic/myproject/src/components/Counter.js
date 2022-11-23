import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0,
        }
    }




    render(){
        return <div>
            <h3> Count value is {this.state.counter} </h3>
            <button >Increment by 1</button>
            <button>Decrement by 1</button>
            
        </div>
    }
}

export default Counter;