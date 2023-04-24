import BtnAdd from '../../components/BtnAdd'
import ListaDeContatos from '../../containers/ListaDeContatos'
import * as S from './styles'

const Home = () => {
  return (
    <S.Div>
      <ListaDeContatos />
      <BtnAdd />
    </S.Div>
  )
}

export default Home
