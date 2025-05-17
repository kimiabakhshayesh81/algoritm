// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Ai from './../../../public/call.png'
// import data from './../../../public/cropped-Logo-New01 1.png'

// const images = [Ai, data]

// export default function SimpleSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//   }

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
//   }

//   return (
//     <div className="w-full max-w-full mx-auto relative">
//       <div className="overflow-hidden rounded-lg">
//         <Image
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full object-cover"
//           width={800}
//           height={500}
//           priority={true}
//         />
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//         aria-label="Previous Slide"
//       >
//         ‹
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
//         aria-label="Next Slide"
//       >
//         ›
//       </button>

//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-3 h-3 rounded-full ${
//               idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//             }`}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }






'use client'

import { useState } from 'react'
import Image from 'next/image'
import AiPic from './../../../public/Ai1.avif'
import AlgoritmPic from "./../../../public/algoritm.jpg";
import Aipicture from './../../../public/Ai2.jpg'

const images = [AiPic ,AlgoritmPic , Aipicture]

export default function SimpleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full relative max-w-full mx-auto">
      <div className="relative overflow-hidden rounded-lg w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        ›
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
