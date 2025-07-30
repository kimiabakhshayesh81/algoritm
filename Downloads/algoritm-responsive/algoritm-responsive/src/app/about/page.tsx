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
                <Image src={AboutPic} alt='about' className='md:w-screen ' />
            </div>
            {/* <header className=' flex flex-col justify-center items-center w-full py-8 md:py-16'>
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

            </header> */}




<header className="w-full bg-[#f4f6f9] py-16">
  <div className="max-w-5xl mx-auto px-4 text-center">

    {/* عنوان */}
    <h1 className="text-4xl font-bold text-[#2b2b2b] font-serif">
      ما که هستیم
    </h1>

    {/* خط تزئینی */}
    <div className="mt-4 mb-8 mx-auto w-32 h-1 bg-[#6FABC2] rounded"></div>

    {/* کارت‌ها */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      

      {/* کارت 2 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#6FABC2] rounded-t-lg"></div>
        <h3 className="text-2xl font-semibold text-[#2b2b2b] mb-4">مسیر ما در تحول دیجیتال</h3>
        <p className="text-gray-600">
          این شرکت، به‌عنوان یکی از پیشگامان تحول دیجیتال در صنعت مالی و بانکی کشور، تلاش می‌کند تا از طریق فناوری‌های نوین، زیرساخت‌های فناورانه‌ی بانک‌ها و سازمان‌های بزرگ را بازتعریف کند
        </p>
      </div>

      {/* کارت 3 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#6FABC2] rounded-t-lg"></div>
        <h3 className="text-2xl font-semibold text-[#2b2b2b] mb-4">ماموریت ما</h3>
        <p className="text-gray-600">
          مأموریت ما، تسهیل مسیر تحول دیجیتال برای سازمان‌ها و خلق ارزش پایدار از داده‌هاست تا با استفاده از هوش مصنوعی و تحلیل داده‌ها، آینده‌ای روشن‌تر بسازیم
        </p>
      </div>

       {/* کارت 1 */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#6FABC2] rounded-t-lg"></div>
        <h3 className="text-2xl font-semibold text-[#2b2b2b] mb-4">معرفی شرکت</h3>
        <p className="text-gray-600">
          شرکت داده و هوش مصنوعی الگوریتم، بازوی فناورانه‌ی بانک صادرات ایران، با هدف توسعه و بومی‌سازی راهکارهای نوین در حوزه‌ی هوش مصنوعی، داده‌کاوی و تحلیل هوشمند اطلاعات تأسیس شده است
        </p>
      </div>

    </div>  

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

                {/* <section className=' Perspective'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h2 className=' font-bold font-mono text-2xl'>چشم انداز ما</h2>
                        <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div>
                    <div dir='rtl' className=' pt-6 px-3 '>
                        <div className='flex flex-col gap-3 p-4'>
                            <p className=' text-right md:flex md:flex-col md:items-center'>چشم‌انداز ما، تبدیل‌شدن به یکی از پیشگامان صنعت هوش مصنوعی در کشور و منطقه است؛ شرکتی که با تکیه بر تخصص، نوآوری و تعهد، مرجع ارائه خدمات هوشمند در حوزه مالی و فراتر از آن باشد.</p>
                            <p className=' text-right md:flex md:flex-col md:items-center'>ما در تلاشیم الگوریتم را به نامی معتمد و شناخته‌شده در عرصه تحول دیجیتال تبدیل کنیم؛ جایی که فناوری نه‌تنها ابزار، بلکه راه‌حل خلق ارزش پایدار باشد.</p>
                            <p className=' text-right md:flex md:flex-col md:items-center'>با توسعه‌ پلتفرم‌های بومی و استفاده از داده‌های عمیق، آینده‌ای می‌سازیم که در آن تصمیم‌سازی، مبتنی بر تحلیل هوشمند و پیش‌بینی دقیق است.</p>
                             <p className='text-right md:flex md:flex-col md:items-center'>
                                چشم‌انداز ما، ساخت آینده‌ای است که در آن تصمیم‌ها سریع‌تر، دقیق‌تر و هوشمندتر اتخاذ می‌شوند. 
                            </p>

                        </div>
                    </div> 

                </section> */}





<section className="relative py-16 px-4 bg-gradient-to-br from-[#f0f4f8] to-[#dbe9f1]">
  {/* عنوان */}
  <div className="text-center mb-12">
    <h2 className="text-3xl  md:text-4xl font-extrabold text-gray-800">چشم‌انداز ما</h2>
    <p className="mt-2 text-gray-600 text-sm md:text-base">
      آینده‌ای که در آن فناوری و داده، ستون‌های تصمیم‌گیری و تحول‌اند
    </p>
  </div>

  {/* کارت‌ها */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "پیشگام در هوش مصنوعی",
        desc: "با تمرکز بر نوآوری و تخصص، الگوریتم مرجع خدمات هوشمند در کشور می‌شود",
      },
      {
        title: "فناوری بومی، راه‌حل جهانی",
        desc: "با توسعه پلتفرم‌های بومی، الگوریتم خدمات مقیاس‌پذیر و قابل‌اعتماد ارائه می‌دهد",
      },
      {
        title: "تحلیل عمیق، تصمیم دقیق",
        desc: "استفاده از تحلیل داده برای خلق مزیت رقابتی در صنعت مالی",
      },
      {
        title: "مرجع تحول دیجیتال",
        desc: "با ساختار منعطف و چابک، الگوریتم شریک استراتژیک سازمان‌ها در تحول دیجیتال است",
      },
      {
        title: "خلق ارزش پایدار",
        desc: "فناوری در خدمت ایجاد ارزش بلندمدت برای مشتریان و جامعه",
      },
      {
        title: "آینده‌نگری فناورانه",
        desc: "ترسیم آینده‌ای هوشمندانه با بهره‌گیری از داده، تجربه و فناوری",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-right"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</section>











                 <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover md:w-[50%] md:h-[30rem]"
                        src={GoalPic}
                        alt="the goals"
                    />
                </div>

                {/* <section className='Goals'>
                    <div className=' flex flex-col w-full gap-2 justify-center items-center py-6'>
                        <h2 className=' font-bold font-mono text-2xl'>مسیر تحقق چشم‌انداز</h2>
                        <hr className=' w-[40%] md:w-[20%] border-t bg-[#6FABC2] h-1 border-none ' />
                    </div> */}
                        
                    {/* <div className='md:flex md:flex-col md:items-center'>
                        <p className='font-semibold pt-4 text-right py-3 p-4'> : اهداف کلیدی شرکت شامل موارد زیر است</p>

                        <ul className="list-disc list-inside text-right flex flex-col gap-2 p-4 font-serif" dir="rtl">
                            <li>توسعه محصولات و راهکارهای مبتنی بر داده و یادگیری ماشین برای ارتقاء بهره‌وری و تصمیم‌گیری هوشمند در بانک‌ها و سایر سازمان‌ها</li>
                            <li>ایجاد زیرساخت‌های بومی و امن برای پردازش، تحلیل و بهره‌برداری از داده‌های بزرگ</li>
                            <li>پرورش و جذب نیروهای متخصص در حوزه هوش مصنوعی و فناوری‌های پیشرفته</li>
                            <li>کمک به تحول دیجیتال بانک‌ها با ارائه راهکارهای رگ‌تک (RegTech) و لندتک (LendTech)</li>
                        </ul>
                    </div> */}





                    {/* //new
                    <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6'>
                        <p className='font-bold text-xl mb-4 text-right text-[#1F2937]'> : اهداف کلیدی شرکت</p>
                        <div className="grid grid-cols-2 gap-4 text-right" dir="rtl">
                            {[
                            "توسعه محصولات و راهکارهای مبتنی بر داده...",
                            "ایجاد زیرساخت‌های بومی و امن...",
                            "پرورش و جذب نیروهای متخصص...",
                            "کمک به تحول دیجیتال بانک‌ها..."
                            ].map((item, i) => (
                            <div key={i} className="bg-sky-50 hover:bg-sky-100 transition rounded-xl shadow p-4 flex items-start gap-2">
                                <span className="text-sky-600 pt-1">📌</span>
                                <p className="text-sm font-medium leading-relaxed">{item}</p>
                            </div>
                            ))}
                        </div>
                    </div>

                    
                </section> */}



                <section className="py-12 px-6 bg-[#F9FAFB]" dir="rtl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold font-sans text-[#1E2A3A]">مسیر تحقق چشم‌انداز</h2>
                        <div className="w-[40%] md:w-[20%] mx-auto mt-2  h-1 bg-[#6FABC2] rounded"></div>
                        <p className="mt-6 text-lg font-medium text-gray-700">
                        اهداف کلیدی شرکت شامل موارد زیر است:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                        {
                            title: "توسعه محصولات هوشمند",
                            desc: "توسعه راهکارهای داده‌محور و یادگیری ماشین برای بهبود تصمیم‌گیری و افزایش بهره‌وری سازمانی",
                            icon: (
                            <svg className="w-6 h-6 text-[#2E5B9F]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                <path d="M13 2v7h7"/>
                            </svg>
                            ),
                        },
                        {
                            title: "ایجاد زیرساخت امن",
                            desc: "زیرساخت‌های بومی، پایدار و ایمن برای پردازش و تحلیل داده‌های حجیم با امنیت سازمانی",
                            icon: (
                            <svg className="w-6 h-6 text-[#2E5B9F]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11z"/>
                                <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/>
                            </svg>
                            ),
                        },
                        {
                            title: "توسعه سرمایه انسانی",
                            desc: "جذب و پرورش نیروهای متخصص در زمینه‌های هوش مصنوعی و فناوری‌های نوین با برنامه‌ریزی بلندمدت",
                            icon: (
                            <svg className="w-6 h-6 text-[#2E5B9F]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M5 20v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            ),
                        },
                        {
                            title: "تحول دیجیتال در بانک‌ها",
                            desc: "ارائه راهکارهای RegTech و LendTech برای ارتقاء فرآیندهای بانکی و دیجیتال‌سازی خدمات مالی",
                            icon: (
                            <svg className="w-6 h-6 text-[#2E5B9F]" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path d="M3 10h18M5 6h14M4 14h16M6 18h12"/>
                            </svg>
                            ),
                        },
                        ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-sm border-r-4 border-[#2E5B9F] p-6 flex items-start gap-4 hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E1E8F0]">
                            {item.icon}
                            </div>
                            <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </section>








                <div className="flex justify-center items-center pb-4 pt-10">
                    <Image
                        className="w-[90%] h-[20rem] object-cover md:w-[50%] md:h-[30rem]"
                        src={AchivePic}
                        alt="the goals"
                    />
                </div>

                {/* <section>
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
                </section> */}





                    <section className="bg-white py-16 px-4">
  <div className="flex flex-col items-center justify-center gap-2">
    <h3 className="font-bold font-mono text-3xl text-gray-800">دستاوردها و افتخارات</h3>
    <hr className="w-32 md:w-48 border-t-4 border-[#6FABC2] rounded-full mt-2" />
  </div>

  <div dir="rtl" className="mt-10 max-w-5xl mx-auto text-right">
    <p className="text-gray-700 text-lg leading-loose px-2 md:px-10">
      شرکت الگوریتم با بهره‌گیری از فناوری‌های نوین هوش مصنوعی و داده‌کاوی، گام‌های مؤثری در تحول دیجیتال صنعت بانکداری برداشته است. 
      <br />
      <strong className="text-[#0e7490]">برخی از مهم‌ترین دستاوردها و افتخارات این شرکت عبارت‌اند از:</strong>
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10 px-2 md:px-10">
      {[
        {
          title: "اتوماسیون فرآیندهای بانکی",
          desc: "بهبود بهره‌وری با استفاده از فناوری‌های هوشمند در عملیات بانکی.",
        },
        {
          title: "ارائه دستیارهای مجازی",
          desc: "افزایش کیفیت خدمات با پیاده‌سازی چت‌بات‌ها و پاسخ‌گوی هوشمند.",
        },
        {
          title: "توسعه نرم‌افزارهای بومی",
          desc: "تمرکز بر امنیت داده و طراحی راهکارهای مبتنی بر حریم خصوصی.",
        },
        {
          title: "تحلیل رفتار مشتریان",
          desc: "مدل‌سازی ریسک اعتباری و پیش‌بینی رفتار جهت تسهیل تصمیم‌گیری.",
        },
      ].map((item, index) => (
        <div key={index} className="bg-[#f9fbfc] border border-gray-200 rounded-xl p-6 hover:shadow transition">
          <h4 className="text-base font-semibold text-gray-800 mb-2">{item.title}</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      ))}
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