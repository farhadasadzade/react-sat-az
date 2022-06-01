import React from 'react'

import {useDispatch} from 'react-redux'

import { setCategory } from '../redux/actions/posts'
import { setLoaded } from '../redux/actions/posts'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHouse, faMobileButton, faShirt, faScrewdriverWrench, faGuitar, faFutbol } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <nav className="nav">
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('ev'))
            } }>
                <FontAwesomeIcon icon={faHouse}/> Ev və bağ üçün
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('neqliyyat'))
            } }>
                <FontAwesomeIcon icon={faCar}/> Nəqliyyat
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('elektronika'))
            } }>
                <FontAwesomeIcon icon={faMobileButton}/> Elektronika
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('eshyalar'))
            } }>
                <FontAwesomeIcon icon={faShirt}/> Şəxsi əşyalar
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('xidmet'))
            } }>
                <FontAwesomeIcon icon={faScrewdriverWrench}/> Xidmət və biznes
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('hobbi'))
            } }>
                <FontAwesomeIcon icon={faGuitar}/> Hobbi və asudə
            </div>
            <div className="nav-item" onClick={() => {
                dispatch(setLoaded(false))
                dispatch(setCategory('idman'))
            } }>
                <FontAwesomeIcon icon={faFutbol}/> İdman
            </div>
        </nav>
    </div>
  )
}

export default Categories