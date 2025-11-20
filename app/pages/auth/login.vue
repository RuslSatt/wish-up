<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const supabase = useSupabaseClient()

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
    onClick: () => {},
  },
]

const schema = z.object({
  email: z.email('Неверный email'),
  password: z.string('Пароль обязателен').min(8, 'Пароль должен быть не менее 8 символов'),
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)

  supabase.auth.signInWithOtp({
    email: payload.data.email,
    options: {
      emailRedirectTo: 'http://localhost:3000/auth/confirm',
    },
  })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        :providers="providers"
        title="Добро пожаловать обратно!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Нет аккаунта?
          <ULink to="/auth/register" class="text-primary font-medium">Создать аккаунт</ULink>.
        </template>
        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Забыли пароль?</ULink>
        </template>
        <template #footer>
          Войдя в систему, вы соглашаетесь с нашими
          <ULink to="#" class="text-primary font-medium">Условиями обслуживания</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
