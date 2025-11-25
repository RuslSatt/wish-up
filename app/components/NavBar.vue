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

const actions = ref([
  {
    name: 'Список желаний',
    icon: 'i-lucide-layout-template',
  },
  {
    name: 'Подарок',
    icon: 'i-lucide-gift',
  },
])

const isActive = (toolRoute: string) => {
  return route.name === toolRoute
}

const navigateTo = (toolRoute: string) => {
  router.push(`/${toolRoute}`)
}
</script>

<template>
  <nav class="mt-auto p-4">
    <ul class="flex items-center justify-around">
      <li v-for="tool in tools" :key="tool.icon">
        <UButton
          v-if="tool.route !== 'add'"
          :class="{
            'text-black dark:text-white': isActive(tool.route),
            'text-gray-400 dark:text-gray-600': !isActive(tool.route),
          }"
          variant="link"
          :icon="tool.icon"
          @click="navigateTo(tool.route)"
        />

        <UDrawer v-if="tool.route === 'add'">
          <UButton variant="outline" :icon="tool.icon" />

          <template #content>
            <div class="flex flex-col items-center justify-center h-full w-full p-2 pb-5 gap-5">
              <h3 class="mt-auto text-xs">Создайте что-нибудь</h3>
              <ul class="flex gap-10">
                <li
                  v-for="action in actions"
                  :key="action.name"
                  class="flex flex-col items-center gap-1"
                >
                  <UButton
                    color="neutral"
                    variant="outline"
                    :icon="action.icon"
                    size="xl"
                    :title="action.name"
                  />
                  <span class="text-[0.5rem]">{{ action.name }}</span>
                </li>
              </ul>
            </div>
          </template>
        </UDrawer>
      </li>
    </ul>
  </nav>
</template>
