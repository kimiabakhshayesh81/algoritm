'use client'
import PartnersSlider from "@/component/Partners/partners"

function Colleagues(){
    return(
        <div className=" Container">
            {/* <div className=" w-full pt-7 ">
                
                <div className=" flex flex-col gap-2.5 md:flex md:flex-col md:items-center md:justify-center  ">
                    <p dir="rtl" className="leading-7 p-4">
                    به‌عنوان یکی از شرکت‌های زیرمجموعه هلدینگ بانک صادرات ایران، ما مفتخریم که در کنار مجموعه‌ای از شرکت‌های معتبر داخلی و بین‌المللی، همکاری‌های بلندمدت و اثربخشی را رقم زده‌ایم.<br/> این مشارکت‌ها، نه تنها نشانه‌ای از اعتماد متقابل است، بلکه گامی مؤثر در مسیر تحقق اهداف توسعه پایدار، نوآوری و ارائه خدمات ارزش‌آفرین به مشتریان و ذی‌نفعان ما محسوب می‌شود.<br/> در ادامه با بخشی از همکاران تجاری ما آشنا شوید که نقش مهمی در این مسیر داشته‌اند.
                    </p>
                </div>
                
            </div> */}


<div className="relative w-full bg-cover bg-center bg-no-repeat pt-16 pb-20" style={{ backgroundImage: "url('/images/bg-partners.jpg')" }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
      همکاران تجاری ما
    </h2>

    <p dir="rtl" className="text-gray-700 text-lg md:text-xl leading-loose bg-white rounded-3xl shadow-lg p-6 md:p-8 inline-block text-justify">
      به‌عنوان یکی از شرکت‌های زیرمجموعه هلدینگ بانک صادرات ایران، ما مفتخریم که در کنار مجموعه‌ای از شرکت‌های معتبر داخلی و بین‌المللی، همکاری‌های بلندمدت و اثربخشی را رقم زده‌ایم.
      <br />
      این مشارکت‌ها، نه تنها نشانه‌ای از اعتماد متقابل است، بلکه گامی مؤثر در مسیر تحقق اهداف توسعه پایدار، نوآوری و ارائه خدمات ارزش‌آفرین به مشتریان و ذی‌نفعان ما محسوب می‌شود.
      <br />
      در ادامه با بخشی از همکاران تجاری ما آشنا شوید که نقش مهمی در این مسیر داشته‌اند.
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


