"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

  return (
    <footer className='bg-[#1B1B1B] py-8 flex flex-col gap-6 text-white'>
      <div className='flex items-start justify-center p-12'>

        <div className='w-4/12'>
          <p className='mb-6  font-bold text-xl'>Store info</p>
          <div className='flex items-start justify-center flex-col   gap-2'>
            <div className='flex items-center gap-2'>
              {/* icons */}
              <FaRegEnvelope />
              <p className=''>contact@chamanhoney.com</p>
            </div>

            <div className='flex items-center gap-2'>
              {/* icons */}
              <FiPhone />
              <p className=''>123-456-789-88</p>
            </div>

            <div className='flex items-center gap-2'>
              {/* icons */}
              <IoLocationOutline />
              <p className=''>Street 123, 25000, Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
        

        <div className='w-2/12'>
          <p className='mb-6  font-bold text-xl'>Product</p>
          <div className='flex items-start justify-center flex-col   gap-2'>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Reviews</Link>
          </div>
        </div>

        <div className='w-2/12'>
          <p className='mb-6  font-bold text-xl'>Company</p>
          <div className='flex items-start justify-center flex-col   gap-2'>
            <Link href="/">Home</Link>
            <Link href="#service">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#testimonial">Insights</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>

        <div className='w-2/12'>
          <p className='mb-6  font-bold text-xl'>Support</p>
          <div className='flex items-start justify-center flex-col   gap-2'>
            <Link href="/">Getting Started</Link>
            <Link href="/">Help Center</Link>
            <Link href="/">Service status</Link>
            <Link href="/">Report a bug</Link>
            <Link href="/">Chat Support</Link>
          </div>
        </div>


      </div>

      <div className='flex items-center justify-between px-36 border-t-2 pt-8'>
        <p className=' '>
          Copyright © 2025 Chamanhoney
        </p>

        <p className=' '>All Rights Reserved | <span className='text-[#F3A920] underline'>Terms and Conditions</span> | <span className='text-[#F3A920] underline'>Privacy Policy</span></p>
      </div>

    </footer>
  );
};

export default Footer;
