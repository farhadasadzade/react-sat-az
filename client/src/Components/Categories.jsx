import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHouse, faMobileButton, faShirt, faScrewdriverWrench, faGuitar, faFutbol } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
  return (
    <div>
        <nav className="nav">
            <div className="nav-item">
                <FontAwesomeIcon icon={faHouse}/> Ev və bağ üçün
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faCar}/> Nəqliyyat
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faMobileButton}/> Elektronika
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faShirt}/> Şəxsi əşyalar
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faScrewdriverWrench}/> Xidmət və biznes
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faGuitar}/> Hobbi və asudə
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faFutbol}/> İdman
            </div>
        </nav>
    </div>
  )
}

export default Categories