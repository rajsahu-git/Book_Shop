import { useEffect, useState } from "react"
import { BOOKS_API, BOOK_DETAILS_API } from "./items"

export const BookApi = () => {
    const [book, SetBook] = useState()
    useEffect(()=>{
        fetch(BOOKS_API).then((book)=>book.json()).then((data)=>SetBook(data.items))
    },[])
    return book
}

export const BookDetailsApi = (id)=>{
    const [bookDeatail,setBookDetail] = useState()
    useEffect(()=>{
        fetch(BOOK_DETAILS_API+id).then((bookDeatailData)=>bookDeatailData.json()).then((data)=>{setBookDetail(data)})
    },[id])
    return bookDeatail
}