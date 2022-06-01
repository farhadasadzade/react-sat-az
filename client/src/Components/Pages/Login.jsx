import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

import { signin } from '../../redux/actions/auth'

const initialState = {
    email: '',
    password: ''
}

const Login = () => {

    const disptach = useDispatch()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState(initialState)

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        disptach(signin(loginData, navigate))
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
                    Parol: <input type="password" name='password' onChange={handleChange}/>
                </label>
                <button type='submit'>Daxil ol</button>
            </form>
        </div>
    </div>
  )
}

export default Login