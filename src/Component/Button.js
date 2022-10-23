import React, { forwardRef, useImperativeHandle, useState } from "react";

//the child Components 

const Button  =forwardRef((props,ref)=>{
    // forwardRef allow the functional compent to accespt   refernce from a parent
        // with forwardRef can grap any reference throw the parent component


const [toggle,setToggle]=useState(false);
useImperativeHandle(ref,()=>({
    alterToggle(){setToggle(!toggle);
    },
}))

return(<>

<button>
 Button from child 


</button>

{toggle  && <span> Toggle</span>}




</>)

});
export default    Button ;

