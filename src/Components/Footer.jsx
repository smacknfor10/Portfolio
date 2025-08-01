import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'> 
                <img src={assets.logo} alt="logo" className='w-36 mx-auto mb-2' />
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <img src={assets.mail_icon} alt="logo" className='w-6' />smacknfor1@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>Copyright {new Date().getFullYear()} Smack. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href='https://github.com/smacknfor10' className='hover:text-blue-500'>Github</a></li>
                    <li><a target='_blank' href='https://www.linkedin.com/in/smack-nfor-97b761315/' className='hover:text-blue-500'>Linkedin</a></li>
                    <li><a target='_blank' href='https://www.figma.com/files/team/1442927608128948927/recents-and-sharing?fuid=1442927606344470573' className='hover:text-blue-500'>Figma</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer