import React from 'react'

export default function Cards(props) {
  let theme=props.theme==='blue'? 'bg-[#9CE7FF]' :'bg-[#F6FFFD]';
  let btncolor=props.theme==='blue'? 'bg-[#FCF9DB]':'bg-[#9CE7FF]';
  let title=props.title;
  let text=props.text;
  
  return (
    <div className={`${theme} text-center  w-[90%] flex flex-col gap-y-3.5 p-10 rounded-2xl m-10`} id='card'>
      <div className='h-[300px]'>
      <h1 className='text-[20px] font-bold m-5'>{title}</h1>
      <p >{text}</p>
      </div>
      <button className={`${btncolor} p-4 font-bold text-lg] rounded-2xl my-4  `}>Learn More</button>
    </div>
  )
}
