import React, { useRef } from "react";
import Button  from "./Button.js"

//set toggle to be eqaul to true and settoggle to be eqaul to false from the parent component 
//without passing function using props it s another way when we dont want to use props

const UseImperativeHandle  =()=>{
//the Parent Components 
const Buttonref= useRef(null);

return(<>
<button onClick={()=>{Buttonref.current.alterToggle()}}> Button from Parent</button>
<Button ref={Buttonref}/>
</>)

}
export default    UseImperativeHandle ;

