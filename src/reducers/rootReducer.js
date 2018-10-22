const initState = {
    posts: [
        {id: 1, title: 'title 1', body: 'body of text 1'},
        {id: 2, title: 'title 2', body: 'body of text 2'},
        {id: 3, title: 'title 3', body: 'body of text 3'},
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;