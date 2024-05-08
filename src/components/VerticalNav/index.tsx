import swimLogo from '../../assets/sportLogos/swim.png'
import bikeLogo from '../../assets/sportLogos/bike.png'
import meditationLogo from '../../assets/sportLogos/meditation.png'
import musculationLogo from '../../assets/sportLogos/musculation.png'
import Button from './button'
import {
  AllButtonsWrapper,
  CopyrightText,
  VerticalNavWrapper,
} from './style'

function VerticalNav() {
  return (
    <VerticalNavWrapper>
      <AllButtonsWrapper>
        <Button logo={meditationLogo} type="méditation" />
        <Button logo={swimLogo} type="natation" />
        <Button logo={bikeLogo} type="vélo" />
        <Button logo={musculationLogo} type="musculation" />
      </AllButtonsWrapper>
      <CopyrightText>Copiryght, SportSee 2020</CopyrightText>
    </VerticalNavWrapper>
  )
}

export default VerticalNav
