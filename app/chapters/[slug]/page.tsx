'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight, FiHome, FiBookOpen, FiSettings } from 'react-icons/fi';

export default function ChapterPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [fontSize, setFontSize] = useState<string>('text-base');
  const [theme, setTheme] = useState<string>('light');
  const [showSettings, setShowSettings] = useState<boolean>(false);
  
  // 模拟章节数据
  const chapters = [
    { 
      number: 1, 
      title: "舔狗的终局", 
      content: `# 第一章：舔狗的终局

深秋的夜里，风有些凉。

皮皮坐在出租屋昏暗的灯光下，手机屏幕亮着，上面是甜甜发的朋友圈：「今晚真冷，好想有人抱抱」。这条朋友圈下面已经有了99+的评论，大部分是男生的各种嬉皮笑脸。

皮皮的手指悬在屏幕上方，犹豫了半天，终于还是打出了一行字：「我可以抱抱你吗？」

发送。

秒回："呵呵，你是谁？"

这个回答如同一把刀，狠狠地刺进皮皮的心里。他们明明已经认识三年了，自己给她送过无数次早餐，帮她写过无数次作业，给她发过无数次红包，她竟然连自己是谁都不知道？

皮皮颤抖着点开了和甜甜的聊天记录，向上翻，一条条都是自己的嘘寒问暖，对方要么不回，要么就是简短的"哦"、"嗯"、"谢谢"。

这一刻，他突然意识到，自己在甜甜心中连一个备注都没有，只是众多舔狗中微不足道的一个。

"妈的，我到底在干什么啊！"皮皮用力捶打着桌子，眼泪不争气地流了下来。他打开相册，里面全是甜甜的照片，有些是偷拍的，有些是从朋友圈里保存下来的。三年了，他像是得了甜甜综合症，生活中的一切都围绕着她转。

手机突然震动了一下，是老虎发来的消息："兄弟，你今天又看她朋友圈了吧？别看了，来打游戏，带你赢！"

老虎是他为数不多的朋友，也是唯一知道他对甜甜这段单相思的人。

皮皮没有回复老虎，他的大脑一片空白。他机械地打开了电脑，点开了一个神秘的网站，屏幕上迅速弹出了一些不可描述的画面。

"既然得不到你，那就..."皮皮自言自语着，手已经伸向了裤子拉链。

过了不知道多久，皮皮感觉一阵眩晕，胸口剧痛，眼前的画面开始模糊。他想抓住手机，想给老虎发条消息，但手指已经不听使唤。

"完了，我这是..."

皮皮的最后一个念头是：我对甜甜的爱，终究只换来了一张擦眼泪的纸巾。

然后，一切陷入黑暗。

---

"皮皮！皮皮！上课睡什么觉，站起来回答问题！"

一个尖锐的女声把皮皮从黑暗中拉了出来。他猛地睁开眼睛，发现自己坐在教室里，讲台上站着他高中时代的数学老师——周老师。

"我...我这是..."皮皮惊讶地环顾四周，看到了熟悉的教室，熟悉的同学，还有...坐在前排的甜甜！

甜甜转过头，对他做了个鬼脸，然后又转回去认真听课。

"这不可能！"皮皮低声惊呼，下意识地掐了自己一下，疼痛感真实地传来。

他低头看了看自己的双手，不再是那个精瘦的社畜，而是高中时代的样子，手上还有打篮球留下的茧子。

"我...重生了？"

皮皮的大脑一片混乱，但他很快冷静下来。如果这是真的，如果他真的回到了高中时代，那么...

他的目光再次落在甜甜身上，这一次，他看到的不再是那个高不可攀的女神，而是一个普通的女孩。

一个念头在他脑海中闪过：这一次，我绝不再当舔狗！

如果老天给了他重来一次的机会，他一定要改变自己的命运！

这一世，他要的女人，他抢！想草谁就草谁！

下课铃声响起，皮皮的嘴角露出了一丝从未有过的自信笑容。

重生之路，就此开始。`,
      slug: "chapter1",
      prev: null,
      next: "chapter2"
    },
    { 
      number: 2, 
      title: "草比系统觉醒", 
      content: `# 第二章：草比系统觉醒

下课铃声刚响，皮皮正准备起身，突然眼前闪过一道金光，紧接着一个半透明的蓝色界面出现在他的视野中。

【叮！草比系统已激活】

皮皮愣住了，他环顾四周，发现周围的同学似乎都看不到这个界面，一切都静止了，只有他能动。

【恭喜宿主重生，草比系统为您服务】
【系统将辅助宿主成为一名优秀的草比高手】
【当前系统等级：LV.1】
【可用功能：任务发布、奖励兑换】

"草比系统？这是什么鬼东西？"皮皮小声嘀咕着，伸手去触碰那个蓝色界面，却发现手指能直接穿过去。

【初始任务已发布：无视甜甜一天，奖励：初级体魄强化】

皮皮看着这个任务，不禁笑了。这不正好符合他的想法吗？前世的他，为了甜甜一个眼神可以等上一整天，现在系统却要他故意无视甜甜，这种反差让他感到一丝快意。

"好，就从这个任务开始！"皮皮在心里默默接受了任务。

时间恢复流动，教室里又嘈杂起来。皮皮刚站起身，就看到甜甜朝他走来。

"皮皮，数学作业借我抄一下呗？我昨天没写完。"甜甜脸上带着甜美的微笑，眼睛眨巴眨巴的，这是她惯用的"撒娇"伎俩，以前的皮皮每次都会乖乖就范。

但这一次，皮皮直接无视了她，拿起书包就往教室外走。

"喂！皮皮！"甜甜提高了声音，显得有些不悦，"你没听到我说话吗？"

皮皮充耳不闻，径直走出了教室。

【任务进度：10%】

看到系统提示，皮皮心中暗喜。这种感觉还挺爽的！

走廊上，他看到了老虎正靠在窗边玩手机。重生前，他和老虎关系很好，但高中时期的他们还只是普通同学。

"老虎！"皮皮主动打招呼，"中午一起吃饭？"

老虎抬头，有些惊讶："皮皮？你不是一般都跟着甜甜吗？"

"以前是，现在不是了。"皮皮拍了拍老虎的肩膀，"从今天开始，我们得好好研究一下恋爱这门学问了。"

老虎一脸懵逼："你说啥？"

"我是说，我不想再做舔狗了。你难道不觉得，我们两个天天给女生递情书、送早餐，最后换来的却是'你是个好人'，这种事太无聊了吗？"

老虎眼睛一亮："我靠，皮皮，你终于开窍了？我一直想说，你对甜甜那个态度，真的很没出息。"

"所以，以后我们联手，好好研究一下怎么才能真正吸引女生。"皮皮神秘地笑了笑。

老虎兴奋地点头："好啊！我最近刚好在研究一套理论，就叫'恋爱狩猎手册'，第一条就是——别急着追，先拉仇恨！"

【草比系统提示：检测到潜在助手，建议与其合作】

皮皮笑了，看来系统和老虎的想法不谋而合啊。

中午吃饭时，甜甜特意走到皮皮面前，带着些许不满："皮皮，你今天怎么了？为什么不理我？"

往常的皮皮听到这话，肯定会立刻道歉，然后屁颠屁颠地去帮甜甜拿餐盘。但现在，他只是淡淡地瞥了甜甜一眼，然后对老虎说："这鱼香肉丝不错，你要不要尝尝？"

甜甜站在原地，一脸不可思议的表情。在她的认知里，皮皮永远都是那个对她百依百顺的舔狗，现在的冷淡让她有些不知所措。

【任务进度：45%】

放学后，甜甜又来找皮皮，这次她换了个姿态，声音柔和了许多："皮皮，你最近是不是有什么心事啊？可以跟我说说。"

皮皮刚想说话，系统提示音响起：

【警告：任务尚未完成，请继续无视目标】

他立即闭上嘴，装作没听见，继续收拾书包。

甜甜愣住了，随即脸色变得不太好看："皮皮，你到底什么意思？故意不理我吗？"

皮皮依然不回应，起身离开。

甜甜气得跺了跺脚："你等着，我不会再理你了！"

【任务进度：80%】

晚上回到家，皮皮躺在床上，看着手机上甜甜发来的十几条信息，从最初的气恼，到后来的疑惑，最后竟然变成了关心。

"皮皮，你是不是生病了？"
"你今天很奇怪，是不是我做错什么了？"
"你要是有什么不开心的事，可以告诉我啊。"
"皮皮？你到底看没看手机啊？"

皮皮笑了，前世的自己何时能收到甜甜主动发来的十几条消息？而现在只是简单地无视她一天，就让她开始主动联系自己了。

他刚想回复，系统再次提醒：

【任务尚未完成，还差1小时】

皮皮只好放下手机，决定再忍一忍。一个小时后，系统终于发出悦耳的提示音：

【恭喜宿主完成任务：无视甜甜一天】
【奖励已发放：初级体魄强化】

一股暖流瞬间涌遍皮皮全身，他感觉自己的身体变得更加强健有力，那种虚弱感一扫而空。

【系统提示：体魄强化后，宿主体力+20%，耐力+30%，身体素质全面提升】

皮皮握了握拳头，感受着体内充盈的力量，不禁咧嘴笑了。有了这个系统，自己还怕搞不定甜甜吗？

手机又震动了一下，还是甜甜发来的消息："皮皮，你到底怎么了？我真的很担心你..."

这次，皮皮决定回复她，但不是那种卑微的语气，而是简单干脆地回了两个字："睡了。"

发完消息，他就把手机调成静音，闭上眼睛。

系统界面再次弹出：

【新任务已发布：获得一位女生的青睐，奖励：初级读心术】
【每日任务已发布：对甜甜保持若即若离的态度，奖励：随机技能点】

皮皮看着这些任务，心中暗爽。这不就是他想要的生活吗？借助系统的力量，他一定能成为一个真正的恋爱高手！

远处，甜甜看着皮皮那冷淡的回复，反而产生了从未有过的好奇心。这个突然变得神秘的皮皮，让她感到一丝不安，却又莫名地有些心动。

重生后的第一天，就这样在系统的指引下，悄然改变了皮皮和甜甜的关系。

草比系统，正式启动。`,
      slug: "chapter2",
      prev: "chapter1",
      next: "chapter3"
    },
    { 
      number: 3, 
      title: "初级读心术", 
      content: `# 第三章：初级读心术

清晨，皮皮被系统的提示音叫醒。

【每日任务提醒：对甜甜保持若即若离的态度】

他伸了个懒腰，发现身体充满了力量，这就是昨天获得的体魄强化的效果吗？确实不错。皮皮活动了一下肌肉，他能感觉到自己比以前更加有力量了。

拿起手机，发现甜甜昨晚又发了几条消息，最后一条是凌晨一点多发的："皮皮，我睡不着，总觉得你是不是生我气了..."

前世的他看到这样的消息一定会欣喜若狂，连夜回复，甚至半夜爬起来给她买宵夜送过去。但现在，他只是轻轻一笑，放下手机去洗漱了。

到了学校，皮皮刻意晚了几分钟才进教室。一进门，他就注意到甜甜的目光立刻投了过来，但他装作没看见，径直走向自己的座位。

"皮皮！"甜甜小跑过来，拦在他面前，"你昨天是不是不舒服啊？"

皮皮终于看向她，淡淡地说："没有啊，我很好。"

"那你为什么不理我？"甜甜眼中闪过一丝不悦。

"哦，"皮皮脸上露出一丝意味深长的笑容，"因为我有更重要的事情要做。"

说完，他绕过甜甜，坐到了自己的座位上。

【任务进度：15%】

第一节课是体育课。以前的皮皮体育成绩一般，但今天有了体魄强化，他决定好好表现一下。

"今天测试800米跑步！"体育老师宣布道。

皮皮内心一喜，这正是展示自己的好机会。随着哨声响起，他如离弦之箭般冲了出去。

以前他跑800米至少需要3分钟，而且跑完会气喘吁吁。但今天，他轻松地跑在最前面，远远甩开了第二名，最终以2分30秒的成绩冲过终点线，刷新了班级记录！

更令人惊讶的是，皮皮完全不觉得累，呼吸均匀，面不改色。

"皮皮，你什么时候练的？太厉害了！"同学们纷纷围过来。

就连一向高冷的校花林婉儿也投来了赞赏的目光。皮皮注意到，甜甜站在人群外，脸上的表情有些复杂。

【新任务触发：引起林婉儿的注意，完成度：20%】

体育课后，老虎凑了过来："皮皮，你今天太牛了！林婉儿都在看你呢！"

皮皮笑了笑："看来'恋爱狩猎手册'的第二条可以用上了——制造稀缺价值。"

"你学得真快！"老虎拍了拍他的肩膀，"不过甜甜好像有点不高兴，她刚才一直盯着你看。"

"那正好，"皮皮神秘地说，"这就是我们要的效果。"

中午吃饭时，皮皮故意坐在离甜甜很远的地方，和几个平时关系一般的男生有说有笑。林婉儿经过时，他主动打了招呼："林婉儿，午安。"

林婉儿微微一愣，点了点头，嘴角带着一丝好奇的微笑。

【任务进度更新：引起林婉儿的注意，完成度：40%】

下午放学时，皮皮正要离开，甜甜突然从后面追了上来："皮皮，等等我！"

皮皮停下脚步，回头看了看她："有事？"

甜甜有些不自然地说："我...我想请你帮我补习数学，就像以前那样..."

皮皮知道，这是甜甜的借口。前世的他每次听到这种邀请都会欣喜若狂，立马答应。但现在，他只是淡淡地说："今天不行，我要和老虎去打篮球。改天吧。"

甜甜显然没想到会被拒绝，一时语塞："可是...我明天就要考试了..."

皮皮耸耸肩："那你找夏日吧，他数学比我好。"

说完，他转身离开，留下甜甜站在原地，一脸难以置信。

【每日任务进度：65%】

打完球回家的路上，皮皮接到了林婉儿的微信好友申请。这在前世简直是不可想象的事情！

"听说你数学很好，能帮我看看这道题吗？"林婉儿直接发来一道数学题。

皮皮毫不犹豫地回复："可以，不过我现在在外面，晚点回家再看。"

发完消息，他又刻意等了半小时才解答那道题。

【引起林婉儿注意的任务进度：75%】

晚上，皮皮正在做作业，手机又响了。是甜甜发来的消息："皮皮，我真的不明白你为什么突然变成这样..."

皮皮想了想，回复道："我只是决定做真实的自己。怎么，你不喜欢现在的我？"

甜甜很快回复："不是不喜欢...只是感觉很陌生。"

皮皮笑了笑，回道："那就慢慢熟悉吧。对了，明天的考试，祝你好运。"

【每日任务进度：90%】

临睡前，系统提示响起：

【恭喜宿主，'引起林婉儿注意'任务完成度已达到85%】
【每日任务'对甜甜保持若即若离的态度'完成度已达到95%】
【预计明日可同时完成两项任务，奖励将一并发放】

皮皮满意地点点头，期待着明天的奖励。

第二天课间，林婉儿主动走到皮皮身边："谢谢你昨晚帮我解题，讲得很清楚。"

"不客气，"皮皮微笑着说，"有不懂的随时可以问我。"

林婉儿点点头，略带羞涩地说："那...今天放学后有空吗？我还有几道题想请教。"

皮皮故意思考了一下，才说："今天可以，不过只有半小时时间，我还有约。"

"没问题，谢谢！"林婉儿开心地说道。

不远处，甜甜看到这一幕，脸色变得阴沉。几秒钟后，她快步走了过来："皮皮，我们能谈谈吗？"

皮皮看了看她，点头道："好啊，但要快点，下节课快开始了。"

两人走到走廊拐角处，甜甜深吸一口气，直接问道："你是不是喜欢林婉儿？"

"这重要吗？"皮皮反问。

"当然重要！"甜甜有些激动，"你以前不是这样的..."

皮皮笑了："以前的我是什么样？舔狗一个，对吧？"

甜甜愣住了，随后脸色微红："我没有那么想..."

"没关系，"皮皮摆摆手，"那都是过去的事了。现在的我，有自己的想法和追求。"

说完，他转身走向教室，留下甜甜站在原地发呆。

【每日任务完成！奖励：随机技能点已发放】
【任务"引起林婉儿的注意"完成！奖励：初级读心术已发放】

一股暖流涌入皮皮的大脑，他感觉自己的思维突然变得更加敏锐了。系统的提示随即出现：

【初级读心术已激活，可感知目标表层情绪和想法，使用次数：每日3次，持续时间：每次30秒】

放学后，皮皮按约定和林婉儿在图书馆见面。辅导完功课后，他决定试试新获得的能力。

"林婉儿，你找我补习，真的只是为了数学吗？"皮皮直视着她的眼睛，同时在心中默念：【读心术，启动！】

顿时，他仿佛能听到林婉儿内心的声音：

"他怎么知道...？我确实有点好奇他为什么突然变得这么酷...而且他今天跑步的样子真的很帅..."

皮皮微微一笑："我猜，你可能对我有点好奇，不仅仅是因为数学。"

林婉儿脸色一红："你...你怎么知道？"

"直觉。"皮皮神秘地说道。

临别时，林婉儿主动说："周末学校有个联谊活动，你会去吗？"

"也许吧，"皮皮故意含糊其辞，"要看情况。"

离开图书馆后，皮皮正打算回家，却在校门口碰到了等候多时的甜甜。

"皮皮，"甜甜喊住他，"我一直在等你。"

皮皮心中一动，又一次启动了读心术。

甜甜的内心声音立刻传来："为什么他现在都不理我了...竟然还和林婉儿走得这么近...我不能接受...皮皮明明是喜欢我的啊..."

皮皮忍住笑意，故作平静地问："找我有事？"

"我...我想问问你周末的联谊会去吗？"甜甜有些紧张地问道。

"可能去，也可能不去。"皮皮故意含糊地回答，正是系统推荐的"若即若离"态度。

甜甜咬了咬嘴唇："如果...如果我希望你去呢？"

皮皮轻轻一笑："那你得给我个理由，为什么我要去。"

甜甜一时语塞，半晌才说："因为...会很好玩啊..."

"好吧，我考虑考虑。"皮皮不置可否，拿出手机看了看时间，"不早了，我该回家了。"

"我送你吧！"甜甜急忙说道。

皮皮第三次使用读心术，甜甜的心声清晰传来："不能让林婉儿抢走皮皮...我一定要争取机会和他多相处...他变得好神秘，好吸引人..."

皮皮心中暗笑，当初自己舔了那么久，甜甜根本看不上他。现在只是简单地改变态度，就让她主动追上门来了。

"不用了，"他淡淡地说，"我自己走就行。明天见。"

说完，他转身离开，留下甜甜站在原地，望着他的背影，眼中满是不甘和困惑。

回到家，系统再次提示：

【新任务发布：在联谊会上同时吸引三名女生的注意，奖励：初级魅力强化】
【提示：初级读心术将对完成任务有显著帮助】

皮皮伸了个懒腰，满意地笑了。有了体魄强化和读心术，再加上老虎的"恋爱狩猎手册"，这次联谊会一定会很有趣。

草比系统的能力，正在逐渐改变他的人生。`,
      slug: "chapter3",
      prev: "chapter2",
      next: null
    }
  ];
  
  const currentChapter = chapters.find(chapter => chapter.slug === slug);
  
  // 字体大小选项
  const fontSizeOptions = [
    { value: 'text-sm', label: '小' },
    { value: 'text-base', label: '中' },
    { value: 'text-lg', label: '大' },
    { value: 'text-xl', label: '特大' }
  ];
  
  // 主题选项
  const themeOptions = [
    { value: 'light', label: '浅色', bg: 'bg-white', text: 'text-gray-800' },
    { value: 'sepia', label: '护眼', bg: 'bg-amber-50', text: 'text-amber-900' },
    { value: 'dark', label: '暗黑', bg: 'bg-gray-900', text: 'text-gray-100' }
  ];
  
  // 获取当前主题样式
  const currentTheme = themeOptions.find(t => t.value === theme) || themeOptions[0];
  
  // 处理章节内容的渲染
  const renderChapterContent = (content: string) => {
    // 简单的Markdown渲染
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6">{paragraph.replace('# ', '')}</h1>;
      } else if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4">{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph === '---') {
        return <hr key={index} className="my-8 border-t border-gray-200" />;
      } else {
        return <p key={index} className="mb-4">{paragraph}</p>;
      }
    });
  };
  
  // 切换设置面板
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  
  // 切换字体大小
  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('reader-font-size', size);
  };
  
  // 切换主题
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('reader-theme', newTheme);
  };
  
  // 从localStorage加载设置
  useEffect(() => {
    const savedFontSize = localStorage.getItem('reader-font-size');
    const savedTheme = localStorage.getItem('reader-theme');
    
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  if (!currentChapter) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">章节未找到</h1>
        <p className="mb-6">抱歉，您请求的章节不存在。</p>
        <Link href="/chapters" className="btn btn-primary">
          返回章节列表
        </Link>
      </div>
    );
  }
  
  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
      {/* 顶部导航栏 */}
      <nav className={`sticky top-0 z-40 py-4 px-4 ${currentTheme.bg} shadow-sm`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/chapters" className="p-2 rounded-full hover:bg-gray-200">
              <FiArrowLeft size={20} />
            </Link>
            <Link href="/" className="p-2 rounded-full hover:bg-gray-200">
              <FiHome size={20} />
            </Link>
          </div>
          
          <h1 className="text-lg font-bold truncate max-w-[50%]">
            第{currentChapter.number}章：{currentChapter.title}
          </h1>
          
          <button
            onClick={toggleSettings}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FiSettings size={20} />
          </button>
        </div>
      </nav>
      
      {/* 设置面板 */}
      {showSettings && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
          <div className={`${currentTheme.bg} ${currentTheme.text} p-6 rounded-lg shadow-lg max-w-md w-full`}>
            <h2 className="text-xl font-bold mb-4">阅读设置</h2>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">字体大小</h3>
              <div className="flex space-x-2">
                {fontSizeOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => changeFontSize(option.value)}
                    className={`px-3 py-1 rounded-md ${
                      fontSize === option.value 
                        ? 'bg-accent text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-bold mb-2">阅读主题</h3>
              <div className="flex space-x-2">
                {themeOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => changeTheme(option.value)}
                    className={`px-3 py-1 rounded-md ${
                      theme === option.value 
                        ? 'bg-accent text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button
                onClick={toggleSettings}
                className="px-4 py-2 bg-accent text-white rounded-md"
              >
                完成
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 章节内容 */}
      <main className={`max-w-3xl mx-auto px-4 py-8 ${fontSize}`}>
        <article className="prose prose-lg max-w-none">
          {renderChapterContent(currentChapter.content)}
        </article>
      </main>
      
      {/* 底部导航 */}
      <div className={`py-6 ${currentTheme.bg} border-t border-gray-200`}>
        <div className="max-w-3xl mx-auto px-4 flex justify-between">
          {currentChapter.prev ? (
            <Link
              href={`/chapters/${currentChapter.prev}`}
              className="btn flex items-center"
            >
              <FiArrowLeft className="mr-2" /> 上一章
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link
            href="/chapters"
            className="btn flex items-center"
          >
            <FiBookOpen className="mr-2" /> 目录
          </Link>
          
          {currentChapter.next ? (
            <Link
              href={`/chapters/${currentChapter.next}`}
              className="btn btn-primary flex items-center"
            >
              下一章 <FiArrowRight className="ml-2" />
            </Link>
          ) : (
            <div className="text-gray-500">
              敬请期待
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 