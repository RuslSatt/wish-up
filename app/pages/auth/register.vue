<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()

const fields: AuthFormField[] = [
  {
    name: 'email',
    type: 'email',
    label: 'Email адрес',
    placeholder: 'Введите ваш email',
    required: true,
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
    placeholder: 'Введите ваш пароль',
    required: true,
  },
  {
    name: 'remember',
    label: 'Запомнить меня',
    type: 'checkbox',
  },
]

const providers = [
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    onClick: () => {
      toast.add({ title: 'Google', description: 'Login with Google' })
    },
  },
]

const schema = z.object({
  email: z.email('Неверный email'),
  password: z.string('Пароль обязателен').min(8, 'Пароль должен быть не менее 8 символов'),
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="Создать аккаунт"
        description="Введите ваши учетные данные для доступа к вашему аккаунту."
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      >
        <template #description>
          Уже есть аккаунт?
          <ULink to="/login" class="text-primary font-medium">Войти</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
