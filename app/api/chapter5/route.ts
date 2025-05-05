import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // 构建章节文件路径
    const filePath = path.join(process.cwd(), 'docs', 'chapters', 'chapter5.md');
    console.log(`读取文件路径: ${filePath}`);
    
    // 检查文件是否存在
    try {
      await fs.access(filePath);
      console.log(`文件存在: ${filePath}`);
    } catch (error) {
      console.error(`文件不存在: ${filePath}`, error);
      return new NextResponse(`章节不存在`, { 
        status: 404,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8'
        }
      });
    }
    
    // 读取章节内容
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(`成功读取文件，内容长度: ${content.length}`);
    
    // 返回内容
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('处理章节内容请求时出错:', error);
    return new NextResponse('服务器内部错误', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    });
  }
} 