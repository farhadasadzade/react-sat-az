
const postReducer = (state = { post: [] }, action) => {
    switch (action.type) {
        case 'POST':
            return {
                post: action.payload
            }
        default:
            return {
                post: state.post
            }
    }
}

export default postReducer