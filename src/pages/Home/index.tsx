import NutrientsCard from '../../components/NutrientsCard/global'
import Charts from '../../components/Charts/global'
import { useSportSeeStore } from '../../provider/context'
import { MainWrapper, TextWrapper, AllDataWrapper } from './style'
import { useEffect } from 'react'

function Home() {
  const { mainData, getMainData } = useSportSeeStore((state) => state)
  useEffect(() => {
    getMainData(18)
  }, [getMainData])

  return (
    <MainWrapper>
      <TextWrapper>
        <h1>
          Bonjour{' '}
          <span className="nameHeader">{mainData?.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </TextWrapper>
      <AllDataWrapper>
        <Charts />
        <NutrientsCard />
      </AllDataWrapper>
    </MainWrapper>
  )
}

export default Home
