import React from 'react'
import rectangle from '../../assets/rectangle.jpg'

const OfferSection = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center'>
      <h1 className='font-semibold text-2xl '>What We Offer</h1>
      <div >
        <section className='border-2 border-gray-500 w-[40vh] rounded-lg bg-white/10'>
            <img src={rectangle} alt="rectangle" />
            <h1> Hands on learning</h1>
            <p>We enable students to work on practical projects and real-world application. We also ensure interactive tasks in all of the courses to actively include the students in the learning process. These activities may include tests, coding challenges, design simulations, or problem-solving exercises that solidify understanding and foster critical thinking.</p>
        </section>
      </div>
      <div  className='border-2 border-gray-500 w-[40vh] rounded-lg bg-white/10'>
        <img src={rectangle} alt="" />
        <h1>Comprehensive curriculum</h1>
        <p>Our curriculum is designed to provide students with a well-rounded understanding of their chosen field. We cover the core concepts and fundamental principles and it is designed in a progressive manner, building upon foundational knowledge and gradually introducing more advanced topics to ensure that students develop a strong knowledge.</p>
      </div>
      <div  className='border-2 border-gray-500 w-[40vh] rounded-lg bg-white/10'>
        <img src={rectangle} alt="" />
        <h1>Supportive community</h1>
        <p>Our website has a dedicated community platform that allows for easy communication, relevant discussions, and support for our students. It also serves as interactive venues for these students to reach out with instructors, esquire about course-related issues, share ideas, and benefit from the collective knowledge of their fellow students.</p>
      </div>
      <div  className='border-2 border-gray-500 w-[40vh] rounded-lg bg-white/10'>
        <img src={rectangle} alt="" />
        <h1>Certificate of completion</h1>
        <p>Students who successfully complete our tech courses will earn a Certificate of Completion. This certificate acknowledges their achievement and validates the abilities they learned throughout the course. This can be helpful when showing talents to potential clients or employers and can open doors to new opportunities in the industry.</p>
      </div>
    </div>
  )
}

export default OfferSection
