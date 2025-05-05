# Next.js 项目部署指南

本文档提供了将您的 Next.js 小说网站部署到互联网上的详细步骤。我们将介绍两种最常用的部署方法：Vercel（推荐）和 GitHub Pages。

## 目录

- [Vercel 部署（推荐）](#vercel-部署推荐)
- [GitHub Pages 部署](#github-pages-部署)
- [自定义域名设置](#自定义域名设置)

## Vercel 部署（推荐）

Vercel 是 Next.js 的创建者开发的平台，为 Next.js 应用提供了最佳的部署体验。

### 优势

- 极其简单的部署流程
- 自动化的 CI/CD 流程
- 全球 CDN 分发，提供快速加载速度
- 支持 Next.js 的所有功能（包括服务器端渲染和 API 路由）
- 提供免费套餐

### 部署步骤

1. 访问 [Vercel 官网](https://vercel.com/) 并注册账号（可以直接使用 GitHub 账号登录）

2. 登录后，点击 "New Project" 按钮

3. 导入您的 GitHub 仓库
   - 如果是首次使用，需要授权 Vercel 访问您的 GitHub 账号
   - 在仓库列表中找到并选择您的小说网站项目

4. 配置项目
   - Vercel 会自动检测到这是一个 Next.js 项目并应用正确的构建设置
   - 默认配置通常已经足够，无需更改
   - 如果需要，可以添加环境变量

5. 点击 "Deploy" 按钮开始部署

6. 部署完成后，Vercel 会提供一个 `*.vercel.app` 的域名供您访问网站

### 自动部署

一旦设置完成，每当您推送更改到 GitHub 仓库时，Vercel 会自动重新部署您的网站。这使得更新网站变得非常简单。

## GitHub Pages 部署

如果您更喜欢使用 GitHub Pages（完全免费），可以按照以下步骤操作。请注意，GitHub Pages 只支持静态网站，因此您需要将 Next.js 项目导出为静态文件。

### 准备工作

1. 在项目根目录创建或修改 `next.config.js` 文件：

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果您的网站不是部署在域名根目录，而是在子目录（如 username.github.io/novel-website）
  // 则需要添加以下配置
  basePath: '/novel-website', // 替换为您的仓库名
  assetPrefix: '/novel-website/', // 替换为您的仓库名
};

module.exports = nextConfig;
```

2. 修改 `package.json` 文件，添加导出命令：

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "export": "next build",
  "lint": "next lint"
}
```

### 部署步骤

#### 方法一：手动部署

1. 运行构建命令生成静态文件：

```bash
npm run export
```

2. 这将在 `out` 目录中生成静态文件

3. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入仓库的 "Settings" 标签
   - 滚动到 "GitHub Pages" 部分
   - 选择分支（通常是 `main` 或 `master`）和目录（`/docs` 或 `/`）

4. 将 `out` 目录中的内容复制到您选择的 GitHub Pages 目录中

5. 提交并推送更改到 GitHub

#### 方法二：使用 GitHub Actions 自动部署

1. 在项目根目录创建 `.github/workflows` 目录

2. 在该目录中创建 `deploy.yml` 文件，内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main] # 或者您的默认分支

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm ci

      - name: Build and Export
        run: npm run export
        env:
          GITHUB_REPOSITORY: ${{ github.repository }}

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages # 部署到 gh-pages 分支
          folder: out # 部署 out 目录的内容
```

3. 提交并推送此工作流文件到 GitHub

4. GitHub Actions 将自动构建您的项目并部署到 GitHub Pages

5. 在仓库的 "Settings" > "Pages" 中，将源设置为 `gh-pages` 分支

## 自定义域名设置

无论您选择 Vercel 还是 GitHub Pages，都可以设置自定义域名。

### Vercel 自定义域名

1. 在 Vercel 控制面板中，选择您的项目

2. 点击 "Settings" > "Domains"

3. 添加您的域名并按照指示设置 DNS 记录

### GitHub Pages 自定义域名

1. 在仓库的 "Settings" > "Pages" 中，输入您的自定义域名

2. 按照指示设置 DNS 记录

3. 在项目的 `public` 目录中创建一个名为 `CNAME` 的文件，内容为您的域名

## 结论

对于大多数 Next.js 项目，特别是需要服务器端功能的项目，我们强烈推荐使用 Vercel 进行部署。它提供了最佳的 Next.js 部署体验，且有免费套餐可用。

如果您的项目是纯静态的，且预算有限，GitHub Pages 也是一个很好的选择。

无论选择哪种方式，祝您的小说网站部署顺利！