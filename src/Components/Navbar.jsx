import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=> {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50) {
                setIsScroll(true)
            }else {
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <img src={assets.header_bg_color} alt="backgroung" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top"><img src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14'/></a>
                
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white backdrop-blur-lg shadow-sm bg-opacity-50"}font-ovo`}>
                    <li><a href="#top" className='hover:text-blue-500'>Home</a></li>
                    <li><a href="#about" className='hover:text-blue-500'>About Me</a></li>
                    <li><a href="#services" className='hover:text-blue-500'>Services</a></li>
                    <li><a href="#work" className='hover:text-blue-500'>My Work</a></li>
                    <li><a href="#contact" className='hover:text-blue-500'>Contact Me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button><img src={assets.night} alt="night-icon" className='w-6 cursor-pointer'/></button>
                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border text-black border-blue-500 hover:bg-blue-50 rounded-full ml-4'>Contact <img src={assets.arrow_icon} alt="contact" className='w-3' /></a>

                    <button onClick={openMenu} className='block md:hidden ml-3'> <button><img src={assets.menu_black} alt="black-icon" className='w-6'/></button></button>
                </div>
            
                {/*==== Mobile Menu ====*/}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <img src={assets.close_black} alt="close-icon" className='w-5 cursor-pointer' />
                    </div>

                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a onClick={closeMenu} href="#services">Services</a></li>
                    <li><a onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar