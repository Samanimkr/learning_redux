const increment = () => ({
    type: 'INCREMENT_COUNTER',
})

const decrement = () => ({
    type: 'DECREMENT_COUNTER',
})

const incrementAsync = () => ({
    type: 'INCREMENT_COUNTER_ASYNC',
})

const decrementAsync = () => ({
    type: 'DECREMENT_COUNTER_ASYNC',
})

export const counterActions = {
    increment,
    decrement,
    incrementAsync,
    decrementAsync,
}