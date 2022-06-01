const initialState = {
    posts: [],
    isLoaded: false
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                posts: action.payload,
                isLoaded: true
            }
        case 'CREATE':
            return {
                ...state,
                posts: [...posts, action.payload].reverse()
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default posts