export const deletePost = (id) => {
    return {
        type: 'DELETE_POST_REQUEST',
        id
    }
}

export const newPost = (data) => {
    return {
        type: 'NEW_POST_REQUEST',
        data
    }
}