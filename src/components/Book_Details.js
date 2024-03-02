import { useParams } from "react-router-dom";
import { BookDetailsApi } from "../app/useApiFetch";
// import Cart from "./Cart";
// import UserContext from "./UserContext";
import { useContext } from "react";
import { Carts } from "./UserContext";
// import { set } from "sanity";

const Books_Details = () =>{
    const {id} = useParams()
    const bookDetails = BookDetailsApi(id)
    const {setCart}= useContext(Carts)
    
    return (
        <div className="flex">
        <div className="flex w-1/2 justify-center border border-sky-700 m-8">
            <img src={bookDetails?.volumeInfo.imageLinks.medium} className="w-2/3 p-8" alt="" />
        </div>
            <div className="flex flex-col w-1/2 mt-8">
                <div>
                    <h1 className="text-xl font-semibold px-2">{bookDetails?.volumeInfo?.title}</h1>
                    <span className="p-1">
                        <p className="px-2 text-lg ">Author:</p>
                        {bookDetails?.volumeInfo?.authors?.map((author,i)=>(
                            <h1 key={i+1} className="pl-6 pb-2 text-base font-extralight">✺ {author}</h1>
                        ))}
                    </span>
                    <h3 className="text-sm  p-2 " ><span className="text-base"> Publisher :</span>     {bookDetails?.volumeInfo?.publisher}</h3>
                    <h5 className="p-4">Books Tag: {bookDetails?.volumeInfo?.categories.map((categorie,i)=>(
                        <span key={i} className="px-4 font-light text-sm">#{categorie}</span>
                    ))}</h5>
                    <p className="p-2  text-clip">Description: <span className="font-light text-center text-sm">{bookDetails?.volumeInfo?.description}</span></p>
                </div>
                <div className="flex  h-20">
                    <button onClick={()=>{setCart(id)}} className="m-2 hover:bg-emerald-400 border w-full border-emerald-700">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Books_Details;