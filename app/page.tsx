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
              number="第五章" 
              title="青山湖郊游" 
              excerpt="郊游当天，天气格外晴朗。皮皮比约定时间早到了十分钟，站在校门口等候。他今天穿了一身简约的户外装备，准备大展身手。"
              slug="chapter5"
            />
            <ChapterCard 
              number="第六章" 
              title="电影院的游戏" 
              excerpt="周六很快来临，皮皮站在镜子前仔细打量着自己。今天他特意选择了一身轻松休闲的装扮，准备在电影院大展身手。"
              slug="chapter6"
            />
            <ChapterCard 
              number="第七章" 
              title="运动场上的征服" 
              excerpt="校运动会前一周，皮皮每天清晨都会去操场跑步。有了中级体魄强化，他的身体素质大幅提升，十圈下来气息如常。"
              slug="chapter7"
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