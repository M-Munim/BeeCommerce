// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// const slides = [
//   { name: 'Mr Shahzad', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
//   { name: 'Mr Alex', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
//   { name: 'Ms Julia', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
//   { name: 'Mr John', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
//   { name: 'Ms Sarah', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
// ];

// function App() {
//   return (
//     <div className="container m-auto py-10 ">
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={6}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index} className="hex-slide">
//             <div className='w-[371px] h-[371px] flex items-center justify-center flex-col gap-5'
//               style={{
//                 backgroundImage: "url('/Polygon.svg')",
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}>
//               <img src={slide.img} alt={slide.name} className="profile-pic" />
//               <h3 className="name text-white font-medium text-lg">{slide.name}</h3>
//               <p className="desc text-[#434242] text-xs w-8/12 text-center">{slide.desc}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const slides = [
  { name: 'Mr Shahzad', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  { name: 'Mr Alex', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  { name: 'Ms Julia', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  { name: 'Mr John', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
  { name: 'Ms Imran', img: '/testimonialPerson.svg', desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum' },
];

function App() {
  return (
    <div className="container m-auto py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hex-slide">
            <div className='w-[300px] sm:w-[350px] md:w-[371px] h-[300px] sm:h-[350px] md:h-[371px] flex items-center justify-center flex-col gap-5'
              style={{
                backgroundImage: "url('/Polygon.svg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <img src={slide.img} alt={slide.name} className="profile-pic" />
              <h3 className="name text-white font-medium text-lg">{slide.name}</h3>
              <p className="desc text-[#434242] text-xs w-8/12 text-center">{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;