import React from 'react'
import image from '../../assets/image.jpg'

const HomeSection = () => {
  return (
    <div className='flex mx-8 justify-around items-center '>
      <div>
        <img src={image} alt="image" />
      </div>
      <div>
      <h1 className='text-3xl font-semibold text-left tracking-wider leading-snug mb-6'>Discover who we are as a design academy</h1>
       <p className='w-[400px] custom text-lg tracking-wider pb-6'>We are a leading online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings.</p>
       <button className='text-secondary border-2 p-2 rounded-md border-secondary text-lg custom-font font-semibold hover:text-white hover:bg-secondary ease-in duration-300 lg:padding-4'>Read more</button>
      </div>
    </div>
  )
}

export default HomeSection
