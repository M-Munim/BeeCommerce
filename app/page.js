"use client";

import Accordion from '@/components/Accordian'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import ServiceCard from '@/components/ServiceCard'
import cardsData, { team } from '@/data'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const testimonials = [
    { id: 1, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Nadine', location: 'New Mexico' },
    { id: 2, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Rachael', location: 'UK' },
    { id: 3, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Peter', location: 'Belgium' },
    { id: 4, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Keri', location: 'UK' },
    { id: 5, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Davide', location: 'London' },
    { id: 6, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Keri', location: 'UK' },
    { id: 7, text: 'Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem', name: 'Davide', location: 'London' },
  ];

  return (
    <div className=''>
      <section
        className="w-full h-[800px] flex flex-wrap items-start justify-between px-4 relative"
        style={{
          backgroundImage: "url('/Hero.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='w-3/12 absolute left-28 top-1/4'>
          <h1 className='text-[#292E3D] font-bold text-7xl tracking-wider mb-4'>Empowering Your Financial Success Globally</h1>
          <Button text="Learn More" className="w-36 h-14 text-base font-bold bg-maroon text-white mx-auto sm:mx-0" />
        </div>
      </section>

      <section className="w-full pt-10 pb-20"  id="service">
        <Heading text="Our Services" />
        <ServiceCard cards={cardsData} />
      </section>

      <section className="w-full text-center flex items-start justify-center px-4 md:px-8 bg-[#F5F5F5] gap-8"  id="about">
        <div className='left flex items-center justify-center flex-col py-28 gap-4'>
          <div className='top flex items-center justify-center gap-5'>
            <Image src="/chooseUs1.png" alt="logo" width={100} height={100} className='w-[253px] h-[142px]' />
            <Image src="/chooseUs2.png" alt="logo" width={100} height={100} className='w-[271px] h-[190px]' />
          </div>
          <div className='bottom flex items-center justify-center gap-5'>
            <Image src="/chooseUs3.png" alt="logo" width={100} height={100} className='w-[199px] h-[159px]' />
            <Image src="/chooseUs4.png" alt="logo" width={100} height={100} className='w-[317px] h-[171px]' />
          </div>
        </div>

        <div className='right py-28 text-start mt-5'>
          <h2 className='text-maroon font-bold text-xl'>Why Choose us?</h2>
          <h1 className='text-[#292E3D] font-bold text-[40px] leading-tight'>Reliable, Resilient, Ready <br />
            for Your Success</h1>

          <ul className='text-[#292E3D] list-disc opacity-80 pl-4'>
            <li>Global Expertise</li>
            <li>Reliable Support</li>
            <li>24/7 Accessibility</li>
            <li>Resilient Strategies</li>
            <li>Client-Centric Approach</li>
          </ul>
        </div>
      </section>

      <section className='w-full'  id="testimonial">
        <Heading text="Testimonial" />
        <div className="testimonial-container pb-32 mt-10 px-4">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 5 },
            }}
            onSlideChange={handleSlideChange}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className={`testimonial-card w-[275px] h-[324px] rounded-[10px] p-5 mb-14 
                  ${index === activeIndex ? 'bg-[#D3CFFF] bg-opacity-25' : 'bg-[#F5F2ED]'} 
                  ${index === activeIndex ? 'text-white' : 'text-black'}
                `}
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
                  }}
                >
                  <Image src="/commas.svg" alt="commas" width={100} height={100} className='w-[57px] h-[61px]' />
                  <div className='flex flex-col items-stretch justify-between h-56'>
                    <p className="quote text-xl font-medium text-[#413D45]">{testimonial.text}</p>
                    <p className="author mt-auto text-[#67646A] font-medium text-[9px]">
                      {testimonial.name}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='bg-maroon pt-5 pb-20'>
        <div className='flex items-center justify-center h-20 mt-5'>
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-white">Our Team</h2>
        </div>

        <div className='flex items-center justify-center flex-wrap gap-9 w-9/12 mx-auto mt-14'>
          {team.map((item, i) => (
            <div className='text-white text-center mt-12' key={i}>
              <div className='w-[227px] h-[122px] bg-white rounded-[20px] relative'>
                <Image
                  src={item.image}
                  alt="team Img"
                  width={100}
                  height={100}
                  className="w-56 h-48 mx-auto absolute bottom-0"
                />
              </div>
              <h2 className='font-bold text-xl mt-3'>{item.name}</h2>
              <p className='italic text-[15px]'>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='w-full h-[1000px] flex items-center justify-center relative'>
        <Image
          src="/ball1.svg"
          alt="blur"
          width={100}
          height={100}
          className="w-[228px] h-[227px] mx-auto absolute top-14 -left-16"
        />

        <Image
          src="/ball2.svg"
          alt="blur"
          width={100}
          height={100}
          className="w-[228px] h-[227px] mx-auto absolute top-1/2 left-16"
        />

        <Image
          src="/ball3.svg"
          alt="blur"
          width={100}
          height={100}
          className="w-[310px] h-[309px] mx-auto absolute bottom-0 right-20 "
        />
        <div className='bg-[#FAFAFA] w-9/12 rounded-[10px] px-20 relative shadow-lg' style={{
          boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
        }}>
          <div className='flex items-center justify-center h-20 mt-10 gap-4'>
            <span className='w-4 h-4 bg-maroon rounded-full'></span>
            <h2 className="text-3xl lg:text-4xl text-center font-bold text-maroon"> Frequently Asked Questions</h2>
            <span className='w-4 h-4 bg-maroon rounded-full'> </span>
          </div>
          <Accordion />
        </div>
      </section>

      <section className='w-full bg-maroon h-[126px] flex items-center justify-center'>
        <div className=' w-10/12 flex items-center justify-between'>
          <div className='text-white'>
            <h1 className='font-bold text-4xl'>Have any question ?</h1>
            <p className='text-xl font-light'>Ask us anything, we would love to answer.</p>
          </div>

          <div className='flex items-center justify-center gap-5'>
            <Button text="Contact Us" className="w-36 h-14 text-base font-bold bg-white text-maroon mx-auto sm:mx-0" />
          </div>
        </div>
      </section>


      <section className='w-full bg-maroon h-[695px] flex items-center justify-center mt-10' id="contact">
        <div className='w-9/12 h-[595px] bg-white rounded-[10px] flex items-center justify-between'>
          <div className='left mx-auto w-6/12 flex items-start justify-center flex-col text-[#413D45]'>
            <h1 className='text-4xl font-bold mb-2'>Lets Connect.</h1>
            <p className='text-sm mb-5 w-full'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum<br />
              Lorem ipsum</p>

            <form className='w-full'>
              <div className='flex items-center justify-between gap-10 mb-10'>
                <div className='w-1/2'>
                  <label className='block font-medium text-sm'>First Name</label>
                  <input className='border-b-1 border-[#8D8D8D] w-full outline-none' type='text' />
                </div>

                <div className='w-1/2'>
                  <label className='block font-medium text-sm'>Last Name</label>
                  <input type='text' className='border-b-1 border-[#8D8D8D] w-full  outline-none' />
                </div>
              </div>

              <div className='flex items-center justify-between gap-10 mb-10'>
                <div className='w-1/2'>
                  <label className='block font-medium text-sm'>Email</label>
                  <input type='email' className='border-b-1 border-[#8D8D8D] w-full  outline-none' />
                </div>

                <div className='w-1/2'>
                  <label className='block font-medium text-sm'>Phone Number</label>
                  <input type='number' className='border-b-1 border-[#8D8D8D] w-full  outline-none' />
                </div>
              </div>

              <div className='flex items-start justify-between flex-col'>
                <label className='block font-medium text-sm mb-2'>Message</label>
                <textarea name="" id="" placeholder='Write your message..' className='border-b-1 border-[#8D8D8D] w-full  outline-none'></textarea>
              </div>

              <div className='flex items-center justify-end'>
                <Button text="Send Message" className="w-40 h-10 text-base font-bold bg-maroon text-white ms-auto mt-10 " />
              </div>
            </form>
          </div>
          <div className='right'>
            <Image
              src="/contact.svg"
              alt="contact"
              width={100}
              height={100}
              className="w-[425px] h-[595px]"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page