export interface ITravelInfo {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
}

export interface ISearchCategory {
  priceRange: number[]
  selectSpace: string[]
}
