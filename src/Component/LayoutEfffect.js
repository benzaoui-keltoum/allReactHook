import React, {useEffect,useLayoutEffect, useRef } from "react";

const LayoutEfffect =()=>{
    /* change the layout of the application before it actually print out to the user*/

const inputRef=useRef(null);

useEffect(()=>{

//console.log(inputRef.current.value);},[]);
console.log("use effect");},[]);

useLayoutEffect(()=>{
    console.log("use layout effect");

inputRef.current.value="HELLO"},[]);





return(<>
<input ref={inputRef} value="Pedro" style={{width :400,height:100}}></input>

</>)

}
export default   LayoutEfffect  ;

