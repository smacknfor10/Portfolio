import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <img src={assets.profile_img} alt="profile" className='rounded-full w-32' />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Smack <img src={assets.hand_icon} alt="hand-icon" className='w-6' /></h3>
            
            <h1 className='text-3xl sm:text-6xl lg:text-[60px] font-ovo'>Frontend Web Developer Based in Cameroon.</h1>
            <p className='max-w-2xl mx-auto font-ovo'>I am a frontend developer from from Yaounde, Cameroon with 2 years of experience in web development and I like to design interactive user interfaces.</p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="/SMACK CV.pdf" target="_blank" className='px-10 py-3 border rounded-full border-white bg-blue-700 text-white flex items-center gap-2'>Wiew the CV</a>
                <a href="/SMACK CV.pdf" download className='px-10 py-3 border rounded-full border-blue-700 flex items-center gap-2 hover:bg-blue-50'>My Resume <img src={assets.download_icon} alt="arrow-icon" className='w-4' /></a>
            </div>
        </div>
    )
}

export default Header