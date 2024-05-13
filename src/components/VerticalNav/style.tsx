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
  @media (max-width: 1200px) {
    justify-content: flex-start;
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 80px;
  }
`
export const AllButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1200px) {
    margin-top: 250px;
    gap: 25px;
  }
  @media (max-width: 768px) {
    gap: 35px;
  }
`
export const ButtonSport = styled.button`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 300ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
  & img {
    height: 32px;
    @media (max-width: 1200px) {
      height: 28px;
    }
    @media (max-width: 768px) {
      height: 25px;
    }
  }
  @media (max-width: 1200px) {
    width: 54px;
    height: 54px;
  }
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`
export const CopyrightText = styled.p`
  position: absolute;
  bottom: 10%;
  color: ${colors.white};
  font-size: 0.6rem;
  transform: rotate(-90deg);
`
