<script setup lang="ts">
const store = useWishListStore()

onMounted(async () => {
  await store.fetchItems()
})
</script>

<template>
  <div class="mt-4 h-full">
    <div v-if="store.isLoading" class="grid grid-cols-2 gap-3 pb-4">
      <USkeleton v-for="n in 6" :key="n" class="w-full bg-default h-36 rounded-lg" />
    </div>

    <div v-else-if="!store.items?.length" class="flex items-center justify-center h-full">
      <CreatingWishList />
    </div>

    <div v-else class="grid grid-cols-2 gap-3 pb-4">
      <div
        v-for="wishList in store.items"
        :key="wishList.id"
        class="bg-accented p-2 rounded-2xl cursor-pointer transition-all hover:scale-105 hover:shadow-lg active:scale-95"
      >
        <div
          :class="[wishList.color, 'w-full h-24 rounded-lg mb-3 flex items-center justify-center']"
        >
          <UIcon name="i-lucide-gift" class="text-white text-3xl" />
        </div>
        <h3 class="font-medium text-sm mb-1 line-clamp-1">{{ wishList.name }}</h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {{ wishList.giftCount }}
          {{
            wishList.giftCount === 1
              ? 'подарок'
              : (wishList.giftCount ?? 0 < 5)
                ? 'подарка'
                : 'подарков'
          }}
        </p>
      </div>
    </div>
  </div>
</template>
