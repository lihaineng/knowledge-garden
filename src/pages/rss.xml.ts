import rss from '@astrojs/rss';
import { getPublishedNotes, notePath } from '../lib/notes';

export async function GET(context: { site: URL }) {
  const notes = await getPublishedNotes();
  const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
  return rss({
    title: '知识花园',
    description: '一个本地优先、缓慢生长的个人知识花园。',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.updated ?? note.data.created,
      link: `${base}${notePath(note.id).slice(1)}`,
      categories: note.data.tags,
    })),
  });
}
