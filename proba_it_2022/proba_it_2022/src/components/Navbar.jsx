import { useState } from 'react'
import logo from "../assets/logo.png";
import { modals } from "../constants"

const Navbar = () => {
  return (
     <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="memeit" className='w-[124px] h-[32px]'></img>
        
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {modals.map((nav, index)=> (
            <li 
                key={nav.id}
                classname={'font-Merriweather font-normal cursor-pointer text-[16px] text-black ${index === modals.length - 1 ? mr-0 : mr-10}'}
            >
                <a href={'#${nav.id}'}>
                    {nav.title}
                </a>
            </li>
        ))}


        </ul>
     
     
     
     
     </nav>
   
    

  )
}

export default Navbar