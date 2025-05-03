import { create } from 'zustand'

export const useCountStore = create<{
  count: number;
  action: {
    // action을 객체로 묶어서 사용하면 더 편리함
    increase: () => void;
    decrease: () => void;
  };
}>((set, get) => ({
  // get은 현재 상태를 가져오는 함수, set은 상태를 변경하는 함수
  count: 1,
  action: {
    increase: () => {
      const { count } = get();
      set({ count: count + 1 });
    },
    decrease: () => {
      const { count } = get();
      set({ count: count - 1 });
    },
  }
}));