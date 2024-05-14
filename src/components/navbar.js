import React from 'react'
import Logo from '../assets/images/logo.png'
import ArrowRight from '../assets/images/arrow-right.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container px-0 py-5 absolute z-10 top-0">
            <div className="px-[160px] grid grid-cols-2">
                <div className='flex  items-center'>
                    <ul className="flex flex-row h-10 items-center">
                        {/* <li><img src={Logo} className='w-full' alt="" /></li>
                        <li><NavLink to={""} className={"mx-5"}>Home</NavLink></li>
                        <li><NavLink to={"about"}>About Us</NavLink></li> */}
                        <li><img src={Logo} className='w-full' alt="" /></li>
                        <li><a href={"/"} className={"mx-5"}>Home</a></li>
                        <li><a href={"/about"}>About Us</a></li>
                    </ul>
                </div>
                <div className='items-center  justify-end flex flex-row  px-2 py-0'>
                    <span className='bg-[#030734] rounded-[60px]  text-white px-[20px] py-[18px] w-[auto] flex'>{`Get the app`} <img src={ArrowRight} alt="" /></span>
                </div>
            </div>
        </div>
    )
}
export default Navbar;