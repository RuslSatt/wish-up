<script setup lang="ts">
interface WishListItem {
  id: number
  title: string
  giftCount: number
  color: string
}

const wishLists = ref<WishListItem[]>([])
</script>

<template>
  <div class="mt-4 h-full">
    <div v-if="!wishLists?.length" class="flex items-center justify-center h-full">
      <UButton> Создать список желаний </UButton>
    </div>

    <div v-if="wishLists?.length" class="grid grid-cols-2 gap-3 pb-4">
      <div
        v-for="wishList in wishLists"
        :key="wishList.id"
        class="bg-accented p-2 rounded-2xl cursor-pointer transition-all hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <div
          :class="[wishList.color, 'w-full h-24 rounded-lg mb-3 flex items-center justify-center']"
        >
          <UIcon name="i-lucide-gift" class="text-white text-3xl" />
        </div>
        <h3 class="font-medium text-sm mb-1 line-clamp-1">{{ wishList.title }}</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ wishList.giftCount }}
          {{
            wishList.giftCount === 1 ? 'подарок' : wishList.giftCount < 5 ? 'подарка' : 'подарков'
          }}
        </p>
      </div>
    </div>
  </div>
</template>
