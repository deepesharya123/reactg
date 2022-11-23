const name = "Shyam";

const displayMessage = ()=>{
    return "I want to learn react.js";
}

function Hello(){
    return (<h1>Hello World! {name} {displayMessage()}</h1>)
}

export default Hello;
// const World= () => <h1>Hello there</h1>

// export  {
//                 Hello,
//                 World
//             };