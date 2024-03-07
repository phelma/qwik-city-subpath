import { component$, useSignal } from '@builder.io/qwik'

export default component$(() => {
  const counter = useSignal(0)
  return (
    <div>
      Qwik demo
      <br />
      <button onClick$={() => (counter.value += 1)}>
        Clicked {counter.value} times
      </button>
    </div>
  )
})
