import { useContext } from "react";


const UserContext =()=>{
    useContext({
        user:{
            name:"Dumy name",
            email:"dummy@email.com"
        }
    })
}

export default UserContext