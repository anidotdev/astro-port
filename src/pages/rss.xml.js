import rss from '@astrojs/rss';
import { getPublishedArticles } from '../lib/content.js';

export async function GET(context) {
  const articles = await getPublishedArticles();
  return rss({
    title: 'Animesh — Writing',
    description: 'Technical articles, engineering essays, and notes from Animesh.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.id}/`
    })),
    customData: '<language>en</language>'
  });
}
