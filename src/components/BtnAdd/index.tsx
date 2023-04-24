import * as S from './styles'

import { FaPlus } from 'react-icons/fa'

const BtnAdd = () => {
  return (
    <S.Div>
      <S.Circulo to="/novo">
        <FaPlus />
      </S.Circulo>
    </S.Div>
  )
}

export default BtnAdd
