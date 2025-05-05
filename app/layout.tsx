import './globals.css';
import { Noto_Sans, Noto_Serif } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const metadata = {
  title: '重生之我是皮皮爱草比 - 小说官网',
  description: '一个关于舔狗重生逆袭的故事，从卑微舔狗到霸道恋爱猎手。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 