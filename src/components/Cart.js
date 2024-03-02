import { Carts } from "./UserContext";
import { useContext } from "react";
// import { BookDetailsApi } from "../app/useApiFetch";
const Cart = () =>{
    const {cart} = useContext(Carts)
    console.log(cart)
    // const arr = []
    // const addItem = arr.push(cart)
    // console.log(typeof(addItem))
    // console.log(addItem)
    return(
        <div>
            
        </div>
    )
}

export default Cart;