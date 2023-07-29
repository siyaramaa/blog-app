'use client';
import React from "react";
import Image from "next/image";
import urlFor from "@/lib/sanityImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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