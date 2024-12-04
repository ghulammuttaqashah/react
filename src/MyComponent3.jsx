import React,{useState} from "react"
function MyComponent3()
{
    const[car, setCar]=useState({year:2022, 
                                make:" Suzuki", 
                                model:" Cultus"});

    function handleYearChange(event)
    {
        setCar(c=> ({...c,year:event.target.value}));
    }
    function handleMakeChange(event)
    {   
        setCar(c=>({...c,make: event.target.value}));
    }
    function handleModelChange(event)
    {
        setCar(c=>({...c,model:event.target.value}));
    }
        return(
            <div>
                <p>You favourite car is: {car.year} {car.make}{car.model}</p>
                <input type="number" value={car.year} name="" id="" onChange={handleYearChange}/> <br />
                <input type="text" value={car.make} name="" id=""  onChange={handleMakeChange}/> <br />
                <input type="text" value={car.model} name="" id="" onChange={handleModelChange} />
            </div>
        );

}
export default MyComponent3