import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { signup } from '../../redux/actions/auth'


const initialState = {
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register = () => {

    const dispatch = useDispatch()

    const [registerData, setRegisterData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(signup(registerData))
    }

    const handleChange = (e) => {
        setRegisterData({...registerData, [e.target.name]: e.target.value})
    }

  return (
    <div className="main">
        <div className="new__post">
            <h1>Qeydiyyat</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    Ad: <input type="text" name='firstName' onChange={handleChange}/>
                </label>
                <label htmlFor="secondName">
                    Soyad: <input type="text" name='secondName' onChange={handleChange}/>
                </label>
                <label htmlFor="email">
                    Email: <input type="email" name='email' onChange={handleChange}/>
                </label>
                <label htmlFor="password">
                    Parol: <input type="password" name='password' onChange={handleChange}/>
                </label>
                <label htmlFor="confirmPassword">
                    Parolu yenidən daxil edin: <input type="password" name='confirmPassword' onChange={handleChange}/>
                </label>
                <button type='submit'>Qeydiyyatdan keç</button>
            </form>
        </div>
    </div>
  )
}

export default Register