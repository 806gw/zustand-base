import { create } from 'zustand'

export const useCountStore = create<{
  count: number
  increase: () => void
  decrease: () => void
}>((set, get) => ({ // get은 현재 상태를 가져오는 함수, set은 상태를 변경하는 함수
  count: 1,
  increase: () => {
    const { count } = get()
    set({ count: count + 1 })
  },
  decrease: () => {
    const { count } = get()
    set({ count: count - 1 })
  }
}))