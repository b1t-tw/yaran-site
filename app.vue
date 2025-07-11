<script setup>
import "./assets/css/main.css";
import "./assets/css/font.css";

const route = useRoute();

useHead({
  title: `${route.meta.title} - Yaran 野蘭攝影棚`,
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo_icon.png",
    },
  ],
  meta: [
    {
      property: "og:title",
      content: `${route.meta.title} - Yaran 野蘭攝影棚`,
    },
    {
      property: "og:description", content: "Yaran 野蘭攝影棚",
    }]
});
</script>
<template>
  <NuxtPage />
</template>
