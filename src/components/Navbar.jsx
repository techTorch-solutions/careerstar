import  { useState } from 'react'
import NavLinks from './Links'
import Logo from './images/icons/logo.svg'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className={`ease-in-out duration-700  flex justify-around items-center text-white top-0 sticky flex-wrap ${open ? 'min-h-72' : 'min-h-20'} bg-gradient-to-b from-start to-customTeal z-50`}>
            <div>
              <a href="/"> <img src={Logo} className="h-20  p-2" /></a>
            </div>
            <NavLinks open={open} setOpen={setOpen} />
        </header>
    )
}

export default Navbar