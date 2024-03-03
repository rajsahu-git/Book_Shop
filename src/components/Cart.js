import { useSelector } from "react-redux";


const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)    
    console.log(cartItems)
    return(
        <div >
            {cartItems.map((data)=>(
               <h1 className="flex flex-row">
                   {data.volumeInfo?.title}
               </h1> 
                ))}            
        </div>
    )
}

export default Cart;