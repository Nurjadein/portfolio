<template>
  <footer class="border-t border-border bg-surface-muted">
    <TheContainer>
      <div
        class="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-8
          text-sm
          md:flex-row
        "
      >
        <p class="text-foreground">
          <span dir="ltr">
            © {{ new Date().getFullYear() }} {{ t('hero.name') }}.
          </span>
          {{ t('footer.rightsReserved') }}
        </p>
      </div>
    </TheContainer>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'

const { t } = useI18n({ useScope: 'global' })
</script>