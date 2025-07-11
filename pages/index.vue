<script setup>
  import { ref, onMounted } from 'vue';

  definePageMeta({
    title: "首頁",
  });

  const logoRef = ref(null);
  const isVisible = ref(false);

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
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
  <div class="h-svh w-full flex items-center justify-center">
    <img 
      ref="logoRef"
      src="/logo_h_gold.png" 
      alt="Yaran 野蘭攝影棚" 
      class="w-1/2 fade-up" 
      :class="{ 'animate': isVisible }"
    />
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
</style>