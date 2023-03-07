import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Product} from './productSlice'

interface CommonState {
    reserveList: Product[]
}

const initialState: CommonState = {
    reserveList: [],
}

export const reserveSlice = createSlice({
    name: 'reserve',
    initialState,
    reducers: {
        setReserve(state, action: PayloadAction<Product[]>) {
            const copyState = state
            copyState.reserveList = action.payload
            return copyState
        },
    },
})

export const {setReserve} = reserveSlice.actions

export default reserveSlice
