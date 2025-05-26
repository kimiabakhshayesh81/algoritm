import Image, { StaticImageData } from "next/image";

interface ContactCardProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
}

function ContactCard({ img, title, desc }: ContactCardProps) {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center">
      <Image className=" w-16 h-16" src={img} alt='' width={100} height={100} />
      <hr className="w-[30%] h-1 bg-[#6FABC2] border-none" />
      <p>{title}</p>
      <span className="pb-4">{desc}</span>
    </div>
  );
}

export default ContactCard;
