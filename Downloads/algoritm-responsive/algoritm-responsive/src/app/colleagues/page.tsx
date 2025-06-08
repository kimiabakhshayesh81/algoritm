'use client'
import PartnersSlider from "@/component/Partners/partners"

function Colleagues(){
    return(
        <div className=" Container">
            <div className=" w-full pt-7 ">
                {/* <h2 className="Title font-bold text-xl text-black pb-1 p-3 text-right">همکاران ما</h2>
                <div className="flex justify-end items-center mb-5">
                    <div className="w-3 h-3 bg-[#6FABC2] rotate-45 -ml-1"></div>
                    <div className="w-30 h-1 rounded-s-xl bg-[#6FABC2]"></div>
                </div> */}
                <div className=" flex flex-col gap-2.5 md:flex md:flex-col md:items-center md:justify-center  ">
                    <p dir="rtl" className="leading-7 p-4">
                    به‌عنوان یکی از شرکت‌های زیرمجموعه هلدینگ بانک صادرات ایران، ما مفتخریم که در کنار مجموعه‌ای از شرکت‌های معتبر داخلی و بین‌المللی، همکاری‌های بلندمدت و اثربخشی را رقم زده‌ایم.<br/> این مشارکت‌ها، نه تنها نشانه‌ای از اعتماد متقابل است، بلکه گامی مؤثر در مسیر تحقق اهداف توسعه پایدار، نوآوری و ارائه خدمات ارزش‌آفرین به مشتریان و ذی‌نفعان ما محسوب می‌شود.<br/> در ادامه با بخشی از همکاران تجاری ما آشنا شوید که نقش مهمی در این مسیر داشته‌اند.
                    </p>
                </div>
                
            </div>

            <div>
                <PartnersSlider/>
            </div>
        </div>
    )
}

export default Colleagues


