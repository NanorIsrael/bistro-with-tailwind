import React from 'react'

function Header() {
    return (
            <nav className={'text-right'}>
                <div className={'mt-8 mb-4 flex justify-between md:block'}>
                    <img src="/logo192.png" alt={"navbrand"}  className={"w-20 h-20 hidden md:block md:float-right md:mr-2 md:mb-8 md:mt-4"}/>

                    <h1 className={"font-bold uppercase px-4 md:mt-6"}>
                        Gv Tech
                    </h1>
                    <div className={'px-4 cursor-pointer justify-end md:hidden'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
                <ul className="text-gray-600 mt-6 hidden md:block">
                    <li className="nav-item font-bold text-gray-700 py-1">
                        <a href={'/'} className={'px-4 flex justify-end md:border-r-4 md:border-primary bg-gray-100'}>
                            <span>Home</span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </a>
                    </li>
                    <li className="nav-item py-1"><a href={'/'} className={'px-4 flex justify-end md:border-r-4 md:border-white'}>
                        <span>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </a></li>
                    <li className="nav-item py-1">
                        <a href={'/'} className={'px-4 flex justify-end md:border-r-4 md:border-white'}>
                            <span>Contact</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </a></li>
                </ul>
            </nav>
    )
}

export default Header;