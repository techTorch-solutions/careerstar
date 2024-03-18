//import React from 'react'
import hero1 from './images/Hero_img.png'
import wpIcon from './images/icons/Group.png'
import calIcon from './images/icons/calendar-clock.png'
import teamImg from './images/about-our-team.png'
import vipImg from './images/being-vip.png'
import boxImg from './images/Group.png'
import meditateImg from './images/meditation-yaga.png'
import hero2 from './images/profile.png'
import WhatsAppModal from './WhatsAppModal'
import ContactModal from './ContactModal'
import { useState } from 'react'

export default function Home() {

  const buttons = [
    {
      label: 'Whats App Me',
      icon: wpIcon
    },
    {
      label: 'Book Now',
      icon: calIcon
    }
  ]

  const [openWhatsapp, setOpenWhatsapp] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  const handleButtonClick = (btn) => {
    if (btn.label === 'Whats App Me') {
      setOpenWhatsapp(true);
    } else if (btn.label === 'Book Now') {
      setOpenContact(true);
    }
  };
  return (
    <>
      <div className='flex place-content-center relative my-20'>
        <div className='z-10'>
          <h1 className='md:text-[90px] text-[25px] text-center text-[#46B5D8] font-bold drop-shadow-2xl'>We shine with you !</h1>
          <div className='relative right-0 md:hidden flex justify-center'>
            <img width={250} src={hero1} className="relative z-0 md:hidden" />
          </div>
          <div className='relative bottom-[80px] md:bottom-0'>
            <p className='text-[18px] font-semibold md:w-[550px] w-auto py-4 text-center md:text-left'>Our goal is to provide You professional development and share guidance with insights and methods of furthering your career journey.</p>
            <p className='text-[20px] font-semibold md:w-[550px] w-auto py-6 text-center md:text-left'>Book your trial session now !</p>
          </div>

          <div className='flex gap-10 md:p-10 p-0 relative bottom-[30px] md:bottom-0 justify-center'>
            {buttons.map((btn) => (
              <button onClick={() => handleButtonClick(btn)} key={btn.label} className='flex bg-[#33A09A] rounded-lg p-3 text-sm md:text-lg md:px-8 px-4 font-bold'>{btn.label}<img src={btn.icon} className="ml-4 md:w-8 w-[1.2rem]" /></button>
            ))}
          </div>
        </div>
        <div className='md:w-[550px] w-[550px] relative right-0 md:block hidden'>
          <img src={hero1} className="relative z-0" />
        </div>
      </div>

      <div className='my-10'>
        <h1 className='md:text-[90px] text-[25px] text-[#46B5D8] font-bold text-center underline decoration-white decoration-dashed decoration-4 underline-offset-[30px]'>Why have a Coach ?</h1>

        <div className='flex flex-col-reverse md:flex md:flex-row md:w-[70vw] w-[90vw]  m-[auto] gap-20 my-20'>
          <div className='m-[auto] text-center md:text-left'>
            <h2 className='text-[30px] font-bold'>Stand out in Interviews</h2>
            <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[40vw] max-w-[90vw]'>Feeling like you need more confidence to sell your skills in interviews? I will help you leverage on your potential and stand out.</p>
          </div>
          <img src={teamImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
        </div>

        <div className='flex flex-col md:flex md:flex-row md:w-[70vw] w-[90vw]  m-[auto] gap-20 my-20'>
          <img src={meditateImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
          <div className='m-[auto] md:text-right text-center'>
            <h2 className='text-[30px] font-bold'>Career Growth</h2>
            <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[40vw] max-w-[90vw]'>Are you eager to grow in your career? I help you to elevate your influence and advance your impact.</p>
          </div>

        </div>

        <div className='flex flex-col-reverse md:flex md:flex-row md:w-[70vw] w-[90vw]  m-[auto] gap-20 my-20'>
          <div className='m-[auto] text-center md:text-left'>
            <h2 className='text-[30px] font-bold'>Achieve Your Dream Job </h2>
            <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[40vw] max-w-[90vw]'>A coach provides accountability and motivation, helping you stay  focused and on track towards success while offering encouragement  and support</p>
          </div>
          <img src={vipImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
        </div>

        <div className='flex flex-col md:flex md:flex-row md:w-[70vw] w-[90vw]  m-[auto] gap-20 my-20'>
          <img src={boxImg} className="m-[auto] hover:scale-125 ease-in-out duration-500" />
          <div className='m-[auto] md:text-right text-center'>
            <h2 className='text-[30px] font-bold'>Discover your passion</h2>
            <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[40vw] max-w-[90vw]'>Following your true purpose is the route to a successful and a happy life.If you would like to identify and acknowledge your purpose/passion in life, you and I will take time to reflect, identify, and take the necessary steps to a happier and successful life for you.</p>
          </div>
        </div>
        <div className=' text-center my-40'>
          <h2 className='text-[30px] font-bold'>Enhance and apply your Strengths</h2>
          <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[50vw] max-w-[90vw] text-center m-[auto]'>Discover and apply your inherent strengths, start performing better and greater in your career and in your life by applying scientifically proven techniques.</p>
        </div>
      </div>

      <div className='md:w-[70vw] max-w[90vw] m-[auto] gap-20 my-20'>
        <h1 className='md:text-[90px] text-[50px] text-[#46B5D8] font-bold text-center underline decoration-white decoration-dashed decoration-4 underline-offset-[30px]'>About Me</h1>
        <h2 className='text-[30px] font-bold text-center my-10'>Benson</h2>

        <div className='flex flex-col md:flex-row m-[auto] gap-20 items-center my-10 '>
          <p className='text-[15px] md:text-[25px] pt-5 md:max-w-[70vw] max-w-[100vw] text-center my-[auto]'>Benson is an hospitality learning & Development (L&D) Enthusiast, passionate trainer and a career coach.
            He is a certified international service standards trainer by Forbes travel Guide and has supported numerous organizations, professionals and students around the world to leverage their potential and elevate their influence.
          </p>
          <img src={hero2} className="w-80" />
        </div>
      </div>
      <WhatsAppModal open={openWhatsapp} onClose={() => setOpenWhatsapp(false)} />
      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </>
  )
}
