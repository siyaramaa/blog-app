'use client';
import Image from "next/image";
import React from "react";
import urlFor from "@/lib/sanityImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Banner({images}) {

  return (
       <Swiper
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
       spaceBetween={50} className="mx-auto flex rounded-xl h-[40vh] sm:h-[50vh]  md:h-[60vh] lg:h-[75vh] max-w-screen-xl p-6  dark:from-inherit dark:to-inherit relative">
          {
            images.map((b) => (


              <SwiperSlide key={b.bannerImage}>

              <Image
                src={urlFor(b.bannerImage).url()}
                alt={b.description}
                quality={100}
                loading="lazy"
                load
                className="rounded-xl  backgroundImg -z-10 object-cover sm:object-scale-down  object-center"
                fill
      />
                </SwiperSlide>

            ))
          }
  


          </Swiper>

  );
}

export default Banner;



// <div className="rightSide  flex flex-col  justify-around items-center">
// <div className="textContainer space-y-7">
//   <strong className="block text-center text-xl font-bold sm:text-3xl ">
//     Sign up for our newsletter
//   </strong>
//   <p className="font-serif max-w-sm text-center text-base leading-5">
//     Stay up to date with the roadmap progress, announcements and
//     exclusive discounts feel free to sign up with your email.
//   </p>
// </div>

// <div className="mx-auto max-w-md">
//   <form className="mt-6">
//     <div className="relative max-w-lg">
//       <label className="sr-only" htmlFor="email">
//         {" "}
//         Email{" "}
//       </label>

//       <input
//         className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
//         id="email"
//         type="email"
//         placeholder="john@doe.com"
//       />

//       <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium  transition hover:bg-blue-700">
//         Subscribe
//       </button>
//     </div>
//   </form>
// </div>
// </div>