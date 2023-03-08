import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'trip',
  initialState: { isOpen: false, clickedIdx: 0 },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.clickedIdx = action.payload
    },
    closeModal: state => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
