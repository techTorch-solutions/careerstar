import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Cards(props) {
  const data1 = props.data
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-3/4 m-auto'>
      <div className='md:hidden'>
        <Slider {...settings}>
          {data1.map((d, key) => (
            <div className='flex justify-center  ' key={key}>
              <div key={key} className={`${d.theme === 'blue' ? 'bg-[#9CE7FF]' : 'bg-[#F6FFFD]'} mt-8 relative left-4 text-left w-[90%] flex flex-col gap-y-3.5 px-4 py-5 rounded-2xl justify-between  `} id='card'>
                <div className=''>
                  <h1 className='text-[20px] font-bold my-5 mx-2 text-center'>{d.title}</h1>
                  <p className='font-ubuntu font-light text-[13px] '>{d.text}</p>
                </div>
                <button className={`${d.theme === 'blue' ? 'bg-[#FCF9DB]' : 'bg-[#9CE7FF]'} p-2 font-bold text-sm rounded-2xl my-4`}>Learn More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='hidden md:flex'>
        {/* Render non-slider content here for larger screens */}
        {data1.map((d, key) => (
          <div className='flex hover:scale-[105%] ease-in-out duration-300'>
            <div key={key} className={`${d.theme === 'blue' ? 'bg-[#9CE7FF]' : 'bg-[#F6FFFD]'} text-left w-[90%] flex flex-col gap-y-3.5 px-10 py-5 rounded-2xl justify-between`} id='card'>
              <div className=''>
                <h1 className='text-[20px] font-bold my-5 mx-2 text-center'>{d.title}</h1>
                <p className='font-ubuntu font-light text-[13px] '>{d.text}</p>
              </div>
              <button className={`${d.theme === 'blue' ? 'bg-[#FCF9DB]' : 'bg-[#9CE7FF]'} p-4 font-bold text-lg rounded-2xl my-4`}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
