/*import React from "react";

const  User =({username})=>{
return(<>

<h1> user : {username}</h1>


</>)

}
export default   User  ;
*/

import React ,{useContext} from "react";
import { Appcontext } from "./Component/Context";


const  User =()=>{
    const{username}=useContext(Appcontext);

return(<>

<h1> user : {username}</h1>


</>)

}
export default   User  ;

