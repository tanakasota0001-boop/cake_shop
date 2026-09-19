/**
 * サイト全体の共通設定・テキスト・画像集約ファイル
 * 英語（English）と日本語（Japanese）で統一しています。
 */

export const siteConfig = {
  // ==========================================
  // 1. 店舗基本情報 (Store Information)
  // ==========================================
  store: {
    nameEn: "THE PATISSERIE",
    nameJa: "パティスリー ザ・テラス",
    subtitle: "Artisan Cakes & Bakery",
    tagline: "五感で味わう、甘美なる芸術。",
    shortConcept: "旬の素材と職人技が織りなす、日常に寄り添う甘美なひととき。",
    description: "厳選した旬の果実、発酵バター、こだわりの卵を使用し、職人がひとつひとつ丁寧に仕上げる洋菓子専門店。洗練された美味しさと心安らぐ時間をお届けします。",
    postalCode: "153-0042",
    address: "東京都目黒区青葉台1-2-3",
    tel: "03-0000-0000",
    email: "info@example.com",
    businessHours: "11:00 ～ 19:00",
    businessHoursNote: "※当日分のお菓子が無くなり次第終了となる場合がございます",
    holidays: "毎週火曜日 / 水曜日",
    holidaysNote: "※祝日の場合は営業、翌平日休業",
    // 営業カレンダーで定休日に指定する曜日 (0:日曜, 1:月曜, 2:火曜, 3:水曜, 4:木曜, 5:金曜, 6:土曜)
    weeklyHolidayDays: [2, 3],
    accessList: [
      "東急田園都市線「池尻大橋駅」東口 徒歩5分",
      "東急東横線・東京メトロ日比谷線「中目黒駅」徒歩10分"
    ],
    instagramUrl: "https://www.instagram.com/",
    instagramAccountName: "@patisserie_official",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747975467362!2d139.7016358152589!3d35.65858048019951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e1ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp",
    copyrightYear: "2026"
  },

  // ==========================================
  // 2. 画像設定 (Images Management)
  // ローカル画像を使用する場合は "/images/..." のパスを指定してください。
  // ==========================================
  images: {
    heroSlides: [
      {
        url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1920&q=85",
        subTitle: "Purity & Harmony",
        title: "素材の息吹をそのままに。\n心ほどける、甘美なひととき。",
        tag: "Seasonal Cake"
      },
      {
        url: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1920&q=85",
        subTitle: "Craft & Passion",
        title: "厳選素材と職人技が紡ぐ、\n気品あふれる極上のスイーツ。",
        tag: "Artisan Sweets"
      },
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=85",
        subTitle: "Tradition & Taste",
        title: "日々の暮らしに寄り添う、\n記憶に残る特別な美味しさ。",
        tag: "House Specialty"
      }
    ],

    concept: {
      main: "https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=1200&q=85",
      sub: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=85"
    },

    specialite: {
      featureMain: {
        tag: "Signature Cake",
        nameJa: "王道を極めた「ショートケーキ」",
        nameEn: "Strawberry Shortcake",
        desc: "ケーキ作りの原点にして真骨頂。極限までキメを整えて焼き上げた羽のように軽いスポンジに、乳脂肪分の異なる北海道産生クリームを独自ブレンド。みずみずしい旬の苺とともに、一口で幸せに包まれる王道の美味しさをお届けします。",
        price: "¥680（税込） / 通年販売",
        priceShort: "¥680",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85",
        productId: "shortcake"
      },
      subCard1: {
        badge: "Specialty",
        categoryText: "和栗の奥深い香り",
        nameJa: "濃厚和栗のモンブラン",
        nameEn: "Chestnut Mont-Blanc",
        desc: "栗本来の素朴で濃厚な風味を凝縮した特製マロンクリーム。無糖シャンティとサクサクのメレンゲが栗の甘美な余韻を引き立てます。",
        price: "¥750",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85",
        productId: "mont-blanc"
      },
      subCard2: {
        badge: "Gift & Treat",
        categoryText: "繊細なサクふわ食感",
        nameJa: "マカロン・コレクション",
        nameEn: "Macaron Assortment",
        desc: "アーモンド香る繊細なマカロン生地に、なめらかなガナッシュをサンド。色鮮やかで上品な味わいは手土産やギフトにも最適です。",
        price: "¥1,600",
        priceNote: "(5個入・税込)",
        image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=85",
        productId: "macaron-box"
      }
    },

    about: {
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85",
      roleText: "Pastry Chef & Baker"
    },

    gallery: [
      {
        url: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80",
        caption: "朝焼き苺のショートケーキ"
      },
      {
        url: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80",
        caption: "季節のマカロンアソート"
      },
      {
        url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
        caption: "和栗のモンブラン仕込み"
      },
      {
        url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
        caption: "バニラ香るシュークリーム"
      },
      {
        url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
        caption: "クラシック・ショコラ"
      },
      {
        url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
        caption: "手焼きサブレ＆ディアマン"
      }
    ]
  },

  // ==========================================
  // 3. 各セクションの文章・見出し (Content Texts)
  // 英語タイトル (titleEn) ＋ 日本語サブタイトル (subtitleJa) で統一
  // ==========================================
  content: {
    concept: {
      badge: "Philosophy & Craft",
      titleEn: "Our Concept",
      subtitleJa: "素材と技が織りなす、洗練の洋菓子。",
      lead: "一口で心満たされる、記憶に残るスイーツを。",
      paragraphs: [
        "洋菓子の伝統的な美意識と製法を大切にしながら、四季折々の厳選素材と軽やかな口どけを追求しています。",
        "毎朝のアトリエで丁寧に泡立てる純生クリーム、芳醇に薫る発酵バター、そして契約農家から届くみずみずしい旬の果実。納得のいくお菓子だけを店頭に並べ、日々の暮らしに心ほどける甘い余韻をお届けします。"
      ],
      promises: [
        {
          num: "01. 厳選素材",
          title: "極上の卵と乳の調和",
          desc: "新鮮なこだわり卵と無添加純生クリーム。素材本来の素直な美味しさを引き出します。"
        },
        {
          num: "02. 伝統と調和",
          title: "確かなクラフトマンシップ",
          desc: "伝統的な製法を基点に、日本人好みの繊細な甘さと食感を追求。"
        },
        {
          num: "03. 出来立ての香り",
          title: "工房直送の鮮度",
          desc: "工房で毎朝仕上げ、最も香り高くみずみずしい状態でお客様へお届けします。"
        }
      ]
    },

    specialite: {
      badge: "Signature Sweets",
      titleEn: "Specialty",
      subtitleJa: "素材と技を極めた、自慢のスペシャリテ",
    },

    menu: {
      badge: "Our Menu",
      titleEn: "Menu & Collection",
      subtitleJa: "定番のケーキから手土産に最適な焼き菓子まで",
      noticeBoxTitle: "【地方発送・ギフト詰め合わせ・法人様のご注文について】",
      noticeBoxText: "焼き菓子やマカロンはご予算に応じたオリジナルギフトボックスの詰め合わせや地方配送も承っております。イベント用のお菓子やカフェ・飲食店様への卸販売についてもお気軽にお問い合わせください。",
      ctaButton: "お問い合わせはこちら"
    },

    about: {
      badge: "Craftsmanship",
      titleEn: "About Chef & Atelier",
      subtitleJa: "毎日、心をこめて。美味しさの先にある感動を。",
      paragraphs: [
        "幼い頃に魅了された洋菓子の美しさと、オーブンから漂う香ばしいバターの香り。確かな技術を土台にしながら、私たちが何よりも大切にしているのは「作り手自身が心から納得できるお菓子づくり」です。",
        "素材の選定から温度管理、生地を合わせる手の感覚まで、一切の妥協を排し、毎日工房で真摯にお菓子と向き合っています。",
        "お召し上がりいただいた瞬間に思わず笑みがこぼれ、「またこのケーキを食べたい」と思い出していただけること。それがパティシエとしての何よりの歓びです。",
        "心を込めて焼き上げる洋菓子を、どうぞごゆっくりお楽しみください。"
      ],
      atelierLabel: "Bakery & Kitchen",
      englishTagline: "Artisan Pastry & Cakes"
    },

    news: {
      badge: "News & Topics",
      titleEn: "News & Topics",
      subtitleJa: "最新のお知らせ・季節のご案内",
      instagramBadge: "Social Media",
      instagramTitleEn: "Instagram Gallery",
      instagramSubtitleJa: "公式インスタグラムの最新投稿",
      instagramCta: "Instagramを見る"
    },

    store: {
      badge: "Store & Access",
      titleEn: "Store & Access",
      subtitleJa: "店舗情報・営業案内・交通アクセス",
      calendarTitle: "営業カレンダー",
      legendHoliday: "定休日",
      legendToday: "本日"
    },

    contact: {
      badge: "Contact Us",
      titleEn: "Contact Us",
      subtitleJa: "お問い合わせ・ご相談",
      desc: "商品やギフトの地方発送、法人様向けご注文など、お気軽にお問い合わせください。",
      phoneNoticeTitle: "【お急ぎ・当日在庫の確認はお電話にて】"
    }
  }
};
