import React from 'react'
import hero1 from '../images/Hero_img.png'
import wpIcon from '../images/icons/Group.png'
import calIcon from '../images/icons/calendar-clock.png'
import teamImg from '../images/about-our-team.png'
import vipImg from '../images/being-vip.png'
import boxImg from '../images/Group.png'
import meditateImg from '../images/meditation-yaga.png'
import hero2 from '../images/hero2.png'

export default function Home() {
  return (
    <>
      <div className='flex place-content-center relative left-[75px] my-20'>
        <div className='z-10'>
          <h1 className='text-[90px] text-[#46B5D8] font-bold drop-shadow-2xl'>We shine with you !</h1>
          <p className='text-[25px] font-semibold w-[550px] py-4'>Our goal is to provide You professional development and share guidance with insights and methods of furthering your career journey.</p>
          <p className='text-[25px] font-semibold w-[550px] py-6'>Book your trial session now !</p>
          <div className='flex gap-10 p-10'>
            <button className='flex bg-[#33A09A] rounded-lg p-3 text-lg px-8 font-bold'>Whatsapp Me <img src={wpIcon} className="ml-4 w-8" /></button>
            <button className='flex bg-[#33A09A] rounded-lg p-3 text-lg px-8 font-bold'>Book Now <img src={calIcon} className="ml-4 w-8" /></button>
          </div>
        </div>
        <div className='w-[550px] relative right-0'>

          <img src={hero1} className="relative left-[-150px] z-0" />
        </div>
      </div>

      <div className='my-20'>
        <h1 className='text-[90px] text-[#46B5D8] font-bold text-center underline decoration-white decoration-dashed decoration-4 underline-offset-[30px]'>Why have a Coach ?</h1>

        <div className='flex  w-[70vw]  m-[auto] gap-20 my-20'>
          <div className='m-[auto] '>
            <h2 className='text-[30px] font-bold'>Stand out in Interviews</h2>
            <p className='text-[25px] pt-5 max-w-[40vw]'>Feeling like you need more confidence to sell your skills in interviews? I will help you leverage on your potential and stand out.</p>
          </div>
          <img src={teamImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
        </div>

        <div className='flex  w-[70vw]  m-[auto] gap-20 my-20'>
          <img src={meditateImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
          <div className='m-[auto] text-right '>
            <h2 className='text-[30px] font-bold'>Career Growth</h2>
            <p className='text-[25px] pt-5 max-w-[40vw]'>Are you eager to grow in your career? I help you to elevate your <br />influence and advance your impact.</p>
          </div>

        </div>

        <div className='flex  w-[70vw]  m-[auto] gap-20 my-20'>
          <div className='m-[auto] '>
            <h2 className='text-[30px] font-bold'>Achieve Your Dream Job </h2>
            <p className='text-[25px] pt-5 max-w-[40vw]'>A coach provides accountability and motivation, helping you stay  focused and on track towards success while offering encouragement  and support</p>
          </div>
          <img src={vipImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
        </div>

        <div className='flex  w-[70vw]  m-[auto] gap-20 my-20'>
          <img src={boxImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
          <div className='m-[auto] text-right '>
            <h2 className='text-[30px] font-bold'>Discover your passion</h2>
            <p className='text-[25px] pt-5 max-w-[40vw]'>Following your true purpose is the route to a successful and a happy life.If you would like to identify and acknowledge your purpose/passion in life, you and I will take time to reflect, identify, and take the necessary steps to a happier and successful life for you.</p>
          </div>
        </div>
        <div className=' text-center my-40'>
          <h2 className='text-[30px] font-bold'>Enhance and apply your Strengths</h2>
          <p className='text-[25px] pt-5 max-w-[50vw] text-center m-[auto]'>Discover and apply your inherent strengths, start performing better and greater in your career and in your life by applying scientifically proven techniques.</p>
        </div>
      </div>

      <div className='w-[70vw]  m-[auto] gap-20 my-20'>
        <h1 className='text-[90px] text-[#46B5D8] font-bold text-center underline decoration-white decoration-dashed decoration-4 underline-offset-[30px]'>About Me</h1>
        <h2 className='text-[30px] font-bold text-center my-10'> Lorem ipsum dolor sit amet</h2>

        <div className='flex m-[auto] gap-20 place-content-center my-10 '>
          <p className='text-[25px] pt-5 max-w-[70vw] my-[auto]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus consectetur quaerat asperiores ipsam  corporis ratione a rem numquam repudiandae in, porro  suscipit eum voluptate expedita alias dolorum accusamus. Mollitia quia ab dolor excepturi veritatis ratione blanditiis  harum eius, adipisci sed possimus repellat ipsum cum. 
          </p>
          <img src={hero2} className="w-80" />
        </div>
      </div>

    </>
  )
}
