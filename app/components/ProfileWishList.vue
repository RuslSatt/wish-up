<script setup lang="ts">
const wishLists = ref([
  {
    id: 1,
    title: 'День рождения',
    giftCount: 5,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Новый год',
    giftCount: 8,
    color: 'bg-red-500',
  },
  {
    id: 3,
    title: 'Рождество',
    giftCount: 3,
    color: 'bg-green-500',
  },
  {
    id: 4,
    title: 'День святого Валентина',
    giftCount: 2,
    color: 'bg-pink-500',
  },
  {
    id: 5,
    title: 'Подарки друзьям',
    giftCount: 12,
    color: 'bg-purple-500',
  },
  {
    id: 6,
    title: 'Семейные подарки',
    giftCount: 7,
    color: 'bg-orange-500',
  },
])
</script>

<template>
  <div class="mt-4">
    <div class="grid grid-cols-2 gap-3 pb-4">
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
