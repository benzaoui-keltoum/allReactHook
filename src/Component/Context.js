/*
***********************when we use state *******************************************
import React, { useState } from "react";
import User from "../User";
import Login from "./Login";

// this is how to display context when we have a small number of state 
//but when we have a lot we must use  Context HOOK
const  Context =()=>{
    const [username,setUsername]= useState("");
return(<>

<User username={username}></User>

<Login setUsername={setUsername}></Login>
</>)

}
export default   Context  ;
***********************when we have a lot of state ofr exapmle *******************************************

*/



import React, { createContext, useState } from "react";
import User from "../User";
import Login from "./Login";

    // a context is a collection of state wich  i can access to it inside a component
export const Appcontext= createContext(null)

// this is how to display context when we have a small number of state 
//but when we have a lot we must use  Context HOOK
const  Context =()=>{
    const [username,setUsername]= useState("");

return(<>

<Appcontext.Provider value={{username,setUsername}}>


<User></User>

<Login></Login>
</Appcontext.Provider>

</>)

}
export default   Context  ;


