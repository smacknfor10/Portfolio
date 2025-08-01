import React from 'react'
import { assets, serviceData } from '../assets/assets'

const Services = () => {
    return (
        <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>What I Offer</h4>
            <h2 className='text-center text-5xl font-ovo'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-2 font-ovo'>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
        
            {/*==== My Services ====*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
                {serviceData.map(({icon, title, description, link }, index)=>(
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                        <img src={icon} alt="icon" className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={link}>Read More <img src={assets.right_arrow} alt="arrow-right-icon" className='w-4' /></a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services