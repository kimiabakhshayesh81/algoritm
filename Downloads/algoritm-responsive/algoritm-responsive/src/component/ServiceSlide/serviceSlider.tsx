

// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// import bankPic from '@/asset/images/bankTeck.png'
// import lendPic from '@/asset/images/lendTeck.png'
// import regPic from '@/asset/images/regTeck.png'
// import dataPic from '@/asset/images/dataTeck.png'

// const slides = [
//   {
//     img: bankPic,
//     title: 'هوش تجاری، نئوبانک، بانکداری اجتماعی...',
//     label: 'سیستم بانکداری',
//   },
//   {
//     img: dataPic,
//     title: 'تحلیل فرایند بانکداری',
//     label: 'تحلیل داده‌ها',
//   },
//   {
//     img: lendPic,
//     title: 'BNPL، تامین مالی جمعی، اعتبارسنجی هوشمند',
//     label: 'لندتک',
//   },
//   {
//     img: regPic,
//     title: 'نظارت هوشمند، قراردادهای هوشمند',
//     label: 'رگ‌تک',
//   },
// ]

// export default function Slider() {
//   const [current, setCurrent] = useState(0)
//   const [hovered, setHovered] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   const currentSlide = slides[current]

//   return (
//     <div className="relative w-full max-w-3xl mx-auto">
//       {/* اسلاید عکس */}
//       <div
//         className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer"
//         onClick={() => router.push('/service')}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <Image
//           src={currentSlide.img}
//           alt={currentSlide.label}
//           fill
//           className={`object-cover transition duration-500 ${hovered ? 'blur-sm scale-105' : ''
//             }`}
//         />

//         {/* نمایش عنوان هنگام هاور */}
//         {hovered && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center text-lg md:text-2xl font-semibold p-4">
//             {currentSlide.title}
//           </div>
//         )}
//       </div>

//       {/* متن زیر عکس */}
//       <p className="mt-4 text-center text-black font-bold text-lg">
//         {currentSlide.label}
//       </p>


//       <div className="mt-2 flex justify-center gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-600' : 'bg-gray-400'
//               }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   )
// }

















// 'use client'

// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// import bankPic from '@/asset/images/bankTeck.png'
// import lendPic from '@/asset/images/lendTeck.png'
// import regPic from '@/asset/images/regTeck.png'
// import dataPic from '@/asset/images/dataTeck.png'

// const slides = [
//   {
//     img: bankPic,
//     title: 'سیستم بانکداری',
//     description: 'هوش تجاری، نئوبانک، بانکداری اجتماعی...',
//   },
//   {
//     img: dataPic,
//     title: 'تحلیل داده‌ها',
//     description: 'تحلیل فرایند بانکداری',
//   },
//   {
//     img: lendPic,
//     title: 'لندتک',
//     description: 'BNPL، تامین مالی جمعی، اعتبارسنجی هوشمند',
//   },
//   {
//     img: regPic,
//     title: 'رگ‌تک',
//     description: 'نظارت هوشمند، قراردادهای هوشمند',
//   },
// ]

// export default function Slider() {
//   const router = useRouter()

//   return (
//     <div className="w-full overflow-x-auto">
//       <div className="flex gap-6 px-4 md:px-0 pb-4 md:pb-8 overflow-x-scroll md:overflow-x-hidden scroll-smooth">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="min-w-[280px] md:min-w-[320px] bg-white shadow-xl rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105 duration-300"
//             onClick={() => router.push('/service')}
//           >
//             <div className="relative h-48 w-full">
//               <Image
//                 src={slide.img}
//                 alt={slide.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 text-right">
//               <h3 className="font-bold text-lg text-gray-800 mb-2">{slide.title}</h3>
//               <p className="text-sm text-gray-600 leading-relaxed">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

















'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import bankPic from '@/asset/images/bankTeck.png'
import lendPic from '@/asset/images/download.png'
import regPic from '@/asset/images/regTeck.png'
import dataPic from '@/asset/images/dataTeck.png'

const slides = [
  {
    img: bankPic,
    title: 'سیستم بانکداری',
    description: 'هوش تجاری، نئوبانک، بانکداری اجتماعی...',
  },
  {
    img: dataPic,
    title: 'تحلیل داده‌ها',
    description: 'تحلیل فرایند بانکداری',
  },
  {
    img: lendPic,
    title: 'لندتک',
    description: 'BNPL، تامین مالی جمعی، اعتبارسنجی هوشمند',
  },
  {
    img: regPic,
    title: 'رگ‌تک',
    description: 'نظارت هوشمند، قراردادهای هوشمند',
  },
]

export default function Slider() {
  const router = useRouter()

  return (
    <div className="w-full overflow-x-auto md:overflow-visible px-2">
      <div
        className="
          flex flex-row-reverse gap-6 md:justify-center 
          pb-6
          snap-x snap-mandatory 
          overflow-x-auto md:overflow-x-visible 
          scroll-smooth
        "
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              w-[90%] sm:w-[80%] md:w-[300px]
              snap-start
              bg-white shadow-md rounded-2xl overflow-hidden 
              cursor-pointer transition-transform duration-300 hover:scale-105
            "
            onClick={() => router.push('/service')}
          >
            <div className="relative h-48 w-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-right">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{slide.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

