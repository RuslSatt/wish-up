<script setup lang="ts"></script>

<template>
  <UDrawer>
    <UButton> Создать список желаний </UButton>

    <template #content>
      <div class="flex flex-col h-full w-full p-2 pb-5 gap-5">
        <div class="flex items-center justify-center">
          <h3 class="mt-auto text-xs">Создайте список желаний</h3>
        </div>
        <UFormField size="lg" class="w-full" label="Название">
          <UInput class="w-full" placeholder="День рождения" />
        </UFormField>
        <div class="flex items-center justify-center">
          <UButton icon="i-lucide-check" variant="outline">Сохранить</UButton>
        </div>
      </div>
    </template>
  </UDrawer>
</template>
