export interface Product {
  id: string;
  name: string;
  englishName: string;
  category: 'cake' | 'baked' | 'gift';
  categoryLabel: string;
  price: string;
  description: string;
  flavorNote?: string;
  ingredients: string[];
  isSpecialite?: boolean;
  isSeasonal?: boolean;
  image: string;
}

export const categories = [
  { id: 'all', label: 'All Menu', subLabel: '全商品' },
  { id: 'cake', label: 'Fresh Cakes', subLabel: '生菓子' },
  { id: 'baked', label: 'Baked Goods', subLabel: '焼き菓子' },
  { id: 'gift', label: 'Gift Sets', subLabel: 'ギフト・詰め合わせ' },
] as const;

export const products: Product[] = [
  {
    id: 'shortcake',
    name: '苺のショートケーキ',
    englishName: 'Strawberry Shortcake',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥680',
    description: 'きめ細かくふんわりと焼き上げたスポンジに、口どけ軽やかな北海道産純生クリームと甘酸っぱい旬の苺を贅沢に重ねました。素材の良さがまっすぐに伝わる、当店のシグネチャーケーキです。',
    flavorNote: '芳醇なミルクのコクと、もぎたて苺の爽やかな酸味',
    ingredients: ['国産厳選卵', '北海道産純生クリーム', '契約農家直送苺', '国産小麦'],
    isSpecialite: true,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'mont-blanc',
    name: '濃厚和栗のモンブラン',
    englishName: 'Chestnut Mont-Blanc',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥750',
    description: '栗本来の奥深い香りとほのかな甘みを引き出した特製マロンペースト。中には無糖で泡立てた軽い生クリームと渋皮煮を丸ごと閉じ込め、サクサクのメレンゲ土台と合わせました。',
    flavorNote: '栗の濃厚な香気と、メレンゲの軽快なサクサク感',
    ingredients: ['国産栗ペースト', '無糖シャンティクリーム', '栗の渋皮煮', 'メレンゲ'],
    isSpecialite: true,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'choux-creme',
    name: 'シュー・ア・ラ・クレーム',
    englishName: 'Vanilla Cream Puff',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥380',
    description: '香ばしいクッキー生地をのせてザクッと焼き上げたシュー皮に、天然バニラビーンズが豊かに香る濃厚な特製カスタードクリームを限界までたっぷりと詰め込みました。',
    flavorNote: '香ばしいアーモンドと、とろけるバニラクリームの余韻',
    ingredients: ['こだわり卵', 'マダガスカル産バニラ', '発酵バター', 'ジャージー牛乳'],
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'chocolat-cru',
    name: 'クラシック・ショコラ',
    englishName: 'Classic Chocolate Cake',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥700',
    description: 'カカオ分70%の最高級クーベルチュールチョコレートを使用した贅沢なショコラムースケーキ。なめらかな口どけと、カカオの力強い苦味とアロマが広がります。',
    flavorNote: '深みのあるビターカカオと、ほんのり香るブランデー',
    ingredients: ['最高級クーベルチュール', '発酵バター', 'カカオニブ', 'コニャック'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'tarte-fruits',
    name: '季節のフルーツタルト',
    englishName: 'Seasonal Fruit Tart',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥720',
    description: '発酵バターをたっぷり使用して香ばしく焼き上げたアーモンドタルトに、なめらかなカスタードと市場直送のみずみずしい旬のフルーツを彩り豊かにあしらいました。',
    flavorNote: 'サクサクのタルト生地と、フルーツのジューシーな果汁',
    ingredients: ['旬のフレッシュフルーツ', '発酵バター', 'アーモンドクリーム', 'キルシュ'],
    isSeasonal: true,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'creme-caramel',
    name: 'バニラプリン',
    englishName: 'Vanilla Custard Pudding',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥420',
    description: '新鮮な卵と濃厚な牛乳、天然バニラビーンズを贅沢に使用。昔ながらのしっかりとした食感となめらかな舌触りを両立させ、ほろ苦いカラメルソースで仕上げました。',
    flavorNote: '卵の豊かな風味と、ほろ苦く香ばしい自家製カラメル',
    ingredients: ['こだわり卵', '低温殺菌牛乳', 'マダガスカル産バニラ', 'きび砂糖'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'macaron-box',
    name: 'マカロン・アソート',
    englishName: 'Macaron Assortment',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥1,600 / 5個入',
    description: '外はさっくり、中はしっとり。香り高いアーモンドパウダーと濃厚なガナッシュのハーモニー。ショコラ、ピスタチオ、フランボワーズ、レモン、バニラの5種アソートです。',
    flavorNote: '色とりどりの個性豊かなアロマと繊細なテクスチャー',
    ingredients: ['スペイン産アーモンド', '最高級チョコレート', '果実ピューレ', '卵白'],
    isSpecialite: true,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'financier-noisette',
    name: '焦がしバターのフィナンシェ',
    englishName: 'Brown Butter Financier',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥260 / 個',
    description: '焦がしバターの香ばしさと、皮付きアーモンドプードルのコクを極限まで引き出した自慢のフィナンシェ。外はカリッと、中はしっとり。',
    flavorNote: '焦がしバターの芳醇なナッツ香と、上品な甘み',
    ingredients: ['発酵バター', 'アーモンドパウダー', '卵白', 'ゲランド海塩'],
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'madeleine-citron',
    name: 'ハニーレモンマドレーヌ',
    englishName: 'Honey Lemon Madeleine',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥250 / 個',
    description: 'ふっくらと貝殻の形に焼き上げた伝統焼き菓子。国産レモンの果皮と果汁を練り込み、バターの香ばしさの中にすっきりとした爽快感をプラスしました。',
    flavorNote: '優しい卵と蜂蜜の甘みに、爽やかな柑橘の香り',
    ingredients: ['国産レモン', '発酵バター', '国産天然蜂蜜', '卵'],
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'gift-box-large',
    name: 'プレミアム焼菓子アソート',
    englishName: 'Baked Sweets Gift Box',
    category: 'gift',
    categoryLabel: 'ギフト・詰め合わせ',
    price: '¥3,500 / 箱',
    description: 'フィナンシェ、マドレーヌ、サブレ、パウンドケーキなど、当店の人気の焼き菓子を美しく詰め合わせました。季節のご挨拶やお祝い、手土産に最適です。',
    flavorNote: '素材の個性を味わう、多彩な焼き菓子のアンサンブル',
    ingredients: ['厳選焼き菓子各種（個別包装）'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85'
  }
];
