import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Campo
          as="textarea"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => {
            return (
              <Opcao key={prioridade}>
                <input
                  value={prioridade}
                  onChange={(e) =>
                    setPrioridade(e.target.value as enums.Prioridade)
                  }
                  type="radio"
                  id={prioridade}
                  name="prioridade"
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />{' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            )
          })}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
