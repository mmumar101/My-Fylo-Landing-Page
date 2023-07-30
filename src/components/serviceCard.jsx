import React from 'react'

const serviceCard = ({image, title, text}) => {
  return (
    <div className='flex flex-col items-center gap-5 text-center'>
    <img src={image} alt="icon"/>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm font-thin">{text}</p>
  </div>
  )
}

export default serviceCard