import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

//Components
import AdminDashboard from './AdminDashboard'
import AdminPosts from './AdminPosts'

//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'



const menuItems = [{
    name: 'Ümumi',
    component: `<AdminDashboard />`
}, {
    name: 'Yoxlanılmamış elanlar',
    component: `<AdminPosts />`
}]

const AdminPanel = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const items = useSelector(({adminPostsItems}) => adminPostsItems.items)

    const [active, setActive] = useState(0)

    const handleActive = (index) => {
        setActive(index)
    }

    const logout = () => {

        dispatch({type: 'LOGOUT'})

        navigate('/')
    }

  return (
    <div className="admin">
        <div className="admin__header">
            <div className="admin__logo">
                Admin Panel
            </div>
            <div className="admin__user">
                <button onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket}/></button>
            </div>
        </div>
        <div className="admin__main">
            <div className="admin__sidebar">
                <ul className="admin__menu-list">
                    {menuItems.map((item, index) => {
                        return <li key={index} className={`admin__menu-item ${index === active && `admin__menu-active`}`}
                                onClick={() => handleActive(index)}>
                                {item.name} {index === 1 && items > 0 && <span>{items}</span>}
                            </li>
                    })}
                </ul>
            </div>
            <div className="admin__content">
                {[<AdminDashboard />, <AdminPosts />][active]}
            </div>
        </div>
    </div>
  )
}

export default AdminPanel