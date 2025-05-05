import Link from 'next/link';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { notFound } from 'next/navigation';

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
  },
  {
    id: 'waner',
    name: '林婉儿',
    role: '校花',
    fullDescription: `
# 林婉儿 (校花)

## 基本信息

**年龄**：18岁
**身份**：语文课代表，文学社社长
**外表**：文静优雅，气质出众

## 性格特点

- 文静优雅，才华横溢
- 外表清冷但内心热情
- 对文学和艺术充满热爱
- 有自己的原则和坚持

## 技能特长

- 写作能力极强，校报主编
- 朗诵和演讲有天赋
- 组织能力好，善于策划文学活动
- 阅读量大，知识面广

## 成长轨迹

林婉儿一直是学校里的才女，以文静优雅著称。当她发现皮皮在作文和文学方面展现出的才华后，开始对他产生兴趣。

从最初的学术交流到逐渐被皮皮的才华和魅力所吸引，林婉儿经历了从不屑到好奇，再到主动接近的过程。她是少数能与皮皮进行深度交流的女生之一。

## 名言金句

- "真正的文学应该触动人心"
- "优秀的人总是相互吸引"
- "我喜欢有深度的交流"
- "感情需要用心经营，不是靠表面的花言巧语"

## 关系网络

- 与皮皮：欣赏其才华，渐生情愫
- 与甜甜：表面友好，暗中较劲
- 与苏小雨：性格互补的好友
    `,
    color: 'purple'
  },
  {
    id: 'xiaoyu',
    name: '苏小雨',
    role: '体育委员',
    fullDescription: `
# 苏小雨 (体育委员)

## 基本信息

**年龄**：18岁
**身份**：体育委员，校篮球队女队长
**外表**：活泼阳光，运动型身材

## 性格特点

- 活泼开朗，直率坦诚
- 性格豪爽，不拘小节
- 做事积极，充满活力
- 重情义，讲义气

## 技能特长

- 体育全能，特别擅长篮球和田径
- 组织能力强，善于带动团队
- 行动力强，说到做到
- 乐观向上，感染力强

## 成长轨迹

苏小雨一直是学校里的运动健将，性格开朗活泼。当她看到皮皮在篮球场上的出色表现后，对他产生了浓厚兴趣。

从单纯的运动伙伴到逐渐被皮皮的才能和性格所吸引，苏小雨用她直率的方式表达着对皮皮的好感。她不像其他女生那样扭捏，而是直接表达自己的感受。

## 名言金句

- "喜欢就要大声说出来"
- "我不喜欢拐弯抹角，直接一点多好"
- "运动是最好的交流方式"
- "人生就是要勇往直前，不要瞻前顾后"

## 关系网络

- 与皮皮：从运动伙伴到暗生情愫
- 与林婉儿：性格互补的好友
- 与甜甜：坦率相处，但也有竞争
    `,
    color: 'red'
  },
  {
    id: 'xujing',
    name: '徐静',
    role: '班长',
    fullDescription: `
# 徐静 (班长)

## 基本信息

**年龄**：18岁
**身份**：班长，学生会主席
**外表**：干练利落，知性美女

## 性格特点

- 严谨认真，责任心强
- 表面高冷，内心细腻
- 做事有条理，善于规划
- 对问题学生有独特见解

## 技能特长

- 学习成绩优异，特别是理科
- 管理和组织能力极强
- 分析问题深入透彻
- 规划执行力强，做事有始有终

## 成长轨迹

徐静一直是学校里的模范生，作为班长和学生会主席，她严格要求自己和他人。起初，她对皮皮这样的"问题学生"并不认可。

但随着皮皮的变化和成长，徐静开始对他刮目相看。从最初的批评教育到逐渐被皮皮的才华和改变所吸引，徐静经历了从严厉班长到暗恋者的转变。

## 名言金句

- "规则是用来遵守的，不是用来打破的"
- "真正的成长是从认识自己的不足开始的"
- "我欣赏有自我改变能力的人"
- "有时候，严格是一种关心的表现"

## 关系网络

- 与皮皮：从批评教育到暗中欣赏
- 与老虎：表面上管教严厉，实则互相欣赏
- 与班上其他学生：严格但公正
    `,
    color: 'gray'
  }
];

