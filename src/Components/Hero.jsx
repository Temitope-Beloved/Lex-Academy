import React from 'react'
import homepage1 from '../assets/homepage1.jpg'
import homepage2 from '../assets/homepage2.jpg'
import homepage3 from '../assets/homepage3.png'

const Hero = () => {
  return (
    <div >
      <div className='flex justify-around   '>
        <div className='text-left teacking-wider  '>
          <h2 className='font-semibold tracking-wider leading-14 text-5xl lg:w-[400px] md:w-[400px] pb-8    lg:text-5xl'>Elevate your learning  with our Tech course</h2>
         
          <p className='text-left text-md tracking-wider leading-relaxed max-w-[450px]  font-poppins pb-4 text-[#444]'>Joining Lex Design Academy is the parfect way to learn any skill, anywhere. With our state-of-the-art learnig tools and resources, you can master any skill at your own pace</p>
          <button className='bg-secondary rounded-md text-white text-lg font-semibold  p-3'>Start learning now</button>
        </div>
        
        <div className='flex flex-row items-center gap-3 '>
        <img src={homepage1} alt="" className='lg:w-[290px]'/>
         <div className='flex flex-col lg:w-[280px] h-auto gap-3 rounded-xl'>
         <img src={homepage2} alt="" className='lg:w-' />
          <img src={homepage3} alt="" className='lg:w-' />
         </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
