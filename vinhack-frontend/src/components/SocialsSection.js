import React from 'react'

const SocialsSection = () => {
  return (
    <div className='grid grid-row min-h-screen text-center'>
        <h1 className='font-heading text-[72px] pt-16'>Visteria</h1>
        <p className='align-middle'>JOIN OUR NEWSLETTER</p>
        <div className='grid grid-cols-4 gap-16 max-w-xl m-auto'>
            <p>INSTAGRAM</p>
            <p>PINTEREST</p>
            <p>TWITTER</p>
            <p>YOUTUBE</p>
        </div>
    </div>
  )
}

export default SocialsSection