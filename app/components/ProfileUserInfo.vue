<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
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
</template>
