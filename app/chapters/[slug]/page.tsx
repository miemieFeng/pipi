import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiHome } from 'react-icons/fi';
import { notFound } from 'next/navigation';

// 章节元数据
const chaptersMetadata = [
  { 
    number: 1, 
    title: "舔狗的终局", 
    slug: "chapter1",
    prev: null,
    next: "chapter2"
  },
  { 
    number: 2, 
    title: "草比系统觉醒", 
    slug: "chapter2",
    prev: "chapter1",
    next: "chapter3"
  },
  { 
    number: 3, 
    title: "初级读心术", 
    slug: "chapter3",
    prev: "chapter2",
    next: "chapter4"
  },
  {
    number: 4,
    title: "联谊会的魅力战场",
    slug: "chapter4",
    prev: "chapter3",
    next: "chapter5"
  },
  {
    number: 5,
    title: "青山湖郊游",
    slug: "chapter5",
    prev: "chapter4",
    next: "chapter6"
  },
  {
    number: 6,
    title: "电影院的游戏",
    slug: "chapter6",
    prev: "chapter5",
    next: "chapter7"
  },
  {
    number: 7,
    title: "运动场上的征服",
    slug: "chapter7",
    prev: "chapter6",
    next: null
  }
];

// 获取章节内容
async function getChapterContent(slug: string): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'chapters', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`无法读取章节文件 ${slug}.md:`, error);
    throw new Error('章节内容加载失败');
  }
}

// 处理章节内容的渲染
function renderChapterContent(content: string) {
  // 简单的Markdown渲染
  const paragraphs = content.split('\n\n');
  
  // 跳过第一个标题，因为我们已经在页面顶部显示了标题
  let skipFirstTitle = false;
  if (paragraphs.length > 0 && paragraphs[0].startsWith('# ')) {
    skipFirstTitle = true;
  }
  
  return paragraphs.map((paragraph, index) => {
    // 跳过第一个标题
    if (index === 0 && skipFirstTitle) {
      return null;
    }
    
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
}

export default async function ChapterPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // 查找当前章节的元数据
  const metadata = chaptersMetadata.find(ch => ch.slug === slug);
  
  // 如果没有找到章节，返回404
  if (!metadata) {
    notFound();
  }
  
  // 获取章节内容
  let content;
  try {
    content = await getChapterContent(slug);
  } catch (error) {
    console.error('加载章节内容时出错:', error);
    content = '章节内容加载失败，请稍后再试...';
  }
  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/chapters"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <FiArrowLeft className="mr-2" /> 返回章节列表
          </Link>
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900"
          >
            <FiHome size={20} />
          </Link>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            第{metadata.number}章：{metadata.title}
          </h1>
        </div>

        <div className="prose max-w-none">
          {renderChapterContent(content)}
        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          {metadata.prev ? (
            <Link 
              href={`/chapters/${metadata.prev}`}
              className="inline-flex items-center text-accent hover:text-amber-600"
            >
              <FiArrowLeft className="mr-2" /> 上一章
            </Link>
          ) : (
            <div></div>
          )}
          
          {metadata.next ? (
            <Link 
              href={`/chapters/${metadata.next}`}
              className="inline-flex items-center text-accent hover:text-amber-600"
            >
              下一章 <FiArrowRight className="ml-2" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
} 