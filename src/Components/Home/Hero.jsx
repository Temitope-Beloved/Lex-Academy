import React from 'react'
import homepage1 from '../../assets/homepage1.jpg'
import homepage2 from '../../assets/homepage2.jpg'
import homepage3 from '../../assets/homepage3.png'
const Hero = () => {
  return (
    <div >
      <div className='flex justify-center gap-[20rem] items-center tracking-wider leading-loose mx-7 h-screen'>
        <div className=''>
          <h2 className='w-[400px] font-semibold lg:text-5xl mb-6'>Elevate your learning  with our Tech course</h2>
         
          <p className='w-[400px] text-justify pb-6 '>Joining Lex Design Academy is the parfect way to learn any skill, anywhere. With our state-of-the-art learnig tools and resources, you can master any skill at your own pace</p>
          <button className=' border-2 bg-secondary lg:text-xl p-3 text-white rounded-md'>Start learning now</button>
        </div>
        
        <div className='flex items-center gap-4'>
        <img src={homepage1} alt="" className=' '/>
         <div className='flex flex-col gap-4 '>
         <img src={homepage2} alt="" className=' lg:w-[300px]' />
          <img src={homepage3} alt="" className=' lg:w-[300px]' />
         </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
