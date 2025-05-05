# 重生之我是皮皮爱草比 - 小说网站

这是一个简约美观的小说网站，使用Next.js和TailwindCSS构建，专门用于展示《重生之我是皮皮爱草比》这部网络小说。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 美观简约的用户界面
- 章节阅读功能，支持字体大小和主题切换
- 角色详情页面，了解小说中的每个角色
- 关于页面，了解小说背景和更新计划

## 技术栈

- Next.js 14 - React框架
- TypeScript - 类型安全的JavaScript
- TailwindCSS - 实用优先的CSS框架
- React Icons - 图标库

## 如何运行

### 前提条件

- Node.js 18.0.0或更高版本
- npm或yarn包管理器

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/username/novel-website.git
cd novel-website
```

2. 安装依赖
```bash
npm install
# 或者
yarn install
```

3. 运行开发服务器
```bash
npm run dev
# 或者
yarn dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 网站页面

- **首页** - 展示小说概览和最新章节
- **章节目录** - 所有章节的列表
- **章节阅读** - 阅读特定章节，带有阅读设置
- **角色介绍** - 小说中所有角色的介绍
- **角色详情** - 每个角色的详细介绍
- **关于小说** - 小说的背景、创作理念和更新计划

## 项目结构

```
novel-website/
├── app/                    # Next.js应用目录
│   ├── about/              # 关于页面
│   ├── chapters/           # 章节相关页面
│   ├── characters/         # 角色相关页面
│   ├── layout.tsx          # 全局布局组件
│   └── page.tsx            # 首页
├── components/             # 可重用组件
│   ├── Footer.tsx          # 页脚组件
│   └── Navbar.tsx          # 导航栏组件
├── public/                 # 静态资源
├── styles/                 # 样式文件
├── package.json            # 项目依赖配置
├── tailwind.config.js      # TailwindCSS配置
└── README.md               # 项目说明文件
```

## 个性化定制

- 修改`tailwind.config.js`中的颜色主题
- 在`components`目录中创建或修改组件
- 添加更多章节内容到`app/chapters`

## 许可证

MIT Licensed 