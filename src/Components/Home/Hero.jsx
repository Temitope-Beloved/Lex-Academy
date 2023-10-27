import React from 'react'
import homepage1 from '../../assets/homepage1.jpg'
import homepage2 from '../../assets/homepage2.jpg'
import homepage3 from '../../assets/homepage3.png'
const Hero = () => {
  return (
    <div >
      <div className=''>
        <div className=''>
          <h2 className=''>Elevate your learning  with our Tech course</h2>
         
          <p className=''>Joining Lex Design Academy is the parfect way to learn any skill, anywhere. With our state-of-the-art learnig tools and resources, you can master any skill at your own pace</p>
          <button className=''>Start learning now</button>
        </div>
        
        <div className=''>
        <img src={homepage1} alt="" className=''/>
         <div className=''>
         <img src={homepage2} alt="" className='' />
          <img src={homepage3} alt="" className='' />
         </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
