"use client";

import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

  return (
    <footer className='bg-[#1B1B1B] py-8 flex flex-col gap-6 text-white'>
      <div className='flex flex-col md:flex-row md:flex-wrap items-start justify-center p-6 md:p-12 gap-8 md:gap-6'>
        <div className='w-full md:w-5/12 lg:w-4/12'>
          <p className='mb-6 font-bold text-xl'>Store info</p>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <FaRegEnvelope />
              <p>contact@chamanhoney.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <FiPhone />
              <p>123-456-789-88</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoLocationOutline />
              <p>Street 123, 25000, Peshawar, Pakistan</p>
            </div>
          </div>
        </div>

        <div className='w-full md:w-2/12'>
          <p className='mb-6 font-bold text-xl'>Product</p>
          <div className='flex flex-col gap-2'>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Reviews</Link>
          </div>
        </div>

        <div className='w-full md:w-2/12'>
          <p className='mb-6 font-bold text-xl'>Company</p>
          <div className='flex flex-col gap-2'>
            <Link href="/">Home</Link>
            <Link href="#service">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#testimonial">Insights</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>

        <div className='w-full md:w-2/12'>
          <p className='mb-6 font-bold text-xl'>Support</p>
          <div className='flex flex-col gap-2'>
            <Link href="/">Getting Started</Link>
            <Link href="/">Help Center</Link>
            <Link href="/">Service status</Link>
            <Link href="/">Report a bug</Link>
            <Link href="/">Chat Support</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-36 border-t-2 pt-8 text-center md:text-left'>
        <p>Copyright © 2025 Chamanhoney</p>
        <p>All Rights Reserved | <span className='text-[#F3A920] underline'>Terms and Conditions</span> | <span className='text-[#F3A920] underline'>Privacy Policy</span></p>
      </div>
    </footer>

  );
};

export default Footer;