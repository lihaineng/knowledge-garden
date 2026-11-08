import rss from '@astrojs/rss';
import { getPublishedNotes, notePath } from '../lib/notes';
import { SITE_DESCRIPTION, SITE_NAME } from '../lib/site';

export async function GET(context: { site: URL }) {
  const notes = await getPublishedNotes();
  const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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
