import Image from "next/image"
import Banking from './../../../public/banking.png'
import Data from './../../../public/dataTeck.png'
import Lend from './../../../public/lendTeck.png'
import Reg from './../../../public/regTeck.png'


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
                    <div dir="rtl" className="p-3 items-center justify-center flex flex-col gap-2">
                        <h2 className=" font-semibold text-lg">قدرت داده، دقت هوش مصنوعی؛ خدماتی برای آینده بانکداری...</h2>
                        <p>در شرکت الگوریتم، ما خدماتی ارائه می‌دهیم که تصمیم‌سازی مالی را هوشمند، فرآیندها را خودکار و امنیت را تضمین می‌کند.</p>
                    </div>



            </header>
            
           

            <body className="w-full">
                <section className="Banck flex flex-row-reverse">

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

                    {/* <div>
                        <ul>
                            <li>داشبورد بانک داری هوشمند</li>
                            <li>بانکداری اجتماعی</li>
                            <li>نئوبانک تخصصی</li>
                            <li>آکادمی بانکداری</li>
                        </ul>
                    </div> */}


                <section className="Bank flex flex-row-reverse">
                    <div className="Left w-[40%]">
                        <Image src={Data} className="pt-24 w-44 h-60 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">DataTech</p>
                    </div>


                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h2 className=" font-bold text-xl text-black pb-1 p-3 text-left">فناوری داده</h2>
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

                <section className="Banck flex flex-row-reverse">

                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h2 className=" font-bold text-xl text-black pb-1 p-3 text-right">فناوری واهم دهی</h2>
                            <div className="flex justify-end items-center mb-5">
                                <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                                <div className="w-35 h-1 rounded-s-xl bg-[#6FABC2]"></div>
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


                <section className="Bank flex flex-row-reverse">
                    <div className="Left w-[40%]">
                        <Image src={Reg} className="pt-24 w-44 h-60 p-3" alt="banking"/>
                        <p className=" flex justify-center items-center font-semibold">RegTech</p>
                    </div>


                    <div className="Right w-[60%]">
                        <div className="Title">
                            <h2 className=" font-bold text-xl text-black pb-1 p-3 text-left">فناوری نظارتی</h2>
                            <div className="flex justify-start items-center mb-5 text-left">
                                <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
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
            </body>
            

        </div>
        
    )
}

export default Service