import React from 'react'
import { assets, infoList, toolsData } from '../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <img src={assets.user_image} alt="user" className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>Second-year student at Kelden University. I enjoy designing user interfaces, developing web applications, and contributing to innovation in everyday problems facing society. I have already participated in several academic, professional, and personal projects.</p>
                
                    {/*==== Card-Information ====*/}
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=> (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <img src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    {/*==== My Tools ====*/}
                    <h4 className='my-6 text-gray-700 font-ovo'>Tools I Use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index)=>(
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <img src={tool} alt="Tool" className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About