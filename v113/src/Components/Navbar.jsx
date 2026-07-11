import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex text-white bg-slate-500 justify-between py-3'>
            <div className="logo">
                <span className=' font-bold text-xl mx-15'>iTask</span>

            </div>


            <ul className='flex gap-8 mx-15'>
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your task</li>
            </ul>



        </nav>
    )
}

export default Navbar
