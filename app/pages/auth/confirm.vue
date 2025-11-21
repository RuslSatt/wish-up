<script setup lang="ts">
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const supabase = useSupabaseClient()
const route = useRoute()

const email = computed(() => {
  return (route.query.email as string) || ''
})

const fields: AuthFormField[] = [
  {
    name: 'code',
    type: 'otp',
    label: 'Код подтверждения',
    required: true,
    length: 6,
  },
]

interface Schema {
  code: string[]
}

onMounted(() => {
  if (!email.value) {
    navigateTo('/auth/login')
  }
})

const isLoading = ref<boolean>(false)

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (!email.value) {
    return
  }

  isLoading.value = true

  const { data, error } = await supabase.auth.verifyOtp({
    email: email.value,
    token: payload.data.code.join(''),
    type: 'email',
  })

  isLoading.value = false

  if (error) {
    console.error('Ошибка подтверждения:', error)
    return
  }

  if (data?.user) {
    navigateTo('/profile')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :fields="fields"
        :loading="isLoading"
        title="Подтвердите вход"
        description="Введите 6-значный код, отправленный на ваш email"
        icon="i-lucide-shield-check"
        @submit="onSubmit"
      >
        <template #footer>
          Не получили код?
          <ULink to="/auth/login" class="text-primary font-medium"> Отправить повторно </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
