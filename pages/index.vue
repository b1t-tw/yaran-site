<script setup>
import { ref, onMounted } from 'vue';

definePageMeta({
  title: "首頁",
});

const logoRef = ref(null);
const scrollIconRef = ref(null);
const isVisible = ref(false);
const showScrollIcon = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // Show scroll icon after logo animation completes
          setTimeout(() => {
            showScrollIcon.value = true;
          }, 1500);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  if (logoRef.value) {
    observer.observe(logoRef.value);
  }
});
</script>

<template>
  <div class="h-svh w-full flex items-center justify-center relative">
    <div ref="logoRef" class="w-1/2 fade-up" :class="{ 'animate': isVisible }">
      <img src="/logo_h_gold.png" alt="Yaran 野蘭攝影棚" class="w-full max-md:hidden" />
      <img src="/logo_v_gold.png" alt="Yaran 野蘭攝影棚" class="w-full md:hidden" />
    </div>
    
    <!-- Scroll down icon -->
    <div 
      ref="scrollIconRef"
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-down-icon"
      :class="{ 'show': showScrollIcon }"
    >
      <div class="flex flex-col items-center">
        <Icon class="text-2xl mb-1">keyboard_arrow_down</Icon>
        <span class="text-sm opacity-70">向下滾動</span>
      </div>
    </div>
  </div>
  <div class="w-full bg-primary-light text-primary-dark">
    <div class="container grid grid-cols-1 md:grid-cols-2 py-20 gap-8">
      <div class="flex flex-col justify-center">
        <h2 class="mb-4">交通方式</h2>
        <div class="grid grid-cols-[1.5rem_1fr] items-center gap-2">
          <Icon>directions_railway_2</Icon><span>捷運後山埤站4號出口，步行約6分鐘</span>
          <Icon>directions_bus</Icon><span>聯合醫院忠孝院區站，步行約1分鐘</span>
          <Icon>directions_car</Icon>
          <span><a target="_blank" href="https://maps.app.goo.gl/gH8bDAB13MsLYKyk7">168 Parking (昆陽一場)</a>，步行約1分鐘</span>
        </div>
      </div>
      <div class="drop-shadow-lg min-h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6451365723887!2d121.58371056957773!3d25.048305098612953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab005f0bb4e7%3A0xc74c815ec0860d48!2zWWFyYW4g6YeO6Jit5pSd5b2x5qOa!5e0!3m2!1szh-TW!2stw!4v1752257053005!5m2!1szh-TW!2stw"
          width="100%" height="100%" style="border:0; border-radius: 1rem;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" title="Google Map">
        </iframe>
      </div>
    </div>
    <div class="container pb-20">
      <h2 class="mb-4">預約方式</h2>
      <p>攝影棚籌備中，尚未開放預約，敬請期待</p>
    </div>
  </div>
</template>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}

.fade-up.animate {
  opacity: 1;
  transform: translateY(0);
}

.scroll-down-icon {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.scroll-down-icon.show {
  opacity: 1;
  transform: translateY(0);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>