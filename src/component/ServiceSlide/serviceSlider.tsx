

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import bankPic from '@/asset/images/bankTeck.png'
import lendPic from '@/asset/images/lendTeck.png'
import regPic from '@/asset/images/regTeck.png'
import dataPic from '@/asset/images/dataTeck.png'

const slides = [
  {
    img: bankPic,
    title: 'هوش تجاری، نئوبانک، بانکداری اجتماعی...',
    label: 'سیستم بانکداری',
  },
  {
    img: dataPic,
    title: 'تحلیل فرایند بانکداری',
    label: 'تحلیل داده‌ها',
  },
  {
    img: lendPic,
    title: 'BNPL، تامین مالی جمعی، اعتبارسنجی هوشمند',
    label: 'لندتک',
  },
  {
    img: regPic,
    title: 'نظارت هوشمند، قراردادهای هوشمند',
    label: 'رگ‌تک',
  },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentSlide = slides[current]

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* اسلاید عکس */}
      <div
        className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => router.push('/service')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={currentSlide.img}
          alt={currentSlide.label}
          fill
          className={`object-cover transition duration-500 ${hovered ? 'blur-sm scale-105' : ''
            }`}
        />

        {/* نمایش عنوان هنگام هاور */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-lg md:text-2xl font-semibold p-4">
            {currentSlide.title}
          </div>
        )}
      </div>

      {/* متن زیر عکس */}
      <p className="mt-4 text-center text-black font-bold text-lg">
        {currentSlide.label}
      </p>


      <div className="mt-2 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-600' : 'bg-gray-400'
              }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
