'use client'

import Image from "next/image"
import Banking from './../../../public/banking.png'
import Data from './../../../public/dataTeck.png'
import Lend from './../../../public/lendTeck.png'
import Reg from './../../../public/regTeck.png'
import 'flowbite';
import Accordion from "@/component/Accordion/Accordion"



function Service(){
    return(
        <div className=" w-full ">
            <header className='Service pt-8'>
                    <div className="Header">
                       
                        <div className="text-center flex flex-col items-center">
                            <h1 className="font-bold text-2xl text-black pb-1 p-3">خدمات ما</h1>
                            <hr className="w-[30%] h-1 bg-[#6FABC2] border-none" />
                        </div>

                    </div>
                    <div dir="rtl" className="p-3 flex flex-col items-center justify-center text-center gap-2 mt-3">
                        <h2 className=" font-semibold text-lg">قدرت داده، دقت هوش مصنوعی؛ خدماتی برای آینده بانکداری...</h2>
                        <p>در شرکت الگوریتم، ما خدماتی ارائه می‌دهیم که تصمیم‌سازی مالی را هوشمند، فرآیندها را خودکار و امنیت را تضمین می‌کند.</p>
                    </div>


            </header>
            
           

            <body className="w-full">
                <section className="Banck flex flex-row-reverse pt-7">

                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h2 className=" font-bold text-xl text-black pb-1 p-3 text-right">فناوری بانکی</h2>
                            <div className="flex justify-end items-center mb-5">
                                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                                <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                            </div>
                        </div>
                        <div dir="rtl" className="Desc text-right p-3 ">
                            
                            <p className="break-words whitespace-normal leading-relaxed text-right direction-rtl">
                                فناوری بانکی با تکیه بر هوش تجاری، هوش مکانی و بانکداری اجتماعی، 
                                مسیر بانکداری نوین را هموار کرده است. 
                                این فناوری‌ها با تحلیل داده، افزایش امنیت و شخصی‌سازی خدمات، تجربه‌ای هوشمند 
                                و بدون نیاز به حضور فیزیکی برای مشتریان فراهم می‌کنند.
                                تحول دیجیتال، محور اصلی رقابت بانک‌ها در عصر نوین است.
                            </p>
                        </div>
                    </div>

                    <div className="Left w-[40%]">
                        <Image src={Banking} className="pt-24 w-44 h-60 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">BankTech</p>
                    </div>
  
                </section>


                    <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 p-4 text-right">
                        <div className="flex flex-row-reverse gap-1.5 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-[#000446] "></span>
                            <span>داشبورد بانک داری هوشمند</span>
                        </div>
                        <div className="flex flex-row-reverse gap-1.5 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-[#000446] "></span>
                            <span>بانکداری اجتماعی</span>
                        </div>
                        <div className="flex flex-row-reverse gap-1.5 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-[#000446] "></span>
                            <span>نئوبانک تخصصی</span>
                        </div>
                        <div className="flex flex-row-reverse gap-1.5 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-[#000446]"></span>
                            <span>آکادمی بانکداری</span>
                        </div>
                    </div>



                <section className="Bank flex flex-row-reverse pt-7">
                    <div className="Left w-[40%]">
                        <Image src={Data} className="pt-24 w-44 h-60 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">DataTech</p>
                    </div>


                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h3 className=" font-bold text-xl text-black pb-1 p-3 text-left">فناوری داده</h3>
                            <div className="flex justify-start items-center mb-5 text-left">
                                <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                                
                            </div>
                        </div>
                        <div dir="rtl" className="Desc text-right p-3 ">
                            
                            <p className="break-words whitespace-normal leading-relaxed text-left direction-rtl">
                                فناوری داده (DataTech) به مجموعه ابزارها و راهکارهایی گفته می‌شود که برای جمع‌آوری، تحلیل، ذخیره‌سازی و بهره‌برداری از داده‌ها به‌کار می‌روند. 
                                این فناوری‌ها نقش کلیدی در تصمیم‌گیری هوشمند، بهینه‌سازی فرآیندها و خلق ارزش برای کسب‌وکارها دارند.
                                 DataTech با اتصال داده‌های حجیم به هوش مصنوعی و یادگیری ماشین، مسیر تحول دیجیتال را هموار می‌سازد.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 p-4 text-right">
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>زیرساخت داده</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>مهندسی داده</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>مدیریت داده</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>تحلیل داده</span>
                    </div>
                </div>

                <section className="Banck flex flex-row-reverse pt-7">

                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h4 className=" font-bold text-xl text-black pb-1 p-3 text-right">فناوری واهم دهی</h4>
                            <div className="flex justify-end items-center mb-5">
                                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                                <div className="w-36 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                            </div>
                        </div>
                        <div dir="rtl" className="Desc text-right p-3 ">
                            
                            <p className="break-words whitespace-normal leading-relaxed text-right direction-rtl">
                               فناوری وام‌دهی (LendingTech) با دیجیتالی‌سازی فرآیندهای اعطای وام، تحولی بنیادین در صنعت مالی ایجاد کرده است. 
                               این فناوری با استفاده از هوش مصنوعی، تحلیل داده و احراز هویت دیجیتال،
                                ارزیابی اعتباری را سریع‌تر و دقیق‌تر انجام می‌دهد. نتیجه آن،
                                تسهیل دسترسی مشتریان به خدمات اعتباری،
                                کاهش ریسک و افزایش بهره‌وری در نهادهای مالی است.
                                LendingTech تجربه‌ای امن، شفاف و بدون نیاز به مراجعات حضوری را برای وام‌گیرندگان فراهم می‌سازد.
                            </p>
                        </div>
                    </div>

                    <div className="Left w-[40%]">
                        <Image src={Lend} className="pt-24 w-44 h-60 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">LendTech</p>
                    </div>

                </section>

                <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 p-4 text-right">
                    <div className=" flex flex-row-reverse whitespace-nowrap gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>تامین مالی جمعی</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>اعتبارسنجی هوشمند</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>BNPL/ SNBL</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>اعتبارسنجی دیجیتال</span>
                    </div>
                </div>


                <section className="Bank flex flex-row-reverse pt-7">
                    <div className="Left w-[40%]">
                        <Image src={Reg} className="pt-24 w-44 h-54 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">RegTech</p>
                    </div>


                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h5 className=" font-bold text-xl text-black pb-1 p-3 text-left">فناوری نظارتی</h5>
                            <div className="flex justify-start items-center mb-5 text-left">
                                <div className="w-36 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                                
                            </div>
                        </div>
                        <div dir="rtl" className="Desc text-right p-3 ">
                            
                            <p className="break-words whitespace-normal leading-relaxed text-left direction-rtl">
                               فناوری نظارتی (RegTech) در حوزه بانکداری، راهکاری نوین برای پایش و اجرای الزامات قانونی و مقررات مالی است. 
                               این فناوری با بهره‌گیری از هوش مصنوعی، تحلیل داده و یادگیری ماشین، 
                               فرآیندهای تطبیق با قوانین را سریع‌تر، دقیق‌تر و کم‌هزینه‌تر می‌سازد.
                                RegTech به بانک‌ها و مؤسسات مالی کمک می‌کند تا ریسک‌های قانونی را کاهش داده، شفافیت را افزایش دهند و از جرائم مالی پیشگیری کنند.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 p-4 text-right">
                    <div className=" flex flex-row-reverse whitespace-nowrap gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>نظارت هوشمند</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>قراردادهای هوشمند</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>بازرسی هوشمند</span>
                    </div>
                    <div className=" flex flex-row-reverse gap-1.5 items-center">
                        <span className=" w-2 h-2 rounded-full mt-2 bg-[#000446]"></span>
                        <span>تحلیل و تفسیر مقررات</span>
                    </div>
                </div>


                <section className=" pt-7">
                    <div>
                        <h6 className=" font-bold text-xl text-black pb-1 p-3 text-right">سوالات متداول</h6>
                        <div className="flex justify-end items-center mb-5">
                            <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                            <div className="w-35 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                        </div>
                    </div>

                    <Accordion/>
                </section>

                

            </body> 

        </div>
        
    )
}

