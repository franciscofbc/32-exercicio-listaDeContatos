import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { FaArrowLeft, FaRegSave } from 'react-icons/fa'

import * as S from './styles'
import { RootReducer } from '../../store'
import { editar } from '../../store/reducers/contatos'

const FormEditar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { id } = useSelector((state: RootReducer) => state.filtroContatos)
  const contato = itens.find((contato) => contato.id === id)

  const [nome, setNome] = useState(contato?.nome)
  const [email, setEmail] = useState(contato?.email)
  const [telefone, setTelefone] = useState(contato?.telefone)

  return (
    <S.DivPrincipal>
      {/* <h3>Adicionar Contato</h3> */}
      <S.Form
        onSubmit={() => {
          if (nome !== undefined) {
            dispatch(editar({ id, nome, email, telefone }))
          }
          navigate('/')
        }}
      >
        <S.DivInputs>
          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            required
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={telefone}
            required
            onChange={(event) => setTelefone(event.target.value)}
          />
        </S.DivInputs>
        <div>
          <button>
            <FaRegSave type="submit" />
          </button>
          <button>
            <FaArrowLeft
              onClick={() => {
                navigate('/')
              }}
            />
          </button>
        </div>
      </S.Form>
    </S.DivPrincipal>
  )
}

export default FormEditar
