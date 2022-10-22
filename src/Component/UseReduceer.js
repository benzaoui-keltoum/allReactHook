import React,{useReducer} from "react";


//UseRducer HOOOKKK
/* if we have more than one action */

const reducer=(state,action)=>{
  /* it s a function called when we state has changed
  and  action is the action happended  {case "action" :"what we do to our state"*/ 

    switch(action.type){
        case "increment" :return{count:state.count+1,showText:state.showText};
        case "toggleShowText" :return{count:state.count, showText: !state.showText};
        default :   return state; //any thing happen

    }
    };



  const UseReduceer =()=>{
    const[state,dispatch]=useReducer(reducer,{count:0,showText:true})
    /* state is an object ,it is udes to change the value of our state
dispatch is a function called where the state is changed 
reducer is a function 
after we intializ the value */

return(<div> 
 <h1> {state.count}</h1>
 <button onClick={()=>{
    dispatch({type :"increment"});
    dispatch({type :"toggleShowText"});
 }}
    > Increment </button>
    {state.showText && <p> This is a text</p>}

</div>);

  };

export default  UseReduceer ;
