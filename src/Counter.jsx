import React,{useState} from "react";
function Counter()
{
    const [count,setCount]=useState(0);
    const inrement=()=>
        {
            setCount(count=>count+1);
            
        }
        const descrement=()=>
            {
                setCount(count=>count-1);
            }
            const reset=()=>
                {
                    setCount(count=>count=0);
                }
    return(
        <div>
            <p>{count}</p>
            <div className="btn">
            <button onClick={inrement}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={descrement}>Decrement</button>
            
            
            </div>
            
            <h1>The count is {count}</h1>
        </div>
    );
}
export default Counter;