import * as api from '../../api'

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData)

        dispatch({ type: "AUTH", data })
    } catch (error) {
        console.log(error.message)
    }
}

export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData)

        dispatch({ type: "AUTH", data })
    } catch (error) {
        console.log(error.message)
    }
}