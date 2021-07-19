import { NavLink } from "react-router-dom"
import "./Header.css"
import Hamburger from "../Hamburger/Hamburger"


function Header(props) {

    function handleMenu() {
        props.handleMenu()
    }


    return(
        <div className="header">
            <Hamburger 
                handleMenu = {handleMenu}
            />
            <NavLink 
                className="regular"
                exact to='/klochkov'
                activeClassName="selected">
                клочков
            </NavLink>
            <ul className="header__links regular">
                <li className="header__link link">
                    <NavLink 
                        to='/projects'
                        activeClassName="selected">проекты</NavLink>
                </li>
                <li className="header__link link">
                    <NavLink 
                        to='/about'
                        activeClassName="selected">обо мне</NavLink>
                </li>
                <li className="header__link">
                    <a 
                        href="mailto:sajkeekloch@gmail.com">
                            <button className='header__button button'>email me</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header