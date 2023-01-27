import { Intro } from './components/Intro'
import { ListProducts } from './components/ListProducts'
import { MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Intro />
      <ListProducts />
    </MainContainer>
  )
}
