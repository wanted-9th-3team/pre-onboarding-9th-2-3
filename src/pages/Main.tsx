import { useState } from 'react'
import Mock_Data from '../data/mock_data.json'
// import FilteredCatagory from '../component/Filter'
import Modal from '../component/Modal'

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

interface IMockData {
  idx: number
  name: string
  mainImage: string
  description: string
  spaceCategory: string
  price: number
  maximumPurchases: number
  registrationDate: Date
}

function Home() {
  const [itemList, setItemList] = useState(Mock_Data)
  const [isModal, setIsModal] = useState(false)
  const [modalNumber, setModalNumber] = useState(0)
  const [selectPrice, setSelecttPrice] = useState('')
  const [selectSpace, setSelectSpace] = useState('')

  const modalHandler = (num: number) => {
    setIsModal(!isModal)
    setModalNumber(num)
  }

  const filteredModal = itemList.filter(le => le.idx === modalNumber)

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
      <ul>
        {catagory.map(el => (
          <form key={el.id}>
            <ul>
              {el.price?.map(price => (
                <button
                  key={price}
                  type='button'
                  onClick={() => setSelecttPrice(price)}
                >
                  {price}
                </button>
              ))}
              {el.space?.map(space => (
                <button
                  key={space}
                  type='button'
                  onClick={() => setSelectSpace(space)}
                >
                  {space}
                </button>
              ))}
            </ul>
          </form>
        ))}
        <button
          type='button'
          onClick={() => filterHandler(selectPrice, selectSpace)}
        >
          제출
        </button>
        <button type='button' onClick={resetHandler}>
          리셋
        </button>
      </ul>
      <ul>
        {itemList.map(item => (
          <li key={item.idx}>
            <div>
              <span>{item.idx}</span>
              <span>{item.name}</span>
              <img src={item.mainImage} alt='' />
              <span>{item.price}</span>
              <span>{item.spaceCategory}</span>
            </div>
            <button type='button' onClick={() => modalHandler(item.idx)}>
              예약
            </button>
          </li>
        ))}
      </ul>
      {isModal === true ? <Modal modalData={filteredModal} /> : null}
    </div>
  )
}

export default Home
