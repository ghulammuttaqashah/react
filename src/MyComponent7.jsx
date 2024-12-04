import React,{useState,useEffect} from "react"
function MyComponent7()
{
    const[width, setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event listener removed");
        }
    },[]);

    useEffect(()=>{
        document.title="Size: "+width+"x"+height;
    });

    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window height: {height}px</p>
    </>);
}
export default MyComponent7