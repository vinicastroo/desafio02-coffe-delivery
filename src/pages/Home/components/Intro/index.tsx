import { Icon, IntroContainer, Items, Content } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageIntro from '../../../../assets/home-image.png'

export function Intro() {
  return (
    <IntroContainer>
      <Content>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>

          <Items>
            <div>
              <Icon statusColor="dark_yellow">
                <ShoppingCart size={20} weight="fill" />
              </Icon>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Icon statusColor="black">
                <Package size={20} weight="fill" />
              </Icon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icon statusColor="yellow">
                <Timer size={20} weight="fill" />
              </Icon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icon statusColor="purple">
                <Coffee size={20} weight="fill" />
              </Icon>
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </div>

        <div>
          <img src={imageIntro} alt="" />
        </div>
      </Content>
    </IntroContainer>
  )
}
