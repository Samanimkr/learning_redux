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