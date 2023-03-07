import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeProduct } from '../type'

const initialState: { modalInfo: TypeProduct | null } = {
  modalInfo: null,
}

const modalSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    insertModal(state, action: PayloadAction<TypeProduct>) {
      state.modalInfo = action.payload
    },
    closeModal(state) {
      state.modalInfo = null
    },
  },
})

export const modalActions = modalSlice.actions

export default modalSlice.reducer
