import { useState } from 'react'

const Navbar = () => {

    const [mobileMenuPressed, setMobileMenuPressed] = useState(false)

    return (
        <div className='font-mono flex  lg:w-9/12 m-auto md:p-14 text-gray'>
            <div className="flex flex-col items-center p-2 md:hidden">
                <button onClick={() => setMobileMenuPressed(!mobileMenuPressed)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>

                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {mobileMenuPressed && (
                <div className="sm:hidden absolute left-16 top-2 bg-inputGrey rounded-lg" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div>
            )}

            <div className='hidden md:flex space-x-12 border-solid'>
                <button className='focus:outline-none hover:text-white'>About</button>
                <button className='focus:outline-none hover:text-white'>Gallery</button>
                <button className='focus:outline-none hover:text-white'>Pricing</button>
                <button className='focus:outline-none hover:text-white'>FAQ</button>
                <button className='focus:outline-none hover:text-white'>Benefits</button>
            </div>

            <div className='hidden md:flex ml-auto space-x-12 border-solid'>
                <button className='focus:outline-none hover:text-white'>Sign in</button>
                <button className='focus:outline-none hover:text-white'>Sign Up</button>
            </div>
        </div>
    )
}


export default Navbar;