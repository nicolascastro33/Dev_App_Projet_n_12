import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export const HeaderWrapper = styled.header`
  position: relative;
  background-color: ${colors.black};
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 18px 28px 12px 28px;
  gap: 20px;
  z-index: 2;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & img {
    width: 58px;
  }
  & h1 {
    color: ${colors.primary};
    font-size: 1.2rem;
  }
`

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  margin-right: 50px;
  @media (max-width: 1200px) {
    gap: 50px;
    margin-left:20px;
    margin-right: 20px
  }
  & h3 {
    cursor: pointer;
    font-size: 1.2rem;
    color: ${colors.white};
    @media (max-width: 1200px) {
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    &:hover{
      text-decoration: underline;
    }
  }
`
