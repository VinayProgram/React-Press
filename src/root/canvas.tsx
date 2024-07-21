import React, { useEffect } from "react"
import { useElements } from "../custom-hooks/stateHook"

const CanvasEditor = () => {
  const {elementsArray}=useElements()
useEffect(()=>{console.log(elementsArray)},[elementsArray])
  return (
    <main style={{border:'black 1px solid'}}>
       {Object.keys(elementsArray).map((x)=>{
      return(
        <React.Fragment key={x}>{elementsArray[x]}</React.Fragment>
      )
    })}
    </main>
  )
}

export default CanvasEditor