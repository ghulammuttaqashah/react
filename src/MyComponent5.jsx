import React,{useState} from "react";

function MyComponent5()
{
    const[cars,setCars]=useState([]);
    const[carYear, setCarYear]=useState(new Date().getFullYear());
    const[carMake, setCarMake ]=useState("");
    const[carModel, setCarModel ]=useState("");

    function handleAddCar()
    {
        const newCar={year: carYear,make:carMake, model:carModel}
        setCars(c=>[...c,newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index)
    {
        setCars(c=>c.filter((_,i)=>i!==index));
    }

    function handleYearChange(event)
    {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event)
    {
        setCarMake(event.target.value);
    }

    function handleModelChange(event)
    {
        setCarModel(event.target.value);
    }

    return(
        <div>
            <h2>List of Car Items</h2>
            <ul>
                {cars.map((cars,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{cars.year} {cars.make} {cars.model}</li>)}
            </ul>
            <input type="number" name="" value={carYear} onChange={handleYearChange} id="" /><br />
            <input type="text" name="" value={carMake} onChange={handleMakeChange} id="" placeholder="Enter car Make"/><br />
            <input type="text" name="" value={carModel} onChange={handleModelChange} id="" placeholder="Enter car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );
}
export default MyComponent5