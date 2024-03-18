/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from './ContactModal'
import WhatsAppModal from './WhatsAppModal'
import { useNavigate, useLocation } from 'react-router-dom';

const Links = (aboutRef) => {
    const [open, setOpen] = useState(false)

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === '/services') {
          navigate('/');
        } else if (location.pathname === '/') {
          aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Link className='my-3 mx-16 md:m-0' to={'/'}>Home</Link>
            <Link className='my-3 mx-16 md:m-0' to={'#about'} onClick={handleClick} >About</Link>
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