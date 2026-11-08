# 知识博客

一个通过 GitHub 网页编辑器写作、由 GitHub Actions 构建并发布到 GitHub Pages 的个人知识博客。

- 在线网站：<https://lihaineng.github.io/knowledge-garden/>
- 写文章：<https://github.com/lihaineng/knowledge-garden/new/main/src/content/notes>
- 发布状态：<https://github.com/lihaineng/knowledge-garden/actions>

## 在网页上发布文章

1. 打开网站导航中的“写文章”，或直接进入上方“写文章”链接。
2. 输入以 `.md` 结尾的小写英文文件名，例如 `my-first-article.md`。
3. 粘贴以下模板并填写内容：

```yaml
---
title: 文章标题
description: 一句话摘要
created: 2026-11-09
tags:
  - 主题
draft: false
---

从这里开始写正文。
```

4. 点击 **Commit changes** 并提交到 `main`。
5. GitHub Actions 会自动检查内容、构建页面、生成全文搜索并部署到 GitHub Pages。

文章底部的“在 GitHub 编辑本文”可以直接打开对应源码。修改后再次提交即可更新网站。

## 内容规则

- 文章位于 `src/content/notes/`，使用 Markdown。
- 必填字段：`title`、`description`、`created`。
- 可选字段：`updated`、`tags`、`draft`。
- `draft: true` 不会进入网页、搜索、RSS 或站点地图，但源文件仍会在公开 GitHub 仓库中可见。
- 图片可通过 GitHub 上传到 `public/assets/`，正文使用 `/knowledge-garden/assets/文件名` 引用。

## 发布与回滚

每次提交都会保留版本历史。需要回滚时，在 GitHub 打开对应提交或文件历史，使用 **Revert** 创建撤销提交；新的提交会再次触发自动发布。

## 技术栈

- Astro 静态站点
- Pagefind 中文全文搜索
- GitHub Actions 持续部署
- GitHub Pages 托管
