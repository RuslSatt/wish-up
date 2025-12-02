<script setup lang="ts">
const store = useWishListStore()

const open = ref(false)
const name = ref<string>('')

const onCreate = async () => {
  await store.addItem({ name: name.value })
  name.value = ''
  open.value = false
}
</script>

<template>
  <UDrawer v-model:open="open">
    <UButton> Создать список желаний </UButton>

    <template #content>
      <div class="flex flex-col h-full w-full p-2 pb-5 gap-5">
        <div class="flex items-center justify-center">
          <h3 class="mt-auto text-xs">Создайте список желаний</h3>
        </div>
        <UFormField size="lg" class="w-full" label="Название">
          <UInput v-model="name" class="w-full" placeholder="День рождения" />
        </UFormField>
        <div class="flex items-center justify-center">
          <UButton
            :loading="store.isLoading"
            :onclick="onCreate"
            icon="i-lucide-check"
            variant="outline"
            >Сохранить</UButton
          >
        </div>
      </div>
    </template>
  </UDrawer>
</template>
