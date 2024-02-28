import Logo from './assets/image/Logo.png'
import { useState } from 'react';
const Header = () =>{
    const [searchItem, setSearchItem] = useState("")
    return (
        <div className="Header flex flex-col ">
            <div className="flex mx-8 mt-4 mb-1">
                
                <img className=' hover:animate-bounce h-28 w-48 px-8'  src={Logo} alt={searchItem} />
                <span className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 flex justify-center items-center  w-full' >
                    <input className='  border-4 w-3/4 h-14 ' type="text" placeholder='  Search' onChange={(e)=>{setSearchItem(e.target.value)}} value={searchItem} />
                    <button className='px-4 py-1.5 h-14  bg-slate-500 ' >Search</button>
                </span>
                <span className='transition duration-700 ease-in-out cursor-default flex justify-center items-center w-1/5' >cart</span>
                <span className='w-1/5 flex justify-center items-center'>user</span>
            </div>
            <hr className='bg-red-700' />
            <div>
                <nav>
                    <ul className='flex my-6 mx-8'>
                            
                            <li className='p-2 pb-4  pl-12 ml-2 '><a className='hover:text-pink-800' href="#home">Home {searchItem}</a></li>
                        
                        
                            <li className='p-2 pb-4  pl-12 ml-2'><a className='hover:text-pink-800' href="#Shop">Shop</a></li>
                        
                        
                            <li className='p-2 pb-4  pl-12 ml-2'><a className='hover:text-pink-800' href="#Blog">BLog</a></li>
                        
                        
                            <li className='p-2 pb-4  pl-12 ml-2'><a className='hover:text-pink-800' href="#Contact">Contact</a></li>
                        
                        
                            <li className='p-2 pb-4  pl-12 ml-2'><a className='hover:text-pink-800' href="#About us">About US</a></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;