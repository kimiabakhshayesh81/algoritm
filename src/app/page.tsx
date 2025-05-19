'use client'
import 'flowbite';
import { Check } from 'lucide-react' 


import SimpleSlider from "@/component/Slider/slider";
import Btn from '@/component/Button/button';
import Slider from '@/component/ServiceSlide/serviceSlider';
import News from '@/component/News/news';


import saderatPic from './../../public/sadbank.png'
import newsPic from './../../public/news.png'

export default function Home() {
  return(
    <div>
      <SimpleSlider/>

      <div className ="text-right pt-8 p-3">
        <section className='About'>
            <div>
              <h1 className="font-bold text-xl text-black pb-1">داستان ما</h1>
              <div className="flex justify-end items-center mb-5">
                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
              </div>

              <p className='text-[20px] text-black pb-1'>:الگوریتم،پیشگام در دنیای داده و هوش مصنوعی</p>
              <p className=' flex flex-col'>
                .الگوریتم یک شرکت پیشرو در زمینه داده و هوش مصنوعی است که با ارائه راه‌حل‌های نوآورانه و کارآمد، به سازمان‌ها در مسیر تحول دیجیتال کمک می‌کند
              </p>
            </div>
          
            <div className=' pl-2 pt-4'>
              <Btn href='./about'>بیشتر بخوانید</Btn>
            </div> 
        </section>

        <section className='Service pt-3'>
          <div>
            <h2 className='font-bold text-xl text-black pb-1'>خدمات ما</h2>
            <div className="flex justify-end items-center mb-5">
                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
          </div>

          <div className='sliderService w-full object-cover'>
            <Slider/>
          </div>
        </section>

        <section className='Algoritm pt-3'>
          <div >
            <h2 className='font-bold text-xl text-black pb-1'>چراالگوریتم</h2>
            <div className="flex justify-end items-center mb-5">
                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                <div className="w-24 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>
            <p className='flex flex-col'>
              ما در الگوریتم، به دنبال ایجاد دنیایی هوشمندتر از طریق قدرت داده و هوش مصنوعی هستیم
              .هدف ما ارائه راهکارهای انعطاف‌پذیر و هوشمند است که به مشتریان کمک کنند
              .تا در محیط پویا و پیچیده امروزی به بهترین شکل ممکن عمل کنند
            </p>
          </div>

          <div className=' flex flex-col gap-8 pt-6'>
            <div className=' flex flex-row-reverse gap-4'>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                <Check size={22} /> 
                </div>

                <div>
                  <p className=' font-semibold font-serif text-[1.2rem]'>تخصص</p>
                  <span className=' flex-wrap block'>تیم متخصص و مجرب در زمینه داده و هوش مصنوعی و سابقه اثبات شده در ارائه راه‌حل‌های موفق</span>
                </div>
            </div>
            

            <div className=' flex flex-row-reverse gap-4'>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                <Check size={22} /> 
                </div>

                <div>
                  <p className=' font-semibold font-serif text-[1.2rem]'>نوآوری</p>
                  <span className=' flex-wrap block'>استفاده از جدیدترین فناوری‌های هوش مصنوعی و ارائه راه‌حل‌های خلاقانه و متناسب با نیازهای شما</span>
                </div>
            </div>

            <div className=' flex flex-row-reverse gap-4'>
                <div className="w-10 h-10 rounded-full bg-[#6FABC2] flex items-center justify-center text-white shadow-md min-w-[2.5rem] min-h-[2.5rem] shrink-0">
                <Check size={22} /> 
                </div>
                
                <div>
                  <p className=' font-semibold font-serif text-[1.2rem]'>تعهد</p>
                  <span className=' flex-wrap block'>همکاری با شما در تمام مراحل پروژه و ارائه پشتیبانی و خدمات پس از فروش</span>
                </div>
            </div>
          </div>
        </section>


        <section className='News pt-6'>

          <h3 className="font-bold text-xl text-black pb-1 ">اخبار و تازه ها</h3>
            <div className="flex justify-end items-center mb-5">
                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
            </div>

            <div className=' gap-10'>
              <News img={saderatPic}/>
              <News img={saderatPic}/>
            </div>
          
        </section>
      </div>
    </div>
  )
}
