function FunctionEvent(){
    function handleclick(){
        console.log("You clicked the button")
    }

    return<div>
        Functional Component
        <button onClick={()=>handleclick()}>Click Here</button>
    </div>
}

export default FunctionEvent
