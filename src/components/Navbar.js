import React from 'react'
import NavLinks from './Links'
const Navbar = () => {
    return (
        <header className='font-poppins flex justify-around items-center text-white top-0 sticky flex-wrap min-h-20 h-auto bg-gradient-to-b from-start to-customTeal'>
            <div>

                <h1 className='text-2xl font-semibold'>Career Star</h1>
            </div>
            <NavLinks />
        </header>
    )
}

export default Navbar