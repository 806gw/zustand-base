import { useCountStore } from "./store/count"

function App() {
  const count = useCountStore((state) => state.count) // 성능 최적화를 위해 부분 상태만 가져옴
  {/* 
  const state = useCountStore()
  const count = state.count 
  이런 식으로도 가져올 수 있지만, 모든 상태 변경에 반응해서 리렌더링 되기 때문에 성능이 떨어질 수 있음
  */}
  const increase = useCountStore((state) => state.increase) 
  const decrease = useCountStore((state) => state.decrease)
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
