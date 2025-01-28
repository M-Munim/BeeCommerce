import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/Heading'
import ServiceCard from '@/components/ServiceCard'
import cardsData from '@/data'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div className='px-16'>
      <section className="w-full h-auto lg:h-[600px] flex flex-wrap items-start justify-between px-4 relative">   
        <div className="w-full sm:w-4/12 lg:w-4/12 flex items-start justify-center flex-col px-5 relative z-10 top-1/3">
          <h2 className="text-lg lg:text-5xl font-bold mb-1 text-center sm:text-left">
            Empowering Your Financial Success Globally
          </h2>
          <p className="text-xs mb-5 text-center sm:text-left popins leading-tight">
            Lorem ipsum dolor sit amet voluptatum?
          </p>
          <Button
            text="home"
            className="w-36 text-xl bg-white text-theme hover:bg-theme hover:text-white transition-all duration-200 mx-auto sm:mx-0"
          />
        </div>
      
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full flex items-center justify-center">
          <img src="/Screenshot 2024-12-25 at 3.17.58 PM.png" alt="logo" className="w-[1100px]" />
        </div>
        
        <div className="w-full sm:w-4/12 lg:w-3/12 flex items-center justify-center relative z-10">
          <img src="/pngwing.com.png" alt="" className='w-[200px] h-[200px] mt-5' />
        </div>
      </section>

      <section className="w-full -mt-10">
        <Heading text="Our Services " />
        <ServiceCard cards={cardsData} />
      </section>
      <section className="w-full  text-center">
        <Heading text="Contact Us" />
        <ContactForm />
      </section>
    </div>
  )
}

export default page