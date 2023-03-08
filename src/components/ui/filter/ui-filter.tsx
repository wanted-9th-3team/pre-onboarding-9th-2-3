import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { RootState } from '../../../store'
import { filterActions } from '../../../store/filter-slice'
import { TypeFilter } from '../../../type'

function FilterUI() {
  const productsInfo = useSelector(
    (state: RootState) => state.productsSlice.allProducts
  )

  const [priceFilter, setPriceFilter] = useState<string[] | undefined>()
  const [spaceFilter, setSpaceFilter] = useState<string[]>([])
  const dispatch = useDispatch()

  const deleteDuplicationSpaceHandler = () => {
    const onlySpace = productsInfo.map(item => item.spaceCategory)
    return new Set(onlySpace)
  }

  const spaceFilterHandler = (space: string) => {
    const isExist = spaceFilter.find(item => item === space)

    if (isExist) {
      setSpaceFilter(prev => prev.filter(item => item !== isExist))
    } else {
      setSpaceFilter(prev => [...prev, space])
    }
  }

  const deleteDuplicationSpace = [...deleteDuplicationSpaceHandler()]

  const sumbitHandler = () => {
    const filterData: TypeFilter = {
      space: spaceFilter,
      minPrice: priceFilter !== undefined ? Number(priceFilter[0]) : undefined,
      maxPrice: priceFilter !== undefined ? Number(priceFilter[1]) : undefined,
    }
    dispatch(filterActions.insertFilter(filterData))
  }

  return (
    <Box className='filter'>
      <Box className='filter__price'>
        <Text fontSize='xl' as='b' display='block'>
          가격 필터
        </Text>
        <RangeSlider
          width='30rem'
          defaultValue={[0, 5000]}
          min={0}
          max={100000}
          step={5000}
          onChange={e => setPriceFilter(e.map(item => item.toString()))}
        >
          <RangeSliderTrack bg='blackAlpha.400'>
            <RangeSliderFilledTrack bg='blue.300' />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
        <Box className='range__value' display='flex' justifyContent='center'>
          <Box m={5}>
            <Text>최소 가격</Text>
            <Text>{priceFilter !== undefined ? priceFilter[0] : '미설정'}</Text>
          </Box>
          <Box m={5}>
            <Text>최대 가격</Text>
            <Text>{priceFilter !== undefined ? priceFilter[1] : '미설정'}</Text>
          </Box>
        </Box>
      </Box>

      <Box className='filter__space'>
        <Text fontSize='xl' as='b' display='block'>
          공간 필터
        </Text>
        <ButtonGroup spacing={3}>
          {deleteDuplicationSpace.map(item => (
            <Button
              key={item}
              onClick={() => spaceFilterHandler(item)}
              className={
                spaceFilter.find(it => it === item) && 'button__active'
              }
            >
              {item}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box className='filter__buttons' m={5}>
        <Button
          type='button'
          size='md'
          colorScheme='teal'
          onClick={sumbitHandler}
        >
          적용
        </Button>
      </Box>
    </Box>
  )
}

export default FilterUI
