import React, { useState } from 'react'
import NavLinks from './Links'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className={`ease-in-out duration-700 font-poppins flex justify-around items-center text-white top-0 sticky flex-wrap ${open ? 'min-h-72' : 'min-h-20'} bg-gradient-to-b from-start to-customTeal`}>
            <div>
                <h1 className='text-2xl font-semibold'>Career Star</h1>
            </div>
            <NavLinks open={open} setOpen={setOpen} />
        </header>
    )
}

export default Navbar