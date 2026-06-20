# CKM 综合征科普网站

基于 **2026 AHA/ACC/ADA/ASN CKM 综合征防治指南** 中文翻译构建的双版本科普网站，面向大众和临床医生两个群体。

## 项目简介

心血管-肾脏-代谢综合征（Cardiovascular-Kidney-Metabolic Syndrome, CKM）是 2026 年由 AHA/ACC/ADA/ASN 联合发布的全新医学概念，涵盖心血管疾病、慢性肾病和代谢异常三大领域的综合管理。

本项目提供两个版本：

- **大众科普版**（`/`）：用通俗易懂的语言向公众普及 CKM 综合征知识，包括分期、症状、风险评估、AI 辅助评估、管理策略、常见问题和就医指南。
- **医生专业版**（`/professional`）：面向临床医生，完整呈现指南的推荐类别（COR）、证据等级（LOE）、分期标准、PREVENT 风险公式、管理路径、特殊人群和循证依据。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18.3 | 前端框架 |
| TypeScript | 5.8 | 类型安全 |
| Vite | 6.3 | 构建工具 |
| React Router DOM | 7.3 | 路由管理 |
| TailwindCSS | 3.4 | 样式方案 |
| Lucide React | 0.511 | 图标库 |

## 快速开始

### 环境要求

- Node.js ≥ 18
- npm ≥ 9

### 安装与运行

```bash
# 安装依赖
npm install

# 开发模式（默认 http://localhost:5173）
npm run dev

# 类型检查
npm run check

# 生产构建
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 项目结构

```
ckm-popular-science/
├── src/
│   ├── App.tsx                      # 路由配置（/ 和 /professional）
│   ├── main.tsx                     # 应用入口
│   │
│   ├── pages/
│   │   ├── Home.tsx                 # 大众科普版首页
│   │   └── Professional.tsx         # 医生专业版页面
│   │
│   ├── components/
│   │   ├── Navbar.tsx               # 顶部导航栏（含版本切换）
│   │   ├── Hero.tsx                 # 首页 Hero 区域
│   │   ├── Intro.tsx                # 认识 CKM 板块
│   │   ├── Staging.tsx              # CKM 分期（步进器+详情面板）
│   │   ├── Symptoms.tsx             # 症状与警示信号
│   │   ├── Risk.tsx                 # PREVENT 风险评估介绍
│   │   ├── SelfCheck.tsx            # AI 辅助 PREVENT 风险评估指南
│   │   ├── Takeaways.tsx            # 十大关键要点
│   │   ├── Management.tsx           # 管理策略（标签页）
│   │   ├── SpecialGroups.tsx        # 特殊人群
│   │   ├── FAQ.tsx                  # 常见问题解答
│   │   ├── DoctorGuide.tsx          # 就医指南
│   │   ├── Footer.tsx               # 页脚
│   │   ├── Section.tsx              # 通用板块容器
│   │   └── Empty.tsx                # 空状态组件
│   │
│   ├── data/
│   │   ├── content.ts               # 大众版主要内容数据
│   │   ├── popularContent.ts        # 大众版辅助数据（AI评估、FAQ等）
│   │   └── professionalContent.ts   # 医生版专业内容数据
│   │
│   ├── lib/
│   │   └── utils.ts                 # 工具函数（cn 类名合并）
│   │
│   └── hooks/
│       └── useTheme.ts              # 主题 Hook
│
├── tailwind.config.js               # Tailwind 配置（含 CKM 品牌色）
├── vite.config.ts                   # Vite 配置
├── tsconfig.json                    # TypeScript 配置
└── package.json
```

## 功能特性

### 大众科普版

| 板块 | 说明 |
|------|------|
| 认识 CKM | 三系统（心血管-肾脏-代谢）交互介绍 |
| CKM 分期 | 0–4 期步进器 + 详情面板，含诊断标准和管理重点 |
| 症状警示 | 4 类症状卡片，含紧急就医信号 |
| 风险评估 | PREVENT 公式介绍 + 风险阈值表 |
| AI 评估 | 引导患者使用 AI（ChatGPT/Claude/Gemini 等）+ PREVENT 公式精准评估风险，含 3 个可复制提示词模板 |
| 十大要点 | 指南 Top Take-Home Messages 患者视角版 |
| 管理策略 | 6 个标签页：生活方式、肥胖、T2D、CKD、心衰、多学科 |
| 特殊人群 | 妊娠、MASLD、OSA、VTE |
| 常见问题 | 12 个 FAQ，4 类分组 |
| 就医指南 | 何时就医、看什么科、就诊准备、该问什么 |

### 医生专业版

| 章节 | 说明 |
|------|------|
| 指南概览 | 十大要点、COR/LOE 体系、方法学 |
| 定义与分类 | CKM 完整/简化定义、组分定义、48 项缩略语 |
| CKM 分期详解 | 0–4 期诊断标准、儿童青少年组分、KDIGO 分级 |
| 评估与诊断 | 诊断方法、CAC 评估、生物标志物、SDOH 筛查 |
| 风险评估 | PREVENT 公式、Table 8 阈值、风险增强因素 |
| 一般照护原则 | 重叠疾病治疗、多学科团队 |
| CKM 0-1 期管理 | 原始预防、肥胖管理、强化生活方式、药物 Table 13 |
| CKM 2 期管理 | T2D、高甘油三酯、高血压、CKD 推荐 |
| CKM 3 期管理 | 亚临床动脉粥样硬化、Pre-HF |
| CKM 4 期 CVD 管理 | ASCVD/HF/房颤/晚期 CKD |
| 重要考虑 | LDL-C、MASLD、VTE、OSA、妊娠 |
| 监测与随访 | 不良反应管理 Table 19/20 |
| 证据与参考文献 | 证据空白、17 项核心临床试验 |

## 设计系统

### 品牌色

| 色名 | 色值 | 用途 |
|------|------|------|
| `ckm-teal` | `#0D4D4D` | 主色（标题、导航、专业版） |
| `ckm-teal-light` | `#2E7D6B` | 辅助色 |
| `ckm-cream` | `#F5F1EA` | 背景色 |
| `ckm-sand` | `#EDE7DD` | 边框、分隔 |
| `ckm-clay` | `#C75D3A` | 强调色（科普版按钮、图标） |
| `ckm-charcoal` | `#2A2A2A` | 正文文字 |

