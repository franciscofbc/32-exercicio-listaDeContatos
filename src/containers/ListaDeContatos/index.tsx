import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { alteraNome } from '../../store/reducers/filtroContatos'
import * as S from './styles'

const ListaDeContatos = () => {
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { pesquisaNome } = useSelector(
    (state: RootReducer) => state.filtroContatos
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (pesquisaNome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) =>
          item.nome.toLowerCase().search(pesquisaNome.toLowerCase()) >= 0
      )
      return contatosFiltrados.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
      })
    }
    return contatosFiltrados.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })
  }
  const contatosFiltrados = filtraContatos()

  return (
    <S.DivContatos>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={pesquisaNome}
        onChange={(event) => dispatch(alteraNome(event.target.value))}
      />
      {contatosFiltrados.length > 0 ? (
        <ul>
          {contatosFiltrados.map((itens) => (
            <li key={itens.id}>
              <Contato
                id={itens.id}
                nome={itens.nome}
                email={itens.email}
                telefone={itens.telefone}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h4>Nenhum contato cadastrado</h4>
      )}
    </S.DivContatos>
  )
}

export default ListaDeContatos
