const initialState = {
    posts: [],
    isLoaded: false
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                posts: action.payload.reverse(),
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
        case 'SEND_POST':
            return {
                ...state,
                posts: [action?.payload, ...state.posts]
            }
        case 'DELETE_USER_POST':
            return {
                posts: state.posts.filter((post) => post._id !== action.payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default posts