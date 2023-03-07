import { useState } from 'react'
import Mock_Data from '../data/mock_data.json'
import Modal from '../Modal'

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
  const [modalNumber, setModalNumber] = useState(0)
  const [selectPrice, setSelecttPrice] = useState('')
  const [selectSpace, setSelectSpace] = useState('')

  const modalHandler = (num: number) => {
    setIsModal(!isModal)
    console.log(isModal)
    setModalNumber(num)
  }

  const BBB = itemList.filter(le => le.idx === modalNumber)
  console.log(BBB)
  const filterHandler = (price: string, space: string) => {
    console.log(price)
    console.log(space)

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
    console.log(filteredSpace)
    setItemList(filteredSpace)
  }
  const resetHandler = () => {
    if (itemList.length !== Mock_Data.length) {
      return setItemList(Mock_Data)
    }
    const AAAA = setItemList.length !== Mock_Data.length
    return AAAA ? setItemList(Mock_Data) : null
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
      {isModal === true ? <Modal modalData={BBB} /> : 'z'}
    </div>
  )
}

export default Home
