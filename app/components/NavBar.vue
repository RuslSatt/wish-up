<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const tools = ref([
  { route: 'dashboard', icon: 'i-lucide-store' },
  { route: 'friends', icon: 'i-lucide-users' },
  { route: 'add', icon: 'i-lucide-plus' },
  { route: 'notifications', icon: 'i-lucide-bell' },
  { route: 'profile', icon: 'i-lucide-user' },
])

const isActive = (toolRoute: string) => {
  if (toolRoute === 'dashboard') {
    return route.name === 'dashboard'
  }
  return route.name === toolRoute
}

const navigateTo = (toolRoute: string) => {
  if (toolRoute === 'add') {
    return
  }
  router.push(`/${toolRoute}`)
}
</script>

<template>
  <nav class="mt-auto p-4">
    <ul class="flex items-center justify-around">
      <li v-for="tool in tools" :key="tool.icon">
        <UButton
          :class="{
            'text-black dark:text-white': isActive(tool.route),
            'text-gray-400 dark:text-gray-600': !isActive(tool.route),
          }"
          :variant="tool.route === 'add' ? 'outline' : 'link'"
          :icon="tool.icon"
          @click="navigateTo(tool.route)"
        />
      </li>
    </ul>
  </nav>
</template>
