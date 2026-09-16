<template>
  <div class="min-h-screen bg-background text-foreground">
    <TechnicalBackground />

    <AppNavbar class="relative z-10" />

    <main class="relative z-10">
      <RouterView />
    </main>

    <DialogHost />

    <AppFooter class="relative z-10" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import TechnicalBackground from '@/components/background/technical/TechnicalBackground.vue'
import AppFooter from '@/components/common/AppFooter.vue'
import AppNavbar from '@/components/common/AppNavbar.vue'
import DialogHost from '@/dialogs/DialogHost.vue'
</script>