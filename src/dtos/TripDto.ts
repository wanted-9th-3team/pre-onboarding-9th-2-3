export interface TripDto {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
}

export interface ReservationDto {
  idx: number
  count: number
}
