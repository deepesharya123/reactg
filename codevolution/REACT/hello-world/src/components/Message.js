import React from "react";

class Message extends React.Component{
    
    constructor(){
        super()
        this.state = {
            showVisitorMessage : true,
            message : "Welcome Visitor"
        }
    }

    changeMessage(){
        if(this.state.showVisitorMessage)
            this.setState({
                showVisitorMessage: false,
                message:"Thank you for subscribing"
            })
        else
            this.setState({
                showVisitorMessage: true,
                message:"Welcome Vistor"
            })
        
    }

    render() {
        return (
            <div>
                
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;