import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/CartSlice";
import { clearCart } from "./utils/CartSlice";

const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const removeItems = (cartItems)=>{
        dispatch(removeItem(cartItems))
    }  
    const clearCarts=()=>{
        dispatch(clearCart())
    }  

    return(
        <>
            <button className="p-4 my-4 ml-3 border border-violet-600" onClick={()=>{clearCarts()}}>Clear Cart</button>
            <div className="flex">
                {cartItems.map((data)=>(
                    <div className="flex flex-col" key={data.id}>
                        <div className="border border-gray-700 m-4 pb-2.5">
                            <div className="flex justify-center">
                                <img className="w-3/4 pt-8 pb-4 h-60"  src={data.volumeInfo.imageLinks.thumbnail} alt="" />
                            </div>
                            <h1 className="w-52 px-6 pb-2 font-light text-sm">
                                {data.volumeInfo?.title}
                            </h1>
                        </div>

                        <button className="border border-violet-800 m-4" onClick={()=>{removeItems(data)}}>Remove</button> 
                    </div>
                    ))}            
            </div>
        </>
    )
}

export default Cart;