import { StepData, CaseStudy, Plan } from './types';

export const STEPS_DATA: StepData[] = [
  {
    title: "理解",
    subtitle: "TOOL UNDERSTANDING",
    desc: "道具の名前を知っているだけの状態から脱却。機能や操作方法を知るだけでなく、Larkの本質的な構造を学びます。動画を見るだけで終わらせないための基礎知識をインプットします。",
    point: "知識止まりにならず、現場で使いこなすための土台を作ります。",
    icon: "📖"
  },
  {
    title: "翻訳",
    subtitle: "TRANSLATION",
    desc: "クライアントや自社の「悩み」を、Larkの「機能」に落とし込むフェーズ。要件定義の前段階として、課題解決の翻訳スキルを磨きます。",
    point: "「何に困っているか」を「どの機能で解決するか」に変換する力が身につきます。",
    icon: "🗣️"
  },
  {
    title: "設計",
    subtitle: "ARCHITECTURE",
    desc: "実装の前に青写真を描く重要なステップ。データベースの構造、リレーション、ワークフローの流れを設計図として可視化します。",
    point: "手戻りを防ぎ、強固なシステムを作るためのプロの設計思考を習得。",
    icon: "📐"
  },
  {
    title: "実践",
    subtitle: "CONSTRUCTION",
    desc: "設計図通りに構築する「実務リハーサル」。実際に手を動かし、講師や同期がいる環境でフィードバックを受けながらシステムを組み上げます。",
    point: "テンプレートを活用しながら、ゼロから迷わず作れる技術を獲得。",
    icon: "🛠️"
  },
  {
    title: "検証",
    subtitle: "VERIFICATION",
    desc: "住み心地を確認し微調整する最終段階。作ったシステムが本当に現場でワークするかを確認し、運用に乗せられるレベルまで引き上げます。",
    point: "卒業直後から案件獲得・実運用に入れる「品質」を保証します。",
    icon: "✅"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  { name: "安江様", role: "広告代理店", industry: "marketing", before: "Lark導入済だが活用できず", after: "月額数万円のコスト削減", quote: "細かいテクニックを補完でき、躓きポイントが明らかに。", youtubeId: "54OUyOBe_-E" },
  { name: "杉本様", role: "SNSマーケター", industry: "marketing", before: "人手不足・機能過多で混乱", after: "クライアントワークに活用", quote: "学ぶだけでなく自分で構築することで、できないポイントが明確に。", youtubeId: "UjLmblUTl9I" },
  { name: "大津留様", role: "社労士", industry: "finance", before: "大量のタスク管理に苦戦", after: "工数80%削減", quote: "Baseによりあらゆるデータを可視化することで自社の強みが明らかに。", youtubeId: "Xs0I4YwrFR0" },
  { name: "宮崎様", role: "税理士", industry: "finance", before: "給与計算の手作業ミス連発", after: "給与計算自動化・付加価値提案", quote: "柔軟なシステム構築が可能になり、課題解決のイメージが具体的に。", youtubeId: "p7P7KVQPJ4g" },
  { name: "後藤様", role: "ITコンサル", industry: "consulting", before: "ツール分散・知識の抜け漏れ", after: "提案直後に2社成約", quote: "知識の抜け漏れがなくなり、提案の質が向上した。", youtubeId: "2L8Jzj7vLb8" },
  { name: "遠藤様", role: "エンジニア", industry: "other", before: "月末事務作業 5時間/月", after: "30分/月 に短縮", quote: "ダッシュボード機能を活用し、売上や経費が一目で分かるように。", youtubeId: "Itp1W6jJ0mw" },
  { name: "ぶっちょす様", role: "AI講座運営", industry: "other", before: "事務作業 月10時間", after: "ほぼ0分 (自動化)", quote: "人件費とツール利用料で月額数万円のコストを削減。", youtubeId: "YO5mmgGj7mo" },
  { name: "鈴木様", role: "メンタルサポート", industry: "other", before: "進捗管理 週14時間", after: "週2時間に短縮", quote: "受講生一人ひとりの課題進捗をすぐに把握できるようになった。", youtubeId: "4ZT5nC1jT6M" }
];

export const PLANS: Plan[] = [
  {
    name: "スタートプラン",
    target: "自社の業務改善をしたい方向け",
    price: { full: "398,000", installment: "18,240", fullRaw: 398000 },
    features: ["会員サイト無制限閲覧", "個別質問チャット無制限", "テンプレート共有", "個別コンサル"],
    buttonText: "詳細を見る",
    buttonStyle: "outline"
  },
  {
    name: "スタンダードプラン",
    target: "構築代行・コンサルをしたい方向け",
    price: { full: "550,000", installment: "25,200", fullRaw: 550000 },
    popular: true,
    features: ["スタートプランの全内容", "認定講師への申請権", "案件マッチング招待", "講師コンサル (計8回)"],
    buttonText: "今すぐ申し込む",
    buttonStyle: "primary"
  },
  {
    name: "プレミアムプラン",
    target: "新規事業を立ち上げたい方向け",
    price: { full: "2,000,000", installment: "91,660", fullRaw: 2000000 },
    features: ["スタンダードプランの全内容", "代表 寺山による直接コンサル", "企業研修の録画共有", "新規事業フルサポート"],
    buttonText: "お問い合わせ",
    buttonStyle: "secondary"
  }
];
