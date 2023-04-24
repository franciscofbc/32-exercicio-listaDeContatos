import { FaRegTrashAlt, FaEdit, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ContatoClass from '../../models/Contato'
import { remover } from '../../store/reducers/contatos'
import { alteraId } from '../../store/reducers/filtroContatos'
import * as S from './styles'

type ContatoClassProps = ContatoClass

const Contato = ({ id, nome, email, telefone }: ContatoClassProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <S.Card corId={id}>
      <S.FlexDiv>
        <S.CampoNome>{nome}</S.CampoNome>
        <div>
          <S.Btn
            onClick={() => {
              dispatch(alteraId(id))
              navigate('/editar')
            }}
          >
            <FaEdit />
          </S.Btn>
          <S.Btn
            onClick={() => {
              dispatch(remover(id))
            }}
          >
            <FaRegTrashAlt />
          </S.Btn>
        </div>
      </S.FlexDiv>
      <S.CamposContato>
        <FaPhoneAlt /> {telefone}
      </S.CamposContato>
      <S.CamposContato>
        <FaEnvelope /> {email}
      </S.CamposContato>
    </S.Card>
  )
}

export default Contato
