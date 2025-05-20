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
    <section ref={ref} className="flex flex-row-reverse justify-around items-center w-full py-10 bg-white text-black text-center">
      
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={30} duration={2} />}
        </span>
        <span className="font-semibold mt-2">پروژه های تخصصی</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={15} duration={2} />}
        </span>
        <span className="font-semibold mt-2">سرویس های تخصصی</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-[#6FABC2]">
          {startCount && <CountUp end={99} suffix="%" duration={2.5} />}
        </span>
        <span className="font-semibold mt-2">رضایت مشتریان</span>
      </div>

    </section>
  )
}
