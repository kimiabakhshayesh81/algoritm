import CounterSection from '@/component/counterSection/CounterSection'
import AboutPic from '@/asset/images/aboutUs.png'
import Image from 'next/image'
import Perspective from '@/asset/images/perspective.jpg'
import GoalPic from '@/asset/images/goals.png'
import AchivePic from '@/asset/images/achivment.png'
import HistoryPic from '@/asset/images/history.png'
import CompanyHistoryTimeline from '@/component/History/history'
import Btn from '@/component/Button/button'

function About() {
    return (
        <div className=' w-full'>
            <div className='AboutPic pb-2 '>
                <Image src={AboutPic} alt='about' className='md:w-screen' />
            </div>
            <header className=' flex flex-col justify-center items-center w-full py-8 md:py-16'>
                <div className=' flex flex-col gap-2 w-full justify-center items-center'>
                    <h1 className=' font-bold font-mono text-2xl '>ما که هستیم</h1>
                    <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                </div>

                <div className="w-[85%]  text-right pt-6 flex flex-col gap-2 md:w-[55%] md:gap-3">
                
                    <p>.شرکت داده و هوش مصنوعی الگوریتم، بازوی فناورانه‌ی بانک صادرات ایران، با هدف توسعه و بومی‌سازی راهکارهای نوین در حوزه‌ی هوش مصنوعی، داده‌کاوی، و تحلیل هوشمند اطلاعات تأسیس شده است</p>
                    <p>.این شرکت، به‌عنوان یکی از پیشگامان تحول دیجیتال در صنعت مالی و بانکی کشور، تلاش می‌کند تا از طریق فناوری‌های نوین، زیرساخت‌های فناورانه‌ی بانک‌ها و سازمان‌های بزرگ را بازتعریف کند</p>
                    <p>.ما در الگوریتم، با بهره‌گیری از تیم‌های تخصصی، فناوری‌های پیشرفته، و تجربه‌ی عملیاتی در مقیاس سازمانی، به ارائه‌ی خدماتی هوشمند، پایدار و قابل‌اعتماد در حوزه‌های مختلف از جمله بانکداری دیجیتال و تحلیل داده‌های کلان می‌پردازیم </p>
                    <p>. مأموریت ما، تسهیل مسیر تحول دیجیتال برای سازمان‌ها و خلق ارزش پایدار از داده‌هاست</p>
                </div>

            </header>

            <section className='Counter md:flex md:justify-around'>
                <CounterSection />
            </section>

            <div className=' w-full pt-5'>
                <div className="flex justify-center items-center pb-4">
                    <Image
                        className="w-[90%] md:w-[50%] h-[20rem] object-cover md:h-[30rem]"
                        src={Perspective}
                        alt="the goals"
                    />
                </div>

                <section className=' Perspective'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h2 className=' font-bold font-mono text-2xl'>چشم انداز ما</h2>
                        <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div>
                    <div dir='rtl' className=' pt-6 px-3 '>
                        <div className='flex flex-col gap-3 p-4'>
                            <p className=' text-right md:flex md:flex-col md:items-center'>چشم‌انداز ما، تبدیل‌شدن به یکی از پیشگامان صنعت هوش مصنوعی در کشور و منطقه است؛ شرکتی که با تکیه بر تخصص، نوآوری و تعهد، مرجع ارائه خدمات هوشمند در حوزه مالی و فراتر از آن باشد.</p>
                            <p className=' text-right md:flex md:flex-col md:items-center'>ما در تلاشیم الگوریتم را به نامی معتمد و شناخته‌شده در عرصه تحول دیجیتال تبدیل کنیم؛ جایی که فناوری نه‌تنها ابزار، بلکه راه‌حل خلق ارزش پایدار باشد.</p>
                            <p className=' text-right md:flex md:flex-col md:items-center'>با توسعه‌ پلتفرم‌های بومی و استفاده از داده‌های عمیق، آینده‌ای می‌سازیم که در آن تصمیم‌سازی، مبتنی بر تحلیل هوشمند و پیش‌بینی دقیق است.</p>
                            {/* <p className=' text-right md:flex md:flex-col md:items-center'>چشم‌انداز ما، عبور از مرزهای فناوری و تبدیل‌شدن به بازیگری اثرگذار در شکل‌دهی آینده‌ی اقتصاد دیجیتال ایران است.</p>    */}
                             <p className='text-right md:flex md:flex-col md:items-center'>
                                چشم‌انداز ما، ساخت آینده‌ای است که در آن تصمیم‌ها سریع‌تر، دقیق‌تر و هوشمندتر اتخاذ می‌شوند. 
                            </p>

                        </div>
                    </div> 

                </section>


                 <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover md:w-[50%] md:h-[30rem]"
                        src={GoalPic}
                        alt="the goals"
                    />
                </div>

                <section className='Goals'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h2 className=' font-bold font-mono text-2xl'>مسیر تحقق چشم‌انداز</h2>
                        <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div>
                        
                    <div className='md:flex md:flex-col md:items-center'>
                        <p className='font-semibold pt-4 text-right py-3 p-4'> : اهداف کلیدی شرکت شامل موارد زیر است</p>

                        <ul className="list-disc list-inside text-right flex flex-col gap-2 p-4 font-serif" dir="rtl">
                            <li>توسعه محصولات و راهکارهای مبتنی بر داده و یادگیری ماشین برای ارتقاء بهره‌وری و تصمیم‌گیری هوشمند در بانک‌ها و سایر سازمان‌ها</li>
                            <li>ایجاد زیرساخت‌های بومی و امن برای پردازش، تحلیل و بهره‌برداری از داده‌های بزرگ</li>
                            <li>پرورش و جذب نیروهای متخصص در حوزه هوش مصنوعی و فناوری‌های پیشرفته</li>
                            <li>کمک به تحول دیجیتال بانک‌ها با ارائه راهکارهای رگ‌تک (RegTech) و لندتک (LendTech)</li>
                        </ul>
                    </div>
                    
                </section>


                <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover md:w-[50%] md:h-[30rem]"
                        src={AchivePic}
                        alt="the goals"
                    />
                </div>

                <section>
                    <div className='Performance flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h3 className=' font-bold font-mono text-2xl'>دستاورد ها و افتخارات</h3>
                        <hr className=' w-[50%] md:w-[25%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div>
                    <div dir='rtl' className='pt-6 px-3 flex flex-col gap-2'>
                        <p className='text-right md:px-72'>شرکت الگوریتم با بهره‌گیری از فناوری‌های نوین هوش مصنوعی و داده‌کاوی، گام‌های مؤثری در تحول دیجیتال صنعت بانکداری برداشته است. <br /><strong>برخی از مهم‌ترین دستاوردها و افتخارات این شرکت عبارت‌اند از:</strong></p>

                        <div className="md:flex md:justify-center md-px-[10%]">
                            <ul className="list-disc list-inside text-right font-serif pr-5 w-full max-w-xl ">
                                <li>اتوماسیون فرآیندهای بانکی با استفاده از فناوری‌های هوشمند جهت بهبود بهره‌وری</li>
                                <li>ارائه چت‌بات‌ها و دستیارهای مجازی هوشمند برای ارتقاء کیفیت خدمات مشتریان و پاسخگویی</li>
                                <li>توسعه محصولات نرم‌افزاری بومی با تمرکز بر حفظ امنیت و حریم خصوصی داده‌ها</li>
                                <li>ایجاد مدل‌های پیش‌بینی رفتار مشتریان و ارزیابی ریسک اعتباری به منظور تسهیل فرآیندها</li>
                            </ul>
                        </div>

                    </div>
                </section>


                <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover md:w-[50%] md:h-[30rem]"
                        src={HistoryPic}
                        alt="the goals"
                    />
                </div>

                <section className=' History'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h4 className=' font-bold font-mono text-2xl'>یک شرکت جوان با میراث غنی</h4>
                        <hr className=' w-[70%] md:w-[25%] border-t bg-[#6FABC2] h-1 border-none ' />

                        <div>
                            <CompanyHistoryTimeline />
                        </div>
                    </div>
                </section>


                <section>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h5 className=' font-bold font-mono text-2xl'>دعوت به تعامل</h5>
                        <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div>

                    <div dir='rtl' className='  w-full flex flex-col justify-center items-center gap-2'>
                        <p className='text-right w-[90%] md:flex md:flex-col md:items-center'>خوشحال میشویم بیشتر با شما در ارتباط باشیم. اگر سوالی دارید با ما تماس بگیرید.</p>
                        <Btn href='./contact' > ارتباط با ما</Btn>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default About