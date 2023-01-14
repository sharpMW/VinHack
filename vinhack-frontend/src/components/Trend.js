import React, { useEffect, useState } from 'react'
import TrendsCard from './TrendsCard'
import Data from '../data/TrendsCardData'
import axios from 'axios'


const Trend = () => {
  const [data, setData] = useState([])
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    axios.post('http://localhost:5000/').then((res) => {
      console.log(res);
      setData(res.data)
    }).catch((err) => console.log(err)).finally(() => setLoading(false))
  },[])
  return (
    <div className='min-h-min'>
      {
        loading ?
        <div className='italic text-center min-h-screen mt-[40vh] text-lg'> Style is a way to say who you are without having to speak. —Rachel Zoe<br/>
        <span className='font-medium text-sm text-gray-600'>Please wait while we fetch your recommendations</span>
        </div>
        : <div class="">
        {data && <TrendsCard details={data}/>}
      </div>
      }
    </div>
  )
}

export default Trend