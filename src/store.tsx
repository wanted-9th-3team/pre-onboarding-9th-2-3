import { configureStore } from '@reduxjs/toolkit'
import reserveSlice from './slices/ReserveSlice'

const store = configureStore({
  reducer: { reserve: reserveSlice },
})

export default store
