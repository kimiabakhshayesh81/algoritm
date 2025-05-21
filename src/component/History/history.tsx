export default function CompanyHistoryTimeline() {
//   const milestones = [
//     {
//       year: "۱۴۰۲",
//       title: "تأسیس شرکت",
//       description: "شروع فعالیت با هدف توسعه راهکارهای هوش مصنوعی و داده‌محور در بانکداری."
//     },
//     {
//       year: "۱۴۰۳",
//       title: "توسعه اولین محصولات",
//       description: "طراحی و پیاده‌سازی سامانه‌های تحلیل ریسک، کشف تقلب و داشبوردهای داده‌محور."
//     },
//     {
//       year: "۱۴۰۴",
//       title: "گسترش همکاری‌ها",
//       description: "توسعه همکاری با نهادهای مالی برای ارائه راهکارهای فین‌تک و هوشمندسازی فرآیندها."
//     },
//     {
//       year: "آینده",
//       title: "چشم‌انداز",
//       description: "پیشرو در صنعت هوش مصنوعی کشور و ارائه خدمات در سطح منطقه."
//     }
//   ];

//   return (
//     <section className="w-full py-8 px-4 bg-white" dir="rtl">
//       <h2 className="text-xl font-bold text-center text-[#2c3e50] mb-6">تاریخچه شرکت</h2>
//       <div className="relative border-r-4 border-[#6FABC2] max-w-md mx-auto">
//         {milestones.map((item, index) => (
//           <div key={index} className="mb-10 mr-4 relative">
//             <div className="absolute -right-5 top-1 w-4 h-4 bg-[#6FABC2] rounded-full border-2 border-white shadow-md"></div>
//             <div className="bg-[#f9f9f9] p-4 rounded-lg shadow-md">
//               <h3 className="text-sm font-bold text-[#34495e]">{item.year} - {item.title}</h3>
//               <p className="text-sm mt-2 text-gray-700 leading-6 text-justify">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );



  const items = [
    {
      year: "۱۴۰۲",
      title: "آغاز فعالیت",
      description: "شرکت الگوریتم با حمایت بانک صادرات تأسیس شد.",
    },
    {
      year: "۱۴۰۳",
      title: "توسعه پلتفرم‌ها",
      description: "راه‌اندازی اولین پلتفرم تحلیل هوشمند بانکی.",
    },
    {
      year: "۱۴۰۴",
      title: "گسترش همکاری‌ها",
      description: "همکاری با نهادهای مالی برای توسعه محصولات داده‌محور.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white" dir="rtl">
      <h2 className="text-2xl font-bold text-center text-[#2c3e50] mb-12">تاریخچه شرکت</h2>
      <div className="relative border-r-2 border-[#6FABC2] max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="mb-12 flex items-start relative pr-10">
            <div className="absolute right-0 w-4 h-4 bg-[#6FABC2] rounded-full mt-1"></div>
            <div className="bg-[#f0f4f8] rounded-lg shadow p-4 w-full mr-6">
              <h3 className="text-[#6FABC2] font-bold">{item.year}</h3>
              <h4 className="font-semibold mt-1">{item.title}</h4>
              <p className="text-sm text-gray-700 mt-2 text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );






// const milestones = [
//     { year: "۱۴۰۲", text: "تأسیس و تدوین استراتژی داده‌محور" },
//     { year: "۱۴۰۳", text: "راه‌اندازی پلتفرم پردازش هوشمند داده‌ها" },
//     { year: "۱۴۰۴", text: "گسترش دامنه خدمات در صنعت بانکداری دیجیتال" },
//   ];

//   return (
//     <section className="w-full py-10 bg-white" dir="rtl">
//       <h2 className="text-center text-2xl font-bold text-[#2c3e50] mb-12">مسیر رشد ما</h2>
//       <div className="relative max-w-4xl mx-auto">
//         <div className="absolute right-1/2 translate-x-1/2 w-1 h-full bg-[#6FABC2]" />
//         {milestones.map((item, index) => (
//           <div key={index} className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
//             <div className="w-1/2 px-4">
//               <div className="bg-[#e8f0f8] p-4 rounded-xl shadow-md">
//                 <h3 className="font-bold text-[#6FABC2]">{item.year}</h3>
//                 <p className="text-sm mt-2 text-gray-800 text-justify">{item.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
}