export default Service
















// 'use client'

// import Image from "next/image"
// import Banking from './../../../public/banking.png'
// import Data from './../../../public/dataTeck.png'
// import Lend from './../../../public/lendTeck.png'
// import Reg from './../../../public/regTeck.png'
// import Accordion from "@/component/Accordion/Accordion"
// import { motion } from "framer-motion"

// const sectionVariants = {
//   hidden: (direction: 'left' | 'right') => ({
//     opacity: 0,
//     x: direction === 'left' ? -100 : 100,
//   }),
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8 },
//   }
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// };

// function Service() {
//   return (
//     <div className="w-full">

//       {/* 🔵 Header */}
//       <motion.header
//         className='Service pt-8'
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//       >
//         <div className="text-center flex flex-col items-center">
//           <h1 className="font-bold text-2xl text-black pb-1 p-3">خدمات ما</h1>
//           <hr className="w-[30%] h-1 bg-[#6FABC2] border-none" />
//         </div>
//         <div dir="rtl" className="p-3 flex flex-col items-center justify-center text-center gap-2 mt-3">
//           <h2 className="font-semibold text-lg">قدرت داده، دقت هوش مصنوعی؛ خدماتی برای آینده بانکداری...</h2>
//           <p>در شرکت الگوریتم، ما خدماتی ارائه می‌دهیم که تصمیم‌سازی مالی را هوشمند، فرآیندها را خودکار و امنیت را تضمین می‌کند.</p>
//         </div>
//       </motion.header>

