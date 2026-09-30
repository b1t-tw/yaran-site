import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import { plans, planTypes, planTypeLabel, planIncludes } from "../data/plans";
import { loadImages } from "../lib/gallery";

// Meta 商品目錄資料摘要（RSS XML）。build 時由 plans.ts 產生，部署後在
// Commerce Manager → 目錄 → 資料來源 → 資料摘要 → 排定摘要 填入 https://yaran.studio/meta-catalog.xml，
// Meta 會定期抓取，網站更新方案後不需手動同步。
// 欄位規格：https://developers.facebook.com/docs/marketing-api/catalog/reference/

const BRAND = "野蘭攝影棚";
const CURRENCY = "TWD";
// additional_image_link 上限：20 張、整串網址 2000 字元
const MAX_EXTRA_IMAGES = 20;
const MAX_EXTRA_IMAGES_CHARS = 2000;

const tag = (name: string, value: string) =>
  `<${name}>${value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</${name}>`;

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error("meta-catalog.xml 需要在 astro.config 設定 site");
  const abs = (path: string) => new URL(path, site).href;

  const items = await Promise.all(
    plans.map(async (plan) => {
      const type = planTypes[plan.type];
      // Meta 圖片需為 JPG/PNG 且至少 500×500；順序沿用照片集，第一張為主圖
      const images = await Promise.all(
        (await loadImages(`plans/${plan.imageDir}`))
          .slice(0, 1 + MAX_EXTRA_IMAGES)
          .map(async (src) => abs((await getImage({ src, format: "jpg", quality: 85, width: 1080 })).src)),
      );
      const [mainImage, ...rest] = images;
      if (!mainImage) throw new Error(`方案 ${plan.slug} 沒有圖片，無法產生商品目錄`);

      const extraImages: string[] = [];
      let chars = 0;
      for (const url of rest) {
        chars += url.length + (extraImages.length ? 1 : 0);
        if (chars > MAX_EXTRA_IMAGES_CHARS) break;
        extraImages.push(url);
      }

      const description = [
        `${planTypeLabel(plan.type)}｜${plan.title}`,
        `體驗價 NT$${type.price.toLocaleString("en-US")}（原價 NT$${type.was.toLocaleString("en-US")}）`,
        plan.intro && `尺寸\n${plan.intro}`,
        `方案內容\n${planIncludes.map((i) => `・${i.title}：${i.desc}`).join("\n")}`,
      ]
        .filter(Boolean)
        .join("\n\n");

      return [
        "<item>",
        tag("g:id", plan.slug.replaceAll("/", "-")),
        tag("g:title", `${type.title}｜${plan.title}`),
        tag("g:description", description),
        tag("g:link", abs(`/plans/${plan.slug}/`)),
        tag("g:image_link", mainImage),
        ...extraImages.map((url) => tag("additional_image_link", url)),
        tag("g:brand", BRAND),
        tag("g:condition", "new"),
        tag("g:availability", "in stock"),
        tag("g:price", `${type.was} ${CURRENCY}`),
        tag("g:sale_price", `${type.price} ${CURRENCY}`),
        tag("g:product_type", planTypeLabel(plan.type)),
        "</item>",
      ].join("\n");
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">',
    "<channel>",
    tag("title", `${BRAND} 和服方案`),
    tag("link", abs("/plans/")),
    tag("description", `${BRAND} 和服寫真方案商品目錄`),
    ...items,
    "</channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
