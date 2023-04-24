import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  // padding: 32px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 48px;
  right: 64px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
