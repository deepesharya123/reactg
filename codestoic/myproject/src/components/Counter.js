import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0,
        };
        // bound this with decement so that when decement fucntion will ba
        // called direclty then it works well
        this.decrement= this.decrement.bind(this);
    }

    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrement(){
        console.log(this)
        this.setState({
            counter:this.state.counter-1
        })
    }

    render(){
        return <div>
            <h3> Count value is {this.state.counter} </h3>
            <button onClick={()=> this.increment()}>Increment by 1</button>
            <button onClick={this.decrement}>Decrement by 1</button>
            
        </div>
    }
}

export default Counter;