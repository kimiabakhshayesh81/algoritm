
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import front from '@/asset/images/frontend.png'
import back from '@/asset/images/backend.png'
import devOps from '@/asset/images//devops.png'
import ml from '@/asset/images/mlops.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const differentJobs = [
  { img: back, title: 'Back End Developer', slug: 'backend-developer' },
  { img: devOps, title: 'DevOps Engineer', slug: 'devops-engineer' },
  { img: front, title: 'Front End Developer', slug: 'frontend-developer' },
  { img: ml, title: 'MlOps Engineer', slug: 'mlops-engineer' },
]

function JobCart() {
  const [isMounted, setIsMounted] = useState(false)
  const paginationRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div dir="rtl" className="mt-16 ">
      {isMounted && (
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          pagination={{ el: paginationRef.current, clickable: true }}
          // breakpoints={{
          //     640: {
          //       slidesPerView: 2,
          //     },
          //     1024: {
          //       slidesPerView: 3,
          //     },
          //   }}

          className="pb-8"
        >
          {differentJobs.map((job, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white rounded-3xl shadow-md p-6 border border-gray-200 flex flex-col items-center text-center min-h-[320px]">
                <Image
                  src={job.img}
                  alt={job.title}
                  className="w-24 h-24 object-contain mb-4"
                />
                <p className="text-blue-800 font-semibold text-lg mb-4">
                  {job.title}
                </p>

                <Link href={`/job/${job.slug}`} className="mt-auto w-full">
                  <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-full text-sm hover:bg-blue-800 transition-all">
                    مشاهده جزئیات
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* دات‌ها خارج از کارت‌ها */}
      <div ref={paginationRef} className="custom-pagination mt-4 flex justify-center gap-2"></div>
    </div>
  )
}

export default JobCart