### 字体

- 标题：Noto Serif SC（思源宋体）
- 正文：Noto Sans SC（思源黑体）

## 部署指南

本项目为纯前端静态应用，构建后产出 `dist/` 目录，可部署到任意静态托管平台。以下介绍四种主流平台的部署方式。

### 前置准备

```bash
# 构建生产版本
npm run build

# 构建产物在 dist/ 目录
# 包含 index.html + assets/*.js + assets/*.css
```

> **注意**：本项目使用 React Router 的 `BrowserRouter`，部署时需配置 SPA 回退规则（所有路径返回 `index.html`），否则刷新子路由页面会出现 404。

---

### 1. Cloudflare Pages

**方式一：Git 集成（推荐）**

1. 将代码推送到 GitHub/GitLab
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages → Connect to Git
3. 选择仓库，填写构建配置：
   - **Framework preset**：`Vite`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Node version**（环境变量）：`NODE_VERSION = 18`
4. 点击 Save and Deploy，等待构建完成
5. Cloudflare Pages 自动配置 SPA 回退，无需额外设置

**方式二：Wrangler CLI**

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录
wrangler login

# 部署
wrangler pages deploy dist --project-name ckm-popular-science
```

---

### 2. Vercel

**方式一：Git 集成（推荐）**

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 访问 [vercel.com](https://vercel.com) → Add New → Project → Import 仓库
3. Vercel 自动识别 Vite 框架，配置如下：
   - **Framework Preset**：`Vite`
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`
4. 点击 Deploy，等待部署完成
5. Vercel 自动处理 SPA 路由回退，无需额外配置

**方式二：Vercel CLI**

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署（首次需登录）
vercel

# 部署到生产环境
vercel --prod
```

---

### 3. Netlify

**方式一：Git 集成（推荐）**

1. 将代码推送到 GitHub/GitLab
2. 访问 [app.netlify.com](https://app.netlify.com) → Add new site → Import an existing project
3. 选择仓库，填写构建配置：
   - **Base directory**：留空（或项目根目录）
   - **Build command**：`npm run build`
   - **Publish directory**：`dist`
4. 点击 Deploy site

**SPA 回退配置**（二选一）：

- 方式 A：在项目根目录创建 `public/_redirects` 文件：
  ```
  /*    /index.html   200
  ```
- 方式 B：在项目根目录创建 `netlify.toml` 文件：
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

**方式二：Netlify CLI**

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --dir=dist --prod
```

---

### 4. GitHub Pages

**方式一：GitHub Actions（推荐）**

1. 将代码推送到 GitHub 仓库
2. 在仓库 Settings → Pages → Source 选择 `GitHub Actions`
3. 在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. **配置 base 路径**：GitHub Pages 默认部署到 `https://用户名.github.io/仓库名/`，需修改 `vite.config.ts`：

```typescript
export default defineConfig({
  base: '/仓库名/',  // 例如 base: '/ckm-popular-science/'
  // ...其余配置
})
```

5. 推送代码到 `main` 分支，GitHub Actions 自动构建部署
6. 部署完成后访问 `https://用户名.github.io/仓库名/`

> **如果使用自定义域名**（`https://用户名.github.io/`），则无需设置 `base`，保持默认 `/` 即可。

**SPA 回退配置**：GitHub Pages 不支持服务端重写规则，需在 `index.html` 的 `<head>` 中添加 404 跳转脚本，或改用 `HashRouter`（URL 带 `#`）。

在 `public/` 目录创建 `404.html`，内容与 `index.html` 相同，并在 `<head>` 中加入：

```html
<script>
  // GitHub Pages SPA 回退
  var pathSegmentsToKeep = 1; // 仓库名占 1 段，自定义域名改为 0
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>
```

---

### 部署平台对比

| 平台 | 免费额度 | 自定义域名 | HTTPS | SPA 回退 | 构建分钟 |
|------|---------|-----------|-------|---------|---------|
| Cloudflare Pages | 无限请求 | 支持 | 自动 | 自动 | 500 次/月 |
| Vercel | 100GB 流量/月 | 支持 | 自动 | 自动 | 6000 分钟/月 |
| Netlify | 100GB 流量/月 | 支持 | 自动 | 需配置 | 300 分钟/月 |
| GitHub Pages | 无限（公开仓库） | 支持 | 自动 | 需配置 | 2000 分钟/月 |

> **推荐**：Cloudflare Pages 或 Vercel，两者对 Vite + React Router 项目开箱即用，无需额外配置 SPA 回退。

## 数据来源

原始指南：Ndumele CE, Rodriguez F, Dixon DL, et al. 2026 AHA/ACC/ADA/ASN Guideline for the Prevention, Detection, Evaluation, and Management of Cardiovascular-Kidney-Metabolic Syndrome. *J Am Coll Cardiol*. 2026;87(22S):e1889-e2007. DOI: 10.1016/j.jacc.2026.02.001

## 免责声明

本网站内容仅供医学教育和科普参考，不构成针对特定患者的医疗建议。临床决策应结合患者具体情况、最新原版指南及相关专科指南。如有健康问题，请及时就医。
