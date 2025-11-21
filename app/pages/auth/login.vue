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
    name: 'remember',
    label: 'Запомнить меня',
    type: 'checkbox',
  },
]

const schema = z.object({
  email: z.email('Неверный email'),
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: payload.data.email,
    options: {
      emailRedirectTo: 'http://localhost:3000/auth/confirm',
    },
  })

  if (error) return

  if (data) {
    navigateTo({
      path: '/auth/confirm',
      query: { email: payload.data.email },
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Добро пожаловать обратно!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #footer>
          Войдя в систему, вы соглашаетесь с нашими
          <ULink to="#" class="text-primary font-medium">Условиями обслуживания</ULink>.
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
