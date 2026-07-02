import { getImage } from "astro:assets";

// glob 的 pattern 必須是字串字面值，所以掃整個 images 後再依 dir 過濾。
// 用 lazy glob（不加 eager），只 await 需要的子集，避免每個 instance 都載入全部圖片 metadata。
const allImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}",
);

/** 取得指定資料夾（相對於 src/assets/images）內排序後的原始圖片 metadata */
export async function loadImages(dir: string): Promise<ImageMetadata[]> {
  const prefix = `/src/assets/images/${dir.replace(/^\/|\/$/g, "")}/`;
  const mods = await Promise.all(
    Object.entries(allImages)
      .filter(([path]) => path.startsWith(prefix))
      .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
      .map(([, load]) => load()),
  );
  return mods.map((m) => m.default);
}

/** 縮圖 + 燈箱大圖（webp）的資料，供 gallery / swiper 共用 */
export async function loadGalleryItems(dir: string) {
  const images = await loadImages(dir);
  return Promise.all(
    images.map(async (thumb) => ({
      thumb,
      full: await getImage({ src: thumb, format: "webp", quality: 82, width: 1600 }),
    })),
  );
}
