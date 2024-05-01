import NutrientsCard from '../../components/NutrientsCard/global'
import Charts from '../../components/Charts/global'
import { useSportSeeStore } from '../../provider/context'
import { MainWrapper, TextWrapper, AllDataWrapper } from './style'
import { useEffect } from 'react'
import { Loader } from '../../utils/style/loader'

function Home() {
  const { userId, mainData, getMainData, mainError, mainLoading } =
    useSportSeeStore((state) => state)
  useEffect(() => {
    if (!mainData || userId !== mainData?.data.id) getMainData(12)
  }, [getMainData, mainData, userId])

  if (mainError) {
    return (
      <MainWrapper>
        <h1>Il y a un problème, veuillez revenir plus tard</h1>
      </MainWrapper>
    )
  }
  return (
    <MainWrapper>
      {mainLoading ? (
        <Loader color="primary" />
      ) : (
        <>
          <TextWrapper>
            <h1>
              Bonjour{' '}
              <span className="nameHeader">
                {mainData?.data.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </TextWrapper>
          <AllDataWrapper>
            <Charts />
            <NutrientsCard />
          </AllDataWrapper>
        </>
      )}
    </MainWrapper>
  )
}

export default Home
