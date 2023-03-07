import { useState } from 'react'
import Mock_Data from '../data/mock_data.json'
import Modal from '../Modal'

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

const catagory = [
  {
    id: 0,
    price: ['All', '10000', '20000', '30000'],
  },
  {
    id: 1,
    space: ['All', '강원', '서울', '대구', '부산', '제주'],
  },
]

function Home() {
  const [itemList, setItemList] = useState(Mock_Data)
  const [isModal, setIsModal] = useState(false)
  const [selectPrice, setSelecttPrice] = useState('')
  const [selectSpace, setSelectSpace] = useState('')

  const filterHandler = (price: string, space: string) => {
    console.log(price)
    console.log(space)

    const filteredPrice = itemList.filter(list => {
      if (price === 'All') {
        return list
      }
      return list.price <= +price
    })
    const filteredSpace = filteredPrice.filter(na => {
      if (space === 'All') {
        return na
      }
      return na.spaceCategory === space
    })
    console.log(filteredSpace)
    setItemList(filteredSpace)
  }

  return (
    <div>
      <button type='button'>필터</button>
      <ul>
        {catagory.map(el => (
          <form key={el.id}>
            <ul>
              목록:
              {el.price?.map(els => (
                <button
                  key={els}
                  type='button'
                  onClick={() => setSelecttPrice(els)}
                >
                  {els}
                </button>
              ))}
              {el.space?.map(elK => (
                <button
                  key={elK}
                  type='button'
                  onClick={() => setSelectSpace(elK)}
                >
                  {elK}
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
            <button type='button' onClick={() => setIsModal(!isModal)}>
              예약
            </button>
          </li>
        ))}
        {isModal === true ? <Modal /> : null}
      </ul>
    </div>
  )
}

export default Home
