import Default from '../layout/Default'
import { useAppDispatch, useAppSelector } from '../store/config'
import { useEffect, useState } from 'react'
import { Card, Container, SimpleGrid, Text } from '@chakra-ui/react'
import Loading from '../modules/Loading'
import ProductItem from '../components/ProductItem'

function MainPage() {
  const [loading, setLoading] = useState(true)
  const { productList } = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
  }, [])

  useEffect(() => {
    console.log('productList : ', productList)
  }, [productList])

  return (
    <Default>
      <Container maxW='container.xl'>
        <Text fontSize={'4xl'}> 방방곡곡의 여행 콘텐츠🔥</Text>
        {loading ? (
          <Loading />
        ) : (
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing='30px'
            pt='10'
            style={{ justifyItems: 'center' }}
          >
            {productList &&
              productList.map((product, idx) => (
                <ProductItem
                  key={idx}
                  price={product.price}
                  idx={product.idx}
                  description={product.description}
                  name={product.name}
                  mainImage={product.mainImage}
                  spaceCategory={product.spaceCategory}
                  maximumPurchases={product.maximumPurchases}
                  registrationDate={product.registrationDate}
                />
              ))}
          </SimpleGrid>
        )}
      </Container>
    </Default>
  )
}

export default MainPage
