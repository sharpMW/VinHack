import React from 'react'
import Logo from '../assets/ajio-logo.svg'
import Search from '../assets/search.svg'
import Ajio from '../assets/home-2.jpg'
import { Link } from 'react-router-dom'
const myntra = () => {
  return (
    <>
        <nav className='flex items-center gap-24 pt-2 w-100vw'>
            <img src={Logo} alt='logo' className='lg:w-32 p-4'/>
            <ul className='flex lg:gap-8 sm:gap-4 sm:text-sm'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>INDIE</li>
                <li>HOME & KITCHEN</li>
            </ul>
            <div className='bg-gray-200 rounded-full'>
                <div className='px-6 py-2 flex gap-9'>
                    <img src={Search}/>
                    <span className='text-gray-400'>Search</span>
                </div>
            </div>
            <div className='absolute top-2 right-12 p-0'>
                <ul className='flex flex-row text-sm gap-4'>
                    <li className='p-2'>
                        Sign in / Join AJIO
                    </li>
                    <li className='p-2'>
                        Customer Care
                    </li>
                    <li className='bg-stone-800 text-white rounded-md p-2'>
                    <button>
                    <Link to='/wardrobe'>
                        Experience Visteria
                        </Link>
                    </button>
                    </li>
                </ul>
            </div>
        </nav>
        <div>
            <img className='w-100vw' src={Ajio}/>
        </div>
    </>
  )
}

export default myntra