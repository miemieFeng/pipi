import Link from 'next/link';
import { FiUser, FiChevronRight } from 'react-icons/fi';

// 模拟角色数据
const characters = [
  {
    id: 'pipi',
    name: '皮皮',
    role: '主角',
    avatar: '/images/pipi.jpg',
    description: '前世身份：舔狗之王，对甜甜爱得卑微，天天发红包点赞评论，结果连微信备注都没有。死法：撸管过度，精尽人亡。重生后：霸道、有手段、恋爱脑转变为恋爱猎手，开始逆袭。性格转变：不再跪舔，开始掌控节奏。主打一个"吊儿郎当却人人爱"。',
    color: 'blue'
  },
  {
    id: 'tiantian',
    name: '甜甜',
    role: '女主角',
    avatar: '/images/tiantian.jpg',
    description: '前世：女神高冷、对皮皮不屑一顾。今世：因为皮皮不再主动，反而开始好奇，一步步陷入。特点：外冷内热，控制欲强，不能接受自己被无视。今世剧情转折：被皮皮忽冷忽热搞得心痒难耐，变成主动追求者，对皮皮死缠烂打。',
    color: 'pink'
  },
  {
    id: 'laohu',
    name: '老虎',
    role: '好兄弟',
    avatar: '/images/laohu.jpg',
    description: '前世：皮皮舔狗路上的唯一慰藉，一起熬夜打游戏，互诉衷肠。今世：皮皮的"恋爱军师"，凭借无数"失败经历"总结出一套"恋爱狩猎手册"。特点：直男嘴贱+恋爱理论大师，情场经验少但总结很多。功能：辅助皮皮收割女生，提供金句与理论支撑。',
    color: 'amber'
  },
  {
    id: 'xiari',
    name: '夏日',
    role: '男二',
    avatar: '/images/xiari.jpg',
    description: '前世：皮皮舔狗生涯的同路人，虽然不舔，但也没得到甜甜。今世：想低调追喜欢的女生，却屡次被皮皮截胡。性格：文艺气息浓厚，擅长弹吉他、写诗，但太慢热。心理线：从一开始的郁闷，到嫉妒，到后来黑化。',
    color: 'green'
  },
  {
    id: 'waner',
    name: '林婉儿',
    role: '校花',
    avatar: '/images/waner.jpg',
    description: '文静优雅，才华横溢，外表清冷但内心热情。语文课代表，文学社社长。被皮皮的才华和魅力所吸引，从不屑到好奇，再到主动接近。',
    color: 'purple'
  },
  {
    id: 'xiaoyu',
    name: '苏小雨',
    role: '体育委员',
    avatar: '/images/xiaoyu.jpg',
    description: '活泼开朗，直率坦诚，体育全能。被皮皮突然展现的体育才能所吸引，从单纯的运动伙伴到暗生情愫，用直率的方式表达好感。',
    color: 'red'
  },
  {
    id: 'xujing',
    name: '徐静',
    role: '班长',
    avatar: '/images/xujing.jpg',
    description: '班长，学生会主席，学霸。严谨认真，责任心强，表面高冷，内心细腻。从看不惯的问题学生到被皮皮变化所吸引的暗恋者。',
    color: 'gray'
  }
];

// 颜色映射
const colorMap: Record<string, string> = {
  'blue': 'bg-blue-50 border-blue-200 text-blue-500',
  'pink': 'bg-pink-50 border-pink-200 text-pink-500',
  'amber': 'bg-amber-50 border-amber-200 text-amber-500',
  'green': 'bg-green-50 border-green-200 text-green-500',
  'purple': 'bg-purple-50 border-purple-200 text-purple-500',
  'red': 'bg-red-50 border-red-200 text-red-500',
  'gray': 'bg-gray-50 border-gray-200 text-gray-500'
};

export default function CharactersPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">角色介绍</h1>
          <p className="text-secondary max-w-3xl mx-auto">
            《重生之我是皮皮爱草比》中的主要角色，每个角色都有丰富的性格和独特的故事线。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {characters.map((character) => (
            <div 
              key={character.id}
              className="card border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className={`p-6 rounded-lg ${colorMap[character.color]} border`}>
                  <span className="text-3xl font-bold">{character.name[0]}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{character.name}</h2>
                    <div className={`text-sm px-2 py-1 rounded-full ${colorMap[character.color]}`}>
                      {character.role}
                    </div>
                  </div>
                  
                  <p className="text-secondary my-4 line-clamp-3">
                    {character.description}
                  </p>
                  
                  <Link 
                    href={`/characters/${character.id}`}
                    className="text-accent hover:text-amber-600 flex items-center w-fit"
                  >
                    查看详情 <FiChevronRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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