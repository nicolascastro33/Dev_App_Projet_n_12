import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 90px;
  padding-bottom: 86px;
  @media (max-width: 1200px) {
    margin-right: 30px;
  }
`

export const TextWrapper = styled.div`
  margin-bottom: 77px;
  & h1 {
    font-size: 3rem;
    font-weight: 500;
    margin: 68px 0 41px 0;
    & .nameHeader{
      color: ${colors.primary}
    }
  }
  & p{
    font-size: 1.2rem;
    margin: 0;
  }
`

export const AllDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 31px;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

