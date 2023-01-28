import React, { Component } from "react";


class Welcome extends Component{
    render() {
        const {name, heroname} = this.props
        return (
            <h1>Hello {name}
             a.k.a {this.props.heroname}</h1>
        )
    }
}

export default Welcome;