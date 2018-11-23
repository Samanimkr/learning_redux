const initState = {
    posts: [
        {id: 1, title: 'title 1', body: 'body of text 1'},
        {id: 2, title: 'title 2', body: 'body of text 2'},
        {id: 3, title: 'title 3', body: 'body of text 3'},
    ],
    counter: 0,
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST"){
        const newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    } else if (action.type === "NEW_POST") {
        const newPosts = [
            ...state.posts,
        ];
        newPosts.push({
            id: state.posts.length+1,
            title: action.data.title,
            body: action.data.body
        })
        return {
            ...state,
            posts: newPosts
        }
    } else if (action.type === "INCREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1,
        }
    } else if (action.type === "DECREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    return state;
}

export default rootReducer;