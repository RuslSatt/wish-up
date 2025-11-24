<script setup lang="ts">
const tools = ref([
  { route: 'dashboard', icon: 'i-lucide-store' },
  { route: 'friends', icon: 'i-lucide-users' },
  { route: 'add', icon: 'i-lucide-plus' },
  { route: 'notifications', icon: 'i-lucide-bell' },
  { route: 'profile', icon: 'i-lucide-user' },
])
</script>

<template>
  <nav class="mt-auto p-4">
    <ul class="flex items-center justify-around">
      <li v-for="tool in tools" :key="tool.icon">
        <UButton :variant="tool.route === 'add' ? 'outline' : 'link'" :icon="tool.icon" />
      </li>
    </ul>
  </nav>
</template>
