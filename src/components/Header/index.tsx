import logo from '../../assets/sportSeeLogo.png'
import { HeaderWrapper, LogoWrapper, NavHeader } from './style'

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={logo} alt="Logo de SportSee" />
        <h1>SportSee</h1>
      </LogoWrapper>
      <NavHeader>
        <h3>Accueil</h3>
        <h3>Profil</h3>
        <h3>Réglage</h3>
        <h3>Communauté</h3>
      </NavHeader>
    </HeaderWrapper>
  )
}
export default Header
