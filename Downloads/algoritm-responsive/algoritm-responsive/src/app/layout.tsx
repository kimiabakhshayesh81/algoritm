
import Header from '@/component/Header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer/footer'
import 'flowbite';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My App',
  description: 'Created with Next.js and Tailwind CSS',
}


interface RootLayoutProps {
  children: ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-20`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}