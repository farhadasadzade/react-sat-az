import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useLocation, useNavigate } from 'react-router'

//Assets
import noimg from '../images/noimg.png'

//Redux actions
import {getPosts, setLoaded} from '../redux/actions/posts'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faPlus, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const navigate =  useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {

        dispatch({type: 'LOGOUT'})

        navigate('/')

        setUser(null)
    }

    useEffect(() => {
        // eslint-disable-next-line
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    },// eslint-disable-next-line 
    [location])

  return (
    <header className="header">
        <div className="header__logo">
            <Link to='/' onClick={() => {
                dispatch(setLoaded(false))
                dispatch(getPosts())
            }}>
                <p>SAT.AZ</p>
            </Link>  
        </div>
        <div className="header__search">
            <input type="text" />
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <div className="header__auth">
            {user ?
                <>
                    <Link to='/yeni-elan'><button><FontAwesomeIcon icon={faPlus}/> Yeni elan</button></Link>
                    <h2>{user.result.firstName}</h2>
                    <div className="header__avatar">
                        <img src={noimg} alt="" />
                    </div>
                    <button onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
                </>
                :
                <>
                    <Link to='/daxil-ol'><button>Daxil ol</button></Link>
                    <Link to='/qeydiyyat'><button>Qeydiyyat</button> </Link>
                </>
            }
            
        </div>
    </header>
  )
}

export default Header