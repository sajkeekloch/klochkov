import { NavLink } from 'react-router-dom'
import './Menu.css'
import cross from '../images/cross.svg'


export default function Menu(props) {

    function handleMenu() {
        props.handleMenu()
    }

    return(
        <div className= {props.isOpen? "menu": "menu disabled"}>
            <div className= "menu__container">
                <ul className="menu__items">
                    <li className="menu__item">
                        <NavLink 
                            activeClassName="selected"
                            exact to="/klochkov"
                            onClick={handleMenu}
                            >клочков</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink 
                            activeClassName="selected"
                            to="/projects"
                            onClick={handleMenu}
                            >проекты</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink 
                            activeClassName="selected"
                            to="/about"
                            onClick={handleMenu}
                            >обо мне</NavLink>
                    </li>
                </ul>
                <img 
                    className="menu__close" 
                    src={cross} 
                    alt="closeCross"
                    onClick={handleMenu}
                />
            </div>
            
        </div>
    )
}