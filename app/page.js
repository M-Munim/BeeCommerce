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
import Link from 'next/link';



const products = [
  {
    id: 1,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Wildflower Honey",
    discountedPrice: 12.99,
    realPrice: 15.99,
    category: "Recent Product"
  },
  {
    id: 2,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Organic Clover Honey",
    discountedPrice: 14.49,
    realPrice: 18.49,
    category: "Recent Product"
  },
  {
    id: 3,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Acacia Honey",
    discountedPrice: 10.99,
    realPrice: 13.99,
    category: "New Product"
  },
  {
    id: 4,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Raw Manuka Honey",
    discountedPrice: 25.99,
    realPrice: 30.99,
    category: "Featured"
  },
  {
    id: 5,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Raw Manuka Honey",
    discountedPrice: 25.99,
    realPrice: 30.99,
    category: "Featured"
  },
  {
    id: 6,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Acacia Honey",
    discountedPrice: 10.99,
    realPrice: 13.99,
    category: "New Product"
  },
  ,
  {
    id: 7,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Acacia Honey",
    discountedPrice: 10.99,
    realPrice: 13.99,
    category: "New Product"
  },
  ,
  {
    id: 8,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Acacia Honey",
    discountedPrice: 10.99,
    realPrice: 13.99,
    category: "New Product"
  },
  {
    id: 9,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Wildflower Honey",
    discountedPrice: 12.99,
    realPrice: 15.99,
    category: "Recent Product"
  },
  {
    id: 10,
    image: "/honeyBottle.svg",
    rating: "/ratingStars.svg",
    honeyName: "Organic Clover Honey",
    discountedPrice: 14.49,
    realPrice: 18.49,
    category: "Recent Product"
  },
  // Add more products here
];

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState("Recent Product");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const buttonClasses = (category) =>
    `w-[118px] h-10 rounded-[10px] text-[13.17px]  ${selectedCategory === category
      ? "gradBtn text-white"
      : "bg-white border border-[#F3A920] text-[#504E4E]"
    }`;

  return (
    <div className='relative'>
      <Image src="/bgImg.svg" alt="bg" width={100} height={100} className='w-9/12 h-auto absolute -z-10' />

      <section className="min-h-screen relative z-20 flex text-[#504E4E] items-center justify-center px-4 md:px-16">
        <Image
          src="/2148371975 2.svg"
          alt="bg"
          width={100}
          height={100}
          className="w-20 h-[100px] md:w-40 md:h-[166px] absolute top-10 md:top-16 left-0 z-0"
        />

        <div className="w-full max-w-8xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 z-10">
          <div className="text-center md:text-left md:mt-20">
            <h1 className="text-[#F3A920] text-2xl md:text-3xl md:text-[37px] pacifico">
              Buzzing with Purity
            </h1>
            <h2 className="font-medium text-4xl lg:text-5xl xl:text-[64px] leading-tight">
              Pure, Golden Goodness <br /> In Every Drop.
            </h2>
            <p className="text-lg md:text-xl my-5 max-w-md md:max-w-2xl mx-auto md:mx-0">
              Our honey is 100% pure, unprocessed, and free from additives. Harvested directly from nature.
            </p>

            <button className="w-[140px] md:w-[118px] h-12 md:h-10 rounded-[10px] text-[14px] md:text-[13.17px] font-medium text-white gradBtn">
              <Link href="#">
                Shop Now
              </Link>
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/Group 1000001771.svg"
              alt="bg"
              width={596}
              height={556}
              className="w-[280px] md:w-[500px] lg:w-[596px] h-auto"
            />
          </div>
        </div>
      </section>


      {/* <section className=' h-[622px] relative' id='about' style={{
        backgroundImage: "url('/Group 1000001772.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <Image src="/8e757c66dd3f4caa7823464e21c36bdc 1.svg" alt="bg" width={100} height={100} className='w-48 h-40 absolute -top-24 left-1/2' />


        <h2 className='text-center font-semibold text-[30px] pt-20'>Trending Products</h2>
        <hr className='bg-[#FFC300] h-1 w-[93px] m-auto rounded-full' />
        <div className='mt-9'>
          <div className="flex items-center justify-center gap-6">
            <button
              className={buttonClasses("Recent Product")}
              onClick={() => setSelectedCategory("Recent Product")}
            >
              Latest Products
            </button>

            <button
              className={buttonClasses("Featured")}
              onClick={() => setSelectedCategory("Featured")}
            >
              Featured
            </button>

            <button
              className={buttonClasses("New Product")}
              onClick={() => setSelectedCategory("New Product")}
            >
              New Products
            </button>
          </div>

          <div className="mt-28 w-9/12 m-auto flex items-center justify-center gap-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[210px] h-[230px] bg-white rounded-t-3xl relative flex flex-col items-center justify-end"
              >
                <Image
                  src={product.image}
                  alt={product.honeyName}
                  width={100}
                  height={100}
                  className="w-[109px] h-[201px] absolute -top-20"
                />

                <div className="absolute bottom-4 flex flex-col items-center">
                  <Image
                    src={product.rating}
                    alt="Rating Stars"
                    width={100}
                    height={100}
                    className="w-20 h-4 mb-2"
                  />

                  <p className="text-lg font-medium">{product.honeyName}</p>
                  <p className="text-sm">
                    Rs {product.discountedPrice.toFixed(2)}{" "}
                    <strike className="text-gray-500">
                      {product.realPrice.toFixed(2)}
                    </strike>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section> */}
      <section
        id="about"
        className="relative min-h-[622px] py-12 px-4 md:px-16"
        style={{
          backgroundImage: "url('/Group 1000001772.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Floating Image */}
        <Image
          src="/8e757c66dd3f4caa7823464e21c36bdc 1.svg"
          alt="bg"
          width={100}
          height={100}
          className="w-32 md:w-48 h-28 md:h-40 absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2"
        />

        {/* Section Title */}
        <h2 className="text-center font-semibold text-2xl md:text-[30px] pt-10">
          Trending Products
        </h2>
        <hr className="bg-[#FFC300] h-1 w-20 md:w-[93px] m-auto rounded-full" />

        {/* Category Buttons */}
        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-3 md:gap-6">
          <button
            className={buttonClasses("Recent Product")}
            onClick={() => setSelectedCategory("Recent Product")}
          >
            Latest Products
          </button>

          <button
            className={buttonClasses("Featured")}
            onClick={() => setSelectedCategory("Featured")}
          >
            Featured
          </button>

          <button
            className={buttonClasses("New Product")}
            onClick={() => setSelectedCategory("New Product")}
          >
            New Products
          </button>
        </div>

        {/* Products Grid */}
        <div className= "mt-28 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 place-items-center">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[210px] h-[230px] bg-white rounded-t-3xl relative flex flex-col items-center justify-end shadow-lg"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.honeyName}
                width={100}
                height={100}
                className="w-[109px] h-[201px] absolute -top-20"
              />

              {/* Product Details */}
              <div className="absolute bottom-4 flex flex-col items-center">
                <Image
                  src={product.rating}
                  alt="Rating Stars"
                  width={100}
                  height={100}
                  className="w-20 h-4 mb-2"
                />

                <p className="text-lg font-medium">{product.honeyName}</p>
                <p className="text-sm">
                  Rs {product.discountedPrice.toFixed(2)}{" "}
                  <strike className="text-gray-500">
                    {product.realPrice.toFixed(2)}
                  </strike>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className=' relative text-[#504E4E]' >
        <h2 className='text-center font-semibold text-[30px]'>Why Choose Us</h2>
        <hr className='bg-[#FFC300] h-1 w-[93px] m-auto rounded-full' />
        <Image src="/honeyStick.svg" alt="bg" width={100} height={100} className='top-0 right-0 absolute w-[595px] h-[310px]' />

        <div className='w-9/12 m-auto'>
          <div className='w-6/12'>
            <h2 className='semibold text-2xl'>Pure & Natural Honey</h2>
            <hr className='w-[232px] bg-[#FFC300] h-1 rounded-full' />

            <p className='text-xl'>Our honey is 100% pure, unprocessed, and free from additives.
              Harvested directly from nature, it retains all its natural nutrients,
              flavors, and goodness.</p>
          </div>
        </div>

        <div className='w-10/12 ms-auto'>
          <div className='flex bg-red-100 justify-center align-center gap-8 mb-10'>
            <div className='left w-5/12'>
              <Image src="/17148-Photoroom 1.svg" alt="bg" width={100} height={100} className='w-[508px] h-[494px]' />
            </div>
            <div className='right w-7/12 bg-yellow-200 flex items-start justify-center flex-col'>
              {/* <h2 className='semibold text-2xl'>Sourced from the Finest Locations</h2> */}
              <span className='semibold text-2xl border-b-4  border-b-[#FFC300]'>Sourced from the Finest Locations  </span>

              <p className='w-8/12'>We carefully source our honey from trusted beekeepers in pristine,
                untouched regions. Each jar is a taste of nature&apos;s best, ensuring
                exceptional quality and authenticity.</p>
            </div>
          </div>

          <div className='flex bg-green-100 justify-between align-center gap-8'>
            <div className='left w-5/12 flex items-start justify-center flex-col'>
              <span className='semibold text-2xl border-b-4  border-b-[#FFC300]'>Health in Every Drop</span>

              <p className=''>Packed with antioxidants, enzymes, and vitamins, our honey
                isn’t just delicious—it’s a natural superfood that supports
                immunity and promotes overall wellness.</p>
            </div>
            <div className='right w-7/12 bg-yellow-200 flex items-end justify-center flex-col'>
              <Image src="/2149442386-Photoroom 1.svg" alt="bg" width={100} height={100} className='w-[508px] h-[494px]' />
            </div>
          </div>
        </div>
      </section>

      <section className=''>
        <Image src="/Rectangle 7.svg" alt="bg" width={100} height={100} className='w-full h-[191px]' />
        {/* <div className='w-full h-[191px] bg-black'>

        </div> */}
      </section>

      <section className=' h-96'>
        <h1>this is testimonial</h1>
        <h1>this is testimonial</h1>
        <h1>this is testimonial</h1>
        <h1>this is testimonial</h1>
        <h1>this is testimonial</h1>
        <h1>this is testimonial</h1>
      </section>
    </div>
  )
}

export default page