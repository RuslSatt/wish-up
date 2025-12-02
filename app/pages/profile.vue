<script setup lang="ts">
import ProfileHeader from '~/components/ProfileHeader.vue'
import ProfileUserInfo from '~/components/ProfileUserInfo.vue'
import ProfileWishList from '~/components/ProfileWishList.vue'
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden px-2">
    <ProfileHeader />
    <div class="flex-1 overflow-y-auto flex flex-col">
      <ProfileUserInfo />
      <ProfileWishList />
    </div>
  </div>
</template>
