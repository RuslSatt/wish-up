<script setup lang="ts">
import type { ToolItem } from './NavBar.vue'

const user = useSupabaseUser()

defineProps<{
  tool: ToolItem
  isActive: (value: string) => boolean
  navigateTo: (value: string) => void
}>()
</script>

<template>
  <UButton
    :class="{
      'border-white dark:text-white': isActive(tool.route),
      'rounded-3xl': true,
    }"
    :avatar="{
      size: 'xs',
      src: user?.user_metadata?.avatar ?? 'https://github.com/nuxt.png',
    }"
    :variant="isActive(tool.route) ? 'outline' : 'link'"
    @click="navigateTo(tool.route)"
  />
</template>
