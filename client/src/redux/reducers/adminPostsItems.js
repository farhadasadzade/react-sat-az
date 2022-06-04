const initialState = {
    adminPosts: []
}

const adminPostsItems = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ADMIN':
            return {
                adminPosts: action?.payload.reverse()
            }
        case 'CREATE_POST':
            return {
                adminPosts: [action?.payload, ...state.adminPosts]
            }
        case 'DELETE_ADMIN_POST':
            return {
                adminPosts: state.adminPosts.filter((post) => post._id !== action.payload)
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default adminPostsItems