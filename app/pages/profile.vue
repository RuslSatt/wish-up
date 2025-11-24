<script setup lang="ts">
const user = useSupabaseUser()

onMounted(() => {})
</script>

<template>
  <div class="flex flex-col h-screen">
    <div>Страница пользователя: {{ user?.email }}</div>
    <NavBar />
  </div>
</template>
