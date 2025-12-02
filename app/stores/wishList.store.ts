import { defineStore } from 'pinia'

export interface WishListItem {
  id: number
  name: string
  created_at?: string
  giftCount?: number
  color?: string
}

export interface WishListItemDTO {
  name: string
}

export const useWishListStore = defineStore('wishlists', () => {
  const items = ref<WishListItem[]>([])
  const isLoading = ref<boolean>(false)

  const supabase = useSupabaseClient()

  async function addItem(dto: WishListItemDTO) {
    isLoading.value = true

    const { data, error } = await supabase.from('wish_lists').insert(dto).select()

    if (data) {
      items.value = [...data]
    }

    if (error) {
      console.error(error.message)
    }

    isLoading.value = false
  }

  async function fetchItems() {
    isLoading.value = true

    const { data, error } = await supabase.from('wish_lists').select()

    if (data) {
      items.value = [...data]
    }

    if (error) {
      console.error(error.message)
    }

    isLoading.value = false
  }

  return { items, isLoading, addItem, fetchItems }
})
