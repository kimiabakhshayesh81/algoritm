import mainLogo from './../../../public/cropped-Logo-New01 2.png'
import Logo from './../../../public/logo.png'
import Image from 'next/image'


function Footer(){
    return(
        <footer className="Container flex flex-row-reverse gap-6 bg-[#000446] w-full">
            <div className="Right flex flex-col w-[50%] pt-3">
                <div className='Logos flex mb-3 mt-3 justify-center gap-8'>
                    <Image src={Logo}  alt='' className= 'w-10' />
                    <Image src={mainLogo} alt ='' className=' w-15'/>
                </div>
                <div className='footer-Desc w-[90%]'>
                    <p className=' text-white text-right  leading-loose'>
                        .شرکت الگوریتم، در زمینه داده و هوش مصنوعی، بر نوآوری، پویایی و چابکی متمرکز است
                        تیم ما از متخصصان مجرب تشکیل شده است که از آخرین دستاوردهای علمی و تکنولوژی بهره‌مند شده
                        .و راهکارهای متنوع در زمینه داده و هوش مصنوعی را طراحی و اجرا می‌کنند
                    </p>
                </div>
            </div>

            <div className="Left flex flex-col w-[50%] pt-4">
                <div className=' text-right flex flex-col gap-2'>
                    <h1 className=' text-white text-[22px]'>اطلاعات تماس</h1>
                    <hr className=' w-[65%] border-t bg-[#6FABC2] h-1.5  ml-auto'/>
                </div>

                <address className='Call-Info not-italic flex flex-col text-right pt-4 text-[12px] text-white gap-4'>
                    <p>نشانی : تهران، الهیه، مریم شرقی، پلاک ۴۵</p>
                    <p>کد پستی : ۱۹۱۵۹۵۳۸۱۴</p>
                    <p>تلفن : <a href="tel:02191081450" className="hover:underline">۰۲۱۹۱۰۸۱۴۵۰</a></p>
                    <p className="text-white text-[15px] flex flex-row-reverse items-center gap-2">
                        <span> : رایانامه</span>
                        <span
                            dir="ltr"
                            className="text-left font-mono text-white inline-block"
                            style={{
                            unicodeBidi: 'bidi-override',
                            direction: 'ltr'
                            }}
                        >
                            info@algorithm.co
                        </span>
                    </p>


                </address>
            </div>

        </footer>
    )
}

export default Footer