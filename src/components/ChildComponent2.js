import React from "react";

export function ChildComponent2({selectedOption,setSelectedOption})
{
    return (
        <div style={{backgroundColor : "yellow", height : "200px"}}>
            <h3>Child Component 2</h3>
            <button onClick={() =>{
                setSelectedOption("Option 2")
            }}>Option 2</button>
        </div>
    )
}