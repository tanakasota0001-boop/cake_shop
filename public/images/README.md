# 画像置き換えガイド (Image Replacement Guide)

このフォルダに店舗の写真や商品画像を配置することで、サイト内の画像を簡単に置き換えることができます。

## ディレクトリ構造
- `hero/`: ヒーローカルーセル用画像（推奨サイズ: 1920x1080px 横長）
- `concept/`: コンセプトセクション用画像（メイン・サブ）
- `specialite/`: 看板商品（スペシャリテ）用画像
- `about/`: シェフまたは工房・アトリエ写真（推奨サイズ: 1200x1600px 縦長）
- `gallery/`: インスタグラム・ギャラリー用写真（推奨サイズ: 800x800px 正方形）
- `products/`: 各商品・ケーキ写真（推奨サイズ: 800x800px 正方形）

## 置き換え方法
1. 上記フォルダに画像を配置します（例: `public/images/hero/hero-1.jpg`）。
2. `src/data/siteConfig.ts` または `src/data/products.ts` の画像URL指定箇所を `"/images/hero/hero-1.jpg"` のように変更するだけで即座に反映されます。
