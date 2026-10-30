<template>
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ExperienceSection />
  <ContactSection />

  <ScrollToTopButton />
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import SkillsSection from '@/components/home/SkillsSection.vue'
import ExperienceSection from '@/components/home/experience/ExperienceSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import ScrollToTopButton from '@/components/common/ScrollToTopButton.vue'
</script>