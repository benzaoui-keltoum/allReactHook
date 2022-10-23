import axios from "axios";
import React, { useEffect, useState ,useMemo} from "react";

const UseMemoHook  =()=>{
    // caching a value so that it does not need to be recalculated.

const[data,setData]=useState(null);
const[toggle,setToggle]=useState(false);

useEffect(()=>{
    axios.get()
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{setData(response.data)})} ,[]);

const findLongestName=(comments)=>
{ if (!comments)  return null;

let longestName="";
for(let i=0;i<comments.length;i++){

let currentName=comments[i].name;
if (currentName.length>longestName.length){
    longestName=currentName;
}

}
console.log("this was computed");
return longestName;

};
const getLongestName=useMemo(()=>findLongestName(data),[data]);
return(<>

    <div>{getLongestName}
    </div>
    <button onClick={()=>setToggle(!toggle)}>
    {" "} toggle
    </button>
    {toggle && <h1> toggle</h1>}

</>)

}
export default UseMemoHook    ;
