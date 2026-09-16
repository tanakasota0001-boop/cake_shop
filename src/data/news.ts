export interface NewsItem {
  id: string;
  date: string;
  category: 'Seasonal' | 'Notice' | 'Event';
  title: string;
  excerpt: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: '2026.04.01',
    category: 'Seasonal',
    title: '季節限定メニューの販売を開始いたしました',
    excerpt: '旬のみずみずしい果実をふんだんに使用した、今だけの限定タルトやプティガトーが登場いたしました。日々のカフェタイムにぜひお楽しみください。',
  },
  {
    id: 'news-2',
    date: '2026.03.15',
    category: 'Notice',
    title: '新作焼き菓子ギフトボックスのご案内',
    excerpt: '大切な方への手土産や季節のご挨拶に最適な、当店自慢の焼き菓子を詰め合わせた新しいギフトコレクションをご用意いたしました。',
  },
  {
    id: 'news-3',
    date: '2026.02.01',
    category: 'Notice',
    title: '営業時間および定休日のご案内',
    excerpt: 'いつもご愛顧いただき誠にありがとうございます。今月の営業スケジュールと季節のラインナップについてご案内いたします。',
  }
];
