import React from 'react'
import {Link} from 'react-router-dom'

import {getPosts, setLoaded} from '../redux/actions/posts'

import {useDispatch} from 'react-redux'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {


    const dispatch = useDispatch()

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
            <button>Daxil ol</button>
            <button>Qeydiyyat</button>
        </div>
    </header>
  )
}

export default Header