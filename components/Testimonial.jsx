import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Mr Shahzad",
    image: "/shahzad.jpg",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...",
  },
  {
    name: "Mr Shahzad",
    image: "/shahzad.jpg",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...",
  },
  {
    name: "Mr Shahzad",
    image: "/shahzad.jpg",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...",
  },
  {
    name: "Mr Shahzad",
    image: "/shahzad.jpg",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...",
  },
  {
    name: "Mr Shahzad",
    image: "/shahzad.jpg",
    text: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex justify-center"
            style={{
              opacity: index === 2 ? 1 : 0.5, // Center one has full opacity, others have reduced opacity
            }}
          >
            <div className="relative w-64 h-72 bg-yellow-400 flex flex-col items-center justify-center text-center shadow-lg transform scale-90 hover:scale-100 transition-all">
              {/* Background image set as hexagon */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('/path-to-hexagon-image.png')", // Set the path to your hexagon image
                }}
              ></div>
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-white relative z-10"
              />
              <h3 className="text-xl font-bold relative z-10">{testimonial.name}</h3>
              <p className="text-sm px-4 relative z-10">{testimonial.text}</p>
              <span className="text-sm text-gray-600 mt-2 relative z-10">See More</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;