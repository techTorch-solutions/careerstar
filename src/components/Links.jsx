/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from './ContactModal'
import WhatsAppModal from './WhatsAppModal'
const Links = () => {
    const scrollToService = () => {
        const serviceElement = document.getElementById('aboutme');
        const offset = 50; // Adjust this value as needed

        if (serviceElement) {
            const topPos = serviceElement.getBoundingClientRect().top;
            window.scrollTo({
                top: window.pageYOffset + topPos - offset,
                behavior: 'smooth',
            });
        }
    };
    const [open, setOpen] = useState(false)
    return (
        <>
            <Link className='my-3 mx-16 md:m-0' to={'/'}>Home</Link>
            <Link className='my-3 mx-16 md:m-0' onClick={() => scrollToService()}>About</Link>
            <Link className='my-3 mx-16 md:m-0' to={'/services'}>Services</Link>
            <Link onClick={() => setOpen(true)} className='bg-buttons my-3 mx-16 md:m-0 font-semibold text-black px-2 rounded-lg'>Contact Us</Link>
            <ContactModal open={open} onClose={() => setOpen(false)} />
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
                    {open ? <i className="fa-solid fa-x  text-white"></i> :
                        <i className="fa-solid fa-bars text-white"></i>
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