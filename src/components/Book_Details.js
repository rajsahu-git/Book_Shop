import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { BOOK_DETAILS_API } from "../app/items";


const Books_Details = () =>{
    const {id} = useParams()
    console.log(id)
    const [bookDetails, setBookDetails] = useState()
    useEffect(()=>{
        fetch(BOOK_DETAILS_API + id).then((bookDetails)=>bookDetails.json()).then((data)=>setBookDetails(data))
    },[id])

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
                            <h1 className="pl-6 pb-2 text-base font-extralight">✺ {author}</h1>
                        ))}
                    </span>
                    <h3 className="text-sm  p-2 " ><span className="text-base"> Publisher :</span>     {bookDetails?.volumeInfo?.publisher}</h3>
                    <h5 className="p-4">Books Tag: {bookDetails?.volumeInfo?.categories.map((categorie)=>(
                        <h5 className="px-4 font-light text-sm">#{categorie}</h5>
                    ))}</h5>
                    <p className="p-2  text-clip">Description: <span className="font-light text-center text-sm">{bookDetails?.volumeInfo?.description}</span></p>
                </div>
                <div className="flex  h-20">
                    <button className="m-2 hover:bg-emerald-400 border w-full border-emerald-700">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default Books_Details;