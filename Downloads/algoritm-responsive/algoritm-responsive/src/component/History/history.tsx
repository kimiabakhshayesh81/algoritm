// export default function CompanyHistoryTimeline() {


//   const items = [
//     {
//       year: "۱۴۰۲",
//       title: "آغاز فعالیت",
//       description: "شرکت الگوریتم با حمایت بانک صادرات تأسیس شد.",
//     },
//     {
//       year: "۱۴۰۳",
//       title: "توسعه پلتفرم‌ها",
//       description: "راه‌اندازی اولین پلتفرم تحلیل هوشمند بانکی.",
//     },
//     {
//       year: "۱۴۰۴",
//       title: "گسترش همکاری‌ها",
//       description: "همکاری با نهادهای مالی برای توسعه محصولات داده‌محور.",
//     },
//   ];

//   return (
//     <section className="w-full py-12 bg-white" dir="rtl">
//       <h2 className="text-2xl font-bold text-center text-[#2c3e50] mb-12">تاریخچه شرکت</h2>
//       <div className="relative border-r-2 border-[#6FABC2] max-w-3xl mx-auto">
//         {items.map((item, index) => (
//           <div key={index} className="mb-12 flex items-start relative pr-10">
//             <div className="absolute right-0 w-4 h-4 bg-[#6FABC2] rounded-full mt-1"></div>
//             <div className="bg-[#f0f4f8] rounded-lg shadow p-4 w-full mr-6">
//               <h3 className="text-[#6FABC2] font-bold">{item.year}</h3>
//               <h4 className="font-semibold mt-1">{item.title}</h4>
//               <p className="text-sm text-gray-700 mt-2 text-justify">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );






// }













export default function CompanyHistoryTimeline() {
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

      <div className="relative border-r-2 md:border-r-0 md:border-b-2 border-[#6FABC2] max-w-6xl mx-auto flex flex-col md:flex-row md:justify-around">
        {items.map((item, index) => (
          <div key={index} className="mb-12 md:mb-0 md:pb-0 flex items-start md:items-center relative pr-10 md:pr-0 md:pl-10 md:flex-col">
            
            {/* دایره تایم‌لاین */}
            <div className="absolute right-0 md:static md:mb-4 w-4 h-4 bg-[#6FABC2] rounded-full mt-1"></div>

            {/* جعبه محتوا */}
            <div className="bg-[#f0f4f8] rounded-lg shadow p-4 w-full md:w-64 mr-6 md:mr-0">
              <h3 className="text-[#6FABC2] font-bold">{item.year}</h3>
              <h4 className="font-semibold mt-1">{item.title}</h4>
              <p className="text-sm text-gray-700 mt-2 text-justify">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}















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