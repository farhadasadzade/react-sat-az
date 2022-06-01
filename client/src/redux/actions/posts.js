import * as api from '../../api'

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: "FETCH_ALL", payload: data.reverse() })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const setCategory = (category) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        const items = data && data.filter((item) => item.category === category)
        dispatch({ type: 'FETCH_ALL', payload: items.reverse() })

    } catch (error) {
        console.log(error.message)
    }
}
