import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <>
          <div>
            <Campo
              type="text"
              placeholder="Procurar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
          </div>
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="concluídas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importantes"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </S.Filtros>
        </>
      ) : (
        <Botao
          onClick={() => {
            navigate('/')
          }}
        >
          Voltar à lista de tarefas
        </Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
