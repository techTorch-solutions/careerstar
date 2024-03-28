import React, { useState } from 'react'
import Modal from './Modal'
import Logo from './images/icons/logo.svg'

const ContactModal = ({ open, onClose }) => {
    return (
        <>
            <Modal open={open} onClose={onClose}>
                <div className="flex flex-col md:flex-row">
                    <div className="md:flex min-h-full flex-1 flex-col justify-between px-6 py-4 lg:px-8 hidden">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-1 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Let's Shine Together
                            </h2>
                            
                        </div>

                        <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className='text-xl font-bold mb-4 text-black'>Contact Details</h1>
                            <div className="flex icons font-bold text-black">
                                <i className='fa-solid fa-phone text-lg mr-4'></i>
                                +971 55 8375559
                            </div>
                            <div className="flex icons font-bold text-black">
                                <i className='fa-solid fa-envelope text-lg mr-4'></i>
                                careerstar49@gmail.com
                            </div>
                        </div>
                        <div className="mt-4 flex icons ">
                            <i className="fa-brands fa-facebook-f mr-2 text-2xl "></i>
                            <i className='fa-brands fa-x-twitter mx-2 text-2xl '></i>
                            <i className='fa-brands fa-instagram mx-2 text-2xl' ></i>
                            <i className='fa-brands fa-linkedin mx-2 text-2xl '></i>
                            <i className='fa-brands fa-whatsapp mx-2 text-2xl '></i>
                        </div>
                    </div>

                    <div className="flex md:w-[35vw] w-[80vw] min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-12 bg-buttons rounded-xl">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img src={Logo} className="h-20 p-2 brightness-0 invert m-[auto]" />
                        </div>

                        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="ed48c7b5-a330-43da-985c-298b4d6a78f0" />
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-white  ">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="name"
                                            autoComplete="name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white  ">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                            Message
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <textarea
                                            id="message"
                                            name="message"
                                            type="message"
                                            autoComplete="current-message"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-auto justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-buttons shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default ContactModal