// 颜色映射
const colorMap: Record<string, string> = {
  'blue': 'bg-blue-50 border-blue-200 text-blue-600',
  'pink': 'bg-pink-50 border-pink-200 text-pink-600',
  'amber': 'bg-amber-50 border-amber-200 text-amber-600',
  'green': 'bg-green-50 border-green-200 text-green-600',
  'purple': 'bg-purple-50 border-purple-200 text-purple-600',
  'red': 'bg-red-50 border-red-200 text-red-600',
  'gray': 'bg-gray-50 border-gray-200 text-gray-600'
};

// 背景颜色映射
const bgColorMap: Record<string, string> = {
  'blue': 'bg-blue-500',
  'pink': 'bg-pink-500',
  'amber': 'bg-amber-500',
  'green': 'bg-green-500',
  'purple': 'bg-purple-500',
  'red': 'bg-red-500',
  'gray': 'bg-gray-500'
};

// 渲染角色描述（简单的Markdown解析）
const renderDescription = (text: string) => {
  const paragraphs = text.trim().split('\n\n');
  
  return paragraphs.map((paragraph, index) => {
    if (paragraph.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold mb-6">{paragraph.replace('# ', '')}</h1>;
    } else if (paragraph.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-bold mb-4 mt-8">{paragraph.replace('## ', '')}</h2>;
    } else if (paragraph.startsWith('**')) {
      // 处理基本信息部分，比如"**年龄**：18岁"
      const lines = paragraph.split('\n');
      if (lines.length > 1) {
        // 多行**xx**：yy格式
        return (
          <div key={index} className="space-y-2 mb-4">
            {lines.map((line, i) => {
              const matches = line.match(/\*\*(.+?)\*\*[：:]\s*(.*)/);
              if (matches) {
                return (
                  <div key={i} className="mb-1">
                    <strong className="font-bold">{matches[1]}</strong>：{matches[2]}
                  </div>
                );
              }
              return <div key={i}>{line}</div>;
            })}
          </div>
        );
      } else {
        // 单行**xx**：yy格式
        const matches = paragraph.match(/\*\*(.+?)\*\*[：:]\s*(.*)/);
        if (matches) {
          return (
            <div key={index} className="mb-4">
              <strong className="font-bold">{matches[1]}</strong>：{matches[2]}
            </div>
          );
        }
      }
      
      // 处理其他加粗文本
      return <p key={index} className="mb-4" dangerouslySetInnerHTML={{
        __html: paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      }} />;
    } else if (paragraph.startsWith('- ')) {
      // 处理列表
      const items = paragraph.split('\n').map(item => item.replace('- ', ''));
      return (
        <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
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

export default function CharacterPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // 获取当前角色
  const character = characters.find(char => char.id === id);
  
  // 如果角色不存在，返回404
  if (!character) {
    notFound();
  }
  
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/characters"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiArrowLeft className="mr-2" /> 返回角色列表
          </Link>
        </div>
        
        <div className="mb-8 flex items-center gap-6">
          <div className={`p-8 rounded-lg ${colorMap[character.color]} border text-center`}>
            <span className="text-5xl font-bold">{character.name[0]}</span>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{character.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className={`text-sm px-2 py-1 rounded-full ${colorMap[character.color]}`}>
                {character.role}
              </div>
            </div>
          </div>
        </div>
        
        <div className="prose max-w-none">
          {renderDescription(character.fullDescription)}
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link 
            href="/characters"
            className="btn btn-primary inline-flex items-center"
          >
            查看其他角色 <FiChevronRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
} 