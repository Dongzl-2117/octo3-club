# Octo3 Club - GitHub Pages 部署教程

本文档将指导您如何将 Octo3 Club 静态网站部署到 GitHub Pages，使其可以通过 `octo3-club.github.io` 的形式访问。

---

## 前提条件

在开始之前，请确保您已经：

- 拥有一个 GitHub 账号
- 在本地安装了 Git
- 在本地安装了 Node.js（版本 18 或更高）和 pnpm

---

## 步骤 1：创建 GitHub 仓库

登录您的 GitHub 账号，创建一个新的公开仓库（Public Repository）。

**仓库命名建议：**

- 如果您希望网站地址为 `username.github.io`，请将仓库命名为 `username.github.io`（将 `username` 替换为您的 GitHub 用户名）
- 如果您希望网站地址为 `username.github.io/hku-cs-study-group`，可以将仓库命名为 `hku-cs-study-group`

创建仓库时，**不要**勾选 "Initialize this repository with a README"，保持仓库为空。

---

## 步骤 2：配置项目

### 2.1 修改 base 路径（如果使用子路径）

如果您的仓库名不是 `username.github.io`，而是其他名称（如 `hku-cs-study-group`），需要修改 `vite.config.ts` 文件：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hku-cs-study-group/', // 将这里改为您的仓库名
})
```

**注意：** 如果仓库名是 `username.github.io`，则保持 `base: '/'` 不变。

---

## 步骤 3：上传代码到 GitHub

在项目根目录下，打开终端并执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（将 YOUR_USERNAME 和 YOUR_REPOSITORY 替换为您的实际值）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## 步骤 4：启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 **Settings**（设置）
2. 在左侧菜单中找到 **Pages**
3. 在 **Source** 下拉菜单中选择 **GitHub Actions**
4. 保存设置

GitHub 会自动检测到项目中的 `.github/workflows/deploy.yml` 文件，并开始自动部署流程。

---

## 步骤 5：等待部署完成

1. 在 GitHub 仓库页面，点击 **Actions** 标签
2. 您会看到一个正在运行的工作流（Workflow）
3. 等待工作流完成（通常需要 1-3 分钟）
4. 部署成功后，您的网站将可以通过以下地址访问：
   - 如果仓库名为 `username.github.io`：`https://username.github.io`
   - 如果仓库名为其他名称：`https://username.github.io/repository-name`

---

## 步骤 6：更新网站内容

### 6.1 修改数据

所有网站数据都存储在 `src/data/` 目录下的 JSON 文件中：

- **presentations.json** - 演讲数据
- **resources.json** - 资源数据
- **photos.json** - 照片画廊数据

您可以直接编辑这些文件来更新网站内容。

**示例：添加新的演讲**

编辑 `src/data/presentations.json`：

```json
{
  "id": "4",
  "title": "深度学习入门",
  "description": "介绍深度学习的基本概念和常用框架",
  "speaker": "张三",
  "date": "2025-12-01",
  "status": "upcoming"
}
```

### 6.2 推送更新

修改完成后，执行以下命令：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新构建和部署您的网站。

---

## 本地开发

如果您想在本地预览网站效果，可以执行以下命令：

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

开发服务器将在 `http://localhost:5173` 运行。

如果您想预览构建后的生产版本：

```bash
# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

---

## 常见问题

### Q1: 网站部署后显示 404 错误

**解决方案：**

- 检查 `vite.config.ts` 中的 `base` 路径是否正确
- 确认 GitHub Pages 设置中选择了 **GitHub Actions** 作为 Source
- 查看 Actions 标签页，确认部署工作流已成功完成

### Q2: 样式或图片无法加载

**解决方案：**

- 确认 `vite.config.ts` 中的 `base` 路径与仓库名匹配
- 检查浏览器控制台的错误信息
- 确保所有资源路径使用相对路径

### Q3: 如何使用自定义域名？

**解决方案：**

1. 在 GitHub 仓库的 Settings → Pages 中，找到 **Custom domain** 选项
2. 输入您的自定义域名（如 `cs-study.example.com`）
3. 在您的域名服务商处添加 CNAME 记录，指向 `username.github.io`
4. 等待 DNS 生效（可能需要几分钟到几小时）

---

## 项目结构说明

```
hku-cs-study-group-static/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署配置
├── src/
│   ├── components/             # React 组件
│   │   ├── Header.tsx          # 页面头部
│   │   └── Footer.tsx          # 页面底部
│   ├── data/                   # 数据文件（JSON）
│   │   ├── presentations.json  # 演讲数据
│   │   ├── resources.json      # 资源数据
│   │   └── photos.json         # 照片数据
│   ├── pages/                  # 页面组件
│   │   ├── Home.tsx            # 主页
│   │   ├── Presentations.tsx   # 演讲页面
│   │   ├── Resources.tsx       # 资源页面
│   │   ├── Gallery.tsx         # 照片画廊
│   │   └── About.tsx           # 关于页面
│   ├── App.tsx                 # 应用主组件
│   ├── main.tsx                # 应用入口
│   └── index.css               # 全局样式
├── index.html                  # HTML 模板
├── package.json                # 项目依赖
├── vite.config.ts              # Vite 配置
├── tailwind.config.js          # Tailwind CSS 配置
└── tsconfig.json               # TypeScript 配置
```

---

## 技术栈

本项目使用以下技术构建：

- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Wouter** - 轻量级路由库
- **Lucide React** - 图标库

---

## 支持与反馈

如果您在部署过程中遇到问题，可以：

1. 查看 GitHub Actions 的构建日志以获取错误信息
2. 检查本文档的常见问题部分
3. 在 GitHub 仓库中提交 Issue

---

**祝您部署顺利！**

