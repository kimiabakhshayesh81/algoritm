
import Image from 'next/image'
import Link from 'next/link'

function News({img}){
    return(
       <div className='mainNews'>
            

            <div className='shadow-2xl'>

              <div className='NewsCart bg-gray-100 w-full h-auto rounded-[10px] '>
                <div className='ImgCart flex justify-center items-center w-full p-3'>
                  <Image src={img} alt='بانک صادرات' className=' rounded-[10px] object-cover w-[90%] '/>
                </div>

                <div className='InfoNews p-2'>
                  <h1 className='text-[20px] '>خدمات جدید بانک صادرات ایران</h1>
                  <p className=' '>در هفتمین نمایشگاه «تراکنش ایران» دو محصول فناورانه «صاپ» و «سامانه جامع بازاریابی» 
                    .بانک صادرات با تغییرات و رویکردهای جدید معرفی شدند
                    ،به گزارش بازرگانی خبرگزاری مهر به نقل از روابط عمومی بانک صادرات
                    ...مراسم افتتاحیه این نمایشگاه با حضور سیدحمید پورمحمدی، معاون اقتصادی سازمان برنامه و بودجه و بنیانگ
                  </p>
                </div>

                <hr className="w-[90%] border-t border-gray-600 mx-auto my-4" />

                <div className='DetailNews pr-3 pb-4'>
                  <Link href='./news'>مدت مطالعه 15 دقیقه</Link>
                </div>
            </div>

          </div>
            
        </div>
    )
}

export default News