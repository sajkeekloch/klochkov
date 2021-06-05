import { NavLink } from 'react-router-dom'
import './Main.css'
import { useEffect } from 'react'

function Main() {

    useEffect(() => {
        document.title = "клочков"
    })

    return(
        <div className="main">
            <div className="main__container">
                <h1 className="main__name">Александр Клочков</h1>
                <p className="main__description">Фронтенд-разработчик. Прошел курс от ЯндексПрактикум. </p>
                <NavLink className="main__button-link" to='/projects'>
                    <button className="main__button button">смотреть проекты</button>
                </NavLink>
                
            </div>
            
        </div>
    )
}

export default Main