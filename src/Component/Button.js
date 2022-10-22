import React, { useState } from "react";


const Button  =(props)=>{
//the child Components 
const [toggle,setToggle]=useState(false)

return(<>

<button
onClick={()=>{
setToggle(!toggle);


}}>
 Button from child 


</button>

{toggle  && <span> Toggle</span>}




</>)

}
export default    Button ;

