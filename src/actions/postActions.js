export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const newPost = (data) => {
    return {
        type: 'NEW_POST',
        data
    }
}