# ケーキ屋・パティスリー向け 洗練Webサイトテンプレート

本テンプレートは、**「サイト内の全情報を1箇所で管理できること」** と **「画像の差し替えが直感的に行えること」** を重視して設計された、最高水準のアート性・デザイン性を持つ洋菓子店公式Webサイトのスターターキットです。

---

## 💡 最大の特長：全情報・画像の一元管理

HTMLファイルや各コンポーネントのコードを一切変更することなく、[`src/data/siteConfig.ts`](file:///Users/tanakasota/Desktop/cake_shop/src/data/siteConfig.ts) と [`src/data/products.ts`](file:///Users/tanakasota/Desktop/cake_shop/src/data/products.ts) を編集するだけで、店舗情報・文章・見出し・すべての画像が完全に切り替わります。

```
src/data/
├── siteConfig.ts   # ★ 店舗情報・文章・全セクションの画像URLを完全集約
├── products.ts     # ★ メニュー・商品情報（生菓子・焼き菓子・ギフト）
└── news.ts         # ★ お知らせ・最新情報
```

---

## 🖼️ 画像の置き換え方法（2つの方法）

### 方法A: `public/images/` に画像を保存してパスを指定する（推奨）
プロジェクトの `public/images/` 配下に用途ごとのフォルダが用意されています。

```
public/images/
├── hero/        # ヒーローカルーセル用（横長 1920x1080 推奨）
├── concept/     # コンセプト写真（メイン・サブ）
├── specialite/  # 看板商品写真
├── about/       # シェフ・工房・アトリエ写真（縦長 1200x1600 推奨）
├── gallery/     # Instagram風ギャラリー（正方形 800x800 推奨）
└── products/    # 商品写真（正方形 800x800 推奨）
```

画像を配置したら、[`src/data/siteConfig.ts`](file:///Users/tanakasota/Desktop/cake_shop/src/data/siteConfig.ts) の画像パスをローカルパスに変更するだけです。
```typescript
// 例: siteConfig.ts
images: {
  heroSlides: [
    {
      url: "/images/hero/hero-1.jpg", // ← ここを書き換えるだけ
      // ...
    }
  ]
}
```

### 方法B: 外部画像URL（CDNやクラウドストレージ）を直接貼る
UnsplashやCloudinary、自社サーバーの画像URLをそのまま `siteConfig.ts` や `products.ts` の `image` / `url` プロパティにペーストするだけでも即座に反映されます。

---

## ⚙️ 店舗情報の変更方法

[`src/data/siteConfig.ts`](file:///Users/tanakasota/Desktop/cake_shop/src/data/siteConfig.ts) 内の `store` オブジェクトを変更します：

```typescript
store: {
  nameEn: "PÂTISSERIE LA MAISON",    // 英字店名
  nameJa: "パティスリー ラ・メゾン", // 日本語店名
  subtitle: "Artisan Pâtisserie & Salon",
  tagline: "五感で味わう、甘美なる芸術。",
  postalCode: "153-0042",
  address: "東京都目黒区青葉台1-2-3",
  tel: "03-0000-0000",
  businessHours: "11:00 ～ 19:00",
  holidays: "毎週火曜日 / 水曜日",
  // カレンダーの休業日設定 (0:日, 1:月, 2:火, 3:水, 4:木, 5:金, 6:土)
  weeklyHolidayDays: [2, 3], // ← 火曜・水曜が自動でカレンダー上で休業日表示になります
  accessList: [
    "東急田園都市線「池尻大橋駅」東口 徒歩5分",
    "東急東横線・東京メトロ日比谷線「中目黒駅」徒歩10分"
  ],
  instagramUrl: "https://www.instagram.com/",
  instagramAccountName: "@patisserie_official",
}
```

---

## 🚀 起動方法

```bash
# 開発サーバー起動（http://localhost:4321）
npm run dev

# プロダクションビルド
npm run build

# ビルド成果物のプレビュー
npm run preview
```
