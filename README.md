# HKU CS Study Group - 静态网站版本

这是 HKU CS Study Group 的静态网站版本，专为 GitHub Pages 部署而设计。

## 特性

- ✅ 纯前端静态网站，无需后端服务器
- ✅ 使用 JSON 文件存储数据，易于编辑
- ✅ 响应式设计，支持移动端和桌面端
- ✅ 自动化部署到 GitHub Pages
- ✅ 快速加载，优秀的性能

## 页面功能

- **主页** - 展示小组介绍和即将到来的演讲
- **Presentations** - 查看所有演讲（分为即将到来和过去的演讲）
- **Resources** - 浏览学习资源库
- **Gallery** - 查看活动照片
- **About** - 了解小组使命和目标

## 快速开始

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### 部署到 GitHub Pages

请查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 获取详细的部署教程。

## 更新内容

所有网站内容都存储在 `src/data/` 目录下的 JSON 文件中：

- `presentations.json` - 演讲数据
- `resources.json` - 资源数据
- `photos.json` - 照片数据

直接编辑这些文件即可更新网站内容。

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Wouter (路由)
- Lucide React (图标)

## 许可证

MIT License

---

**由 Manus AI 创建**

