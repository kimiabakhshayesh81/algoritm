
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import khadamatPic from './../../../public/khadamat.png';
import saderatPic from './../../../public/sadbank.png';
import saadPic from './../../../public/saad.png';
import kharazmiPic from './../../../public/kharazmi.png';
import hoshmandPic from './../../../public/hooshmand.png';

const partners = [
  {
    logo: saderatPic,
    name: 'بانک صادرات',
    description: 'ارائه‌دهنده راهکارهای مالی نوین',
  },
  {
    logo: saadPic,
    name: 'هلدینگ صادرات',
    description: 'ارائه‌دهنده خدمات امنیت اطلاعات',
  },
  {
    logo: khadamatPic,
    name: ' شرکت خدمات انفورماتیک',
    description: 'توسعه‌دهنده نرم‌افزارهای بانکی',
  },
  {
    logo: hoshmandPic,
    name: ' شرکت هوشمند سپهر',
    description: 'توسعه‌دهنده نرم‌افزارهای بانکی',
  },
  {
    logo: kharazmiPic,
    name: 'شرکت خوارزمی',
    description: 'ارائه‌دهنده خدمات امنیت اطلاعات',
  },
];

export default function PartnersSlider() {
  return (
    <div dir="rtl" className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">همکاران ما</h2>

      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          pagination={{ el: '.custom-pagination', clickable: true }}
          className="pb-8"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="h-80 flex flex-col items-center justify-between gap-3 p-4 bg-white rounded-lg shadow-md">
                <img
                  src={typeof partner.logo === 'string' ? partner.logo : partner.logo.src}
                  alt={partner.name}
                  className="w-32 h-32 object-contain"
                />
                <h3 className="text-lg font-semibold">{partner.name}</h3>
                <p className="text-gray-600 text-center">{partner.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
        <div className="custom-pagination flex justify-center mt-6"></div>
      </div>
    </div>
  );
}

