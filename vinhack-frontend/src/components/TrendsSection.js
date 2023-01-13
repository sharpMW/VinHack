import React from 'react'
import TrendyStylesImg from '../assets/alvin-mahmudov-ZHmES480_XE-unsplash.jpeg'
import StyleInARImg from '../assets/hunters-race-hNoSCxPWYII-unsplash.jpeg'
import YourWardrobeImg from '../assets/austin-wade-d2s8NQ6WD24-unsplash.jpeg'

const StyleSection = () => {
  return (
    <>
        <div className='grid grid-cols-2 max-h-screen'>
            <div className='bg-slate-200 max-h-screen overflow-hidden'><img className='object-contain' src={TrendyStylesImg}/></div>
            <div className='grid grid-rows-2 max-h-screen overflow-hidden'>
                <div className='bg-slate-600'><img className='object-contain' src={StyleInARImg}/></div>
                <div className='bg-slate-800 h-48 max-h-1'><img className='object-cover' src={YourWardrobeImg}/></div>
            </div>
        </div>
    </>
  )
}

export default StyleSection