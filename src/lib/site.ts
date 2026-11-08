export const SITE_NAME = '知识博客';
export const SITE_DESCRIPTION = '在 GitHub 上写作，由 GitHub Pages 自动发布的个人知识博客。';
export const REPOSITORY_URL = 'https://github.com/lihaineng/knowledge-garden';
export const NEW_ARTICLE_URL = `${REPOSITORY_URL}/new/main/src/content/notes`;

export function articleEditUrl(id: string) {
  const path = id.split('/').map(encodeURIComponent).join('/');
  return `${REPOSITORY_URL}/edit/main/src/content/notes/${path}.md`;
}
