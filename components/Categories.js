"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Categories() {
  return (

    <Swiper className="mt-3 w-full md:max-w-xl rounded"
    breakpoints={{
        0: {
          slidesPerView: 0,
        },
        300:{
          slidesPerView:2,
        },
        560: {
          slidesPerView: 3,
        },
        865:{
          slidesPerView:4
        }
      }}
    >
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 1</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl  w-28 min-w-fit">Category 2</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 3</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 4</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 5</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 6</p>
      </SwiperSlide>
      <SwiperSlide className="text-center">
        <p className="border hover:bg-gray-200 cursor-pointer p-2 dark:hover:bg-slate-700 dark:border-gray-600  rounded-3xl w-28 min-w-fit">Category 7</p>
      </SwiperSlide>
   
      
    </Swiper>
  );
}

export default Categories;


// <section>
//   <p className='text-white text-3xl font-semibold mb-6'>New Releases</p>
//   <Swiper
//     spaceBetween={50}
//   slidesPerView={6}
//   >
//   <div>
//         <SwiperSlide >
//           sad
//         </SwiperSlide>
//         <SwiperSlide >
//           sad
//         </SwiperSlide>
//         <SwiperSlide >
//           sad
//         </SwiperSlide>
//         <SwiperSlide >
//           sad
//         </SwiperSlide>
 
//   </div>
//   </Swiper>
// </section>