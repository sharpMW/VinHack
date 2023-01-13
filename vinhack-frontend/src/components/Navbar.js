import React from 'react'
import LeftArrow from '../assets/Arrows/left arrow.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <nav className='sticky top-0 z-50 bg-white opacity-97'>
        <div className='mx-auto px-6 py-4 '>
            <div className='flex'>
                <div className='flex'>
                    <img src={LeftArrow}/>
                    <span><Link to='/'>Back to ajio.com</Link></span>
                </div>
                <ul className='flex space-x-4 ml-auto'>
                    <li>Login</li>
                    <li>Help</li>
                    <li>My Cart</li>
                </ul>
            </div>
            <div className=''>

            </div>
        </div>
        <div className='mx-auto px-6 py-4 border'>
            <div className='flex'>
                <div className='font-heading'>
                    Visteria
                </div>
                <ul className='flex space-x-4 ml-[36vw]'>
                    <li><Link to='/wardrobe'>Wardrobe</Link></li>
                    <li><Link to='/trends'>Explore Trends</Link></li>
                </ul>
            </div>
            <div className=''>

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar