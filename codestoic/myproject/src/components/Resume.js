import { Component } from "react";

class Resume extends Component{
    render(){
        const {name,lastname} = this.props;
        return <div>
            <h3>from class component , destructring props" {name} {lastname} " </h3>
        </div>
    }
}

export default Resume;