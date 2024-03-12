//import React from 'react'
import './footer.css'

const Footer = () => {
  
    return (
        <>
        
        <footer  className='flex flex-wrap relative bottom-0 text-white h-full bg-buttons justify-center'>
            <div className='flex w-3/5 h-full p-5'>
                <div className="flex flex-col md:flex md:flex-row items-start justify-evenly w-full">
                    <div className="contact h-full flex flex-col text-black justify-start items-start mb-5 md:mb-0">
                        <h1 className='text-xl font-bold mb-4'>Contact Details</h1>
                        <div className="flex icons font-bold">
                            <i className='fa-solid fa-phone text-lg mr-4'></i>
                            1234567891
                        </div>
                        <div className="flex icons font-bold">
                            <i className='fa-solid fa-envelope text-lg mr-4'></i>
                            john@gmail.com
                        </div>
                        <div className="mt-4 flex icons ">
                            <i className="fa-brands fa-facebook-f mr-2 text-2xl "></i>
                            <i className='fa-brands fa-x-twitter mx-2 text-2xl '></i>
                            <i className='fa-brands fa-instagram mx-2 text-2xl' ></i>
                            <i className='fa-brands fa-linkedin mx-2 text-2xl '></i>
                            <i className='fa-brands fa-whatsapp mx-2 text-2xl '></i>
                        </div>
                    </div>

                    <div className="contact h-full flex flex-col text-black justify-start">
                        <h1 className='uppercase text-xl font-bold mb-2 text-white underline underline-offset-8'>
                            Career Star
                        </h1>
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
                <h1 className='text-xl cursor-pointer'>Home</h1>
                <h1 className='text-xl cursor-pointer'>About</h1>
                <h1 className='text-xl cursor-pointer'>Services</h1>
            </div>
            <div className="techtorch w-full text-black font-semibold text-end pr-5 pb-5 pl-5">
                <h1>Developed by <span className='cursor-pointer inline-block font-bold hover:scale-110 ease-in-out duration-300'>techTorch Solutions</span></h1>
            </div>
        </footer>
        </>
    )
}

export default Footer