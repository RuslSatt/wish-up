<script setup lang="ts">
const user = useSupabaseUser()

onMounted(() => {})
</script>

<template>
  <div>
    <div>Страница пользователя: {{ user?.email }}</div>
  </div>
</template>
