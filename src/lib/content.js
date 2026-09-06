import { getCollection } from 'astro:content';

export async function getPublishedArticles() {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublishedNotes() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
