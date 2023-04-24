import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
import contatosReducer from './reducers/contatos'
import filtroContatosReducer from './reducers/filtroContatos'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer,
    contatos: contatosReducer,
    filtroContatos: filtroContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
