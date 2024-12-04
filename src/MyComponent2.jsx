import React,{useState} from "react"
function MyComponent2()
{
    const [name,setName]=useState("Guest");
    const [quantity, setQuantity]=useState(1);
    const [comment,setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [shipping, setShipping]=useState("Delivery");

    function handleShippingChange(event)
    {
        setShipping(event.target.value);
    }
    
    function handleCommentChange(event)
    {
        setComment(event.target.value);
    }

    function handlePaymentChange(event)
    {
        setPayment(event.target.value);
    }
    function handleNameChange(event)
    {
        setName(event.target.value)
    }
    function handleQuantityChange(event)
    {
        setQuantity(event.target.value);
    }
    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea name="" value={comment} onChange={handleCommentChange}  placeholder="Enter delivery Instructions" id=""></textarea>
            <p>Comment {comment}</p>
            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            <label htmlFor="">Pick Up
                <input type="radio" name="" id="" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}/>
            </label> <br />
            <label htmlFor="">Delivery
            <input type="radio" name="" id="" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    );
}
export default MyComponent2