import Cards from "./Cards";
import painter from './images/being-creative.png'
import scholar from './images/Group2.png'
import chess from './images/strategy2.png'
import wpIcon from './images/icons/Group.png'
import calIcon from './images/icons/calendar-clock.png'
import Modal from "./Modal";
import { useRef, useState } from "react";
import ContactModal from "./ContactModal";
import WhatsAppModal from "./WhatsAppModal";


export default function Services() {
  const scrollRef = useRef()

  const [openWhatsapp, setOpenWhatsapp] = useState(false)
  const [openContact, setOpenContact] = useState(false)

  const handleButtonClick = (btn) => {
    if (btn.label === 'Whats App Me') {
      setOpenWhatsapp(true);
    } else if (btn.label === 'Book Now') {
      setOpenContact(true);
    }
  };

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

  const data = [
    {
      theme: 'white',
      title: 'Life Coaching',
      id: 'life',
      text: "Unlock your full potential and live a more fulfilling life with our personalized life coaching services. Whether you're seeking clarity, balance, or direction, our experienced life coaches are here to support you every step of the way."
    },
    {
      theme: 'blue',
      title: 'Career Coaching',
      id: 'career',
      text: "Take your career to new heights with our expert career coaching services. Whether you're looking to land your dream job, advance in your current role, or make a career transition, our career coaches provide the guidance and support you need to achieve your professional goals."
    },
    {
      theme: 'white',
      title: 'Leadership Coaching',
      id: 'leadership',
      text: "Unlock your full potential and live a more fulfilling life with our personalized life coaching services. Whether you're seeking clarity, balance, or direction, our experienced life coaches are here to support you every step of the way."
    }
  ]

  const services = [
    {
      title: 'Life Coaching',
      id: 'life',
      desc: 'Transform your life with our personalized coaching. Our compassionate coaches help you achieve fulfillment, balance, and success. Whether clarifying goals or navigating transitions, we provide guidance and accountability. Tailored sessions and proven strategies empower you to create a life you love',
      img: painter
    },
    {
      title: 'Czareer Coaching',
      id: 'career',
      desc: 'Begin your career journey with our coaching services. Our expert coaches help you land your dream job, navigate transitions, and advance your career. From resume optimization to interview prep, we provide the tools for success. Partner with us to achieve your career goals.',
      img: scholar
    },
    {
      title: 'Leadership Coaching',
      id: 'leadership',
      desc: 'Refine your leadership with our coaching. Our experienced coaches offer personalized guidance to enhance skills, communication, and success. Lead confidently, inspire your team, and achieve your goals through targeted strategies and sessions',
      img: chess
    },
  ]
  return (<>
    <div className="flex flex-col items-center">
      <div className="w-[70vw] margin-[auto]"> <h1 className='text-[50px] md:text-[90px] text-[#46B5D8] font-bold text-center md:underline decoration-white decoration-dashed decoration-4 underline-offset-[30px] md:p-36 p-2 md:pb-56 pb-4' id="services">Services</h1>
      </div>
      <Cards data={data} />

      {services.map((service) => (
        <div id={service.id} key={service.title} className="flex md:flex-row flex-col w-[90vw] items-center md:w-[70vw] my-20">
          <div className="m-[auto] md:text-left text-center">
            <h1 className='md:text-[60px] md:text-left text-center text-[30px] text-[#46B5D8] font-bold my-4 '>{service.title}</h1>
            <p className='text-[15px] md:text-[25px] pt-5 '>{service.desc}</p>
          </div>
          <img src={service.img} className="h-[200px]  md:h-[300px] m-[auto]" />
        </div>
      ))}

      <div className='flex md:flex-row flex-col gap-10 p-10'>
        {buttons.map((btn) => (
          <button key={btn.label} onClick={() => handleButtonClick(btn)} className='flex justify-between bg-[#33A09A] rounded-lg p-3 text-lg px-8 font-bold'>{btn.label} <img src={btn.icon} className="ml-4 w-8" /></button>
        ))}
      </div>
    </div>
    <WhatsAppModal open={openWhatsapp} onClose={() => setOpenWhatsapp(false)} />
    <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
  </>

  )
}
