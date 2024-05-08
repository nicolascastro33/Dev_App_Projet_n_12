import { ButtonSport } from './style'

interface ButtonProps{
    logo:string
    type:string
}

function Button({logo, type}:ButtonProps) {
  return (
    <ButtonSport>
      <img src={logo} alt={`bouton de ${type}`} />
    </ButtonSport>
  )
}

export default Button
