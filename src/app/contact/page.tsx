import ContactCard from "@/component/ContactCard/countactCard"
import location from './../../../public/location 1.png'
import call from './../../../public/maincall 1.png'
import email from './../../../public/email 1.png'
import Link from "next/link"

import MapComponent from '../../component/Map/map';


function Contact(){
    return(
        <div className="Container w-full">
            <div className=" flex flex-col gap-4  justify-center items-center p-6">
               
                <div className="w-[95%]  flex flex-col gap-10 bg-[#E8E8E8] rounded-[15px]  "> 
                    <h2 className=" flex justify-center items-center font-bold text-xl text-black  py-4">راه های ارتباطی با ما</h2> 
                    <ContactCard img={location} title = 'آدرس' desc ='الهیه, خیابان مریم شرقی, پلاک 45'/>
                    <ContactCard img={call} title = 'شماره تلفن' desc ='021-32809500'/>
                    <Link href='./#'> <ContactCard img={email} title = 'ایمیل' desc ='info@algoritm.co'/> </Link> 
                </div>


                <div className=" w-[95%] py-5">
                    <MapComponent/>
                </div>


                <div className=" w-[95%] flex flex-col gap-5 bg-[#E8E8E8] rounded-[15px] py-8">                
                    <h2 className=" flex justify-center items-center font-bold text-xl text-black pb-2 p-3">با ما در ارتباط باشید</h2> 
                    <div dir="rtl" className=" flex flex-col gap-1.5 pr-5">
                        <label htmlFor="" className="text-black font-serif text-lg">عنوان : </label>
                        <input className=" w-[90%] border-none bg-white h-10 p-2 rounded-[15px]" type="text" placeholder="عنوان پیام را وارد کنید"/>
                    </div>

                    <div dir="rtl" className=" flex flex-col gap-1.5 pr-5">
                        <label htmlFor="" className="text-black font-serif text-lg">متن پیام :  </label>
                        <textarea
                        className="w-[90%] border-none bg-white h-72 p-2 rounded-[15px] resize-none placeholder:text-start"
                        placeholder="پیام خود را در این قسمت نوشته و ارسال کنید..."
                            />

                        <Link className="flex items-center justify-center bg-[#6FABC2] text-white font-bold font-serif rounded-[6px] w-[90%] h-8 mb-3 mt-2" href=''> ارسال پیام </Link>
                    </div>
                </div>  

            </div>
  
        </div>
    )
}

export default Contact