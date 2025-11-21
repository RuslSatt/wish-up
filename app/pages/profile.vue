<script setup lang="ts">
const user = useSupabaseUser()

onMounted(() => {})
</script>

<template>
  <div>Страница пользователя: {{ user?.email }}</div>
</template>
