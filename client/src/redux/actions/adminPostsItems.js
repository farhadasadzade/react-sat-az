import * as api from '../../api'
import { setError } from '../actions/auth'

export const fetchAdminPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdminPosts()

        dispatch({ type: 'FETCH_ALL_ADMIN', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, success) => async (dispatch) => {
    try {
        const { data, status } = await api.createPost(post)

        dispatch(setError(status))

        dispatch({ type: 'CREATE_POST', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteAdminPost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({ type: 'DELETE_ADMIN_POST', payload: id })
    } catch (error) {
        console.log(error)
    }
}