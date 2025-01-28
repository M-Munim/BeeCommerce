"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {

  return (
    <footer className='bg-white py-8 flex flex-col gap-6'>
      <div className='border-y-1 border-[#DDDDDD] flex items-start justify-center p-16'>
        <div className='w-3/12'>
          <Link href="/">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="w-44 h-16" />
          </Link>
          <p className='text-[#6F6C90] text-lg mt-5'>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit aliquam</p>
          <div className='flex items-center justify-start gap-4 mt-5 text-maroon text-lg'>
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        <div className='w-2/12'>
          <p className='mb-6 text-[#170F49] font-bold text-xl'>Product</p>
          <div className='flex items-start justify-center flex-col text-[#6F6C90] text-lg gap-2'>
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Case studies</Link>
            <Link href="/">Reviews</Link>
            <Link href="/">Updates</Link>
          </div>
        </div>

        <div className='w-2/12'>
          <p className='mb-6 text-[#170F49] font-bold text-xl'>Company</p>
          <div className='flex items-start justify-center flex-col text-[#6F6C90] text-lg gap-2'>
            <Link href="/">Home</Link>
            <Link href="#service">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#testimonial">Insights</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>

        <div className='w-2/12'>
          <p className='mb-6 text-[#170F49] font-bold text-xl'>Support</p>
          <div className='flex items-start justify-center flex-col text-[#6F6C90] text-lg gap-2'>
            <Link href="/">Getting Started</Link>
            <Link href="/">Help Center</Link>
            <Link href="/">Service status</Link>
            <Link href="/">Report a bug</Link>
            <Link href="/">Chat Support</Link>
          </div>
        </div>

        <div className='w-3/12'>
          <p className='mb-6 text-[#170F49] font-bold text-xl'>Contacts us</p>
          <div className='flex items-start justify-center flex-col text-[#6F6C90] text-lg gap-2'>
            <div className='flex items-center gap-2'>
              {/* icons */}
              <FaRegEnvelope />
              <p className=''>contact@company.com</p>
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
      </div>

      <div className='flex items-center justify-between px-36'>
        <p className='text-[#6F6C90] text-lg'>
          Copyright © 2024 FinSecure
        </p>

        <p className='text-[#6F6C90] text-lg'>All Rights Reserved | <span className='text-maroon underline'>Terms and Conditions</span> | <span className='text-maroon underline'>Privacy Policy</span></p>
      </div>

    </footer>
  );
};

export default Footer;
