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












// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import AiPic from '@/asset/images/Ai1.avif'
// import AlgoritmPic from '@/asset/images/algoritm.jpg'
// import Aip3 from '@/asset/images/Ai2.jpg'

// const images = [
//   {
//     src: Aip3,
//     title: 'هوش مصنوعی در خدمت بانکداری نوین',
//   },
//   {
//     src: AlgoritmPic,
//     title: 'تحول دیجیتال با الگوریتم‌های پیشرفته',
//   },
//   {
//     src: AiPic,
//     title: 'نسل جدید خدمات بانکی مبتنی بر AI',
//   },
// ]

// export default function SimpleSlider() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const handleNext = () => {
//     setCurrent((prev) => (prev + 1) % images.length)
//   }

//   const handlePrev = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length)
//   }

//   return (
//     <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl mx-auto">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
//         >
//           <Image
//             src={img.src}
//             alt={`Slide ${index}`}
//             fill
//             className="object-cover"
//             sizes="100vw"
//             priority={index === current}
//           />
//           {/* کپشن روی عکس */}
//           <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white p-6 text-lg md:text-2xl font-semibold">
//             {img.title}
//           </div>
//         </div>
//       ))}

//       {/* دکمه‌های کنترل چپ و راست */}
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white text-2xl rounded-full p-2 z-30"
//       >
//         ‹
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white text-2xl rounded-full p-2 z-30"
//       >
//         ›
//       </button>

//       {/* نقاط پایینی */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 hover:scale-110 ${index === current ? 'bg-white' : 'bg-gray-400'}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

