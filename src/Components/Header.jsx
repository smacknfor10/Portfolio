import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <img src={assets.profile_img} alt="profile" className='rounded-full w-32' />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Smack <img src={assets.hand_icon} alt="hand-icon" className='w-6' /></h3>
            
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Frontend Web Developer Based in Cameroon.</h1>
            <p className='max-w-2xl mx-auto font-ovo'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-blue-500 text-white flex items-center gap-2'>Contact Me <img src={assets.right_arrow_white} alt="arrow-icon" className='w-4' /></a>
                <a href="/SMACK CV.pdf" download className='px-10 py-3 border rounded-full border-blue-500 flex items-center gap-2'>My Resume <img src={assets.download_icon} alt="arrow-icon" className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header