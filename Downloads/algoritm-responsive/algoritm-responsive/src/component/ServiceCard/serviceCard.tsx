import Image from "next/image"
import BankIcon from '@/asset/icons/iconBanking.png'
import LendIcon from '@/asset/icons/iconLendTech.png'
import RegIcon from '@/asset/icons/iconRegTech.png'
import PayIcon from '@/asset/icons/iconPayTech.png'



const serviceCardDetails = [
    {
        id : 1,
        title : 'فناوری بانکی',
        desc : "فناوری بانکی با تکیه بر هوش تجاری، هوش مکانی و بانکداری اجتماعی، مسیر بانکداری نوین را هموار کرده است. این فناوری‌ها با تحلیل داده، افزایش امنیت و شخصی‌سازی خدمات، تجربه‌ای هوشمند و بدون نیاز به حضور فیزیکی برای مشتریان فراهم می‌کنند. تحول دیجیتال، محور اصلی رقابت بانک‌ها در عصر نوین است.",
        img : BankIcon
    },
    {
        id : 2,
        title : 'فناوری پرداخت',
        desc : 'فناوری پرداخت یا PayTech یکی از ارکان اصلی تحول دیجیتال در صنعت مالی است که با بهره‌گیری از فناوری‌های نوین، فرآیند پرداخت را سریع‌تر، امن‌تر و ساده‌تر کرده است. این حوزه با ارائه راهکارهایی مانند پرداخت آنلاین، کیف پول دیجیتال، پرداخت موبایلی و درگاه‌های بانکی هوشمند، تجربه‌ای مدرن و بی‌نقص را برای کاربران و کسب‌وکارها فراهم می‌سازد. دنیای امروز، مشتریان انتظار دارند پرداخت‌ها در کمترین زمان، بدون نیاز به پول نقد و از طریق ابزارهای دیجیتال انجام شود. PayTech با پاسخ‌گویی به این نیاز، بستری فراهم می‌کند که تراکنش‌ها به صورت لحظه‌ای، بدون خطا و با بالاترین سطح امنیت انجام شوند.',
        img : PayIcon
    },
    {
        id : 3,
        title : 'فناوری واهم دهی',
        desc : ' فناوری وام‌دهی (LendingTech) با دیجیتالی‌سازی فرآیندهای اعطای وام، تحولی بنیادین در صنعت مالی ایجاد کرده است. این فناوری با استفاده از هوش مصنوعی، تحلیل داده و احراز هویت دیجیتال، ارزیابی اعتباری را سریع‌تر و دقیق‌تر انجام می‌دهد. نتیجه آن، تسهیل دسترسی مشتریان به خدمات اعتباری، کاهش ریسک و افزایش بهره‌وری در نهادهای مالی است.LendingTech تجربه‌ای امن، شفاف و بدون نیاز به مراجعات حضوری را برای وام‌گیرندگان فراهم می‌سازد.',
        img : LendIcon
    },
    {
        id : 4,
        title : 'فناوری نظارتی',
        desc : 'فناوری نظارتی (RegTech) در حوزه بانکداری، راهکاری نوین برای پایش و اجرای الزامات قانونی و مقررات مالی است. این فناوری با بهره‌گیری از هوش مصنوعی، تحلیل داده و یادگیری ماشین، فرآیندهای تطبیق با قوانین را سریع‌تر، دقیق‌تر و کم‌هزینه‌تر می‌سازد.RegTech به بانک‌ها و مؤسسات مالی کمک می‌کند تا ریسک‌های قانونی را کاهش داده، شفافیت را افزایش دهند و از جرائم مالی پیشگیری کنند.',
        img : RegIcon
    },
]




function ServiceCard(){
    return(
        <div className="w-full flex flex-col gap-5 items-center justify-center md:w-full  py-6">
            {serviceCardDetails.map((items) => (
                
                <div className="w-[90%] max-w-xl shadow-2xl bg-gray-200 rounded-[10px] flex flex-col p-4 md:w-[70%]">
                <div className="flex justify-center items-center mb-4">
                    <Image className="w-40 h-40" src={items.img} alt="Bank Icon" />
                </div>

                <div>
                    <h2 className="font-bold text-xl text-black pb-2 text-center">{items.title}</h2>

                    <div dir="rtl" className="text-center flex flex-col gap-3.5 pb-5">
                        <span className="break-words whitespace-normal leading-relaxed">
                           {items.desc}
                        </span>
                    </div>
                </div>
            </div>

            ))}
            
        </div>
    )
}


export default ServiceCard