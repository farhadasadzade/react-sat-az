const initialState = {
    adminPosts: [],
    items: 0
}

const adminPostsItems = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ADMIN':
            return {
                adminPosts: action?.payload.reverse(),
                items: action?.payload.length
            }
        case 'CREATE_POST':
            return {
                adminPosts: [action?.payload, ...state.adminPosts],
                items: state.items + 1
            }
        case 'DELETE_ADMIN_POST':
            return {
                adminPosts: state.adminPosts.filter((post) => post._id !== action.payload),
                items: state.adminPosts.length - 1
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default adminPostsItems