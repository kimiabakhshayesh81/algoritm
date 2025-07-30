
// import Image, { StaticImageData } from 'next/image'
// import Link from 'next/link'

// interface NewsProps {
//   img: string | StaticImageData
// }

// function News({ img }: NewsProps) {
//   return (
//     <div className='mainNews rounded-[10px] md:w-96 '>


//       <div className='NewsCart shadow-2xl rounded-[10px] bg-gray-100 w-full h-auto  '>
//         <div className='ImgCart flex justify-center items-center w-full p-3'>
//           <Image src={img} alt='بانک صادرات' className=' rounded-[10px] object-cover w-[90%]  md:h-52' />
//         </div>

//         <div className='InfoNews p-2'>
//           <h1 className='text-[20px] '>خدمات جدید بانک صادرات ایران</h1>
//           <p className=' '>در هفتمین نمایشگاه «تراکنش ایران» دو محصول فناورانه «صاپ» و «سامانه جامع بازاریابی»
//             .بانک صادرات با تغییرات و رویکردهای جدید معرفی شدند
//             ،به گزارش بازرگانی خبرگزاری مهر به نقل از روابط عمومی بانک صادرات
//             ...مراسم افتتاحیه این نمایشگاه با حضور سیدحمید پورمحمدی، معاون اقتصادی سازمان برنامه و بودجه و بنیانگ
//           </p>
//         </div>

//         <hr className="w-[90%] border-t border-gray-600 mx-auto my-4" />

//         <div className='DetailNews pr-3 pb-4'>
//           <Link href='./news'>مدت مطالعه 15 دقیقه</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default News

















// components/News.tsx
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface NewsProps {
  id: string
  img: string | StaticImageData
  title: string
  content: string
}

function News({ id, img, title, content }: NewsProps) {
  return (
    <Link href={`/news/${id}`}>
      <div className='cursor-pointer mainNews rounded-[10px] md:w-96 '>
        <div className='NewsCart shadow-2xl rounded-[10px] bg-gray-100 w-full h-auto'>
          <div className='ImgCart flex justify-center items-center w-full p-3'>
            <Image src={img} alt={title} className='rounded-[10px] object-cover w-[90%] md:h-52' />
          </div>

          <div className='InfoNews p-2'>
            <h1 className='text-[20px]'>{title}</h1>
            <p className='line-clamp-3'>{content}</p>
          </div>

          <hr className="w-[90%] border-t border-gray-600 mx-auto my-4" />

          <div className='DetailNews pr-3 pb-4'>
            <span>مدت مطالعه ۱۵ دقیقه</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default News
