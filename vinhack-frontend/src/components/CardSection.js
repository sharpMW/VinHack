import React from 'react'
import Card from './WardrobeCard'
import Data from '../data/CardData'


const CardSection = () => {
  return (
    <div className='min-h-screen grid grid-cols-3 gap-4 mt-14'><Card details={Data}/></div>
  )
}

export default CardSection