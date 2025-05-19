import Link from "next/link";
import React, { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  href : string
}

const Btn: React.FC<BtnProps> = ({ children , href}) => {
  return (
    <div>
        <Link href={href} className=" flex items-center justify-center bg-[#6FABC2] text-white font-bold font-serif rounded-[6px] w-24 h-8">
            {children}  
        </Link>
    </div>
  );
};

export default Btn;
