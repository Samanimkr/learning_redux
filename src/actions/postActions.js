export const deletePost = (id) => {
    return {
        type: 'DELETE_POST_REQUEST',
        id,
    }
}

export const newPost = data => ({
    type: 'NEW_POST_REQUEST',
    data,
})

export const requestNasaImages = planet => ({
    type: 'NASA_IMAGES_REQUESTED',
    planet,
})

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