import styled from 'styled-components'

export const DivContatos = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 8px 128px 8px 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    border: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    list-style: none;

    @media (max-width: 768px) {
      display: block;
    }

    @media (min-width: 769px) and (max-width: 1023px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  h4 {
    text-align: center;
    padding: 32px;
  }
`
