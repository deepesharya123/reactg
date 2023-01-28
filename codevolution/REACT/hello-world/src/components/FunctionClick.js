import React from 'react'

function FunctionClick() {
  
  function clickHandler(){
    console.log("Clicked the button")
  }

  return (
    <div >
      <button onClick={clickHandler}>Click "functional event handler"</button>
      <br></br><button onClick={()=> clickHandler()}>Click "functional event handler</button>
    </div>
  )
}

export default FunctionClick