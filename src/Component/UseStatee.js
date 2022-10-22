import React, { useState } from "react";

const UseStatee=()=>{

    const [count,setCount]=useState(0);

    const increment=()=>
    {
       return  setCount(count+1);
    }

    return(
        <>
        <div style={{textAlign:"center"}}>
        {count} <br></br>
        <button  onClick={increment} >increment</button>
        </div>  
        
        
        
        </>
    )



}

export default UseStatee;