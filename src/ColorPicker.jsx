import React,{useState} from "react";
function ColorPicker()
{
    function handleColorChange(event)
    {
        setColor(event.target.value);
    }
    const [color, setColor]=useState("#ffffff");

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>

            </div>
            <label htmlFor="">Select a color</label>
            <input type="color" name="" id="" value={color} onChange={handleColorChange} />
        </div>
    );
}
export default ColorPicker;