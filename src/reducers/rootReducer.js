const initState = {
    posts: [
        {id: 1, title: 'Title 1', body: 'Random body of text'},
        {id: 2, title: 'Title 2', body: 'Another random bit of text'},
    ],
    counter: 0,
    planet: 'earth',
    showCongratulations: false,
    loggedIn: false,
    loginFailed: false,
    isRunningTask: false,
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    } else if (action.type === 'NEW_POST') {
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
    } else if (action.type === 'SHOW_CONGRATULATIONS') {
        return {
            ...state,
            showCongratulations: true,
        }
    } else if (action.type === 'NASA_IMAGES_SUCCESS') {
        return {
            ...state,
            images: action.images
        }
    } else if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1,
        }
    } else if (action.type === 'DECREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    } else if (action.type === 'LOGIN_SUCCESS') {
        return {
            ...state,
            loggedIn: true,
            loginFailed: false,
        }
    } else if (action.type === 'LOGOUT') {
        return {
            ...state,
            loggedIn: false,
        }
    } else if (action.type === 'LOGIN_FAILED') {
        return {
            ...state,
            loginFailed: true,
        }
    } else if (action.type === 'START_TASK') {
        return {
            ...state,
            isRunningTask: true
        }
    } else if (action.type === 'TASK_CANCELLED') {
        return {
            ...state,
            isRunningTask: false
        }
    } else if (action.type === 'TASK_FINISHED') {
        return {
            ...state,
        }
    }
    return state;
}

export default rootReducer;