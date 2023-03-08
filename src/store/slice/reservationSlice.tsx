import { createSlice } from '@reduxjs/toolkit'

interface IinitailState {
  id: number
  text: string
  amount: number
  price: number
  complete: false
}

let nextId = 0
const initialState: any[] = []
export const reservationsSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      nextId += 1
      state.push({
        amount: action.payload.amount,
        id: nextId,
        text: action.payload.name,
        price: action.payload.price,
        complete: false,
      })

      return state
    },
    remove: (state, action) => {
      return state.filter(e => e.id !== action.payload)
    },
    patch: (state, action) => {
      return state.map(el =>
        el.id === action.payload.id
          ? { ...el, amount: action.payload.amount }
          : el
      )
    },
  },
})

export const { add, remove, patch } = reservationsSlice.actions
// store에서 add, remove, complte 액션을 내보낸다.
export default reservationsSlice.reducer
