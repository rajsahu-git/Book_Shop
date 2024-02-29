import Header from "./Header"
import Footer from "./Footer"
import { useRouteError } from "react-router-dom"
const Error_Element = ()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <>
            <Header/>
            <h1 className="flex justify-center my-32 text-4xl text-red-600 animate-bounce">{err.data} <br/> {err.statusText} : {err.status}</h1>
            <Footer />
        </>
    )
}

 export default Error_Element;