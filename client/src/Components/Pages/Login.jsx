import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import Swal from 'sweetalert2'

import { signin } from '../../redux/actions/auth'
import { setError } from '../../redux/actions/auth'

const initialState = {
    email: '',
    password: ''
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const passwordInput = useRef()

    const [loginData, setLoginData] = useState(initialState)

    const error = useSelector(({auth}) => auth.error?.response?.status)

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(signin(loginData, navigate))
    }

    switch(error) {
        case 404: {
            Toast.fire({
                icon: 'error',
                title: 'İstifadəçi tapılmadı'
              })
            dispatch(setError(null))
            passwordInput.current.value = ''
            break
        }
        case 400: {
            Toast.fire({
                icon: 'error',
                title: 'Yanlış şifrə'
              })
            dispatch(setError(null))
            passwordInput.current.value = ''
            break
        }
        default: {
            
        }
    }

  return (
    <div className="main">
        <div className="new__post">
            <h1>Daxil ol</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email: <input type="email" name='email' onChange={handleChange}/>
                </label>
                <label htmlFor="password">
                    Şifrə: <input type="password" name='password' onChange={handleChange} ref={passwordInput}/>
                </label>
                <button type='submit'>Daxil ol</button>
            </form>
        </div>
    </div>
  )
}

export default Login