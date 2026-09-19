# サイト編集・差し替えマニュアル (Content Editing Guide)

このサイトのすべての文言、画像、店舗情報、商品メニュー、お知らせは、`src/data/` フォルダ内の3つの設定ファイルを編集するだけで簡単に変更できます。HTMLやデザインコードを触る必要はありません。

---

## 📁 設定ファイル一覧

| ファイルパス | 変更できる内容 |
| :--- | :--- |
| **`src/data/siteConfig.ts`** | **店舗情報、全セクションの文章・見出し、画像、ナビゲーション、お問い合わせフォーム** |
| **`src/data/products.ts`** | **商品一覧（ケーキ、焼き菓子、ギフト）の名前・価格・説明・画像** |
| **`src/data/news.ts`** | **お知らせ一覧（タイトル、日付、カテゴリ、本文抜粋）** |

---

## 1. 店舗情報を変更する (`src/data/siteConfig.ts`)

`store: { ... }` の部分を書き換えるだけで、ヘッダー、フッター、店舗セクションなど**サイト全体に一括反映**されます。

```typescript
store: {
  nameEn: "THE PATISSERIE",                // 英語店名
  nameJa: "パティスリー ザ・テラス",        // 日本語店名
  subtitle: "Artisan Cakes & Bakery",       // サブタイトル
  postalCode: "153-0042",                   // 郵便番号
  address: "東京都目黒区青葉台1-2-3",        // 住所
  tel: "03-0000-0000",                      // 電話番号
  businessHours: "11:00 ～ 19:00",          // 営業時間
  holidays: "毎週火曜日 / 水曜日",           // 定休日
  weeklyHolidayDays: [2, 3],                // カレンダーの定休日曜日（0:日, 1:月, 2:火, 3:水, 4:木, 5:金, 6:土）
  accessList: [                             // アクセス案内
    "東急田園都市線「池尻大橋駅」東口 徒歩5分",
    "東急東横線「中目黒駅」徒歩10分"
  ],
  parking: "専用駐車場 2台 / 近隣にコインパーキングあり",
  instagramUrl: "https://www.instagram.com/...", // Instagramリンク
  instagramAccountName: "@patisserie_official",   // Instagramアカウント名
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?..." // Googleマップの埋め込みURL
}
```

---

## 2. 画像を差し替える

画像は **「外部Web画像のURL」** または **「ローカルフォルダに置いた画像」** のどちらでも指定可能です。

### ローカル画像を使用する場合（推奨）
1. `public/images/` フォルダ内の各カテゴリフォルダに画像ファイルを入れます：
   - `public/images/hero/`（トップカルーセル画像）
   - `public/images/concept/`（こだわり紹介画像）
   - `public/images/specialite/`（オーダーメイドケーキ画像）
   - `public/images/about/`（シェフ・工房画像）
   - `public/images/products/`（商品画像）
   - `public/images/gallery/`（Instagramギャラリー画像）
2. 設定ファイル内の画像URLを以下のように指定します：
   ```typescript
   url: "/images/hero/my-cake-1.jpg"
   ```

---

## 3. 各セクションの文章・見出しを変更する (`src/data/siteConfig.ts`)

`content: { ... }` の中にセクションごとのテキストがまとまっています。

### ① コンセプトセクション (`content.concept`)
- `badge`: バッジ文字（例: `"こだわり"`）
- `titleEn`: 英語タイトル（例: `"Concept"`）
- `subtitleJa`: 日本語サブタイトル
- `lead`: キャッチコピー
- `paragraphs`: 本文説明（配列なので何段落でも追加可能）
- `promises`: 3つのこだわり項目（番号、タイトル、説明文）

### ② オーダーメイドセクション (`content.specialite`)
- `heading`: メイン見出し（改行したい場合は `\n` を入れます）
- `desc`: 説明文
- `tags`: ハッシュタグ一覧（例: `["# 誕生日", "# クリスマス", "# アニバーサリー"]`）
- `catalogBtn`: ボタン文言（例: `"ご予約・ご相談はこちら"`）

### ③ シェフ・職人の想いセクション (`content.about`)
- `paragraphs`: シェフの想いメッセージ本文
- `chefTitle`: 役職（例: `"オーナーシェフ"`）
- `chefName`: シェフのお名前（例: `"田中 奏太"`）
- `chefNameEn`: シェフの英語表記（例: `"Sota Tanaka"`）

### ④ お問い合わせモーダル (`content.contact`)
- `purposes`: お問い合わせ種別プルダウンの選択肢一覧
- `form`: 入力項目のラベルやプレースホルダー、送信ボタン文言
- `success`: 送信完了時に表示されるメッセージ

---

## 4. 商品メニューを追加・編集する (`src/data/products.ts`)

新しい商品を追加する場合は、`products` 配列にコピー＆ペーストして項目を書き換えます。

```typescript
{
  id: 'new-cake-id',                        // 重複しない固有ID（半角英数）
  name: '桃のショートケーキ',                 // 商品名
  englishName: 'Peach Shortcake',           // 英語名
  category: 'cake',                         // カテゴリ（'cake' / 'baked' / 'gift'）
  categoryLabel: '生菓子',                   // カテゴリ表示名
  price: '¥720',                            // 価格
  description: '山梨県産白桃を贅沢にあしらった季節限定ケーキ。', // 商品説明
  flavorNote: '上品な甘さと華やかな香り',      // 味わいの特徴
  ingredients: ['白桃', '北海道産純生クリーム', '国産小麦'], // 主な原材料
  image: 'https://...'                     // 画像URL（または /images/products/peach.jpg）
}
```

---

## 5. お知らせを追加・編集する (`src/data/news.ts`)

新しいお知らせを追加する場合は、`newsItems` 配列の先頭に追加します。

```typescript
{
  id: 'news-4',
  date: '2026.05.01',                       // 日付
  category: 'Seasonal',                     // カテゴリ（'Seasonal' / 'Notice' / 'Event'）
  title: '初夏の新作タルトがスタートしました',   // タイトル
  excerpt: '爽やかな柑橘を使用した季節限定タルトの販売を開始いたします。' // 本文抜粋
}
```

---

## 6. 編集の確認方法

設定ファイルを保存した後、ターミナルで以下を実行すると反映を確認できます：

- **プレビュー起動**: `npm run dev` （ローカルサーバー `http://localhost:4321` で即座に確認できます）
- **公開用ビルド**: `npm run build` （本番用静的ファイルを出力します）
