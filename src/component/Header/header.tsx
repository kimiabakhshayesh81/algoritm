'use client'
import Image from "next/image"
import logo from './../../../public/cropped-Logo-New01 1.png'
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"

       
export default function Header(){
  const [isOpen , setIsOpen] = useState(false)

  return(

    <header className=" relative w-full h-20 bg-[#000446] px-4 py-2 flex justify-between items-center  z-50">
      <div className="flex gap-2 items-center">
        <Image src={logo} alt="logo" className=" h-8 w-10" />
        <p className="text-white">شرکت داده و هوش مصنوعی الگوریتم</p>
      </div>

      {/* دکمه منو */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none md:hidden z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* پس‌زمینه نیمه شفاف وقتی منو بازه */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0  bg-opacity-70 z-40"
          aria-hidden="true"
        />
      )}

      {/* منو */}
      <nav
        className={`fixed top-16 right-0 h-screen w-60 bg-white shadow-md transition-transform duration-300  z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row gap-8 p-6 md:p-0 md:gap-6 text-right">
            <li><Link href="./" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">خانه</Link></li>
            <li><Link href="./about" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">درباره ما</Link></li>
             <li><Link href="./service" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">خدمات ما</Link></li>
            <li><Link href="./colleagues" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">همکاران ما</Link></li>
            <li><Link href="#" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">فرصت های شغلی</Link></li>
            <li><Link href="./news" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">اخبار و مقالات</Link></li>
            <li><Link href="./contact" onClick={()=> setIsOpen(false)} className="text-gray-700 md:text-white hover:text-blue-500">تماس با ما</Link></li>  
        </ul>
      </nav>
    </header>
  )
}

