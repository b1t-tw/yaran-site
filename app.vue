<script setup>
import "./assets/css/font.css";
import "./assets/css/main.css";

const route = useRoute();

useHead({
  title: `${route.meta.title} - YARAN 野蘭攝影棚`,
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo_icon.png",
    }
  ],
  meta: [
    {
      property: "og:title",
      content: `${route.meta.title} - YARAN 野蘭攝影棚`,
    },
    {
      property: "og:description", content: "YARAN 野蘭攝影棚",
    }]
});


</script>
<template>
  <NuxtPage />
  <footer class="bg-primary-dark text-primary-light py-20">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3 class="mb-4">YARAN 野蘭攝影棚</h3>
          <div class="grid grid-cols-[1.5rem_1fr] items-center gap-2">
            <Icon>distance</Icon><span>臺北市南港區忠孝東路六段81巷4號2樓</span>
            <Icon>mail</Icon><span><a href="mailto:info@yaran.studio">info@yaran.studio</a></span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </footer>
</template>
