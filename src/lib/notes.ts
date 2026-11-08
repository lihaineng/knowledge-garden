import { getCollection, type CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

export async function getPublishedNotes() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return notes.sort((a, b) => getNoteDate(b).getTime() - getNoteDate(a).getTime());
}

export function getNoteDate(note: Note) {
  return note.data.updated ?? note.data.created;
}

export function getAllTags(notes: Note[]) {
  const counts = new Map<string, number>();
  for (const note of notes) {
    for (const tag of note.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'));
}

export function notePath(id: string) {
  return `/notes/${id}/`;
}
