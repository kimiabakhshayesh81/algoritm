import CounterSection from '@/component/counterSection/CounterSection'
import AboutPic from './../../../public/aboutUs.png'
import Image from 'next/image'
import GoalPic from './../../../public/goals.png'
import AchivePic from './../../../public/achivment.png'
import HistoryPic from './../../../public/history.png'
import CompanyHistoryTimeline from '@/component/History/history'
import Btn from '@/component/Button/button'

function About(){
    return(
        <div className=' w-full'>
            <div className='AboutPic pb-2'>
                <Image src={AboutPic} alt='about'/>
            </div>
            <header className=' flex flex-col justify-center items-center w-full'>
                <div className=' flex flex-col gap-2 w-full justify-center items-center'>
                    <h1 className=' font-bold font-mono text-2xl '>ما که هستیم</h1>
                    <hr className=' w-[40%] border-t bg-[#6FABC2] h-1 border-none '/>
                </div>
                
                <div className="w-[85%] text-right pt-6 flex flex-col gap-2">
                    <p>.شرکت داده و هوش مصنوعی الگوریتم، بازوی فناورانه بانک صادرات ایران است که با هدف توسعه راهکارهای نوین در حوزه هوش مصنوعی تأسیس شده است</p>
                    <p>.با تکیه بر تخصص و فناوری‌های روز، خدماتی هوشمند برای تحول دیجیتال به سازمان‌ها ارائه می‌کنیم</p>
                    <p>اعتماد بانک صادرات، ضامن کیفیت و پایداری راهکارهای ما است</p>
                </div>

            </header>

            <section className='Counter'>
                <CounterSection/>
            </section>

            <div className=' w-full pt-5'>
                <div className="flex justify-center items-center pb-4">
                    <Image
                        className="w-[90%] h-[20rem] object-cover"
                        src={GoalPic}
                        alt="the goals"
                    />
                </div>

                <section className=' Goals'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h2 className=' font-bold font-mono text-2xl'>چشم انداز ما</h2>
                        <hr className=' w-[40%] border-t bg-[#6FABC2] h-1 border-none '/>
                    </div>
                    <div dir ='rtl' className=' pt-6 px-3'>
                        <p className=' text-right'>چشم‌انداز ما، تبدیل‌شدن به یکی از پیشگامان صنعت هوش مصنوعی در کشور و منطقه است؛ شرکتی که با تکیه بر تخصص، نوآوری و تعهد، مرجع ارائه خدمات هوشمند در حوزه مالی و فراتر از آن باشد.</p>
                        <p className='font-semibold pt-4 text-right py-3'>اهداف کلیدی شرکت شامل موارد زیر است : </p>

                        <ul className='list-disc pr-5 text-right flex flex-col gap-2 font-serif'>
                            <li>توسعه محصولات و راهکارهای مبتنی بر داده و یادگیری ماشین برای ارتقاء بهره‌وری و تصمیم‌گیری هوشمند در بانک‌ها و سایر سازمان‌ها</li>
                            <li>ایجاد زیرساخت‌های بومی و امن برای پردازش، تحلیل و بهره‌برداری از داده‌های بزرگ</li>
                            <li>پرورش و جذب نیروهای متخصص در حوزه هوش مصنوعی و فناوری‌های پیشرفته</li>
                        </ul>
                    </div>

                </section>


                <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover"
                        src={AchivePic}
                        alt="the goals"
                    />
                </div>

                <section>
                    <div className='Performance flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h3 className=' font-bold font-mono text-2xl'>دستاورد ها و افتخارات</h3>
                        <hr className=' w-[50%] border-t bg-[#6FABC2] h-1 border-none '/>
                    </div>
                    <div dir='rtl' className='pt-6 px-3 flex flex-col gap-2'>
                        <p className='text-right'>شرکت الگوریتم با بهره‌گیری از فناوری‌های نوین هوش مصنوعی و داده‌کاوی، گام‌های مؤثری در تحول دیجیتال صنعت بانکداری برداشته است. <br/><strong>برخی از مهم‌ترین دستاوردها و افتخارات این شرکت عبارت‌اند از:</strong></p>

                        <ul className='list-disc pr-5 text-right flex flex-col gap-2 font-serif'>
                            <li>اتوماسیون فرآیندهای بانکی با استفاده از فناوری‌های هوشمند جهت بهبود بهره‌وری و کاهش خطاهای انسانی</li>
                            <li>ارائه چت‌بات‌ها و دستیارهای مجازی هوشمند برای ارتقاء کیفیت خدمات مشتریان و پاسخگویی</li>
                            <li>توسعه محصولات نرم‌افزاری بومی با تمرکز بر حفظ امنیت و حریم خصوصی داده‌ها</li>
                            <li>ایجاد مدل‌های پیش‌بینی رفتار مشتریان و ارزیابی ریسک اعتباری به منظور تسهیل فرآیندهای اعطای تسهیلات</li>
                        </ul>



                    </div>
                </section>


                <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover"
                        src={HistoryPic}
                        alt="the goals"
                    />
                </div>

                <section className=' History'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h4 className=' font-bold font-mono text-2xl'>یک شرکت جوان با میراث غنی</h4>
                        <hr className=' w-[70%] border-t bg-[#6FABC2] h-1 border-none '/>

                        <div>
                            <CompanyHistoryTimeline/>
                        </div>
                    </div>
                </section>


                <section>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h5 className=' font-bold font-mono text-2xl'>دعوت به تعامل</h5>
                        <hr className=' w-[40%] border-t bg-[#6FABC2] h-1 border-none '/>
                    </div>

                    <div dir='rtl' className='  w-full flex flex-col justify-center items-center gap-2'>
                        <p className='text-right w-[90%]'>خوشحال میشویم بیشتر با شما در ارتباط باشیم. اگر سوالی دارید با ما تماس بگیرید.</p>
                        <Btn href='./contact' > ارتباط با ما</Btn>
                    </div>
                </section>

                
            </div>
        </div>
    )
}

export default About