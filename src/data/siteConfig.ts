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
      items: [
        {
          id: "piece-montee",
          title: "PIÈCE MONTÉE",
          subTitle: "ウェディング・アニバーサリー多段ケーキ",
          desc: "特別な記念日やウェディングに華を添える、職人技を凝縮したエレガントな多段ケーキ。",
          image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85",
          aspect: "standard" // 4:5
        },
        {
          id: "anniversary-shortcake",
          title: "ENTREMETS CÉLÉBRATION",
          subTitle: "誕生日・アニバーサリーホールケーキ",
          desc: "軽やかな北海道産純生クリームと厳選された旬の果実を惜しみなくあしらった特製アニバーサリーケーキ。",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
          aspect: "standard" // 4:5
        },
        {
          id: "noel-special",
          title: "BÛCHE & NOËL CRÉATION",
          subTitle: "クリスマス限定プレミアムケーキ",
          desc: "聖夜の食卓を華やかに彩る、年に一度のフェスティブな特別創作ケーキ。ご予約限定。",
          image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1600&q=85",
          aspect: "wide" // 3:2 span 2 cols
        },
        {
          id: "tarte-fruits",
          title: "TARTE AUX FRUITS DE SAISON",
          subTitle: "季節の極上フルーツタルト",
          desc: "香ばしいサブレ生地に自家製クレームダマンド、厳選した最高品質の旬のフルーツを贅沢に敷き詰めて。",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
          aspect: "standard" // 4:5
        },
        {
          id: "number-custom-cake",
          title: "NUMBER & CUSTOM CAKE",
          subTitle: "数字・メッセージ・特注ケーキ",
          desc: "ご年齢や記念の数字、お好みのテーマカラーに合わせてひとつひとつフルオーダーでお仕立てします。",
          image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85",
          aspect: "standard" // 4:5
        },
        {
          id: "party-dessert-buffet",
          title: "DESSERT COCKTAIL & BUFFET",
          subTitle: "パーティー・イベント用デザートアソート",
          desc: "大切なパーティーやおもてなしを彩る、華やかで一口サイズのプティフールや特製デザートスタンド。",
          image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=1600&q=85",
          aspect: "wide" // 3:2 span 2 cols
        }
      ]
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
  // 英語タイトル上部 (badge) を日本語にし、英語タイトル (titleEn) と組み合わせ
  // ==========================================
  content: {
    concept: {
      badge: "こだわり",
      titleEn: "Concept",
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
      badge: "オーダーメイド",
      titleEn: "Sur-Mesure",
      subtitleJa: "特別な日を彩る、オーダーメイド・ホールケーキ",
      heading: "特別な記念日やイベントのための\nオーダーメイド・クリエーション",
      desc: "誕生日、クリスマス、記念日、ウェディングなど、大切な節目を彩る世界にひとつだけの特別なホールケーキ。お客様のご希望のテーマやお好みの果実、サイズに合わせてパティシエがひとつひとつ心を込めてお仕立てします。",
      catalogBtn: "ご予約・ご相談はこちら",
      menuLink: "商品一覧を見る"
    },

    menu: {
      badge: "商品一覧",
      titleEn: "Collection",
      subtitleJa: "定番のケーキから手土産に最適な焼き菓子まで",
      noticeBoxTitle: "【地方発送・ギフト詰め合わせ・法人様のご注文について】",
      noticeBoxText: "焼き菓子やマカロンはご予算に応じたオリジナルギフトボックスの詰め合わせや地方配送も承っております。イベント用のお菓子やカフェ・飲食店様への卸販売についてもお気軽にお問い合わせください。",
      ctaButton: "お問い合わせはこちら"
    },

    about: {
      badge: "職人の想い",
      titleEn: "About",
      subtitleJa: "毎日、心をこめて。美味しさの先にある感動を。",
      paragraphs: [
        "幼い頃に魅了された洋菓子の美しさと、オーブンから漂う香ばしいバターの香り。確かな技術を土台にしながら、私たちが何よりも大切にしているのは「作り手自身が心から納得できるお菓子づくり」です。",
        "素材の選定から温度管理、生地を合わせる手の感覚まで、一切の妥協を排し、毎日工房で真摯にお菓子と向き合っています。",
        "お召し上がりいただいた瞬間に思わず笑みがこぼれ、「またこのケーキを食べたい」と思い出していただけること。それがパティシエとしての何よりの歓びです。",
        "心を込めて焼き上げる洋菓子を、どうぞごゆっくりお楽しみください。"
      ],
      chefTitle: "オーナーシェフ",
      chefName: "田中 奏太",
      chefNameEn: "Sota Tanaka"
    },

    news: {
      badge: "お知らせ",
      titleEn: "News",
      subtitleJa: "最新のお知らせ・季節のご案内",
      instagramBadge: "インスタグラム",
      instagramTitleEn: "Instagram",
      instagramSubtitleJa: "公式インスタグラムの最新投稿",
      instagramCta: "Instagramを見る"
    },

    store: {
      badge: "店舗情報",
      titleEn: "Store",
      subtitleJa: "店舗情報・営業案内・交通アクセス",
      calendarTitle: "営業カレンダー",
      legendHoliday: "定休日",
      legendToday: "本日"
    },

    contact: {
      badge: "お問い合わせ",
      titleEn: "Contact",
      subtitleJa: "商品やギフトのご相談・ご注文など",
      desc: "商品やギフトの地方発送、法人様向けご注文など、お気軽にお問い合わせください。",
      phoneNoticeTitle: "【お急ぎ・当日在庫の確認はお電話にて】"
    }
  }
};
