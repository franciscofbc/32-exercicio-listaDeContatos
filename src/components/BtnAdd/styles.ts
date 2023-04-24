import styled from 'styled-components'
import { Link } from 'react-router-dom'

import variaveis from '../../styles/variaveis'

export const Div = styled.div`
  text-align: center;
`

export const Circulo = styled(Link)`
  color: ${variaveis.blue};
  font-size: 36px;
`
