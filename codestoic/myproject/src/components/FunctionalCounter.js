import { useState } from "react";

const FunctionalCounter = ()=>{
    const [counter,setCounter] = useState(0);
    const increment = ()=>{
        setCounter(counter+1);
    }
    const decrement  = ()=>{
        setCounter(counter-1)
    }

    return <div>
        Value is: {counter}
        <button onClick={()=> increment()}>Add 1 in counter</button>    
    <br>
    </br>    <button onClick={decrement}>Add -1 in counter</button>    
    
    </div>
}

export default FunctionalCounter;
