// 攝影方案資料。新增方案：丟一個圖片資料夾到 src/assets/images/plans/<imageDir>/，
// 並在此加一筆即可，不需新增頁面。
export interface Plan {
  /** 網址 slug，對應 /plans/<slug> */
  slug: string;
  /** 頁籤與標題顯示名稱 */
  title: string;
  /** src/assets/images/plans/ 底下的資料夾名 */
  imageDir: string;
  type: string;
  intro?: string;
}

export const plans: Plan[] = [
  {
    slug: "misora/1",
    title: "蛇皮小紋",
    imageDir: "misora/蛇皮",
    type: "A 滿版小紋和服",
    intro: "身高 169cm 以內\n袖長 67.5cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/2",
    title: "西洋棋小紋",
    imageDir: "misora/西洋棋",
    type: "A 滿版小紋和服",
    intro: "身高 173cm 以內\n袖長 67cm\n臀圍 104cm 以內"
  },
  {
    slug: "misora/3",
    title: "黑色麻葉小紋",
    imageDir: "misora/黑色麻葉",
    type: "A 滿版小紋和服",
    intro: "身高 169cm 以內\n袖長 66cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/4",
    title: "白色鴛鴦訪問着",
    imageDir: "misora/白色鴛鴦訪問着",
    type: "B 精緻訪問着",
    intro: "身高 163cm 以內\n袖長 66cm\n臀圍 103cm 以內"
  },
  {
    slug: "misora/5",
    title: "銀色單層訪問着",
    imageDir: "misora/銀色單層訪問着",
    type: "B 精緻訪問着",
    intro: "身高 171cm 以內\n袖長 68cm\n臀圍 106cm 以內"
  },
  {
    slug: "misora/6",
    title: "紅色留袖",
    imageDir: "misora/紅色留袖",
    type: "B 精緻訪問着",
    intro: "身高 165cm 以內\n袖長 67cm\n臀圍 103cm 以內"
  },
  {
    slug: "momoe/1",
    title: "哈密瓜",
    imageDir: "momoe/哈密瓜",
    type: "C 和洋折衷",
    intro: "衣長：138.5cm\n袖長：63cm\n適合身高：158cm\n適合臀圍：95cm"
  },
  {
    slug: "momoe/2",
    title: "菱形火焰",
    imageDir: "momoe/菱形火焰",
    type: "C 和洋折衷",
    intro: "衣長：162cm\n袖長：65.5cm\n適合身高：172cm\n適合臀圍：105cm"
  },
  {
    slug: "momoe/3",
    title: "紅粉方格",
    imageDir: "momoe/紅粉方格",
    type: "C 和洋折衷",
    intro: "衣長：154cm\n袖長：62cm\n適合身高：174cm\n適合臀圍：105cm"
  },
  {
    slug: "momoe/4",
    title: "黑色點點",
    imageDir: "momoe/黑色點點",
    type: "C 和洋折衷",
    intro: "衣長：150cm\n袖長：61cm\n適合身高：170cm\n適合臀圍：105cm"
  },
  {
    slug: "momoe/5",
    title: "彩虹扇紋",
    imageDir: "momoe/彩虹扇紋",
    type: "C 和洋折衷",
    intro: "衣長：152cm\n袖長：63cm\n適合身高：172cm\n適合臀圍：105cm"
  },
];

export const getPlan = (slug: string) => plans.find((p) => p.slug === slug);
