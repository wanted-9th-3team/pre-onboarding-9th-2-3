import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import ITravelInfo from '../../api/TravelDTO'

interface ITravelState {
  travelList: ITravelInfo[]
  loading: boolean
  error: string
}

const initialState: ITravelState = {
  travelList: [],
  loading: false,
  error: '',
}

// export const getAllTraveLists = createAsyncThunk('travel/get', async () => {
//   try {
//     const travelLists = await getTravelInfo()
//     return travelLists
//   } catch (error) {
//     if (error instanceof Error) {
//       return error
//     }
//   }
// })

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    setTravelLists: (state, action: PayloadAction<ITravelInfo[]>) => {
      state.travelList = action.payload
    },
    initTravel: state => {
      state = initialState
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(getAllTraveLists.pending, state => {
  //     state.loading = true
  //   })
  //   builder.addCase(getAllTraveLists.fulfilled, (state, { payload }) => {
  //     state.loading = false
  //     state.travelList = payload
  //   })
  //   builder.addCase(getAllTraveLists.rejected, (state, action) => {
  //     state.loading = false
  //     if (action.payload) {
  //       state.error = action.payload
  //     }
  //     state.error = 'fetch list falied'
  //   })
  // },
})

export const { setTravelLists } = travelSlice.actions
export default travelSlice.reducer
