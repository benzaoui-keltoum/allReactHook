import React ,{useRef} from "react";



const UseReff=()=>{
    const inputRef= useRef(null);
    const onClick=()=>{

    inputRef.current.value="";//annuler
    inputRef.current.focus();//put cursor in input
    }


return(<>
<div>
  <h1> Pedro</h1>
   <input  name="in" type="text" placeholder="put your text ......" ref={inputRef}></input>
   <button onClick={onClick}>Change name</button>


</div>

</>);



}

export default  UseReff   ;