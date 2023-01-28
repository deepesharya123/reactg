import React from "react";

const Hello = (props)=>{
    return (
        <div className = "dummyClass">
            <h1>Hello {props.name} a.k.a {props.heroname}</h1>
            {props.children}
        </div>
    )

    // return React.createElement(
    //     'div',
    //     { id : "hello", className:'dummyClass'},
    //     React.createElement(
    //         'h1',
    //         null,
    //         "Hello Deepesh from React.createElement"
    //     )
    // )
}

export default Hello;