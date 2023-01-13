import React from 'react'

const TrendsCard = (props) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-x-4 place-items-center py-5 '>
        {props.details.map((value, index)=>(
          
            <div className='drop-shadow-md p-2 w-fit' key={index}>
            <button className='focus:outline-none focus:ring focus:ring-green-200 '>
                <div className='grid grid-cols-1 focus:ring'>
                    <img src={value.img2} className='' alt=''/>
                </div>
                </button>
            </div>
        ))}
      </div>
    </>
  )
}

export default TrendsCard