import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export const VerticalNavWrapper = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  width: 117px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  background-color: ${colors.black};
`
export const AllButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
`
export const ButtonSport = styled.button`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    height: 32px;
  }
`
export const CopyrightText = styled.p`
  position: absolute;
  bottom: 10%;
  color: ${colors.white};
  font-size: 0.5rem;
  transform: rotate(-90deg);
`
