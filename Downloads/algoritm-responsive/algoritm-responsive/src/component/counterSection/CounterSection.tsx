'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export default function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // فقط یک بار اجرا شه
    threshold: 0.3     // وقتی ۳۰٪ کامپوننت داخل ویو باشه
  });

  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    if (inView) setStartCount(true)
  }, [inView]);

  return (
    <section ref={ref} className="flex flex-row-reverse gap-x-4 justify-center items-center md:gap-x-50  w-full py-10 bg-white text-black text-center">
      
      <div className="flex flex-col  items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={30} prefix='+' duration={2} />}
        </span>
        <span className="font-semibold mt-2">پروژه های تخصصی</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={15} prefix='+' duration={2} />}
        </span>
        <span className="font-semibold mt-2">سرویس های تخصصی</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={99} prefix="%" duration={2.5} />}
        </span>
        <span className="font-semibold mt-2">رضایت مشتریان</span>
      </div>

    </section>




//   <section
//   ref={ref}
//   className="flex flex-row-reverse justify-center items-center  md:gap-x-40 w-full py-10 bg-white text-black text-center"
// >
//   <div className="flex flex-col items-center">
//     <span className="text-3xl font-bold text-[#6FABC2]">
//       {startCount && <CountUp end={30} prefix="+" duration={2} />}
//     </span>
//     <span className="font-semibold mt-2">پروژه‌های تخصصی</span>
//   </div>

//   <div className="flex flex-col items-center">
//     <span className="text-3xl font-bold text-[#6FABC2]">
//       {startCount && <CountUp end={15} prefix="+" duration={2} />}
//     </span>
//     <span className="font-semibold mt-2">سرویس‌های تخصصی</span>
//   </div>

//   <div className="flex flex-col items-center">
//     <span className="text-3xl font-bold text-[#6FABC2]">
//       {startCount && <CountUp end={99} prefix="%" duration={2.5} />}
//     </span>
//     <span className="font-semibold mt-2">رضایت مشتریان</span>
//   </div>
// </section>








  )
}




