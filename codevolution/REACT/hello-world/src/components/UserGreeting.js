import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {
        // element Variable approach
        // let message ;
        // if(this.state.isLoggedIn)
        //     message = <div> Welcome Deepesh </div>
        // else 
        //     message =  <div>Welcome Guest</div>
        // return (<div>{message}</div>)

        // ternary operator approach
        // return (<div>
        //     {this.state.isLoggedIn ? 
        //     <div>Welcome Deepesh</div>:
        //     <div>Welcome GUEST</div>
        //     }
        // </div>)

        // short circuit approach
        return this.state.isLoggedIn && <div>Welcome Deepesh</div>

        // if else approach
        // if(this.state.isLoggedIn)
        //     return <div>Welcome Deepesh</div>
        // else
        //     return <div> Welcome Guest</div>
  }
}

export default UserGreeting