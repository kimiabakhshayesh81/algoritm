import { notFound } from "next/navigation";

const jobDetails = {
    'frontend-developer': {
        title : 'Front End Developer',
        description: 'توسعه رابط کاربری با استفاده از React، Tailwind و Next.js',
    },

    'backend-developer' : {
        title : 'Back End Developer',
        description: 'طراحی API، مدیریت پایگاه داده و پیاده‌سازی لاجیک سرور',
    },

    'devops-engineer' : {
        title: 'DevOps Engineer',
        description: 'مدیریت زیرساخت و CI/CD با Docker و Kubernetes',
    },

    'mlops-engineer' : {
        title: 'MLOps Engineer',
    description: 'استقرار مدل‌های ML و مدیریت چرخه‌ی یادگیری ماشین',
    }
}



export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = jobDetails[params.slug]

  if (!job) return notFound()

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-right">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{job.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{job.description}</p>
    </div>
  )
}