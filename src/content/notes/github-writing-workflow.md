---
title: 用 GitHub 网页编辑器写作并自动发布
description: 不安装任何本地工具，只用浏览器完成一篇知识文章的创建、提交与上线。
created: 2026-11-09
tags:
  - GitHub
  - 写作工作流
  - 自动发布
---

这个博客把 GitHub 仓库同时用作内容管理系统和版本历史。日常写作只需要浏览器。

## 创建文章

点击网站导航中的“写文章”，打开 GitHub 的新建文件页面。文件名使用小写英文和连字符，例如 `my-first-article.md`。

## 填写文章信息

每篇文章顶部都有一段 frontmatter，用来描述标题、摘要、日期与主题：

```yaml
---
title: 文章标题
description: 一句话摘要
created: 2026-11-09
tags:
  - 示例主题
draft: false
---
```

如果暂时不想公开，将 `draft` 改为 `true`。不过仓库本身是公开的，草稿源码仍会出现在 GitHub 中。

## 提交并发布

写完后点击 **Commit changes**，提交到 `main` 分支。GitHub Actions 会自动检查内容、构建网页、生成全文搜索索引，并发布到 GitHub Pages。

## 修改已发布文章

每篇文章底部都有“在 GitHub 编辑本文”链接。修改并再次提交后，网站会自动发布新版本，旧版本则保留在 Git 历史中。
