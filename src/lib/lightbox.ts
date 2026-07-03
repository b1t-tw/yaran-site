import type PhotoSwipeLightbox from "photoswipe/lightbox";
import "../styles/lightbox.css";

/** 讀取 slide 圖說：支援 element gallery 的 data-pswp-caption 與 dataSource 的 caption 欄位 */
function slideCaption(pswp: any): string {
  const data = pswp.currSlide?.data;
  return data?.element?.dataset.pswpCaption ?? data?.caption ?? "";
}

/**
 * 為 PhotoSwipe 燈箱補上共用增強：換頁滑動動畫、底部圓點 pagination、（選用）底部圖說。
 * PhotoGallery 與 ImageSwiper 共用，避免兩邊燈箱行為分歧。
 * @param hasCaptions 有任一張帶圖說時保留底部留白並顯示圖說列
 */
export function enhanceLightbox(lightbox: PhotoSwipeLightbox, hasCaptions = false) {
  // 有圖說時照片不滿版：底部留白放圖說（padding 讓圖片縮進內側）
  if (hasCaptions) {
    lightbox.options.padding = { top: 20, bottom: 96, left: 16, right: 16 };
  }

  lightbox.on("uiRegister", () => {
    const pswp = lightbox.pswp as any;
    if (!pswp) return;

    // PhotoSwipe 的 goTo/next/prev 預設不帶動畫（moveIndexBy 少了 animate 參數），覆寫成帶
    // animate=true，讓箭頭/鍵盤/圓點換頁都有滑動過場。屬 viewer 層行為，與底下 UI 元件無關。
    pswp.goTo = (index: number) => {
      pswp.mainScroll.moveIndexBy(pswp.getLoopedIndex(index) - pswp.potentialIndex, true);
    };

    // 圖說（顯示在底部留白區）
    if (hasCaptions) {
      pswp.ui?.registerElement({
        name: "customCaption",
        className: "pswp__custom-caption",
        appendTo: "wrapper",
        onInit: (container: HTMLElement, pswp: any) => {
          const update = () => {
            container.textContent = slideCaption(pswp);
          };
          pswp.on("change", update);
          update();
        },
      });
    }

    // 燈箱底部圓點 pagination（PhotoSwipe 原生無此 UI，需自訂）
    pswp.ui?.registerElement({
      name: "bulletsIndicator",
      className: "pswp__bullets-indicator",
      appendTo: "wrapper",
      onInit: (container: HTMLElement, pswp: any) => {
        const bullets: HTMLElement[] = [];
        for (let i = 0; i < pswp.getNumItems(); i++) {
          const bullet = document.createElement("button");
          bullet.className = "pswp__bullet";
          bullet.type = "button";
          bullet.setAttribute("aria-label", `第 ${i + 1} 張`);
          bullet.onclick = () => pswp.goTo(i);
          container.appendChild(bullet);
          bullets.push(bullet);
        }
        const sync = () =>
          bullets.forEach((b, i) => b.classList.toggle("pswp__bullet--active", i === pswp.currIndex));
        pswp.on("change", sync);
        sync();
      },
    });
  });
}
