'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

export default function CharacterPage() {
  const params = useParams();
  const id = params.id as string;
  
  // 模拟角色数据
  const characters = [
    {
      id: 'pipi',
      name: '皮皮',
      role: '主角',
      fullDescription: `
# 皮皮 (主角)

## 基本信息

**年龄**：18岁 (重生后)
**身份**：高中生 → 成功人士
**外表**：阳光帅气，身高178cm，重生后逐渐锻炼出腹肌

## 性格特点

**前世**：
- 性格懦弱，缺乏自信
- 对甜甜百依百顺，不懂拒绝
- 为了讨好女生不惜一切代价
- 人生目标全围绕着甜甜

**今世**：
- 自信阳光，略带痞气
- 深谙女性心理，善于制造吸引力
- 有自己的原则和底线
- 懂得适当拒绝，引导关系走向

## 技能特长

- 重生带来的信息优势，对未来有预知能力
- 篮球打得好
- 情商极高，能察言观色
- 学习能力强，成绩优异

## 成长轨迹

重生后的皮皮依靠前世的经验和教训，迅速从一个舔狗变成了校园风云人物。他不再盲目追求甜甜，而是建立自己的社交圈和价值体系，这反而使甜甜对他产生了兴趣。

皮皮的蜕变不仅仅是在恋爱方面，他在学业上也取得了巨大进步，并且开始规划自己的未来事业。

## 名言金句

- "舔狗舔到最后，一无所有"
- "这辈子，我只做别人的男神，不做别人的舔狗"
- "想要别人爱你，首先要爱自己"
- "我要的女人，我抢；想草谁就草谁"

## 关系网络

- 与甜甜：从前世的舔狗到今世的猎手，角色完全颠倒
- 与老虎：好兄弟，今世的恋爱顾问
- 与夏日：情敌关系，多次抢走夏日喜欢的女生
      `,
      color: 'blue'
    },
    {
      id: 'tiantian',
      name: '甜甜',
      role: '女主角',
      fullDescription: `
# 甜甜 (女主角)

## 基本信息

**年龄**：18岁
**身份**：高中校花
**外表**：长发飘飘，大眼睛，甜美可人

## 性格特点

**前世**：
- 高冷女神，对舔狗们不屑一顾
- 享受被追捧的感觉
- 有公主病，要求高
- 喜欢有价值的男生

**今世**：
- 依然高冷，但对皮皮的冷漠感到不解
- 逐渐对皮皮产生好奇和兴趣
- 控制欲强，不能接受自己追不到的男生
- 为了得到皮皮的注意，开始改变自己

## 技能特长

- 长相出众，天生丽质
- 舞蹈跳得好
- 社交能力强，人缘好
- 会利用自己的魅力获取资源

## 成长轨迹

今世的甜甜起初和前世一样，依然是众人追捧的校花。但她发现重生后的皮皮对她不再像以前那样献殷勤，反而对她若即若离，这让她感到不解和好奇。

随着剧情发展，甜甜开始主动追求皮皮，经历了从被追捧到主动追求的角色转变，也逐渐认识到自己的缺点，开始真正成长。

## 名言金句

- "为什么他突然不理我了？"
- "我甜甜什么时候追过男生？"
- "为了他，我可以改变"
- "原来被忽视的感觉这么难受"

## 关系网络

- 与皮皮：从前世的高高在上到今世的倒追
- 与其他女生：竞争关系，为了皮皮争风吃醋
- 与夏日：前世夏日默默暗恋她，今世却发现她只在乎皮皮
      `,
      color: 'pink'
    },
    {
      id: 'laohu',
      name: '老虎',
      role: '好兄弟',
      fullDescription: `
# 老虎 (好兄弟)

## 基本信息

**年龄**：18岁
**身份**：皮皮的铁哥们
**外表**：高大魁梧，运动型身材

## 性格特点

- 热血仗义，重情重义
- 直男思维，但情感intelligence高
- 嘴毒心善，说话不好听但为朋友两肋插刀
- 恋爱理论大师，自己却总是脱单失败

## 技能特长

- 运动全能，特别是篮球
- 游戏打得好，常常带皮皮躺赢
- 观察力敏锐，善于分析人际关系
- 总结出一套"恋爱狩猎手册"

## 成长轨迹

老虎在前世是皮皮为数不多的朋友，两人经常一起打游戏，是皮皮舔狗生涯中的精神支柱。

重生后，老虎成为皮皮的恋爱军师，虽然自己恋爱不顺，但能为皮皮提供各种理论支持和分析。随着剧情发展，老虎也在皮皮的帮助下，逐渐找到属于自己的爱情。

## 名言金句

- "兄弟，你今天又看她朋友圈了吧？别看了，来打游戏，带你赢！"
- "舔狗的本质是价值交换不对等"
- "女人都喜欢自己得不到的东西"
- "兄弟，记住，永远不要跪舔女人"

## 关系网络

- 与皮皮：铁哥们，生死之交
- 与甜甜：表面不屑，实则暗中观察，为皮皮提供情报
- 最终与班长（配角）走到一起，找到真爱
      `,
      color: 'amber'
    },
    {
      id: 'xiari',
      name: '夏日',
      role: '情敌',
      fullDescription: `
# 夏日 (情敌)

## 基本信息

**年龄**：18岁
**身份**：文艺学长
**外表**：斯文帅气，文艺气息浓厚

## 性格特点

- 内敛深情，不善表达
- 文艺忧郁，喜欢写诗
- 专一执着，一旦喜欢就很难放下
- 行动太慢，常常错失良机

## 技能特长

- 弹吉他，会创作歌曲
- 文笔好，写诗写歌词
- 学习成绩优异
- 有文艺细胞，懂浪漫

## 成长轨迹

前世的夏日暗恋甜甜，但因为性格原因，从来没有表白过。今世，他决定鼓起勇气追求甜甜，却发现甜甜的注意力全在皮皮身上。

多次被皮皮截胡后，夏日从最初的郁闷到嫉妒，最终走向黑化，成为皮皮的情敌和对手。但在一系列较量后，他逐渐认识到自己的问题，开始反思和成长。

## 名言金句

- "爱情不是占有，而是成全"
- "我可以等，但不能永远等下去"
- "为什么女生总是喜欢表面花心的人"
- "真正的爱，应该是平等的"

## 关系网络

- 与皮皮：表面朋友，实则情敌
- 与甜甜：单相思，默默付出却得不到回应
- 最终与转学生(配角)相恋，找到更适合自己的人
      `,
      color: 'green'
    }
  ];
  
  // 获取当前角色
  const character = characters.find(char => char.id === id);
  
  // 颜色映射
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-50 border-blue-200 text-blue-600',
    'pink': 'bg-pink-50 border-pink-200 text-pink-600',
    'amber': 'bg-amber-50 border-amber-200 text-amber-600',
    'green': 'bg-green-50 border-green-200 text-green-600'
  };
  
  // 背景颜色映射
  const bgColorMap: Record<string, string> = {
    'blue': 'bg-blue-500',
    'pink': 'bg-pink-500',
    'amber': 'bg-amber-500',
    'green': 'bg-green-500'
  };
  
  // 渲染角色描述（简单的Markdown解析）
  const renderDescription = (text: string) => {
    const paragraphs = text.trim().split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6">{paragraph.replace('# ', '')}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-8">{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph.startsWith('**') && paragraph.endsWith('**:')) {
        // 处理 **标题**:
        return (
          <div key={index} className="font-bold mt-4 mb-2">
            {paragraph.replace(/^\*\*|\*\*:$/g, '')}:
          </div>
        );
      } else if (paragraph.startsWith('- ')) {
        // 处理列表
        const items = paragraph.split('\n').map(item => item.replace('- ', ''));
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-1">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      } else {
        return <p key={index} className="mb-4">{paragraph}</p>;
      }
    });
  };
  
  if (!character) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">角色未找到</h1>
        <p className="mb-6">抱歉，您请求的角色不存在。</p>
        <Link href="/characters" className="btn btn-primary">
          返回角色列表
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/characters" 
            className="flex items-center text-primary hover:text-accent transition-colors"
          >
            <FiArrowLeft className="mr-2" /> 返回角色列表
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* 角色头部信息 */}
          <div className={`${bgColorMap[character.color]} text-white p-8`}>
            <div className="flex items-center space-x-6">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-5xl font-bold text-gray-800">{character.name[0]}</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">{character.name}</h1>
                <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full">
                  {character.role}
                </div>
              </div>
            </div>
          </div>
          
          {/* 角色详细介绍 */}
          <div className="p-8">
            <article className="prose prose-lg max-w-none">
              {renderDescription(character.fullDescription)}
            </article>
          </div>
        </div>
        
        {/* 推荐其他角色 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">其他角色</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {characters
              .filter(char => char.id !== character.id)
              .map(char => (
                <Link
                  key={char.id}
                  href={`/characters/${char.id}`}
                  className="card hover:shadow-md transition-shadow flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 rounded-full ${bgColorMap[char.color]} flex items-center justify-center text-white`}>
                    <span className="font-bold">{char.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">{char.name}</h3>
                    <p className="text-sm text-secondary">{char.role}</p>
                  </div>
                  <FiChevronRight className="ml-auto text-secondary" />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
} 