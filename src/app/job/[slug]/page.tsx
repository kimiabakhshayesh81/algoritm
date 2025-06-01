


'use client'

import { notFound } from "next/navigation";
import Image from "next/image";
import front from './../../../../public/frontend.png'
import back from './../../../../public/backend.png'
import devOps from './../../../../public/devops.png'
import ml from './../../../../public/mlops.png'
import { Plus } from "lucide-react";
import { useRef, useState } from "react";

const jobDetails = {
  'frontend-developer': {
    img: front,
    title: 'Front End Developer',
    description: 'توسعه رابط کاربری با استفاده از React، Tailwind و Next.js',
  },
  'backend-developer': {
    img: back,
    title: 'Back End Developer',
    description: 'طراحی API، مدیریت پایگاه داده و پیاده‌سازی لاجیک سرور',
  },
  'devops-engineer': {
    img: devOps,
    title: 'DevOps Engineer',
    description: 'مدیریت زیرساخت و CI/CD با Docker و Kubernetes',
  },
  'mlops-engineer': {
    img: ml,
    title: 'MLOps Engineer',
    description: 'استقرار مدل‌های ML و مدیریت چرخه‌ی یادگیری ماشین',
  }
};

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobDetails[params.slug];
  if (!job) return notFound();

  const cvRef = useRef<HTMLInputElement>(null);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showAboutInput, setShowAboutInput] = useState(false);
  const [link, setLink] = useState('');
  const [about, setAbout] = useState('');

  const handleUploadClick = () => {
    if (cvRef.current) cvRef.current.click();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-10 flex flex-col gap-10 font-sans">

      {/* اطلاعات شغل */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6">
        <div className="w-full flex justify-center">
          <Image src={job.img} alt='' className="rounded-lg object-contain" />
        </div>
        <div className="flex flex-col justify-center gap-4 text-right">
          <p className="text-3xl font-extrabold text-gray-800">{job.title}</p>
          <p className="text-lg text-gray-600 leading-relaxed">{job.description}</p>
        </div>
      </div>

      {/* فرم‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* آپلود رزومه */}
        <div className="border bg-white p-5 rounded-2xl shadow-lg flex items-center justify-between hover:shadow-xl transition">
          <input
            type="file"
            ref={cvRef}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <span className="text-lg font-semibold text-gray-800">آپلود رزومه</span>
          <button
            type="button"
            onClick={handleUploadClick}
            className="p-2 rounded-full hover:bg-blue-100 transition"
          >
            <Plus className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* لینک مرتبط */}
        <div className="border bg-white p-5 rounded-2xl shadow-lg flex flex-col gap-3 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">افزودن لینک مرتبط</span>
            <button
              type="button"
              onClick={() => setShowLinkInput(true)}
              className="p-2 rounded-full hover:bg-blue-100 transition"
            >
              <Plus className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          {showLinkInput && (
            <input
              type="url"
              placeholder="https://your-link.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        {/* درباره شما */}
        <div className="md:col-span-2 border bg-white p-5 rounded-2xl shadow-lg flex flex-col gap-3 hover:shadow-xl transition">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">درباره شما</span>
            <button
              type="button"
              onClick={() => setShowAboutInput(true)}
              className="p-2 rounded-full hover:bg-blue-100 transition"
            >
              <Plus className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          {showAboutInput && (
            <textarea
              placeholder="درباره خودتان بنویسید..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          )}
        </div>

      </div>
    </div>
  )
}
