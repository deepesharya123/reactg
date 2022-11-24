import { Component } from "react";

class Resume extends Component{
    render(){
        const {name} = this.props;
        return <div>
            <h3>This is a class compoenet for props demo to render " {name} " </h3>
        </div>
    }
}

export default Resume;