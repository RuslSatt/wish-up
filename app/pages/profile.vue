<script setup lang="ts">
const user = useSupabaseUser()

onMounted(() => {})
</script>

<template>
  <div class="h-full p-2">
    <header class="flex items-center w-full">
      <UButton
        class="justify-items-start"
        icon="i-lucide-arrow-left"
        variant="link"
        color="neutral"
      />
      <h1 class="flex-1 text-center">Профиль</h1>
      <UButton
        class="justify-items-start"
        icon="i-lucide-settings"
        variant="link"
        color="neutral"
      />
    </header>
    <div class="flex flex-col items-center gap-3 justify-center pt-5">
      <UAvatar src="/images/ava.jpg" size="3xl" />
      <p>{{ user?.email }}</p>
      <div class="flex gap-2 w-full justify-center items-center">
        <UButton variant="subtle" color="neutral" class="flex-1 flex justify-center" size="sm"
          >Редактировать</UButton
        >
        <UButton variant="subtle" color="neutral" class="flex-1 flex justify-center" size="sm"
          >Поделиться</UButton
        >
      </div>
    </div>
  </div>
</template>
