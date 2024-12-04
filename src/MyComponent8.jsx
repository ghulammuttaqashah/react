import React,{useState,useEffect,useRef} from "react"
function MyComponent8()
{
    const inputRef=useRef(null);

    useEffect(()=>{
        console.log("Component Renders");
        console.log(inputRef)
    });

    function handleClick()
    {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="blue";
    }

    return(

        <div>
            <button onClick={handleClick}>Click me! </button>
            <input type="text" name="" id="" ref={inputRef}/>
            <button onClick={handleClick}>Click me! </button>
            <input type="text" name="" id="" ref={inputRef}/>
            <button onClick={handleClick}>Click me! </button>
            <input type="text" name="" id="" ref={inputRef}/>
            
        </div>
        
        
    );
}
export default MyComponent8