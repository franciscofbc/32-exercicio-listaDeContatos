import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  return (
    <MainContainer>
      <Titulo as="p">
        {tarefas.length} tarefa(s) marcada(s) como: &quot;{`${criterio}`}
        {valor !== undefined && `=${valor}`}&quot;
        {termo !== undefined && termo.length > 0 && ` e "${termo}"`}
      </Titulo>
      <ul>
        {tarefas.map(({ titulo, descricao, prioridade, status, id }) => (
          <li key={id}>
            <Tarefa
              id={id}
              titulo={titulo}
              descricao={descricao}
              prioridade={prioridade}
              status={status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
