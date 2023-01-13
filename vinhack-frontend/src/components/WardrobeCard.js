import React from 'react'
import img from '../assets/t-shirt1.jpg'
const WardrobeCard = (props) => {
  return (
    <>
      {props.details.map((value, index)=>(
        <div className='text-center max-w-xl mx-auto  overflow-hidden' key={index}>
            <img src={value.img} className='mx-auto object-cover max-h-96' alt=''/>
            <div className='flex flex-col align-middle justify-items-center'>
              <span>
                  {value.name}
              </span>
              <span>
                {value.color}
              </span>
            </div>
        </div>
      ))}
    </>
  )
}

export default WardrobeCard