import React from 'react'
import { useStore } from 'store'
import { useObserver } from 'mobx-react-lite'

const Page: React.FC = () => {
  const { counterStore } = useStore()

  return useObserver(() => (
    <div>
      <h1>Ash page</h1>
      <p>count: {counterStore.count}</p>
      <button onClick={() => counterStore.increase()}>increase</button>
      <button onClick={() => counterStore.decrease()}>decrease</button>
    </div>
  ))
}

export default Page
