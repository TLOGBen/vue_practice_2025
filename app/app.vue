<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()

useHead({
  title: `XX系統 - ${route.meta.title}`,
})
</script>
