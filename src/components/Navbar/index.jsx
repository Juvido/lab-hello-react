import IronhackLogo from "../../assets/images/ironhack-logo.png";
import MenuIcon from "../../assets/images/menu-icon.png"
import style from "./style.module.css"

export function Navbar () {
    return <nav className={style.navbar}>
        <img src= {IronhackLogo} alt="ironhack-logo" className={style.iconLogo}/>
        <img src= {MenuIcon}  alt="menu icon" className={style.iconMenu} />
    </nav>
}