export interface TypeProduct {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
  quantity?: number
}

export interface TypeFilter {
  space: string[] | undefined
  minPrice: number | undefined
  maxPrice: number | undefined
}
