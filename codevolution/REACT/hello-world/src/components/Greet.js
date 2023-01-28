import React from 'react';

// function Greet(){
//     return <h1>Hello Deepesh </h1>
// }

// named export
// export const Greet = () => <h1>Hello Deepesh Arya</h1>

const Greet = (props) => {  // ({name, heroname})
    const {name, heroname} = props;
    return (
        <div >
            <h1>Hello {props.name} a.k.a {props.heroname} </h1>
            <h1>Hello {props.name} a.k.a {props.heroname} </h1>
            {props.children}
        </div>
    )
}
// default export
export default Greet;