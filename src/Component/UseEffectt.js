import React, {useEffect, useState} from "react";
import axios from "axios";
/* install axios to our project by npm install axios */
  const UseEffectt =()=>{
    /* is a function called whenever the page rerender*/

    const [data,setData]=useState(""); /* state working on it*/
    const [count,setCount]=useState(0);/*state used just for using use effect just when we update this var*/


    useEffect(()=>{
      /* we import this api and we display data*/
axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{setData(response.data[0].email);console.log("api was called")}) } ,[count]  );
    /* if we add an empty array that mean we dont rerender the page twise*/
    /* if add  an array with a variable that means the useeffect is applyed just when we modify the data wich inside the array*/ 
    
    
    
    

return(<>

<h2> hello {data}</h2>
<h2>  {count}</h2>
<button  onClick={()=>setCount(count +1)}> increment</button>

</>)

  }

export default  UseEffectt ;
