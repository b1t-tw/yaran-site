// 攝影方案資料。新增方案：丟一個圖片資料夾到 src/assets/images/plans/<imageDir>/，
// 並在此加一筆即可，不需新增頁面。
export interface Plan {
  /** 網址 slug，對應 /plans/<slug> */
  slug: string;
  /** 頁籤與標題顯示名稱 */
  title: string;
  /** 一句話副標（顯示於標題下方） */
  tagline?: string;
  /** 介紹段落，每個字串為一段 */
  intro: string[];
  /** src/assets/images/plans/ 底下的資料夾名 */
  imageDir: string;
}

export const plans: Plan[] = [
  {
    slug: "misora",
    title: "御空和服",
    tagline: "佔位副標 — 御空和服",
    intro: [
      "這是御空和服方案的介紹佔位文字。請在此描述和服的風格、色調與適合的拍攝氛圍，讓客人快速理解這套方案的特色。",
      "第二段佔位文字。可以說明包含的內容、拍攝流程、或是這套和服背後的故事與設計理念。",
    ],
    imageDir: "misora",
  },
  {
    slug: "blue-magpie",
    title: "藍鵲和服",
    tagline: "佔位副標 — 藍鵲和服",
    intro: [
      "這是藍鵲和服方案的介紹佔位文字。請在此描述和服的風格、色調與適合的拍攝氛圍。",
      "第二段佔位文字。可以補充方案細節、搭配道具、或推薦的拍攝場景。",
    ],
    imageDir: "blue-magpie",
  },
];

export const getPlan = (slug: string) => plans.find((p) => p.slug === slug);
