import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'> 
                <p className='font-bold'>THIS VERSION IS STILL UNDER DEVELOPMENT.</p>
            </div> 

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>Copyright {new Date().getFullYear()} Smack. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href='#top'>Github</a></li>
                    <li><a href='#top'>Linkedin</a></li>
                    <li><a href='#top'>Figma</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer