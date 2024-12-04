import React,{useState} from "react";
function MyComponent()
{
    const [name,setName]=useState("guest");
    const [age, setAge]=useState(18);
    const updateName=()=>
        {
            setName("Muttaqa");
        }
        const incrementAge=()=>
            {
                setAge(age++);
            }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    );
}
export default MyComponent