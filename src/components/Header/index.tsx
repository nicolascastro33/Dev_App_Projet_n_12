import logo from "../../assets/sportSeeLogo.png"
import { LogoWrapper, NavHeader } from "./style";
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <LogoWrapper>
                <img src={logo} alt="Logo de SportSee" />
                <h1>SportSee</h1>
            </LogoWrapper>
            <NavHeader>
                <Link to="/">Accueil</Link>
                <Link to="/profile">Profil</Link>
                <Link to="/setting">Réglage</Link>
                <Link to="/community">Communauté</Link>
            </NavHeader>
        </header>
    )
}
export default Header;