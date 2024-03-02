import { BookApi } from "../app/useApiFetch";
import { Link } from "react-router-dom";

function Books() {
  const booksData = BookApi()
  return (
    <div className="App grid grid-cols-4 p-8 m-5 ">
      {booksData?.map((item)=>(
      <div key={item.id} className="flex flex-col  items-center w-48 border border-sky-500 m-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
        <Link to={"book_details/"+item.id} className="">
        <img src={item?.volumeInfo?.imageLinks?.thumbnail} className="w-40 p-4 " alt="" />
        <h1 className=" truncate w-32" key={item?.id}>{item?.volumeInfo?.title}</h1>
        </Link>
      </div>
        
      ))}
      
    </div>
  );
}

export default Books;
