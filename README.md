# 知识花园

一个以本地 Markdown 为唯一内容源、使用 GitHub 备份并通过 GitHub Pages 自动发布的个人知识库。

## 目录

- `src/content/notes/`：公开笔记与草稿
- `public/assets/`：图片、附件等静态资源
- `src/pages/`：站点页面
- `.github/workflows/deploy.yml`：自动检查、构建与发布

现有工作区中的其他材料不会自动进入这个独立仓库。

## 本地使用

```bash
npm install
npm run dev
```

生产验证：

```bash
npm run check
npm run build
npm run preview
```

本地站点默认位于 `/knowledge-garden/`，与 GitHub Pages 的项目站点路径一致。

## 新增笔记

在 `src/content/notes/` 中创建 Markdown 文件：

```yaml
---
title: 笔记标题
description: 一句话摘要
created: 2026-11-08
updated: 2026-11-08 # 可选
tags:
  - 示例标签
draft: false # 可选，默认为 false
---
```

文件名使用小写英文和连字符，例如 `building-a-second-brain.md`。图片放入 `public/assets/`，在正文中使用 `/knowledge-garden/assets/example.png` 引用。

`draft: true` 的笔记不会进入页面、全文搜索、RSS 或站点地图。注意：公开仓库中的源文件仍然可见，真正私密的内容不要提交到这个仓库。

## 备份与发布

```bash
git add .
git commit -m "Add a new garden note"
git push origin main
```

推送到 `main` 后，GitHub Actions 会依次执行内容与类型检查、静态构建、Pagefind 索引生成和 GitHub Pages 部署。

首次发布前，在 GitHub 仓库的 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。

## 回滚

查看历史并创建一个撤销提交：

```bash
git log --oneline
git revert <commit-sha>
git push origin main
```

不要用强制推送覆盖远程历史。回滚提交推送后，站点会自动重新部署。
