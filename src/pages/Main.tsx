import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Mock_Data from '../data/mock_data.json'
// import FilteredCatagory from '../component/Filter'
import ModalComponent from '../component/Modal'
import { open } from '../store/slice/ModalSlice'
import { RootState } from '../store/store'
import ItemListCard from '../component/ItemListCard'

const catagory = [
  {
    id: 0,
    price: ['10000', '20000', '30000'],
  },
  {
    id: 1,
    space: ['강원', '서울', '대구', '부산', '제주'],
  },
]

export interface IMockData {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: string
}

function Home() {
  const [itemList, setItemList] = useState<IMockData[]>(Mock_Data)
  // // const [isModal, setIsModal] = useState(false)
  // const modalopen = useSelector((state: RootState) => state.modalslcie)
  // // const [modalNumber, setModalNumber] = useState(0)
  const [selectPrice, setSelecttPrice] = useState('')
  const [selectSpace, setSelectSpace] = useState('')

  const filterHandler = (price: string, space: string) => {
    const filteredPrice = itemList.filter(list => {
      if (price === '') {
        return list
      }
      if (price === '10000') {
        const Listpri1 = list.price >= 0 && list.price <= +price
        return Listpri1
      }
      if (price === '20000') {
        const Listpri2 = list.price > 10000 && list.price <= +price

        return Listpri2
      }

      const Listpri3 = list.price > 20000 && list.price <= +price
      return Listpri3
    })

    const filteredSpace = filteredPrice.filter(na => {
      if (space === '') {
        return na
      }
      return na.spaceCategory === space
    })
    // const FiteredList = FilteredCatagory(list, price, space)
    setItemList(filteredSpace)
    setSelecttPrice('')
    setSelectSpace('')
  }
  const resetHandler = () => {
    if (itemList.length !== Mock_Data.length) {
      return setItemList(Mock_Data)
    }
    const resetData = setItemList.length !== Mock_Data.length
    return resetData ? setItemList(Mock_Data) : null
  }

  return (
    <div>
      <h1>ListPage</h1>
      <ul>
        {catagory.map(el => (
          <form key={el.id}>
            <ul>
              {el.price?.map(price => (
                <Button
                  colorScheme='teal'
                  variant='outline'
                  key={price}
                  type='button'
                  onClick={() => setSelecttPrice(price)}
                >
                  {price}
                </Button>
              ))}
              {el.space?.map(space => (
                <Button
                  colorScheme='linkedin'
                  variant='outline'
                  key={space}
                  type='button'
                  onClick={() => setSelectSpace(space)}
                >
                  {space}
                </Button>
              ))}
            </ul>
          </form>
        ))}
        <Button
          colorScheme='messenger'
          type='button'
          onClick={() => filterHandler(selectPrice, selectSpace)}
        >
          제출
        </Button>
        <Button colorScheme='gray' type='button' onClick={resetHandler}>
          리셋
        </Button>
      </ul>
      {/* <ul>
        {itemList.map(item => (
          <li key={item.idx}>
            <div>
              <span>{item.idx}</span>
              <span>{item.name}</span>
              <img src={item.mainImage} alt='' />
              <span>{item.price}</span>
              <span>{item.spaceCategory}</span>
            </div>
            <Button type='button' onClick={() => modalHandler(item.idx)}>
              예약
            </Button>
          </li>
        ))}
      </ul> */}
      <ul>
        {itemList &&
          itemList?.map(items => (
            <ItemListCard
              key={items.idx}
              // idx={items.idx}
              // name={items.name}
              // mainImage={items.mainImage}
              // price={items.price}
              // spaceCategory={items.spaceCategory}
              items={items}
            />
          ))}
      </ul>

      {/* {isModal === true ? (
        <ModalComponent
          modalData={filteredModal}
          isModal={isModal}
          closeModal={closeModal}
        />
      ) : null} */}
    </div>
  )
}

export default Home
