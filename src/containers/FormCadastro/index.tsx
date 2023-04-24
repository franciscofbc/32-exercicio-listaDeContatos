import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { FaArrowLeft, FaRegSave } from 'react-icons/fa'

import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const FormCadastro = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()
    dispatch(cadastrar({ nome, email, telefone }))
    navigate('/')
  }

  return (
    <S.DivPrincipal>
      {/* <h3>Adicionar Contato</h3> */}
      <S.Form onSubmit={cadastrarContato}>
        <S.DivInputs>
          <input
            type="text"
            placeholder="Nome Completo"
            required
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefone"
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

export default FormCadastro
