import { TypeFilter, TypeProduct } from '../type'

export const filterByPrice = (products: TypeProduct[], filter: TypeFilter) => {
  const filteredByPrice = products.filter(
    item => item.price >= filter.minPrice! && item.price <= filter.maxPrice!
  )

  return filteredByPrice
}

export const filterBySpace = (products: TypeProduct[], filter: TypeFilter) => {
  const filteredBySpace = products.filter(item =>
    filter.space!.find(sub => item.spaceCategory === sub)
  )

  return filteredBySpace
}
