// 攝影方案資料。新增方案：丟一個圖片資料夾到 src/assets/images/plans/<imageDir>/，
// 並在此加一筆即可，不需新增頁面。/plans 頁面與 Meta 商品目錄摘要（/meta-catalog.xml）都讀這裡。

// 方案類別與價目（單位：新台幣）
export const planTypes = {
  A: { title: "滿版小紋和服", price: 6999, was: 7950 },
  B: { title: "精緻訪問着", price: 7500, was: 8600 },
  C: { title: "和洋折衷", price: 6888, was: 7600 },
  D: { title: "浴衣", price: 6888, was: 7600 },
};

export type PlanTypeKey = keyof typeof planTypes;

/** 類別顯示名稱，例如 "A 滿版小紋和服" */
export const planTypeLabel = (key: PlanTypeKey) => `${key} ${planTypes[key].title}`;

// 每個方案都包含的內容
export const planIncludes = [
  {
    icon: "mdi:scissors",
    label: "Styling",
    title: "精緻造型",
    desc: "包含「完整妝髮設計」與「專業和服着付」，含免費租借和服及配件。",
  },
  {
    icon: "mdi:camera",
    label: "Photography",
    title: "專業攝影",
    desc: "提供 6 張精修照片（可依需求加價增修）並全數贈送所有調色毛片。",
  },
  {
    icon: "mdi:gift",
    label: "Keepsake",
    title: "專屬紀念",
    desc: "贈送一張實體照片，或可選擇體驗獨特的現場藍晒製作，帶走充滿手作溫度的顯影回憶。",
  },
];

export interface Plan {
  /** 網址 slug，對應 /plans/<slug> */
  slug: string;
  /** 頁籤與標題顯示名稱 */
  title: string;
  /** src/assets/images/plans/ 底下的資料夾名 */
  imageDir: string;
  type: PlanTypeKey;
  intro?: string;
}

export const plans: Plan[] = [
  {
    slug: "misora/1",
    title: "蛇皮小紋",
    imageDir: "misora/蛇皮",
    type: "A",
    intro: "身高 169cm 以內\n袖長 67.5cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/2",
    title: "西洋棋小紋",
    imageDir: "misora/西洋棋",
    type: "A",
    intro: "身高 173cm 以內\n袖長 67cm\n臀圍 104cm 以內"
  },
  {
    slug: "misora/3",
    title: "黑色麻葉小紋",
    imageDir: "misora/黑色麻葉",
    type: "A",
    intro: "身高 169cm 以內\n袖長 66cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/4",
    title: "白色鴛鴦訪問着",
    imageDir: "misora/白色鴛鴦訪問着",
    type: "B",
    intro: "身高 163cm 以內\n袖長 66cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/5",
    title: "銀色單層訪問着",
    imageDir: "misora/銀色單層訪問着",
    type: "B",
    intro: "身高 171cm 以內\n袖長 68cm\n臀圍 106cm 以內"
  },
  {
    slug: "misora/6",
    title: "紅色留袖",
    imageDir: "misora/紅色留袖",
    type: "B",
    intro: "身高 165cm 以內\n袖長 67cm\n臀圍 103cm 以內"
  },
  {
    slug: "yamamusume/1",
    title: "哈密瓜",
    imageDir: "yamamusume/哈密瓜",
    type: "C",
    intro: "衣長：138.5cm\n袖長：63cm\n適合身高：158cm\n適合臀圍：95cm"
  },
  {
    slug: "yamamusume/2",
    title: "菱形火焰",
    imageDir: "yamamusume/菱形火焰",
    type: "C",
    intro: "衣長：162cm\n袖長：65.5cm\n適合身高：172cm\n適合臀圍：105cm"
  },
  {
    slug: "yamamusume/3",
    title: "紅粉方格",
    imageDir: "yamamusume/紅粉方格",
    type: "C",
    intro: "衣長：154cm\n袖長：62cm\n適合身高：174cm\n適合臀圍：105cm"
  },
  {
    slug: "yamamusume/4",
    title: "黑色點點",
    imageDir: "yamamusume/黑色點點",
    type: "C",
    intro: "衣長：150cm\n袖長：61cm\n適合身高：170cm\n適合臀圍：105cm"
  },
  {
    slug: "yamamusume/5",
    title: "彩虹扇紋",
    imageDir: "yamamusume/彩虹扇紋",
    type: "C",
    intro: "衣長：152cm\n袖長：63cm\n適合身高：172cm\n適合臀圍：105cm"
  },
  {
    slug: "yukata/1",
    title: "紅茶花",
    imageDir: "yukata/紅茶花",
    type: "D",
    intro: "衣長：約162cm\n袖長：約49cm\n裄：約67cm\n適合身高：157-167cm\n臀圍：100cm以內"
  },
  {
    slug: "yukata/2",
    title: "小雛菊",
    imageDir: "yukata/小雛菊",
    type: "D",
    intro: "衣長：約162cm\n袖長：約49cm\n裄：約67cm\n適合身高：157-167cm\n臀圍：100cm以內"
  },
  {
    slug: "yukata/3",
    title: "藍金魚",
    imageDir: "yukata/藍金魚",
    type: "D",
    intro: "衣長：約162cm\n袖長：約49cm\n裄：約67cm\n適合身高：157-167cm\n臀圍：100cm以內"
  },
  {
    slug: "yukata/4",
    title: "白茶花",
    imageDir: "yukata/白茶花",
    type: "D",
    intro: "（大尺碼2L～3L)\n長度：163cm\n袖長：49cm\n裄：68cm\n胸圍：93-108cm\n前片寬度：26.5cm\n後片寬度：30cm\n適合身高：約155-165cm\n適合臀圍：103cm以內"
  },
  {
    slug: "yukata/5",
    title: "深藍桔梗",
    imageDir: "yukata/深藍桔梗",
    type: "D",
    intro: "衣長：約162cm\n袖長：約49cm\n裄：約67cm\n適合身高：157-167cm\n臀圍：100cm以內"
  },
];

export const getPlan = (slug: string) => plans.find((p) => p.slug === slug);
