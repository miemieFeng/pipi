'use client';

import Link from 'next/link';
import { FiBookOpen, FiChevronRight } from 'react-icons/fi';

export default function ChaptersPage() {
  // 模拟章节数据
  const chapters = [
    { 
      number: 1, 
      title: "舔狗的终局", 
      excerpt: "深秋的夜里，风有些凉。皮皮坐在出租屋昏暗的灯光下，手机屏幕亮着，上面是甜甜发的朋友圈：「今晚真冷，好想有人抱抱」。",
      date: "2023-12-01",
      slug: "chapter1"
    },
    { 
      number: 2, 
      title: "重生高中", 
      excerpt: "皮皮！皮皮！上课睡什么觉，站起来回答问题一个尖锐的女声把皮皮从黑暗中拉了出来。他猛地睁开眼睛，发现自己坐在教室里。",
      date: "2023-12-10",
      slug: "chapter2"
    },
    { 
      number: 3, 
      title: "新的开始", 
      excerpt: "从重生那天起，皮皮就告诉自己，这一次一定不能再做舔狗。如果老天给了他重来一次的机会，他一定要改变自己的命运！",
      date: "2023-12-20",
      slug: "chapter3"
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">小说章节</h1>
          <p className="text-secondary max-w-3xl mx-auto">
            以下是《重生之我是皮皮爱草比》的全部章节，按照发布时间排序。
          </p>
        </div>

        <div className="space-y-8">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="card border border-gray-100 hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-24 flex items-center justify-center text-center mb-4 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">{chapter.number}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-secondary text-sm mb-1">
                    {chapter.date}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    第{chapter.number}章：{chapter.title}
                  </h2>
                  <p className="text-secondary mb-4">
                    {chapter.excerpt}
                  </p>
                  <Link 
                    href={`/chapters/${chapter.slug}`}
                    className="text-accent hover:text-amber-600 flex items-center w-fit"
                  >
                    阅读章节 <FiChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary mb-4">更多章节正在创作中，敬请期待！</p>
          <Link 
            href="/"
            className="btn btn-primary inline-flex items-center"
          >
            返回首页 <FiChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
} 