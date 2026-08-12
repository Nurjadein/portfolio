<template>
  <div class="min-h-screen">
    <AppNavbar />

    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'
</script>