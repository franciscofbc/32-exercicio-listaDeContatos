import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivPrincipal = styled.div`
  text-align: center;
  // background-color: ${variaveis.cinzaEscuro};
  padding: 64px;
  border-radius: 16px;

  // margin-top: 128px;

  h3 {
    // text-transform: uppercase;
    margin-bottom: 16px;
    color: ${variaveis.blue};
  }
`

export const Form = styled.form`
  button {
    font-size: 36px;
    border: none;
    color: ${variaveis.blue};
    cursor: pointer;
    margin-top: 16px;

    background-color: transparent;
  }
`
export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 8px 512px 8px 8px;
    border-radius: 8px;
    margin-top: 4px;
    border: none;
  }
`
