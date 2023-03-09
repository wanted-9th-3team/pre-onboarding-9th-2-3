import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { getProductsApi } from '../apis/userApis'
import { productsActions } from './productSlice'
import { TypeProduct } from '../type'
import { AppDispatch } from '.'

export const handler = () => {
  return async (dispatch: Dispatch) => {
    const getProductDatas = async () => {
      const productDatas = await getProductsApi()
      return productDatas
    }

    const productsData: TypeProduct[] = await (await getProductDatas()).data

    dispatch(productsActions.putProductsData(productsData))
  }
}

export const useAppDispatch: () => AppDispatch = useDispatch
