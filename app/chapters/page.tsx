'use client';

import Link from 'next/link';
import { FiBookOpen, FiChevronRight } from 'react-icons/fi';

export default function ChaptersPage() {
  // 模拟章节数据
  const chapters = [
    { 
      number: 1, 
      title: "舔狗的终局", 
      excerpt: "皮皮坐在出租屋昏暗的灯光下，手机屏幕亮着，上面是甜甜发的朋友圈：「今晚真冷，好想有人抱抱」。这条朋友圈下面已经有了99+的评论，大部分是男生的各种嬉皮笑脸。",
      date: "2023-12-01",
      slug: "chapter1"
    },
    { 
      number: 2, 
      title: "草比系统觉醒", 
      excerpt: "下课铃声刚响，皮皮正准备起身，突然眼前闪过一道金光，紧接着一个半透明的蓝色界面出现在他的视野中。【叮！草比系统已激活】",
      date: "2023-12-10",
      slug: "chapter2"
    },
    { 
      number: 3, 
      title: "初级读心术", 
      excerpt: "清晨，皮皮被系统的提示音叫醒。【每日任务提醒：对甜甜保持若即若离的态度】他伸了个懒腰，发现身体充满了力量，这就是昨天获得的体魄强化的效果。",
      date: "2023-12-20",
      slug: "chapter3"
    },
    {
      number: 4,
      title: "联谊会的魅力战场",
      slug: "chapter4",
      excerpt: "周末的联谊会如期而至，这是一场学校组织的半正式活动，目的是促进学生之间的交流和友谊。对于皮皮来说，这是一个展示新自我的绝佳舞台。"
    },
    {
      number: 5,
      title: "青山湖郊游",
      slug: "chapter5",
      excerpt: "郊游当天，天气格外晴朗。皮皮比约定时间早到了十分钟，站在校门口等候。他今天穿了一身简约的户外装备，准备大展身手。"
    },
    {
      number: 6,
      title: "电影院的游戏",
      slug: "chapter6",
      excerpt: "周六很快来临，皮皮站在镜子前仔细打量着自己。今天他特意选择了一身轻松休闲的装扮，准备在电影院大展身手，同时操控两名女生。"
    }
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