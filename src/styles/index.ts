import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizeng:border-box;
  font-family: 'Roboto Mono', monospace;
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  background-color: ${variaveis.white};
  // background-color: red;
  padding: 64px 64px;
  // padding-bottom: 64px;

  border-radius: 16px;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  // width: 100%;
  width: 90%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  // padding: 8px 16px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export default EstiloGlobal
