'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiBookOpen, FiUsers, FiChevronRight } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 英雄区域 */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">重生之我是皮皮爱草比</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            从卑微舔狗到霸道总裁，一场关于逆袭与成长的奇幻旅程
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/chapters" className="btn btn-primary flex items-center justify-center">
              开始阅读 <FiChevronRight className="ml-2" />
            </Link>
            <Link href="/characters" className="btn bg-white text-primary hover:bg-gray-100 flex items-center justify-center">
              认识角色 <FiUsers className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 最新章节 */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">最新章节</h2>
            <Link href="/chapters" className="text-accent hover:text-amber-600 flex items-center">
              查看全部 <FiChevronRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChapterCard 
              number="第一章" 
              title="舔狗的终局" 
              excerpt="深秋的夜里，风有些凉。皮皮坐在出租屋昏暗的灯光下，手机屏幕亮着，上面是甜甜发的朋友圈..."
              slug="chapter1"
            />
            <ChapterCard 
              number="第二章" 
              title="重生高中" 
              excerpt="'皮皮！皮皮！上课睡什么觉，站起来回答问题！'一个尖锐的女声把皮皮从黑暗中拉了出来..."
              slug="chapter2"
            />
            <ChapterCard 
              number="第三章" 
              title="新的开始" 
              excerpt="从重生那天起，皮皮就告诉自己，这一次一定不能再做舔狗。他开始制定计划，如何逆袭人生..."
              slug="chapter3"
            />
          </div>
        </div>
      </section>

      {/* 角色介绍 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">角色介绍</h2>
            <Link href="/characters" className="text-accent hover:text-amber-600 flex items-center">
              查看全部 <FiChevronRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CharacterCard 
              name="皮皮" 
              role="主角" 
              description="前世舔狗之王，重生后变身恋爱高手"
              slug="pipi"
            />
            <CharacterCard 
              name="甜甜" 
              role="女主角" 
              description="前世高冷女神，今生被皮皮吃得死死的"
              slug="tiantian"
            />
            <CharacterCard 
              name="老虎" 
              role="好兄弟" 
              description="皮皮的恋爱军师，提供各种撩妹攻略"
              slug="laohu"
            />
            <CharacterCard 
              name="夏日" 
              role="情敌" 
              description="文艺男青年，喜欢甜甜，却被皮皮截胡"
              slug="xiari"
            />
          </div>
        </div>
      </section>


    </div>
  );
}

// 章节卡片组件
const ChapterCard = ({ number, title, excerpt, slug }: { number: string, title: string, excerpt: string, slug: string }) => {
  return (
    <Link href={`/chapters/${slug}`} className="card hover:translate-y-[-5px] transition-transform">
      <div className="flex items-center mb-3">
        <FiBookOpen className="text-accent mr-2" size={18} />
        <span className="text-secondary font-medium">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary line-clamp-3">{excerpt}</p>
      <div className="mt-4 flex items-center text-accent hover:text-amber-600">
        查看详情 <FiChevronRight className="ml-1" />
      </div>
    </Link>
  );
};

// 角色卡片组件
const CharacterCard = ({ name, role, description, slug }: { name: string, role: string, description: string, slug: string }) => {
  return (
    <Link href={`/characters/${slug}`} className="card hover:translate-y-[-5px] transition-transform">
      <div className="h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
        <span className="text-6xl font-bold text-gray-400">{name[0]}</span>
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <div className="text-accent text-sm mb-2">{role}</div>
      <p className="text-secondary line-clamp-2">{description}</p>
    </Link>
  );
};