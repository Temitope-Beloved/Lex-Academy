import React from 'react'
import homepage1 from '../assets/homepage1.jpg'
import homepage2 from '../assets/homepage2.jpg'
import homepage3 from '../assets/homepage3.png'

const Hero = () => {
  return (
    <div>
      <div className='flex justify-around mx-5 p-2'>
        <div className='text-left teacking-wider '>
          <h2 className='font-semibold text-2xl'>Elevate your learning experiences with our Tech course</h2>
          <p>Joining Lex Design Academyis the parfect way to learn any skill, anywhere.With our state-of-the-art learnig tools and resources, you can master any skill at your own pace</p>
          <button>start learning now</button>
        </div>
        
        <div className='flex flex-row items-center gap-3'>
        <img src={homepage1} alt="" className='w-[200px]'/>
         <div className='flex flex-col w-[400px] h-auto gap-3 rounded-xl'>
         <img src={homepage2} alt="" />
          <img src={homepage3} alt="" />
         </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
