import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b7326161-78e2-4e40-b2bf-46c7bc036698");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-2 font-ovo'>Please feel free to contact me! For any questions or comments, please use the form below.</p>

            {/*==== Form Information ====*/}
            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 mb-8 gap-6'>
                    <input type="text" placeholder='Enter Your Name...' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
                    <input type="email" placeholder='Enter Your Email...' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <textarea rows='6' placeholder='Enter Your Message...' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
                <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-blue-700 text-white rounded-full mx-auto hover:bg-blue-600 duration-500 cursor-pointer'>{result ? result : "Submit Now"} <img src={assets.right_arrow_white} alt="arrow-right" className='w-4' /></button>

            </form>
        </div>
    )
}

export default Contact