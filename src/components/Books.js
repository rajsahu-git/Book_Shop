import { useEffect, useState } from "react";
import { BOOKS_API } from "../app/items";

function Books() {
  const [booksData, setBooksData] = useState([])
  useEffect(()=>{
    fetch(BOOKS_API).then((data)=>{return data.json()}).then((bookData)=>setBooksData(bookData.items))
  },[])
  return (
    <div className="App grid grid-cols-4 p-8 m-5 ">
      {booksData?.map((item)=>(
      <div className="flex flex-col  items-center w-48 border border-sky-500 m-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <a href='#safd' className="">
        <img src={item?.volumeInfo?.imageLinks?.thumbnail} className="w-40 p-4 " alt="" />
        <h1 className=" truncate w-32" key={item?.id}>{item?.volumeInfo?.title}</h1>
        </a>
      </div>
        
      ))}
      
    </div>
  );
}

export default Books;
