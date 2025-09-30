import React from "react";

export function ChildComponent1({SelectedOption,setSelectedOption})
{
    return(
        <div style={{backgroundColor :"red" ,height : "200px"}}>
            <h3>Child Component 1</h3>

            <button onClick={() =>{
                setSelectedOption("Option 1")
            }}>Option1</button>
        </div>
    )
}