//       {/* 🔵 فناوری بانکی */}
//       <motion.section
//         className="Bank flex flex-row-reverse pt-14 px-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div className="Right w-[60%]" custom="right" variants={sectionVariants}>
//           <h2 className="font-bold text-xl text-black pb-1 p-3 text-right">فناوری بانکی</h2>
//           <div className="flex justify-end items-center mb-5">
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//             <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//           </div>
//           <div dir="rtl" className="Desc text-right p-3">
//             <p>فناوری بانکی با تکیه بر هوش تجاری، هوش مکانی و بانکداری اجتماعی، مسیر بانکداری نوین را هموار کرده است...</p>
//           </div>
//         </motion.div>
//         <motion.div className="Left w-[40%]" custom="left" variants={sectionVariants}>
//           <Image src={Banking} className="pt-10 w-44 h-60 p-3 mx-auto" alt="banking" />
//           <p className="text-center font-semibold">BankTech</p>
//         </motion.div>
//       </motion.section>

//       {/* 🔵 فناوری داده */}
//       <motion.section
//         className="Data flex flex-row-reverse pt-14 px-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div className="Left w-[40%]" custom="left" variants={sectionVariants}>
//           <Image src={Data} className="pt-10 w-44 h-60 p-3 mx-auto" alt="data" />
//           <p className="text-center font-semibold">DataTech</p>
//         </motion.div>
//         <motion.div className="Right w-[60%]" custom="right" variants={sectionVariants}>
//           <h3 className="font-bold text-xl text-black pb-1 p-3 text-left">فناوری داده</h3>
//           <div className="flex justify-start items-center mb-5">
//             <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//           </div>
//           <div dir="rtl" className="Desc text-right p-3">
//             <p>فناوری داده به مجموعه ابزارها و راهکارهایی گفته می‌شود که برای جمع‌آوری، تحلیل، ذخیره‌سازی و بهره‌برداری از داده‌ها استفاده می‌شود...</p>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* 🔵 فناوری وام‌دهی */}
//       <motion.section
//         className="Lend flex flex-row-reverse pt-14 px-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div className="Right w-[60%]" custom="right" variants={sectionVariants}>
//           <h3 className="font-bold text-xl text-black pb-1 p-3 text-right">فناوری وام‌دهی</h3>
//           <div className="flex justify-end items-center mb-5">
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//             <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//           </div>
//           <div dir="rtl" className="Desc text-right p-3">
//             <p>فناوری وام‌دهی (LendTech) فرآیندهای دریافت وام را هوشمند، سریع و بدون نیاز به مراجعات حضوری می‌کند. با بهره‌گیری از الگوریتم‌های اعتبارسنجی مبتنی بر داده، ریسک وام‌دهی کاهش می‌یابد...</p>
//           </div>
//         </motion.div>
//         <motion.div className="Left w-[40%]" custom="left" variants={sectionVariants}>
//           <Image src={Lend} className="pt-10 w-44 h-60 p-3 mx-auto" alt="lend" />
//           <p className="text-center font-semibold">LendTech</p>
//         </motion.div>
//       </motion.section>

//       {/* 🔵 فناوری نظارتی */}
//       <motion.section
//         className="Reg flex flex-row-reverse pt-14 px-4"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <motion.div className="Left w-[40%]" custom="left" variants={sectionVariants}>
//           <Image src={Reg} className="pt-10 w-44 h-60 p-3 mx-auto" alt="reg" />
//           <p className="text-center font-semibold">RegTech</p>
//         </motion.div>
//         <motion.div className="Right w-[60%]" custom="right" variants={sectionVariants}>
//           <h3 className="font-bold text-xl text-black pb-1 p-3 text-left">فناوری نظارتی</h3>
//           <div className="flex justify-start items-center mb-5">
//             <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//           </div>
//           <div dir="rtl" className="Desc text-right p-3">
//             <p>فناوری نظارتی (RegTech) ابزارهایی را برای انطباق خودکار با مقررات، نظارت بر تراکنش‌ها و کشف تقلب در اختیار بانک‌ها و نهادهای مالی قرار می‌دهد. این فناوری، کارایی واحدهای ریسک را بالا می‌برد...</p>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* سوالات متداول */}
//       <motion.section
//         className="pt-14 px-4"
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeUp}
//         viewport={{ once: true }}
//       >
//         <div>
//           <h6 className="font-bold text-xl text-black pb-1 p-3 text-right">سوالات متداول</h6>
//           <div className="flex justify-end items-center mb-5">
//             <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
//             <div className="w-35 h-1 rounded-s-xl bg-[#6FABC2]"></div>
//           </div>
//         </div>
//         <Accordion />
//       </motion.section>

//     </div>
//   );
// }

// export default Service;
