// 兩種預約流程各自的入口與文案，BookingCta 與 StickyBookingBar 共用，
// 確保同一頁的區塊 CTA 與固定列一定連到同一個地方。
export interface BookingTarget {
  href: string;
  title: string;
  desc: string;
}

// 和服方案：填 Google 表單挑款式
export const kimonoBooking: BookingTarget = {
  href: "https://forms.gle/8vshVBVQCjjBJERa9",
  title: "開始預約你的和服寫真",
  desc: "填寫表單挑選喜歡的款式，支付訂金後即完成預約。",
};

// 租棚：到 frametime 選時段
export const studioBooking: BookingTarget = {
  href: "https://frametime.app/v/yaran-studio",
  title: "預約野蘭攝影棚",
  desc: "攝影棚為全預約制，請先確認時段並閱讀租棚須知後線上填表。",
};
