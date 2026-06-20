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

本项目为纯前端静态应用，构建后产出 `dist/` 目录，可部署到任意静态托管平台。

### 前置准备

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 构建产物在 dist/ 目录
# 包含 index.html + 404.html + assets/*.js + assets/*.css + CNAME + favicon.svg
```

### base 路径说明

项目通过环境变量 `VITE_BASE_URL` 控制 base 路径，**一份代码兼容所有平台**：

```typescript
// vite.config.ts
base: process.env.VITE_BASE_URL || '/'
```

| 场景 | 需要设置 `VITE_BASE_URL` | base 值 |
|------|-------------------------|---------|
| Cloudflare / Vercel / Netlify | 不需要 | `/` |
| GitHub Pages 默认地址（`用户名.github.io/仓库名/`） | 需要 | `/仓库名/` |
| GitHub Pages 自定义域名 | 不需要 | `/` |

> **注意**：本项目使用 React Router 的 `BrowserRouter`，部署时需配置 SPA 回退规则（所有路径返回 `index.html`），否则刷新子路由页面会出现 404。构建脚本已自动将 `index.html` 复制为 `404.html`。

---

### 1. GitHub Pages（当前部署方式）

本项目已配置 GitHub Actions 自动部署，并绑定自定义域名 `ckmpro.ndjp.net`。

**已包含的配置文件**：

- `.github/workflows/deploy.yml` — 自动构建部署工作流
- `public/CNAME` — 自定义域名配置（内容为 `ckmpro.ndjp.net`）
- `package.json` 的 `build` 脚本 — 构建后自动生成 `404.html` 用于 SPA 回退

**部署步骤**：

1. 将代码推送到 GitHub 仓库的 `main` 分支
2. 在仓库 Settings → Pages → Source 选择 `GitHub Actions`
3. GitHub Actions 自动触发构建和部署
4. （可选）在 Settings → Pages → Custom domain 填入自定义域名

**如需改回 GitHub Pages 默认地址**（`用户名.github.io/仓库名/`）：

1. 删除 `public/CNAME` 文件
2. 在 `.github/workflows/deploy.yml` 的 `npm run build` 步骤添加环境变量：
   ```yaml
   - run: npm run build
     env:
       VITE_BASE_URL: /仓库名/
   ```
3. 在 Settings → Pages → Custom domain 中移除自定义域名

---

### 2. Cloudflare Pages

**方式一：Git 集成（推荐）**

1. 将代码推送到 GitHub/GitLab
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages → Connect to Git
3. 选择仓库，填写构建配置：
   - **Framework preset**：`Vite`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **环境变量**：`NODE_VERSION = 18`
4. 点击 Save and Deploy，等待构建完成
5. Cloudflare Pages 自动配置 SPA 回退，无需额外设置

> `public/CNAME` 文件是 GitHub Pages 专用，其他平台会自动忽略，无需删除，支持多平台同时部署。

**方式二：Wrangler CLI**

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录
wrangler login

# 部署
wrangler pages deploy dist --project-name ckm-pro
```

---

### 3. Vercel

**方式一：Git 集成（推荐）**

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 访问 [vercel.com](https://vercel.com) → Add New → Project → Import 仓库
3. Vercel 自动识别 Vite 框架，配置如下：
   - **Framework Preset**：`Vite`
   - **Build Command**：`npm run build`
   - **Output Directory**：`dist`
4. 点击 Deploy，等待部署完成
5. Vercel 自动处理 SPA 路由回退，无需额外配置

> 部署前请删除 `public/CNAME` 文件。

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

### 4. Netlify

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

> 部署前请删除 `public/CNAME` 文件。

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

### 部署平台对比

| 平台 | 免费额度 | 自定义域名 | HTTPS | SPA 回退 | 构建限制 |
|------|---------|-----------|-------|---------|---------|
| GitHub Pages | 无限（公开仓库） | 支持 | 自动 | 404.html | 2000 分钟/月 |
| Cloudflare Pages | 无限请求 | 支持 | 自动 | 自动 | 500 次/月 |
| Vercel | 100GB 流量/月 | 支持 | 自动 | 自动 | 6000 分钟/月 |
| Netlify | 100GB 流量/月 | 支持 | 自动 | 需配置 | 300 分钟/月 |

> **当前部署**：GitHub Pages + 自定义域名 `ckmpro.ndjp.net`，访问地址 https://ckmpro.ndjp.net

### 自定义域名 DNS 配置

以 GitHub Pages 为例，绑定自定义域名需添加以下 DNS 记录之一：

**CNAME 记录**（推荐）：

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | `ckmpro` | `bbylw.github.io` |

**A 记录**：

| 类型 | 名称 | 值 |
|------|------|-----|
| A | `ckmpro` | `185.199.108.153` |
| A | `ckmpro` | `185.199.109.153` |
| A | `ckmpro` | `185.199.110.153` |
| A | `ckmpro` | `185.199.111.153` |

DNS 生效后，GitHub Pages 会自动签发 HTTPS 证书。

## 数据来源

原始指南：Ndumele CE, Rodriguez F, Dixon DL, et al. 2026 AHA/ACC/ADA/ASN Guideline for the Prevention, Detection, Evaluation, and Management of Cardiovascular-Kidney-Metabolic Syndrome. *J Am Coll Cardiol*. 2026;87(22S):e1889-e2007. DOI: 10.1016/j.jacc.2026.02.001

## 免责声明

本网站内容仅供医学教育和科普参考，不构成针对特定患者的医疗建议。临床决策应结合患者具体情况、最新原版指南及相关专科指南。如有健康问题，请及时就医。
