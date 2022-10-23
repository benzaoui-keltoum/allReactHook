/*import React from "react";

const  Login =({setUsername})=>{
return(<>
<input
onChange={(event)=>{setUsername(event.target.value)}}
>

</input>


</>)

}
export default   Login  ;
*/

import React ,{useContext} from "react";
import { Appcontext } from "./Context";

const  Login =()=>{
    const{setUsername}=useContext(Appcontext);

return(<>
<input
onChange={(event)=>{setUsername(event.target.value)}}
>

</input>


</>)

}
export default   Login  ;

