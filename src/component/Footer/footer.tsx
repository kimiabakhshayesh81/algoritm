import mainLogo from './../../../public/cropped-Logo-New01 2.png'
import Logo from './../../../public/logo.png'
import Image from 'next/image'


function Footer(){
    return(
        <footer className="Container flex flex-row-reverse bg-[#000446] w-full">
            <div className="Right flex flex-col w-[50%]">
                <div className='Logos flex gap-2 justify-center mb-3 mt-3 '>
                    <Image src={Logo}  alt='' className= 'w-8 '/>
                    <Image src={mainLogo} alt ='' className='w-14 h-auto'/>
                </div>
                <div className='footer-Desc w-[90%]'>
                    <p className=' text-white text-right  leading-loose'>
                        .شرکت الگوریتم، در زمینه داده و هوش مصنوعی، بر نوآوری، پویایی و چابکی متمرکز است
                        تیم ما از متخصصان مجرب تشکیل شده است که از آخرین دستاوردهای علمی و تکنولوژی بهره‌مند شده
                        .و راهکارهای متنوع در زمینه داده و هوش مصنوعی را طراحی و اجرا می‌کنند
                    </p>
                </div>
            </div>

            <div className="Left flex flex-col">

            </div>

        </footer>
    )
}

export default Footer