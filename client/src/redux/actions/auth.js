import * as api from '../../api'

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData)

        dispatch({ type: 'AUTH', data })
    } catch (error) {
        console.log(error.message)
    }
}

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData)
        if (data.result.email === 'f.esedzade9789@gmail.com') {
            navigate('/admin-panel')
        } else {
            navigate('/')
        }

        dispatch({ type: 'AUTH', data })
    } catch (error) {
        console.log(error.message)
    }
}