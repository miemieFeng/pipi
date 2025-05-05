'use client';

import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">关于小说</h1>
          <p className="text-secondary max-w-3xl mx-auto">
            了解《重生之我是皮皮爱草比》的创作背景和作者故事
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">小说简介</h2>
          <p className="text-gray-700 mb-4">
            《重生之我是皮皮爱草比》是一部青春校园重生小说，讲述了主角皮皮因为舔狗过度而精尽人亡，重生回到高中时代的故事。
          </p>
          <p className="text-gray-700 mb-4">
            在前世，皮皮是一个标准的舔狗，对女神甜甜百般讨好，付出了无数心血却得不到一丝回应。在一次意外中，皮皮重生回到高中时期，决心改变自己的命运。
          </p>
          <p className="text-gray-700 mb-4">
            重生后的皮皮凭借前世经验，摆脱舔狗心态，开始建立自我价值，反而引起了甜甜的注意。小说通过诙谐幽默的方式，展现了一个"从舔狗到猎手"的逆袭故事，探讨了爱情、成长和自我价值的主题。
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">创作理念</h2>
          <p className="text-gray-700 mb-4">
            本小说旨在通过一个极端的舔狗案例，反思当代年轻人的恋爱观和自我认知。舔狗文化在现代社会屡见不鲜，许多年轻人为了得到爱情不惜放弃自尊和底线，最终陷入痛苦的循环。
          </p>
          <p className="text-gray-700 mb-4">
            主角皮皮的重生之旅，象征着一个人的自我觉醒和成长。通过皮皮从舔狗到拥有健康恋爱观的转变，读者可以反思：真正的爱情应该建立在相互尊重和平等的基础上，而不是一方无底线的付出。
          </p>
          <p className="text-gray-700 mb-4">
            同时，小说也探讨了青春期的成长烦恼、校园生活的点滴以及友情的珍贵，希望能给读者带来欢笑之余，也有所思考和启发。
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">作者寄语</h2>
          <div className="border-l-4 border-accent pl-4 py-2 italic text-gray-700">
            <p className="mb-4">
              "写这个故事源于我对周围朋友的观察。很多朋友在感情中迷失自我，成为别人的附庸。我希望通过皮皮的故事告诉大家：爱情不是跪舔，而是平等的交流和共同成长。"
            </p>
            <p className="mb-4">
              "如果你正在做一个舔狗，请停下来审视自己的行为。真正值得你爱的人，不会让你卑微到尘埃里。爱自己，才能被别人爱。"
            </p>
            <p>
              "最后，希望每一个读者都能找到属于自己的幸福，而不是沦为别人的舔狗。愿你的人生，没有卑微的爱情。"
            </p>
          </div>
          <div className="text-right mt-4">
            <p className="text-accent font-bold">——铁根不泡面</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">更新计划</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-sm">1</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold">第一季：校园篇</h3>
                <p className="text-gray-700">
                  主要讲述皮皮重生后，在高中的逆袭故事，如何从舔狗转变为校园风云人物，并改变与甜甜的关系。
                </p>
                <p className="text-green-600 font-medium">状态：更新中</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-400 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-sm">2</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold">第二季：大学篇</h3>
                <p className="text-gray-700">
                  皮皮与甜甜进入大学后的故事，面临新的环境和挑战，情感关系也将迎来新的考验。
                </p>
                <p className="text-gray-600 font-medium">状态：筹备中</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-gray-400 text-white rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-sm">3</span>
              </div>
              <div className="ml-4">
                <h3 className="font-bold">第三季：职场篇</h3>
                <p className="text-gray-700">
                  毕业后的皮皮凭借重生的优势，在职场上大展拳脚，同时也要面对成年人的感情难题。
                </p>
                <p className="text-gray-600 font-medium">状态：规划中</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-secondary mb-4">喜欢这部小说？开始阅读或了解更多角色</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/chapters"
              className="btn btn-primary inline-flex items-center"
            >
              开始阅读 <FiChevronRight className="ml-1" />
            </Link>
            <Link 
              href="/characters"
              className="btn bg-white border border-gray-200 text-primary hover:bg-gray-50 inline-flex items-center"
            >
              角色介绍 <FiChevronRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 