import Cards from "./Cards";
import painter from './images/being-creative.png'
import scholar from './images/Group2.png'
import chess from './images/strategy2.png'
import wpIcon from './images/icons/Group.png'
import calIcon from './images/icons/calendar-clock.png'


export default function Services() {
  return (<>
    <div className="flex flex-col items-center">
      <div className="w-[70vw] margin-[auto]"> <h1 className='text-[90px] text-[#46B5D8] font-bold text-center underline decoration-white decoration-dashed decoration-4 underline-offset-[30px] p-36 pb-56' id="services">Services</h1>
      </div>

      <div className="grid grid-cols-3 w-[70vw] m-[auto]">


        <Cards theme='white' title=' Life Coaching' text="Unlock your full potential and live a more fulfilling life with our personalized life coaching services. Whether you're seeking clarity, balance, or direction, our experienced life coaches are here to support you every step of the way." />


        <Cards theme='blue' title='Career Coaching' text="Take your career to new heights with our expert career coaching services. Whether you're looking to land your dream job, advance in your current role, or make a career transition, our career coaches provide the guidance and support you need to achieve your professional goals." />

        <Cards theme='white' title='Leadership Coaching' text="Become a more effective and inspiring leader with our leadership coaching services. Our experienced coaches work with leaders at all levels to develop essential leadership skills, enhance communication abilities, and drive organizational success." />

        <Cards theme='blue' title='Career Coaching' text="Take your career to new heights with our expert career coaching services. Whether you're looking to land your dream job, advance in your current role, or make a career transition, our career coaches provide the guidance and support you need to achieve your professional goals." />

        <Cards theme='white' title='Leadership Coaching' text="Become a more effective and inspiring leader with our leadership coaching services. Our experienced coaches work with leaders at all levels to develop essential leadership skills, enhance communication abilities, and drive organizational success." />

        <Cards theme='blue' title='Career Coaching' text="Take your career to new heights with our expert career coaching services. Whether you're looking to land your dream job, advance in your current role, or make a career transition, our career coaches provide the guidance and support you need to achieve your professional goals." />

      </div>

      <div className="flex w-[70vw] my-20">
        <div className="m-[auto]">
          <h1  className='text-[60px] text-[#46B5D8] font-bold text-left my-4 '>Life Coaching</h1>
          <p className='text-[25px] pt-5 '> Transform your life with our personalized coaching. Our compassionate coaches help you achieve fulfillment, balance, and success. Whether clarifying goals or navigating transitions, we provide guidance and accountability. Tailored sessions and proven strategies empower you to create a life you love.</p>
        </div>
        <img src={painter} className="h-[300px] m-[auto]" />
      </div>

      <div className="flex w-[70vw] my-20">
        <div className="m-[auto]">
          <h1  className='text-[60px] text-[#46B5D8] font-bold text-left my-4 '>Career Coaching</h1>
          <p className='text-[25px] pt-5 '>Begin your career journey with our coaching services. Our expert coaches help you land your dream job, navigate transitions, and advance your career. From resume optimization to interview prep, we provide the tools for success. Partner with us to achieve your career goals.</p>
        </div>
        <img src={scholar} className="h-[300px] m-[auto]" />
      </div>

      <div className="flex w-[70vw] my-20">
        <div className="m-[auto]">
          <h1  className='text-[60px] text-[#46B5D8] font-bold text-left my-4 '>Leadership Coaching</h1>
          <p className='text-[25px] pt-5 '> Refine your leadership with our coaching. Our experienced coaches offer personalized guidance to enhance skills, communication, and success. Lead confidently, inspire your team, and achieve your goals through targeted strategies and sessions.</p>
        </div>
        <img src={chess} className="h-[300px] m-[auto]" />
      </div>

      <div className='flex gap-10 p-10'>
            <button className='flex bg-[#33A09A] rounded-lg p-3 text-lg px-8 font-bold'>Whatsapp Me <img src={wpIcon} className="ml-4 w-8" /></button>
            <button className='flex bg-[#33A09A] rounded-lg p-3 text-lg px-8 font-bold'>Book Now <img src={calIcon} className="ml-4 w-8" /></button>
          </div>

    </div>
  </>

  )
}
