'use client'
import 'flowbite';
import { Check } from 'lucide-react'


import SimpleSlider from "@/component/slider/slider";
import Btn from '@/component/Button/button';
import Slider from '@/component/ServiceSlide/serviceSlider';
import News from '@/component/News/news';

import 'leaflet/dist/leaflet.css';


import saderatPic from '@/asset/images/sadbank.png'
import newsPic from '@/asset/images/news.png'




export default function Home() {


  return (
    <div>
      <SimpleSlider />

      <div className="text-right pt-8 ">
        <div className='md:mr-10'>

          <div>
            <h1 className="font-bold text-xl text-black pb-1 p-3">داستان ما</h1>

            <div className="flex justify-end items-center mb-5">
              <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1 md:hidden"></div>
              <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
          </div>
        </div>


         <section className='About md:flex md:flex-row-reverse md:justify-around md:items-end pb-12 pt-8'>
          <div className=''>

            <p className='text-[20px] text-black font-semibold pb-1 p-3 md:mx-16'>:الگوریتم ، پیشگام در دنیای داده و هوش مصنوعی</p>
            
            <p className=' flex flex-col p-3 md:mx-16'>
              .شرکت الگوریتم با رسالت ایجاد تحول در صنعت فناوری اطلاعات، به عنوان بازوی فناورانه بانک صادرات، در مسیر توسعه راهکارهای هوشمند مبتنی بر داده گام برداشته است 
            </p>
            <p className=' flex flex-col p-3 md:mx-16'>
              .ما با ترکیب دانش تخصصی، نوآوری مستمر و تعهد به کیفیت، سازمان‌ها را در دستیابی به آینده‌ای دیجیتال، کارآمد و داده‌محور همراهی می‌کنیم
            </p>
          </div>

          <div className=' pl-2 pt-4 p-3 '>
            <Btn href='./about'>بیشتر بخوانید</Btn>
          </div>
        </section> 









        <section className='Service  md:px-16 py-8 bg-[#f9fafa]'>
          <div className='text-right mb-10'>
            <h2 className='font-bold text-xl text-black pb-1 p-3'>خدمات ما</h2>
            <div className="flex justify-end items-center mb-5">
              <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1 md:hidden"></div>
              <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
          </div>
          <Slider />
        </section>



        <section className='Algoritm pt-8'>
          <div className='md:mr-10'>
            <h2 className='font-bold text-xl text-black pb-1 p-3'>چراالگوریتم</h2>
            <div className="flex justify-end items-center mb-5">
              <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1 md:hidden"></div>
              <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
          </div>
          <div className='md:mx-16' >

            <p className='flex flex-col p-3 md:mx-16'>
              .ما در الگوریتم، به دنبال ایجاد دنیایی هوشمندتر از طریق بهره‌گیری عمیق از قدرت داده و هوش مصنوعی هستیم 
            </p>
            <p className='flex flex-col p-3 md:mx-16'>
               .باور ما بر این است که داده، به‌عنوان منبعی حیاتی، می‌تواند زمینه‌ساز تحول در تصمیم‌گیری، بهینه‌سازی فرآیندها و خلق ارزش‌های نوآورانه برای سازمان‌ها باشد
            </p>
            <p className='flex flex-col p-3 md:mx-16'>
              .هدف ما، ارائه‌ی راهکارهایی انعطاف‌پذیر، هوشمند و مقیاس‌پذیر است که به سازمان‌ها و نهادهای مالی کمک کند تا در محیط پویای امروز  که با پیچیدگی‌های روزافزون، تغییرات سریع فناوری و رقابت شدید همراه است  بهترین عملکرد ممکن را داشته باشند
            </p>
           

            <div className=' flex flex-col gap-8 pt-8 p-3 md:flex-row md:px-3'>


              <div className=' flex flex-row-reverse gap-4 '>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                  <Check size={22} />
                </div>

                <div>
                  <p className=' font-semibold font-serif text-[1.2rem] '>تخصص</p>
                  <span className=' flex-wrap block '>تیم متخصص و مجرب در زمینه داده و هوش مصنوعی و سابقه اثبات شده در ارائه راه‌حل‌های موفق</span>
                </div>
              </div>


              <div className=' flex flex-row-reverse gap-4 '>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                  <Check size={22} />
                </div>

                <div>
                  <p className=' font-semibold font-serif text-[1.2rem]'>نوآوری</p>
                  <span className=' flex-wrap block'>استفاده از جدیدترین فناوری‌های هوش مصنوعی و ارائه راه‌حل‌های خلاقانه و متناسب با نیازهای شما</span>
                </div>
              </div>

              <div className=' flex flex-row-reverse gap-4 '>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                  <Check size={22} />
                </div>

                <div>
                  <p className=' font-semibold font-serif text-[1.2rem]'>تعهد</p>
                  <span className=' flex-wrap block'>همکاری با شما در تمام مراحل پروژه و ارائه پشتیبانی و خدمات پس از فروش</span>
                </div>
              </div>
            </div>
          </div>
          
        </section> 
 





          {/* <section className="Algoritm pt-12 bg-white max-w-5xl mx-auto px-6 md:px-12">
  <div className="md:mr-10 mb-10">
    <h2 className="font-bold text-3xl text-[#1B3B5F] pb-2">چرا الگوریتم</h2>
    <div className="flex justify-end items-center mb-6">
      <div className="w-4 h-4 bg-[#6FABC2] rotate-45 -ml-1 md:hidden"></div>
      <div className="w-28 h-1 rounded-l-xl bg-[#6FABC2]"></div>
    </div>
  </div>

  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
    <p>ما در الگوریتم، به دنبال ایجاد دنیایی هوشمندتر از طریق بهره‌گیری عمیق از قدرت داده و هوش مصنوعی هستیم.</p>
    <p>باور ما بر این است که داده، به‌عنوان منبعی حیاتی، می‌تواند زمینه‌ساز تحول در تصمیم‌گیری، بهینه‌سازی فرآیندها و خلق ارزش‌های نوآورانه برای سازمان‌ها باشد.</p>
    <p>هدف ما، ارائه‌ی راهکارهایی انعطاف‌پذیر، هوشمند و مقیاس‌پذیر است که به سازمان‌ها و نهادهای مالی کمک کند تا در محیط پویای امروز با پیچیدگی‌های روزافزون، تغییرات سریع فناوری و رقابت شدید، بهترین عملکرد ممکن را داشته باشند.</p>
  </div>

  <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-10">
    {[
      {
        title: "تخصص",
        desc: "تیم متخصص و مجرب در زمینه داده و هوش مصنوعی و سابقه اثبات شده در ارائه راه‌حل‌های موفق",
      },
      {
        title: "نوآوری",
        desc: "استفاده از جدیدترین فناوری‌های هوش مصنوعی و ارائه راه‌حل‌های خلاقانه و متناسب با نیازهای شما",
      },
      {
        title: "تعهد",
        desc: "همکاری با شما در تمام مراحل پروژه و ارائه پشتیبانی و خدمات پس از فروش",
      },
    ].map(({ title, desc }) => (
      <div key={title} className="flex flex-row-reverse items-start gap-4 max-w-sm">
        <div className="w-12 h-12 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md flex-shrink-0">
          <Check size={24} />
        </div>
        <div>
          <h3 className="font-semibold text-xl text-[#1B3B5F] mb-1">{title}</h3>
          <p className="text-gray-600">{desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

 */}






        <section className='News pt-8'>
          <div className='md:mr-10'>
            <h3 className="font-bold text-xl text-black pb-1 p-3">اخبار و تازه ها</h3>
            <div className="flex justify-end items-center mb-5">
              <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1 md:hidden"></div>
              <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
          </div>


          <div className=' gap-10 p-3 md:flex md:justify-center'>
            <News img={saderatPic} />
            <News img={newsPic} />
            <News img={saderatPic} />
          </div>

        </section>
      </div>
    </div>
  )
}






























