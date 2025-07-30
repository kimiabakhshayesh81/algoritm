// app/news/[id]/page.tsx

import { notFound } from 'next/navigation'

const newsData = [
  {
    id: '1',
    title: 'خدمات جدید بانک صادرات ایران',
    content: 'محتوای کامل خبر اول',
  },
  {
    id: '2',
    title: 'افتتاح سامانه جدید',
    content: 'محتوای کامل خبر دوم',
  },
  {
    id: '3',
    title : 'خبر سوم ',
    content : 'محتوای خبر سوم'
  }
]

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = newsData.find((item) => item.id === params.id)

  if (!news) {
    notFound() // صفحه 404
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{news.title}</h1>
      <p className="mt-4">{news.content}</p>
    </div>
  )
}
