import React from 'react'
import Card from './TrendsCard'
import Data from '../data/TrendsCardData'

const Trend = () => {
  return (
    <div className='min-h-min'>
      <div class=""> 
        <Card details={Data}/>
      </div>
    </div>
  )
}

export default Trend