// 'use client'
// import 'flowbite';
// import { Check } from 'lucide-react' 

// import SimpleSlider from "@/component/Slider/slider";
// import Btn from '@/component/Button/button';
// import Slider from '@/component/ServiceSlide/serviceSlider';
// import News from '@/component/News/news';

// import saderatPic from './../../public/sadbank.png'
// import newsPic from './../../public/news.png'

// export default function Home() {
//   return (
//     <div className="w-full">
//       <SimpleSlider />

//       <div className="text-right pt-8 max-w-screen-xl mx-auto px-4">
//         {/* بخش داستان ما */}
//         <section className="About">
//           <div>
//             <h1 className="font-bold text-xl lg:text-2xl text-black pb-1 p-3">داستان ما</h1>
//             <div className="flex justify-end items-center mb-5">
//               <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//               <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//             </div>

//             <p className="text-[20px] lg:text-[22px] text-black pb-1 p-3">:الگوریتم، پیشگام در دنیای داده و هوش مصنوعی</p>
//             <p className="p-3 leading-relaxed">
//               .الگوریتم یک شرکت پیشرو در زمینه داده و هوش مصنوعی است که با ارائه راه‌حل‌های نوآورانه و کارآمد، به سازمان‌ها در مسیر تحول دیجیتال کمک می‌کند
//             </p>
//           </div>

