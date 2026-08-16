<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
  <!-- Background Effects -->
  <div class="fixed inset-0 z-0 overflow-hidden">

    <!-- Grid -->
    <div
      class="absolute inset-0 opacity-20
      bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),
      linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
      bg-size[80px_80px]"
    ></div>

    <!-- Glow 1 -->
    <div
      class="absolute left-0 top-0 h-160 w-160 blur-[180px] rounded-full bg-violet-600/30 "
    />

    <!-- Glow 2 -->
    <div
      class="absolute right-0 top-40 h-160 w-160 blur-[180px] rounded-full bg-indigo-600/30 "
    />

    <!-- Glow 3 -->
    <div
      class="absolute bottom-0 left-1/3 h-160 w-160 blur-[180px] rounded-full bg-violet-600/30 "
    />
  </div>

  <AppNavbar class="relative z-10" />

  <main class="relative z-10">
    <RouterView />
  </main>

  <AppFooter class="relative z-10" />
</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppFooter from '@/components/common/AppFooter.vue'
import AppNavbar from '@/components/common/AppNavbar.vue'
</script>