import React from "react";
import Logo from "./assets/image/Logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


function Footer() {
  return (
    <div className="grid border-b-indigo-950 ">
      <div className="grid grid-cols-8 mb-6">
        <div className="flex flex-col items-center col-span-4">
          <div className=" px-10 col-span-2 flex justify-center">
            <img className="w-2/4" src={Logo} alt="Logo" />
          </div>
          <div className="flex justify-center"> 
            <p className="w-2/3  px-2 mx-2 text-xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              dignissimos nihil veritatis sit nisi deleniti dolor sint molestias
              ipsum ullam.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
            <ul >
                <li className="p-4 font-semibold text-xl ">Information</li>
                
                <li className=" p-4"> <a className="hover:text-pink-800" href="#About us">☑ About us</a></li>

                
                <li className=" p-4"><a className="hover:text-pink-800" href="#wish list">☑ Wish List</a> </li>
                
                
                <li className=" p-4"><a className="hover:text-pink-800" href="#return">☑ Return</a></li>
                
                
                <li className=" p-4"> <a className="hover:text-pink-800" href="#Privacy">☑ Privacy Policy</a></li>
                
            </ul>
        </div>
        <div className=" col-span-2 flex flex-col justify-center">
            <ul>
                
                <li className="p-4 font-semibold text-xl">Quick Links</li>
                <a href="#Faccebook">
                    <li className=" p-4 transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110  duration-300 "><FaSquareFacebook className="transition ease-in-out w-32 h-6" /></li>
                </a>
                <a href="#X">
                    <li className="p-4 w-28"><RiTwitterXLine className="w-32 h-6" /></li>
                </a>
                <a href="#Instagram">
                    <li className="p-4 w-28"><FaInstagram className="w-32 h-6" /></li>
                </a>
                <a href="#Main">
                    <li className="p-4 w-28"><MdAlternateEmail className="w-32 h-6" /></li>
                </a>
            </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-center">
        <div className="my-2 px-10" > Copyright BooksShop © 2024-25 </div>
      </div>
    </div>
  );
}
export default Footer;
