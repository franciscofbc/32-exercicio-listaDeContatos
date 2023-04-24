import BotaoAdicionar from '../../components/BotaoAdicionar'
import BtnAdd from '../../components/BtnAdd'
import Contato from '../../components/Contato'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import * as S from './styles'

const Home = () => {
  return (
    <S.Div>
      {/* <BarraLateral mostrarFiltros /> */}
      {/* <ListaDeTarefas /> */}

      {/* <BotaoAdicionar /> */}
      <ListaDeContatos />
      <BtnAdd />
    </S.Div>
  )
}

export default Home
