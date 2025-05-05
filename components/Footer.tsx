'use client';

import Link from 'next/link';
import { FiBookOpen, FiUsers, FiInfo, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">重生之我是皮皮</h3>
            <p className="text-gray-300">
              一个关于舔狗重生逆袭的故事，从卑微舔狗到霸道恋爱猎手的精彩旅程。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chapters" className="text-gray-300 hover:text-accent flex items-center">
                  <FiBookOpen className="mr-2" />
                  小说目录
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-gray-300 hover:text-accent flex items-center">
                  <FiUsers className="mr-2" />
                  角色介绍
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent flex items-center">
                  <FiInfo className="mr-2" />
                  关于小说
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">关注我们</h3>
            <p className="text-gray-300 mb-4">
              感谢您对我们小说的支持与关注。
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {currentYear} 重生之我是皮皮爱草比 - 版权所有
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-300 flex items-center">
              <FiHeart className="text-accent mr-2" />
              用爱创作
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;