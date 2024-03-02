import {  createContext, useState } from "react";
// import Cart from "./Cart";

export const Carts = createContext()

const UserContext = ({children}) =>{
    const [cart, setCart] = useState([])
    
    return <Carts.Provider value={{cart, setCart}}>{children}</Carts.Provider>
}
export default UserContext