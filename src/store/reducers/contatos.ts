import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'rosimeri vieira berti',
      email: 'rosimeri@gmail.com',
      telefone: '(55)9.9999.9999'
    },
    {
      id: 2,
      nome: 'ademir blatt',
      email: 'ademir@gmail.com',
      telefone: '(55)9.9999.9999'
    },
    {
      id: 3,
      nome: 'gabriela blatt',
      email: 'gabriela@gmail.com',
      telefone: '(55)9.9999.9999'
    },
    {
      id: 4,
      nome: 'anderson ceccato',
      email: 'anderson@gmail.com',
      telefone: '(55)9.9999.9999'
    },
    {
      id: 5,
      nome: 'ilario blatt',
      email: 'gabriela@gmail.com',
      telefone: '(55)9.9999.9999'
    },
    {
      id: 6,
      nome: 'francisco berti da cruz',
      email: 'gabriela@gmail.com',
      telefone: '(55)9.9999.9999'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.itens[state.itens.length - 1]
      const novoContato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }
      state.itens.push(novoContato)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, cadastrar, editar } = contatoSlice.actions
export default contatoSlice.reducer
