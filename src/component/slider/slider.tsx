'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AiPic from '@/asset/images/Ai1.avif'
import AlgoritmPic from '@/asset/images/algoritm.jpg'
import Aip3 from '@/asset/images/Ai2.jpg'

const images = [Aip3, AlgoritmPic, AiPic]

function SimpleSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full  mx-auto ">

      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
              fill
            />
          </div>
        ))}
      </div>


      <div className="mt-4 flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${index === current ? 'bg-blue-600' : 'bg-gray-400'
              }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default SimpleSlider






