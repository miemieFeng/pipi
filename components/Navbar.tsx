'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">重生之我是皮皮</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-primary hover:text-accent transition-colors">
                首页
              </Link>
              <Link href="/chapters" className="text-primary hover:text-accent transition-colors">
                小说目录
              </Link>
              <Link href="/characters" className="text-primary hover:text-accent transition-colors">
                角色介绍
              </Link>
              <Link href="/about" className="text-primary hover:text-accent transition-colors">
                关于小说
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-card shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              首页
            </Link>
            <Link
              href="/chapters"
              className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              小说目录
            </Link>
            <Link
              href="/characters"
              className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              角色介绍
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
              onClick={toggleMenu}
            >
              关于小说
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 