//           <div className="pl-2 pt-4 p-3">
//             <Btn href="./about">بیشتر بخوانید</Btn>
//           </div>
//         </section>

//         {/* بخش خدمات ما */}
//         <section className="Service pt-10">
//           <div>
//             <h2 className="font-bold text-xl lg:text-2xl text-black pb-1 p-3">خدمات ما</h2>
//             <div className="flex justify-end items-center mb-5">
//               <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//               <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//             </div>
//           </div>

//           <div className="sliderService w-full object-cover px-3">
//             <Slider />
//           </div>
//         </section>

//         {/* بخش چرا الگوریتم */}
//         <section className="Algoritm pt-10">
//           <div>
//             <h2 className="font-bold text-xl lg:text-2xl text-black pb-1 p-3">چرا الگوریتم</h2>
//             <div className="flex justify-end items-center mb-5">
//               <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//               <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//             </div>

//             <p className="p-3 leading-relaxed">
//               ما در الگوریتم، به دنبال ایجاد دنیایی هوشمندتر از طریق قدرت داده و هوش مصنوعی هستیم. هدف ما ارائه راهکارهای انعطاف‌پذیر و هوشمند است که به مشتریان کمک کنند تا در محیط پویا و پیچیده امروزی به بهترین شکل ممکن عمل کنند.
//             </p>
//           </div>

//           <div className="flex flex-col gap-8 pt-8 p-3">
//             {[
//               {
//                 title: "تخصص",
//                 desc: "تیم متخصص و مجرب در زمینه داده و هوش مصنوعی و سابقه اثبات شده در ارائه راه‌حل‌های موفق",
//               },
//               {
//                 title: "نوآوری",
//                 desc: "استفاده از جدیدترین فناوری‌های هوش مصنوعی و ارائه راه‌حل‌های خلاقانه و متناسب با نیازهای شما",
//               },
//               {
//                 title: "تعهد",
//                 desc: "همکاری با شما در تمام مراحل پروژه و ارائه پشتیبانی و خدمات پس از فروش",
//               },
//             ].map((item, i) => (
//               <div key={i} className="flex flex-col lg:flex-row-reverse gap-4">
//                 <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
//                   <Check size={22} />
//                 </div>
//                 <div>
//                   <p className="font-semibold font-serif text-[1.2rem]">{item.title}</p>
//                   <span className="block">{item.desc}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* بخش اخبار */}
//         <section className="News pt-10">
//           <h3 className="font-bold text-xl lg:text-2xl text-black pb-1 p-3">اخبار و تازه ها</h3>
//           <div className="flex justify-end items-center mb-5">
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//             <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-10 p-3">
//             <News img={saderatPic} />
//             <News img={newsPic} />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

