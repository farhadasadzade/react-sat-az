import * as api from '../../api'

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const setCategory = (category) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        const items = data && data.filter((item) => item.category === category)
        dispatch({ type: 'FETCH_ALL', payload: items })

    } catch (error) {
        console.log(error.message)
    }
}

export const sendPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.sendPost(post)

        dispatch({ type: 'SEND_POST', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}
