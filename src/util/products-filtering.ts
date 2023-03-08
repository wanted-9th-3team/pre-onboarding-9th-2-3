import { TypeFilter, TypeProduct } from '../type'

export const filterByPrice = (products: TypeProduct[], filter: TypeFilter) => {
  const filterByPrice = products.filter(
    item => item.price >= filter.minPrice! && item.price <= filter.maxPrice!
  )

  return filterByPrice
}

export const filterBySpace = (products: TypeProduct[], filter: TypeFilter) => {
  const filterBySpace = products.filter(item =>
    filter.space!.find(sub => item.spaceCategory === sub)
  )

  return filterBySpace
}
