import swimLogo from '../../assets/sportLogos/swim.png'
import bikeLogo from '../../assets/sportLogos/bike.png'
import meditationLogo from '../../assets/sportLogos/meditation.png'
import musculationLogo from '../../assets/sportLogos/musculation.png'
import { AllButtonsWrapper, ButtonSport, CopyrightText, VerticalNavWrapper } from './style'

function VerticalNav() {
  return (
    <VerticalNavWrapper>
      <AllButtonsWrapper>
        <ButtonSport>
          <img src={meditationLogo} alt="Logo méditation" />
        </ButtonSport>
        <ButtonSport>
          <img src={swimLogo} alt="Logo natation" />
        </ButtonSport>
        <ButtonSport>
          <img src={bikeLogo} alt="Logo vélo" />
        </ButtonSport>
        <ButtonSport>
          <img src={musculationLogo} alt="Logo musculation" />
        </ButtonSport>
      </AllButtonsWrapper>
      <CopyrightText>Copiryght, SportSee 2020</CopyrightText>
    </VerticalNavWrapper>
  )
}

export default VerticalNav
