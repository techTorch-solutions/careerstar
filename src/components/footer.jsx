//import React from 'react'
import { useState } from 'react'
import WhatsAppModal from './WhatsAppModal'
import './footer.css'
import { Link } from 'react-router-dom'
import Logo from './images/icons/logo.svg'

const Footer = () => {

    const [open, setOpen] = useState(false)
    const instaLink = "https://www.instagram.com/careerstar_grow?igsh=MTV1ZzFwanlzNDZvag%3D%3D&utm_source=qr"
    const linkedInLink = "https://www.linkedin.com/company/career-star/"
    return (
        <>

            <footer className='flex flex-wrap relative bottom-0 text-white h-full bg-buttons justify-center'>
                <div className='flex w-3/5 h-full p-5'>
                    <div className="flex flex-col md:flex md:flex-row items-start justify-evenly w-full">
                        <div className="contact h-full flex flex-col text-black justify-start items-start mb-5 md:mb-0">
                            <h1 className='text-xl font-bold mb-4'>Contact Details</h1>
                            <div className="flex icons font-bold">
                                <i className='fa-solid fa-phone text-lg mr-4'></i>
                                <a href="tel:  +971 55 8375559">  +971 55 8375559</a>
                            </div>
                            <div className="flex icons font-bold">
                                <i className='fa-solid fa-envelope text-lg mr-4'></i>
                                <a href="mailto:careerstar49@gmail.com"> careerstar49@gmail.com</a>
                            </div>
                            <div className="mt-4 flex icons ">
                                <i className="fa-brands fa-facebook-f mr-2 text-2xl "></i>
                                <i className='fa-brands fa-x-twitter mx-2 text-2xl '></i>
                                <Link to={instaLink} className='fa-brands fa-instagram mx-2 text-2xl' ></Link>
                                <Link to={linkedInLink} className='fa-brands fa-linkedin mx-2 text-2xl '></Link>
                                <i onClick={() => setOpen(true)} className='fa-brands fa-whatsapp mx-2 text-2xl '></i>
                            </div>
                        </div>

                        <div className="contact h-full flex flex-col text-black justify-start">
                            <img src={Logo} className="h-20 p-2  brightness-0 invert" />
                            <div className="flex justify-start icons my-2">
                                <h1 className='font-semibold'>
                                    Privacy Policy | Terms & Conditions
                                </h1>
                            </div>
                            <div className="flex icons my-2">
                                <h1 className='font-semibold'>
                                    Copyright © 2024 Career Star Coaching
                                </h1>
                            </div>
                        </div>

                        <div className="h-full contact flex-col text-black justify-center items-center border-r-2 border-dashed">
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-start mt-5 md:justify-center md:mt-0 w-1/5 text-black font-semibold ">
                    <Link to={'/'} className='text-xl cursor-pointer'>Home</Link>
                    <Link className='text-xl cursor-pointer'>About</Link>
                    <Link to={'/services'} className='text-xl cursor-pointer'>Services</Link>
                </div>
                <div className="techtorch w-full text-black font-semibold md:text-end text-center pr-5 pb-5 pl-5">
                    <Link to="https://techtorch.online" > <h1>Developed by <span className='cursor-pointer inline-block font-bold hover:scale-[105%] hover:px-2 ease-in-out duration-300'>techTorch Solutions</span></h1></Link>
                </div>
            </footer>
            <WhatsAppModal open={open} onClose={() => setOpen(false)} />
        </>
    )
}

export default Footer