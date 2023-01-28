// rec
import React, { Component } from 'react'

class Counter extends Component {
//   rconst
    constructor(props) {
      super(props)
      this.state = {
         count : 0
      }
    }

    increment(){

        // this.setState({
        //     count : this.state.count+1
        // },()=>{
        //     console.log("The callback function to print the updated value" ,this.state.count)
        // })
        
        this.setState((prevState, props)=>{
            return {count : prevState.count +1};
        },()=>{
            console.log("Callback value ",this.state.count)
        })

        // here state is not update as it async(took some time to update )
        // console.log(this.state)
    }

    incrementByFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
    return (
            <div>
                <h1>count is {this.state.count}</h1>
                <button onClick={()=> this.incrementByFive()}> Increment </button>
            </div>
        )
  }
}

export default Counter