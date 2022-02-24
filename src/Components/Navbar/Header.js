import React,{ useState} from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css'
const Header = ({ navbarLinks }) => {
    const [menuClicked, setMenuClicked ] = useState(false);
    
    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
    return(
        <nav className="navbar">
            <span className="navbar-logo">Minas</span>
            {menuClicked ? (
                <FiX size={25} className={"navbar-menu"} onClick={toggleMenuClick}/>
            ):(
                <FiMenu
                size={25}
                className={"navbar__menu"}
                onClick={toggleMenuClick}
              />
            )}
                 <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>

        </nav>
    )
}

export default Header;