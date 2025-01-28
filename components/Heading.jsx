import React from 'react'

const Heading = ({ text }) => {
  return (
    <div className='flex items-center justify-center h-20 mt-10'>
      <h2 className="text-3xl lg:text-4xl text-center font-bold text-maroon">{text}</h2>
    </div>
  )
}

export default Heading