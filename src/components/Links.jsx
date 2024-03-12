/* eslint-disable no-unused-vars */
import  { useState } from 'react'
import { Link } from 'react-router-dom'
const Links = () => {

    return (
        <>
            <Link className='my-3 mx-16 md:m-0' to={'/'}>Home</Link>
            <Link className='my-3 mx-16 md:m-0'>About</Link>
            <Link className='my-3 mx-16 md:m-0'>Services</Link>
            <Link className='bg-buttons my-3 mx-16 md:m-0 font-semibold text-black px-2 rounded-lg'>Contact Us</Link>
        </>
    )
}
// eslint-disable-next-line react/prop-types
const NavLinks = ({ open, setOpen }) => {
    const toggleNav = () => {
        setOpen(!open)
    }
    return (
        <>
            <nav className='w-1/3'>
                <div className='hidden md:flex justify-between'>
                    <Links />
                </div>
                <div onClick={toggleNav} className='md:hidden flex justify-end'>
                    {open ? <i className="fa-solid fa-x"></i> :
                        <i className="fa-solid fa-bars"></i>
                    }
                </div>
            </nav>

            {open && (
                <div className='md:hidden flex basis-full flex-col items-start'>
                    <Links />
                </div>
            )}
        </>
    )
}
export default NavLinks