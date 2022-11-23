import {Component} from 'react';
class Message extends Component{
    render(){
        return <div>
            <h1>This is a class component </h1>
            <p>{this.props.messagecontent}</p>
            <p>{this.props.messagecode}</p>
            
        </div>
    }
}

export default Message; 