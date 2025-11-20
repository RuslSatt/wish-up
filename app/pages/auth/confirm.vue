<script setup lang="ts">
const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      console.log('User logged in', user.value)
      return navigateTo('/')
    }
  },
  { immediate: true },
)
</script>

<template>
  <div>Waiting for login...</div>
</template>
