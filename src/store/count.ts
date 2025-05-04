import { create } from 'zustand'

{/*
export const useCountStore = create<{
  count: number
  action: {
    // action을 객체로 묶어서 사용하면 더 편리함
    increase: () => void
    decrease: () => void
  };
}>((set, get) => ({
  // get은 현재 상태를 가져오는 함수, set은 상태를 변경하는 함수
  count: 1,
  action: {
    increase: () => {
      const { count } = get()
      set({ count: count + 1 })
    },
    decrease: () => {
      const { count } = get()
      set({ count: count - 1 })
    },
  }
}));
*/}

type State = { // 상태 타입
  count: number
  double: number
  min: number
  max: number
}

interface Actions { // 액션을 제외한 상태만 초기화하기 때문에 interface로 따로 분리
  action: {
    increase: () => void
    decrease: () => void
    reset: () => void
  }
}

const initialState: State = { // 초기 상태
  count: 1,
  double: 2,
  min: 0,
  max: 99
}

export const useCountStore = create<State & Actions>(set => ({
  ...initialState,
  action: {
    increase: () => set(state => ({ count: Math.min(state.count + 1) })),
    decrease: () => set(state => ({ count: Math.max(state.count - 1) })),
    reset: () => set(initialState)
  } 
}))