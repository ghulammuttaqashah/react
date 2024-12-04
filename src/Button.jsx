function Button() {
   const handleClick=(e)=>e.target.textContent="ouch!";
    //const handleClick2=(name)=>console.log("stop clicking me "+name);
    return (
        <button onClick={(e)=>handleClick(e)}>Click Me</button>
    );
}

export default Button;
