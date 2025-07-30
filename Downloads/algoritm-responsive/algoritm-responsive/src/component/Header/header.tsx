'use client'
import Image from "next/image"
import logo from '@/asset/images/cropped-Logo-New01 1.png'
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (

    <header className=" fixed top-0 w-full h-20 bg-[#000446] px-4 py-2 flex justify-between items-center  z-50">
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
        className={`fixed top-20 right-0 h-screen w-60 bg-white shadow-md transition-transform duration-300  z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row-reverse gap-8 p-6 md:p-0 md:gap-6 text-right">
          <li>
            <Link
              href="./"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              خانه
            </Link>
          </li>

          <li>
            <Link
              href="./about"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/about' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              درباره ما
            </Link>
          </li>

          <li>
            <Link
              href="./service"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/service' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              خدمات ما
            </Link>
          </li>

          <li>
            <Link
              href="./colleagues"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/colleagues' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              همکاران ما
            </Link>
          </li>

          <li>
            <Link
              href="./news"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/news' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              اخبار و مقالات
            </Link>
          </li>



          <li>
            <Link
              href="./job"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/job' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              فرصت های شغلی
            </Link>
          </li>

          <li>
            <Link
              href="./contact"
              onClick={() => setIsOpen(false)}
              className={`md:hover:text-blue-500 hover:text-blue-500 ${pathname === '/contact' ? 'text-blue-500' : 'text-gray-700 md:text-white'
                }`}>
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

