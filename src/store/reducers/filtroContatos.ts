import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroContatosState = {
  id: number
  pesquisaNome: string
}

const initialState: FiltroContatosState = {
  id: -1,
  pesquisaNome: ''
}

const filtroContatosSlice = createSlice({
  name: 'filtroContatos',
  initialState,
  reducers: {
    alteraId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
    alteraNome: (state, action: PayloadAction<string>) => {
      state.pesquisaNome = action.payload
    }
  }
})

export const { alteraId, alteraNome } = filtroContatosSlice.actions
export default filtroContatosSlice.reducer
