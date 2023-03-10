import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITripInfo } from '../../Type'
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from '../../utils/localStorage'

export type TReservationItem = ITripInfo & {
  quantity: number
}

export interface IReservationState {
  readonly reservationItems: TReservationItem[]
}

const existReservation = getLocalStorageItem('reservation')

const initialState: IReservationState = {
  reservationItems: existReservation || [],
}

const addReservationItem = (
  reservationItems: TReservationItem[],
  productToAdd: ITripInfo
): TReservationItem[] => {
  const existingReservationItem = reservationItems.find(
    reservationItem => reservationItem.idx === productToAdd.idx
  )

  if (existingReservationItem) {
    return reservationItems.map(reservationItem =>
      reservationItem.idx === productToAdd.idx
        ? { ...reservationItem, quantity: reservationItem.quantity + 1 }
        : reservationItem
    )
  }

  return [...reservationItems, { ...productToAdd, quantity: 1 }]
}

const RemoveReservationItem = (
  reservationItems: TReservationItem[],
  reservationItemToRemove: ITripInfo
): TReservationItem[] => {
  const existingReservationItem = reservationItems.find(
    item => item.idx === reservationItemToRemove.idx
  )

  if (existingReservationItem && existingReservationItem.quantity === 1) {
    return reservationItems.filter(
      reservationItem => reservationItem.idx !== reservationItemToRemove.idx
    )
  }

  return reservationItems.map(reservationItem =>
    reservationItem.idx === reservationItemToRemove.idx
      ? { ...reservationItem, quantity: reservationItem.quantity - 1 }
      : reservationItem
  )
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservationList: (state, action: PayloadAction<ITripInfo>) => {
      const newReservationItems = addReservationItem(
        state.reservationItems,
        action.payload
      )
      setLocalStorageItem('reservation', newReservationItems)
      state.reservationItems = newReservationItems
    },
    removeReservationList: (state, action: PayloadAction<ITripInfo>) => {
      const newReservationItems = RemoveReservationItem(
        state.reservationItems,
        action.payload
      )
      setLocalStorageItem('reservation', newReservationItems)

      state.reservationItems = newReservationItems
    },
    initReservationItem: state => {
      state.reservationItems = []
      removeLocalStorageItem('reservation')
    },
    clearReservationItem: (state, action: PayloadAction<number>) => {
      const newReservationItems = state.reservationItems.filter(
        items => items.idx !== action.payload
      )
      setLocalStorageItem('reservation', newReservationItems)
      state.reservationItems = newReservationItems
    },
  },
})

export const {
  addReservationList,
  removeReservationList,
  initReservationItem,
  clearReservationItem,
} = reservationSlice.actions
export default reservationSlice.reducer
