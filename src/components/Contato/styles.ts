import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  corId: number
}

export const Card = styled.div<Props>`
  background-color: ${(props) =>
    props.corId % 2 === 0 ? variaveis.blue : variaveis.amarelo};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const FlexDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`
export const CamposContato = styled.p`
  color: ${variaveis.white};
`
export const CampoNome = styled(CamposContato)`
  font-size: 24px;
  margin-bottom: 16px;
  // text-transform: capitalize;
`
export const Btn = styled.button`
  background-color: transparent;
  border: none;
  color: ${variaveis.white};
  font-size: 24px;
  cursor: pointer;
`
